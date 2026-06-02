---
name: account-based-prospecting
description: Diagnoses the Cross-Cutting element of a deal from calls and CRM, writing typed values into the X namespace of the SPICED record.
version: 0.1.0
namespace: X
spiced: X
status: planned
priority: null
data_source: mixed
ai_buildability: mod
defensibility: canon
sub_skills: 5
license: Apache-2.0
---

# Account-Based Prospecting (parent)

> Status: **planned**. Listed in the registry, not yet implemented.
> Namespace: **X (Cross-Cutting)**. Writes into the `X` namespace of the SPICED record.

## What this skill will do
Run on the customer's calls and CRM and return a typed reading for the **Cross-Cutting** element of SPICED, following the pattern in the active skills.

## Sub-skills (functions inside this skill)
- **Intro to account-based prospecting**  `source:CRM | build:mod | def:canon | courses:P2(M1)`
- **Provocative / reframe selling**  `source:mixed | build:heavy | def:canon | courses:W2(wk1)`
- **Science of effective communication**  `source:call | build:mod | def:canon | courses:W1(M2), G1(M3)`
- **Sales-as-a-science (moments that matter)**  `source:mixed | build:heavy | def:canon | courses:W1(M1), P1(M1)`
- **Perfect Discovery Call blueprint**  `source:call | build:mod | def:canon | courses:W1(M3), SD`

## SPICED contract
Reads and writes the `X` fields in [`/spec/spiced.schema.json`](../../spec/spiced.schema.json).
