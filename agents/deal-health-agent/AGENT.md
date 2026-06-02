---
name: deal-health-agent
description: Scores live deal health: composes Decision Coverage, Trigger-Event, and Impact reads into one SPICED-completeness and risk view.
version: 0.1.0
composes_skills: ["decision-coverage", "trigger-event-management"]
license: Apache-2.0
---

# Deal Health Agent

Scores live deal health: composes Decision Coverage, Trigger-Event, and Impact reads into one SPICED-completeness and risk view.

## Composes
- [`decision-coverage`](../../skills/decision-coverage/SKILL.md)
- [`trigger-event-management`](../../skills/trigger-event-management/SKILL.md)

## How it works
An agent does not contain logic of its own. It orchestrates skills, each of which reads and writes the SPICED namespaces. The agent reads the populated namespaces and decides the next action. Because the skills share the SPICED contract, the agent can reason about a deal without ambiguity.
