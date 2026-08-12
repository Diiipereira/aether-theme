/**
 * Diffs a VS Code build's registered color IDs against the committed baseline.
 * Reports only what was added or removed since the last review.
 *
 *   npx ts-node scripts/color-ids.ts --bundle <path>            check
 *   npx ts-node scripts/color-ids.ts --bundle <path> --update   rewrite baseline
 */
import * as fs from "fs";
import * as path from "path";

const BASELINE = path.join(__dirname, "known-color-ids.json");

type Baseline = { vscodeVersion: string; ids: string[] };
type ExtensionManifest = { contributes?: { colors?: { id?: string }[] } };
type PackageJson = { version?: string };
type ThemeFile = { colors?: Record<string, string> };

function arg(name: string): string | undefined {
  const i = process.argv.indexOf(`--${name}`);
  return i === -1 ? undefined : process.argv[i + 1];
}

// registerColor(id, defaults, localize(n, null)) after minification
function extractFromBundle(source: string): Set<string> {
  const re =
    /\("([a-zA-Z][A-Za-z0-9]*(?:\.[A-Za-z0-9]+)*)",(?:\{[^{}]{0,600}\}|[^,()]{0,120}|[A-Za-z0-9_$.]+\([^()]{0,120}\)),\s*[a-zA-Z_$]\(\d+,\s*null\)/g;
  const ids = new Set<string>();
  let m: RegExpExecArray | null;
  while ((m = re.exec(source))) ids.add(m[1]);
  return ids;
}

// colors declared by bundled extensions under contributes.colors
function extractFromExtensions(appRoot: string): Set<string> {
  const ids = new Set<string>();
  const dir = path.join(appRoot, "extensions");
  if (!fs.existsSync(dir)) return ids;

  for (const ext of fs.readdirSync(dir)) {
    const pkg = path.join(dir, ext, "package.json");
    if (!fs.existsSync(pkg)) continue;
    try {
      const json = JSON.parse(fs.readFileSync(pkg, "utf8")) as ExtensionManifest;
      for (const c of json.contributes?.colors ?? [])
        if (c.id !== undefined) ids.add(c.id);
    } catch {
      // an unreadable extension manifest must not abort the scan
    }
  }
  return ids;
}

// Some IDs are built in a loop and escape the regex. A literal match is enough:
// if VS Code drops the color, the literal goes with it.
function confirmByLiteral(source: string, candidates: string[]): string[] {
  return candidates.filter((id) => source.includes(`"${id}"`));
}

function themeKeys(): Set<string> {
  const dir = path.join(__dirname, "..", "themes");
  const keys = new Set<string>();
  for (const f of fs.readdirSync(dir).filter((f) => f.endsWith(".json")))
    for (const k of Object.keys(
      (JSON.parse(fs.readFileSync(path.join(dir, f), "utf8")) as ThemeFile)
        .colors ?? {},
    ))
      keys.add(k);
  return keys;
}

function main() {
  const bundle = arg("bundle");
  if (!bundle) {
    console.error("❌ pass --bundle <path to workbench.desktop.main.js>");
    process.exit(2);
  }
  if (!fs.existsSync(bundle)) {
    console.error(`❌ bundle not found: ${bundle}`);
    process.exit(2);
  }

  // .../resources/app/out/vs/workbench/workbench.desktop.main.js -> .../resources/app
  const appRoot = path.resolve(path.dirname(bundle), "..", "..", "..");
  const version = (() => {
    try {
      const pkg = JSON.parse(
        fs.readFileSync(path.join(appRoot, "package.json"), "utf8"),
      ) as PackageJson;
      return pkg.version ?? "unknown";
    } catch {
      return "unknown";
    }
  })();

  const source = fs.readFileSync(bundle, "utf8");
  const ids = new Set([
    ...extractFromBundle(source),
    ...extractFromExtensions(appRoot),
  ]);
  for (const id of confirmByLiteral(
    source,
    [...themeKeys()].filter((k) => !ids.has(k)),
  ))
    ids.add(id);
  const sorted = [...ids].sort();

  if (process.argv.includes("--update")) {
    const out: Baseline = { vscodeVersion: version, ids: sorted };
    fs.writeFileSync(BASELINE, JSON.stringify(out, null, 2) + "\n");
    console.log(
      `✅ baseline rewritten: ${sorted.length} IDs (VS Code ${version})`,
    );
    return;
  }

  const base = JSON.parse(fs.readFileSync(BASELINE, "utf8")) as Baseline;
  const known = new Set(base.ids);
  const added = sorted.filter((k) => !known.has(k));
  const removed = base.ids.filter((k) => !ids.has(k));

  console.log(`VS Code scanned: ${version} (baseline: ${base.vscodeVersion})`);
  console.log(
    `registered IDs: ${sorted.length} | baseline: ${base.ids.length}`,
  );

  if (!added.length && !removed.length) {
    console.log("✅ color registry unchanged.");
    return;
  }

  const covered = themeKeys();
  if (added.length) {
    console.log(`\n🆕 ${added.length} new key(s):`);
    for (const k of added) console.log(`   ${k}`);
  }
  if (removed.length) {
    console.log(`\n🗑️  ${removed.length} removed key(s):`);
    for (const k of removed)
      console.log(
        `   ${k}${covered.has(k) ? "   ⚠️  still set by the themes" : ""}`,
      );
  }
  process.exit(1);
}

main();
