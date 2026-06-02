# The SKILL.md contract

Every skill is a folder under `/skills` containing a `SKILL.md`. This follows the Anthropic Agent Skills open standard: a skill is a folder with a SKILL.md and YAML frontmatter, portable across vendors.

## Required frontmatter
```yaml
---
name: <slug, matches the folder name>
description: <one line: when an agent should use this skill>
version: <semver>
namespace: <one of S, P, I, CE, D, X>
spiced: <the SPICED letter this writes into>
status: <active | planned>
priority: <1 to 5 if a near-term build, else null>
data_source: <call | CRM | email | mixed>
ai_buildability: <oob | mod | heavy>
defensibility: <canon | generic>
sub_skills: <integer>
license: Apache-2.0
---
```

## Body
A SKILL.md states what the skill does, the typed output (its index), what it reads, the sub-skills (functions) inside it, and which namespace fields it reads and writes in `/spec/spiced.schema.json`. The validator in `/tools/validate.mjs` enforces the frontmatter and that every skill is listed in `skills.json`.
