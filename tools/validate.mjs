// Validates every skills/*/SKILL.md frontmatter and that skills.json is in sync.
// Run: node tools/validate.mjs
import { readdirSync, readFileSync, existsSync } from "node:fs";

const NS = ["S","P","I","CE","D","X"];
const REQ = ["name","description","version","namespace","spiced","status","sub_skills"];
let errors = [];

const skillsDir = "skills";
const dirs = readdirSync(skillsDir, { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name);

for (const dir of dirs) {
  const p = skillsDir + "/" + dir + "/SKILL.md";
  if (!existsSync(p)) { errors.push(dir + ": missing SKILL.md"); continue; }
  const txt = readFileSync(p, "utf8");
  const m = txt.match(/^---\n([\s\S]*?)\n---/);
  if (!m) { errors.push(dir + ": no frontmatter"); continue; }
  const fm = {};
  m[1].split("\n").forEach(line => { const i = line.indexOf(":"); if (i>0) fm[line.slice(0,i).trim()] = line.slice(i+1).trim(); });
  for (const k of REQ) if (!(k in fm)) errors.push(dir + ": missing frontmatter '" + k + "'");
  if (fm.name && fm.name !== dir) errors.push(dir + ": name '" + fm.name + "' does not match folder");
  if (fm.version && !/^\d+\.\d+\.\d+$/.test(fm.version)) errors.push(dir + ": version not semver");
  if (fm.namespace && !NS.includes(fm.namespace)) errors.push(dir + ": namespace '" + fm.namespace + "' invalid");
}

const reg = JSON.parse(readFileSync("skills.json","utf8"));
const regSlugs = new Set(reg.skills.map(s => s.slug));
for (const dir of dirs) if (!regSlugs.has(dir)) errors.push(dir + ": not listed in skills.json");
for (const s of reg.skills) if (!dirs.includes(s.slug)) errors.push("skills.json lists '" + s.slug + "' but no folder exists");

if (errors.length) { console.error("VALIDATION FAILED:\n" + errors.map(e => "  - " + e).join("\n")); process.exit(1); }
console.log("OK: " + dirs.length + " skills valid and in sync with skills.json");
