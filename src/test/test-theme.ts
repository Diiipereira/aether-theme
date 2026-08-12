import * as fs from "fs";
import * as path from "path";

const themesDir = path.join(__dirname, "../../themes");
const files = fs.readdirSync(themesDir);
const hexRegex =
  /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{4}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/;
const NON_COLOR_KEYS = new Set(["name", "type", "fontStyle", "scope"]);

function validateColors(obj: unknown, filePath: string) {
  if (typeof obj !== "object" || obj === null) return;
  for (const [key, value] of Object.entries(obj)) {
    if (NON_COLOR_KEYS.has(key)) continue;
    if (typeof value === "object" && value !== null) {
      validateColors(value, filePath);
    } else if (typeof value === "string") {
      if (!hexRegex.test(value)) {
        console.error(
          `❌ ERROR in ${filePath}: invalid color "${value}" at key "${key}"`
        );
        process.exit(1);
      }
    }
  }
}

files.forEach((file) => {
  const filePath = path.join(themesDir, file);
  const content = fs.readFileSync(filePath, "utf-8");

  if (
    content.includes("null") ||
    content.includes("undefined") ||
    content.includes("NaN")
  ) {
    console.error(
      `❌ ERROR: theme ${file} contains null or undefined values!`
    );
    process.exit(1);
  }

  try {
    const json: unknown = JSON.parse(content);
    validateColors(json, file);
    console.log(`✅ ${file} validated.`);
  } catch (error) {
    console.error(`❌ ERROR parsing JSON in ${file}:`, error);
    process.exit(1);
  }
});
