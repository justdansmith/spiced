---
name: decision-coverage
description: Decision Coverage Index. Diagnoses the Decision element of a deal from calls and CRM, writing typed values into the D namespace of the SPICED record.
version: 0.1.0
namespace: D
spiced: D
status: active
priority: 1
data_source: call
ai_buildability: mod
defensibility: canon
sub_skills: 4
license: Apache-2.0
---

# Decision Process & Criteria Mapping

> Priority skill 1 of 5. Status: **active** (reference implementation target).
> Namespace: **D (Decision)**. This skill writes into the `D` namespace of the SPICED record.

## What this skill does
Runs on the customer's own calls and CRM and returns a typed, machine-readable reading for the **Decision** element of SPICED. It is a headless skill: no human or agent is hired on the other side, it just runs.

## Output: Decision Coverage Index
A per-deal Decision Coverage Index: buying-center role coverage (mapped vs missing), a multi-threading score (active threads vs single-threaded flag), and a decision-criteria capture list with gaps. Plus a portfolio rollup of single-threaded at-risk deals.

## Reads
HubSpot contacts and roles per deal, deal stage and amount, last-touch recency per stakeholder, email thread participants; call transcripts for criteria language.

## Sub-skills (functions inside this skill)
- **Decision-making process mapping**  `source:call | build:mod | def:canon | courses:P2(M3), W2, SD`
- **Decision criteria definition / guiding**  `source:call | build:mod | def:canon | courses:W2(wk3), W1`
- **Reframing decision criteria (red thread)**  `source:call | build:heavy | def:canon | courses:W2(wk3)`
- **Decision maker identification**  `source:CRM | build:oob | def:canon | courses:P2(M3)`

## Build sequence
Build first, no dependencies. Multi-threading ships as a module inside this skill. Establishes the CRM read layer that trigger-event and situation reuse.

## SPICED contract
This skill reads and writes the `D` fields defined in [`/spec/spiced.schema.json`](../../spec/spiced.schema.json). Any agent in the stack can consume its output because the field names are the contract.
