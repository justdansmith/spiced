---
name: coaching-agent
description: Synthesizes the per-call and per-deal indices into a per-rep coaching priority and cadence.
version: 0.1.0
composes_skills: ["manager-coaching", "question-based-selling", "decision-coverage"]
license: Apache-2.0
---

# Coaching Agent

Synthesizes the per-call and per-deal indices into a per-rep coaching priority and cadence.

## Composes
- [`manager-coaching`](../../skills/manager-coaching/SKILL.md)
- [`question-based-selling`](../../skills/question-based-selling/SKILL.md)
- [`decision-coverage`](../../skills/decision-coverage/SKILL.md)

## How it works
An agent does not contain logic of its own. It orchestrates skills, each of which reads and writes the SPICED namespaces. The agent reads the populated namespaces and decides the next action. Because the skills share the SPICED contract, the agent can reason about a deal without ambiguity.
