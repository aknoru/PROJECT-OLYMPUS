---
id: 99-AI-PROMPTS-PROMPT-02
title: "Prompt #2 — Implement the Architecture"
type: ai-prompt
status: executed
version: 1.0
owner: project-maintainer
---

# Prompt #2 — Implement the Architecture

## Purpose

Preserve the exact Project Olympus instruction as a version-controlled project asset.

## Status

Executed prompt asset, version 1.0.

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
## PROMPT #2
### IMPLEMENT THE ARCHITECTURE

Read MASTER_ARCHITECTURE.md completely.

Treat it as the Single Source of Truth.

Do not redesign, reinterpret, optimize, simplify, expand or modify any architectural decision.

Your task is ONLY to implement the repository exactly as specified.

------------------------------------------------------------

IMPLEMENTATION

Create the complete GitHub repository exactly according to MASTER_ARCHITECTURE.md.

Generate

• every directory
• every subdirectory
• every README
• every markdown file
• every YAML file
• every JSON schema
• every CSV placeholder
• every registry
• every dashboard placeholder
• every template
• every script placeholder
• every GitHub workflow placeholder

Nothing should be omitted.

------------------------------------------------------------

MARKDOWN FILES

Every markdown file must contain

YAML Front Matter

Purpose

Status

TODO placeholders

Cross references

Empty section headings

Acceptance criteria

References

Do NOT write educational content.

Do NOT write chapter content.

Do NOT write explanations.

Only generate the repository scaffold.

------------------------------------------------------------

README FILES

Every directory must contain a README.md explaining

Purpose

Contents

Dependencies

Navigation

Future content

------------------------------------------------------------

LINKS

Ensure every internal relative link is valid.

Ensure README navigation is correct.

No broken links.

------------------------------------------------------------

QUALITY

GitHub Ready

Markdown First

Modular

Maintainable

Professional

------------------------------------------------------------

OUTPUT

Generate the entire repository.

Create every file.

Create every folder.

Populate placeholders only.

No chapter content.

------------------------------------------------------------

ADDITIONAL REQUIREMENTS

Create an additional directory

99_AI_PROMPTS/

Inside create

Prompt_01_Master_Architecture.md
Prompt_02_Repository_Skeleton.md

and create placeholder files

Prompt_03.md

through

Prompt_25.md

These prompt files are part of Project Olympus and are version-controlled project assets.

------------------------------------------------------------

Finally generate

REPOSITORY_BUILD_REPORT.md

containing

• Folder count

• File count

• Markdown count

• Templates

• Registries

• Dashboards

• Schemas

• Scripts

• Validation Report

• Missing Items

• Repository Completeness

Stop after constructing the repository.

Do not generate educational content.

Do not generate Operation Renaissance.

Do not generate any module.

This prompt only builds the repository.
```
