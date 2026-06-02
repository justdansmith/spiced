---
name: writing-and-outbound-mechanics
description: Diagnoses the Cross-Cutting element of a deal from calls and CRM, writing typed values into the X namespace of the SPICED record.
version: 0.1.0
namespace: X
spiced: X
status: planned
priority: null
data_source: email
ai_buildability: mod
defensibility: generic
sub_skills: 6
license: Apache-2.0
---

# Writing & Outbound Mechanics

> Status: **planned**. Listed in the registry, not yet implemented.
> Namespace: **X (Cross-Cutting)**. Writes into the `X` namespace of the SPICED record.

## What this skill will do
Run on the customer's calls and CRM and return a typed reading for the **Cross-Cutting** element of SPICED, following the pattern in the active skills.

## Sub-skills (functions inside this skill)
- **Powerful messages with RRR**  `source:email | build:mod | def:canon | courses:P1, P2, W1`
- **Apply research to emails and calls**  `source:email | build:mod | def:canon | courses:P1(M4), W1(M4)`
- **Building sequences**  `source:email | build:oob | def:generic | courses:P1(M7)`
- **SDR toolstack & time management**  `source:mixed | build:oob | def:generic | courses:P1(M7)`
- **Community / social for introductions**  `source:mixed | build:mod | def:generic | courses:P1(M8)`
- **Orchestrate resources / curate content**  `source:mixed | build:mod | def:generic | courses:P2(M4)`

## SPICED contract
Reads and writes the `X` fields in [`/spec/spiced.schema.json`](../../spec/spiced.schema.json).
