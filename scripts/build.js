import { mkdir, copyFile } from "node:fs/promises";

await mkdir("dist", { recursive: true });
await copyFile("src/public/index.html", "dist/index.html");

console.log("Build generado en dist/");
