---
name: persona-based-communication
description: Diagnoses the Situation element of a deal from calls and CRM, writing typed values into the S namespace of the SPICED record.
version: 0.1.0
namespace: S
spiced: S
status: planned
priority: null
data_source: email
ai_buildability: mod
defensibility: generic
sub_skills: 3
license: Apache-2.0
---

# Persona-Based Communication

> Status: **planned**. Listed in the registry, not yet implemented.
> Namespace: **S (Situation)**. Writes into the `S` namespace of the SPICED record.

## What this skill will do
Run on the customer's calls and CRM and return a typed reading for the **Situation** element of SPICED, following the pattern in the active skills.

## Sub-skills (functions inside this skill)
- **Influence at all leadership levels**  `source:email | build:mod | def:generic | courses:P1(M2)`
- **AI persona-card creation**  `source:mixed | build:mod | def:generic | courses:P1(M2)`
- **Relevant communication**  `source:email | build:mod | def:generic | courses:P2(M5)`

## SPICED contract
Reads and writes the `S` fields in [`/spec/spiced.schema.json`](../../spec/spiced.schema.json).
