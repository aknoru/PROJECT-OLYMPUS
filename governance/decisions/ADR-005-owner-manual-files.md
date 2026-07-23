---
id: ADR-005
title: "Owner's Manual Root Files Conflict"
type: architecture-decision-record
status: proposed
version: 0.1.0
owner: project-maintainer
date: 2026-07-23
---

# ADR-005: Owner's Manual Root Files Conflict

## Purpose

Record the conflict between the requested root-level owner's manual deliverables
and the approved Project Olympus file hierarchy.

## Status

Proposed. No owner's manual or implementation report is authorized or created.

## Context

The Owner's Manual prompt requires two new root-level documents:

```text
GUIDE.md
GUIDE_IMPLEMENTATION_REPORT.md
```

Neither file exists in the normative hierarchy defined by the
[Master Architecture](../../MASTER_ARCHITECTURE.md). The architecture instead
assigns repository documentation to canonical files under `docs/`, including:

```text
docs/index.md
docs/quickstart.md
docs/navigation.md
docs/system-model.md
docs/lifecycle.md
docs/faq.md
docs/migration-guide.md
```

The prompt simultaneously declares the architecture immutable. The approved
[AI Execution Rules](../AI_EXECUTION_RULES.md) prohibit unapproved filenames,
aliases, parallel structures, and silent architectural changes.

## Decision

Stop before creating either requested root file. Archive the prompt in canonical
prompt slot 18 and request an explicit architecture decision.

## Options Requiring Maintainer Decision

### Option A: Approve the Root-Level Manual

Amend the Master Architecture to add `GUIDE.md` and
`GUIDE_IMPLEMENTATION_REPORT.md`, including ownership, navigation, lifecycle,
versioning, and relationship to existing documentation.

### Option B: Map the Manual to Canonical Documentation

Issue a revised prompt authorizing the operational manual to be distributed
across existing canonical `docs/` files. Use the changelog and generated
repository reports as implementation evidence instead of adding another
root-level report.

### Option C: Approve One Canonical Manual Under `docs/`

Amend the architecture with a single `docs/owner-manual.md` and omit the
one-time implementation report. This minimizes duplication but still requires
an approved structural change.

## Recommendation

Choose Option B. It preserves progressive disclosure, avoids duplicating the
root README and existing operational documents, and keeps each topic with its
canonical owner.

## Consequences

- No noncanonical root file is added.
- Existing documentation remains unchanged.
- The requested operational guidance remains deferred pending approval or a
  revised canonical mapping.
- Repository architecture and released systems remain intact.

## Validation

| Check | Result |
|---|---|
| Required constitutional and release files reviewed | PASS |
| Implementation reports reviewed | PASS |
| `GUIDE.md` canonical | FAIL |
| `GUIDE_IMPLEMENTATION_REPORT.md` canonical | FAIL |
| Architecture approval present | FAIL |
| Existing architecture modified | PASS — no |

## Cross References

- [Master Architecture](../../MASTER_ARCHITECTURE.md)
- [AI Execution Rules](../AI_EXECUTION_RULES.md)
- [ADR Index](README.md)
- [Documentation Index](../../docs/index.md)
- [Archived Prompt](../../99_AI_PROMPTS/Prompt_18.md)

## Acceptance Criteria

- [x] The filename and ownership conflict is recorded.
- [x] Canonical mapping options are provided.
- [x] Existing architecture remains unchanged.
- [ ] Maintainer approves an option or supplies a revised prompt.

## References

- [Master Architecture](../../MASTER_ARCHITECTURE.md)
- [AI Execution Rules](../AI_EXECUTION_RULES.md)
