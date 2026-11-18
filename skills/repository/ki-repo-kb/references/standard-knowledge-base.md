---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T04:45:05Z
ki-status: in force
---

# Knowledge Islands knowledge-base standard

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 The Knowledge Islands model](#41-the-knowledge-islands-model)
  - [4.2 Identity, provenance, and adoption](#42-identity-provenance-and-adoption)
  - [4.3 Linking within a base](#43-linking-within-a-base)
  - [4.4 Index note shape](#44-index-note-shape)
  - [4.5 Source mirrors](#45-source-mirrors)
  - [4.6 Onboarding a base to this skill](#46-onboarding-a-base-to-this-skill)
  - [4.7 Zone aliases and the `[skills.ki-repo-kb]` config table](#47-zone-aliases-and-the-skillski-repo-kb-config-table)
  - [4.8 Session digest structure](#48-session-digest-structure)
  - [4.9 Commit gate](#49-commit-gate)
  - [4.10 Per-base config, not an extension skill](#410-per-base-config-not-an-extension-skill)

## 1. Introduction

This normative standard defines the structure, linking, configuration, routing, and digest contract applied by the [Knowledge Islands KB](../SKILL.md) skill. The decisions behind these rules are in [the sources file](sources.md).

[Back to contents](#contents)

## 2. Scope

The structure of a Knowledge Islands base and the contracts that hold it together.

### 2.1 In scope

- The five zones, the two working areas, Pillars and settling.
- Identity, provenance and adoption of knowledge items.
- Linking, index notes and source mirrors within a base.
- Onboarding, zone aliases and the `[skills.ki-repo-kb]` config table.
- Session digests, the commit gate and per-base configuration.

[Back to contents](#contents)

### 2.2 Out of scope

- Note frontmatter: [the frontmatter standard](standard-frontmatter.md).
- The detail of source mirrors and their labels: [the source mirror standard](standard-source-mirrors.md).
- The internal structure and process of the `Streams/` zone: `ki-repo-kb-streams`.
- The shared `.ki.toml` contract and whether a commit hook exists: `ki-repo`.

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Island** | A whole knowledge base. **Standard:** this one, [4.1](#41-the-knowledge-islands-model) |
| **Pillar** | A major strand of a base's subject matter, such as a case, a client, a domain or a theme. **Standard:** this one, [4.1](#41-the-knowledge-islands-model) |
| **Working area** | The inbound `+/` or outbound `-/` folder flanking the zones, which is not a canonical knowledge zone. **Standard:** this one, [4.1](#41-the-knowledge-islands-model) |
| **Zone alias** | A declared local folder name for a canonical zone or working area. **Standard:** this one, [4.7](#47-zone-aliases-and-the-skillski-repo-kb-config-table) |
| **Session digest** | A temporary output note under `-/_DIGESTS/` recording a session's context, decisions and facts. **Standard:** this one, [4.8](#48-session-digest-structure) |

[Back to contents](#contents)

## 4. Rules

The rules, part by part.

### 4.1 The Knowledge Islands model

A Knowledge Islands base is a single markdown store organised into five fixed zones — `Calendar/`, `Pillars/`, `Resources/`, `Streams/`, and `Admin/` — flanked by working areas. `+/` holds inputs to further local repository work, whether received or created locally; `-/` holds produced outputs awaiting use or delivery. They are working areas, not canonical knowledge zones. Specialist skills own their records: `ki-work-package` owns `_CHECKPOINTS`, and `ki-trades` owns peer-qualified `_TRADES` records and their lifecycle.

The standard applies when a base either declares `[skills.ki-repo-kb]` / `[skills.ki-repo-kb.zones]` in `.ki.toml` or carries at least one canonical zone directory. With neither, the checker reports one `NA` and stops. Either signal activates the complete audit: a declared but structurally incomplete base still fails its missing zones, and a zone-bearing base without a declaration is audited with canonical zone names.

- **Island vs Pillar.** Each whole knowledge base is an "island" (a legal base, a personal base, a research base). Within a base, a **Pillar** is a major strand of subject matter - a case, a client, a domain, a theme. A base that holds a zone under a different local folder name keeps that folder and declares it as a [zone alias](#47-zone-aliases-and-the-skillski-repo-kb-config-table) rather than counting as a different zone.
- **Settling.** `Streams/` holds work in motion; once settled it migrates into `Pillars/` (internal) or `Resources/` (external). The discriminating question for internal vs external: _would this knowledge exist without this base?_ If yes, it is a resource. The **internal structure and process of the `Streams/` zone** — flat adapter-owned operational areas and the Enactment Process that governs them — are owned by the `ki-repo-kb-streams` skill; this skill knows only that `Streams/` is a zone with a same-name index and routes top-level work into it.

[Back to contents](#contents)

### 4.2 Identity, provenance, and adoption

The base's governed declaration identifies its owning island and territory. Knowledge items may inherit that identity rather than repeat it in every note. Territorial authority belongs in the Charter and, for a principal base, its governed Known Lands inventory. A local registry resolves physical locations without assigning jurisdiction; company bindings and repository selection remain distinct from territorial authority.

Record item-specific provenance and exceptions explicitly: identify the source and relevant revision, whether material is original, an external reference, or an adopted adaptation, and any audience or ownership boundary that differs from the inherited declaration. Kind, subject, lifecycle, audience, and provenance have different jobs. Preserve the existing frontmatter vocabulary: `note_type` classifies kind, tags describe subject, and lifecycle belongs to the owning note type. This contract introduces no new required metadata keys; a reader must be able to recover the meaning from the governed notes and source references.

The receiver chooses whether external knowledge becomes canonical local knowledge and when to adopt later revisions. A source reference remains external reference material; an adopted adaptation records its source and revision while following the destination's canonical-change process. Public consumption or adoption may be recorded privately by its receiver without a reciprocal consumer list in the publishing territory. Contributions back to the publisher follow its own intake and acceptance rules. Territorial membership or repository visibility alone does not permit access to, or redistribution of, linked restricted source material.

[Back to contents](#contents)

### 4.3 Linking within a base

GFM is preferred for notes and zone indexes under `ki-authoring`'s Markdown-flavour and house-link conventions: use descriptive note-relative Markdown links in angle brackets, including in `## Contents` lists. Existing Obsidian `[[wikilinks]]` remain supported and are never a failure merely for their syntax; escape a table alias separator as `\|` while retaining them. No per-note flavour field is required.

`LINK-1` checks that every internal link outside the inbound and outbound working areas resolves in exact case, whether a Markdown link, reference definition, wikilink or embed. Ambiguous wikilinks retain the legacy failure boundary: only audited notes are ambiguity candidates. Missing and wrong-case targets report WARN by default, including unresolved template links. Converted repositories can opt into strict resolution with the boolean `strict_link_resolution = true` under `[skills.ki-repo-kb]` in `.ki.toml`; those findings then fail too. Omitted or false keeps warnings; other value types fail configuration validation. Wikilinks resolve beside the linking note first, then as a base-relative path, then by a unique trailing path; use enough path to remove ambiguity. Markdown destinations resolve relative to the linking note, with `%20` recognised as a space without globally percent-decoding paths. The five index-carrying zones are Calendar, Pillars, Resources, Streams and Admin; the working areas have no same-name zone index.

[Back to contents](#contents)

### 4.4 Index note shape

Wherever a base gives a folder a same-name index note, that note contextualises and points rather than duplicating content. Its `note_type` follows the index taxonomy. The body opens with a prose `## Overview` of the folder's purpose and how its contents fit together, then gives each direct child its own H2 section of two to four substantive sentences: what it covers, why it exists and what a reader will find. A `## Contents` list is a last resort for children that cannot be contextualised in prose; a bare list of child names with one-line descriptions is a navigation menu that adds nothing to the folder tree.

The `+/` and `-/` working areas and their subfolders carry no same-name index. Staging is a state, not a place: material brought into a repository lands in the `+` working area and is staged there until it is accepted or routed. `+/` is an inbox, not an asset store: an image or diagram belongs in the folder of the note it supports.

[Back to contents](#contents)

### 4.5 Source mirrors

A base declaring `sources` in `[skills.ki-repo].store_roles` follows the [source mirror content and derived label contract](standard-source-mirrors.md). It owns substantive extracts, one-file `mirrors` declarations with `mirror_type` and `mirror_sha256`, and its enrichment work. Notes derived from a source rather than mirroring it record `source_path` and `source_sha256` instead, and are not mirrors. Search labels describe only checks over authorised Markdown; neither a label nor a backpack audit establishes source existence, fidelity or freshness. Both relationships are distinct from an acquisition adapter’s upstream provenance.

[Back to contents](#contents)

### 4.6 Onboarding a base to this skill

Because the zone model is fixed, onboarding is small - resolve only the **project bindings**, ideally in the base's root `AGENTS.md`, which every agent host loads; a `CLAUDE.md` imports it and keeps only its runtime-specific additions (see `ki-repo`'s repository standard):

1. **Notes store** - the canonical alias and location of the notes store, and the alias rule (always use the alias, never the raw mount).
2. **Sources store** - whether a paired sources store is declared, following [Source mirrors](#45-source-mirrors).
3. **Scope usage** - whether the base is Pillar-scoped (declare an active Pillar each session) or single-Pillar / flat.
4. **Writing standards** - language variant, citation format, structural norms (defaults: British English, cite source paths, concise prose).
5. **Domain pre-flight** - any extra reads before drafting; declared as a `preflight` list in the base's `.ki.toml` `[skills.ki-repo-kb]` table, not in `AGENTS.md`.
6. **Zone names** - only if a folder diverges from its canonical name during a migration; declared in `.ki.toml`, not `AGENTS.md` (see [Zone aliases](#47-zone-aliases-and-the-skillski-repo-kb-config-table)).
7. **Template overrides** - optional zone-keyed paths under `[skills.ki-repo-kb.templates]`, relative to the base.

A base that follows the structure and defines the notes store needs nothing more; the rest runs on defaults.

[Back to contents](#contents)

### 4.7 Zone aliases and the `[skills.ki-repo-kb]` config table

The zone set is fixed, but a base may hold a zone under a different local folder name — whether **mid-migration** (renaming toward the canonical name) or as a **standing local naming choice**. Any canonical zone (`Calendar` / `Pillars` / `Resources` / `Streams` / `Admin`) or working area (`+` / `-`) may be aliased. So that the skill works against the real layout without hard-coding any one base's folders, the local folder name is a declared, reviewable override rather than a model change. (Bases that use an alias are recorded in [the source list](sources.md) for REFRESH.)

A required zone is present when its resolved path is a readable directory, including a symbolic link that resolves to one. Dangling links and links to files do not satisfy the zone layout. Recognising a linked zone as present does not relax the separate containment and safe-write checks used by CONFORM.

It lives in the base's `.ki.toml` under the skill's own table (the shared-file contract is owned by `ki-repo`; this skill owns the keys inside its table):

```toml
[skills.ki-repo-kb.zones]
# Canonical zone = this base's local folder. For a rename in progress, drop the
# line once the folder reaches its canonical name; omit the table when none diverge.
Pillars = "<local folder name>"
```

Rules, following the `.ki.toml` contract:

- **Resolve every zone reference through the alias.** When the table maps a zone to a local folder, read, route, and write that zone at the mapped folder; the routing test, memory cascade, and digest paths all use the resolved folder.
- **Validate down, ignore across.** Warn on an unrecognised key under `[skills.ki-repo-kb]` (a typo or stale option should surface) and advise dropping one that merely restates a default (a zone mapped to its own canonical name). Do not validate another skill's table. Consume the shared `[skills.ki-repo].store_roles` declaration only to select source-mirror applicability; its owner retains validation authority.
- **Transitional or standing.** A zone alias may record an in-progress rename — removed once the base reaches the canonical folder name — or a permanent local naming choice the base keeps. Either way it is a folder-name mapping, never a change to the zone model itself.

[Back to contents](#contents)

### 4.8 Session digest structure

Declaring `[skills.ki-repo-kb]` requires the exact retained `-/_DIGESTS/README.md` scaffold. It remains as the visible capability boundary after the last digest is deleted; digest records themselves remain temporary outputs.

Destination `-/_DIGESTS/<UTC timestamp> <Short Topic>.md` (timestamp `YYYY-MM-DDTHHMMSSZ`; topic in Title Case), beside the retained `README.md` scaffold. Frontmatter is `note_type: session-digest` and `retain_until: YYYY-MM-DD` (default 30 days from the write date). Body sections are:

- **Context** - what the session was about.
- **Decisions** - choices made and their rationale.
- **Facts Learned** - durable facts surfaced during the session.
- **Related Work** - links to the notes, Pillars, or streams touched.
- **Keywords** - retrieval terms.

[Back to contents](#contents)

### 4.9 Commit gate

A Knowledge Base has no package toolchain, so its committed hooks are the `ki-repo` canonical pair for the `ki-repo-kb` shape, published as this skill's worked example under [`assets/githooks/`](../assets/githooks/): `pre-commit` checks the staged Markdown with rumdl under `ki-authoring` `MD-hook` and nothing else, and `commit-msg` runs `ki git check-message "$1"`. The gate is check-only and never calls `ki`: a line that runs `ki repo audit`, `ki repo conform`, `ki repo repair`, `--fix` or `--write` fails `GATE-1`, because a commit gate reports and never rewrites, and the `ki-repo-kb` audit runs in CI with its whole-tree verdict, as Kris chose COMMIT-VS-CI a) on 26 October 2026. Without a committed hook `GATE-1` is not applicable; `ki-repo` owns whether the hook exists (`HOOK-1`), is bound (`HOOK-2`) and matches its canonical text (`HOOK-4`) ([ADR-KI-HARNESS-SKILLS-017](../../../../docs/decisions/ADR-KI-HARNESS-SKILLS-017-commit-gate-existence-and-content-are-owned-separately.md)).

[Back to contents](#contents)

### 4.10 Per-base config, not an extension skill

A base never ships a `<base>-kb` extension skill. What it needs differently is **declared**, so the mode logic stays in one place and the base specifics stay auditable:

- **Structured data** → the base's `.ki.toml` `[skills.ki-repo-kb]` table, read **validate-down** by this skill: the `[skills.ki-repo-kb.zones]` aliases, `[skills.ki-repo-kb.templates]` overrides, the `required_frontmatter` array, and the `preflight` array (note paths/globs to read before drafting — the base-specific pre-flight that scope declaration and domain context once justified an extension for).
- **Narrative bindings** (store alias, scope usage, writing standards) → the base's root `AGENTS.md`.

Relationships to sibling skills use explicit boundaries, never extension. Selecting this skill also selects its declared focused prerequisites — `ki-repo-kb-activities`, `ki-repo-kb-live-artifacts`, and `ki-repo-kb-streams` — before the wider base audit. Coverage selects `ki-authoring` separately for Markdown conventions. No skill imports another. A genuinely base-specific _behaviour_ that no declaration can express is a signal to generalise it into this standard skill (a REFRESH candidate), not to fork a coupled one.

[Back to contents](#contents)
