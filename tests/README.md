---
id: TESTS-README-MD
title: "Repository Tests"
type: readme
status: active
version: 1.1.0
owner: project-maintainer
---

# Repository Tests

## Purpose

Verify the architecture-critical tree, Markdown front matter, internal links,
JSON schemas, synthetic fixtures, generated artifacts, and integrated quality
gates.

## Run

```powershell
python -m unittest discover -s tests -p "test_*.py"
```

Tests use only the standard library. Documentation dependencies are tested by
the dedicated build workflow.

## Fixtures

Public fixtures in [data/examples](../data/examples/README.md) are synthetic and
must never contain personal operational data.

## Navigation

- [Automation Scripts](../scripts/README.md)
- [Repository README](../README.md)
- [GitHub Workflows](../.github/workflows/README.md)
