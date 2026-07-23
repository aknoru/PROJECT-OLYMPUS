---
id: REN-CHARTER-PRINCIPLES
title: "Operating Principles"
type: charter
status: approved
version: 0.1.0
owner: project-maintainer
---

# Operating Principles

## Purpose

Define stable rules for decisions when plans, incentives, or conditions conflict.

## Scope

These principles govern the foundation campaign. Detailed procedures remain in
future systems.

## Theory

Principles reduce decision variance by making preferred trade-offs explicit. They
are useful only when they change observable behavior and expose exceptions.

## Framework

| # | Principle | Definition | Why it matters | Application | Failure example |
|---:|---|---|---|---|---|
| 1 | Systems over motivation | Use designed triggers, inputs, and reviews. | Motivation varies. | Put work on a calendar with evidence. | Waiting to feel ready. |
| 2 | Consistency over intensity | Prefer repeatable load to episodic overload. | Repetition supports accumulation. | Protect a sustainable minimum. | One extreme week followed by collapse. |
| 3 | Evidence over opinion | Tie claims to observable work. | Familiarity can mislead. | Link assessments, code, and reviews. | “I know this” without retrieval. |
| 4 | Execution over perfection | Deliver the smallest valid artifact. | Feedback requires output. | Release a tested vertical slice. | Endless formatting before testing. |
| 5 | Iteration over ego | Treat defects as information. | Correction drives improvement. | Record and retest errors. | Hiding a failed attempt. |
| 6 | Measurement over guessing | Observe before changing. | Unmeasured causes invite speculation. | Run a time audit. | Buying a tool to fix an unknown problem. |
| 7 | Review before optimization | Diagnose the constraint first. | Local speed can harm the system. | Inspect evidence and bottlenecks. | Automating an unused process. |
| 8 | Deep work first | Allocate high-quality attention to high-value tasks. | Complex work suffers from interruption. | Schedule a protected block early. | Using prime time for notifications. |
| 9 | Protect recovery | Treat recovery as a capacity constraint. | Fatigue degrades learning and safety. | Reduce load when guardrails trigger. | Compressing missed work into sleep time. |
| 10 | Single Source of Truth | Store each fact canonically. | Duplication creates divergence. | Link to one registry entry. | Maintaining conflicting trackers. |
| 11 | Quality before volume | Count valid repetitions and artifacts. | Volume is easy to game. | Require review and acceptance tests. | Logging unsolved questions as mastery. |
| 12 | Prerequisites before acceleration | Repair load-bearing gaps. | Advanced work inherits weak foundations. | Reassess dependencies first. | Memorizing advanced procedures blindly. |
| 13 | Feedback before repetition | Correct errors before more attempts. | Repetition can stabilize mistakes. | Compare against tests or review. | Repeating flawed code unchanged. |
| 14 | Finish before starting | Limit work in progress. | Context switching delays evidence. | Close or stop active work. | Five unfinished projects. |
| 15 | Reversibility before commitment | Test uncertain choices cheaply. | Early information reduces lock-in. | Run a time-boxed tool trial. | Buying a costly stack without a test. |
| 16 | Constraints before schedules | Plan inside real capacity. | Schedules do not repeal constraints. | Use observed discretionary time. | Planning every nominal hour. |
| 17 | Explicit trade-offs | Record what is deferred. | Every commitment consumes capacity. | Name the displaced work. | Adding scope without removing any. |
| 18 | Safety and integrity first | Never trade safety or honesty for output. | Invalid evidence corrupts the system. | Stop, disclose, and escalate. | Falsifying a result to meet a gate. |
| 19 | Private by default | Minimize exposed personal data. | Operational data can be sensitive. | Store it under `private/`. | Committing health or account details. |
| 20 | Close the loop | Convert evidence into a decision. | Tracking without action is overhead. | Continue, change, stop, or escalate. | Reviewing metrics with no disposition. |

## Implementation

When principles conflict, apply this precedence: safety and integrity; hard
constraints; evidence validity; sustainable execution; efficiency. Record any
exception and review date.

## Checklist

- [ ] Active decisions cite the relevant principle.
- [ ] Exceptions have evidence, owner, and expiry.
- [ ] No principle is used to justify unsafe load.

## Decision Framework

Identify the decision, applicable principles, conflict, evidence, chosen
trade-off, and review trigger. Escalate unresolved safety or integrity conflicts.

## Common Failure Modes

- Treating principles as slogans.
- Applying “execution over perfection” to bypass verification.
- Applying “consistency” to continue harmful work.

## Recovery Strategy

Stop the conflicting action, restore the precedence order, document the exception,
and choose a smaller valid next action.

## Examples

A verified small project satisfies execution and quality. Shipping broken work
uses one principle to violate another and is rejected.

## References

- `SRC-NASA-SE-2016`
- `SRC-ERICSSON-1993`

## Cross References

- [Execution Philosophy](execution-philosophy.md)
- [Constraints](constraints.md)

## Next Steps

Read the [Execution Philosophy](execution-philosophy.md).

## Acceptance Criteria

- [x] Twenty principles include definition, rationale, application, and failure.
