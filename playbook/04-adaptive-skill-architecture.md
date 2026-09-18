# Adaptive Skill Architecture

## Goal

Implement the workflow as small, composable skills rather than one enormous “build a church website” command. Each skill has a bounded job, declared inputs, persistent outputs, and a next-step recommendation. Project state connects them.

Impeccable is an **architectural reference only** for the critique concept. The reusable ideas are stable target resolution, separate evidence passes, synthesized findings, consequence-based priorities, persisted assessments, and explicit next-step routing. The church-site critique has its own rubric, visitor lenses, outputs, and source-fidelity rules; it does not inherit Impeccable's frontend heuristics or require Impeccable to run.

## Shared project state

Every skill reads and updates:

- `project-state.md` — current phase, project path, milestone, risks, and next action;
- `coverage-matrix.md` — topic-by-topic discovery completeness;
- `decision-log.md` — approved strategic/design decisions;
- `open-questions.md` — unresolved questions with owners;
- `approvals.md` — approval scope, person, and date;
- source and artifact indexes.

No skill should rely only on chat memory. A project may span people, agents, and weeks.

## Proposed skills

| Skill | Human trigger | Core job | Primary output |
|---|---|---|---|
| `church-site-init` | “Start a church website project” | Conduct launch conversation and choose project path | Launch Sheet + project state |
| `church-site-capture` | Existing site detected | Inventory pages, claims, assets, URLs, and integrations | Site inventory + candidate ledger items |
| `church-site-critique` | Existing site detected or reassessment requested | Test visitor fit, hierarchy, and next-step clarity | Existing-Site Findings Brief |
| `church-site-interview` | Discovery gaps exist | Generate and facilitate the next best conversation | Conversation Brief + transcript |
| `church-site-extract` | New transcript/source arrives | Convert evidence to atomic classified claims | Updated fact ledger |
| `church-site-gaps` | After extraction | Update coverage and select the correct next action | What We Heard + gap report |
| `church-site-dna` | Topic coverage sufficient | Build or update canonical DNA documents | DNA drafts + source maps |
| `church-site-strategy` | DNA approved | Define audience, outcomes, sitemap, page jobs, and CTA | Strategy review packet |
| `church-site-copy` | Page brief approved | Create source-faithful public copy | Page-copy review packet |
| `church-site-design` | Copy and brand evidence ready | Create `design.md` and representative layouts | Visual-direction packet |
| `church-site-qa` | Staging site ready | Validate fidelity, visitor journeys, accessibility, and function | Launch-readiness packet |
| `church-site-maintain` | Site launched | Check freshness, ownership, and broken journeys | Maintenance report + updates |

## Skill contract

Every skill should declare:

1. **When it runs** — explicit trigger and prerequisites.
2. **What it reads** — precise files, URLs, and approved sources.
3. **What it may infer** — usually strategy proposals, never church facts.
4. **What it writes** — stable artifact paths.
5. **What it never does** — especially fact invention, hidden conflict resolution, and unauthorized publication.
6. **How it reports uncertainty** — statuses and questions.
7. **Completion test** — objective criteria for finishing.
8. **Next-step routing** — which skill or human decision should follow.

## Routing logic

```text
START
  ↓
church-site-init
  ├─ new/no site ───────────────────────┐
  ├─ existing site → capture → critique ┤
  └─ unclear → diagnostic interview ────┘
                                         ↓
                                church-site-interview
                                         ↓
                                      extract
                                         ↓
                                       gaps
                         ┌───────────────┴───────────────┐
                         │                               │
                 More discovery needed          Coverage sufficient
                         │                               │
             next interview/document/decision           ↓
                         └────────────────────────────── dna
                                                         ↓
                                             strategy → copy → design
                                                         ↓
                                                   build → qa
                                                         ↓
                                                     maintain
```

## `church-site-init`

### Reads

- nothing beyond user-provided context;
- optional known URL or documents.

### Human experience

Runs a 15–30 minute launch conversation using the Project Launch Sheet. It accepts incomplete answers.

### Writes

- `project-brief.md`;
- `project-state.md`;
- initial `coverage-matrix.md`;
- role/approval map;
- next action.

### Completion test

The project path, primary contact, reason for the project, likely approvers, and next action are known or explicitly marked unknown.

## `church-site-capture`

### Reads

- current public website;
- authorized analytics, CMS, or exports when available.

### Writes

- page/URL inventory;
- navigation map;
- forms/integration map;
- asset inventory;
- candidate facts with source URLs;
- redirects worksheet for redesigns.

### Boundary

Captures what exists. It does not decide that current content is correct or worthy of reuse.

## `church-site-critique`

Following that general evidence-based critique architecture:

1. resolve a stable target;
2. perform a visitor-journey assessment;
3. perform objective technical/accessibility checks separately;
4. synthesize rather than concatenate;
5. prioritize findings by visitor consequence;
6. persist a snapshot so later reassessments can show change;
7. feed findings into discovery questions rather than automatically rewriting the site.

### Distinctive rubric

It evaluates findability, clarity, completeness, confidence, fit transparency, hierarchy, and next-step continuity. Persona lenses test actual tasks. It never scores whether the church offers the reviewer’s preferred theology, music, demographics, or programs.

## `church-site-interview`

### Reads

- project state;
- coverage matrix;
- existing-site findings;
- prior transcripts and ledger;
- open questions and decision log;
- role of the next participant.

### Generates

A short Conversation Brief with:

- what is already known;
- 5–8 opening questions;
- listen-for cues and optional probes;
- claims to verify;
- decisions appropriate to that participant;
- a completion test for each subject.

### Boundary

It does not ask every question in the master guide. It chooses the questions with the highest information value for the current milestone.

## `church-site-extract`

### Reads

- one new transcript or document at a time;
- existing ledger to detect duplicates and conflicts.

### Writes

- atomic claims with source attribution;
- contradictions;
- privacy flags;
- assets/documents mentioned;
- candidate voice language and quotations;
- speaker/authority notes.

### Boundary

It does not produce polished public copy.

## `church-site-gaps`

### Reads

- updated ledger;
- coverage matrix;
- current milestone requirements.

### Chooses one next action per gap

- ask in the next interview;
- send to a named specialist;
- request an existing document or asset;
- require a church decision;
- verify an existing-site claim;
- defer beyond launch;
- mark not applicable.

### Writes

- updated coverage;
- What We Heard + Open Questions;
- next Conversation Brief or non-interview request;
- updated project state.

## Research augmentation

External research is a separate optional branch. Use it when the project needs evidence about visitor behavior, accessibility, technology, local search, comparable information patterns, or demographic context.

Research may:

- improve the assessment rubric;
- suggest questions the church has not considered;
- inform labeled strategic recommendations;
- provide standards and implementation guidance.

Research may not:

- supply facts about the church;
- decide the church's theology, identity, priorities, or programs;
- convert broad preferences into a claim that all visitors want the same thing;
- override direct evidence without explaining the conflict.

Store research separately from church-source material and label every recommendation that depends on it.

## Milestone orchestration

The orchestrator should surface one milestone at a time:

1. **Project understood** — path, scope, roles, constraints.
2. **Discovery sufficient** — launch-critical topics covered or explicitly deferred.
3. **Foundation approved** — DNA is canonical and source-faithful.
4. **Visitor strategy approved** — audience, journeys, sitemap, pages, CTA.
5. **Copy approved** — public wording is faithful and understandable.
6. **Design approved** — visual system supports the content and identity.
7. **Launch approved** — staging, integrations, ownership, and QA pass.

The human sees the relevant review packet. The orchestrator updates all supporting state after approval.

## Why this stays adaptable

- Skills share stable project state rather than assuming one uninterrupted session.
- Evidence can arrive before, during, or after interviews.
- The same topic may be covered by one leader, several specialists, or an approved document.
- The gap analyzer decides whether another interview is even the right next step.
- Existing sites contribute evidence and user-journey failures before the first long interview.
- New sites are not penalized for having no prior assets.
- A targeted redesign can run the same loop on a bounded set of journeys and pages.
