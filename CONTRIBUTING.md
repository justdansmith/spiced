# Contributing to SPICED

A skill is a folder under `/skills` with a `SKILL.md` that follows [the contract](spec/SKILL.spec.md). To add or change a skill:

1. Create `skills/<slug>/SKILL.md` with valid frontmatter (see the spec).
2. Add it to `skills.json`.
3. Run `node tools/validate.mjs` until it passes.
4. Open a pull request. CI runs the validator on every push.

Skills read and write the namespaces defined in `spec/spiced.schema.json`. Keep the field names stable: they are the protocol.
