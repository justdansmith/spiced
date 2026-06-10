---
name: renewal-risk-diagnosis
description: Diagnoses renewal risk (distinct from renewal timing) from engagement, support, cadence, and last-impact signals. This is where Net Revenue Retention lives.
version: 0.1.0
namespace: CE
spiced: CE
status: active
priority: 7
data_source: CRM
ai_buildability: mod
defensibility: canon
sub_skills: 5
license: Apache-2.0
added_by: Council review 2026-06-09
---

# Renewal-Risk Diagnosis

> Added in the Council cross-Bowtie review (2026-06-09). Status: **active**, build priority 7.
> Namespace: **CE (Critical Event)**. Closes a post-sale gap the single-letter framing under-covered.

## What this skill does
Diagnoses renewal risk (distinct from renewal timing) from engagement, support, cadence, and last-impact signals. This is where Net Revenue Retention lives.

## Output
A per-account Renewal Risk Index with the contributing signals and a recommended save play. Cross-Bowtie: re-fired by Trigger-Event Management at renewal windows.

## Sub-skills (functions inside this skill)
- **Engagement-decay signal**  `source:CRM | build:mod | def:canon`
- **Support-load / sentiment signal**  `source:mixed | build:mod | def:generic`
- **Cadence-gap detection**  `source:CRM | build:oob | def:canon`
- **Last-impact recency**  `source:mixed | build:mod | def:canon`
- **Recommended save play**  `source:CRM | build:mod | def:canon`

## SPICED contract
Reads and writes the relevant fields in [`/spec/spiced.schema.json`](../../spec/spiced.schema.json). Recurring revenue is recurring impact, so this skill keeps the namespace populated past signature.
