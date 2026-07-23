---
id: DOCS-QUICKSTART-MD
title: "Start Today"
type: operational-guide
status: active
version: 1.2.0
owner: project-maintainer
---

# Start Today

## Purpose

Move from intention to one bounded execution cycle with visible evidence.

## Daily Control Loop

1. **Check capacity.** Note available time, energy, fixed commitments, and
   constraints.
2. **Select one primary outcome.** Define a result that can be verified today.
3. **Open the canonical module.** Work from the relevant Renaissance protocol,
   roadmap, or technical volume.
4. **Execute a protected block.** Reduce interruptions and keep work in progress
   within the configured limit.
5. **Capture evidence.** Preserve code, test results, solved problems, design
   decisions, or reviewable notes.
6. **Close the loop.** Record what changed, the next action, and any blocker.

## Minimum Viable Day

When capacity is reduced, preserve continuity with:

- one short focused block;
- one concrete artifact or verified correction;
- one next action;
- an explicit recovery decision when normal execution is unsafe or unrealistic.

## Evidence Gate

Before marking work complete, answer:

| Check | Evidence |
|---|---|
| What changed? | Commit, artifact, result, or corrected explanation |
| How was it verified? | Test, rubric, comparison, review, or acceptance check |
| What remains uncertain? | Named assumption, error, risk, or missing input |
| What happens next? | One bounded next action |

## Quick Commands

```powershell
python -m unittest discover -s tests -p "test_*.py"
python scripts/validate_repository.py
python scripts/build_dashboards.py
python scripts/repository_health.py
```

## Privacy Boundary

Do not publish personal schedules, health information, financial records,
credentials, private assessments, or sensitive evidence through GitHub Pages.

## Navigation

- [Command Center](index.md)
- [Review Cadence](lifecycle.md)
- [Recovery Route](appendices.md#recovery-route)
- [Repository Map](navigation.md)

## Cross References

- [Daily System](../01-operation-renaissance/03-execution-system/daily-system.md)
- [Shutdown Protocol](../01-operation-renaissance/03-execution-system/shutdown-protocol.md)
- [Project Evidence System](../01-operation-renaissance/07-project-system/README.md)

## References

- [Master Architecture](../MASTER_ARCHITECTURE.md)

## Revision History

| Version | Change |
|---|---|
| 1.2.0 | Implemented the daily operational entry point. |
