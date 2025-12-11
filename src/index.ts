import * as fs from "fs";
import * as path from "path";
import { getUiColors } from "./rules/ui";
import { getTokenRules, getSemanticRules } from "./rules/tokens";
import { darkSpacePalette } from "./lib/palettes/dark-space";
import { coffeePalette } from "./lib/palettes/coffee";
import { coffeeDarkPalette } from "./lib/palettes/coffe-dark";
import { darkPalette } from "./lib/palettes/dark";
import { lightPalette } from "./lib/palettes/light";

const THEME_DIR = path.join(__dirname, "../themes");

if (!fs.existsSync(THEME_DIR)) {
  fs.mkdirSync(THEME_DIR);
}

const themes = [
  {
    name: "Aether Dark Space",
    slug: "aether-dark-space",
    palette: darkSpacePalette,
    type: "dark",
  },
  {
    name: "Aether Coffee",
    slug: "aether-coffee",
    palette: coffeePalette,
    type: "dark",
  },
  {
    name: "Aether Coffee Dark",
    slug: "aether-coffee-dark",
    palette: coffeeDarkPalette,
    type: "dark",
  },
  {
    name: "Aether Dark",
    slug: "aether-dark",
    palette: darkPalette,
    type: "dark",
  },
  {
    name: "Aether Light",
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
    tokenColors: getTokenRules(themeConfig.palette),
  };

  try {
    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(themeJson, null, 2));
    console.log(`✅ ${themeConfig.name} gerado em: ${OUTPUT_PATH}`);
  } catch (error) {
    console.error(`❌ Erro ao gerar ${themeConfig.name}:`, error);
  }
});

console.log("---------------------------------------------------");
