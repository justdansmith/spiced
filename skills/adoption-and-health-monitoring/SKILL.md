---
name: adoption-and-health-monitoring
description: Monitors onboarding, adoption, and account health from usage telemetry. Schema now, runtime gated on connected customer usage data.
version: 0.1.0
namespace: X
spiced: X
status: planned
priority: null
data_source: CRM
ai_buildability: heavy
defensibility: canon
sub_skills: 4
license: Apache-2.0
added_by: Council review 2026-06-09
---

# Adoption & Health Monitoring

> Added in the Council cross-Bowtie review (2026-06-09). Status: **planned**.
> Namespace: **X (Cross-Cutting)**. Closes a post-sale gap the single-letter framing under-covered.

## What this skill does
Monitors onboarding, adoption, and account health from usage telemetry. Schema now, runtime gated on connected customer usage data.

## Output
A per-account health score and onboarding-milestone tracker with stalled-adoption alerts. Runtime gated on usage data.

## Sub-skills (functions inside this skill)
- **Usage / adoption telemetry read**  `source:CRM | build:heavy | def:canon`
- **Health-score composition**  `source:CRM | build:mod | def:canon`
- **Onboarding-milestone tracking**  `source:CRM | build:mod | def:canon`
- **Stalled-adoption alert**  `source:CRM | build:mod | def:canon`

## SPICED contract
Reads and writes the relevant fields in [`/spec/spiced.schema.json`](../../spec/spiced.schema.json). Recurring revenue is recurring impact, so this skill keeps the namespace populated past signature.
