---
name: objection-handling
description: Diagnoses the Pain element of a deal from calls and CRM, writing typed values into the P namespace of the SPICED record.
version: 0.1.0
namespace: P
spiced: P
status: planned
priority: null
data_source: call
ai_buildability: mod
defensibility: generic
sub_skills: 3
license: Apache-2.0
---

# Objection Handling

> Status: **planned**. Listed in the registry, not yet implemented.
> Namespace: **P (Pain)**. Writes into the `P` namespace of the SPICED record.

## What this skill will do
Run on the customer's calls and CRM and return a typed reading for the **Pain** element of SPICED, following the pattern in the active skills.

## Sub-skills (functions inside this skill)
- **The 4 common objections and responses**  `source:call | build:mod | def:generic | courses:P1(M6)`
- **Persona-based objections and the why**  `source:call | build:mod | def:generic | courses:P1(M6)`
- **Objection / trigger plays at renewal**  `source:call | build:mod | def:canon | courses:G2(M4), G2(M5)`

## SPICED contract
Reads and writes the `P` fields in [`/spec/spiced.schema.json`](../../spec/spiced.schema.json).
