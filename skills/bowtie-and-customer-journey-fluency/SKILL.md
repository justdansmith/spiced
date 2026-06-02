---
name: bowtie-and-customer-journey-fluency
description: Diagnoses the Cross-Cutting element of a deal from calls and CRM, writing typed values into the X namespace of the SPICED record.
version: 0.1.0
namespace: X
spiced: X
status: planned
priority: null
data_source: CRM
ai_buildability: mod
defensibility: canon
sub_skills: 5
license: Apache-2.0
---

# Bowtie & Customer-Journey Fluency

> Status: **planned**. Listed in the registry, not yet implemented.
> Namespace: **X (Cross-Cutting)**. Writes into the `X` namespace of the SPICED record.

## What this skill will do
Run on the customer's calls and CRM and return a typed reading for the **Cross-Cutting** element of SPICED, following the pattern in the active skills.

## Sub-skills (functions inside this skill)
- **Bowtie fluency: conversion, cohorts, milestones**  `source:CRM | build:mod | def:canon | courses:A2(M1)`
- **Left-side (pre-sales) Bowtie interpretation**  `source:CRM | build:mod | def:canon | courses:A2(M2)`
- **Right-side (post-sales) Bowtie interpretation**  `source:CRM | build:mod | def:canon | courses:A2(M3)`
- **Volume / Conversion / Velocity metrics**  `source:CRM | build:oob | def:canon | courses:A2, M2(M1)`
- **GTM motions / touch models**  `source:CRM | build:mod | def:canon | courses:A1, GA`

## SPICED contract
Reads and writes the `X` fields in [`/spec/spiced.schema.json`](../../spec/spiced.schema.json).
