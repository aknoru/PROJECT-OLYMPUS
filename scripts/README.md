---
id: SCRIPTS-README-MD
title: "Automation Scripts"
type: readme
status: active
version: 1.1.0
owner: project-maintainer
---

# Automation Scripts

## Purpose

Provide cross-platform, dependency-light repository validation, generation, and
release utilities.

## Primary Commands

| Command | Function |
|---|---|
| `python scripts/validate_repository.py` | Run every repository quality gate |
| `python scripts/repository_health.py` | Generate health JSON and Markdown |
| `python scripts/generate_statistics.py` | Generate repository statistics |
| `python scripts/build_catalog.py` | Generate the front-matter content catalog |
| `python scripts/build_dependency_graph.py` | Generate Mermaid dependency source |
| `python scripts/build_calendar.py` | Generate the configured 184-day calendar |
| `python scripts/release_check.py` | Execute the release gate |

## Validators

Focused commands validate Markdown, YAML, Mermaid, front matter, links, sources,
cross references, navigation, duplicate IDs, and dependency records. All import
the shared [automation core](olympus_core.py).

## Design

The core uses the Python standard library. Optional PyYAML support is detected
automatically. Commands return zero on success and nonzero on critical defects,
making them suitable for local scripts and GitHub Actions.

## Generated Output

Generated files are written under [data/generated](../data/generated/README.md).
They identify their generator and must not become canonical input sources.

## Navigation

- [Project README](../README.md)
- [Tests](../tests/README.md)
- [Toolchain configuration](../config/toolchain.yml)
