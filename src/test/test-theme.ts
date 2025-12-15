import * as fs from "fs";
import * as path from "path";

const themesDir = path.join(__dirname, "../../themes");
const files = fs.readdirSync(themesDir);

files.forEach((file) => {
  const content = fs.readFileSync(path.join(themesDir, file), "utf-8");
  if (
    content.includes("null") ||
    content.includes("undefined") ||
    content.includes("NaN")
  ) {
    console.error(`❌ ERRO: O tema ${file} contém valores inválidos!`);
    process.exit(1);
  } else {
    console.log(`✅ ${file} validado com sucesso.`);
  }
});
