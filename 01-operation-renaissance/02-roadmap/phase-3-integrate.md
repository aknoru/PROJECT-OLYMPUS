---
id: REN-ROAD-PHASE-3
title: "Phase 3: Integrate"
type: phase
status: approved
version: 0.1.0
owner: project-maintainer
---

# Phase 3: Integrate

## Purpose

Connect theory, technical artifacts, communication, and readiness evidence.

## Scope

This phase governs campaign Days 99–133. Calendar dates are generated from configuration.

## Theory

A lifecycle phase isolates a coherent objective and ends with evidence-based review. Calendar passage does not satisfy a gate.

## Framework

| Element | Rule |
|---|---|
| Relative days | Days 99–133 |
| Expected outcomes | Coherent cross-domain demonstrations with traceable dependencies |
| Deliverables | integrated demonstration; technical explanation; timed assessment evidence |
| KPIs | Evidence completeness, gate status, capacity adherence, open risk count |
| Entry criteria | Phase 2 gate passed and component evidence verified |
| Exit criteria | interfaces verified; demonstration reproducible; gaps assigned |
| Risks | integration defects, interface ambiguity, and deadline compression |
| Dependencies | Build evidence and approved downstream protocols |

## Workflow

Confirm entry evidence; allocate capacity; execute only phase deliverables; review risks weekly; assemble the exit package; conduct the gate; record advance, remediate, or stop.

## Decision Tree

```mermaid
flowchart TD
    A["Trigger"] --> B{"Required evidence available?"}
    B -- "No" --> C["Collect minimum evidence"]
    B -- "Yes" --> D{"Within constraints?"}
    C --> D
    D -- "No" --> E["Reduce, defer, or escalate"]
    D -- "Yes" --> F["Execute and verify"]
    E --> G["Record decision"]
    F --> G
```

Advance only when mandatory exit evidence is verified. A date boundary triggers review, not automatic promotion.

## Failure Modes

combining unverified components and masking failures in presentations

## Recovery

return to the failed interface, isolate components, retest, and reintegrate

## Examples

Example: integrated demonstration is accepted only when its evidence link and reviewer are recorded.

## Tables

The framework table is normative. Local values belong in configuration or cycle
records, not this protocol.

## Mermaid Diagrams

The decision tree above defines the control flow for this protocol.

## Cross References

- [184-Day Roadmap](184-day-roadmap.md)
- [Milestones](milestones.md)
- [Capacity Model](capacity-model.md)

## References

- `SRC-NASA-SE-2016`
- `SRC-LITTLE-1961`
- `SRC-RUBINSTEIN-2001`
- [Source register](../../references/source-register.yml)

## Next Steps

Proceed to Phase 4: Demonstrate only after the gate decision.

## Acceptance Criteria

- [x] Inputs, decisions, evidence, and recovery are explicit.
- [x] No external date or outcome is fabricated.
