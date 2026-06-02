---
name: closing-negotiation-and-commitment
description: Diagnoses the Decision element of a deal from calls and CRM, writing typed values into the D namespace of the SPICED record.
version: 0.1.0
namespace: D
spiced: D
status: planned
priority: null
data_source: call
ai_buildability: mod
defensibility: canon
sub_skills: 6
license: Apache-2.0
---

# Closing, Negotiation & Commitment

> Status: **planned**. Listed in the registry, not yet implemented.
> Namespace: **D (Decision)**. Writes into the `D` namespace of the SPICED record.

## What this skill will do
Run on the customer's calls and CRM and return a typed reading for the **Decision** element of SPICED, following the pattern in the active skills.

## Sub-skills (functions inside this skill)
- **Trade vs negotiate (win-win)**  `source:call | build:mod | def:canon | courses:W1(M8), G2(M7)`
- **Prescribe with a customized demo**  `source:call | build:mod | def:canon | courses:W1(M7)`
- **Securing the renewal**  `source:CRM | build:mod | def:canon | courses:G2(M4)`
- **Expansion / upsell / whitespace**  `source:CRM | build:mod | def:canon | courses:G2(M5)`
- **Proof-of-concept management**  `source:mixed | build:heavy | def:generic | courses:W2(wk4)`
- **Procurement negotiation**  `source:call | build:mod | def:generic | courses:W2(wk4)`

## SPICED contract
Reads and writes the `D` fields in [`/spec/spiced.schema.json`](../../spec/spiced.schema.json).
