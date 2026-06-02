---
name: governance-and-decision-rule-authoring
description: Diagnoses the Cross-Cutting element of a deal from calls and CRM, writing typed values into the X namespace of the SPICED record.
version: 0.1.0
namespace: X
spiced: X
status: planned
priority: null
data_source: CRM
ai_buildability: heavy
defensibility: canon
sub_skills: 7
license: Apache-2.0
---

# Governance & Decision-Rule Authoring

> Status: **planned**. Listed in the registry, not yet implemented.
> Namespace: **X (Cross-Cutting)**. Writes into the `X` namespace of the SPICED record.

## What this skill will do
Run on the customer's calls and CRM and return a typed reading for the **Cross-Cutting** element of SPICED, following the pattern in the active skills.

## Sub-skills (functions inside this skill)
- **Decision Spine (A1 to A5)**  `source:CRM | build:heavy | def:canon | courses:GA, A3`
- **Do Not Sell Matrix (guardrails)**  `source:CRM | build:heavy | def:canon | courses:GA, A3`
- **Confidence Thresholds & Escalation Rules**  `source:CRM | build:heavy | def:canon | courses:GA, A3`
- **Growth Reasoning Patterns (PH101..PH704)**  `source:mixed | build:heavy | def:canon | courses:A3, GA`
- **Canonical Customer System States (CS01..CS07)**  `source:CRM | build:heavy | def:canon | courses:GA, A3`
- **Probability Language & Risk Semantics**  `source:mixed | build:heavy | def:canon | courses:A3, GA`
- **Quote Validation Checklist (Q1..Q10)**  `source:CRM | build:heavy | def:canon | courses:A3`

## SPICED contract
Reads and writes the `X` fields in [`/spec/spiced.schema.json`](../../spec/spiced.schema.json).
