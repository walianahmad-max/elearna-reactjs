import fs from "node:fs";
import path from "node:path";
const routes = JSON.parse(fs.readFileSync("src/data/routes.json", "utf8"));
const routeSet = new Set([
  ...routes.map((r) => r.path),
  "/",
  "/privacy-policy",
  "/terms-of-service",
]);
const errors = [],
  assets = new Set(),
  internal = new Set();
let files = 0;
function audit(file) {
  files++;
  const text = fs.readFileSync(file, "utf8");
  for (const match of text.matchAll(/\/assets\/[^\s"'<>)};,]+/g)) {
    const asset = match[0].replace(/\\$/, "");
    assets.add(asset);
    if (!fs.existsSync("public" + asset))
      errors.push(`${file}: missing ${asset}`);
  }
  if (file.endsWith(".jsx")) {
    for (const match of text.matchAll(/href=\{\s*"(\/[^"#?]*)"\s*\}/g)) {
      internal.add(match[1]);
      if (!routeSet.has(match[1]))
        errors.push(`${file}: missing route ${match[1]}`);
    }
    if (/https:\/\/elearna.webflow.io/.test(text))
      errors.push(`${file}: remote internal link`);
    if (/<script|dangerouslySetInnerHTML/.test(text))
      errors.push(`${file}: unexpected runtime HTML/script`);
  }
}
function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full);
    else if (/\.(jsx|js|json|css)$/.test(full)) audit(full);
  }
}
walk("src");
for (const file of fs.readdirSync("public/assets"))
  if (file.endsWith(".css")) audit("public/assets/" + file);
for (const route of routes) {
  if (!fs.existsSync("src/pages/" + route.file))
    errors.push("Page file missing: " + route.file);
}
const distinct = new Set(routes.map((r) => r.path));
if (distinct.size !== routes.length) errors.push("Duplicate route definitions");
const report = {
  pages: routes.length,
  sourceFilesChecked: files,
  referencedAssets: assets.size,
  internalPaths: internal.size,
  errors: [...new Set(errors)],
};
console.log(JSON.stringify(report, null, 2));
fs.writeFileSync("audit-report.json", JSON.stringify(report, null, 2));
if (errors.length) process.exitCode = 1;
