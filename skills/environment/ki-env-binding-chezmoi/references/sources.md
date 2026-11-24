---
ki-document-type: sources@2026-11-24T04:52:17Z
ki-revised: 2026-11-24T04:26:02Z
ki-refresh: external-spec · quarterly
---

# Sources — ki-env-binding-chezmoi

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
    - [2.1.1 In-house](#211-in-house)
    - [2.1.2 External specifications](#212-external-specifications)
- [3. Last review](#3-last-review)

## 1. Introduction

The sources behind the [chezmoi MCP rendering standard](standard-chezmoi-mcp-rendering.md), the [chezmoi hook registration standard](standard-chezmoi-hook-registration.md) and the [rubric](rubric.md). Provenance only: the record of _what changed_ lives in git (the REFRESH commit), not a changelog here. This skill tracks no external spec on a clock — it is re-anchored when the chezmoi render contract changes (the `mcp-servers-json` template shape, the `.chezmoidata` wiring, or the `chezmoi apply` behaviour), or when either composed sibling's contract moves.

[Back to contents](#contents)

## 2. Outside sources

The standard composes two house skills over the canonical source, and follows chezmoi's own documentation.

### 2.1 Authoritative

The house's own skills and source, then chezmoi's documentation.

#### 2.1.1 In-house

| Source | Governs | Last reviewed |
| --- | --- | --- |
| BIND — `ki-env-binding` skill | The renderer-neutral surface audit this skill composes (surfaces agree with the single source) | 2026-11-23 |
| CHEZ — `ki-repo-dotfiles-chezmoi` skill | The generic chezmoi source-repo standard this skill composes (repo is conventional) | 2026-11-23 |
| HOOKS — the backpack's `hooks/README.md` payload table and `ki-repo-backpack`'s three-part hook model | The payloads this skill registers, each hook's runtime, event, matcher and timeout | 2026-11-23 |
| PARTIALS — the chezmoi source's `.chezmoitemplates/*-hook-registrations-json`, their `.chezmoidata` hook entries and the Claude Code and Codex settings targets | The registration shape the hook standard describes | 2026-11-23 |
| SRC — `~/.config/ki/mcp-servers.yaml` (canonical) + either `.chezmoidata/*mcp*` (data-merge pattern) or a plain managed source file applied verbatim to the canonical path (managed-source pattern) | The single source and the chezmoi data the render path reads | 2026-11-23 |
| [ADR-KI-HARNESS-SKILLS-004](../../../../docs/decisions/ADR-KI-HARNESS-SKILLS-004-skills-must-be-valid-standalone.md) | Skills valid standalone: the render path is its own composition skill, not a fork or a `--backend` flag, behind the [Chezmoi MCP rendering standard](standard-chezmoi-mcp-rendering.md) | 2026-11-24 |

[Back to contents](#contents)

#### 2.1.2 External specifications

| Source | Governs | Last reviewed |
| --- | --- | --- |
| CHEZMOI — [Chezmoi templating](https://www.chezmoi.io/user-guide/templating/) | Template/data/partial semantics | 2026-11-23 |
| APPLY — [Chezmoi usage](https://www.chezmoi.io/user-guide/frequently-asked-questions/usage/) | Explicit preview and apply distinction | 2026-11-23 |

[Back to contents](#contents)

## 3. Last review

The latest review, on 23 November 2026, reviewed every listed source. chezmoi has moved from 2.72 to 2.74.2, with 2.74.1 installed, and none of its changes touches `.chezmoitemplates` partials, `.chezmoidata` merging or the `diff`-then-`apply` split, so the templating and usage pages still say what the standards rest on. The chezmoi source uses the data-merge pattern, with `KI_MCP_SOURCE` set to the `.chezmoidata` file as the rendering standard's explicit binding allows, and its client tokens and hook partials still match `ki-env-binding`'s four tokens and the backpack's payload table.

**Watching:**

- **Non-backpack hooks** — the presence and Headroom hooks registered through `*-hook-registrations-json` partials sit outside the hook standard's backpack-payload scope and its rule 5; watch until it is settled whether the standard covers them.
- **Render-template shape** — the `mcp-servers-json` partial and the target `.tmpl` files it feeds. Re-anchor when chezmoi's templating contract or the per-surface `mcpServers` config shape changes.
- **Source location** — the canonical XDG home, a `.chezmoidata/*mcp*` render input, or a managed-source-file pattern, the two repository shapes the standard recognises. Re-anchor if the resolution order in `ki-env-binding` moves, or if a third source shape emerges.
- **Composed siblings** — if `ki-env-binding`'s recognised surfaces/`clients` tokens or `ki-repo-dotfiles-chezmoi`'s repo-shape criteria change, confirm this skill's own criteria still sit cleanly on top rather than duplicating a sibling criterion.

[Back to contents](#contents)
