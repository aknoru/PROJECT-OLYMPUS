---
id: REN-APP-02
title: "Calendar Map"
type: appendix
status: approved
version: 1.0.0
owner: project-maintainer
review_due: 2027-01-23
---

# Calendar Map

## Purpose

Index the configurable campaign calendar, planning hierarchy, phase schedule, and time-based checklists.

## Scope

This appendix covers relative campaign days, configuration ownership, phase navigation, execution checklists, review checklists, and schedule exception records. It indexes and summarizes existing
material; it does not replace the owning document or create new implementation
requirements.

## Usage

Resolve dates from campaign configuration, then follow the relevant phase, execution, or review link. Never copy a date from this appendix into an operational record.

## Calendar and Phase Index

| Time layer | Canonical source |
|---|---|
| Campaign dates | [Renaissance configuration example](../../config/renaissance.example.yml) |
| Relative-day plan | [184-Day Roadmap](../02-roadmap/184-day-roadmap.md) |
| Phase boundaries | [Roadmap](../02-roadmap/README.md) |
| Milestones | [Milestones](../02-roadmap/milestones.md) |
| Capacity | [Capacity Model](../02-roadmap/capacity-model.md) |
| Academic integration | [Semester Integration](../03-execution-system/semester-integration.md) |

## Master Checklist Index

| Trigger | Execution or review checklist |
|---|---|
| Before launch | [Preflight Checklist](../00-quickstart/preflight-checklist.md) |
| Daily planning and close | [Daily System](../03-execution-system/daily-system.md) and [Daily Close](../13-review-system/daily-close.md) |
| Weekly boundary | [Weekly System](../03-execution-system/weekly-system.md) and [Weekly Review](../13-review-system/weekly-review.md) |
| Monthly boundary | [Monthly System](../03-execution-system/monthly-system.md) and [Monthly Review](../13-review-system/monthly-review.md) |
| Phase boundary | [Phase-Gate Review](../13-review-system/phase-gate-review.md) |
| Campaign midpoint and close | [Mid-Campaign Review](../13-review-system/mid-campaign-review.md) and [Final Review](../13-review-system/final-review.md) |
| Disruption | [Recovery System](../14-recovery-system/README.md) |

## Navigation

- [Appendices](README.md)
- [Operation Renaissance](../README.md)
- [Master Architecture](../../MASTER_ARCHITECTURE.md)

## Cross References

- [Roadmap Dependency Map](../02-roadmap/dependency-map.md)
- [This Week Dashboard](../15-dashboards/this-week.md)
- [Campaign Status](../15-dashboards/campaign-status.md)

## Related Documents

- [Repository Navigation](../../docs/navigation.md)
- [Reference System](../../references/README.md)
- [Changelog](../../CHANGELOG.md)

## Examples

A campaign configured for a new year retains canonical day ranges; only the configuration-derived calendar changes.

## References

- [Master Architecture](../../MASTER_ARCHITECTURE.md)
- [Source Register](../../references/source-register.yml)
- [Dependency Registry](../../data/registries/dependency-registry.yml)

## Maintenance Notes

Revalidate calendar links whenever configuration fields or phase documents change. Mutable dates remain in configuration, not this file.

## Next Steps

Open the configuration and 184-Day Roadmap, then verify the next review trigger.
