# Church Website Templates and AI Prompts

## 0. Project state template

```markdown
---
project_name:
project_type: new-site | redesign | targeted-improvement | undecided
current_phase: orient | assess | discover | dna | strategy | copy | design | build | qa | launched
state_updated:
state_owner:
next_action:
next_action_owner:
---

# Project State

## Current objective
[The milestone currently being pursued]

## What is known
- [Confirmed, high-level project truth]

## What remains unknown
- [Launch-critical gaps]

## Decisions required
- [Decision, owner, and needed-by date]

## Active risks
- [Accuracy, access, scope, timing, privacy, or ownership risk]

## Source status
- Existing website: present | absent | unknown
- Interviews completed:
- Documents received:
- Assets received:
- Systems/integrations identified:

## Approval status
- Project direction:
- DNA:
- Sitemap:
- Copy:
- Design:
- Launch:

## Next action
[One concrete action, its owner, and the input it should produce]
```

## 0A. Coverage matrix template

```markdown
# Discovery Coverage Matrix

| Topic | Status | Evidence | Confidence | Public-ready? | Blocking? | Best next action |
|---|---|---|---|---|---|---|
| Audience and outcomes | UNKNOWN | — | — | NO | YES | Ask in Interview 1 |
| Services and locations | PARTIAL | Existing homepage | Medium | NO | YES | Verify time/address |
```

Allowed topic statuses:

- `UNKNOWN` — no useful evidence.
- `PARTIAL` — some information exists, but important gaps remain.
- `COVERED` — enough evidence exists to draft DNA, but approval remains.
- `CONFIRMED` — canonical content has been approved.
- `NOT_APPLICABLE` — deliberately excluded with a reason.
- `DEFERRED` — intentionally moved beyond launch scope with an owner.

## 0B. Conversation brief template

```markdown
# Conversation Brief — [Session name]

## Why this conversation matters
[One short paragraph]

## People present
- [Name / role / authority]

## What we already know
- [Concise confirmed context so time is not wasted]

## Questions for this conversation

### 1. [Natural opening question]
**Why we are asking:** [Decision or document this unlocks]
**Listen for:** [Key distinctions]
**Optional probes:**
- [Use only if needed]
**Complete when:** [Coverage test]

## Items to verify
- [Existing-site or previous-interview claim]

## Decisions needed
- [Decision and owner]

## Parking lot
[Interesting but non-blocking matters to capture without derailing the interview]
```

## 0C. Post-interview report template

```markdown
# What We Heard — [Date/session]

## In brief
[Plain-language summary for participants]

## Newly clarified
- [What is now understood]

## Please correct or confirm
- [Specific claim]

## Decisions still needed
- [Decision / owner]

## Questions we did not answer
- [Question / why it matters / best respondent]

## Materials mentioned but not yet received
- [Item / owner]

## Recommended next step
[Another interview, specialist answer, document request, or milestone review]
```

## 1. Project brief template

```markdown
# Project Brief

## Project type
New website | Full redesign | Targeted improvement

## Why now
[Source-supported problem or opportunity]

## Scope
[Included]

## Out of scope
[Excluded]

## Decision-makers
- Content:
- Theology:
- Design:
- Technical:
- Launch:

## Known target audiences
[Provisional until approved]

## Desired outcomes
[Provisional until approved]

## Constraints
- Timeline:
- Budget:
- Platform:
- Staffing:
- Legal/privacy:

## Existing sources
[Inventory links]

## Success measures
[Observable measures]
```

## 2. Fact ledger template

```markdown
# Fact Ledger

| ID | Topic | Claim | Status | Public? | Source | Owner | Notes |
|---|---|---|---|---|---|---|---|
| F-0001 | Services | Sunday worship begins at 10:00 a.m. | CONFIRMED | YES | INT-01, Pastor Name, 00:14:22 | Office administrator | Verify annually |
```

One row should contain one claim. Use exact source locations. Never replace a sourced claim with “common knowledge.”

## 3. DNA document template

```markdown
---
document_id: DNA-XX
title: [Canonical subject]
status: draft | in-review | approved
content_owner: [Name/role]
approval_owner: [Name/role]
approved_on:
last_verified:
review_cadence: monthly | quarterly | annually | on-change
source_files:
  - [Source ID/path]
related_documents:
  - [DNA ID]
privacy: internal | mixed | public-source
---

# [Title]

## Purpose and boundary
[What this document owns, and what belongs elsewhere.]

## Canonical content
[Complete, organized account using only confirmed source material.]

## Operational details
[Current processes, owners, systems, dates, or rules relevant to this subject.]

## Public-use guidance
[What may be published, what requires care, and what must remain private.]

## Related documents
- [Reference other DNA documents instead of duplicating them.]

## Open questions
- [NEEDS_CONFIRMATION / DECISION_REQUIRED items]

## Source map
| Section/claim | Ledger IDs | Source notes |
|---|---|---|
| [Claim] | F-0001, F-0002 | [Transcript timestamps or documents] |

## Change log
| Date | Change | Approved by |
|---|---|---|
```

### DNA quality check

- Does the document cover one coherent subject?
- Is it the single canonical home for that subject?
- Is every factual statement sourced?
- Are conflicting, aspirational, private, and undecided statements handled correctly?
- Has filler been removed without changing meaning?
- Are related subjects referenced instead of copied?
- Is ownership and review cadence clear?
- Can a page writer use it without returning to the raw transcript?

## 4. Ministry DNA template

```markdown
---
document_id: DNA-MIN-[slug]
title: [Ministry name]
status: draft
content_owner:
approval_owner:
last_verified:
review_cadence:
privacy: mixed
---

# [Ministry name]

## Purpose
[Why it exists]

## People served
[Approved audience description]

## What happens
[Concrete activities and experience]

## Schedule and location
[Current details or canonical system link]

## Primary next step
[Visit / register / contact / apply / serve / give]

## Requirements and constraints
[Age, cost, registration, capacity, safety, seasonality]

## Leadership and contact
[Approved public information]

## Related church DNA
[Mission, beliefs, next steps, safety policy, etc.]

## Open questions
[Gaps]

## Source map
[Ledger IDs and source locations]
```

## 5. Decision log template

```markdown
# Decision Log

| ID | Date | Decision | Why | Alternatives considered | Owner/approver | Affected artifacts |
|---|---|---|---|---|---|---|
| D-001 | YYYY-MM-DD | [Decision] | [Reason] | [Options] | [Name/role] | [Files/pages] |
```

Facts belong in DNA; strategic and design choices belong here.

## 6. Sitemap template

```markdown
# Sitemap

## Primary navigation
- Home
- [Page]
- [Page]

## Utility navigation
- [Give / Watch / Login / etc.]

## Footer-only pages
- [Privacy]
- [Policies]

## Page inventory
| URL | Page title | Page job | Primary audience | Primary CTA | DNA sources | Owner | Launch phase |
|---|---|---|---|---|---|---|---|
```

## 7. Page brief template

```markdown
---
page_id: PAGE-XX
title:
status: brief | drafting | in-review | approved
url:
content_owner:
primary_audience:
primary_cta:
dna_sources:
  - DNA-XX
---

# [Page title] — Brief

## Page job
[One sentence.]

## Visitor state
- Arrives knowing:
- Wants to know:
- May worry about:
- Should leave ready to:

## Questions this page must answer
1. [Question]

## Message hierarchy
1. [Most important]
2. [Next]

## Required facts
| Fact | DNA source | Ledger IDs |
|---|---|---|

## Proposed modules
1. [Hero]
2. [Section]
3. [CTA]

## Calls to action
- Primary:
- Secondary:

## Media needs
[Real imagery, map, video, icons, downloads]

## SEO/accessibility notes
[Search intent, title/H1, alt-text needs, content concerns]

## Missing information
[Questions; never placeholders disguised as copy]
```

## 8. Page copy template

```markdown
---
page_id: PAGE-XX
title:
status: draft | in-review | approved
brief:
dna_sources:
  - DNA-XX
approved_on:
---

# [Page title]

## Copy

### [Module name]
[Public-facing copy]

**CTA:** [Label] → [Destination]

## Source map
| Copy section | DNA source | Ledger IDs | Notes |
|---|---|---|---|

## Editorial proposals requiring approval
- [Clearly labeled proposal; omit section if none]

## Unresolved gaps
- [Question; omit section if none]
```

## 9. `design.md` template

```markdown
# Design System

## Product
[Church website name]

## Audiences
[Approved audience priority]

## Site purpose
[What the experience must help people understand and do]

## Brand personality
[3–5 qualities grounded in approved DNA]

## Desired visitor experience
[Feelings and practical outcomes]

## Existing assets and constraints
- Logo:
- Colors:
- Typefaces:
- Photography/video:
- Printed/environmental brand:
- Must preserve:
- Authorized to change:

## Selected direction
[Concise creative concept and rationale]

## Visual references
| Reference | Relevant quality | Do not copy |
|---|---|---|

## Anti-references
- [Visual behavior to avoid and why]

## Logo rules
[Variants, clearance, scale, backgrounds, prohibited uses]

## Color system
| Token | Value | Use | Contrast notes |
|---|---|---|---|

## Typography
| Role | Typeface/style | Sizes/behavior | Use |
|---|---|---|---|

## Spacing, grid, and shape
[Tokens and principles]

## Imagery
- Subjects:
- Mood:
- Composition:
- Editing:
- Real-versus-stock rule:
- Privacy/permission rule:
- Alt-text approach:

## Information hierarchy
[How pages establish one clear focal point and support scanning]

## Layout patterns
- Home:
- Landing page:
- Detail page:
- Listing/archive:
- Form:

## Components
- Header/navigation:
- Hero:
- CTA:
- Cards/listings:
- Sermon/event embeds:
- Forms:
- Footer:

## Interaction and motion
[States, feedback, restraint, reduced-motion behavior]

## Responsive behavior
[Mobile-first priorities and breakpoint principles]

## Accessibility
- Contrast target: WCAG AA minimum
- Keyboard/focus:
- Heading structure:
- Form behavior:
- Images/media:
- Motion:

## Platform constraints
[CMS, component library, integrations, editor capabilities]

## Open decisions
- [Decision and owner]
```

## 10. Maintenance matrix template

```markdown
# Maintenance Plan

| Content/system | Canonical source | Website location | Owner | Backup owner | Review cadence | Update trigger |
|---|---|---|---|---|---|---|
| Service times | DNA-06 | Header, Home, Visit, Footer | [Role] | [Role] | Monthly | Any schedule change |
```

## 11. Prompt — Transcript to fact ledger

```text
You are creating a fact ledger from a church discovery transcript.

SOURCE-FIDELITY RULES
- Use only the supplied transcript and attached source documents.
- Do not add facts, denominational assumptions, standard church language, recommendations, or missing details.
- Break compound statements into atomic claims.
- Preserve speaker name and timestamp/page for every claim.
- Do not resolve contradictions. Record each conflicting claim separately and mark it CONTRADICTED.
- Distinguish current reality from aspiration.
- Flag material that appears private or sensitive.
- If a claim is vague, mark NEEDS_CONFIRMATION and write a precise follow-up question.

ALLOWED STATUSES
CONFIRMED, NEEDS_CONFIRMATION, DECISION_REQUIRED, CONTRADICTED, ASPIRATIONAL, PRIVATE, OUT_OF_SCOPE.

OUTPUT
1. A Markdown fact-ledger table with: ID, Topic, Claim, Status, Public?, Source, Owner, Notes.
2. A contradictions section.
3. A follow-up questions section, grouped by the person/role most likely to answer.
4. A coverage note listing transcript portions that contained no website-relevant claims.

Do not write polished DNA documents or public copy yet.
```

## 12. Prompt — Fact ledger to DNA documents

```text
Create atomic internal DNA documents from the approved fact ledger and supplied sources.

RULES
- Use CONFIRMED ledger items only in canonical content.
- Preserve all relevant confirmed meaning; remove conversational filler and duplication.
- Do not add facts, interpretations, theological conclusions, promises, or strategy.
- Give each subject one canonical home. In other documents, reference its DNA ID instead of repeating it.
- Place NEEDS_CONFIRMATION, DECISION_REQUIRED, CONTRADICTED, and ASPIRATIONAL items in Open Questions, clearly labeled. Never blend them into the main narrative.
- Exclude PRIVATE details from public-use guidance and explain the restriction without exposing unnecessary sensitive content.
- Include a source map from substantive sections to ledger IDs and original source locations.
- If there is insufficient information for a document, create a gap report rather than padding it.

For each document use the supplied DNA template. Then provide:
1. a proposed DNA index;
2. possible boundary/duplication problems;
3. documents requiring specialist approval;
4. unresolved questions that block website copy.
```

## 13. Prompt — DNA library audit

```text
Audit this DNA library for source fidelity and atomicity.

Check for:
- unsupported factual claims;
- dropped confirmed information;
- duplicated canonical content;
- contradictions hidden by smooth prose;
- aspirations presented as current reality;
- private information exposed;
- theological paraphrases that exceed approved language;
- missing owners, sources, or verification dates;
- subjects that should be split or merged.

Return a table with severity, document, finding, evidence, and exact recommended correction. Do not rewrite the documents unless requested.
```

## 14. Prompt — DNA to page brief

```text
Create a page brief using only the approved site strategy, sitemap, and DNA library.

Separate three categories:
1. SOURCE FACT — supported by DNA;
2. APPROVED DECISION — supported by the decision log;
3. PROPOSAL — your recommendation, requiring approval.

Do not write finished copy. Define the page job, visitor state, questions, message hierarchy, required facts with sources, modules, CTA, media needs, SEO/accessibility considerations, and missing information. If the page cannot fulfill its job with available sources, produce follow-up questions.
```

## 15. Prompt — Page brief to public copy

```text
Ghostwrite public-facing church website copy from the approved page brief and DNA sources.

You may condense, reorder, clarify, and remove jargon while preserving meaning. You may not invent facts, claims, stories, promises, benefits, theology, policies, or operational details.

REQUIREMENTS
- Fulfill the page's single job for its named audience.
- Answer the required visitor questions in the approved hierarchy.
- Use the approved voice.
- Use outsider-friendly language; explain necessary church terms.
- Keep one primary CTA.
- Mark any optional headline or CTA alternatives as PROPOSAL.
- Do not fill gaps with placeholders that look like real copy.
- Provide a source map from each substantive section to DNA IDs and ledger IDs.
- After the draft, list any wording that requires theological, legal, privacy, or operational review.
```

## 16. Prompt — Source-fidelity validation

```text
Validate the page copy against the supplied approved DNA documents and decision log.

For every factual or identity claim, classify it as:
- SUPPORTED;
- PARTIALLY_SUPPORTED;
- UNSUPPORTED;
- CONTRADICTED;
- APPROVED_EDITORIAL_PROPOSAL.

Return:
1. a claim-by-claim table with exact source references;
2. all meaning drift or overstatement;
3. source material that the brief required but the copy omitted;
4. private or sensitive information that should be removed;
5. a corrected draft changing only what is necessary.
```

## 17. Prompt — Create `design.md`

```text
Create a design.md specification from the approved site strategy, page copy, brand DNA, asset inventory, references, and constraints.

Treat church facts and approved brand requirements as constraints. Treat visual ideas as proposals until approved. Do not invent a church personality that is unsupported by the DNA.

Include: purpose, audiences, brand personality, desired visitor experience, existing assets, selected direction, references, anti-references, logo rules, color, typography, spacing/grid/shape, imagery, hierarchy, layout patterns, components, interaction, responsive behavior, accessibility, platform constraints, and open decisions.

Favor real church imagery that communicates evidence of people, place, or ministry. Avoid generic decorative church imagery. Target WCAG AA at minimum. Explain the rationale for each consequential visual choice in terms of the approved audience, content, and brand.
```

## 18. Prompt — Final site content audit

```text
Audit the rendered staging site against the approved page copy, DNA library, sitemap, and design.md.

Check:
- copy completeness and unauthorized edits;
- factual consistency across repeated service times, addresses, names, and CTAs;
- broken or misleading links;
- clear who/when/where information;
- navigation and page-job clarity;
- mobile hierarchy;
- alt text and headings;
- form labels, destinations, success/error behavior, and privacy risk;
- outdated or ownerless dynamic content;
- visual deviations from design.md.

Report findings by severity: BLOCKER, HIGH, MEDIUM, LOW. Include the exact page/component, evidence, and recommended correction. Do not change approved facts or copy without flagging the change for approval.
```
