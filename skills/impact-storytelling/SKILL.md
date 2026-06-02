---
name: impact-storytelling
description: Diagnoses the Impact element of a deal from calls and CRM, writing typed values into the I namespace of the SPICED record.
version: 0.1.0
namespace: I
spiced: I
status: planned
priority: null
data_source: call
ai_buildability: mod
defensibility: canon
sub_skills: 4
license: Apache-2.0
---

# Impact Storytelling

> Status: **planned**. Listed in the registry, not yet implemented.
> Namespace: **I (Impact)**. Writes into the `I` namespace of the SPICED record.

## What this skill will do
Run on the customer's calls and CRM and return a typed reading for the **Impact** element of SPICED, following the pattern in the active skills.

## Sub-skills (functions inside this skill)
- **Value-based (not feature-based) selling**  `source:call | build:mod | def:canon | courses:G2(M8), W1(M6)`
- **Prescribe through storytelling / buy-in**  `source:call | build:mod | def:canon | courses:W1(M6), ST`
- **Hero's Journey / storytelling scorecard**  `source:call | build:mod | def:canon | courses:ST`
- **AI-assisted story delivery**  `source:call | build:mod | def:generic | courses:G2(M8), W1(M6), ST`

## SPICED contract
Reads and writes the `I` fields in [`/spec/spiced.schema.json`](../../spec/spiced.schema.json).
