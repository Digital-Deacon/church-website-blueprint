# Contributing

## Good contributions

- a field report showing where a real participant became confused;
- a visitor task the rubric missed;
- a question that repeatedly produces vague or misleading answers;
- a source-fidelity failure and the guardrail that would prevent it;
- a template improvement backed by repeated use;
- accessibility, privacy, or maintenance improvements;
- clearer human or agent instructions.

## Protect church information

Sanitize all examples. Do not submit real transcripts, private contact routes, credentials, counseling information, unpublished disagreements, internal analytics, or identifiable stories without explicit authorization.

## Change process

1. Open an issue using the closest template.
2. Explain the observed problem before proposing a universal solution.
3. Include evidence from field use when possible.
4. Identify affected human assets, skill modes, templates, and versioning impact.
5. Make the smallest change that addresses the demonstrated problem.
6. Update tests, documentation, and changelog where appropriate.

Run the repository validation before submitting:

```bash
node scripts/validate.mjs
```

## Pull request checklist

- The public/private boundary is preserved.
- Church facts are not invented or implied.
- Human-facing assets remain simpler than the machinery beneath them.
- Required fields and statuses remain compatible, or the change is marked breaking.
- The skill validates.
- The project initializer has been run successfully.
- User-visible changes appear in `CHANGELOG.md`.
