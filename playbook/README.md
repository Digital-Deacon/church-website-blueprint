# Church Website Content and Design Workflow

## Purpose

This workflow helps a church launch a new website or improve an existing one by turning conversations and whatever evidence is available into:

1. verified source material;
2. atomic, reusable DNA documents;
3. an approved website strategy and sitemap;
4. public-facing page copy;
5. a `design.md` specification and page layouts;
6. a built, tested, maintainable website.

The central rule is **source fidelity**: AI may organize, clarify, condense, and ghostwrite from the church's own words, but it may not invent facts, theological positions, ministries, promises, policies, stories, or operational details.

The workflow assumes **zero preparation is acceptable**. A knowledgeable representative may arrive with no documents, research, or completed questionnaire. The facilitator begins with a short launch conversation, determines whether the project is new or existing, and lets each interview generate the next best questions. Existing sources improve speed and confidence, but they are not prerequisites.

The research behind this workflow recommends a simple, visitor-friendly site, usually with 7–10 core pages. It also suggests prioritizing first-time visitors, making service times and location obvious, using one primary call to action, and giving someone explicit responsibility for keeping the site current. Those are defaults, not facts about a particular church.

## The content model

```text
Orient → Gather/Assess → Interview → Extract → Find Gaps → Interview Again
                                      ↓
                           Approved DNA Documents
                                      ↓
                 Site Strategy → Page Copy → design.md → Build → Launch
```

Discovery is a loop, not a single intake event. It ends only when launch-critical subjects are confirmed, explicitly deferred, or marked not applicable.

Each layer has a different job:

| Layer | Purpose | May contain recommendations? | Church approval required? |
|---|---|---:|---:|
| Evidence | Preserve what was actually supplied | No | No |
| Fact ledger | Extract and classify individual claims | No | Yes, for disputed or unclear claims |
| DNA documents | Create the canonical internal record | No unsourced claims | Yes |
| Site strategy | Decide audiences, outcomes, sitemap, and page jobs | Yes, clearly labeled | Yes |
| Page copy | Distill approved DNA into visitor-facing language | Editorial choices only | Yes |
| `design.md` | Define visual language and interaction rules | Yes | Yes |
| Build | Implement approved copy and design | Technical choices only | Yes at staging |

## Non-negotiable editorial rules

AI may:

- remove filler words and false starts;
- combine statements that say the same thing;
- reorganize material by subject;
- correct grammar without changing meaning;
- turn approved facts into concise public copy;
- propose strategy, copy alternatives, or design directions when clearly marked as proposals.

AI may not:

- fill gaps with plausible church language;
- make a vague statement more specific than the source;
- resolve disagreements or contradictions;
- convert an aspiration into a current fact;
- infer a doctrinal position;
- invent a ministry benefit, visitor promise, testimonial, statistic, or leader biography;
- publish private or sensitive details merely because they appeared in the transcript.

When the source is incomplete, the output is a question—not a guess.

## Roles

One person may hold several roles in a small church, but every role must be assigned.

| Role | Responsibility |
|---|---|
| Church content owner | Supplies information, coordinates responses, and approves operational facts |
| Theology approver | Approves beliefs, values, ministry philosophy, and sensitive claims |
| Interview facilitator | Guides the conversation and asks follow-up questions |
| Content architect/editor | Creates the ledger, DNA documents, page briefs, and copy |
| Design/build lead | Creates `design.md`, layouts, components, and the website |
| Ongoing website owner | Maintains events, sermons, staff, forms, service information, and access |

## What the human actually uses

Most participants should never need to work directly in the fact ledger or full project tree. Their experience is built around a small set of clear assets:

1. **Project Launch Sheet** — completed live in the first 15–30 minutes.
2. **Existing-Site Findings Brief** — produced automatically when a site already exists.
3. **Conversation Brief** — a short, adaptive agenda for the next interview.
4. **What We Heard + Open Questions** — sent after each interview for correction and follow-up.
5. **Milestone Review Packets** — focused approvals for DNA, strategy/sitemap, copy, and design.
6. **Launch and Ownership Sheet** — tells the church what is live, who owns it, and what must be maintained.

See [Human-Facing Assets](./00-human-facing-assets.md) for the exact contents and lifecycle of each asset.

## Project structure

```text
church-website/
├── 00-admin/
│   ├── project-brief.md
│   ├── project-state.md
│   ├── coverage-matrix.md
│   ├── decision-log.md
│   ├── open-questions.md
│   └── approvals.md
├── 01-sources/
│   ├── transcripts/
│   ├── existing-copy/
│   ├── policies/
│   ├── analytics/
│   └── asset-inventory.md
├── 02-ledger/
│   ├── fact-ledger.md
│   └── contradictions.md
├── 03-dna/
│   ├── DNA-00-church-profile.md
│   ├── DNA-01-audiences-and-outcomes.md
│   ├── DNA-02-mission-vision-values.md
│   ├── DNA-03-church-story.md
│   ├── DNA-04-beliefs.md
│   ├── DNA-05-sunday-experience.md
│   ├── DNA-06-services-and-locations.md
│   ├── DNA-07-ministries-index.md
│   ├── ministries/
│   ├── DNA-08-next-steps.md
│   ├── DNA-09-leadership-and-governance.md
│   ├── DNA-10-sermons-and-media.md
│   ├── DNA-11-events.md
│   ├── DNA-12-giving-and-stewardship.md
│   ├── DNA-13-contact-and-care.md
│   ├── DNA-14-brand-voice-and-assets.md
│   ├── DNA-15-technology-and-integrations.md
│   └── DNA-16-content-governance.md
├── 04-strategy/
│   ├── site-strategy.md
│   ├── sitemap.md
│   ├── content-matrix.md
│   ├── redirects.md
│   └── requirements.md
├── 05-copy/
│   ├── page-briefs/
│   └── page-copy/
├── 06-design/
│   ├── design.md
│   ├── references/
│   └── wireframes/
├── 07-build/
└── 08-launch/
    ├── qa-checklist.md
    ├── launch-checklist.md
    └── maintenance-plan.md
```

Not every church needs every DNA document. Create a file only when the subject exists, but do not combine unrelated subjects simply to reduce file count.

## Status vocabulary

Every extracted statement receives one status:

- `CONFIRMED` — clearly stated and not contradicted.
- `NEEDS_CONFIRMATION` — plausible, but vague, incomplete, or supplied by only one person where approval matters.
- `DECISION_REQUIRED` — the church has not decided yet.
- `CONTRADICTED` — sources disagree.
- `ASPIRATIONAL` — describes a hoped-for future, not present reality.
- `PRIVATE` — valid internal information that must not be published.
- `OUT_OF_SCOPE` — not needed for this website project.

Only `CONFIRMED` information may be treated as fact in approved DNA documents and public copy. An approved strategic decision may also be used after it is recorded in the decision log.

## Phase 0 — Choose the project path

Phase 0 happens as a conversation, not a prerequisite form. Use the Project Launch Sheet and capture answers live. At minimum determine:

- whether the church is new, has no site, or has an existing site;
- whether the need is a full redesign, a targeted improvement, or still unclear;
- who knows the church well enough to participate;
- why the project is happening now;
- who can approve facts, theology, design, and launch;
- the known constraints and the next action.

### New website

Start with discovery, source collection, domain/platform decisions, and a new asset inventory. Expect more `DECISION_REQUIRED` items.

### Redesign or improvement

Preserve what is already working before proposing change. Collect:

- the current sitemap and URLs;
- analytics and search data, if available;
- top landing pages and conversions;
- form destinations and integrations;
- all current copy and downloadable files;
- current branding and media;
- content that must be retained, rewritten, merged, removed, or redirected;
- stakeholder complaints and known visitor confusion.

Classify every current page as `KEEP`, `IMPROVE`, `MERGE`, `REMOVE`, or `DECIDE`. Do not remove a live URL without deciding whether it needs a redirect.

**Gate 0:** project type, scope, approvers, primary contact, and target launch window are recorded.

## Phase 1 — Source collection and pre-interview audit

Create an immutable source set before writing. If the church arrives with nothing, create the source set from the first transcript and mark every other source category as unknown rather than blocking progress.

Collect what exists:

- mission, vision, values, and statement of faith;
- constitution, bylaws, or denominational materials when relevant;
- bulletins, newcomer materials, membership materials, and ministry descriptions;
- service times, addresses, contact details, staff list, office hours, and accessibility information;
- sermon, livestream, event, giving, forms, and church-management links;
- current website export or crawl;
- logos, fonts, colors, brand guide, photography, video, and illustration assets;
- domain, DNS, hosting, analytics, Search Console, and platform details;
- privacy, child safety, photo-use, counseling, and crisis-communication policies.

Create `asset-inventory.md` with each item's location, owner, rights/permission, quality, and whether it is approved for public use.

Prepare a short gap list for the interview. The interview should confirm and deepen existing material, not waste time asking people to recite information already available.

When a website already exists, run the [Existing-Site Visitor-Fit Assessment](./03-existing-site-assessment.md) before generating the main interview. Use it to prepopulate known claims, map current pages, identify contradictions and stale information, and select questions the site cannot answer.

**Gate 1:** sources are indexed, obvious gaps are listed, and sensitive materials are marked.

## Phase 2 — Conduct the interviews

Use the companion [Interview Guide](./01-interview-guide.md) as a question library, not as a script that must be completed in one sitting. The system should generate a Conversation Brief from the highest-priority unknowns. Two 90-minute conversations plus a 30–45 minute verification call is a useful default, not a requirement.

### Session A — Identity and visitor promise

Cover audience, desired outcomes, story, mission, vision, values, beliefs, culture, and voice.

### Session B — Experience and operations

Cover the Sunday journey, services, ministries, next steps, leadership, events, sermons, giving, contact/care, technology, and maintenance.

### Session C — Verification and decisions

Resolve contradictions, answer gaps, approve sensitive wording, and make decisions that could not be made in the first two sessions.

Record all sessions with permission. At the beginning, identify each speaker and role. During the conversation, distinguish:

- how things are now;
- how leaders hope they will become;
- what may be stated publicly;
- what still requires approval.

**Gate 2:** transcripts are complete, speakers are identified, and unresolved questions are listed.

### The adaptive discovery loop

After every interview:

1. add new claims to the ledger;
2. update the topic coverage matrix;
3. identify contradictions, vague claims, private material, and missing launch-critical facts;
4. separate facts from decisions and aspirations;
5. update `project-state.md` with the current phase and next action;
6. generate the next Conversation Brief using only the most valuable unresolved areas;
7. decide whether another interview, a specialist answer, a document request, or a church decision is the correct next step.

Do not keep interviewing merely because the master question library contains unused questions. Stop when the site can be planned honestly and remaining gaps are explicitly deferred or out of scope.

## Phase 3 — Create the fact ledger

Do not move directly from transcript to polished DNA. First break the source into individual claims.

Each ledger row contains:

| Field | Meaning |
|---|---|
| ID | Stable identifier such as `F-0042` |
| Topic | The future DNA home |
| Claim | One factual statement or expressed position |
| Status | One of the approved statuses |
| Public? | `YES`, `NO`, or `DECIDE` |
| Source | File, speaker, and timestamp/page |
| Owner | Person who can verify it |
| Notes | Ambiguity, conflict, date sensitivity, or follow-up |

Rules:

1. Split compound claims into separate rows.
2. Preserve source location and speaker attribution.
3. Record conflicting claims separately; do not merge them.
4. Mark time-sensitive facts such as service times, staff, events, and prices.
5. Put recommendations in the decision log, not the fact ledger.

**Gate 3:** all important transcript content is represented, duplicates are identified, and contradictions have owners.

## Phase 4 — Build the DNA library

Use the template in [Templates and AI Prompts](./02-templates-and-prompts.md).

A DNA document is:

- **canonical** — it is the authoritative home for its subject;
- **atomic** — it covers one coherent subject;
- **complete** — it contains all approved source material needed for that subject;
- **internal** — it is clear and thorough, not optimized for public scanning;
- **traceable** — important statements map back to ledger rows and sources;
- **reusable** — page copy, proposals, emails, and future assets can draw from it.

### Atomicity rule

A fact has one canonical home. Other DNA documents should reference that document rather than repeat its full content. For example:

> The church's doctrinal position is maintained in `DNA-04-beliefs.md`; this ministry operates within that approved statement.

Public pages may repeat critical facts such as service times, address, and primary calls to action. That is presentation reuse, not a second canonical source.

### When to split a DNA document

Split when a section:

- has a different approver or maintenance owner;
- changes on a different schedule;
- is substantial enough to be reused independently;
- would cause duplication elsewhere;
- contains privacy restrictions different from the parent document.

Ministries are the common example: maintain an index plus one DNA file per significant ministry.

**Gate 4:** content and theology owners approve the DNA library; all non-confirmed material remains visibly flagged or excluded.

## Phase 5 — Create the site strategy

The site strategy translates internal truth into a purposeful visitor experience. It contains decisions, not prose drafts.

### Required decisions

- primary audience and secondary audiences;
- the top 2–3 website outcomes;
- the single primary site-wide call to action;
- essential visitor questions;
- initial sitemap and navigation;
- page purpose and owner;
- dynamic content sources and update frequency;
- integrations, forms, and data destinations;
- launch scope versus later phases.

### Research-derived default sitemap

Use only as a starting point:

1. Home
2. Plan Your Visit / New Here
3. About
4. Beliefs
5. Ministries / Groups
6. Sermons / Media
7. Events
8. Give
9. Contact

Services, Leadership, Next Steps, Church Online, a school/preschool, counseling, or community ministries may be separate pages when their content and user journey justify it.

### Content matrix

For each page record:

| Page | Audience | Job | Visitor questions | Primary CTA | DNA sources | Dynamic source | Owner |
|---|---|---|---|---|---|---|---|

Every page needs one clear job. If two pages have the same audience, questions, and CTA, consider merging them.

**Gate 5:** audience, outcomes, sitemap, navigation, page jobs, and launch scope are approved.

## Phase 6 — Write page briefs and copy

Write a page brief before writing prose. The brief fixes the page's job, source documents, hierarchy, CTA, and constraints.

Then draft copy using only approved DNA documents and recorded decisions.

### Copy sequence

1. Generate a source outline: which DNA facts answer which visitor questions?
2. Identify missing information and stop for follow-up if it is essential.
3. Draft the page in natural, visitor-friendly language.
4. Attach a source map linking each substantive section to DNA documents and ledger IDs.
5. Run a fidelity pass against the sources.
6. Run a plain-language and church-jargon pass.
7. Obtain content and theology approval where appropriate.

Suggested order: Plan Your Visit, Home, About, Beliefs, Ministries/Next Steps, Sermons, Give, Contact, then secondary pages. Writing Plan Your Visit first forces the most practical visitor details to be resolved before the homepage promises them.

**Gate 6:** public copy is approved, source-supported, and free of unresolved placeholders.

## Phase 7 — Create `design.md` and layouts

Content strategy determines what a page must accomplish; visual design determines how a person experiences it.

`design.md` should include:

1. site purpose and audience;
2. brand personality and desired visitor feelings;
3. existing assets that must be preserved;
4. selected visual direction and rejected directions;
5. visual references and anti-references;
6. logo rules;
7. color, typography, spacing, and shape tokens;
8. photography and media direction;
9. information hierarchy and layout principles;
10. navigation, footer, and recurring component patterns;
11. form and call-to-action behavior;
12. mobile and responsive behavior;
13. accessibility requirements;
14. platform constraints;
15. unresolved design decisions.

Use real church imagery as evidence whenever possible. Do not use decorative images simply to occupy space. Target WCAG AA contrast, readable type, keyboard access, meaningful alt text, visible focus states, and layouts that work at small mobile widths.

Open Design can consume the approved page copy, `design.md`, references, and asset inventory as the project context for layouts or implementation. Keep recommendations and generated concepts separate from approved church facts.

**Gate 7:** the church approves a direction, representative desktop/mobile layouts, and the design system before full production.

## Phase 8 — Build and populate

Build reusable components and connect dynamic sources. Do not manually create a second database of events, sermons, or groups if a reliable system is already the source of truth.

During population:

- preserve final approved copy;
- optimize images without losing usable quality;
- add descriptive alt text based on what the image communicates;
- verify every form recipient and confirmation message;
- protect private contact details;
- record redirects before changing URLs;
- assign content ownership in the CMS.

**Gate 8:** the staging site contains final content, integrations work, and no known critical defects remain.

## Phase 9 — Quality assurance

Run five separate checks.

### 1. Source-fidelity QA

- Every factual claim is supported by approved DNA.
- Aspirations are not presented as current reality.
- Beliefs and sensitive claims have theological approval.
- Service times, addresses, names, titles, and form recipients match their canonical source.

### 2. Visitor-experience QA

- A first-time visitor can find who, when, and where within seconds.
- The primary CTA is obvious.
- Navigation uses plain, outsider-friendly labels.
- Plan Your Visit answers the full parking-to-dismissal journey.
- No page is a dead end.

### 3. Technical QA

- Mobile and major desktop breakpoints work.
- Forms, embeds, analytics, consent, giving, events, sermons, and maps work.
- Metadata, canonical URLs, sitemap, robots rules, redirects, SSL, and backups are correct.
- Performance is acceptable on a typical mobile connection.

### 4. Accessibility QA

- Keyboard navigation and focus order work.
- Headings are hierarchical.
- Contrast meets the chosen standard.
- Images have appropriate alt text.
- Forms have labels, helpful errors, and success states.
- Meaning is not communicated by color alone.

### 5. Governance QA

- Two appropriate people have administrative access.
- Credentials and domain ownership do not depend on one volunteer.
- Every dynamic area has an owner and cadence.
- Privacy and photo permissions are understood.
- A rollback and backup plan exists.

**Gate 9:** all critical checks pass and designated approvers authorize launch.

## Phase 10 — Launch and maintenance

At launch:

- take a final backup;
- publish the site and redirects;
- submit/update the sitemap;
- verify analytics and Search Console;
- check forms, giving, events, sermons, and maps in production;
- update Google Business Profile and social profiles where needed;
- monitor errors and submissions closely for the first week.

Maintenance cadence:

| Frequency | Review |
|---|---|
| Weekly | events, announcements, livestream links, form delivery |
| Monthly | sermons, ministry details, staff, service times, broken links |
| Quarterly | homepage priorities, navigation, accessibility, analytics, backups/access |
| Annually | full DNA verification, leadership, beliefs links, policies, brand assets, platform plan |

Any public factual change should update the canonical DNA document first, then every page that consumes it. Record the verification date and owner.

## Definition of done

The project is complete when:

- the source set and fact ledger are archived;
- DNA documents are approved and have owners;
- the sitemap and page copy are approved;
- `design.md` accurately reflects the chosen visual system;
- the site passes content, visitor, technical, accessibility, and governance QA;
- redirects and integrations work in production;
- ongoing owners and review cadences are documented;
- the church knows how to request and approve future changes.

## Companion files

- [Human-facing assets](./00-human-facing-assets.md)
- [Facilitator-ready interview guide](./01-interview-guide.md)
- [DNA, page, design, ledger, and AI prompt templates](./02-templates-and-prompts.md)
- [Existing-site visitor-fit assessment](./03-existing-site-assessment.md)
- [Adaptive skill architecture](./04-adaptive-skill-architecture.md)
