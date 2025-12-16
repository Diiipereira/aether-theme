import * as fs from "fs";
import * as path from "path";
import { getUiColors } from "./rules/ui";
import { getSemanticRules, getTextMateRules } from "./rules/syntax";
import { darkSpacePalette } from "./lib/palettes/dark-space";
import { coffeePalette } from "./lib/palettes/coffee";
import { coffeeDarkPalette } from "./lib/palettes/coffee-dark";
import { darkPalette } from "./lib/palettes/dark";
import { emeraldPalette } from "./lib/palettes/emerald";
import { lightPalette } from "./lib/palettes/light";

const THEME_DIR = path.join(__dirname, "../themes");

if (!fs.existsSync(THEME_DIR)) {
  fs.mkdirSync(THEME_DIR);
}

const themes = [
  {
    name: "Coffee",
    slug: "aether-coffee",
    palette: coffeePalette,
    type: "dark",
  },
  {
    name: "Coffee Dark",
    slug: "aether-coffee-dark",
    palette: coffeeDarkPalette,
    type: "dark",
  },
  {
    name: "Dark",
    slug: "aether-dark",
    palette: darkPalette,
    type: "dark",
  },
  {
    name: "Dark Space",
    slug: "aether-dark-space",
    palette: darkSpacePalette,
    type: "dark",
  },
  {
    name: "Emerald",
    slug: "aether-emerald",
    palette: emeraldPalette,
    type: "dark",
  },
  {
    name: "Light",
    slug: "aether-light",
    palette: lightPalette,
    type: "light",
  },
];

themes.forEach((themeConfig) => {
  const OUTPUT_PATH = path.join(THEME_DIR, `${themeConfig.slug}.json`);

  const themeJson = {
    name: themeConfig.name,
    type: themeConfig.type,
    semanticHighlighting: true,
    semanticTokenColors: getSemanticRules(themeConfig.palette),
    colors: getUiColors(themeConfig.palette),
    tokenColors: getTextMateRules(themeConfig.palette),
  };

  try {
    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(themeJson, null, 2));
    console.log(`✅ ${themeConfig.name} gerado...`);
  } catch (error) {
    console.error(`❌ Erro ao gerar ${themeConfig.name}:`, error);
    process.exit(1);
  }
});
