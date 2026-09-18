#!/usr/bin/env node

import { execFileSync } from "node:child_process";
import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(scriptDirectory, "..");
const docs = path.join(root, "docs");
const output = path.join(root, "_site");
const layout = await readFile(path.join(docs, "_layouts", "default.html"), "utf8");

const pages = [
  { source: "index.md", destination: "index.html", base: "." },
  { source: "humans.md", destination: "humans/index.html", base: ".." },
  { source: "agents.md", destination: "agents/index.html", base: ".." },
  { source: "structure.md", destination: "structure/index.html", base: ".." },
  { source: "versioning.md", destination: "versioning/index.html", base: ".." },
];

function parseDocument(source) {
  const match = source.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { attributes: {}, body: source };
  const attributes = {};
  for (const line of match[1].split("\n")) {
    const separator = line.indexOf(":");
    if (separator < 0) continue;
    attributes[line.slice(0, separator).trim()] = line.slice(separator + 1).trim();
  }
  return { attributes, body: match[2] };
}

function resolveLayout(template, page, content) {
  const title = page.title || "Church Website Blueprint";
  const documentTitle = title === "Church Website Blueprint" ? title : `${title} · Church Website Blueprint`;
  const description = page.description || "A guided, source-faithful church website process.";
  const base = page.base;
  const links = {
    "{{ '/assets/site.css' | relative_url }}": `${base}/assets/site.css`,
    "{{ '/assets/favicon.svg' | relative_url }}": `${base}/assets/favicon.svg`,
    "{{ '/assets/digital-deacon-logo.svg' | relative_url }}": `${base}/assets/digital-deacon-logo.svg`,
    "{{ '/' | relative_url }}": `${base}/`,
    "{{ '/humans/' | relative_url }}": `${base}/humans/`,
    "{{ '/agents/' | relative_url }}": `${base}/agents/`,
    "{{ '/structure/' | relative_url }}": `${base}/structure/`,
    "{{ '/versioning/' | relative_url }}": `${base}/versioning/`,
    "{{ site.github.repository_url | default: '#' }}": "https://github.com/Digital-Deacon/church-website-blueprint",
  };

  let html = template
    .replace("{{ page.description | default: site.description }}", description)
    .replace("{{ page.title | default: site.title }}{% unless page.title == site.title %} · {{ site.title }}{% endunless %}", documentTitle)
    .replace("{{ content }}", content);

  for (const [token, value] of Object.entries(links)) {
    html = html.split(token).join(value);
  }

  return html;
}

await rm(output, { recursive: true, force: true });
await mkdir(path.join(output, "assets"), { recursive: true });
await cp(path.join(docs, "assets", "site.css"), path.join(output, "assets", "site.css"));
await cp(path.join(docs, "assets", "favicon.svg"), path.join(output, "assets", "favicon.svg"));
await cp(path.join(docs, "assets", "digital-deacon-logo.svg"), path.join(output, "assets", "digital-deacon-logo.svg"));

for (const page of pages) {
  const raw = await readFile(path.join(docs, page.source), "utf8");
  const parsed = parseDocument(raw);
  const content = execFileSync("pandoc", ["--from", "gfm", "--to", "html5"], {
    input: parsed.body,
    encoding: "utf8",
  });
  const destination = path.join(output, page.destination);
  await mkdir(path.dirname(destination), { recursive: true });
  await writeFile(destination, resolveLayout(layout, { ...parsed.attributes, base: page.base }, content), "utf8");
}

console.log(`Built documentation preview at ${output}`);
