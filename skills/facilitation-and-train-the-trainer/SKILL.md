---
name: facilitation-and-train-the-trainer
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

# Facilitation & Train-the-Trainer

> Status: **planned**. Listed in the registry, not yet implemented.
> Namespace: **X (Cross-Cutting)**. Writes into the `X` namespace of the SPICED record.

## What this skill will do
Run on the customer's calls and CRM and return a typed reading for the **Cross-Cutting** element of SPICED, following the pattern in the active skills.

## Sub-skills (functions inside this skill)
- **Enhancing engagement (10/20/70)**  `source:mixed | build:heavy | def:canon | courses:FC(M1)`
- **Commanding the room**  `source:call | build:heavy | def:generic | courses:FC(M2)`
- **Captivating attention (story, prosody)**  `source:call | build:heavy | def:generic | courses:FC(M3)`
- **Tailoring the experience (facilitator guide)**  `source:mixed | build:mod | def:canon | courses:FC(M4)`

## SPICED contract
Reads and writes the `X` fields in [`/spec/spiced.schema.json`](../../spec/spiced.schema.json).
