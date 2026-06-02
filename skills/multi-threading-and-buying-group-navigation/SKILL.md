---
name: multi-threading-and-buying-group-navigation
description: Diagnoses the Decision element of a deal from calls and CRM, writing typed values into the D namespace of the SPICED record.
version: 0.1.0
namespace: D
spiced: D
status: planned
priority: null
data_source: CRM
ai_buildability: oob
defensibility: canon
sub_skills: 3
license: Apache-2.0
---

# Multi-Threading & Buying-Group Navigation

> Status: **planned**. Listed in the registry, not yet implemented.
> Namespace: **D (Decision)**. Writes into the `D` namespace of the SPICED record.

## What this skill will do
Run on the customer's calls and CRM and return a typed reading for the **Decision** element of SPICED, following the pattern in the active skills.

## Sub-skills (functions inside this skill)
- **Multi-threading (Sales Execution Playbook)**  `source:CRM | build:oob | def:canon | courses:W2(wk2)`
- **Mapping relationships blueprint**  `source:CRM | build:mod | def:canon | courses:W2`
- **Consensus building across the group**  `source:call | build:heavy | def:generic | courses:W2(wk3)`

## SPICED contract
Reads and writes the `D` fields in [`/spec/spiced.schema.json`](../../spec/spiced.schema.json).
