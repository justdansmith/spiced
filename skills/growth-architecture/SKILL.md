---
name: growth-architecture
description: Diagnoses the Cross-Cutting element of a deal from calls and CRM, writing typed values into the X namespace of the SPICED record.
version: 0.1.0
namespace: X
spiced: X
status: planned
priority: null
data_source: CRM
ai_buildability: heavy
defensibility: canon
sub_skills: 6
license: Apache-2.0
---

# Growth Architecture

> Status: **planned**. Listed in the registry, not yet implemented.
> Namespace: **X (Cross-Cutting)**. Writes into the `X` namespace of the SPICED record.

## What this skill will do
Run on the customer's calls and CRM and return a typed reading for the **Cross-Cutting** element of SPICED, following the pattern in the active skills.

## Sub-skills (functions inside this skill)
- **Compound growth (loops vs decay)**  `source:CRM | build:heavy | def:canon | courses:GA(M2)`
- **Growth Loops (WoM, Education, Advocacy, Retention, Expansion)**  `source:CRM | build:heavy | def:canon | courses:GA`
- **Scenario (Monte Carlo) / contribution (3x3)**  `source:CRM | build:heavy | def:canon | courses:GA`
- **Growth planning & guidance**  `source:CRM | build:heavy | def:canon | courses:GA, A3`
- **Growth System State Check / GTMD**  `source:CRM | build:heavy | def:canon | courses:GA(M2)`
- **Architect growth machines**  `source:mixed | build:heavy | def:canon | courses:GA(M3)`

## SPICED contract
Reads and writes the `X` fields in [`/spec/spiced.schema.json`](../../spec/spiced.schema.json).
