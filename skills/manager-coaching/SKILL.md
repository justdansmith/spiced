---
name: manager-coaching
description: Coaching Priority Index. Diagnoses the Cross-Cutting element of a deal from calls and CRM, writing typed values into the X namespace of the SPICED record.
version: 0.1.0
namespace: X
spiced: X
status: active
priority: 3
data_source: call
ai_buildability: mod
defensibility: canon
sub_skills: 10
license: Apache-2.0
---

# Manager Coaching & Enablement

> Priority skill 3 of 5. Status: **active** (reference implementation target).
> Namespace: **X (Cross-Cutting)**. This skill writes into the `X` namespace of the SPICED record.

## What this skill does
Runs on the customer's own calls and CRM and returns a typed, machine-readable reading for the **Cross-Cutting** element of SPICED. It is a headless skill: no human or agent is hired on the other side, it just runs.

## Output: Coaching Priority Index
A per-rep Coaching Priority Index: ranked skill gaps mapped to specific calls and deals, a REKS-scored call scorecard, and a recommended coaching cadence. A manager dashboard with drill-down to evidence.

## Reads
Outputs of decision-coverage, question-based-selling, and situation-diagnosis; coaching feedback and recorded calls; rep-level pipeline metrics.

## Sub-skills (functions inside this skill)
- **Pillars of coaching (REKS)**  `source:mixed | build:mod | def:canon | courses:M1(M1)`
- **Coaching cadence (Q/M/W)**  `source:mixed | build:mod | def:canon | courses:M1(M3)`
- **High-impact coaching / recorded-call review**  `source:call | build:mod | def:canon | courses:M1(M4), M2(M7)`
- **Roleplays for skill building**  `source:call | build:mod | def:generic | courses:M1(M2), G2`
- **Great questions coaches ask**  `source:call | build:mod | def:generic | courses:M1(M5)`
- **Structure of 1:1 meetings**  `source:mixed | build:oob | def:generic | courses:M1(M6), M2(M5)`
- **Candid conversations / productive feedback**  `source:call | build:mod | def:generic | courses:M1(M7), G1(M9)`
- **Team meetings for skill development**  `source:mixed | build:mod | def:generic | courses:M1(M8)`
- **What good looks like / call scorecards**  `source:call | build:mod | def:canon | courses:M2(M7), M2(M8)`
- **Metric-based leadership (REKS)**  `source:CRM | build:mod | def:canon | courses:M2(M4), M2(M6)`

## Build sequence
Build third. Synthesizes the indices from skills 1, 2, and 5. Do not start before 1 and 2 ship evidence.

## SPICED contract
This skill reads and writes the `X` fields defined in [`/spec/spiced.schema.json`](../../spec/spiced.schema.json). Any agent in the stack can consume its output because the field names are the contract.
