---
name: driving-urgency-with-critical-event
description: Diagnoses the Critical Event element of a deal from calls and CRM, writing typed values into the CE namespace of the SPICED record.
version: 0.1.0
namespace: CE
spiced: CE
status: planned
priority: null
data_source: call
ai_buildability: mod
defensibility: canon
sub_skills: 4
license: Apache-2.0
---

# Driving Urgency with Critical Event

> Status: **planned**. Listed in the registry, not yet implemented.
> Namespace: **CE (Critical Event)**. Writes into the `CE` namespace of the SPICED record.

## What this skill will do
Run on the customer's calls and CRM and return a typed reading for the **Critical Event** element of SPICED, following the pattern in the active skills.

## Sub-skills (functions inside this skill)
- **Help customer identify critical events**  `source:call | build:heavy | def:canon | courses:W1(M5)`
- **Create urgency with context / questions**  `source:call | build:mod | def:canon | courses:P1(M5)`
- **Request the meeting / no-go-dark**  `source:email | build:oob | def:generic | courses:P1(M4), W1(M3)`
- **Provocative statements for exec interest**  `source:email | build:mod | def:generic | courses:P2(M7)`

## SPICED contract
Reads and writes the `CE` fields in [`/spec/spiced.schema.json`](../../spec/spiced.schema.json).
