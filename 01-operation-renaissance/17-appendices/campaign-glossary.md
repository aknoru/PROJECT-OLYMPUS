---
id: REN-APP-06
title: "Campaign Glossary"
type: appendix
status: approved
version: 1.0.0
owner: project-maintainer
review_due: 2027-01-23
---

# Campaign Glossary

## Purpose

Provide a concise Operation Renaissance terminology and abbreviation index linked to canonical definitions.

## Scope

This appendix covers campaign-specific terms, engineering acronyms, technical terminology, abbreviations, and source-of-truth routes. It indexes and summarizes existing
material; it does not replace the owning document or create new implementation
requirements.

## Usage

Use this file to locate a term, then follow its canonical document for normative meaning. The repository-wide glossary remains authoritative for shared terminology.

## Terminology Index

| Term | Concise routing meaning | Canonical definition |
|---|---|---|
| Evidence | Verifiable artifact or observation used in a decision | [Claims and Evidence Policy](../../governance/claims-and-evidence-policy.md) |
| Capacity | Available safe workload under current constraints | [Capacity Model](../02-roadmap/capacity-model.md) |
| WIP | Work in progress; concurrently active work | [WIP Limits](../03-execution-system/work-in-progress-limits.md) |
| Mastery | Demonstrated explanation, retrieval, solution, transfer, and error control | [Concept Mastery Rubric](../04-study-system/concept-mastery-rubric.md) |
| Gate | Evidence-based review point, not calendar passage | [Phase-Gate Review](../13-review-system/phase-gate-review.md) |
| Guardrail | Constraint that overrides optimization when breached | [Guardrail Metrics](../16-kpis/guardrail-metrics.md) |
| Recovery | Controlled restoration after disruption | [Recovery System](../14-recovery-system/README.md) |
| Dashboard | Derived decision view; never a data-entry source | [Dashboard System](../15-dashboards/README.md) |
| KPI | Governed measure linked to a decision | [Measurement Model](../16-kpis/measurement-model.md) |
| ADR | Architecture Decision Record | [ADR Index](../../governance/decisions/README.md) |

## Acronym and Abbreviation Index

| Form | Expansion | Reference |
|---|---|---|
| ADR | Architecture Decision Record | [Governance Decisions](../../governance/decisions/README.md) |
| GATE | Graduate Aptitude Test in Engineering | [GATE System](../05-gate-system/README.md) |
| KPI | Key Performance Indicator | [KPI System](../16-kpis/README.md) |
| WIP | Work in Progress | [Execution System](../03-execution-system/README.md) |
| QA | Quality Assurance | [Master Architecture](../../MASTER_ARCHITECTURE.md#21-quality-assurance-standards) |

For repository-wide engineering acronyms and terminology, use the
[Acronyms Index](../../references/acronyms.md) and
[Glossary](../../references/glossary.md).

## Navigation

- [Appendices](README.md)
- [Operation Renaissance](../README.md)
- [Master Architecture](../../MASTER_ARCHITECTURE.md)

## Cross References

- [Repository Glossary](../../references/glossary.md)
- [Acronyms](../../references/acronyms.md)
- [Master Architecture](../../MASTER_ARCHITECTURE.md)

## Related Documents

- [Repository Navigation](../../docs/navigation.md)
- [Reference System](../../references/README.md)
- [Changelog](../../CHANGELOG.md)

## Examples

“Blocked” uses the dashboard status vocabulary; it does not mean the same thing as “off-track.” Follow the Dashboard System for its decision meaning.

## References

- [Master Architecture](../../MASTER_ARCHITECTURE.md)
- [Source Register](../../references/source-register.yml)
- [Dependency Registry](../../data/registries/dependency-registry.yml)

## Maintenance Notes

Add a campaign term only when it recurs and has a canonical owner. Avoid competing definitions; update links in the same reviewed change.

## Next Steps

Use the terminology table, then confirm the term in its canonical source before editing or reviewing content.
