---
layout: default
title: Point an Agent to It
description: How an AI agent initializes and runs a Church Website Blueprint project.
permalink: /agents/
---

<div class="prose">

# Point an agent to it

The repository includes two agent entry points:

1. `AGENTS.md` for any repository-aware coding or general agent.
2. `skills/run-church-website-project/SKILL.md` as a portable, progressively disclosed skill.

## Recommended prompt

```text
Read AGENTS.md and use the run-church-website-project skill.
Initialize a private project for [Church Name].
We [have / do not have] an existing site at [URL].
Help me prepare and run the first conversation.
```

## What the agent does

- initializes a private workspace pinned to a toolkit version;
- reads persistent state before every turn;
- assesses existing evidence when available;
- generates a focused Conversation Brief;
- extracts atomic claims from transcripts;
- identifies gaps, conflicts, decisions, and privacy limits;
- builds approved DNA documents;
- develops visitor strategy, copy, and design handoff;
- prepares bounded review packets;
- validates launch readiness and ownership.

## What the agent may not do

- invent facts or generic church language;
- infer doctrine or resolve disagreements;
- convert aspiration into current reality;
- publish private details;
- treat chat memory as the project record;
- mix private church work into the public toolkit repository.

## Create a project workspace

```bash
node scripts/create-church-project.mjs \
  --name "Grace Church" \
  --out ../grace-church-website
```

The new workspace contains project state, coverage, source, ledger, DNA, strategy, copy, design, build, and launch areas. It should become a separate private Git repository.

## Skill modes

- Start and route
- Existing-site assessment
- Adaptive discovery
- DNA, strategy, copy, and design
- Review, launch, and maintenance

The skill loads only the reference needed for the current mode.

</div>

