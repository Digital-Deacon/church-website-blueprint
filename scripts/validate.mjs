#!/usr/bin/env node

import { execFileSync } from "node:child_process";
import { mkdtemp, readFile, rm, stat } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(scriptDirectory, "..");
const failures = [];

async function requireFile(relativePath) {
  try {
    const details = await stat(path.join(root, relativePath));
    if (!details.isFile()) failures.push(`${relativePath} is not a file`);
  } catch {
    failures.push(`Missing required file: ${relativePath}`);
  }
}

const required = [
  "README.md",
  "AGENTS.md",
  "VERSION",
  "CHANGELOG.md",
  "VERSIONING.md",
  "GITHUB-SETUP.md",
  "docs/index.md",
  "docs/_layouts/default.html",
  "docs/assets/site.css",
  "playbook/README.md",
  "skills/run-church-website-project/SKILL.md",
  "templates/church-project/00-admin/project-state.md",
  "templates/church-project/00-admin/coverage-matrix.md",
  "scripts/create-church-project.mjs",
];

await Promise.all(required.map(requireFile));

const version = (await readFile(path.join(root, "VERSION"), "utf8")).trim();
if (!/^\d+\.\d+\.\d+$/.test(version)) failures.push(`Invalid semantic version: ${version}`);

const skill = await readFile(path.join(root, "skills", "run-church-website-project", "SKILL.md"), "utf8");
if (!skill.startsWith("---\nname: run-church-website-project\n")) failures.push("Skill frontmatter name is missing or incorrect");
if (!/\ndescription: .{60,}\n---\n/.test(skill)) failures.push("Skill description is missing or too short");
if (skill.includes("TODO")) failures.push("Skill contains an unresolved TODO");

const testRoot = await mkdtemp(path.join(os.tmpdir(), "church-blueprint-validate-"));
const projectPath = path.join(testRoot, "validation-church");

try {
  execFileSync(process.execPath, [
    path.join(root, "scripts", "create-church-project.mjs"),
    "--name",
    "Validation Church",
    "--out",
    projectPath,
  ], { stdio: "pipe" });

  const lock = await readFile(path.join(projectPath, "workflow-lock.yml"), "utf8");
  if (!lock.includes(`toolkit_version: "${version}"`)) failures.push("Generated project does not pin the current toolkit version");
  if (!lock.includes('project_slug: "validation-church"')) failures.push("Generated project slug is incorrect");

  await requireGenerated("AGENTS.md");
  await requireGenerated("00-admin/project-state.md");
  await requireGenerated("02-ledger/fact-ledger.md");
  await requireGenerated("06-design/design.md");
  await requireGenerated("08-launch/launch-and-ownership.md");
} catch (error) {
  failures.push(`Project initializer failed: ${error.message}`);
} finally {
  await rm(testRoot, { recursive: true, force: true });
}

async function requireGenerated(relativePath) {
  try {
    await stat(path.join(projectPath, relativePath));
  } catch {
    failures.push(`Generated project missing: ${relativePath}`);
  }
}

if (failures.length > 0) {
  console.error("Validation failed:\n");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Validation passed for Church Website Blueprint ${version}.`);

