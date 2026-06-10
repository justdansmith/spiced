---
name: trigger-event-management
description: Trigger Calendar / Save-Play Queue. Diagnoses the Critical Event element of a deal from calls and CRM, writing typed values into the CE namespace of the SPICED record.
version: 0.1.0
namespace: CE
spiced: CE
status: active
priority: 4
data_source: CRM
ai_buildability: mod
defensibility: canon
sub_skills: 2
license: Apache-2.0
---

# Trigger-Event Management

> Priority skill 4 of 5. Status: **active** (reference implementation target).
> Namespace: **CE (Critical Event)**. This skill writes into the `CE` namespace of the SPICED record.

## What this skill does
Runs on the customer's own calls and CRM and returns a typed, machine-readable reading for the **Critical Event** element of SPICED. It is a headless skill: no human or agent is hired on the other side, it just runs.

## Output: Trigger Calendar / Save-Play Queue
A Trigger Calendar and Save-Play Queue: accounts entering renewal windows ranked by risk, with the matched play, the next step, and the owner. Runs headless on a cadence.

## Reads
Renewal dates, contract and subscription fields, stage timestamps, engagement recency, churn-risk fields.

## Sub-skills (functions inside this skill)
- **Save plays based on trigger events**  `source:CRM | build:mod | def:canon | courses:G1(M10)`
- **Renewal timing as the forcing event**  `source:CRM | build:oob | def:canon | courses:G2(M7)`

## Build sequence
Build fourth, in parallel with coaching on a second track. Reuses the CRM read layer from decision-coverage.

## SPICED contract
This skill reads and writes the `CE` fields defined in [`/spec/spiced.schema.json`](../../spec/spiced.schema.json). Any agent in the stack can consume its output because the field names are the contract.

## Cross-Bowtie role (Council 2026-06-09)
Reframed as the **cross-Bowtie re-fire engine**: this skill re-runs the right skill at the right lifecycle moment (renewal, expansion window, health drop), not just a renewal queue. It is the composition spine that lets the library span the full Bowtie without new monolith skills.
