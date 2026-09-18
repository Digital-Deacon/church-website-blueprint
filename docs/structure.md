---
layout: default
title: Project Structure
description: How the public toolkit and private church projects fit together.
permalink: /structure/
---

<div class="prose">

<p class="eyebrow page-eyebrow">Privacy by architecture</p>

# Public toolkit, private projects

<p class="page-lead">Use one public repository for the reusable framework and one private repository for each church.</p>

```text
church-website-blueprint/       Public
├── docs/                       Published human guide
├── playbook/                   Canonical process documents
├── skills/                     Agent entry point
├── templates/                  Private-project starter
└── scripts/                    Initializer and future checks

grace-church-website/           Private
├── 00-admin/                   State, coverage, questions, decisions, approvals
├── 01-sources/                 Transcripts, documents, current-site evidence, assets
├── 02-ledger/                  Atomic claims and contradictions
├── 03-dna/                     Canonical internal content
├── 04-strategy/                Audiences, journeys, sitemap, redirects
├── 05-copy/                    Page briefs and page copy
├── 06-design/                  design.md, references, layouts
├── 07-build/                   Implementation
└── 08-launch/                  QA, launch, ownership, maintenance
```

## Why projects are separate

Church work can contain transcripts, personal contact information, internal disagreements, sensitive pastoral details, account ownership, and unpublished strategy. A public toolkit provides transparency and collaboration; it is not a safe client workspace.

## GitHub Project board

Use the public repository's GitHub Project to improve the toolkit, not to track a specific church engagement.

Suggested fields:

| Field | Values |
|---|---|
| Status | Inbox, Ready, In progress, In review, Done |
| Area | Human guide, Agent skill, Templates, Critique, Content pipeline, Website |
| Change type | Bug, Clarification, New capability, Field learning, Breaking change |
| Priority | P0, P1, P2, P3 |
| Target release | Version or iteration |
| Evidence | Link to sanitized field report or reproduction |

Suggested views:

- Current release
- Roadmap
- Field reports
- Agent and templates
- Human guide and website
- Breaking changes

Each private church project uses its own `project-state.md` and coverage matrix. A separate private GitHub Project is optional when the engagement needs issue-level coordination.

</div>
