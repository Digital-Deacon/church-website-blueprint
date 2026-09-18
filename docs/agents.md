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

Replace the bracketed details if you know them. It is fine to leave them unknown and let the agent ask.

<div class="copy-block">
<button type="button" class="copy-button" data-copy-target="agent-setup-prompt">Copy prompt</button>
<pre id="agent-setup-prompt"><code>Use the Church Website Blueprint:
https://github.com/Digital-Deacon/church-website-blueprint

Read AGENTS.md completely. Then read
skills/run-church-website-project/SKILL.md and only the reference files
needed for our current phase.

Help us create or improve the website for [Church Name].
Our current website is [URL / none / unknown].
We believe this is a [new site / redesign / focused improvement / undecided].

Create a separate private project workspace. Never store church transcripts,
personal information, credentials, internal decisions, analytics exports, or
unpublished content in the public toolkit repository.

Guide us one useful step at a time. Begin by determining the project path,
who knows the church, who can approve the work, what evidence already exists,
and how interviews will be recorded and transcribed.

Use interviews and supplied materials as sources. Do not invent church facts,
doctrine, programs, policies, promises, stories, biographies, or operational
details. Separate current truth from aspiration, record contradictions, mark
private information, and turn missing evidence into follow-up questions.

Maintain the project state, coverage matrix, open questions, decision log,
approvals, source files, and appropriate project artifacts. Tell the human
what to prepare, discuss, decide, or approve next without exposing them to the
entire internal file tree.
</code></pre>
</div>

## What happens next

<ol class="agent-sequence">
  <li><span>01</span><div><h3>The agent reads the framework</h3><p>`AGENTS.md` provides repository-wide rules. The portable skill routes the agent to the instructions for starting, assessment, discovery, content and design, or launch.</p></div></li>
  <li><span>02</span><div><h3>The agent creates a private workspace</h3><p>The project template separates church sources and working files from the public toolkit and pins the framework version being used.</p></div></li>
  <li><span>03</span><div><h3>The agent asks the human what matters now</h3><p>It determines the project type, existing evidence, participants, approvers, constraints, and first useful action.</p></div></li>
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

<div class="next-panel">
  <p class="eyebrow">Agent connected?</p>
  <h2>Now run the first launch conversation.</h2>
  <div>
    <a class="button primary" href="{{ '/humans/' | relative_url }}">Follow the human guide</a>
    <a class="button outline" href="{{ '/interviews/' | relative_url }}">Open the interview questions</a>
  </div>
</div>

</div>
