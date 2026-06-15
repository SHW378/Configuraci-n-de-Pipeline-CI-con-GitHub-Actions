import { access } from "node:fs/promises";

const requiredFiles = [
  "package.json",
  "src/sum.js",
  "tests/sum.test.js",
  "src/public/index.html"
];

for (const file of requiredFiles) {
  await access(file);
}

console.log("Revision basica completada");
