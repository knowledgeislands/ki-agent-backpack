# Sources - where the structure model comes from

**Refresh:** canonical · on-change

The canonical and living sources behind this skill's zone model, note metadata, routing test, and project-bindings table. Mode REFRESH reads this file, re-anchors the model against each source, then **bumps the `last reviewed` dates** (what changed is recorded in the commit, not a changelog — history lives in git). This is the skill's memory of where its structure comes from - keep it current.

Unlike `ki-repo-mcp` and `ki-skills`, this skill follows **no moving external spec**: its structure is canonical and in-house. So REFRESH re-anchors against the canonical definition and against how the bases actually use it, not against a published standard.

## Canonical (the structure definition)

| Source | Governs | Last reviewed |
| --- | --- | --- |
| [Knowledge Islands knowledge-base standard][kb-standard] | † The zone model, conventions, routing, and per-base configuration | 2026-08-12 |
| [Knowledge Islands frontmatter standard][frontmatter] | Universal note metadata, note-type taxonomy, location constraints, and dependent fields | 2026-08-16 |

† The authoritative structure: five zones (Calendar / Pillars / Resources / Streams / Admin) flanked by the inbound `+` and outbound `-` working areas. This in-house Reference is the canonical definition — the skill follows no external spec.

## Living (how the model is actually used)

These have no URL; they are sampled at REFRESH time through each base's own `kb-fs` MCP and `CLAUDE.md`. The two named bases are the current exemplars and read in tandem. Both have now reached the resolved end-state on the canonical zone names: `ki-principal` has completed conforming _up_ (its `Admin/` and `-/` are in place, each canonical zone carries its same-name index, and its `.ki.toml` `[skills.ki-repo-kb]` table is empty — no aliases), and `kit-legal` carries the same fuller set, its earlier Pillars-zone rename having completed and its alias dropped. So neither tracked base currently holds a live `[skills.ki-repo-kb.zones]` alias; the model keeps the alias as a canonical, reviewable override (and documents its lifecycle, transitional → dropped) regardless of having no live exemplar.

| Source | Governs | Last reviewed |
| --- | --- | --- |
| `ki-principal` base[^ap] | Whether the zone model, routing test, and bindings still match a real layout and practice | 2026-08-12 |
| `kit-legal` base[^kl] | The same, from a base further along the structure, now on the canonical zone names (alias dropped) | 2026-07-04 |
| Other bases actively using this skill | The same, as further bases adopt the skill | 2026-07-04 |
| Per-base `.ki.toml` declarations | Which base-specific declarations recur across bases※ | 2026-08-12 |

※ Which base-specific declarations recur across bases and should be promoted into this standard skill.

## Last review

On 16 November 2026 an in-house review applied KB-BINDINGS a, which Kris took that day at about 16:22 GMT, relayed by the Cairn summit's guardian: a base's narrative bindings live in its root `AGENTS.md`, which every agent host loads, and no longer in an auto-loaded `CLAUDE.md`, which imports it and keeps only what is Claude's own. It follows `ki-repo`'s repository standard and the layers of the summit's [change 15](https://github.com/krisb/ki-cairn-store/blob/658d48f/work/cairn/cairn.summit/15-where-guidance-lives.change.md#42-the-layers). The [standard's onboarding][kb-standard], the skill's project bindings and Step 1, and the SAVE and REFRESH procedures say so; MEM-2 already accepted either file. The file keeps its older shape until its guild's review.

On 17 November 2026 an in-house review applied COVERAGE-SIGNAL a, taken by the Cairn summit's guardian, 17 November 2026, about 04:30 GMT, under Kris's direction to take high-confidence calls, from the summit's [change 10](https://github.com/krisb/ki-cairn-store/blob/57d4c69/work/cairn/cairn.summit/10-skills-review.change.md#71-questions): NOTE-1c no longer tolerates the earlier work-package files under `+/_WORK/<id>/`, since a check at about 04:15 GMT found no tracked checkout holding them. A package file left there now fails NOTE-1c as out of place, naming the Cairn store's `work/<territory>/<id>/`; the [frontmatter standard][frontmatter] says so, alongside `ki-repo`'s matching COV-1 warning.

REFRESH last run **2026-08-12** (prior: 2026-07-04). Internal-model re-anchor — no external spec; re-verified the canonical structure and current Arcadia configuration/Streams layout through the local checkout. kit-legal remains pending its next direct refresh.

Per-source outcome:

- **Knowledge Islands knowledge-base standard** — confirmed for the five-zone model, working areas, Pillar unit, wikilink convention, and declared-not-forked rule. The former Focus/proposal metadata rows were retired: current Streams structure is flat adapter-owned Roadmap and Housekeeping areas. Universal metadata reconciliation remains open.
- **`ki-principal`** — confirmed for current configuration and layout: `repo_type = "kb"`, `ki-work.adapter = "kb-streams"`, and `Streams/Roadmap/` plus `Streams/Housekeeping/` are present. This local source check does not claim a full remote or hosted audit outcome.
- **`kit-legal`** — confirmed. Full canonical structure on canonical zone names; no kb config table (no aliases); config now on the `[ki-*]` prefix. Hosted audit: 0 fail · 3 warn (Charter/Conformance absent, one non-snake_case key). Zone-alias binding still has no live exemplar.
- **Per-base `.ki.toml` declarations** — confirmed. No recurring base-specific declaration has emerged to promote into the standard this cycle.

Open watch-items:

1. **ki-\* rename split across bases.** kit-legal has migrated its `.ki.toml` tables to the `[ki-*]` prefix; ki-principal still declares `[knowledgeislands-*]`. Shared `.ki.toml` contract (owned by `ki-repo`; tracked by the roadmap rename plan) — not a ki-repo-kb model change. Re-check both bases land on `[skills.ki-repo-kb]` once the rename completes.
2. **No live `[skills.ki-repo-kb.zones]` exemplar.** Both tracked bases have dropped their aliases. The alias binding is kept as a reviewable override with no live exemplar — watch for a new base mid-migration to re-validate it against reality.
3. **Charter/Conformance adoption.** The model expects `Admin/Governance/Charter.md` + `Conformance.md`; ki-principal lacks Conformance, kit-legal lacks both (all WARN). Watch whether exemplars adopt them or whether the expectation should soften.

[^ap]: The first real Knowledge Islands base this skill tracks. Sampled through its own `kb-fs` MCP server and its `CLAUDE.md` / memory index. It now carries the full canonical structure — `+`, `-`, `Admin/` (with `Admin/Admin.md` and `Admin/MEMORY.md`), `Calendar/`, `Pillars/`, `Resources/`, `Streams/`, each canonical zone with its same-name index — on the canonical zone names, declaring no zone aliases (though its `.ki.toml` still uses the pre-rename `[knowledgeislands-kb]` table — the `ki-*` rename is pending for this base). Its governance Pillar, `Pillars/Knowledge Capital/`, now sits within the canonical `Pillars/` zone, so the earlier mid-migration caveat no longer applies (confirmed 2026-06-21).

[^kl]: A second real base (`github.com/krisb/legal-principal`), sampled via its `kb-fs` MCP (`kit-legal-mcp-kb-fs`). It carries the fuller structure — `+`, `-`, `Admin/` (with `Admin/MEMORY.md`), `Calendar/`, `Pillars/` (with `Pillars/Pillars.md`), `Resources/`, `Streams/` — all on the canonical zone names. It earlier held its Pillars zone under a local folder name, declared as a `[skills.ki-repo-kb.zones]` alias; that rename has since completed and the alias has been dropped (its `.ki.toml` now carries no `[skills.ki-repo-kb.zones]` table, re-confirmed via its live MCP layout 2026-06-21 — `Pillars/Pillars.md` sits at the canonical folder). So it now documents the alias lifecycle's resolved end-state — transitional alias → dropped after the rename — rather than a live alias, and the zone-alias binding currently has no live exemplar among the tracked bases.

[kb-standard]: standards-knowledge-base.md
[frontmatter]: standards-frontmatter.md
