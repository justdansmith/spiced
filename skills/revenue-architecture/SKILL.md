---
name: revenue-architecture
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

# Revenue Architecture (six models)

> Status: **planned**. Listed in the registry, not yet implemented.
> Namespace: **X (Cross-Cutting)**. Writes into the `X` namespace of the SPICED record.

## What this skill will do
Run on the customer's calls and CRM and return a typed reading for the **Cross-Cutting** element of SPICED, following the pattern in the active skills.

## Sub-skills (functions inside this skill)
- **Revenue Model**  `source:CRM | build:heavy | def:canon | courses:A1, A1e`
- **Data Model (replaces funnel)**  `source:CRM | build:heavy | def:canon | courses:A1, A1e, A2`
- **Mathematical Model**  `source:CRM | build:heavy | def:canon | courses:A1, A1e, M2(M2)`
- **Operating Model**  `source:CRM | build:heavy | def:canon | courses:A1, A1e, GA(M3)`
- **Growth Model (S-curve)**  `source:CRM | build:heavy | def:canon | courses:A1, A1e, GA`
- **GTM Model**  `source:CRM | build:heavy | def:canon | courses:A1, A1e`
- **Revenue Factory / first-principles**  `source:mixed | build:heavy | def:canon | courses:A1, GA(M1)`

## SPICED contract
Reads and writes the `X` fields in [`/spec/spiced.schema.json`](../../spec/spiced.schema.json).
