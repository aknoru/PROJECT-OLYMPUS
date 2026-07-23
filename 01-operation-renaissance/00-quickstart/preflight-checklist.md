---
id: REN-QS-PREFLIGHT
title: "Operation Renaissance Preflight Checklist"
type: checklist
status: approved
version: 0.1.0
owner: learner-operator
---

# Operation Renaissance Preflight Checklist

## Purpose

Verify that minimum launch conditions exist and expose risks before commitment.

## Scope

The checklist evaluates readiness; it does not diagnose health conditions or
guarantee campaign performance.

## Theory

Preflight inspection converts hidden assumptions into observable pass, fail, or
not-applicable decisions. A failed safety-critical item cannot be waived silently.

## Framework

Record each item as `PASS`, `FAIL`, or `N/A`, with evidence and an owner for
repairs. Any starred item is launch-blocking.

## Implementation

| Domain | Verification item | Evidence |
|---|---|---|
| Environment | Confirm a stable study location and usable lighting. | Photo or note |
| Health | Confirm no known condition presently makes the planned load unsafe.* | Private self-check/professional advice |
| Study materials | Inventory required texts, notes, and legal access. | Inventory |
| Repository | Clone/open the repository and verify write access.* | Test commit or local edit |
| Laptop | Verify charging, storage, clock, updates, and required ports.* | System check |
| Backup | Restore one test file from the backup path.* | Restore record |
| Calendar | Enter fixed obligations and protected review periods.* | Calendar review |
| Workspace | Remove physical hazards and recurring distractions. | Inspection |
| Sleep | Record seven recent sleep opportunities without judgment. | Private log |
| Physical readiness | Identify current activity limits and accommodations. | Private note |
| Mental readiness | Identify acute distress, overload, or support needs.* | Private check |
| Risk | Record top five campaign risks, triggers, owners, and responses.* | Risk entries |

### Software checklist

- [ ] Git is available or a documented manual fallback exists.
- [ ] A UTF-8 Markdown editor opens and saves files.
- [ ] PDF viewing and spreadsheet viewing work.
- [ ] Required engineering toolchains are inventoried, not necessarily installed.
- [ ] Passwords and secrets are absent from the repository.

## Checklist

- [ ] Every row has a status and evidence.
- [ ] Every `FAIL` has an owner and disposition.
- [ ] Every blocking failure is resolved before launch.
- [ ] Sensitive evidence is stored under `private/`.

## Decision Framework

`GO` requires all starred items to pass. `CONDITIONAL GO` permits non-blocking
failures with dated repairs. `NO-GO` applies when safety, core access, backup, or
calendar feasibility is unresolved.

## Common Failure Modes

- Checking boxes without testing.
- Buying tools before confirming requirements.
- Treating sleep or mental readiness as moral scores.
- Marking an inconvenient item `N/A`.

## Recovery Strategy

Remove optional dependencies, use the simplest functional toolchain, seek
qualified help for safety concerns, and repeat only failed checks.

## Examples

“Backup enabled” is insufficient evidence; restoring a test file is evidence.
“Calendar looks open” is insufficient; fixed obligations must be entered.

## References

- `SRC-NASA-SE-2016`
- [Source register](../../references/source-register.yml)

## Cross References

- [Baseline Assessment](baseline-assessment.md)
- [Constraints](../01-charter/constraints.md)

## Next Steps

Complete the [Baseline Assessment](baseline-assessment.md) after a `GO` or
`CONDITIONAL GO` decision.

## Acceptance Criteria

- [x] All requested readiness domains are represented.
- [x] Blocking conditions and evidence requirements are explicit.
