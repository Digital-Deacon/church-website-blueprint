---
layout: default
title: Start Here
description: A plain-English guide to running Church Website Blueprint with your AI agent.
permalink: /humans/
---

<div class="prose guide-page">

<p class="eyebrow page-eyebrow">The step-by-step guide</p>

# Start your church website project

<p class="page-lead">Bring the AI agent you already use. The toolkit gives that agent the process and project structure; this guide shows you what the people involved need to prepare, discuss, decide, and approve.</p>

<div class="quick-start">
  <strong>Your first goal</strong>
  <p>Point your agent to the toolkit, create a private project workspace, and complete one short launch conversation. You should leave with a clear project type, the right people, and one next action.</p>
  <a href="{{ '/agents/' | relative_url }}">Copy the agent setup prompt →</a>
</div>

## 1. Connect your AI agent

The system is designed to work with an agent throughout the project. Use Codex, Claude Code, OpenCode, OpenClaw, Hermes, or another agentic system that can read and update files, follow repository instructions, and continue work from persistent project state.

Give the agent the repository link and setup prompt. It will read `AGENTS.md`, load the `run-church-website-project` skill, create the private project structure, and guide you to the next useful human action.

<a class="inline-cta" href="{{ '/agents/' | relative_url }}">Open the bring-your-own-AI setup →</a>

## 2. Choose your starting point

<div class="starting-options">
  <article><span>New</span><h3>We need a new website</h3><p>Start with what the church is, who the website must serve, and what visitors need to know or do. Expect more decisions about platforms, content, photography, and ownership.</p></article>
  <article><span>Redesign</span><h3>We already have a website</h3><p>Assess the current site before asking people to repeat what is already there. Preserve useful content, identify unclear or stale information, and record redirects before removing pages.</p></article>
  <article><span>Improve</span><h3>We need to fix one part</h3><p>Name the specific visitor problem or outcome. Use only the parts of the process needed to understand the issue, create the replacement, and confirm that it works.</p></article>
</div>

**Decide before moving on:** Who is leading the project? Who knows the church? Who can approve facts, theology, design, technology, and launch?

## 3. Set up a private working space

Keep the public toolkit separate from the church project. The church workspace may contain transcripts, internal decisions, contact details, analytics, credentials, and unpublished information.

Choose one of these approaches:

- **Folder-based workspace:** a private shared folder the agent can access, with clearly named subfolders for recordings, transcripts, documents, brand files, photography, and approved outputs.
- **Repository-based workspace:** a private Git repository created from the toolkit’s project template. This gives the agent a stable record of project state, sources, questions, decisions, and approvals.

<div class="callout"><strong>Privacy rule:</strong> Never place church-specific transcripts, contact information, account access, internal disagreements, or unpublished content in the public Church Website Blueprint repository.</div>

<a class="inline-cta" href="{{ '/structure/' | relative_url }}">See the recommended project structure →</a>

## 4. Gather what already exists

Do not require a perfect content package. Ask for whatever is already available:

- current website URL, sitemap, analytics, and search reports;
- service times, locations, staff details, forms, and system links;
- mission, values, statement of faith, ministry descriptions, and newcomer materials;
- logo files, colors, fonts, signage, printed pieces, photography, and video;
- domain, hosting, website platform, giving, events, sermons, livestream, email, and church-management systems.

Record where each item lives, who owns it, whether it is current, and whether it may be published. If a site already exists, run the visitor-fit assessment before the main interview.

<a class="inline-cta" href="https://github.com/Digital-Deacon/church-website-blueprint/blob/main/playbook/03-existing-site-assessment.md">Open the Existing-Site Visitor-Fit Assessment ↗</a>

## 5. Record the first interview

Use any reliable recording and transcription tool. Get permission before recording, identify every speaker and role, and keep the recording and transcript private.

The interview is a conversation, not a form-reading exercise. Begin with the highest-value unknowns and use follow-up questions only when they help clarify something important.

<div class="interview-callout">
  <div>
    <strong>A useful default</strong>
    <p>Two conversations of roughly 90 minutes, followed by a shorter verification call. Smaller projects may need less; complex projects may need more.</p>
  </div>
  <a class="button primary" href="{{ '/interviews/' | relative_url }}">Open the interview guide</a>
</div>

During the conversation, keep separating:

- what is true now from what leaders hope will become true;
- approved church positions from one person’s description;
- information that may be public from information that must remain private;
- facts from strategic, design, or technology decisions.

## 6. Let the agent structure the transcript

Give the transcript to the project agent. It should preserve what was said and never fill gaps with likely-sounding church language.

The processing flow is:

<div class="artifact-flow" aria-label="Transcript processing flow">
  <span>Transcript</span><b>→</b><span>Individual claims</span><b>→</b><span>Open questions</span><b>→</b><span>DNA documents</span>
</div>

The output should tell you:

- what is confirmed;
- what needs confirmation;
- what the church still needs to decide;
- where sources disagree;
- what is aspirational or private;
- which question, document request, or decision should happen next.

After every interview, send participants a short **What We Heard + Open Questions** summary. They should not need to review raw transcripts or the entire internal file tree.

## 7. Approve the foundation before writing the website

Organize confirmed material into focused DNA documents: church identity, beliefs, Sunday experience, service details, ministries, next steps, leadership, giving, contact and care, brand, technology, and ownership.

These are clear internal source documents—not public web pages. Each subject has one canonical home so later pages can reuse the same approved truth without duplicating or changing it.

Approve the relevant DNA before turning it into public page copy.

## 8. Plan the visitor experience

Use the approved foundation to decide:

1. who the website must serve first;
2. what those visitors need to understand;
3. what concerns or questions the site must answer;
4. the most important next action;
5. the sitemap and job of every page;
6. which existing URLs must remain or redirect;
7. how success will be measured.

The site should help visitors understand the church, determine whether it may be a good fit, plan a first visit, and take the next appropriate step without digging through unnecessary information.

## 9. Write, design, and build from approved material

Create a brief for each page before writing it. Then turn approved DNA into concise public copy, keeping a source map for important claims.

Create a `design.md` that records the visual direction, typography, color, imagery, layout patterns, components, responsive behavior, accessibility, and platform constraints. Use real church photography when it is available and approved.

AI may propose copy, structure, and design. A responsible person must still review theological wording, factual claims, privacy, visual direction, and the final implementation.

<a class="inline-cta" href="https://github.com/Digital-Deacon/church-website-blueprint/blob/main/playbook/02-templates-and-prompts.md">Open the page, DNA, design, and AI templates ↗</a>

## 10. Test the website and hand off ownership

Before launch, test the site as a real visitor would:

- service times, location, parking, entrances, and accessibility information;
- children and youth information, next steps, forms, contact routes, and giving;
- mobile navigation, readability, keyboard use, contrast, images, and page speed;
- page titles, descriptions, headings, links, indexing controls, analytics, and redirects;
- factual accuracy, privacy, permissions, and approved wording.

Name a primary and backup administrator. Assign an owner and review rhythm for every area that changes: service information, staff, ministries, events, sermons, forms, giving, and seasonal content.

<div class="next-panel">
  <p class="eyebrow">Choose your next action</p>
  <h2>Ready to begin?</h2>
  <div>
    <a class="button primary" href="{{ '/interviews/' | relative_url }}">Prepare the first interview</a>
    <a class="button outline" href="{{ '/agents/' | relative_url }}">Set up an AI agent</a>
  </div>
</div>

</div>
