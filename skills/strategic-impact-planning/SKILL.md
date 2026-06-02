---
name: strategic-impact-planning
description: Diagnoses the Impact element of a deal from calls and CRM, writing typed values into the I namespace of the SPICED record.
version: 0.1.0
namespace: I
spiced: I
status: planned
priority: null
data_source: mixed
ai_buildability: heavy
defensibility: canon
sub_skills: 4
license: Apache-2.0
---

# Strategic Impact Planning

> Status: **planned**. Listed in the registry, not yet implemented.
> Namespace: **I (Impact)**. Writes into the `I` namespace of the SPICED record.

## What this skill will do
Run on the customer's calls and CRM and return a typed reading for the **Impact** element of SPICED, following the pattern in the active skills.

## Sub-skills (functions inside this skill)
- **Joint Impact Plan (blueprint)**  `source:mixed | build:heavy | def:canon | courses:G2(M3)`
- **Strategic planning & cross-role collaboration**  `source:mixed | build:heavy | def:canon | courses:G2(M3)`
- **Leading Impact Reviews (EBRs)**  `source:call | build:mod | def:canon | courses:G1(M7), G2`
- **Structure of executive customer calls**  `source:call | build:mod | def:canon | courses:G1(M4)`

## SPICED contract
Reads and writes the `I` fields in [`/spec/spiced.schema.json`](../../spec/spiced.schema.json).
