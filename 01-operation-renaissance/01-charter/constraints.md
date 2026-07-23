---
id: REN-CHARTER-CONSTRAINTS
title: "Campaign Constraints"
type: charter
status: approved
version: 0.1.0
owner: learner-operator
---

# Campaign Constraints

## Purpose

Define boundaries that limit permissible campaign plans and decisions.

## Scope

Constraints cover time, capacity, safety, resources, privacy, law, ethics, and
institutional obligations.

## Theory

Constraints are design inputs, not personal defects. A feasible system allocates
work inside observed capacity and preserves margin for variation.

## Framework

| Constraint | Required treatment |
|---|---|
| 184-day boundary | Configure dates; do not compress missed work |
| Academic/employment duties | Enter as fixed commitments |
| Available time | Base plans on observed, not nominal, capacity |
| Health and recovery | Override output targets when safety requires |
| Equipment and money | Prefer existing, sufficient tools |
| Privacy | Keep personal data in ignored private storage |
| Law and licenses | Use authorized software, sources, and assets |
| Ethics and integrity | No fabricated evidence or concealed assistance |
| Work in progress | Limit concurrent commitments |
| Uncertainty | Preserve buffer and review assumptions |

## Implementation

Record each local constraint with owner, evidence, affected objectives, severity,
review date, and response. Do not commit sensitive details.

## Checklist

- [ ] Fixed obligations are calendared.
- [ ] Capacity is based on observation.
- [ ] Safety and privacy boundaries are accepted.
- [ ] Resource assumptions are verified.

## Decision Framework

When a plan conflicts with a constraint, first reduce scope, then change sequence,
then extend or stop. Do not remove a safety or integrity constraint to preserve a
schedule.

## Common Failure Modes

- Treating every preference as a hard constraint.
- Treating a hard constraint as temporary inconvenience.
- Planning at 100% utilization.

## Recovery Strategy

Rebaseline capacity, reserve buffer, and issue a charter amendment if a material
constraint changes.

## Examples

A university examination week is a time constraint requiring scope reduction. A
preferred note-taking app is not a hard constraint if plain Markdown works.

## References

- `SRC-NASA-SE-2016`

## Cross References

- [Preflight Checklist](../00-quickstart/preflight-checklist.md)
- [Commitment Contract](commitment-contract.md)

## Next Steps

Classify [Controllables vs Outcomes](controllables-vs-outcomes.md).

## Acceptance Criteria

- [x] Constraint categories and precedence are explicit.
