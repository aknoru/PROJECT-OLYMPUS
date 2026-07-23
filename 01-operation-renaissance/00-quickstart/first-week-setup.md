---
id: REN-QS-FIRST-WEEK
title: "First Week Setup"
type: protocol
status: approved
version: 0.1.0
owner: learner-operator
---

# First Week Setup

## Purpose

Produce a verified operating baseline during seven orientation days.

## Scope

The week configures the repository, workspace, calendar, and measurement
practice. It is not a compressed start to the technical curriculum.

## Theory

Orientation reduces uncertainty by testing the environment at low load. The
first week is a commissioning period: configure, observe, verify, and correct.

## Framework

| Day | Focus | Required evidence |
|---:|---|---|
| 1 | Repository initialization | Repository opens, writes, and preserves history |
| 2 | Workspace and software | Workspace inspection and software inventory |
| 3 | Folder and navigation verification | Required paths and links verified |
| 4 | Calendar and time audit | Fixed obligations and seven-day observation |
| 5 | Baseline metrics | Completed evidence-backed assessment |
| 6 | Charter review | Signed decisions and recorded constraints |
| 7 | Dry run and review | One simulated day and launch decision |

## Implementation

1. Confirm the canonical repository and current version.
2. Verify `MASTER_ARCHITECTURE.md`, quickstart, charter, and private-data paths.
3. Test the editor, Git workflow, backup restoration, and offline access.
4. Verify placeholder dashboards open; do not implement them in this sprint.
5. Record actual time use in 30-minute categories for seven days.
6. Collect baseline observations without setting invented targets.
7. Run one low-load simulated workday and close it with evidence.

## Checklist

- [ ] Repository initialization completed.
- [ ] Workspace and laptop checks passed.
- [ ] Software inventory recorded.
- [ ] Folder and dashboard paths verified.
- [ ] Backup restoration tested.
- [ ] Time audit completed.
- [ ] Baseline collected.
- [ ] Seven-day orientation reviewed.

## Decision Framework

Proceed if the dry run fits observed capacity and no launch-blocking risk remains.
Reduce planned load if scheduled work consumes more than 80% of discretionary
capacity. Defer if safety or essential access remains unresolved.

## Common Failure Modes

- Installing unnecessary software.
- Measuring an ideal week rather than the actual week.
- Filling all available time and leaving no buffer.
- Beginning advanced study before commissioning is complete.

## Recovery Strategy

Return to the earliest failed day, repair only the failed requirement, and repeat
the dry run. Do not restart completed checks without evidence they are invalid.

## Examples

If three nominal evening hours repeatedly yield 90 usable minutes, plan from 90
minutes. If a dashboard placeholder opens but contains no data, path verification
passes; dashboard implementation remains future work.

## References

- `SRC-NASA-SE-2016`
- `SRC-GOLLWITZER-1999`
- [Source register](../../references/source-register.yml)

## Cross References

- [Preflight Checklist](preflight-checklist.md)
- [Baseline Assessment](baseline-assessment.md)
- [Commitment Contract](../01-charter/commitment-contract.md)

## Next Steps

Record the launch decision in the [Campaign Charter](../01-charter/README.md).

## Acceptance Criteria

- [x] All required setup activities are scheduled.
- [x] Each day produces verifiable evidence.
