---
id: REN-APP-03
title: "Workload Scenarios"
type: appendix
status: approved
version: 1.0.0
owner: project-maintainer
review_due: 2027-01-23
---

# Workload Scenarios

## Purpose

Index existing capacity, prioritization, guardrail, and recovery controls for common workload conditions.

## Scope

This appendix covers normal capacity, constrained capacity, overload, missed work, illness, academic disruption, project failure, and restart routing. It indexes and summarizes existing
material; it does not replace the owning document or create new implementation
requirements.

## Usage

Select the closest observed condition, follow its canonical protocol, and record the actual decision in the owning plan or review. Scenarios are navigation aids, not prescriptions.

## Scenario Reference Table

| Observed condition | Primary route | Supporting route |
|---|---|---|
| Stable planned capacity | [Capacity Model](../02-roadmap/capacity-model.md) | [Timeboxing](../03-execution-system/timeboxing-protocol.md) |
| Competing priorities | [Prioritization](../03-execution-system/prioritization-protocol.md) | [WIP Limits](../03-execution-system/work-in-progress-limits.md) |
| Frequent interruption | [Interruption Protocol](../03-execution-system/interruption-protocol.md) | [Weekly Review](../13-review-system/weekly-review.md) |
| Missed day or week | [Missed Day](../14-recovery-system/missed-day-recovery.md) or [Missed Week](../14-recovery-system/missed-week-recovery.md) | [Failure Classification](../14-recovery-system/failure-classification.md) |
| Overload or persistent fatigue | [Overload Recovery](../14-recovery-system/overload-recovery.md) | [Health Escalation](../10-health-system/escalation-boundaries.md) |
| Illness or emergency | [Illness and Emergency](../14-recovery-system/illness-and-emergency.md) | [Professional Help Boundaries](../11-resilience-system/professional-help-boundaries.md) |
| Academic crisis | [Academic Crisis](../14-recovery-system/academic-crisis.md) | [Assessment Protocol](../04-study-system/assessment-protocol.md) |
| Project failure | [Project Failure](../14-recovery-system/project-failure.md) | [Project Postmortem](../07-project-system/postmortem.md) |
| Restart after containment | [Restart Protocol](../14-recovery-system/restart-protocol.md) | [Recovery Dashboard Route](../15-dashboards/risk-dashboard.md) |

## Navigation

- [Appendices](README.md)
- [Operation Renaissance](../README.md)
- [Master Architecture](../../MASTER_ARCHITECTURE.md)

## Cross References

- [Health Capacity Dashboard](../15-dashboards/health-capacity-dashboard.md)
- [Guardrail Metrics](../16-kpis/guardrail-metrics.md)
- [Risk Dashboard](../15-dashboards/risk-dashboard.md)

## Related Documents

- [Repository Navigation](../../docs/navigation.md)
- [Reference System](../../references/README.md)
- [Changelog](../../CHANGELOG.md)

## Examples

A missed week is routed to Missed Week Recovery rather than treated as five independent missed days.

## References

- [Master Architecture](../../MASTER_ARCHITECTURE.md)
- [Source Register](../../references/source-register.yml)
- [Dependency Registry](../../data/registries/dependency-registry.yml)

## Maintenance Notes

Keep scenario names observational and non-diagnostic. Add no thresholds, medical claims, or institutional policy; link new canonical controls only after approval.

## Next Steps

Classify the current condition, follow the primary route, and schedule its verification review.
