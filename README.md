# Church Website Blueprint

An adaptive, source-faithful framework for using your preferred AI agent to discover, plan, write, design, and improve a church website.

> **Experimental status:** Version `0.1.0` is an early field-testing release. The architecture and templates are usable, but the complete workflow has not yet been validated across many church projects. Expect refinements as real projects reveal gaps.

The framework is designed to be used by people and an AI agent together:

- **People** supply church knowledge, source materials, decisions, correction, and approval through a simple guided process.
- **The agent** reads the portable skill, maintains project state, prepares interviews, structures evidence, identifies gaps, and creates the next artifact.

Bring the agentic system you already use. The repository is not tied to one model or product; it can work with Codex, Claude Code, OpenCode, OpenClaw, Hermes, or another agent that can read files, follow instructions, and maintain persistent project state.

The system works when a church arrives with a complete archive or with nothing beyond one knowledgeable person willing to talk.

## Start here

### I want to understand the human process

Read the [human-facing assets](playbook/00-human-facing-assets.md), then use the [interview guide](playbook/01-interview-guide.md). The published guide in `docs/` presents the same process as a walk-through.

### I want to connect my AI agent

Point the agent to [AGENTS.md](AGENTS.md) and ask it to use [`$run-church-website-project`](skills/run-church-website-project/SKILL.md).

Example:

> Read AGENTS.md and use the run-church-website-project skill. Initialize a private project for Grace Church. We have an existing website at [URL], and the first interview is next week.

### I want to create a private church workspace

```bash
node scripts/create-church-project.mjs \
  --name "Grace Church" \
  --out ../grace-church-website
```

The resulting directory contains the project state, coverage matrix, source folders, DNA library, strategy, copy, design, build, and launch structure. Initialize that directory as a separate private repository.

## Public toolkit, private projects

Do not store church transcripts, contact routing, account information, internal disagreements, unpublished beliefs, or other private project material in this public toolkit repository.

```text
church-website-blueprint/     Public framework and releases
grace-church-website/         Private project pinned to a framework version
another-church-website/       Separate private project
```

Each generated project records the toolkit version used to create it. Framework improvements are proposed here; church-specific work stays in that church's workspace.

## Repository map

```text
├── AGENTS.md                     Entry point for repository-aware agents
├── docs/                         GitHub Pages human guide
├── playbook/                     Canonical long-form process documentation
├── skills/
│   └── run-church-website-project/
│       ├── SKILL.md              Portable agent entry point
│       └── references/           Mode-specific agent instructions
├── templates/church-project/     Private project starter
├── scripts/
│   └── create-church-project.mjs Deterministic project initializer
└── .github/                      Contribution and issue templates
```

## Versioning

The toolkit uses semantic versioning:

- **Patch:** corrections and non-breaking clarification.
- **Minor:** new optional assets, questions, modes, or templates.
- **Major:** breaking changes to required artifacts, state, or workflow contracts.

Church projects pin the exact toolkit version in `workflow-lock.yml`. See [VERSIONING.md](VERSIONING.md).

Current version: **0.1.0**

## Publishing the guide

The `docs/` directory is ready for GitHub Pages. After creating the GitHub repository:

1. Open **Settings → Pages**.
2. Choose **Deploy from a branch**.
3. Select `main` and `/docs`.
4. Save.

No client or church project material should be copied into `docs/`; GitHub Pages is public.

For a local preview:

```bash
node scripts/build-docs-preview.mjs
python3 -m http.server 4173 --directory _site
```

See [GITHUB-SETUP.md](GITHUB-SETUP.md) for repository, Pages, Project, branch protection, and first-release setup.

## Contributing

Field experience should improve the framework without silently changing its promises. See [CONTRIBUTING.md](CONTRIBUTING.md) and use the issue templates for field reports, corrections, and proposals.

## License

This project is available under the [MIT License](LICENSE). You may use, modify, and redistribute it subject to that license.
