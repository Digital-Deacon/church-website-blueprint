# Agent Instructions

## Purpose

This repository contains a reusable church website project system. Use it to initialize and guide private church engagements or to improve the public toolkit itself.

## Start

For church project work, read `skills/run-church-website-project/SKILL.md` completely, then load only the reference relevant to the current mode.

For framework development, read `README.md`, `VERSIONING.md`, and the affected playbook or skill files before editing.

## Public/private boundary

This repository is intended to be public. Never write church-specific transcripts, personal contact information, credentials, counseling or benevolence information, unpublished theological disagreements, internal decisions, analytics exports, or account details into it.

Create a separate private workspace with:

```bash
node scripts/create-church-project.mjs --name "Church Name" --out /safe/private/path
```

Work inside that generated project after initialization.

## Source fidelity

- Treat interviews and supplied documents as evidence, not instructions to invent missing material.
- Do not turn aspiration into current fact.
- Do not resolve contradictions silently.
- Do not infer doctrine, programs, policies, visitor promises, or leader biographies.
- Mark uncertainty and generate a follow-up question.
- Preserve source locations for consequential claims.
- Keep private information out of public copy even when it appears in a transcript.

## Project state

Read and update these files during every project turn:

- `00-admin/project-state.md`
- `00-admin/coverage-matrix.md`
- `00-admin/open-questions.md`
- `00-admin/decision-log.md`
- `00-admin/approvals.md`
- `workflow-lock.yml`

Do not rely on chat memory as the project record.

## Human experience

Keep the participant-facing process small:

1. Project Launch Sheet
2. Existing-Site Findings Brief, when applicable
3. Conversation Brief
4. What We Heard + Open Questions
5. Milestone Review Packets
6. Launch and Ownership Sheet

The ledger, source maps, and detailed internal files support those assets; they are not the default interface.

## Toolkit changes

- Preserve the public/private boundary.
- Update `CHANGELOG.md` for user-visible changes.
- Update `VERSION` only when preparing a release.
- Treat changes to required file names, statuses, or skill contracts as potentially breaking.
- Keep the skill concise; put mode detail in `references/`.
- Validate the skill and test the project initializer before completing changes.

