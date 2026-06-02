---
name: discovery-agent
description: Runs a discovery call end to end: composes Situation, Question-Based Selling, and Decision skills to populate S, P, and the start of D.
version: 0.1.0
composes_skills: ["situation-diagnosis", "question-based-selling", "decision-coverage"]
license: Apache-2.0
---

# Discovery Agent

Runs a discovery call end to end: composes Situation, Question-Based Selling, and Decision skills to populate S, P, and the start of D.

## Composes
- [`situation-diagnosis`](../../skills/situation-diagnosis/SKILL.md)
- [`question-based-selling`](../../skills/question-based-selling/SKILL.md)
- [`decision-coverage`](../../skills/decision-coverage/SKILL.md)

## How it works
An agent does not contain logic of its own. It orchestrates skills, each of which reads and writes the SPICED namespaces. The agent reads the populated namespaces and decides the next action. Because the skills share the SPICED contract, the agent can reason about a deal without ambiguity.
