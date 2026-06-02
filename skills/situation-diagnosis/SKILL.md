---
name: situation-diagnosis
description: Situation Capture Index. Diagnoses the Situation element of a deal from calls and CRM, writing typed values into the S namespace of the SPICED record.
version: 0.1.0
namespace: S
spiced: S
status: active
priority: 5
data_source: call
ai_buildability: mod
defensibility: canon
sub_skills: 2
license: Apache-2.0
---

# Situation Diagnosis (the S of SPICED)

> Priority skill 5 of 5. Status: **active** (reference implementation target).
> Namespace: **S (Situation)**. This skill writes into the `S` namespace of the SPICED record.

## What this skill does
Runs on the customer's own calls and CRM and returns a typed, machine-readable reading for the **Situation** element of SPICED. It is a headless skill: no human or agent is hired on the other side, it just runs.

## Output: Situation Capture Index
A per-account Situation Capture Index: which situational context is surfaced and validated vs missing, feeding the deal-level SPICED-completeness rollup.

## Reads
Call transcripts (opening and context segments), firmographics and persona fields, account-research notes.

## Sub-skills (functions inside this skill)
- **Identify key moments / CX context**  `source:call | build:mod | def:canon | courses:P1(M1), W1(M1), SD`
- **Network / relationship-context mapping**  `source:mixed | build:heavy | def:generic | courses:P1(M8)`

## Build sequence
Build fifth. Reuses transcript ingestion from question-based-selling and the CRM read from decision-coverage. Completes the composite SPICED-completeness scorecard.

## SPICED contract
This skill reads and writes the `S` fields defined in [`/spec/spiced.schema.json`](../../spec/spiced.schema.json). Any agent in the stack can consume its output because the field names are the contract.
