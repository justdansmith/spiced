---
name: insight-engineering
description: Diagnoses the Cross-Cutting element of a deal from calls and CRM, writing typed values into the X namespace of the SPICED record.
version: 0.1.0
namespace: X
spiced: X
status: planned
priority: null
data_source: mixed
ai_buildability: heavy
defensibility: canon
sub_skills: 4
license: Apache-2.0
---

# Insight Engineering (causality)

> Status: **planned**. Listed in the registry, not yet implemented.
> Namespace: **X (Cross-Cutting)**. Writes into the `X` namespace of the SPICED record.

## What this skill will do
Run on the customer's calls and CRM and return a typed reading for the **Cross-Cutting** element of SPICED, following the pattern in the active skills.

## Sub-skills (functions inside this skill)
- **Causality toolkit, inductive vs deductive**  `source:mixed | build:heavy | def:canon | courses:A3(M1)`
- **Pareto / MECE / issue trees**  `source:mixed | build:mod | def:generic | courses:A3(M1)`
- **Top-down communication / storyboarding**  `source:mixed | build:mod | def:generic | courses:A3(M2)`
- **Issue diagnosis (explore-issue)**  `source:CRM | build:heavy | def:canon | courses:M2(M3), A3`

## SPICED contract
Reads and writes the `X` fields in [`/spec/spiced.schema.json`](../../spec/spiced.schema.json).
