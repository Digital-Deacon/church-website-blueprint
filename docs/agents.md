---
layout: default
title: Connect Your AI Agent
description: How to point any file-capable AI agent to Church Website Blueprint and begin a private project.
permalink: /agents/
---

<div class="prose guide-page agent-page" markdown="1">

<p class="eyebrow page-eyebrow">Bring your own AI</p>

# Connect your AI agent

<p class="page-lead">Church Website Blueprint is a portable operating framework, not a separate AI product. Use it with Codex, Claude Code, OpenCode, OpenClaw, Hermes, or another agentic system that can read files, follow instructions, and maintain project state.</p>

<div class="quick-start">
  <strong>What the toolkit gives your agent</strong>
  <p>A coherent process for what to learn, how to conduct discovery, how to structure evidence, what it may not invent, which documents to create, and how to move from project launch through website launch.</p>
</div>

## Copy this into your agent

Paste this prompt as-is. You do not need to fill in a template or know all the answers first. The agent will begin with a short setup conversation and record the answers for you.

<div class="copy-block" id="agent-setup-prompt" markdown="1">
<button type="button" class="copy-button" data-copy-target="agent-setup-prompt">Copy prompt</button>

```text
Use the Church Website Blueprint:
https://github.com/Digital-Deacon/church-website-blueprint

Read AGENTS.md completely. Then read
skills/run-church-website-project/SKILL.md and only the reference files
needed for our current phase.

Start a church website project with me. Do not ask me to complete a template,
questionnaire, or placeholders before we begin. Lead a short, conversational
setup and capture the answers in the project files yourself.

Ask for only what you need to initialize the project, including:
- the church name and primary contact;
- whether this is a new site, full redesign, focused improvement, or unclear;
- any current website URL;
- why the project is happening now and what should become clearer or easier;
- who knows the church and who can approve facts, theology, design,
  technology, and launch;
- what source materials, brand assets, and photography already exist;
- known timing, budget, platform, privacy, or staffing constraints;
- where the private project workspace should live; and
- how interviews will be recorded and transcribed.

Ask these naturally in small groups, not as one large form. Accept "unknown"
as a valid answer and do not block setup when I have no preparation. Do not
infer answers I did not give. After the setup conversation, summarize what
you heard, initialize the private workspace, record unknowns as open questions,
and give me one concrete next action.

Create a separate private project workspace. Never store church transcripts,
personal information, credentials, internal decisions, analytics exports, or
unpublished content in the public toolkit repository.

Guide us one useful step at a time.

Use interviews and supplied materials as sources. Do not invent church facts,
doctrine, programs, policies, promises, stories, biographies, or operational
details. Separate current truth from aspiration, record contradictions, mark
private information, and turn missing evidence into follow-up questions.

Maintain the project state, coverage matrix, open questions, decision log,
approvals, source files, and appropriate project artifacts. Tell the human
what to prepare, discuss, decide, or approve next without exposing them to the
entire internal file tree.
```

</div>

## What happens next

<ol class="agent-sequence">
  <li><span>01</span><div><h3>The agent reads the framework</h3><p><code>AGENTS.md</code> provides repository-wide rules. The portable skill routes the agent to the instructions for starting, assessment, discovery, content and design, or launch.</p></div></li>
  <li><span>02</span><div><h3>The agent runs a short setup conversation</h3><p>It asks for the church name, project type, current website, goal, people, existing materials, constraints, workspace, and interview setup. “Unknown” is always an acceptable answer.</p></div></li>
  <li><span>03</span><div><h3>The agent creates a private workspace</h3><p>It records the answers for you, turns missing information into open questions, and uses the project template to keep church sources and working files out of the public toolkit.</p></div></li>
  <li><span>04</span><div><h3>The agent prepares the next conversation</h3><p>It assesses what is already known and creates a short Conversation Brief using the highest-value unanswered questions.</p></div></li>
  <li><span>05</span><div><h3>The human records the interview</h3><p>People supply the church knowledge. The recording and transcript are saved as private source material.</p></div></li>
  <li><span>06</span><div><h3>The agent structures and advances the project</h3><p>It extracts claims, finds gaps, creates DNA and downstream artifacts, requests approvals, and always leaves one concrete next action.</p></div></li>
</ol>

## What the agent manages

<div class="agent-manages">
  <div><strong>Project memory</strong><span>Current phase, coverage, open questions, decisions, approvals, risks, and next action</span></div>
  <div><strong>Source fidelity</strong><span>Transcripts, supplied documents, individual claims, source locations, conflicts, privacy, and confidence</span></div>
  <div><strong>Discovery</strong><span>Existing-site assessment, adaptive interview briefs, post-interview summaries, and follow-up routing</span></div>
  <div><strong>Website foundation</strong><span>Atomic DNA documents for identity, beliefs, experience, ministries, operations, brand, technology, and ownership</span></div>
  <div><strong>Production</strong><span>Visitor strategy, sitemap, page briefs, copy, `design.md`, implementation guidance, and review packets</span></div>
  <div><strong>Launch</strong><span>Visitor journeys, accessibility, search fundamentals, factual checks, privacy, redirects, integrations, and maintenance ownership</span></div>
</div>

## What the human still does

The framework does not replace people who know the church. Humans must:

- answer interview questions and supply source material;
- distinguish current reality from hopes and preferences;
- identify sensitive or private information;
- make strategic, theological, operational, and visual decisions;
- correct the agent when it misunderstands a source;
- approve facts, DNA, strategy, copy, design, and launch;
- own the finished website and keep changing information current.

## Technical setup for a local coding agent

If the agent can run commands and work with a Git repository, clone or download the public toolkit and initialize the church project from it:

```bash
node scripts/create-church-project.mjs \
  --name "Grace Church" \
  --out ../grace-church-website
```

The generated workspace contains project state, source storage, the fact ledger, DNA library, strategy, copy, design, build, and launch areas. Initialize that new workspace as a separate **private** repository.

If the agent cannot run the initializer, it may reproduce the same structure from `templates/church-project/` in a private workspace. The file names and state contracts should remain unchanged.

## Agent entry points

<div class="resource-list compact-resources">
  <a href="https://github.com/Digital-Deacon/church-website-blueprint/blob/main/AGENTS.md"><span>Rules</span><strong>AGENTS.md</strong><em>Repository entry point, privacy boundary, source-fidelity rules, and required project state.</em><b>Open ↗</b></a>
  <a href="https://github.com/Digital-Deacon/church-website-blueprint/blob/main/skills/run-church-website-project/SKILL.md"><span>Skill</span><strong>Run Church Website Project</strong><em>Portable router for orientation, assessment, discovery, content, design, review, and launch.</em><b>Open ↗</b></a>
  <a href="https://github.com/Digital-Deacon/church-website-blueprint/tree/main/templates/church-project"><span>Files</span><strong>Private Project Template</strong><em>The stable workspace structure the agent reads and updates throughout the project.</em><b>Open ↗</b></a>
</div>

## Optional: build and deploy through B1.church

If the church chooses B1.church, an MCP-aware agent can connect to B1’s authenticated MCP server, discover the current REST routes, load the page-builder guide, and work with website pages through the API.

Use a church-scoped API key with only the permissions the agent needs. The agent should inspect the live route inventory and page-builder description before making changes, show the human what it intends to create or update, obtain authorization for writes, and verify the published result afterward.

<div class="b1-note">
  <strong>Why it fits this workflow</strong>
  <p>B1 combines the hosted public website with the church’s member portal, giving, sermons, livestreaming, events, groups, forms, people, attendance, and check-in. The framework remains platform-independent; B1 is simply an optional path with unusually direct agent access.</p>
  <p><a href="https://www.b1.church/">Explore B1.church ↗</a> <a href="https://support.churchapps.org/docs/developer/api/mcp/">Open the official MCP guide ↗</a></p>
</div>

<div class="next-panel">
  <p class="eyebrow">Agent connected?</p>
  <h2>Now run the first launch conversation.</h2>
  <div>
    <a class="button primary" href="{{ '/humans/' | relative_url }}">Follow the human guide</a>
    <a class="button outline" href="{{ '/interviews/' | relative_url }}">Run the first interview</a>
  </div>
</div>

</div>
