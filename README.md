# SPICED

**SPICED is the protocol every go-to-market skill plugs into.**

Not a sales methodology here, a contract. The five elements (Situation, Pain, Impact, Critical Event, Decision) are namespaces. A skill is a folder that runs on a deal's calls and CRM and writes typed values into a namespace. An agent composes skills and reasons over the populated namespaces. Because the field names are shared, any skill or agent, from any vendor, knows where to read and write.

This repository is the open standard. It follows the [Anthropic Agent Skills](https://www.anthropic.com/news) format: a skill is a folder with a `SKILL.md`, portable across the agent ecosystem.

## Structure
```
spec/        the SPICED protocol: the field contract every skill obeys
skills/      one folder per skill, each a SKILL.md, sub-skills nested
agents/      agents that compose skills
projects/    reference bundles that select skills and agents (examples only)
tools/       the validator CI runs against the spec
skills.json  the registry of all skills
```

## The five namespaces
See [`spec/namespaces.md`](spec/namespaces.md). Multi-threading is not a top-level skill. It is a function inside the **Decision** namespace, alongside stakeholder mapping and buying-center roles.

## Priority skills
The first five reference skills, in build order:

1. `decision-coverage` (Decision) includes multi-threading
2. `question-based-selling` (Pain)
3. `manager-coaching` (Cross-Cutting)
4. `trigger-event-management` (Critical Event)
5. `situation-diagnosis` (Situation)

## Status
Early. The five priority skills are the reference pattern; the rest are listed in `skills.json` as planned. This is a reference standard: it contains no customer data.

## License
Apache-2.0. See [LICENSE](LICENSE).
