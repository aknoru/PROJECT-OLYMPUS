---
id: DOCS-LIFECYCLE-MD
title: "Review Cadence"
type: operational-guide
status: active
version: 1.2.0
owner: project-maintainer
---

# Review Cadence

## Purpose

Define when Olympus observes execution, updates plans, and changes the system.

## Daily Loop

`Select → Execute → Verify → Record → Close`

Daily changes should be limited to evidence, task state, blockers, and the next
action. Avoid redesigning the system during the work block.

## Weekly Loop

1. Collect completed evidence and unresolved errors.
2. Compare planned and actual capacity.
3. Review work in progress and remove stale commitments.
4. Identify the highest-leverage technical weakness.
5. Select the next weekly outcome and acceptance evidence.
6. Run repository validation after documentation or data changes.
7. Commit the review and resulting plan.

## Monthly Loop

1. Review leading actions, lagging evidence, capacity, and risk.
2. Inspect recurring failure modes rather than isolated bad days.
3. Review technical debt and repository health.
4. Adjust roadmap scope without concealing missed work.
5. Record decisions and their evidence.

## Change-Control Gate

| Change | Required control |
|---|---|
| Daily evidence or plan | Normal commit |
| Protocol clarification | Review and validation |
| Canonical filename or structure | Approved ADR |
| Metric definition or threshold | Registry review |
| Release | Release workflow and acceptance evidence |

## Navigation

- [Command Center](index.md)
- [Start Today](quickstart.md)
- [Repository Health](repository-health.md)
- [Architecture Decisions](adrs.md)

## Cross References

- [Weekly System](../01-operation-renaissance/03-execution-system/weekly-system.md)
- [Monthly System](../01-operation-renaissance/03-execution-system/monthly-system.md)
- [Review System](../01-operation-renaissance/13-review-system/README.md)

## References

- [Master Architecture](../MASTER_ARCHITECTURE.md)

## Revision History

| Version | Change |
|---|---|
| 1.2.0 | Implemented daily, weekly, monthly, and change-control loops. |

