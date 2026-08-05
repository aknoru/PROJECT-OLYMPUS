---
id: README-MD
title: "Project Olympus"
type: readme
status: active
version: 1.2.0
owner: project-maintainer
---

# Project Olympus

![Version 1.2.0](https://img.shields.io/badge/version-1.2.0-blue)
![Validation automated](https://img.shields.io/badge/validation-automated-success)
![Documentation MkDocs Material](https://img.shields.io/badge/docs-MkDocs%20Material-blueviolet)
![Orchestrator OLYMPUS v4](https://img.shields.io/badge/orchestrator-OLYMPUS%20v4-gold)

> [!IMPORTANT]
> If six months from now the repository is immaculate but your skills haven't
> moved, then Olympus has failed.
>
> If six months from now the repository has rough edges but you've become
> dramatically more capable, then Olympus has succeeded.

Project Olympus is a Markdown-native Engineering Operating System spanning 13 primary domains across electrical engineering, digital design, computer architecture, firmware systems, software tooling, research, career placement, and personal stewardship.

---

## Complete Engineering Domain Directory

| Domain | Description | Modules | Status |
|--------|-------------|---------|--------|
| [`01 Operation Renaissance`](01-operation-renaissance/README.md) | 184-Day Undergraduate Execution Campaign | 18 Systems | ✅ Complete |
| [`02 Engineering Foundations`](02-engineering-foundations/README.md) | Math, Circuits, Signals, Devices, Controls, Telecom, DSA | 12 Modules | ✅ Active |
| [`03 FPGA & Digital Design`](03-fpga-and-digital-design/README.md) | Verilog/VHDL, FSMs, CDC/Timing, Synthesis, AXI, DSP | 9 Modules | ✅ Active |
| [`04 Embedded Systems`](04-embedded-systems/README.md) | Firmware C, ARM Cortex-M, Drivers, RTOS, Debugging | 9 Modules | ✅ Active |
| [`05 Computer Architecture`](05-computer-architecture/README.md) | RISC-V ISA, Pipelining, Caches, Memory, Parallelism | 9 Modules | ✅ Active |
| [`06 Software & Tooling`](06-software-and-tooling/README.md) | Python, C/C++, DSA, Linux, Git, CI/CD, Data Analysis | 8 Modules | ✅ Active |
| [`07 Research & Graduate Study`](07-research-and-graduate-study/README.md) | Research Methods, Synthesis, Experiments, MS/PhD App | 8 Modules | ✅ Active |
| [`08 Career & Placement`](08-career-and-placement/README.md) | Career Strategy, Resumes, DSA/Behavioral Interviews | 8 Modules | ✅ Active |
| [`09 Communication & Leadership`](09-communication-and-leadership/README.md) | Technical Writing, Demos, Team Dynamics, Systems | 7 Modules | ✅ Active |
| [`10 Entrepreneurship & Deep Tech`](10-entrepreneurship-and-deep-tech/README.md) | Discovery, Feasibility, IP Patents, Regulatory, Funding | 9 Modules | ✅ Active |
| [`11 Finance Wealth & Investing`](11-finance-wealth-and-investing/README.md) | Cash Flow, Risk, Indexing, Taxes, Capital Allocation | 7 Modules | ✅ Active |
| [`12 Health Resilience & Performance`](12-health-resilience-and-performance/README.md) | Sleep Engine, Fitness, Nutrition, Ergonomics, Recovery | 7 Modules | ✅ Active |
| [`13 Legacy & Stewardship`](13-legacy-and-stewardship/README.md) | Ethics, Technical Mentorship, Open-Source Preservation | 6 Modules | ✅ Active |
| [`14 Computer Science & Full-Stack`](14-computer-science-and-fullstack/README.md) | OSSU CS, C++ DSA, Full-Stack, DevOps, AI Agents, Web3 | 6 Modules | ✅ Active |

---

## Global Knowledge Infrastructure

- 🗺 **[Knowledge Graph](KNOWLEDGE_GRAPH.md)** — Complete domain relationships, prerequisite chains, and Mermaid maps.
- 🛤 **[Learning Paths](LEARNING_PATHS.md)** — 7 structured learning journeys (GATE, FPGA, Embedded, Architecture, Software, Research, Placement).
- 🛠 **[Project Index](PROJECT_INDEX.md)** — 35+ engineered projects across all domains.
- 🔬 **[Lab Index](LAB_INDEX.md)** — 46 hands-on laboratory exercises.
- 📝 **[Assessment Index](ASSESSMENT_INDEX.md)** — Diagnostic, formative, and capstone assessment frameworks.
- 📚 **[Engineering Glossary](references/glossary.md)** — Canonical definitions for 50+ core engineering terms.

---

## Quick Start Commands

Validate local repository state, scripts, and build statistical reports:

```powershell
python scripts/validate_repository.py
python scripts/repository_health.py
python scripts/generate_statistics.py
python scripts/build_dashboards.py
```

Serve the documentation site locally:

```powershell
python -m pip install -r requirements.txt
mkdocs serve
```

---

## Core Engineering Contracts

- **Markdown-First:** Source of truth remains canonical, reviewable Markdown.
- **Single Source of Truth:** Dashboards and reports generate from raw content; source data is never overwritten.
- **Traceability:** Every learning objective links to leading actions, evidence, and assessment rubrics.
- **Verification:** Automated CI validators verify zero broken links, frontmatter syntax, markdown linting, and graph consistency.

---

## Governance & License

- Master Architecture Specification: [`MASTER_ARCHITECTURE.md`](MASTER_ARCHITECTURE.md)
- Governance Policies & ADRs: [`governance/`](governance/README.md)
- License: [`LICENSE`](LICENSE) and [`CITATION.cff`](CITATION.cff)

---

## Life Operating System

This repository now contains a fully integrated **Life OS** — the operational brain for a 184-day personal renaissance. The architecture of PROJECT-OLYMPUS is the scaffold; OLYMPUS is the content.

> **Start here if you are Rounak:** [LIFE-OS.md](LIFE-OS.md)

### Entry Points by Intent

| If you want to... | Go to... |
|---|---|
| Start your day | [Daily Dashboard](dashboards/DAILY-DASHBOARD.md) |
| Review your week | [Weekly Dashboard](dashboards/WEEKLY-DASHBOARD.md) |
| See this month's battle plan | [August Battle Plan](01-operation-renaissance/03-execution-system/AUGUST-BATTLE-PLAN.md) |
| Check your KPIs | [KPI Dashboard](dashboards/KPI-DASHBOARD.md) |
| Remember why you are doing this | [Identity Manifesto](private/identity/IDENTITY-MANIFESTO.md) |
| See all 31 goals | [Goals](01-operation-renaissance/01-charter/GOALS.md) |
| See all 27 targets | [Targets](01-operation-renaissance/01-charter/TARGETS.md) |
| See the 184-day plan | [184-Day Structure](01-operation-renaissance/02-roadmap/184-DAY-STRUCTURE.md) |
| Find books and courses | [Resource Directory](references/RESOURCE-DIRECTORY.md) |

### OLYMPUS Integration (August 2026)

The following content was integrated from OLYMPUS (the operational brain) into this repository:

| Source | Destination |
|---|---|
| OLYMPUS/184DAYS | [184-DAY-STRUCTURE.md](01-operation-renaissance/02-roadmap/184-DAY-STRUCTURE.md) |
| OLYMPUS/TARGETS | [TARGETS.md](01-operation-renaissance/01-charter/TARGETS.md) |
| OLYMPUS/GOALS | [GOALS.md](01-operation-renaissance/01-charter/GOALS.md) |
| OLYMPUS/EXECUTE | [RENAISSANCE_EXECUTION_MANUAL.md](01-operation-renaissance/RENAISSANCE_EXECUTION_MANUAL.md) |
| OLYMPUS/AUGUST + WEEK1-4 | [03-execution-system/](01-operation-renaissance/03-execution-system/) |
| OLYMPUS/CAREER | [06-placement-system/](01-operation-renaissance/06-placement-system/) |
| OLYMPUS/EXAM | [05-gate-system/](01-operation-renaissance/05-gate-system/) |
| OLYMPUS/BTP-II | [QSIF-BTP-II.md](01-operation-renaissance/07-project-system/QSIF-BTP-II.md) |
| OLYMPUS/PSYCH | [private/psychology/](private/psychology/) |
| OLYMPUS/CHESS & JAPANESE | [private/identity/](private/identity/) |
| OLYMPUS/RESOURCES | [RESOURCE-DIRECTORY.md](references/RESOURCE-DIRECTORY.md) |

