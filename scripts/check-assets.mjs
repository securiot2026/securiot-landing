// Verifies that every local asset referenced by index.html, the web manifest and the stylesheet exists.
import { existsSync, readFileSync } from "node:fs";
import { dirname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const SITE_ORIGIN = "https://securiot-landing.juan-tech.com";
const missing = [];
let checked = 0;

function check(ref, from) {
  if (!ref || ref.startsWith("#") || /^(mailto:|tel:|data:|javascript:)/.test(ref)) return;
  let path = ref;
  if (/^https?:\/\//.test(ref)) {
    if (!ref.startsWith(SITE_ORIGIN)) return; // external URL
    path = ref.slice(SITE_ORIGIN.length);
  }
  path = path.split("#")[0].split("?")[0];
  if (!path) return;
  const target = path.startsWith("/") ? join(root, path) : join(root, dirname(from), path);
  checked += 1;
  if (!existsSync(normalize(target))) missing.push(`${from}: ${ref}`);
}

const html = readFileSync(join(root, "index.html"), "utf8");
for (const m of html.matchAll(/\b(?:src|href|poster|data-src)="([^"]+)"/g)) check(m[1], "index.html");
for (const m of html.matchAll(/\bsrcset="([^"]+)"/g)) {
  for (const part of m[1].split(",")) check(part.trim().split(/\s+/)[0], "index.html");
}
for (const m of html.matchAll(/<meta[^>]+content="([^"]+\.(?:png|jpe?g|svg|webp|ico))"/g)) check(m[1], "index.html");

const manifest = JSON.parse(readFileSync(join(root, "site.webmanifest"), "utf8"));
for (const icon of manifest.icons || []) check(icon.src, "site.webmanifest");

const css = readFileSync(join(root, "css/styles.css"), "utf8");
for (const m of css.matchAll(/url\(\s*["']?([^"')]+)["']?\s*\)/g)) check(m[1], "css/styles.css");

if (missing.length) {
  console.error("Missing local assets:\n" + missing.map((x) => `  ${x}`).join("\n"));
  process.exit(1);
}
console.log(`Assets OK: ${checked} local references resolved`);
