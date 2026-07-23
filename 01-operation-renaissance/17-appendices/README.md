---
id: REN-APP-01
title: "Operation Renaissance Appendices"
type: appendix
status: approved
version: 1.0.0
owner: project-maintainer
review_due: 2027-01-23
---

# Operation Renaissance Appendices

## Purpose

Provide the permanent navigation and reference layer for Operation Renaissance without duplicating implementation content.

## Scope

This appendix covers master navigation, repository maps, document and report indexes, governance indexes, registry guides, and maintenance routes. It indexes and summarizes existing
material; it does not replace the owning document or create new implementation
requirements.

## Usage

Start with the task or information type in the Master Index, follow the canonical link, and return to the owning document for procedure or authority. Treat summaries here as routing metadata only.

## Master Index

| Need | Canonical destination |
|---|---|
| Start or configure the campaign | [Quickstart](../00-quickstart/README.md) and [Roadmap](../02-roadmap/README.md) |
| Execute and review work | [Execution](../03-execution-system/README.md) and [Review](../13-review-system/README.md) |
| Study, examination, placement, or projects | [Study](../04-study-system/README.md), [GATE](../05-gate-system/README.md), [Placement](../06-placement-system/README.md), [Projects](../07-project-system/README.md) |
| Research or communication | [Research](../08-research-system/README.md) and [Communication](../09-communication-system/README.md) |
| Health, resilience, finance, or recovery | [Health](../10-health-system/README.md), [Resilience](../11-resilience-system/README.md), [Finance](../12-finance-system/README.md), [Recovery](../14-recovery-system/README.md) |
| Visibility and measurement | [Dashboards](../15-dashboards/README.md) and [KPIs](../16-kpis/README.md) |
| Dates, capacity, tools, or terms | [Calendar Map](calendar-map.md), [Workload Scenarios](workload-scenarios.md), [Tool Options](tool-options.md), [Campaign Glossary](campaign-glossary.md) |
| Diagnose repository use | [Troubleshooting](troubleshooting.md) |

## Governance and History Index

| Record | Canonical destination |
|---|---|
| Architecture | [Master Architecture](../../MASTER_ARCHITECTURE.md) |
| AI execution rules | [AI Execution Rules](../../governance/AI_EXECUTION_RULES.md) |
| Architecture decisions | [ADR Index](../../governance/decisions/README.md) |
| Change history | [Changelog](../../CHANGELOG.md) |
| Implementation history | [Operation Renaissance reports](../README.md#implementation-reports) |
| Release candidate | [Release Candidate v1.0](../RELEASE_CANDIDATE_v1.0.md) |

## Registry Guides

The [dependency registry](../../data/registries/dependency-registry.yml) owns
directional document dependencies. The [source register](../../references/source-register.yml)
owns evidence metadata. The [KPI registry](../../data/registries/kpi-registry.yml)
owns approved metric definitions and policy. Use stable IDs; update the owning
registry and all affected references in one reviewed change.

## Repository Guides

| Activity | Guide |
|---|---|
| Repository usage | [Root README](../../README.md) and [documentation quickstart](../../docs/quickstart.md) |
| Contribution | [Contributing Guide](../../CONTRIBUTING.md) |
| Maintenance | [Maintenance Policy](../../governance/maintenance-policy.md) |
| Versioning and releases | [Version](../../VERSION), [Roadmap](../../ROADMAP.md), and [Changelog](../../CHANGELOG.md) |
| Security and privacy | [Security Policy](../../SECURITY.md) and [Private Data Guide](../../private/README.md) |

## Navigation

- [Appendices](README.md)
- [Operation Renaissance](../README.md)
- [Master Architecture](../../MASTER_ARCHITECTURE.md)

## Cross References

- [Operation Renaissance](../README.md)
- [Repository Documentation](../../docs/index.md)
- [Reference System](../../references/README.md)

## Related Documents

- [Repository Navigation](../../docs/navigation.md)
- [Reference System](../../references/README.md)
- [Changelog](../../CHANGELOG.md)

## Examples

To find the canonical weekly review, use Master Index → Execution and Review → Review System → Weekly Review; do not copy its procedure into an appendix.

## References

- [Master Architecture](../../MASTER_ARCHITECTURE.md)
- [Source Register](../../references/source-register.yml)
- [Dependency Registry](../../data/registries/dependency-registry.yml)

## Maintenance Notes

Review navigation after every rename, release, or registry change. Link labels must describe destinations; appendices must not become alternate owners of facts.

## Next Steps

Use the Master Index to reach the owning system, then report any broken or ambiguous route through the repository contribution process.
