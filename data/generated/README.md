---
id: DATA-GENERATED-README
title: "Generated Repository Artifacts"
type: readme
status: active
version: 1.1.0
owner: automation
---

# Generated Repository Artifacts

## Purpose

Store reproducible analytics, health, catalog, calendar, and dependency outputs.

## Commands

| Output | Generator |
|---|---|
| Repository statistics | `python scripts/generate_statistics.py` |
| Repository health | `python scripts/repository_health.py` |
| Content catalog | `python scripts/build_catalog.py` |
| Dependency graph | `python scripts/build_dependency_graph.py` |
| Campaign calendar | `python scripts/build_calendar.py` |

Generated artifacts are derived views. Edit their canonical sources or
generators, then rebuild; do not edit generated output manually.

## Navigation

- [Automation Scripts](../../scripts/README.md)
- [Repository README](../../README.md)
