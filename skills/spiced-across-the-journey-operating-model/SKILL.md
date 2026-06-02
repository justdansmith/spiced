---
name: spiced-across-the-journey-operating-model
description: Diagnoses the Cross-Cutting element of a deal from calls and CRM, writing typed values into the X namespace of the SPICED record.
version: 0.1.0
namespace: X
spiced: X
status: planned
priority: null
data_source: CRM
ai_buildability: mod
defensibility: canon
sub_skills: 5
license: Apache-2.0
---

# SPICED-Across-the-Journey Operating Model

> Status: **planned**. Listed in the registry, not yet implemented.
> Namespace: **X (Cross-Cutting)**. Writes into the `X` namespace of the SPICED record.

## What this skill will do
Run on the customer's calls and CRM and return a typed reading for the **Cross-Cutting** element of SPICED, following the pattern in the active skills.

## Sub-skills (functions inside this skill)
- **CS Operating Model (Onboard-Adopt-Expand)**  `source:mixed | build:heavy | def:canon | courses:G1(M1), G2(M1)`
- **Diagnosis across the customer journey**  `source:mixed | build:heavy | def:canon | courses:G1(M2), G2(M1)`
- **Managing an effective renewal cycle**  `source:CRM | build:mod | def:canon | courses:G2(M4)`
- **Whitespace / account planning & retirement**  `source:CRM | build:mod | def:canon | courses:G2(M5)`
- **Monitor & refine account plans (AI-scored)**  `source:CRM | build:mod | def:canon | courses:P2(M6)`

## SPICED contract
Reads and writes the `X` fields in [`/spec/spiced.schema.json`](../../spec/spiced.schema.json).
