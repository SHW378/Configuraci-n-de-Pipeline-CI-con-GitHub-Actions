import { mkdir, writeFile } from "node:fs/promises";

await mkdir("dist", { recursive: true });
await writeFile(
  "dist/index.html",
  "<!doctype html><html lang=\"es\"><head><meta charset=\"utf-8\"><title>CI Node.js</title></head><body><h1>Pipeline CI activo</h1></body></html>\n",
  "utf8"
);

console.log("Build generado en dist/");
