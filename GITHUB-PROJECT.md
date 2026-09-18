# GitHub Project Setup

Use a GitHub Project to manage improvements to this public toolkit. Do not put specific church engagement work on the public board.

## Fields

| Field | Type | Values |
|---|---|---|
| Status | Single select | Inbox, Ready, In progress, In review, Done |
| Area | Single select | Human guide, Agent skill, Templates, Critique, Content pipeline, Website, Governance |
| Change type | Single select | Bug, Clarification, New capability, Field learning, Breaking change |
| Priority | Single select | P0, P1, P2, P3 |
| Target release | Iteration or text | Current planned version |
| Evidence | Text | Sanitized issue, example, or field report link |

## Views

### Current release

Filter to the target release and group by Status.

### Roadmap

Group by Target release and show incomplete items.

### Field reports

Filter Change type to Field learning. Use this as the evidence queue, not an automatic backlog of requested features.

### Agent and templates

Filter Area to Agent skill, Templates, Critique, or Content pipeline.

### Human guide and website

Filter Area to Human guide or Website.

### Breaking changes

Filter Change type to Breaking change. Require migration notes before moving to Done.

## Automation

- Auto-add issues and pull requests from this repository.
- Set new items to Inbox.
- Set pull requests to In review when opened.
- Set merged pull requests and closed issues to Done.

## Decision rule

An observation from one church may justify an issue. It becomes a framework change only when the improvement is reusable, preserves source fidelity, and does not make the human process needlessly heavier.

