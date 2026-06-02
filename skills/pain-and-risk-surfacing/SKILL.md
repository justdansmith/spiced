---
name: pain-and-risk-surfacing
description: Diagnoses the Pain element of a deal from calls and CRM, writing typed values into the P namespace of the SPICED record.
version: 0.1.0
namespace: P
spiced: P
status: planned
priority: null
data_source: mixed
ai_buildability: mod
defensibility: canon
sub_skills: 2
license: Apache-2.0
---

# Pain & Risk Surfacing

> Status: **planned**. Listed in the registry, not yet implemented.
> Namespace: **P (Pain)**. Writes into the `P` namespace of the SPICED record.

## What this skill will do
Run on the customer's calls and CRM and return a typed reading for the **Pain** element of SPICED, following the pattern in the active skills.

## Sub-skills (functions inside this skill)
- **Surface risks to the account**  `source:mixed | build:mod | def:canon | courses:G2(M2)`
- **Messages centered on customer pain**  `source:email | build:mod | def:generic | courses:P2(M5)`

## SPICED contract
Reads and writes the `P` fields in [`/spec/spiced.schema.json`](../../spec/spiced.schema.json).
