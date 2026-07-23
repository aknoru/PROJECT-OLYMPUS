---
id: CONTRIBUTING-MD
title: "Contributing"
type: contributor-guide
status: approved
version: 1.1.0
owner: project-maintainer
---

# Contributing

## Before Editing

Read the [Master Architecture](MASTER_ARCHITECTURE.md), applicable governance,
ADRs, and the owning module. Preserve canonical filenames and stable IDs.

## Change Workflow

1. Create a focused branch and describe the user decision affected.
2. Update canonical sources before derived reports.
3. Add or update tests and synthetic fixtures.
4. Run `python -m unittest discover -s tests -p "test_*.py"`.
5. Run `python scripts/validate_repository.py`.
6. Update the changelog for user-visible changes.
7. Submit a pull request with validation evidence and risks.

Architecture changes require an approved ADR. Never commit secrets, personal
records, unlicensed assets, or fabricated evidence.

## Review Standard

Pull requests must be scoped, reproducible, linked to evidence, safe, and free
of broken links or stale generated files.

## References

- [AI Execution Rules](governance/AI_EXECUTION_RULES.md)
- [Security Policy](SECURITY.md)
- [Tests](tests/README.md)
