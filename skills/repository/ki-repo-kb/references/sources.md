---
ki-document-type: sources@2026-11-24T04:26:02Z
ki-revised: 2026-11-24T04:26:02Z
ki-refresh: canonical · on-change
---

# Sources - where the structure model comes from

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
    - [2.1.1 Canonical (the structure definition)](#211-canonical-the-structure-definition)
    - [2.1.2 The folded standards](#212-the-folded-standards)
    - [2.1.3 Decision records](#213-decision-records)
  - [2.2 Advisory](#22-advisory)
    - [2.2.1 Living (how the model is actually used)](#221-living-how-the-model-is-actually-used)
- [3. Last review](#3-last-review)

## 1. Introduction

The sources behind the [knowledge-base standard][kb-standard], the [frontmatter standard][frontmatter], the [source mirror standard](standard-source-mirrors.md), the [derived search standard](standard-search.md), the [acquired-packet triage standard](standard-acquired-triage.md), the [Streams structure standard](standard-streams-structure.md), the [KB change-management routing standard](standard-enactment-process.md), the [Activity standard](standard-activities.md), the [Live Artifact standard](standard-live-artifacts.md), the [principal standard](standard-principal.md) and the [rubric](rubric.md). The last five came from `ki-repo-kb-streams`, `ki-repo-kb-activities`, `ki-repo-kb-live-artifacts` and `ki-repo-kb-principal`, with their sources below.

The canonical and living sources behind this skill's zone model, note metadata, routing test, and project-bindings table. Mode REFRESH reads this file, re-anchors the model against each source, then **bumps the `last reviewed` dates** (what changed is recorded in the commit, not a changelog — history lives in git). This is the skill's memory of where its structure comes from - keep it current.

Unlike `ki-repo-mcp` and `ki-skills`, this skill follows **no moving external spec**: its structure is canonical and in-house. So REFRESH re-anchors against the canonical definition and against how the bases actually use it, not against a published standard.

[Back to contents](#contents)

## 2. Outside sources

The skill follows no outside specification: its authoritative sources are its own canonical standards, and the bases using it inform judgement.

### 2.1 Authoritative

The canonical in-house structure definition.

#### 2.1.1 Canonical (the structure definition)

| Source | Governs | Last reviewed |
| --- | --- | --- |
| [Knowledge Islands knowledge-base standard][kb-standard] | † The zone model, conventions, routing, and per-base configuration | 2026-08-12 |
| [Knowledge Islands frontmatter standard][frontmatter] | Universal note metadata, note-type taxonomy, location constraints, and dependent fields | 2026-08-16 |

† The authoritative structure: five zones (Calendar / Pillars / Resources / Streams / Admin) flanked by the inbound `+` and outbound `-` working areas. This in-house Reference is the canonical definition — the skill follows no external spec.

#### 2.1.2 The folded standards

| Source | Governs | Last reviewed |
| --- | --- | --- |
| [Streams structure standard](standard-streams-structure.md) | The `Streams/` container, recurring Activity off-ramp, owner-approved migration and retention | On change |
| [KB change-management routing standard](standard-enactment-process.md) | The one always-loaded canonical-change gate, pointing to `ki-work` | On change |
| ki-principal `Admin/Operations/Activities/` | Live collection sampled for current Activity fields and placement | 2026-08-12 |
| `ki-repo-backpack` SKILL.md | The backpack layout; the `skills/<name>/SKILL.md` path an Activity's `skill` resolves against | 2026-08-12 |
| ki-principal `Admin/Operations/Live Artifacts/` | Live Artifact placement evidence; no source and render pair yet | 2026-08-12 |
| `ki-authoring` SKILL.md | Markdown style for Live Artifact sources | 2026-08-12 |
| [Principal standard](standard-principal.md) | A Capital's governance surface, scaffold ownership and receiver authority | On change |
| [Acquired-packet intake contract](standard-principal.md#42-acquired-packet-scaffold) | The durable scaffold and receiver conformance boundary; the [21 October 2026 accepted delivery](https://github.com/knowledgeislands/ki-agent-backpack/commit/52779419) remains historical evidence | On change |
| [Principal audit and conform fixtures](../scripts/rubric/contexts/principal.test.ts) | Exact-scaffold, unsafe-path, packet-preservation and not-a-Capital evidence | On change |

[Back to contents](#contents)

#### 2.1.3 Decision records

| Source | Governs | Last reviewed |
| --- | --- | --- |
| [ADR-KI-HARNESS-SKILLS-017](../../../../docs/decisions/ADR-KI-HARNESS-SKILLS-017-commit-gate-existence-and-content-are-owned-separately.md) | Commit-gate existence and content owned separately, in the [knowledge-base standard][kb-standard] | 2026-11-24 |
| [ADR-KI-HARNESS-TOOLCHAIN-006](../../../../docs/decisions/ADR-KI-HARNESS-TOOLCHAIN-006-qmd-derived-kb-search-index.md) | The qmd derived KB search index, in the [derived search standard](standard-search.md) | 2026-11-24 |
| [DDR-KI-HARNESS-001](../../../../docs/decisions/DDR-KI-HARNESS-001-mirrors-and-source-provenance-are-separate-relationships.md) | Mirrors and source provenance as separate relationships, in the [source mirror standard](standard-source-mirrors.md) | 2026-11-24 |

### 2.2 Advisory

How the bases actually use the model.

#### 2.2.1 Living (how the model is actually used)

These have no URL; they are sampled at REFRESH time through each base's own `kb-fs` MCP and `CLAUDE.md`. The two named bases are the current exemplars and read in tandem. Both have now reached the resolved end-state on the canonical zone names: `ki-principal` has completed conforming _up_ (its `Admin/` and `-/` are in place, each canonical zone carries its same-name index, and its `.ki.toml` `[skills.ki-repo-kb]` table is empty — no aliases), and `kit-legal` carries the same fuller set, its earlier Pillars-zone rename having completed and its alias dropped. So neither tracked base currently holds a live `[skills.ki-repo-kb.zones]` alias; the model keeps the alias as a canonical, reviewable override (and documents its lifecycle, transitional → dropped) regardless of having no live exemplar.

| Source | Informs | Last reviewed |
| --- | --- | --- |
| `ki-principal` base[^ap] | Whether the zone model, routing test, and bindings still match a real layout and practice | 2026-08-12 |
| `kit-legal` base[^kl] | The same, from a base further along the structure, now on the canonical zone names (alias dropped) | 2026-07-04 |
| Other bases actively using this skill | The same, as further bases adopt the skill | 2026-07-04 |
| Per-base `.ki.toml` declarations | Which base-specific declarations recur across bases※ | 2026-08-12 |
| Receiver bases' local `Streams/` zones and always-loaded instructions | Receiver-owned classification and migration decisions, never the target layout | On change |

※ Which base-specific declarations recur across bases and should be promoted into this standard skill.

[Back to contents](#contents)

## 3. Last review

The skill follows no outside specification. The latest review, on 23 November 2026, was in-house: it changed no rule and refreshed no outside source. The canonical structure and the bases using it were last re-anchored on 12 August 2026, against the knowledge-base standard and `ki-principal`'s configuration and `Streams/` layout through its local checkout.

**Watching:**

1. **The `ki-*` rename is split across bases.** kit-legal moved its `.ki.toml` tables to the `[ki-*]` prefix while ki-principal still declared `[knowledgeislands-*]`. The shared `.ki.toml` contract is `ki-repo`'s, not a change to this model; re-check that both bases land on `[skills.ki-repo-kb]` once the rename completes.
2. **No live `[skills.ki-repo-kb.zones]` exemplar.** Both tracked bases dropped their aliases. The alias binding is kept as a reviewable override with no live exemplar; re-validate it against reality when a new base is mid-migration.
3. **Charter and Conformance adoption.** The model expects `Admin/Governance/Charter.md` and `Conformance.md`; ki-principal lacks Conformance and kit-legal lacks both (all warnings). Watch whether the exemplars adopt them or the expectation should soften.
4. **Activity metadata.** The component fields in the living Activity collection do not decide the unresolved universal KB `type` contract, and ki-principal's Activity index defers its roster to the Charter; neither is end-to-end evidence for an index contract yet.
5. **Live Artifact pairs.** The reference base has no real pair yet, so the Live Artifact sync checks and the 24-hour `sync_threshold_hours` default are unvalidated end to end.
6. **Acquired scaffold rollout.** The reusable acquired-area delivery accepted on 21 October 2026 established the scaffold and its audit and conform contract, not that real receivers applied it; its receiver list is historical delivery evidence, not a live rollout ledger. Each receiver's own conformance, recorded in its own work, and the accepted delivery's hosted availability await an online check.

[Back to contents](#contents)

[^ap]: The first real Knowledge Islands base this skill tracks. Sampled through its own `kb-fs` MCP server and its `CLAUDE.md` / memory index. It now carries the full canonical structure — `+`, `-`, `Admin/` (with `Admin/Admin.md` and `Admin/MEMORY.md`), `Calendar/`, `Pillars/`, `Resources/`, `Streams/`, each canonical zone with its same-name index — on the canonical zone names, declaring no zone aliases (though its `.ki.toml` still uses the pre-rename `[knowledgeislands-kb]` table — the `ki-*` rename is pending for this base). Its governance Pillar, `Pillars/Knowledge Capital/`, now sits within the canonical `Pillars/` zone, so the earlier mid-migration caveat no longer applies (confirmed 2026-06-21).

[^kl]: A second real base (`github.com/krisb/legal-principal`), sampled via its `kb-fs` MCP (`kit-legal-mcp-kb-fs`). It carries the fuller structure — `+`, `-`, `Admin/` (with `Admin/MEMORY.md`), `Calendar/`, `Pillars/` (with `Pillars/Pillars.md`), `Resources/`, `Streams/` — all on the canonical zone names. It earlier held its Pillars zone under a local folder name, declared as a `[skills.ki-repo-kb.zones]` alias; that rename has since completed and the alias has been dropped (its `.ki.toml` now carries no `[skills.ki-repo-kb.zones]` table, re-confirmed via its live MCP layout 2026-06-21 — `Pillars/Pillars.md` sits at the canonical folder). So it now documents the alias lifecycle's resolved end-state — transitional alias → dropped after the rename — rather than a live alias, and the zone-alias binding currently has no live exemplar among the tracked bases.

[kb-standard]: standard-knowledge-base.md
[frontmatter]: standard-frontmatter.md
