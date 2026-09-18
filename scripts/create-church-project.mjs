#!/usr/bin/env node

import { cp, mkdir, readFile, readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

function parseArgs(argv) {
  const args = {};
  for (let index = 0; index < argv.length; index += 1) {
    const key = argv[index];
    if (!key.startsWith("--")) continue;
    const value = argv[index + 1];
    if (!value || value.startsWith("--")) {
      args[key.slice(2)] = true;
      continue;
    }
    args[key.slice(2)] = value;
    index += 1;
  }
  return args;
}

function slugify(value) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

async function pathExists(target) {
  try {
    await stat(target);
    return true;
  } catch (error) {
    if (error.code === "ENOENT") return false;
    throw error;
  }
}

async function ensureEmptyTarget(target) {
  if (!(await pathExists(target))) return;
  const entries = await readdir(target);
  if (entries.length > 0) {
    throw new Error(`Target directory is not empty: ${target}`);
  }
}

async function replaceTokens(target, tokens) {
  const entries = await readdir(target, { withFileTypes: true });
  for (const entry of entries) {
    const entryPath = path.join(target, entry.name);
    if (entry.isDirectory()) {
      await replaceTokens(entryPath, tokens);
      continue;
    }
    if (!/\.(md|ya?ml|json|txt|gitignore)$/i.test(entry.name) && entry.name !== ".gitignore") {
      continue;
    }
    let contents = await readFile(entryPath, "utf8");
    for (const [token, value] of Object.entries(tokens)) {
      contents = contents.split(`{{${token}}}`).join(value);
    }
    await writeFile(entryPath, contents, "utf8");
  }
}

const args = parseArgs(process.argv.slice(2));

if (args.help) {
  console.log(`Usage:
  node scripts/create-church-project.mjs --name "Church Name" --out /path/to/private-project

Options:
  --name  Required church or project name
  --out   Required empty or nonexistent output directory
  --help  Show this help`);
  process.exit(0);
}

if (typeof args.name !== "string" || typeof args.out !== "string") {
  console.error("Both --name and --out are required. Use --help for usage.");
  process.exit(1);
}

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const repositoryRoot = path.resolve(scriptDirectory, "..");
const templateDirectory = path.join(repositoryRoot, "templates", "church-project");
const outputDirectory = path.resolve(args.out);
const version = (await readFile(path.join(repositoryRoot, "VERSION"), "utf8")).trim();
const slug = slugify(args.name);

if (!slug) {
  console.error("The project name must contain at least one letter or number.");
  process.exit(1);
}

try {
  await ensureEmptyTarget(outputDirectory);
  await mkdir(outputDirectory, { recursive: true });
  await cp(templateDirectory, outputDirectory, { recursive: true, errorOnExist: false });
  await replaceTokens(outputDirectory, {
    PROJECT_NAME: args.name,
    SLUG: slug,
    DATE: new Date().toISOString().slice(0, 10),
    WORKFLOW_VERSION: version,
  });

  console.log(`Created private church project workspace:
${outputDirectory}

Toolkit version: ${version}
Project slug: ${slug}

Next steps:
1. Initialize this directory as a private Git repository.
2. Read AGENTS.md.
3. Complete 00-admin/project-brief.md through a launch conversation.`);
} catch (error) {
  console.error(error.message);
  process.exit(1);
}

