---
name: realized-impact-tracking
description: Measures realized post-sale value (I.realized): time-to-first-value and recurring impact, from telemetry and CRM. The post-sale half of the Impact namespace.
version: 0.1.0
namespace: I
spiced: I
status: active
priority: 6
data_source: mixed
ai_buildability: heavy
defensibility: canon
sub_skills: 4
license: Apache-2.0
added_by: Council review 2026-06-09
---

# Realized-Impact Tracking

> Added in the Council cross-Bowtie review (2026-06-09). Status: **active**, build priority 6.
> Namespace: **I (Impact)**. Closes a post-sale gap the single-letter framing under-covered.

## What this skill does
Measures realized post-sale value (I.realized): time-to-first-value and recurring impact, from telemetry and CRM. The post-sale half of the Impact namespace.

## Output
A per-account realized-impact reading: time-to-first-value, a recurring-impact score, and a red-light alert when realized impact decays. Writes into impact.realized.

## Sub-skills (functions inside this skill)
- **First-value detection (time-to-first-value)**  `source:mixed | build:mod | def:canon`
- **Realized-value evidence (telemetry + CRM)**  `source:CRM | build:heavy | def:canon`
- **Recurring-impact score**  `source:mixed | build:heavy | def:canon`
- **Impact-decay red-light alerting**  `source:CRM | build:mod | def:canon`

## SPICED contract
Reads and writes the relevant fields in [`/spec/spiced.schema.json`](../../spec/spiced.schema.json). Recurring revenue is recurring impact, so this skill keeps the namespace populated past signature.
