---
id: DOCS-ARCHITECTURE
title: "Architecture"
type: documentation-index
status: approved
version: 1.1.0
owner: project-maintainer
---

# Architecture

The [Master Architecture](../MASTER_ARCHITECTURE.md) is the constitutional
source of truth. It defines repository planes, canonical ownership, naming,
quality gates, safety boundaries, and the implementation roadmap.

## Engineering Platform

Validation tools in [scripts](../scripts/README.md) inspect Markdown, YAML,
links, anchors, diagrams, registries, navigation, and duplicate IDs. GitHub
Actions invokes the same commands used locally.

## Related Documents

- [System Model](system-model.md)
- [Lifecycle](lifecycle.md)
- [ADRs](adrs.md)
