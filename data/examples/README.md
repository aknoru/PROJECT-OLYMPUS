---
id: DATA-EXAMPLES-README
title: "Synthetic Test Environment"
type: readme
status: active
version: 1.1.0
owner: automation
---

# Synthetic Test Environment

## Purpose

Provide non-personal fixtures for repository tests, dashboard validation,
review workflows, recovery paths, notebooks, and command-center generation.

## Contract

Every fixture is listed in [manifest.json](manifest.json), declares synthetic
classification, and exists only for engineering verification. It must never be
interpreted as user data, evidence, a target, or a benchmark.

## Coverage

Fixtures cover execution, KPIs, reviews, recovery, GATE, placement, research,
engineering notebooks, weekly/monthly reviews, and the command center.

## Navigation

- [Tests](../../tests/README.md)
- [Privacy configuration](../../config/privacy.yml)
