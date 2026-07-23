---
id: DOCS-INDEX-MD
title: "Olympus Command Center"
type: documentation-home
status: active
version: 1.2.0
owner: project-maintainer
---

# Olympus Command Center

<style>
.md-content__inner > h1 { display:none; }
.olympus-hero {
  padding:2rem; border-radius:1.25rem; color:#f8fafc;
  background:linear-gradient(135deg,#07111f 0%,#102a43 58%,#174e63 100%);
  box-shadow:0 22px 55px rgba(8,30,52,.18); margin-bottom:1.4rem;
}
.olympus-kicker { color:#67e8f9; font-size:.75rem; font-weight:800; letter-spacing:.16em; text-transform:uppercase; }
.olympus-hero h2 { color:white; font-size:clamp(2rem,6vw,4.2rem); line-height:.96; margin:.7rem 0 1rem; }
.olympus-hero p { max-width:48rem; color:#cbd5e1; font-size:1.05rem; }
.olympus-actions { display:flex; flex-wrap:wrap; gap:.7rem; margin-top:1.4rem; }
.olympus-button { display:inline-block; padding:.72rem 1rem; border-radius:.65rem; font-weight:750; text-decoration:none; }
.olympus-primary { background:#22d3ee; color:#082f49 !important; }
.olympus-secondary { border:1px solid #64748b; color:#f8fafc !important; }
.olympus-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:1rem; margin:1.4rem 0; }
.olympus-card { border:1px solid var(--md-default-fg-color--lightest); border-radius:1rem; padding:1.1rem; background:var(--md-default-bg-color); }
.olympus-card strong { display:block; font-size:1.06rem; margin-bottom:.35rem; }
.olympus-card p { color:var(--md-default-fg-color--light); min-height:3rem; }
.olympus-card a { font-weight:700; }
.olympus-focus { border-left:4px solid #06b6d4; padding:1rem 1.2rem; background:color-mix(in srgb,#06b6d4 9%,transparent); border-radius:.35rem; }
.olympus-principle { text-align:center; padding:1.3rem; border-block:1px solid var(--md-default-fg-color--lightest); margin:2rem 0; font-size:1.08rem; }
</style>

<section class="olympus-hero">
  <div class="olympus-kicker">Project Olympus · 184-day operating system</div>
  <h2>Build capability.<br>Leave evidence.</h2>
  <p>Use the repository to choose today’s work, protect focused execution,
  capture technical evidence, and close the feedback loop.</p>
  <div class="olympus-actions">
    <a class="olympus-button olympus-primary" href="quickstart/">Start today</a>
    <a class="olympus-button olympus-secondary" href="lifecycle/">Run a review</a>
    <a class="olympus-button olympus-secondary" href="navigation/">Explore the system</a>
  </div>
</section>

## Choose the next control loop

<div class="olympus-grid">
  <article class="olympus-card">
    <strong>Today</strong>
    <p>Select one outcome, execute a focused block, and record evidence.</p>
    <a href="quickstart/">Open daily guide →</a>
  </article>
  <article class="olympus-card">
    <strong>This week</strong>
    <p>Review throughput, errors, capacity, risks, and the next commitment.</p>
    <a href="lifecycle/#weekly-loop">Open weekly loop →</a>
  </article>
  <article class="olympus-card">
    <strong>Knowledge</strong>
    <p>Find canonical modules, references, projects, and system documentation.</p>
    <a href="navigation/">Browse the map →</a>
  </article>
  <article class="olympus-card">
    <strong>Recovery</strong>
    <p>Reduce scope, protect health, and restore a credible operating baseline.</p>
    <a href="appendices/#recovery-route">Enter recovery mode →</a>
  </article>
</div>

## Current operating rule

<div class="olympus-focus">
  <strong>Repository work must support execution.</strong><br>
  Before adding documentation, identify the decision, action, or evidence it
  will improve. If none exists, return to the active technical task.
</div>

## System status

| Surface | State | Route |
|---|---|---|
| Operation Renaissance | Released `v1.0` | [Execution system](../01-operation-renaissance/README.md) |
| Engineering platform | Active `v1.1` | [Architecture](architecture.md) |
| Repository health | Generated | [Health report](repository-health.md) |
| Repository statistics | Generated | [Statistics](repository-statistics.md) |
| Decisions | Governed | [Architecture decisions](adrs.md) |

<div class="olympus-principle">
If the repository is immaculate but your skills have not moved, Olympus has
failed. If it has rough edges but you have become dramatically more capable,
Olympus has succeeded.
</div>

## Purpose

Provide an execution-first graphical entry point while retaining Markdown as
the canonical source of truth.

## Scope

This site is a public, read-only view. Personal logs, observations, credentials,
health information, financial information, and private evidence remain outside
the published site.

## Audience

The Project Olympus operator and authorized collaborators.

## Dependencies

- [Master Architecture](../MASTER_ARCHITECTURE.md)
- [Operation Renaissance](../01-operation-renaissance/README.md)
- [AI Execution Rules](../governance/AI_EXECUTION_RULES.md)

## Navigation

- [Daily guide](quickstart.md)
- [Review cadence](lifecycle.md)
- [Repository map](navigation.md)
- [System model](system-model.md)
- [FAQ](faq.md)

## References

- [Project README](../README.md)

## Revision History

| Version | Change |
|---|---|
| 1.2.0 | Replaced the placeholder with the execution command center. |

