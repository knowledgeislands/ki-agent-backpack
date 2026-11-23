---
ki-document-type: sources@2026-11-17T00:28:37Z
ki-revised: 2026-11-23T02:34:50Z
ki-refresh: external-spec · quarterly
---

# Sources — ki-env-binding-chezmoi

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
    - [2.1.1 In-house](#211-in-house)
    - [2.1.2 External specifications](#212-external-specifications)
- [3. Decisions](#3-decisions)
- [4. Last review](#4-last-review)

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

[Back to contents](#contents)

#### 2.1.2 External specifications

| Source | Governs | Last reviewed |
| --- | --- | --- |
| CHEZMOI — [Chezmoi templating](https://www.chezmoi.io/user-guide/templating/) | Template/data/partial semantics | 2026-11-23 |
| APPLY — [Chezmoi usage](https://www.chezmoi.io/user-guide/frequently-asked-questions/usage/) | Explicit preview and apply distinction | 2026-11-23 |

[Back to contents](#contents)

## 3. Decisions

| Id | Decision | Date | Backs | Status |
| --- | --- | --- | --- | --- |
| ENV-FIXES a | All ten Environment skills are kept, with the fixes: `ki-env-housekeeping-chatgpt` repointed from the old Inbox (`krisb/inbox`) to Harbour (`krisb/ki-cairn-harbour`); `ki-env-housekeeping-claude`'s memory text trimmed to the disabled case; `ki-env-binding-chatgpt` refreshed, due since 12 November; `ki-env-binding-chezmoi`'s SKILL.md, which stated its composition three times, trimmed to once; the two tokenomics adapters' sources refreshed with the MODEL-TIERS move; no regrouping by host. Kris, 22 November 2026, about 21:45 GMT, the Environment guild's sitting, card: "Keep all ten, with fixes"; the Cairn summit's change 10, step 6.3. | 2026-11-22 | [SKILL.md](../SKILL.md#composition) | In force |
| HOOK-HOME a | The hook-registration rule, chezmoi registering a selected backpack hook payload into Claude Code's and Codex's settings, lives in `ki-env-binding-chezmoi`, whose scope widens beyond MCP to KI bindings, MCP servers and hooks; `ki-repo-backpack` keeps the payloads; `ki-repo-dotfiles-chezmoi` 4.10 and `ki-git`'s five mentions point here. Kris, 22 November 2026, about 21:18 GMT, the Environment guild's sitting, card: "ki-env-binding-chezmoi"; the Cairn summit's change 10, step 6.3. | 2026-11-22 | [Hook registration standard](standard-chezmoi-hook-registration.md#1-introduction) | In force |
| ADR-KI-HARNESS-SKILLS-004 | Skills must be valid standalone; its composition-for-backends corollary makes the render path its own composition skill, not a fork or a `--backend` flag | 2026-06-23 | [Chezmoi MCP rendering standard](standard-chezmoi-mcp-rendering.md#1-introduction) | Current |

[Back to contents](#contents)

## 4. Last review

On 23 November 2026 the overnight sources refresh reviewed every listed source. chezmoi has moved from 2.72 to 2.74.2 (2.74.1 installed): 2.74.0 removes the deprecated `remove` command and adds a skip-conflicts choice to `apply`, and 2.73.2 stops reading `.chezmoidata` inside `external_` directories; none touches `.chezmoitemplates` partials, `.chezmoidata` merging or the `diff`-then-`apply` split, and the templating and usage pages still say what the standards rest on. The chezmoi source uses the data-merge pattern, with no rendered `~/.config/ki/mcp-servers.yaml`; its shell profile sets `KI_MCP_SOURCE` to the `.chezmoidata` file, the explicit binding 4.3 of the rendering standard allows. The partial's client tokens match `ki-env-binding`'s four, and the hook partials still match the payload table, but the source also registers two hooks the backpack does not ship, the Cairn presence hook and Headroom's, through the same partials; a proposal asks the hook standard to say where they stand. No rule changed.

On 22 November 2026 the Environment guild's landing, from the Cairn summit's change 10, step 6.3, applied ENV-FIXES a, recorded under [Decisions](#3-decisions): SKILL.md states its composition once, under Composition, where the introduction, a layers list and a note had each stated it. No criterion changed and no outside source refreshed.

On 22 November 2026 the Environment guild's landing, from the Cairn summit's change 10, step 6.3, made this skill the one home of chezmoi's hook registration under HOOK-HOME a. The new [hook registration standard](standard-chezmoi-hook-registration.md) was written from the chezmoi source's registration partials and the backpack's payload table, and the description widened to hooks. No criterion changed.

On 18 November 2026 the skill's words were brought to HARNESS-NAME, from the Cairn summit's change 12, step 1, for the Environment guild: REFRESH names the backpack as where to run it. No criterion changed and no outside source refreshed.

On 18 November 2026 the Environment guild's review, from the Cairn summit's change 10, brought the files into the formats: [the chezmoi MCP rendering standard](standard-chezmoi-mcp-rendering.md), formerly `standards-chezmoi-mcp-rendering.md`, was renamed and reshaped to the standard format with its rules unchanged, and this file to the sources format. The rubric's source names follow. No rule changed and no outside source was refreshed.

**REFRESH, 2026-10-19** — Quarterly date-bump. Re-checked ki-env-binding (canonical · on-change, contract stable since 2026-08-12), ki-repo-dotfiles-chezmoi (external-spec · quarterly), and the chezmoi docs (chezmoi 2.71 and 2.72 released; no changes to `.chezmoitemplates` partial semantics, `.chezmoidata` wiring, or `chezmoi apply` behavior). No render-contract drift found.

**REFRESH, 2026-07-14** — BINDCHEZ-3 recognises two source-data shapes: `.chezmoidata/*mcp*` (data-merge), or a plain, non-templated, chezmoi-managed source file applied verbatim to the canonical XDG path and read via chezmoi's `include` from the source tree (managed source). Standard, rubric, and session updated together (BINDCHEZ-7). Verified: BINDCHEZ-3 passes with the managed-source pattern.

Initial authoring, **2026-07-13** — drafted alongside the renderer-neutral split of `ki-env-binding` and the `ki-repo-dotfiles-chezmoi` standard.

**Watching:**

- **Non-backpack hooks** — the presence and Headroom hooks registered through `*-hook-registrations-json` partials sit outside the hook standard's backpack-payload scope and its rule 5; watch until a proposal settles whether the standard covers them.
- **Render-template shape** — the `mcp-servers-json` partial and the target `.tmpl` files it feeds. Re-anchor when chezmoi's templating contract or the per-surface `mcpServers` config shape changes.
- **Source location** — the canonical XDG home, a `.chezmoidata/*mcp*` render input, or a managed-source-file pattern (BINDCHEZ-3 recognises both repository shapes). Re-anchor if the resolution order in `ki-env-binding` moves, or if a third source shape emerges.
- **Composed siblings** — if `ki-env-binding`'s recognised surfaces/`clients` tokens or `ki-repo-dotfiles-chezmoi`'s repo-shape criteria change, confirm the BINDCHEZ delta still sits cleanly on top rather than duplicating a sibling criterion.

[Back to contents](#contents)
