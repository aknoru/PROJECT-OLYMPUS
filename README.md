---
id: README-MD
title: "Project Olympus"
type: readme
status: active
version: 1.1.0
owner: project-maintainer
---

# Project Olympus

![Version 1.1.0](https://img.shields.io/badge/version-1.1.0-blue)
![Validation automated](https://img.shields.io/badge/validation-automated-success)
![Documentation MkDocs Material](https://img.shields.io/badge/docs-MkDocs%20Material-blueviolet)

> [!IMPORTANT]
> If six months from now the repository is immaculate but your skills haven't
> moved, then Olympus has failed.
>
> If six months from now the repository has rough edges but you've become
> dramatically more capable, then Olympus has succeeded.

Project Olympus is a Markdown-native Engineering Operating System. Operation
Renaissance is its completed 184-day execution module; v1.1 adds local and CI
validation, repository analytics, synthetic fixtures, generated health reports,
release tooling, and a searchable documentation site.

## Quick Start

```powershell
python -m unittest discover -s tests -p "test_*.py"
python scripts/validate_repository.py
python scripts/build_dashboards.py
python scripts/build_calendar.py
```

Install the optional documentation dependencies and build the site:

```powershell
python -m pip install -r requirements.txt
mkdocs serve
```

## Navigation

- [Master Architecture](MASTER_ARCHITECTURE.md)
- [Operation Renaissance](01-operation-renaissance/README.md)
- [Documentation](docs/index.md)
- [Developer scripts](scripts/README.md)
- [Tests](tests/README.md)
- [Contributing](CONTRIBUTING.md)
- [Security and privacy](SECURITY.md)
- [Generated repository health](data/generated/repository-health.md)

## Engineering Contracts

- Markdown, YAML, CSV, and JSON remain canonical and reviewable.
- Dashboards and reports are derived; generators never overwrite source data.
- Synthetic examples are explicitly classified and contain no personal data.
- Local commands and CI use the same validation implementation.
- Architecture changes require an approved ADR.

## Release

Current platform version: [VERSION](VERSION). Operation Renaissance release
history is indexed in its [implementation reports](01-operation-renaissance/README.md#implementation-reports).

## License

See [LICENSE](LICENSE) and [CITATION.cff](CITATION.cff).
