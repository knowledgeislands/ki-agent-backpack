---
name: ki-repo-kb
ki-document-type: skill@2026-11-17T00:55:00Z
ki-kind: governance
ki-applicability: detected
ki-guild: repository
ki-shared-dependencies: [ki-skills:rubric]
ki-depends-on: []
ki-optional-depends-on: [ki-decision-records, ki-work-recurring]
ki-owns: ['-/_DIGESTS/README.md', '+/_ACQUIRED/README.md']
ki-contributes: ['.githooks/pre-commit']
description: >
  Create, query, update, distil, or audit a KI knowledge base: the Calendar, Pillars, Resources, Streams and Admin
  zones with their `+` and `-` working areas, the Streams layout and Enactment gate, Activity notes, Live Artifact
  pairs, and a Capital's principal governance. Use for notes, session digests, search, or base conformance;
  `ki-work-roadmap` owns roadmap records and `ki-authoring` general document style.
argument-hint: 'audit | conform | digest | extract | help | improve | educate | query <question> | refresh | save | update <note>'
---

# Knowledge Islands KB

You are helping the user work with a **Knowledge Islands** knowledge base: one Markdown store organised to the Knowledge Islands structure. This SKILL.md is a router. It carries the shared model every mode needs and sends each concern to the standard that holds its rules; only a handful of store-level details come from the host base.

## The standards behind this router

Read the standard for the concern in hand before acting. All of them are checked by one audit, `ki repo audit --skill ki-repo-kb`, whose [generated rubric](references/rubric.md) lists every criterion.

| Concern | Standard | Families |
| --- | --- | --- |
| Zones, working areas, linking, indexes, configuration, digests, commit gate, `Admin/` subdivisions, templates | [Knowledge-base standard](references/standard-knowledge-base.md) | ZONE, CONFIG, ADMIN, ROUTE, MEM, LINK, GATE |
| Note metadata and the `note_type` taxonomy | [Frontmatter standard](references/standard-frontmatter.md) | NOTE |
| `Streams/` operational container and legacy folders | [Streams structure standard](references/standard-streams-structure.md) | STREAM |
| The one gate on canonical change | [Enactment gate](references/standard-enactment-process.md) | ENACT |
| Activity notes in `Admin/Operations/Activities/` | [Activity standard](references/standard-activities.md) | ACT |
| Markdown and HTML pairs in `Admin/Operations/Live Artifacts/` | [Live Artifact standard](references/standard-live-artifacts.md) | LA, LA-F |
| A Capital's Charter, Known Lands and acquired-packet scaffold | [Principal standard](references/standard-principal.md) | PRINCIPAL |
| Packets arriving in `+/_ACQUIRED/` | [Receiver triage](references/standard-acquired-triage.md) | none |
| Paired sources stores | [Source mirror standard](references/standard-source-mirrors.md) | ZONE |
| Optional bounded retrieval for QUERY | [Derived search contract](references/standard-search.md) | none |

The principal standard applies whenever the base is its territory's Capital, which the audit works out from `[skills.ki-repo].capital` naming the base itself; a base that is not its Capital skips it. These standards came from four skills folded or split here; the roadmap records inside `Streams/Roadmap/` belong to `ki-work-roadmap`, and the Project registry's close-out checks to `ki-work`. Decision Records stay with `ki-decision-records`, and an Activity's recurring-work profile with `ki-work-recurring`.

## The Knowledge Islands structure

Five zones — `Calendar/`, `Pillars/`, `Resources/`, `Streams/`, `Admin/` — each carry an index note of the same name. `+/` (inbound) and `-/` (outbound) are working areas, not zones, and carry no such index.

| Folder       | Holds                                                                                           |
| ------------ | ----------------------------------------------------------------------------------------------- |
| `+/`         | Inbound working area - inputs to further local work.† Exempt from most conventions. Not a zone. |
| `Calendar/`  | Time-stamped records: daily, meeting, session, weekly, monthly notes.                           |
| `Pillars/`   | Internal canonical knowledge - the base's primary subject matter. One folder per pillar.        |
| `Resources/` | External reference material that exists independently of this base.                             |
| `Streams/`   | Work in motion — finite adapter-owned work records, laid out by the Streams structure standard. |
| `-/`         | Outbound working area - produced artefacts (session digests, compiled outputs).‡ Not a zone.   |
| `Admin/`     | Base-agnostic governance and operations, in `Governance/` and `Operations/` subdivisions.       |

A zone may sit under a different local folder name, declared as a **zone alias** in `.ki.toml`, not treated as a different zone. Each whole base is an "island"; a **Pillar** is a major strand of its subject matter (a case, a client, a domain, a theme).

† `+/` holds inputs to further local work, including locally created records. `ki-trades` owns received cross-repository records under `+/_TRADES/`.

‡ `ki-trades` owns outgoing cross-repository records under `-/_TRADES/<owner>/<repo>/TRD-<eight-hex>.md`, including their format and lifecycle.

How notes link, and what `LINK-1` resolves and reports, is [the knowledge-base standard's 4.3](references/standard-knowledge-base.md#43-linking-within-a-base).

### Routing test

Produced outputs (session digests, compiled artefacts, handoffs) **bypass this test** — they always go to `-/` (see [Mode DIGEST](references/mode-digest.md)).

For all other notes, most-specific match wins:

1. Time-bound record -> `Calendar/`.
2. Active, in-progress work -> `Streams/` (finite work as a `Streams/Roadmap/` record; a recurring obligation as an Activity note).
3. Canonical internal knowledge -> `Pillars/<Pillar>/`.
4. External reference (would exist without this base) -> `Resources/`.
5. Unsure -> `+/<Title>.md` at the most specific applicable level.

### Memory cascade

Root index `Admin/MEMORY.md` lists the active Pillars. Where the base is Pillar-scoped, scope a session to one Pillar and load `Pillars/<Pillar>/MEMORY.md` (and any per-Pillar profile index) before substantive work. Treat other Pillars as off-limits unless the user switches.

### Enactment gate

Substantive changes to `Admin/`, `Pillars/` or `Resources/` need approved forward work, captured and delivered through `ki-work`. Time-bound `Calendar/` entries, `+/` triage and trivial fixes are exempt. The base's root `AGENTS.md` anchors the gate; [the Enactment gate standard](references/standard-enactment-process.md) holds its one statement and check.

## Project bindings

Almost everything is fixed. Narrative bindings come from the base's root `AGENTS.md`, which every agent host loads, then the root memory index: the **notes store** alias (default: "the base"), whether a **sources store** is paired under the [source mirror contract](references/standard-source-mirrors.md) (default: none), **scope usage**, Pillar-scoped or flat (default: Pillar-scoped), and **writing standards** (default: British English, cited source paths, concise prose).

Declarative overrides live in the base's `.ki.toml` `[skills.ki-repo-kb]` table, read validate-down, warning on an unrecognised key and never validating a sibling table: `zones` aliases, `templates` overrides, `required_frontmatter`, `preflight` reads, `strict_link_resolution`, `process_note`, `activities_dir`, `backpack`, `artifacts_dir` and `sync_threshold_hours`. [The knowledge-base standard's 4.7 and 4.13](references/standard-knowledge-base.md#47-zone-aliases-and-the-skillski-repo-kb-config-table) define each. Consume shared `[skills.ki-repo].store_roles` only to select source-mirror applicability, and `[skills.ki-repo].capital` only to decide whether the principal standard applies. A base never ships a `<base>-kb` skill: what it needs differently is declared (data) or written in its `AGENTS.md` (prose), never forked.

## Step 1 - Load context

1. The host's root `AGENTS.md`, which every agent host loads and a runtime-specific `CLAUDE.md` imports, is the authority on the bindings above; follow it. Read the root `Admin/MEMORY.md` for active Pillars.
2. If the base is Pillar-scoped, declare or confirm the active Pillar, then load `Pillars/<Pillar>/MEMORY.md` and any profile index. Confirm: "Session scoped to [Pillar]." If the user switches Pillar mid-session, re-scope before proceeding.
3. Pre-flight before writing anything substantive: scope cascade loaded; if the work engages a named person/entity with a profile note, read it first; run any domain pre-flight declared in `.ki.toml` (`preflight`) or the host's `AGENTS.md`.

## Operating modes

Step 2 - determine the mode and load its procedure. Invoked as `help` / `-h` / `?`, it explains itself and stops — the generated HELP block (name, purpose, invocation, modes, off-ramps), taking no action. With no mode it does the same, then, in an interactive session only, offers the mode choice via `AskUserQuestion`, prompting for any `argument-hint` target the chosen mode shows. The shared model above stays loaded; each mode's _procedure_ lives in its own on-demand file, so read only the one the request selects. It carries the universal four **AUDIT · CONFORM · EDUCATE · REFRESH** (EDUCATE scaffolds a base), the session-level **IMPROVE**, and the note modes **DIGEST · EXTRACT · QUERY · SAVE · UPDATE**. SAVE also authors a new Activity note or Live Artifact source. Modes are named and alphabetical.

| Mode    | Fires on                                                  | Read before acting                            |
| ------- | --------------------------------------------------------- | --------------------------------------------- |
| AUDIT   | "audit my knowledge base / is it structured right"        | [mode-audit.md](references/mode-audit.md)     |
| CONFORM | "bring my base into line / fix the structure"             | [mode-conform.md](references/mode-conform.md) |
| DIGEST  | "write a session digest"                                  | [mode-digest.md](references/mode-digest.md)   |
| EXTRACT | "distil this conversation into notes"                     | [mode-extract.md](references/mode-extract.md) |
| IMPROVE | continuous-improvement sweep (at session end)             | [mode-improve.md](references/mode-improve.md) |
| EDUCATE | "set up a new knowledge base"                             | [mode-educate.md](references/mode-educate.md) |
| QUERY   | "what do my notes say / search my notes"                  | [mode-query.md](references/mode-query.md)     |
| REFRESH | "is the KB skill still current" (on its declared cadence) | [mode-refresh.md](references/mode-refresh.md) |
| SAVE    | "save to my notes / capture this / add an activity or live artifact" | [mode-save.md](references/mode-save.md)       |
| UPDATE  | "update the note on X"                                    | [mode-update.md](references/mode-update.md)   |

The memory cascade and the Enactment gate apply on every fire, before any mode procedure loads.

## Notes

- This skill assumes the Knowledge Islands structure. If a base does not follow it, or a binding cannot be resolved and no default fits, ask the user rather than guess.
- After changing the catalogue under `scripts/rubric/items/`, regenerate the published rubric with `ki dev skill rubric ki-repo-kb --write`.
