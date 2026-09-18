# GitHub Repository Setup

## Before publishing

Decide:

- repository owner: personal account or organization;
- final repository name;
- public or private visibility;
- license;
- private security contact;
- whether outside contributors may open issues and pull requests.

For the intended reusable/community model, a public repository is the clearest fit. Keep every church engagement in a separate private repository.

## Create the repository

From this directory, after selecting the owner and visibility:

```bash
git init -b main
git add .
git commit -m "Initial Church Website Blueprint 0.1.0"

gh repo create OWNER/church-website-blueprint \
  --public \
  --source . \
  --remote origin \
  --push
```

The initial repository uses the MIT License.

## Repository settings

### General

- Add the description from `docs/_config.yml`.
- Add relevant topics such as `church-website`, `content-strategy`, `design-process`, `agent-skill`, and `discovery`.
- Enable Issues.
- Enable Discussions if community questions and field learning should be separate from actionable issues.
- Disable Wikis unless a clear wiki-specific use emerges; the versioned playbook should remain the source of truth.

### GitHub Pages

1. Open **Settings → Pages**.
2. Select **Deploy from a branch**.
3. Select branch `main` and folder `/docs`.
4. Save and verify the published URL.

Publishing from `main/docs` is appropriate because the guide uses GitHub Pages' standard Jekyll processing and does not require a custom application build.

### Branch protection

Protect `main` once collaboration begins:

- require pull requests;
- require at least one approval for outside contributions;
- dismiss stale approvals after meaningful changes;
- require conversation resolution;
- prevent force pushes and deletion;
- add automated checks when they exist.

The initial solo-maintainer phase may keep direct pushes enabled until the first release process is proven.

### Labels

Create labels matching the issue and project model:

- `field-learning`
- `proposal`
- `needs-triage`
- `human-guide`
- `agent-skill`
- `templates`
- `critique`
- `content-pipeline`
- `website`
- `breaking-change`
- `privacy`
- `accessibility`

## Create the GitHub Project

Use [GITHUB-PROJECT.md](GITHUB-PROJECT.md) to create fields, views, and workflows. The Project manages this toolkit's improvement roadmap. It does not contain private church work.

If the repository moves into a GitHub organization, make the Project an organization template so future process-oriented repositories can reuse its fields and views.

## First release

After the repository and Pages site are verified:

1. confirm the MIT License is present;
2. run skill and initializer validation;
3. review the changelog and version;
4. commit the final release state;
5. tag `v0.1.0`;
6. create the GitHub Release from that tag;
7. mark it as a pre-release if field testing is still incomplete;
8. link the published guide and describe the public/private project boundary.

## Active church projects

Initialize each project from a tagged release and keep its `workflow-lock.yml` committed in the private repository. Do not point live projects at an unversioned `main` branch and assume future changes are compatible.
