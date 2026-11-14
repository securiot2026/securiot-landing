// Verifies that the ES and EN dictionaries in js/i18n.js expose the same keys,
// and that every data-i18n key used in index.html exists in both.
import { readFileSync } from "node:fs";
import vm from "node:vm";

const source = readFileSync(new URL("../js/i18n.js", import.meta.url), "utf8");
const sandbox = { window: { navigator: { language: "es" } }, document: {}, localStorage: {} };
sandbox.window.document = sandbox.document;
sandbox.globalThis = sandbox;
try {
  vm.runInNewContext(source, sandbox);
} catch {
  // The IIFE may touch the DOM after defining the dictionaries; only the exported object matters.
}
const api = sandbox.window.SecurIoTi18n || sandbox.window.i18n || Object.values(sandbox.window).find((v) => v && v.dictionaries);
if (!api || !api.dictionaries) {
  console.error("Could not read the dictionaries exported by js/i18n.js");
  process.exit(1);
}

const es = Object.keys(api.dictionaries["es-419"] || {});
const en = Object.keys(api.dictionaries["en-US"] || {});
const missingInEn = es.filter((k) => !en.includes(k));
const missingInEs = en.filter((k) => !es.includes(k));

const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
const used = [...html.matchAll(/data-i18n(?:-[a-z-]+)?="([^"]+)"/g)].map((m) => m[1]);
const undefinedKeys = [...new Set(used)].filter((k) => !es.includes(k) || !en.includes(k));

let failed = false;
for (const [label, list] of [
  ["Keys in ES but missing in EN", missingInEn],
  ["Keys in EN but missing in ES", missingInEs],
  ["Keys used in index.html but missing in a dictionary", undefinedKeys],
]) {
  if (list.length) {
    failed = true;
    console.error(`${label}: ${list.join(", ")}`);
  }
}
if (failed) process.exit(1);
console.log(`i18n OK: ${es.length} keys in ES and EN, ${new Set(used).size} keys used in index.html`);
