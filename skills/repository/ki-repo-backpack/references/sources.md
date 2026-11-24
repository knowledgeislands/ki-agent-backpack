---
ki-document-type: sources@2026-11-24T04:26:02Z
ki-revised: 2026-11-24T04:26:02Z
ki-refresh: external-spec · monthly
---

# Sources — ki-repo-backpack

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
    - [2.1.1 External specifications](#211-external-specifications)
    - [2.1.2 In-house](#212-in-house)
- [3. Last review](#3-last-review)

## 1. Introduction

The tracked sources behind [the compatible backpack standard](standard-compatible-backpack.md). Provenance only: the record of _what changed_ lives in git, not a changelog here.

[Back to contents](#contents)

## 2. Outside sources

The standard follows the Agent Skills and Claude Code subagent formats the backpack serves, and the house's own backpack, decision and sibling skills.

### 2.1 Authoritative

The outside specifications, then the in-house sources; a tag the review cites opens the Source cell.

#### 2.1.1 External specifications

| Source | Governs | Last reviewed |
| --- | --- | --- |
| AS — [Agent Skills specification][as-spec] | The individual `SKILL.md` format the backpack serves † | 2026-11-23 |
| CC — [Claude Code subagent docs][cc-subagents] | The subagent definition format the `subagents/` part serves | 2026-11-23 |

† Including the directory-name = `name:` constraint and the `references/`, `scripts/`, `assets/` layout.

[Back to contents](#contents)

#### 2.1.2 In-house

| Source | Governs | Last reviewed |
| --- | --- | --- |
| AH — [ki-agent-backpack README][ah-readme] | The KI canonical source-backpack implementation § | 2026-11-23 |
| CH — [ADR-KI-HARNESS-012][compatible] | Installed identity, direct payload, capability, host, and activation boundaries | 2026-11-23 |
| KR — `ki-repo` skill | The `.ki.toml` contract and what makes a KI-governed repository | 2026-11-23 |
| KS — `ki-skills` skill | The governed-rubric family, session, and host boundary ‡ | 2026-11-23 |
| KE — `ki-engineering` skill | Development toolchain ownership outside compatible-backpack installation semantics | 2026-11-23 |
| BD — the Cairn summit's change 12 | This skill's name: `ki-repo-harness` became `ki-repo-backpack`; the harness wording in its standards follows when the backpack words are rolled out | 2026-11-23 |

§ Source layout and shelf practice are inferred from this repository; installed-payload policy comes from [CH].

‡ Catalogue shape, context/session ownership, generated publication, and direct host execution.

[as-spec]: https://agentskills.io/specification
[cc-subagents]: https://code.claude.com/docs/en/sub-agents
[ah-readme]: ../../../../README.md
[compatible]: ../../../../docs/decisions/ADR-KI-HARNESS-012-compatible-harness-publication-and-governed-rubric-boundary.md

[Back to contents](#contents)

## 3. Last review

The latest review, on 23 November 2026, re-fetched the Agent Skills specification [AS] and the Claude Code subagent docs [CC]: the specification still defines no bundle or multi-skill grouping and still requires `name` to match the parent directory, and a subagent is still one Markdown file with `name` and `description` required, at project or user level. It re-read the in-house sources [AH], [CH], [KR], [KS], [KE] and [BD], and the compatible backpack standard still follows them all.

**Watching:**

- [CH] still calls `knowledgeislands/ki-agentic-harness` the baseline compatible harness, though the repository is now `ki-agent-backpack`; the ADR owns that wording.
- The repository root holds `output-styles/` (one Claude Code output style, since 14 October 2026), which is none of the four shelves and which neither the README nor the standard names.
- [AS]: any update that adds a bundle or other multi-skill container concept, which this standard would then reconcile with.
- [CC]: any change in Claude Code to skill-install paths or the project-local skill-install convention.
- [CH]: host support for eval capabilities. Evals stay a source shelf until a compatible-payload contract lands, and MCP servers stay independent repositories.

[Back to contents](#contents)
