---
id: REN-ROAD-PHASE-2
title: "Phase 2: Build"
type: phase
status: approved
version: 0.1.0
owner: project-maintainer
---

# Phase 2: Build

## Purpose

Increase verified problem-solving and implementation throughput.

## Scope

This phase governs campaign Days 50–98. Calendar dates are generated from configuration.

## Theory

A lifecycle phase isolates a coherent objective and ends with evidence-based review. Calendar passage does not satisfy a gate.

## Framework

| Element | Rule |
|---|---|
| Relative days | Days 50–98 |
| Expected outcomes | Intermediate technical evidence and controlled portfolio construction |
| Deliverables | reviewed problem evidence; tested intermediate artifact; updated risk record |
| KPIs | Evidence completeness, gate status, capacity adherence, open risk count |
| Entry criteria | Phase 1 gate passed and applicable future study/project protocols approved |
| Exit criteria | artifact acceptance tests pass; learning errors reviewed; load remains within capacity |
| Risks | verification debt, context switching, and hidden project complexity |
| Dependencies | Foundations, Execution, future Study and Project Systems |

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

starting multiple projects, deferring tests, and consuming buffer

## Recovery

freeze new work, reduce the artifact to a vertical slice, close verification debt

## Examples

Example: reviewed problem evidence is accepted only when its evidence link and reviewer are recorded.

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

Proceed to Phase 3: Integrate only after the gate decision.

## Acceptance Criteria

- [x] Inputs, decisions, evidence, and recovery are explicit.
- [x] No external date or outcome is fabricated.
