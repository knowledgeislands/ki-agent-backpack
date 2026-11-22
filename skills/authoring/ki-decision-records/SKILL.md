---
name: ki-decision-records
ki-document-type: skill@2026-11-17T00:55:00Z
ki-kind: governance
ki-applicability: detected
ki-guild: authoring
ki-depends-on: []
ki-shared-dependencies: [ki-skills:rubric, ki-work-roadmap:work-identifiers]
description: >
  Create or audit typed KI Decision Records for durable rationale and authority. Use `ki-specs` for accepted
  behaviour, `ki-guides` for procedures, and `ki-work-roadmap` for future delivery.
argument-hint: 'audit [dir] | conform [dir] | consolidate [dir] | educate [dir] | help | new <scope> "<title>" | refresh'
---

# Knowledge Islands Decision Records standard

This skill governs typed Decision Records, the single instrument for a significant standalone decision in any Knowledge Islands repository, code or KB: each `decision_type` has its own prefix, so the kind of decision reads from the filename. A record is a concise, self-contained **living present-state record**, edited in place. The rules live in [the Decision Records standard](references/standard-decision-records.md), the checkable criteria in [the generated rubric](references/rubric.md), worked examples in [the exemplars](references/exemplars.md), and the sources in [the source list](references/sources.md).

## Where the rules live

Read the standard before writing, renaming or auditing a record. Its parts:

- **Naming, scope and serials,** `<ID>-<title-slug>.md`, the scope from `[skills.ki-repo].repo_code`, serials per prefix within the scope: [4.1](references/standard-decision-records.md#41-naming-convention).
- **The nine prefixes** and their `decision_type`: [4.2](references/standard-decision-records.md#42-prefix-table).
- **Placement,** `docs/decisions/` or, in a KB, `Admin/Governance/Decisions/`: [4.3](references/standard-decision-records.md#43-placement); the collection holds only records and their index: [4.4](references/standard-decision-records.md#44-self-contained-collection).
- **Front matter, sections and template:** [4.5](references/standard-decision-records.md#45-frontmatter) to [4.7](references/standard-decision-records.md#47-templates).
- **The collection root,** `GDR-<SCOPE>-001: Adopting Decision Records`, **the index** and **the dependency graph:** [4.8](references/standard-decision-records.md#48-collection-root) to [4.10](references/standard-decision-records.md#410-dependency-graph).
- **Writing and keeping a record,** amend before NEW, edit in place, no history or roadmap inside, and the Enactment Process link: [4.11](references/standard-decision-records.md#411-writing-guidance).

The structured rubric under `scripts/rubric/` checks filenames, sections, front matter, serials, the index and reveal order, resolving KB or code placement from `.ki.toml`; the generic `ki` host runs it. Whether a prefix fits the decision stays a judgment.

## Operating modes

Carries the universal **AUDIT · CONFORM · EDUCATE · REFRESH**, plus **CONSOLIDATE** (bring the whole collection back to the consolidated current decisions, run in every regular repository review) and **NEW** (draft a new DR). Invoked as `help` / `-h` / `?`, it explains itself and stops — the generated HELP block (name, purpose, invocation, modes, off-ramps), taking no action. With no mode it does the same, then, in an interactive session only, offers the mode choice via `AskUserQuestion`, prompting for any `argument-hint` target the chosen mode shows.

### Mode AUDIT

→ Read [the AUDIT procedure](references/mode-audit.md).

### Mode CONFORM

→ Read [the CONFORM procedure](references/mode-conform.md).

### Mode CONSOLIDATE

→ Read [the CONSOLIDATE procedure](references/mode-consolidate.md).

### Mode EDUCATE

Run `ki repo educate --skill ki-decision-records --repo <repo>` to render the catalogue's concern and families. To establish the collection itself, scaffold the decisions directory per the placement rule (`docs/decisions/` for code repos, `Admin/Governance/Decisions/` for KB repos) with its index (`Decisions.md`, or `_index.md` in code repos); **NEW** then authors individual DRs into it.

### Mode NEW

→ Read [the NEW procedure](references/mode-new.md).

### Mode REFRESH

→ Read [the REFRESH procedure](references/mode-refresh.md).

## Notes

- **Amend before NEW:** locate the record that owns the concern first, and change it in place unless the decision is genuinely independent; the standard's [writing guidance](references/standard-decision-records.md#411-writing-guidance) sets the test.
- `ki-specs` owns accepted behaviour, `ki-guides` procedures, and `ki-work-roadmap` future delivery.
