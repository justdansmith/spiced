---
name: account-and-context-research
description: Diagnoses the Situation element of a deal from calls and CRM, writing typed values into the S namespace of the SPICED record.
version: 0.1.0
namespace: S
spiced: S
status: planned
priority: null
data_source: mixed
ai_buildability: mod
defensibility: generic
sub_skills: 5
license: Apache-2.0
---

# Account & Context Research

> Status: **planned**. Listed in the registry, not yet implemented.
> Namespace: **S (Situation)**. Writes into the `S` namespace of the SPICED record.

## What this skill will do
Run on the customer's calls and CRM and return a typed reading for the **Situation** element of SPICED, following the pattern in the active skills.

## Sub-skills (functions inside this skill)
- **Account research to personalize outreach**  `source:mixed | build:mod | def:generic | courses:P1(M3), P2(M2)`
- **Persona research / top-3-pains-per-persona**  `source:mixed | build:mod | def:generic | courses:P1(M3)`
- **Use of account research tools**  `source:mixed | build:oob | def:generic | courses:P2`
- **Compile target account list / ICP & segmentation**  `source:CRM | build:mod | def:canon | courses:P2`
- **Keeping account insights current**  `source:mixed | build:mod | def:canon | courses:G2(M2)`

## SPICED contract
Reads and writes the `S` fields in [`/spec/spiced.schema.json`](../../spec/spiced.schema.json).
