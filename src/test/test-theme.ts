import * as fs from "fs";
import * as path from "path";

const themesDir = path.join(__dirname, "../../themes");
const files = fs.readdirSync(themesDir);
const hexRegex =
  /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{4}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/;

function validateColors(obj: any, filePath: string) {
  for (const key in obj) {
    const value = obj[key];
    if (typeof value === "object" && value !== null) {
      validateColors(value, filePath);
    } else if (typeof value === "string") {
      if (key !== "name" && key !== "type" && !hexRegex.test(value)) {
        console.error(
          `❌ ERRO em ${filePath}: Cor inválida detectada: "${value}" na chave "${key}"`
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
      `❌ ERRO: O tema ${file} contém valores nulos ou indefinidos!`
    );
    process.exit(1);
  }

  try {
    const json = JSON.parse(content);
    validateColors(json, file);
    console.log(`✅ ${file} validado com sucesso.`);
  } catch (error) {
    console.error(`❌ ERRO ao fazer parse do JSON em ${file}:`, error);
    process.exit(1);
  }
});
