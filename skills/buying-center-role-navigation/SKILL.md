---
name: buying-center-role-navigation
description: Diagnoses the Decision element of a deal from calls and CRM, writing typed values into the D namespace of the SPICED record.
version: 0.1.0
namespace: D
spiced: D
status: planned
priority: null
data_source: call
ai_buildability: mod
defensibility: canon
sub_skills: 4
license: Apache-2.0
---

# Buying-Center Role Navigation

> Status: **planned**. Listed in the registry, not yet implemented.
> Namespace: **D (Decision)**. Writes into the `D` namespace of the SPICED record.

## What this skill will do
Run on the customer's calls and CRM and return a typed reading for the **Decision** element of SPICED, following the pattern in the active skills.

## Sub-skills (functions inside this skill)
- **Roles: Initiator..Decider..Exec Buying Group**  `source:CRM | build:mod | def:canon | courses:P2(M3), W2(wk2)`
- **Champion activation**  `source:call | build:heavy | def:canon | courses:W1, W2`
- **Unlocking gatekeepers**  `source:call | build:mod | def:generic | courses:G2(M6), W2(wk2)`
- **Building & deepening exec relationships**  `source:mixed | build:heavy | def:generic | courses:G2(M6), W2`

## SPICED contract
Reads and writes the `D` fields in [`/spec/spiced.schema.json`](../../spec/spiced.schema.json).
