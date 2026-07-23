---
id: GOV-AI-EXECUTION-RULES
title: "AI Execution Rules"
type: governance-policy
status: approved
version: 0.1.0
owner: project-maintainer
effective: 2026-07-23
---

# AI Execution Rules

## Purpose

Define mandatory controls for AI-assisted implementation of Project Olympus.

## Global Guardrails

1. Read the Master Architecture and all implementation artifacts named by the
   active prompt before changing files.
2. Treat requested scope as a hard boundary.
3. Preserve existing approved work except for explicitly authorized navigation,
   registry, and cross-reference maintenance.
4. Do not fabricate dates, standards, official rules, measurements, outcomes, or
   sources.
5. Keep external facts configurable when they may change.
6. Stop when required authority, evidence, or architecture compatibility is
   absent.
7. Validate files, links, metadata, references, diagrams, scope, and formatting
   before reporting completion.

## Source of Truth Policy

`MASTER_ARCHITECTURE.md` is the constitutional Single Source of Truth. Canonical
registries own structured metadata. Derived views and reports must not silently
override canonical sources.

## Change Control Policy

Implementation may populate canonical files without changing architecture.
Architecture changes require a proposed Architecture Decision Record (ADR),
review, approval, migration plan, and corresponding version update. Silent
structural changes are prohibited.

## Cross Reference Policy

Use descriptive relative Markdown links. Every internal link must resolve.
Dependencies use stable IDs and canonical repository paths. Backlinks and
registries must not duplicate substantive content.

## Naming Policy

Use only architecture-approved filenames and directory names. Preserve lowercase
kebab-case, numeric ordering prefixes, stable document IDs, and ISO 8601 dates.
Do not introduce aliases or parallel structures.

## Architecture Policy

When an implementation prompt conflicts with the Master Architecture, the Master
Architecture wins. Adapt content to canonical files and document the mapping in
the implementation report. Do not optimize or redesign the hierarchy during an
implementation sprint.

## ADR Policy

Create an ADR only for a new architectural conflict or proposed architectural
change. An ADR records context, options, decision status, consequences, and
validation. A proposed ADR does not authorize implementation.

## Quality Policy

Implemented content must be publication-quality, Markdown-native, evidence-based,
traceable, accessible, maintainable, and free of unfinished placeholders.
Technical claims require registered sources and stated limits. Completion
requires passing relevant automated and manual checks.

## Cross References

- [Master Architecture](../MASTER_ARCHITECTURE.md)
- [Governance Charter](charter.md)
- [ADR Index](decisions/README.md)
- [Claims and Evidence Policy](claims-and-evidence-policy.md)

## Acceptance Criteria

- [x] All required policy categories are present.
- [x] Architecture precedence and stop conditions are explicit.
- [x] Naming, linking, ADR, and quality controls are defined.

## References

- [Master Architecture](../MASTER_ARCHITECTURE.md)
