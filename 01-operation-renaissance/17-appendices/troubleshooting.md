---
id: REN-APP-05
title: "Troubleshooting and FAQ"
type: appendix
status: approved
version: 1.0.0
owner: project-maintainer
review_due: 2027-01-23
---

# Troubleshooting and FAQ

## Purpose

Route common repository, workflow, evidence, navigation, and recovery problems to canonical controls.

## Scope

This appendix covers frequently asked questions, broken navigation, missing evidence, stale sources, configuration defects, workflow failures, and escalation boundaries. It indexes and summarizes existing
material; it does not replace the owning document or create new implementation
requirements.

## Usage

Match the observed symptom, follow the diagnostic route, repair the canonical source, and rerun the relevant validation or review.

## Troubleshooting Guide

| Symptom | Diagnostic route | Canonical correction |
|---|---|---|
| A relative link fails | Check file ownership and canonical path | [Cross-reference policy](../../governance/AI_EXECUTION_RULES.md#cross-reference-policy) |
| A dependency does not resolve | Verify stable ID and root-relative path | [Dependency Registry](../../data/registries/dependency-registry.yml) |
| A source ID is unknown | Verify evidence metadata | [Source Register](../../references/source-register.yml) |
| A dashboard is stale | Check reporting period, provenance, and refresh state | [Dashboard System](../15-dashboards/README.md) |
| A KPI lacks a target | Do not invent one; obtain reviewed configuration | [Metric Dictionary](../16-kpis/metric-dictionary.md) |
| Work repeatedly carries over | Review capacity, priority, and WIP | [Weekly Review](../13-review-system/weekly-review.md) |
| The recovery path is unclear | Classify before replanning | [Failure Classification](../14-recovery-system/failure-classification.md) |
| Sensitive data appears public | Stop publication and follow privacy/security policy | [Private Data Guide](../../private/README.md) |

## Frequently Asked Questions

| Question | Answer route |
|---|---|
| Where do I start? | [Quickstart](../00-quickstart/README.md) |
| Which file owns campaign dates? | [Renaissance configuration](../../config/renaissance.example.yml) |
| Where are implementation reports? | [Operation Renaissance report index](../README.md#implementation-reports) |
| How are changes approved? | [Contributing](../../CONTRIBUTING.md) and [ADR Index](../../governance/decisions/README.md) |
| Where do personal records go? | [Private Data Guide](../../private/README.md) |
| What is implemented in Module 01? | [Final Release](../OPERATION_RENAISSANCE_v1.0_RELEASE.md) |

## Navigation

- [Appendices](README.md)
- [Operation Renaissance](../README.md)
- [Master Architecture](../../MASTER_ARCHITECTURE.md)

## Cross References

- [Repository FAQ](../../docs/faq.md)
- [Security Policy](../../SECURITY.md)
- [Maintenance Policy](../../governance/maintenance-policy.md)

## Related Documents

- [Repository Navigation](../../docs/navigation.md)
- [Reference System](../../references/README.md)
- [Changelog](../../CHANGELOG.md)

## Examples

When a dashboard shows no status, verify source coverage and configured bands before treating the absence as a defect.

## References

- [Master Architecture](../../MASTER_ARCHITECTURE.md)
- [Source Register](../../references/source-register.yml)
- [Dependency Registry](../../data/registries/dependency-registry.yml)

## Maintenance Notes

Update routes when owners, headings, or validation rules change. Keep answers short and link to the authoritative procedure.

## Next Steps

Follow the matching correction, rerun validation, and record unresolved defects through the contribution workflow.
