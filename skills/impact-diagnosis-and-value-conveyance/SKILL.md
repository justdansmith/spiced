---
name: impact-diagnosis-and-value-conveyance
description: Diagnoses the Impact element of a deal from calls and CRM, writing typed values into the I namespace of the SPICED record.
version: 0.1.0
namespace: I
spiced: I
status: planned
priority: null
data_source: mixed
ai_buildability: heavy
defensibility: canon
sub_skills: 5
license: Apache-2.0
---

# Impact Diagnosis & Value Conveyance

> Status: **planned**. Listed in the registry, not yet implemented.
> Namespace: **I (Impact)**. Writes into the `I` namespace of the SPICED record.

## What this skill will do
Run on the customer's calls and CRM and return a typed reading for the **Impact** element of SPICED, following the pattern in the active skills.

## Sub-skills (functions inside this skill)
- **Convey rational impact**  `source:call | build:mod | def:canon | courses:P1(M5), W1(M5)`
- **Emotional impact identification**  `source:call | build:heavy | def:canon | courses:SD, W1`
- **Illuminate expansion via impact**  `source:mixed | build:mod | def:canon | courses:G2(M2)`
- **First Value / getting to First Impact**  `source:mixed | build:heavy | def:canon | courses:G1(M6)`
- **Recurring-impact reporting**  `source:mixed | build:heavy | def:canon | courses:G1, G2(M1)`

## SPICED contract
Reads and writes the `I` fields in [`/spec/spiced.schema.json`](../../spec/spiced.schema.json).
