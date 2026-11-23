---
ki-document-type: sources@2026-11-17T00:28:37Z
ki-revised: 2026-11-22T22:58:47Z
ki-refresh: canonical · on-change
---

# Sources - where the structure model comes from

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
    - [2.1.1 Canonical (the structure definition)](#211-canonical-the-structure-definition)
    - [2.1.2 The folded standards](#212-the-folded-standards)
  - [2.2 Advisory](#22-advisory)
    - [2.2.1 Living (how the model is actually used)](#221-living-how-the-model-is-actually-used)
- [3. Decisions](#3-decisions)
- [4. Last review](#4-last-review)

## 1. Introduction

The sources behind the [knowledge-base standard][kb-standard], the [frontmatter standard][frontmatter], the [source mirror standard](standard-source-mirrors.md), the [derived search standard](standard-search.md), the [acquired-packet triage standard](standard-acquired-triage.md), the [Streams structure standard](standard-streams-structure.md), the [KB change-management routing standard](standard-enactment-process.md), the [Activity standard](standard-activities.md), the [Live Artifact standard](standard-live-artifacts.md), the [principal standard](standard-principal.md) and the [rubric](rubric.md). The last five came from `ki-repo-kb-streams`, `ki-repo-kb-activities`, `ki-repo-kb-live-artifacts` and `ki-repo-kb-principal` under KB-FOLD b, with their sources below.

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

## 3. Decisions

The decisions recorded by id that the standards rest on.

| Id | Decision | Date | Backs | Status |
| --- | --- | --- | --- | --- |
| KB-FOLD b | `ki-repo-kb-activities`, `ki-repo-kb-live-artifacts` and `ki-repo-kb-principal` fold into `ki-repo-kb` as standards behind a router `SKILL.md`, the principal standard applying whenever the base is its territory's Capital; `ki-repo-kb-streams` is split, its layout to `ki-repo-kb`, its record checks to `ki-work-roadmap` and its Project close-out to `ki-work`, the `kb-streams` adapter pointing at `ki-work-roadmap`; one Enactment gate stays in `ki-repo-kb`, pointing to `ki-work`. Kris, 22 November 2026, about 20:49 GMT, the Repository guild's sitting in the Cairn summit's change 10, card: "Fold three, split streams". | 2026-11-22 | [knowledge-base standard, 4.13](standard-knowledge-base.md#413-the-standards-behind-the-router) | In force |
| KB-ACQUIRED-README a | The `+/_ACQUIRED/README.md` template "is reworded to name its principal standard, applying when the base is its Capital, and the nine Capitals' copies are updated in the same pass so PRINCIPAL-5 stays green"; settled by Kitteth within remit, 22 November 2026, about 23:40 GMT, on Loreward's KB-FOLD report, recorded in the Cairn summit's change 10. | 2026-11-22 | [principal 4.2](standard-principal.md#42-acquired-packet-scaffold), [acquired triage](standard-acquired-triage.md) | In force |
| KB-NOTE-MODES b | The six note modes, SAVE, UPDATE, QUERY, EXTRACT, DIGEST and IMPROVE, stay as modes, though unused in 60 days; the router `SKILL.md` meets its budget by other means. Kris, 22 November 2026, about 20:59 GMT, the same sitting, card: "Keep the six modes". | 2026-11-22 | [SKILL.md](../SKILL.md) | In force |
| ACTIVITIES-HARNESS-KEY | The key that names the backpack root is `backpack`; `harness` is read as its old name while `backpack` is absent, and ACT-S-3 warns it should be renamed. Taken by the Cairn summit's guardian, 19 November 2026, under GUARDIAN-LANDS a, from the summit's change 12, option a. | 2026-11-19 | [Activity standard, 4.1](standard-activities.md#41-collection) | In force |
| KB-BINDINGS a | A base's narrative bindings live in its root `AGENTS.md`, which a `CLAUDE.md` imports | 2026-11-16 | [knowledge-base standard][kb-standard] | In force |
| COVERAGE-SIGNAL a | NOTE-1c no longer tolerates work-package files under `+/_WORK/<id>/` | 2026-11-17 | [frontmatter standard][frontmatter] | In force |
| COMMIT-VS-CI a | The commit gate is check-only and the `ki-repo-kb` audit runs in CI | 2026-10-26 | [knowledge-base standard][kb-standard] | In force |
| KB-LINKING | Settled: the "Linking within a base" text stays in the knowledge-base standard's 4.3 and the `SKILL.md` section becomes a one-line pointer, since a measured comparison found those two paragraphs the only verbatim duplication. Kitteth, 22 November 2026, about 20:20 GMT, within remit at the Repository guild's sitting, high confidence; the Cairn summit's change 10, step 6.3. | 2026-11-22 | [knowledge-base standard][kb-standard] | In force |
| [ADR-KI-HARNESS-SKILLS-017](../../../../docs/decisions/ADR-KI-HARNESS-SKILLS-017-commit-gate-existence-and-content-are-owned-separately.md) | Commit-gate existence and content are owned separately | 2026-10-22 | [knowledge-base standard][kb-standard] | In force |
| [ADR-KI-HARNESS-TOOLCHAIN-006](../../../../docs/decisions/ADR-KI-HARNESS-TOOLCHAIN-006-qmd-derived-kb-search-index.md) | qmd derived KB search index | 2026-10-05 | [derived search standard](standard-search.md) | In force |
| [DDR-KI-HARNESS-001](../../../../docs/decisions/DDR-KI-HARNESS-001-mirrors-and-source-provenance-are-separate-relationships.md) | Mirrors and source provenance are separate relationships | 2026-10-05 | [source mirror standard](standard-source-mirrors.md) | In force |

[Back to contents](#contents)

## 4. Last review

On 23 November 2026 Loreward applied KB-ACQUIRED-README a, recorded under [Decisions](#3-decisions), in the Cairn summit's change 10, step 6.3: the acquired-packet template's last paragraph, and the acquired-triage standard's line on the scaffold, name this skill's principal standard, which applies while the base is its territory's Capital, in place of the retired `ki-repo-kb-principal` overlay. The nine Capitals' copies were updated in the same pass. No rule changed and no outside source was refreshed.

On 22 November 2026 Loreward applied KB-FOLD b and KB-NOTE-MODES b, recorded under [Decisions](#3-decisions). The Streams structure, Enactment, Activity, Live Artifact and principal standards moved here with their sources and rubric families, which keep their codes: STREAM, ENACT (formerly the streams GATE family, renamed as it clashed with this skill's commit-gate GATE), ACT, LA, LA-F and PRINCIPAL. The streams CONFIG family's `process_note` binding became CONFIG-6 under `[skills.ki-repo-kb]`, beside `activities_dir`, `backpack`, `artifacts_dir` and `sync_threshold_hours`. PRINCIPAL-2 retired in favour of ENACT-1, and the principal checks now apply when `[skills.ki-repo].capital` names the base itself. ACT-S-3 now warns only on the old `harness` key, leaving unknown keys to CONFIG-1. The Activity and Live Artifact NEW modes folded into SAVE; the six note modes stayed. The streams record checks STREAM-6, 7, 8, 12, 13 and 14 moved to `ki-work-roadmap`'s ITEM-1, ITEM-2, ROAD-6 and ROAD-7, and STREAM-10 and 11 to `ki-work`'s PROJ-1 and PROJ-2. No outside source was refreshed.

**Acquired scaffold rollout.** The reusable acquired-area delivery was accepted on 21 October 2026; that acceptance established the scaffold and its audit and conform contract, not that real receivers applied it. The delivery report's receiver snapshot named `personal-principal`, `va-principal`, `er-principal`, `si-principal`, `tmx-principal`, `ki-principal`, `legal-principal` and `hnr-principal`: historical delivery evidence, not a live rollout ledger. State of play owns the receiver-owned rollout under GOV209-ROLLOUT. PRINCIPAL-5 reports a missing, changed or unsafe scaffold whenever a Capital is audited, and its CONFORM proposes only the exact README. A passing fixture test is not evidence of a real receiver's conformance, and the README is not a dispatch precondition.

On 18 November 2026 the skill's words were brought to HARNESS-NAME, from the Cairn summit's change 12, step 1, for the Repository guild: REFRESH names the backpack, and the knowledge base and source mirror standards speak of a backpack audit. No criterion changed and no outside source refreshed.

On 18 November 2026 the Repository guild's review, from the Cairn summit's change 10, brought the files into the formats: the five standards, formerly `standards-knowledge-base.md`, `standards-frontmatter.md`, `standards-source-mirrors.md`, `standards-search.md` and `standards-acquired-triage.md`, were renamed `standard-<topic>.md` and reshaped to the standard format with their rules unchanged, and this file to the sources format, its decisions gathered into [Decisions](#3-decisions) and its open watch-items under **Watching**. The modes, `SKILL.md` and the rubric's source names follow. No rule changed and no outside source was refreshed.

On 16 November 2026 an in-house review applied KB-BINDINGS a, which Kris took that day at about 16:22 GMT, relayed by the Cairn summit's guardian: a base's narrative bindings live in its root `AGENTS.md`, which every agent host loads, and no longer in an auto-loaded `CLAUDE.md`, which imports it and keeps only what is Claude's own. It follows `ki-repo`'s repository standard and the layers of the summit's [change 15](https://github.com/krisb/ki-cairn-store/blob/658d48f/work/cairn/cairn.summit/15-where-guidance-lives.change.md#42-the-layers). The [standard's onboarding][kb-standard], the skill's project bindings and Step 1, and the SAVE and REFRESH procedures say so; MEM-2 already accepted either file. The file keeps its older shape until its guild's review.

On 17 November 2026 an in-house review applied COVERAGE-SIGNAL a, taken by the Cairn summit's guardian, 17 November 2026, about 04:30 GMT, under Kris's direction to take high-confidence calls, from the summit's [change 10](https://github.com/krisb/ki-cairn-store/blob/57d4c69/work/cairn/cairn.summit/10-skills-review.change.md#71-questions): NOTE-1c no longer tolerates the earlier work-package files under `+/_WORK/<id>/`, since a check at about 04:15 GMT found no tracked checkout holding them. A package file left there now fails NOTE-1c as out of place, naming the Cairn store's `work/<territory>/<id>/`; the [frontmatter standard][frontmatter] says so, alongside `ki-repo`'s matching COV-1 warning.

REFRESH last run **2026-08-12** (prior: 2026-07-04). Internal-model re-anchor — no external spec; re-verified the canonical structure and current Arcadia configuration/Streams layout through the local checkout. kit-legal remains pending its next direct refresh.

Per-source outcome:

- **Knowledge Islands knowledge-base standard** — confirmed for the five-zone model, working areas, Pillar unit, wikilink convention, and declared-not-forked rule. The former Focus/proposal metadata rows were retired: current Streams structure is flat adapter-owned Roadmap and Housekeeping areas. Universal metadata reconciliation remains open.
- **`ki-principal`** — confirmed for current configuration and layout: `repo_type = "kb"`, `ki-work.adapter = "kb-streams"`, and `Streams/Roadmap/` plus `Streams/Housekeeping/` are present. This local source check does not claim a full remote or hosted audit outcome.
- **`kit-legal`** — confirmed. Full canonical structure on canonical zone names; no kb config table (no aliases); config now on the `[ki-*]` prefix. Hosted audit: 0 fail · 3 warn (Charter/Conformance absent, one non-snake_case key). Zone-alias binding still has no live exemplar.
- **Per-base `.ki.toml` declarations** — confirmed. No recurring base-specific declaration has emerged to promote into the standard this cycle.

**Watching:**

1. **ki-\* rename split across bases.** kit-legal has migrated its `.ki.toml` tables to the `[ki-*]` prefix; ki-principal still declares `[knowledgeislands-*]`. Shared `.ki.toml` contract (owned by `ki-repo`; tracked by the roadmap rename plan) — not a ki-repo-kb model change. Re-check both bases land on `[skills.ki-repo-kb]` once the rename completes.
2. **No live `[skills.ki-repo-kb.zones]` exemplar.** Both tracked bases have dropped their aliases. The alias binding is kept as a reviewable override with no live exemplar — watch for a new base mid-migration to re-validate it against reality.
3. **Charter/Conformance adoption.** The model expects `Admin/Governance/Charter.md` + `Conformance.md`; ki-principal lacks Conformance, kit-legal lacks both (all WARN). Watch whether exemplars adopt them or whether the expectation should soften.
4. **Activity metadata.** Component fields in the living Activity collection do not decide the unresolved universal KB `type` contract, and ki-principal's Activity index defers its roster to the Charter; neither is end-to-end evidence for the index contract yet.
5. **Live Artifact pairs.** The reference base has no real pair yet, so the LA-S-2, 3 and 4 sync checks and the 24-hour `sync_threshold_hours` default are unvalidated end to end.
6. **Acquired scaffold.** Each receiver's own conformance, recorded with its own work, and the accepted delivery's hosted availability, pending an online check.

[Back to contents](#contents)

[^ap]: The first real Knowledge Islands base this skill tracks. Sampled through its own `kb-fs` MCP server and its `CLAUDE.md` / memory index. It now carries the full canonical structure — `+`, `-`, `Admin/` (with `Admin/Admin.md` and `Admin/MEMORY.md`), `Calendar/`, `Pillars/`, `Resources/`, `Streams/`, each canonical zone with its same-name index — on the canonical zone names, declaring no zone aliases (though its `.ki.toml` still uses the pre-rename `[knowledgeislands-kb]` table — the `ki-*` rename is pending for this base). Its governance Pillar, `Pillars/Knowledge Capital/`, now sits within the canonical `Pillars/` zone, so the earlier mid-migration caveat no longer applies (confirmed 2026-06-21).

[^kl]: A second real base (`github.com/krisb/legal-principal`), sampled via its `kb-fs` MCP (`kit-legal-mcp-kb-fs`). It carries the fuller structure — `+`, `-`, `Admin/` (with `Admin/MEMORY.md`), `Calendar/`, `Pillars/` (with `Pillars/Pillars.md`), `Resources/`, `Streams/` — all on the canonical zone names. It earlier held its Pillars zone under a local folder name, declared as a `[skills.ki-repo-kb.zones]` alias; that rename has since completed and the alias has been dropped (its `.ki.toml` now carries no `[skills.ki-repo-kb.zones]` table, re-confirmed via its live MCP layout 2026-06-21 — `Pillars/Pillars.md` sits at the canonical folder). So it now documents the alias lifecycle's resolved end-state — transitional alias → dropped after the rename — rather than a live alias, and the zone-alias binding currently has no live exemplar among the tracked bases.

[kb-standard]: standard-knowledge-base.md
[frontmatter]: standard-frontmatter.md
