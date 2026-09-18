# Versioning Policy

## Two versions matter

1. **Toolkit version** identifies a public release such as `0.2.0`.
2. **Project schema version** identifies the required private-project structure.

The toolkit begins at `0.1.0` with project schema `1`.

## Semantic version rules

### Patch release

Use `0.1.1` for corrections that do not require project migration:

- clearer question wording;
- typo or broken-link corrections;
- additional examples;
- rubric clarification that preserves existing fields and statuses.

### Minor release

Use `0.2.0` for backward-compatible capabilities:

- a new optional review packet;
- an additional visitor lens;
- a new optional skill mode;
- additive template fields;
- improved documentation or initialization options.

### Major release

Use `1.0.0` or the next major version when projects must change to remain compatible:

- renamed or removed required files;
- changed meaning of a status or approval gate;
- new required project state;
- incompatible skill input/output contracts;
- major restructuring of canonical DNA ownership.

## Project pinning

Every generated project contains:

```yaml
toolkit: church-website-blueprint
toolkit_version: 0.1.0
project_schema: 1
created_on: YYYY-MM-DD
```

Do not silently update a project's pinned version. Review release notes and apply any migration guide deliberately.

## Release process

1. Collect approved changes under `Unreleased` in `CHANGELOG.md`.
2. Decide patch, minor, or major scope.
3. Update `VERSION`, the changelog, skill metadata if needed, and template lock version.
4. Validate the skill and initializer.
5. Review the human guide and Pages output.
6. Tag the commit as `vX.Y.Z`.
7. Publish a GitHub Release with generated notes plus any migration steps.

GitHub releases are the stable distribution points. Projects should pin a release tag rather than an arbitrary branch state.

