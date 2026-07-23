---
id: REN-CHARTER-EXIT-CRITERIA
title: "Exit Criteria"
type: verification
status: approved
version: 0.1.0
owner: project-maintainer
---

# Exit Criteria

## Purpose

Define evidence required to declare the campaign complete.

## Scope

Criteria concern completed systems and demonstrated behaviors. They exclude
guaranteed ranks, admissions, salaries, interviews, offers, or investment returns.

## Theory

Exit criteria prevent schedule completion from being confused with verified
completion. They should be assessed against artifacts and review records.

## Framework

| ID | Completion condition | Verification evidence |
|---|---|---|
| REN-EXIT-01 | Campaign configuration and charter are complete. | Approved configuration and signed status |
| REN-EXIT-02 | Required review cadence was operated or exceptions documented. | Review records |
| REN-EXIT-03 | Priority foundations were assessed, practiced, and reassessed. | Before/after evidence |
| REN-EXIT-04 | GATE preparation system produced reviewed assessment evidence. | Syllabus-linked records |
| REN-EXIT-05 | Placement system produced role-linked readiness evidence. | Resume, applications, interview reviews |
| REN-EXIT-06 | At least one technical project passed requirements, test, documentation, and release gates. | Reproducible project release |
| REN-EXIT-07 | FPGA, embedded, or architecture foundations are demonstrated. | Tested artifact and explanation |
| REN-EXIT-08 | Research and communication readiness artifacts are reviewed. | Paper note, memo, presentation |
| REN-EXIT-09 | Health, resilience, finance, privacy, and safety guardrails were respected. | Private review status, no sensitive disclosure |
| REN-EXIT-10 | Final review documents evidence, gaps, failures, and next decisions. | Approved final review |

## Implementation

At campaign close, mark each condition `met`, `partially met`, `not met`, or `not
assessable`. Cite evidence and reviewer. `Partially met` is not completion.

## Checklist

- [ ] Every criterion has evidence.
- [ ] Evidence is reproducible or reviewable.
- [ ] Limitations and assistance are disclosed.
- [ ] No external outcome substitutes for a criterion.

## Decision Framework

Declare `complete` only when all mandatory criteria are met. Otherwise declare
`incomplete`, `terminated with record`, or `transitioned to remediation`.

## Common Failure Modes

- Declaring success because 184 days elapsed.
- Counting private or inaccessible artifacts without review.
- Substituting an exam score for system evidence.

## Recovery Strategy

Identify unmet dependencies, choose a bounded remediation cycle, and preserve the
original close report. Never rewrite history.

## Examples

A rejected application does not invalidate completed placement preparation. A
project demo without tests does not satisfy the project exit criterion.

## References

- `SRC-NASA-SE-2016`

## Cross References

- [Success Definition](success-model.md)
- [Objectives](objectives.md)
- [Commitment Contract](commitment-contract.md)

## Next Steps

Future sprints may add verified measures and review protocols without changing
these criteria except through charter control.

## Acceptance Criteria

- [x] Completion uses measurable behaviors and completed systems.
- [x] Deterministic external promises are excluded.
