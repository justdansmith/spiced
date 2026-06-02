---
name: stakeholder-mapping
description: Diagnoses the Decision element of a deal from calls and CRM, writing typed values into the D namespace of the SPICED record.
version: 0.1.0
namespace: D
spiced: D
status: planned
priority: null
data_source: call
ai_buildability: mod
defensibility: generic
sub_skills: 3
license: Apache-2.0
---

# Stakeholder Mapping

> Status: **planned**. Listed in the registry, not yet implemented.
> Namespace: **D (Decision)**. Writes into the `D` namespace of the SPICED record.

## What this skill will do
Run on the customer's calls and CRM and return a typed reading for the **Decision** element of SPICED, following the pattern in the active skills.

## Sub-skills (functions inside this skill)
- **Stakeholder research to personalize**  `source:mixed | build:mod | def:generic | courses:P2(M3)`
- **Running successful stakeholder meetings**  `source:call | build:mod | def:generic | courses:P2(M3)`
- **Engaging decision makers**  `source:call | build:mod | def:canon | courses:G1(M11)`

## SPICED contract
Reads and writes the `D` fields in [`/spec/spiced.schema.json`](../../spec/spiced.schema.json).
