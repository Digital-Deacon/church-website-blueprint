# Human-Facing Assets

## Design principle

The underlying project may contain transcripts, ledgers, DNA documents, source maps, strategy files, and technical requirements. The human experience should be much simpler.

A church representative should be able to begin with no homework. The process should guide them through one useful conversation at a time, reflect back what was learned, and ask only for the next information or decision that matters.

## The six assets people use

| Asset | Primary user | When it appears | What the person does |
|---|---|---|---|
| Project Launch Sheet | Project lead and church representative | First conversation | Establishes project path and immediate next step |
| Existing-Site Findings Brief | Project lead and church representative | Existing sites only | Corrects what the assessment inferred and identifies priorities |
| Conversation Brief | Facilitator | Before each interview | Guides a focused, adaptive conversation |
| What We Heard + Open Questions | Interview participants | After each interview | Corrects, confirms, supplies missing items, and assigns decisions |
| Milestone Review Packet | Relevant approvers | At approval gates | Approves one layer without reviewing the whole project |
| Launch and Ownership Sheet | Website owner and leadership | Before launch | Confirms responsibilities, access, cadence, and escalation |

The fact ledger, coverage matrix, and source maps power these assets. They are available when provenance matters, but they are not the default human interface.

## Asset 1 — Project Launch Sheet

### Purpose

Turn a zero-preparation conversation into an initialized project. This is filled in live by the facilitator, not assigned as homework.

### Opening questions

1. Are we creating the church's first website, replacing an existing website, or improving selected parts?
2. What prompted the project now?
3. What do you hope becomes easier or clearer because of it?
4. Who knows the church well enough to help us uncover the content?
5. Who needs to approve facts, theology, design, spending, and launch?
6. Is there a current website, domain, brand, deadline, or platform we need to preserve?
7. What is the best next step after this conversation?

### Captured state

```markdown
# Project Launch Sheet

## Church and project
- Church:
- Primary contact:
- Project type: new-site | redesign | targeted-improvement | undecided
- Current website:
- Reason for project:
- Desired change:

## People
- Church expert(s):
- Content approver:
- Theology approver:
- Design approver:
- Technical/account owner:
- Launch approver:

## Known constraints
- Timing:
- Budget/procurement:
- Platform/hosting:
- Brand commitments:
- Access/privacy:

## Available evidence
- Website:
- Documents:
- Brand assets:
- Analytics:
- Existing systems:

## Immediate unknowns
- [Only the most consequential]

## Next action
- Action:
- Owner:
- Expected output:
```

### Routing result

- `new-site` → begin discovery from the project goal and church expert's knowledge.
- `redesign` → assess the existing site and available systems before the main interview.
- `targeted-improvement` → identify the affected journeys/pages, then assess only that scope.
- `undecided` → conduct a short diagnostic conversation before defining scope.

## Asset 2 — Existing-Site Findings Brief

### Purpose

Give the church a fast, neutral picture of what a visitor can currently learn and where uncertainty remains. It does not pronounce whether the church itself is good or bad, nor whether a visitor should prefer its theology, style, or programs.

### What the human sees

1. **What the site communicates clearly**
2. **What a visitor can find but must work for**
3. **What appears missing, ambiguous, inconsistent, or stale**
4. **How representative visitor journeys perform**
5. **Content and assets already available for reuse**
6. **Claims the church needs to confirm**
7. **Questions recommended for the first interview**

Each finding includes the observed page, evidence, visitor consequence, and question or corrective action. The complete rubric lives in [Existing-Site Visitor-Fit Assessment](./03-existing-site-assessment.md).

## Asset 3 — Conversation Brief

### Purpose

Help a facilitator have a natural conversation while still producing complete source material. A brief is generated for one session from the current coverage matrix and should usually fit on two or three pages.

### What it contains

- why this conversation matters;
- what has already been learned;
- 5–8 high-value opening questions;
- short listen-for cues;
- optional probes hidden beneath each question;
- specific claims to verify;
- decisions the participant is qualified to make;
- a parking lot for useful but non-blocking topics.

### What it avoids

- a hundred-question intake form;
- questions already answered by trustworthy evidence;
- technical questions for a person who cannot answer them;
- premature copywriting or design preference exercises;
- treating every possible subject as equally urgent.

### Selection logic

A question enters the next brief when it:

1. removes a launch blocker;
2. affects scope, sitemap, safety, privacy, or public accuracy;
3. resolves a contradiction;
4. helps a visitor determine fit or take the next step;
5. provides missing source material for an approved page.

## Asset 4 — What We Heard + Open Questions

### Purpose

Close the loop after every interview without asking participants to review a raw transcript or internal ledger.

### What it contains

- a short summary in the participant's language;
- newly clarified information;
- exact items requiring correction or confirmation;
- decisions and their owners;
- unanswered questions and the best person to answer them;
- documents or assets mentioned but not yet supplied;
- the recommended next step.

### Response choices

Participants can respond simply:

- **Correct**
- **Change this to…**
- **I do not know; ask…**
- **Keep private**
- **We need to decide this**

Their response updates the ledger and coverage matrix, then drives the next Conversation Brief.

## Asset 5 — Milestone Review Packets

### Purpose

Request approval in bounded, understandable units. Never ask someone to “review the website project” as one enormous task.

### Packet A — Foundation/DNA

The approver receives:

- an index of canonical topics;
- a one-page summary of what the church said about itself;
- only the DNA documents relevant to their authority;
- flagged statements requiring special approval;
- unresolved questions that will affect public content.

Approval question: **Does this accurately and completely represent the church's current reality within this subject?**

### Packet B — Visitor strategy and sitemap

The approver receives:

- primary and secondary audiences;
- desired visitor outcomes;
- proposed navigation and sitemap;
- one-sentence job for every page;
- the primary CTA and key visitor journeys;
- deferred pages and why.

Approval question: **Does this structure help the intended visitors understand the church, determine fit, and take the right next step?**

### Packet C — Page copy

The approver receives:

- page copy in page order;
- a compact source note for sensitive or consequential claims;
- labeled editorial alternatives;
- remaining legal, privacy, theological, or operational reviews.

Approval question: **Is this faithful to the approved DNA, understandable to an outsider, and safe to publish?**

### Packet D — Visual direction

The approver receives:

- a concise design concept;
- representative mobile and desktop views;
- typography, color, imagery, and interaction examples;
- real asset requirements and gaps;
- accessibility implications;
- explicit rejected alternatives when they clarify the decision.

Approval question: **Does this visual system feel truthful to the church and help the content perform its job?**

### Packet E — Launch readiness

The approver receives:

- staging link;
- remaining known issues by severity;
- redirect and integration status;
- form recipients;
- ownership matrix;
- rollback and launch plan.

Approval question: **Are we comfortable making this public and owning it after launch?**

## Asset 6 — Launch and Ownership Sheet

### Purpose

Prevent the website from becoming ownerless after launch.

```markdown
# Launch and Ownership Sheet

## Public site
- Production URL:
- Launch date:
- Platform/host:
- Domain/DNS owner:
- Primary administrator:
- Backup administrator:

## Ongoing ownership
| Area | Source of truth | Primary owner | Backup | Update trigger | Review cadence |
|---|---|---|---|---|---|

## Forms and responses
| Form | Recipient | Backup | Expected response | Test cadence |
|---|---|---|---|---|

## External systems
| System | Purpose | Account owner | Website dependency |
|---|---|---|---|

## Maintenance rhythm
- Weekly:
- Monthly:
- Quarterly:
- Annually:

## Escalation
- Content correction:
- Broken functionality:
- Privacy/security concern:
- Leadership/account transition:
```

## What “adaptive” means in practice

The workflow adapts along four dimensions:

### 1. Starting evidence

- **No preparation:** begin with the Launch Sheet and first interview.
- **Some documents:** index them, prefill coverage, then verify.
- **Existing site:** run the visitor-fit assessment and prepopulate the ledger.
- **Mature organization:** import approved policies, brand standards, analytics, and system maps, then focus interviews on meaning and decisions.

### 2. Number of people

- One knowledgeable leader can complete the core discovery.
- Multiple leaders can be interviewed separately when subjects or perspectives differ.
- Specialists should answer only their areas: theology, children, care, technology, finance, or operations.
- Disagreement becomes a visible decision, not silently blended prose.

### 3. Number of interviews

There is no fixed required count. Each interview closes specific coverage gaps. A project may need one comprehensive conversation or several focused conversations spread over time.

### 4. Project scope

New websites, full redesigns, and targeted improvements share the same truth model but use different branches. The process does not force a full-site exercise when the authorized scope is one journey or set of pages.

## The minimum viable human experience

For the smallest possible project, the full human process can be:

1. one 30-minute launch conversation;
2. one 90-minute discovery interview;
3. one What We Heard response;
4. one follow-up conversation for gaps;
5. four milestone approvals: foundation, structure, copy, design/launch.

The system may create many supporting files, but the church experiences a guided series of conversations and clear decisions.

