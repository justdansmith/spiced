---
name: question-based-selling
description: Discovery Quality Score. Diagnoses the Pain element of a deal from calls and CRM, writing typed values into the P namespace of the SPICED record.
version: 0.1.0
namespace: P
spiced: P
status: active
priority: 2
data_source: call
ai_buildability: mod
defensibility: canon
sub_skills: 3
license: Apache-2.0
---

# Question-Based Selling

> Priority skill 2 of 5. Status: **active** (reference implementation target).
> Namespace: **P (Pain)**. This skill writes into the `P` namespace of the SPICED record.

## What this skill does
Runs on the customer's own calls and CRM and returns a typed, machine-readable reading for the **Pain** element of SPICED. It is a headless skill: no human or agent is hired on the other side, it just runs.

## Output: Discovery Quality Score
A per-call Discovery Quality Score: question count and type mix vs the SPICED diagnostic pattern, talk-to-listen ratio, summarize-and-validate moments, and a ranked list of missed diagnostic threads.

## Reads
Call transcripts (turn-level speaker tags), coaching feedback, talk-ratio and question-count metadata.

## Sub-skills (functions inside this skill)
- **Asking good questions to surface risks**  `source:call | build:mod | def:canon | courses:G2(M2), G1(M5)`
- **Diagnose with question-based selling**  `source:call | build:mod | def:canon | courses:W1(M4), SD`
- **Active listening / summarize-and-validate**  `source:call | build:mod | def:canon | courses:SD, W1`

## Build sequence
Build second. Establishes the transcript ingestion and turn-level scoring layer that coaching and situation consume. Hard dependency for the coaching skill.

## SPICED contract
This skill reads and writes the `P` fields defined in [`/spec/spiced.schema.json`](../../spec/spiced.schema.json). Any agent in the stack can consume its output because the field names are the contract.
