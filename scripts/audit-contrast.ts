/**
 * Fails the build when theme text drops below its contrast bar.
 *
 * Checks every foreground/background pair the workbench composites, plus every
 * syntax color against the editor background. Exceptions live in ALLOWLIST and
 * each one carries the reason it is allowed.
 *
 *   npx ts-node scripts/audit-contrast.ts
 */
import * as fs from "fs";
import * as path from "path";

const THEMES_DIR = path.join(__dirname, "..", "themes");

type TokenRule = {
  name?: string;
  scope?: string | string[];
  settings?: { foreground?: string };
};

type ThemeFile = {
  colors?: Record<string, string>;
  tokenColors?: TokenRule[];
};

const TEXT = 4.5; // WCAG AA, body text
const UI = 3.0; // WCAG AA, non-text UI and secondary text

// Pairs the workbench composites without saying so in the key names.
const COMPOSED_PAIRS: [string, string][] = [
  ["scmGraph.historyItemHoverLabelForeground", "scmGraph.historyItemRefColor"],
  [
    "scmGraph.historyItemHoverLabelForeground",
    "scmGraph.historyItemRemoteRefColor",
  ],
  [
    "scmGraph.historyItemHoverLabelForeground",
    "scmGraph.historyItemBaseRefColor",
  ],
];

// Keys held to the UI bar instead of the text bar, with the reason why.
const ALLOWLIST: Record<string, string> = {
  "editorInlayHint.foreground":
    "type hints are deliberately dim; VS Code's own default is dimmer",
  "editorGhostText.foreground":
    "AI suggestions must not compete with real code",
  "editor.inlineValuesForeground": "debug values overlay live code",
  "titleBar.inactiveForeground":
    "unfocused window; VS Code defaults this to 60% of active",
  "tab.unfocusedInactiveForeground": "dimmest state in the UI by design",
  "tab.unfocusedActiveForeground": "unfocused editor group",
  "tab.unfocusedHoverForeground": "unfocused editor group",
  "agentsVoice.speakingForeground": "icon, not text",
  "terminalCursor.foreground": "cursor block, not text",
  "welcomePage.progress.foreground": "progress bar, not text",
  "inlineEdit.gutterIndicator.primaryForeground": "gutter icon, not text",
  "inlineEdit.gutterIndicator.successfulForeground": "gutter icon, not text",
  "statusBarItem.errorHoverForeground": "transient hover state",
  "statusBarItem.offlineHoverForeground": "transient hover state",
  "statusBarItem.warningHoverForeground": "transient hover state",
  "textPreformat.foreground": "inline code inside prose",
};

// Secondary prose in the editor: readable, but never competing with code.
const isSecondaryToken = (name: string) => /comment|quote/i.test(name);

type Rgba = [number, number, number, number];

function parse(hex: string): Rgba {
  let h = hex.replace("#", "");
  if (h.length === 3)
    h = h
      .split("")
      .map((c) => c + c)
      .join("");
  if (h.length === 6) h += "ff";
  return [0, 2, 4, 6].map((i) => parseInt(h.substr(i, 2), 16)) as Rgba;
}

function composite(fg: Rgba, bg: Rgba): Rgba {
  const a = fg[3] / 255;
  return [
    ...([0, 1, 2].map((i) => Math.round(fg[i] * a + bg[i] * (1 - a))) as [
      number,
      number,
      number,
    ]),
    255,
  ];
}

function luminance(c: Rgba): number {
  const s = c.slice(0, 3).map((v) => {
    const x = v / 255;
    return x <= 0.03928 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * s[0] + 0.7152 * s[1] + 0.0722 * s[2];
}

function ratio(fg: Rgba, bg: Rgba): number {
  const a = luminance(fg);
  const b = luminance(bg);
  return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
}

type Failure = { theme: string; what: string; got: number; want: number };

function auditTheme(file: string): Failure[] {
  const theme = JSON.parse(
    fs.readFileSync(path.join(THEMES_DIR, file), "utf8"),
  ) as ThemeFile;
  const colors: Record<string, string> = theme.colors ?? {};
  const canvas = parse(colors["editor.background"]);
  const failures: Failure[] = [];

  const pairs: [string, string][] = [...COMPOSED_PAIRS];
  for (const key of Object.keys(colors)) {
    const bgKey = key.endsWith(".foreground")
      ? key.replace(/\.foreground$/, ".background")
      : key.endsWith("Foreground")
        ? key.replace(/Foreground$/, "Background")
        : null;
    if (bgKey && colors[bgKey]) pairs.push([key, bgKey]);
  }

  for (const [fgKey, bgKey] of pairs) {
    if (!colors[fgKey] || !colors[bgKey]) continue;
    const bg = composite(parse(colors[bgKey]), canvas);
    const got = ratio(composite(parse(colors[fgKey]), bg), bg);
    const want = fgKey in ALLOWLIST ? UI : TEXT;
    if (got < want)
      failures.push({ theme: file, what: `${fgKey} on ${bgKey}`, got, want });
  }

  for (const rule of theme.tokenColors ?? []) {
    const fg = rule.settings?.foreground;
    if (fg === undefined) continue;
    const name =
      rule.name ??
      (Array.isArray(rule.scope) ? rule.scope[0] : rule.scope) ??
      "?";
    const want = isSecondaryToken(name) ? UI : TEXT;
    const got = ratio(composite(parse(fg), canvas), canvas);
    if (got < want)
      failures.push({
        theme: file,
        what: `syntax "${name}" (${fg})`,
        got,
        want,
      });
  }

  return failures;
}

const files = fs.readdirSync(THEMES_DIR).filter((f) => f.endsWith(".json"));
const failures = files.flatMap(auditTheme);

if (!failures.length) {
  console.log(`✅ contrast audit passed for ${files.length} themes.`);
  process.exit(0);
}

console.error(`❌ ${failures.length} contrast failure(s):\n`);
for (const f of failures)
  console.error(
    `   ${f.theme.padEnd(24)} ${f.got.toFixed(2)} < ${f.want}   ${f.what}`,
  );
process.exit(1);
