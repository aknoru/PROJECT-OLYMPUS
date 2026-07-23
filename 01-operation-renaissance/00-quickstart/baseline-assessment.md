---
id: REN-QS-BASELINE
title: "Baseline Assessment"
type: assessment
status: approved
version: 0.1.0
owner: learner-operator
privacy: private-observations
---

# Baseline Assessment

## Purpose

Create an evidence-backed starting profile without fabricating scores or judging
personal worth.

## Scope

This assessment supports planning. It is not a clinical, diagnostic, hiring, or
financial-suitability instrument.

## Theory

A baseline is useful when it is repeatable, connected to evidence, and interpreted
within its measurement limits. Self-estimates are marked separately from tested
performance.

## Framework

Use this four-level rubric for every domain:

| Score | Operational meaning | Evidence standard |
|---:|---|---|
| 0 | Not assessed | No valid observation |
| 1 | Fragile | Task cannot yet be completed reliably without substantial support |
| 2 | Functional | Representative task completed with some errors or assistance |
| 3 | Independent | Representative task completed accurately and explained |
| 4 | Transferable | Skill applied to a novel task with verified evidence |

## Implementation

| Domain | Assessment task | Evidence |
|---|---|---|
| Current knowledge | Map known, uncertain, and untested prerequisite topics. | Diagnostic results |
| Current habits | Review 14 days of observed routines. | Log, not memory alone |
| Sleep | Record timing and opportunity for seven days. | Private log |
| Health | Record relevant limitations and support needs. | Private self-report |
| Exercise | Record two weeks of actual activity. | Private log |
| Communication | Deliver a three-minute technical explanation and 300-word memo. | Recording and rubric |
| Programming | Implement and test a small program without copying. | Repository evidence |
| Engineering | Solve a mixed prerequisite set and explain two solutions. | Scored work |
| Projects | Audit requirements, tests, documentation, and demos of prior work. | Artifact links |
| Research | Locate, summarize, and critique one primary paper. | Paper note |
| Time management | Compare planned and observed time for seven days. | Time audit |
| Attention | Run five focused blocks and record interruptions. | Block log |
| Stress | Record perceived load and functional impact; do not self-diagnose. | Private trend |
| Financial awareness | Explain cash flow, emergency buffer, debt cost, and fraud risks. | Written response |

For each domain record: date, task, conditions, score, confidence (`low`,
`medium`, `high`), evidence path, observed errors, and reassessment date.

## Checklist

- [ ] All domains are assessed or explicitly marked `0`.
- [ ] Scores cite evidence.
- [ ] Sensitive data remains private.
- [ ] No score is converted into a predicted rank, salary, or diagnosis.

## Decision Framework

Prioritize a domain when it is a dependency, scores 0–1, and blocks a campaign
objective. Maintain score-2 capabilities. Use score 3–4 evidence to reduce
unnecessary review, not to skip verification.

## Common Failure Modes

- Inflating scores from familiarity.
- Comparing scores across unrelated domains.
- Using a single good or bad day as a stable estimate.
- turning health or stress observations into self-diagnosis.

## Recovery Strategy

When evidence is invalid, mark the result `0`, document why, and reassess under
standard conditions. When distress or health limitations are material, pause
load decisions and seek appropriate support.

## Examples

Reading C code is not evidence of independent programming. A compiled,
self-written program with tests can support score 3. Recognizing a formula is not
retrieval; deriving and applying it unaided provides stronger evidence.

## References

- `SRC-ROEDIGER-KARPICKE-2006`
- `SRC-CEPEDA-2006`
- [Source register](../../references/source-register.yml)

## Cross References

- [Campaign Objectives](../01-charter/objectives.md)
- [Success Definition](../01-charter/success-model.md)
- [Constraints](../01-charter/constraints.md)

## Next Steps

Transfer only prioritized gaps and verified strengths into the charter decision.

## Acceptance Criteria

- [x] Fourteen requested domains and scoring rubrics are present.
- [x] Scores must be supplied by the operator from evidence.
