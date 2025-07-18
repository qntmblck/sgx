const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputDir = path.join(__dirname, "public", "img");
const validExtensions = [".jpg", ".jpeg", ".png"];

function processDirectory(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      processDirectory(fullPath); // Recursivo para subcarpetas
    } else {
      const ext = path.extname(fullPath).toLowerCase();
      if (validExtensions.includes(ext)) {
        const outputPath = fullPath.replace(/\.(jpg|jpeg|png)$/i, ".webp");
        sharp(fullPath)
          .webp({ quality: 80 })
          .toFile(outputPath)
          .then(() => console.log(`✔️ Comprimido: ${outputPath}`))
          .catch(err => console.error(`❌ Error en ${file}:`, err));
      }
    }
  });
}

processDirectory(inputDir);
