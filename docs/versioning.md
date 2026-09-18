---
layout: default
title: Versions and Improvements
description: How the toolkit changes without silently breaking active church projects.
permalink: /versioning/
---

<div class="prose">

<p class="eyebrow page-eyebrow">Improve without silently breaking</p>

# Versions and improvements

<p class="page-lead">The public toolkit follows semantic versioning. Every private project records the exact version and project schema it began with.</p>

Version 0.1.0 is an experimental field-testing release. Its contracts may evolve more quickly than they will after 1.0, but changes should still be documented and released deliberately.

## Patch

Corrections and clarification that do not require project migration.

## Minor

Backward-compatible additions such as a new optional visitor lens, template, skill mode, or review asset.

## Major

Breaking changes to required files, statuses, approval gates, project state, or skill contracts.

## Improve from field use

When the process struggles in a real engagement:

1. document the observed problem without private church information;
2. explain which human asset or agent behavior failed;
3. add evidence or a reproducible synthetic example;
4. propose the smallest reusable improvement;
5. identify compatibility and migration impact;
6. release it with notes instead of silently changing active projects.

## Pin projects

Each project records:

```yaml
toolkit: church-website-blueprint
toolkit_version: "0.1.0"
project_schema: 1
```

Review release notes before upgrading an active church project.

</div>
