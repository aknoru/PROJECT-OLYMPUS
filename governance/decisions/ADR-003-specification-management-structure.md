---
id: ADR-003
title: "Specification Management Structure for Sprint 03E"
type: architecture-decision-record
status: proposed
version: 0.1.0
owner: project-maintainer
date: 2026-07-23
sprint: 03E
author: Codex
---

# ADR-003: Specification Management Structure for Sprint 03E

## Purpose

Record a new architectural conflict introduced by Implementation Prompt 03E
before any Research System or Technical Communication System content is created.

## Status

Proposed. Approval is required before implementation can continue.

## Problem

Prompt 03E requires the following mandatory inputs and persistent artifacts:

```text
99_SPECIFICATIONS/
├── SPEC-000_Prompt_Engineering_Standard.md
└── SPEC-003E_Research_System.md

PROMPT_HISTORY.md
VERSION_HISTORY.md
```

None of these paths exists. None is defined in the normative repository hierarchy
in `MASTER_ARCHITECTURE.md`.

Prompt 03E simultaneously requires:

- the Master Architecture to remain immutable;
- no new folders, aliases, parallel structures, or invented filenames;
- `SPEC-003E` to be created and registered if absent;
- specification and history files to be updated;
- implementation to stop and an ADR to be created when architectural
  modification is required.

Creating `99_SPECIFICATIONS/`, `PROMPT_HISTORY.md`, or `VERSION_HISTORY.md` would
expand the canonical hierarchy. Proceeding without them would violate the
mandatory input, specification-management, and acceptance requirements.

Prompt 03E also directs ADRs to `governance/ADR/`, while the Master Architecture
defines the canonical ADR location as:

```text
governance/decisions/
```

Under the prompt’s own precedence rule, the Master Architecture wins. This ADR is
therefore stored in `governance/decisions/`.

## Impact

- `99_SPECIFICATIONS/SPEC-000_Prompt_Engineering_Standard.md` cannot be read.
- `99_SPECIFICATIONS/SPEC-003E_Research_System.md` cannot be generated without
  architectural authorization.
- Specification versioning cannot be performed as requested.
- `PROMPT_HISTORY.md` and `VERSION_HISTORY.md` cannot be updated because they are
  noncanonical and absent.
- The 03E acceptance criterion “Specification updated” cannot pass.
- Research and communication implementation must not begin.
- No navigation, dependency, source, or content registry is changed by this
  stopped sprint attempt.

## Possible Solutions

### Option A: Approve an architecture amendment

Add the following canonical paths to the Master Architecture:

```text
99_SPECIFICATIONS/
├── README.md
├── SPEC-000_Prompt_Engineering_Standard.md
└── SPEC-003E_Research_System.md

PROMPT_HISTORY.md
VERSION_HISTORY.md
```

Define their ownership, schemas, version rules, navigation, registry authority,
and relationship to `99_AI_PROMPTS/`, `CHANGELOG.md`, and ADRs.

**Impact:** fully supports specification-driven development but changes the
repository constitution and requires a migration/version decision.

### Option B: Map specification management onto canonical structures

Use existing architecture-defined artifacts:

| Prompt 03E concept | Canonical substitute |
|---|---|
| Prompt engineering standard | `governance/AI_EXECUTION_RULES.md` |
| Sprint specification | `99_AI_PROMPTS/Prompt_XX.md` or implementation report |
| Prompt history | Git history plus `CHANGELOG.md` |
| Version history | `CHANGELOG.md` plus `VERSION` |
| ADR path | `governance/decisions/` |

Issue a revised Prompt 03E that names only these canonical paths and removes the
missing specifications from the mandatory read order.

**Impact:** preserves the architecture but does not create a separate
specification-management subsystem.

### Option C: Defer specification-driven development

Remove all `99_SPECIFICATIONS/`, prompt-history, and version-history requirements
from Sprint 03E. Implement only the canonical Research and Communication files,
their navigation, registries, references, and report.

**Impact:** smallest change; specification management remains a future
architecture proposal.

## Recommendation

Choose **Option B** unless a permanent repository-wide specification subsystem is
an intentional architectural requirement.

Option B preserves the constitutional hierarchy, avoids parallel change
histories, and uses existing governance, prompt, changelog, version, and ADR
mechanisms. A revised Prompt 03E should explicitly map its specification
requirements to those canonical artifacts.

## Decision Required

The maintainer must select and approve Option A, B, C, or another documented
resolution.

No implementation is authorized by this proposed ADR.

## Consequences

- No Research System file has been implemented or modified.
- No Technical Communication System file has been implemented or modified.
- No noncanonical specification or history path has been created.
- Prior sprint artifacts remain unchanged.
- Sprint 03E can resume only after the structural conflict is resolved.

## Validation

| Check | Result |
|---|---|
| Master Architecture read | PASS |
| AI Execution Rules read | PASS |
| Reports 03A through 03D read | PASS |
| `SPEC-000` exists | FAIL |
| `SPEC-003E` exists | FAIL |
| `PROMPT_HISTORY.md` exists | FAIL |
| `VERSION_HISTORY.md` exists | FAIL |
| Required paths are canonical | FAIL |
| Architecture modified | PASS — no |
| Research or communication content generated | PASS — no |
| Scope violation | PASS — none |

## Cross References

- [Master Architecture](../../MASTER_ARCHITECTURE.md)
- [AI Execution Rules](../AI_EXECUTION_RULES.md)
- [Foundation Report](../../01-operation-renaissance/FOUNDATION_IMPLEMENTATION_REPORT.md)
- [Execution Report](../../01-operation-renaissance/EXECUTION_SYSTEM_IMPLEMENTATION_REPORT.md)
- [Learning and GATE Report](../../01-operation-renaissance/LEARNING_AND_GATE_IMPLEMENTATION_REPORT.md)
- [Placement and Project Report](../../01-operation-renaissance/PLACEMENT_AND_PROJECT_IMPLEMENTATION_REPORT.md)
- [ADR Index](README.md)

## Acceptance Criteria

- [x] Problem and architectural conflict are explicit.
- [x] Impact is documented.
- [x] Possible solutions are compared.
- [x] A recommendation is recorded.
- [x] No unauthorized implementation occurred.
- [ ] Maintainer decision is approved.

## References

- [Master Architecture](../../MASTER_ARCHITECTURE.md)
- [AI Execution Rules](../AI_EXECUTION_RULES.md)
