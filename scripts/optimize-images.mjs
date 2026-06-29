import { readdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const publicDir = path.join(root, "public");
const sourceDir = path.join(root, "src");
const replacements = new Map();

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full)));
    else files.push(full);
  }
  return files;
}

for (const input of await walk(publicDir)) {
  if (path.extname(input).toLowerCase() !== ".png") continue;
  if ((await stat(input)).size < 350 * 1024) continue;

  const output = input.slice(0, -4) + ".webp";
  const image = sharp(input, { failOn: "none" });
  const metadata = await image.metadata();
  const pipeline = metadata.width && metadata.width > 2400 ? image.resize({ width: 2400, withoutEnlargement: true }) : image;
  await pipeline.webp({ quality: 82, effort: 5 }).toFile(output);

  const from = "/" + path.relative(publicDir, input).split(path.sep).join("/");
  const to = from.slice(0, -4) + ".webp";
  replacements.set(from, to);
}

for (const file of await walk(sourceDir)) {
  if (!/[.](?:tsx?|css)$/.test(file)) continue;
  const original = await readFile(file, "utf8");
  let updated = original;
  for (const [from, to] of replacements) updated = updated.split(from).join(to);
  if (updated !== original) await writeFile(file, updated, "utf8");
}

console.log(`Optimized ${replacements.size} large PNG assets and updated source references.`);