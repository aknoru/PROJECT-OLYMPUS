---
id: REN-FIN-01
title: "Finance System"
type: protocol
status: approved
version: 0.1.0
owner: project-maintainer
review_due: 2027-01-23
---

# Finance System

## Purpose

Organize financial evidence and decisions without personalized advice.

## Scope

This document covers financial records, cash-flow control, buffers, obligations, protection, investing literacy, and fraud awareness. This is general education, not personalized investment, tax, legal, credit, or insurance advice. No return, outcome, or regulatory treatment is guaranteed.

## Theory

Reliable decisions start with current evidence, explicit assumptions, reversible
steps, and a dated review. Records distinguish observations from interpretations
and prevent memory, urgency, or confidence from silently replacing evidence.

## Evidence Classification

| Class | Meaning | Use |
|---|---|---|
| Evidence | Registered authoritative material or verified records | Supports claims and observations |
| Best practice | Reusable control consistent with the evidence | Default until context requires change |
| Opinion | Preference or untested hypothesis | Label, time-box, and evaluate |

Evidence supports structured literacy and risk-aware decisions. Best practice is
to keep records minimal, private, current, and decision-linked. Opinion is
allowed only when marked and tested; it never overrides legal, professional, or
safety requirements.

## Framework

| Stage | Required input | Output | Control |
|---|---|---|---|
| Observe | Current records | Factual baseline | Verify provenance and period |
| Interpret | Baseline and assumptions | Bounded explanation | Separate fact from inference |
| Decide | Options and constraints | Decision record | State owner and reversibility |
| Act | Approved decision | Evidence of action | Protect private information |
| Review | New evidence | Continue, change, or stop | Use a dated trigger |

## Workflow

Start with scope, inventory records, operate cash-flow controls, review risks, and record consequential decisions.

## Implementation

Use synthetic examples in public files and keep personal records under ignored
`private/` paths. Record the question, source data, assumptions, options,
opportunity cost, selected action, owner, due date, and review trigger. Verify
mutable rules with current authoritative local sources before acting.

## Contents

- [Scope and Disclaimer](scope-and-disclaimer.md)
- [Cash Flow Basics](cash-flow-basics.md)
- [Emergency Buffer](emergency-buffer.md)
- [Debt and Credit](debt-and-credit.md)
- [Insurance Basics](insurance-basics.md)
- [Investing Foundations](investing-foundations.md)
- [Fraud and Risk](fraud-and-risk.md)

## Dependencies

The system depends on charter constraints, private-data controls, and verified
source records. Review decisions flow to the canonical Review System.

## Navigation

- [Operation Renaissance](../README.md)
- [Review System](../13-review-system/README.md)
- [Master Architecture](../../MASTER_ARCHITECTURE.md)

## Future Content

No additional Finance System file is authorized. Country-, currency-, tax-, or
product-specific adapters require a later approved scope and qualified review.

## Decision Tree

```mermaid
flowchart TD
    A["Collect current evidence"] --> B{"Evidence complete and verified?"}
    B -- "No" --> C["Obtain records or qualified guidance"]
    B -- "Yes" --> D{"Decision within scope and reversible?"}
    D -- "No" --> E["Pause and escalate to appropriate professional"]
    D -- "Yes" --> F["Record and execute bounded action"]
    C --> A
    F --> G["Review outcome on scheduled date"]
```

Decision owner: the operator. Inputs must be current for the review period.
Irreversible, regulated, high-loss, or unclear decisions require escalation.

## Failure Modes

- Acting on stale, incomplete, promotional, or unverified information.
- Hiding assumptions or treating opinion as evidence.
- Optimizing a metric while ignoring risk, quality, privacy, or opportunity cost.
- Recording sensitive personal data in the public repository.

## Recovery

Pause the affected action, preserve available evidence, correct the record,
obtain qualified help where appropriate, reduce exposure, and schedule a review
of both the decision and the control that failed.

## Examples

A learner notices recurring discretionary spending and changes a category limit after reviewing three periods of records.

## Tables

The Evidence Classification and Framework tables are the canonical compact
summaries for this protocol.

## Mermaid Diagrams

The decision diagram routes incomplete, irreversible, regulated, or unclear
cases away from automatic action and into verification or professional review.

## Cross References

- [Scope and Disclaimer](scope-and-disclaimer.md)
- [Finance System](README.md)
- [Execution System](../03-execution-system/README.md)
- [Master Architecture](../../MASTER_ARCHITECTURE.md)

## References

- [Source register](../../references/source-register.yml)
- `SRC-OECD-PISA-FIN-2022`, `SRC-INVESTOR-RISK`, and `SRC-FTC-CONSUMER`

## Further Reading

Consult the registered sources and current jurisdiction-appropriate official or
qualified professional material before applying a context-dependent decision.

## Next Steps

Create a private or synthetic record, run the decision tree, and schedule the
first evidence review.

## Acceptance Criteria

- [x] Evidence, best practice, and opinion are distinguished.
- [x] No personalized or guaranteed outcome is presented.
- [x] Decision ownership, escalation, privacy, and review controls are explicit.
