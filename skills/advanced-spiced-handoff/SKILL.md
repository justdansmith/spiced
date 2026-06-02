---
name: advanced-spiced-handoff
description: Diagnoses the Decision element of a deal from calls and CRM, writing typed values into the D namespace of the SPICED record.
version: 0.1.0
namespace: D
spiced: D
status: planned
priority: null
data_source: mixed
ai_buildability: heavy
defensibility: canon
sub_skills: 2
license: Apache-2.0
---

# Advanced SPICED Handoff

> Status: **planned**. Listed in the registry, not yet implemented.
> Namespace: **D (Decision)**. Writes into the `D` namespace of the SPICED record.

## What this skill will do
Run on the customer's calls and CRM and return a typed reading for the **Decision** element of SPICED, following the pattern in the active skills.

## Sub-skills (functions inside this skill)
- **Stakeholder handoff (full SPICED)**  `source:mixed | build:heavy | def:canon | courses:P2(M8)`
- **Internal handoffs (shared SPICED language)**  `source:CRM | build:mod | def:canon | courses:SD, G1(M2)`

## SPICED contract
Reads and writes the `D` fields in [`/spec/spiced.schema.json`](../../spec/spiced.schema.json).
