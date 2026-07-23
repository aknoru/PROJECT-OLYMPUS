---
id: 99-AI-PROMPTS-PROMPT-06
title: "Implementation Prompt 03C (Revised) — Study System & GATE System"
type: ai-prompt
status: executed
version: 2.0
owner: project-maintainer
---

# Implementation Prompt 03C (Revised) — Study System & GATE System

## Purpose

Preserve the exact Project Olympus instruction as a version-controlled project asset.

## Status

Executed prompt asset, version 2.0.

## Provenance

Inline project instruction preserved from the execution conversation.

## Dependencies

- [Master Architecture](../MASTER_ARCHITECTURE.md)
- [Prompt Registry](README.md)

## Navigation

- [Prompt Registry](README.md)
- [Project Home](../README.md)

## TODO

- [x] Preserve the prompt text.
- [x] Record execution status and version.
- [ ] Record future amendments only when explicitly approved.

## Cross References

- [Master Architecture](../MASTER_ARCHITECTURE.md)
- [Repository Build Report](../REPOSITORY_BUILD_REPORT.md)

## Acceptance Criteria

- [x] Prompt text is present.
- [x] Canonical prompt filename is preserved.
- [x] Internal navigation targets exist.

## References

- Source: Inline project instruction preserved from the execution conversation.

## Prompt Text

```text
# PROJECT OLYMPUS
## IMPLEMENTATION PROMPT 03C (REVISED)
### OPERATION RENAISSANCE — STUDY SYSTEM & GATE SYSTEM

# GLOBAL EXECUTION GUARDRAILS

These instructions override every other instruction.

------------------------------------------------------------

# READ FIRST (Mandatory)

Read, in order:

1. MASTER_ARCHITECTURE.md
2. FOUNDATION_IMPLEMENTATION_REPORT.md
3. EXECUTION_SYSTEM_IMPLEMENTATION_REPORT.md

If `governance/AI_EXECUTION_RULES.md` exists, read it.

If it does NOT exist, create it first according to the Global Guardrails defined below, register it in the repository, then continue.

------------------------------------------------------------

# SOURCE OF TRUTH

MASTER_ARCHITECTURE.md is the constitutional document.

It is immutable.

Never redesign it.

Never rename files.

Never rename directories.

Never create alternative filenames.

Never create parallel structures.

Use ONLY the canonical file hierarchy defined in MASTER_ARCHITECTURE.md.

------------------------------------------------------------

# ARCHITECTURE CONTRACT

If this prompt conflicts with MASTER_ARCHITECTURE.md:

MASTER_ARCHITECTURE.md wins.

Never modify the architecture.

Instead:

• adapt implementation to the architecture

• document the mapping inside the implementation report

Do NOT generate another ADR unless a brand-new architectural conflict appears.

------------------------------------------------------------

# BOUNDED IMPLEMENTATION

Implement ONLY

04-study-system/

05-gate-system/

already defined in MASTER_ARCHITECTURE.md.

Do not implement future modules.

Do not modify previous sprints except updating required navigation, registries, and cross references.

------------------------------------------------------------

# GOVERNANCE

If absent, create

governance/

AI_EXECUTION_RULES.md

containing

• Global Guardrails

• Source of Truth Policy

• Change Control Policy

• Cross Reference Policy

• Naming Policy

• Architecture Policy

• ADR Policy

• Quality Policy

This file becomes permanent.

Do not regenerate it if it already exists.

------------------------------------------------------------

# IMPLEMENTATION

Read the canonical directory tree from MASTER_ARCHITECTURE.md.

Implement EVERY file defined inside

04-study-system/

05-gate-system/

using exactly the filenames already present in the architecture.

Do not substitute names.

Do not invent additional files.

------------------------------------------------------------

# CONTENT REQUIREMENTS

Every implemented document must include

Purpose

Scope

Theory

Scientific Basis

Framework

Workflow

Implementation

Decision Trees

Failure Modes

Recovery

Examples

Tables

Mermaid Diagrams

Cross References

References

Next Steps

------------------------------------------------------------

# STUDY SYSTEM

Ground recommendations in

Learning Science

Cognitive Psychology

Deliberate Practice

Memory Research

Engineering Education

Separate

Evidence

Best Practice

Opinion

------------------------------------------------------------

# GATE SYSTEM

Remain completely configurable.

Do NOT hardcode

Official dates

Marks

Exam pattern

Subject list

Syllabus

Question distribution

Instead create reusable frameworks.

------------------------------------------------------------

# QUALITY

Publication Quality

GitHub Native

Markdown First

No duplicated content

Evidence Based

Architecture Compliant

------------------------------------------------------------

# ACCEPTANCE CRITERIA

PASS only if

✔ governance file exists

✔ canonical filenames are preserved

✔ no architecture changes occurred

✔ internal links validate

✔ Mermaid diagrams validate

✔ references are consistent

✔ scope boundaries are respected

------------------------------------------------------------

# VALIDATION

Validate

Architecture Compliance

Naming Compliance

Scope Compliance

Markdown

Mermaid

Cross References

Relative Links

Registry Updates

------------------------------------------------------------

# IMPLEMENTATION REPORT

Generate

LEARNING_AND_GATE_IMPLEMENTATION_REPORT.md

Include

• Governance initialization status

• Files Implemented

• Canonical filename verification

• Word Count

• Tables

• Mermaid Diagrams

• Decision Trees

• Cross References

• Validation Results

• Architecture Compliance

• Remaining Work

• Next Sprint

------------------------------------------------------------

STOP

Do not implement

Placement

Projects

Research

Communication

Health

Finance

Dashboards

KPIs

Appendices

Only implement the canonical Study System and GATE System modules defined by MASTER_ARCHITECTURE.md.
```
