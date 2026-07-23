---
id: ADR-002
title: "Sprint 03C File Contract Conflict"
type: architecture-decision-record
status: proposed
version: 0.1.0
owner: project-maintainer
date: 2026-07-23
---

# ADR-002: Sprint 03C File Contract Conflict

## Purpose

Record the blocking conflict between Implementation Prompt 03C and the immutable
Project Olympus architecture before any learning-system or GATE-system content is
implemented.

## Status

Proposed. No architectural change has been applied.

## Context

Implementation Prompt 03C establishes mandatory execution guardrails:

1. Read `governance/AI_EXECUTION_RULES.md` before implementation.
2. Treat the Master Architecture as immutable.
3. Never rename files or directories.
4. Implement only files explicitly listed in the sprint.
5. Stop and generate an ADR when implementation requires architectural change.

The mandatory governance file does not exist:

```text
governance/AI_EXECUTION_RULES.md
```

The Master Architecture defines the following canonical Study System files:

```text
04-study-system/
├── curriculum-integration.md
├── learning-cycle.md
├── active-recall.md
├── spaced-practice.md
├── interleaving.md
├── problem-solving.md
├── error-log-protocol.md
├── note-making.md
├── concept-mastery-rubric.md
└── assessment-protocol.md
```

Prompt 03C instead requires files including:

```text
learning-science.md
spaced-repetition.md
retrieval-practice.md
deep-understanding.md
concept-mastery.md
mistake-log.md
revision-system.md
note-taking-system.md
knowledge-graph.md
memory-consolidation.md
focus-management.md
study-environment.md
study-checklists.md
study-metrics.md
```

The Master Architecture defines the following canonical GATE System files:

```text
05-gate-system/
├── syllabus-map.md
├── subject-sequencing.md
├── diagnostic-tests.md
├── concept-cycle.md
├── problem-practice-cycle.md
├── previous-year-questions.md
├── mock-test-system.md
├── revision-system.md
├── error-taxonomy.md
└── score-analysis.md
```

Prompt 03C instead requires files including:

```text
gate-execution-framework.md
subject-framework.md
topic-sequencing.md
revision-framework.md
pyq-framework.md
mock-test-framework.md
error-analysis.md
performance-review.md
knowledge-dashboard.md
decision-trees.md
adaptive-planning.md
resource-management.md
```

Adding the sprint-specific files would expand the normative file hierarchy.
Mapping them onto existing files would violate the instruction to implement only
the explicitly listed files. Renaming canonical files would violate both the
architecture and the sprint guardrails.

## Decision

No implementation decision is authorized by this ADR.

Sprint 03C is stopped before content generation. The Study System, GATE System,
registries, navigation, and prior sprint artifacts remain unchanged.

## Options Requiring Maintainer Decision

### Option A: Architecture-first mapping

Authorize implementation using only the canonical Master Architecture filenames.
Map Prompt 03C concepts into those existing documents and record the mapping in
the implementation report.

**Consequence:** preserves the architecture but does not create every filename
explicitly listed by Prompt 03C.

### Option B: Approve an architecture amendment

Approve the Prompt 03C filenames as additions or replacements in the normative
repository hierarchy, with migration and dependency-registry updates.

**Consequence:** satisfies the sprint file list but changes the architecture.

### Option C: Revise Prompt 03C

Issue a corrected implementation prompt whose file list exactly matches the
Master Architecture and either provide `governance/AI_EXECUTION_RULES.md` or
remove it from the mandatory read order.

**Consequence:** resolves both blockers without requiring interpretation during
implementation.

## Recommended Resolution

Option C is recommended because it preserves constitutional stability and makes
the implementation contract internally consistent.

## Consequences

- No learning or GATE content is generated in this sprint attempt.
- No future sprint content is generated.
- No canonical file is renamed, added, deleted, or repurposed.
- No implementation report is generated because implementation did not occur.
- Work can resume after a maintainer approves a resolution and supplies the
  missing governance artifact or explicitly waives it.

## Validation

| Check | Result |
|---|---|
| Master Architecture read | PASS |
| Foundation report read | PASS |
| Execution-system report read | PASS |
| `governance/AI_EXECUTION_RULES.md` available | FAIL — file absent |
| Requested filenames match architecture | FAIL |
| Architecture modified | PASS — no |
| Study or GATE content generated | PASS — no |
| Out-of-scope content generated | PASS — no |

## Cross References

- [Master Architecture](../../MASTER_ARCHITECTURE.md)
- [Foundation Implementation Report](../../01-operation-renaissance/FOUNDATION_IMPLEMENTATION_REPORT.md)
- [Execution System Implementation Report](../../01-operation-renaissance/EXECUTION_SYSTEM_IMPLEMENTATION_REPORT.md)
- [ADR Index](README.md)

## Acceptance Criteria

- [x] The blocking conflict is documented.
- [x] No unauthorized architecture change occurred.
- [x] Resolution options and consequences are explicit.
- [ ] Maintainer selects and approves a resolution.

## References

- [Master Architecture](../../MASTER_ARCHITECTURE.md)

