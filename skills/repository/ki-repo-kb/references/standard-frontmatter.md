---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T04:45:05Z
ki-status: in force
---

# Knowledge Islands frontmatter standard

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 Authority](#41-authority)
  - [4.2 Universal fields](#42-universal-fields)
  - [4.3 Note-type taxonomy](#43-note-type-taxonomy)
    - [4.3.1 Admin branch (`admin/`)](#431-admin-branch-admin)
    - [4.3.2 Outbound working area (`-/`)](#432-outbound-working-area--)
    - [4.3.3 Calendar branch (`calendar/`)](#433-calendar-branch-calendar)
    - [4.3.4 Resources branch (`resources/`)](#434-resources-branch-resources)
    - [4.3.5 Streams branch (`streams/`)](#435-streams-branch-streams)
    - [4.3.6 Pillars branch (`pillars/`)](#436-pillars-branch-pillars)
  - [4.4 Dependent fields](#44-dependent-fields)

## 1. Introduction

The frontmatter fields of the notes in a Knowledge Islands base: the universal fields, the `note_type` taxonomy that pairs each note type with where it may live, and the fields some note types add. Its refresh is structure · annually. The decisions behind these rules are in [the sources file](sources.md).

[Back to contents](#contents)

## 2. Scope

The frontmatter of every note in a Knowledge Islands base.

### 2.1 In scope

- The universal fields and which are required.
- The `note_type` taxonomy, branch by branch, with the skill that defines each note type.
- The dependent fields a note type requires.

[Back to contents](#contents)

### 2.2 Out of scope

- The fields of an instrument-specific note type, defined by the skill that introduces it.
- Records delegated to their owning skills under NOTE-1c, such as Roadmap work records, checkpoints, acquisition records and trade records.
- The zone model and routing: [the knowledge-base standard](standard-knowledge-base.md).

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Universal field** | A frontmatter field that applies to every note in a base, such as `note_type`, `updated` or `reviewed`. **Standard:** this one, [4.2](#42-universal-fields) |
| **Stale** | A note whose `reviewed` is absent or earlier than its `updated`. **Standard:** this one, [4.2](#42-universal-fields) |
| **Note type** | A note's sole kind classifier, `note_type`, location-constrained and written `<zone>/<arm>/<leaf>`. **Standard:** this one, [4.3](#43-note-type-taxonomy) |
| **Dependent field** | A field a particular `note_type` requires, defined by the skill that owns that note type. **Standard:** this one, [4.4](#44-dependent-fields) |

[Back to contents](#contents)

## 4. Rules

The authority of the standard, then the universal fields, the taxonomy and the dependent fields.

### 4.1 Authority

The authoritative definition of frontmatter fields for all notes in a Knowledge Islands base. Any skill that reads or writes KB notes follows this standard. Instrument-specific fields (e.g. `decision_type` for DRs) are defined by the skills that introduce them and documented here only as dependent fields.

[Back to contents](#contents)

### 4.2 Universal fields

| Field | Required (KB repos) | Description |
| --- | --- | --- |
| `note_type` | Yes for KB-owned notes† | The note's **kind** (sole classifier); location-constrained — see taxonomy below |
| `updated` | Recommended | Timestamp of the last substantive change, `YYYY-MM-DDTHH:MM:SSZ` |
| `reviewed` | Recommended | Timestamp of the last human review; a note is **stale** when `reviewed` is absent or earlier than `updated` |
| `created` | Optional | Timestamp set once on creation; never changed |
| `status` | Note-type-specific | Set by the note's `note_type` where it has a lifecycle/state, not universal‡ |
| `tags` | Optional | Topical / temporal / source labels (`topic/*`, `date/*`, `source/*`) — retained, but never the **kind** classifier |
| `author` | Recommended | `AI-assisted` / `Manual` / `Mixed` |

† NOTE-1c delegates metadata classification for `Streams/Roadmap/**`, old `+/_CHECKPOINTS/<thread>.md` checkpoints, canonical acquisition records under `+/_ACQUIRE/<adapter>/*.md`, and peer-qualified `TRD-*.md` protocol records under either working area to their owning skills. These records still undergo YAML, key-shape, and declared required-field checks. Nested checkpoint or acquisition paths, including `_RETIRED`, are not delegated. Local session digests under `-/_DIGESTS/` remain governed here. A work package lives in the Cairn store, so a package file left directly under `+/_WORK/<id>/`, such as its `_index.md`, `state.md`, `queries.md`, `messages.md` or `decisions.md`, is no longer delegated: NOTE-1c fails it as an earlier copy, out of place, naming the store's `work/<territory>/<id>/` (COVERAGE-SIGNAL a).

‡ Component-specific status values remain under their component owners while KB-wide metadata reconciliation is pending.

**Freshness** is carried by the timestamps, not by `status`: a note is current while `reviewed` is at or after its last `updated`, and goes stale once `updated` moves ahead of `reviewed` (or `reviewed` is absent). `status` is reserved for a `note_type`'s own lifecycle where it has one — for example `ki-repo-kb-activities` uses `active` / `inactive`.

The generic `type` field is forbidden in governed KB note frontmatter. Every metadata field carries its explicit domain prefix: `note_type` classifies notes, and instrument-specific fields such as `decision_type` remain owned by their instrument skill.

[Back to contents](#contents)

### 4.3 Note-type taxonomy

`note_type` is a note's sole **kind** classifier — what it _is_, not what it is _about_. `tags` carry the _about_ (topical, temporal, and source labels — `topic/*`, `date/*`, `source/*`) and never classify kind; where a base encoded kind in a `card/*` tag (a Collection Card — a person, organisation, concept, or index note), that `card/*` tag maps to `note_type:`. `note_type` is **location-constrained**: a registry pairs path-patterns with the note types valid at them, so a `note_type` can be checked against — and often inferred from — where the note lives. The relationship is not strictly one-to-one: a note type may be valid at more than one location, and some locations admit more than one note type, so the registry expresses _which note types are valid where_ rather than a single forced mapping. The fixed contract is the **pattern** — `note_type` is declared and location-constrained — not any particular slug or notation; the slug vocabulary below is the current taxonomy and may grow.

The slugs use slash-hierarchical notation: `<zone>/<arm>/<leaf>`. The zone prefix identifies the KI zone; subsequent segments identify the structural role within that zone.

The branches follow, zone by zone.

#### 4.3.1 Admin branch (`admin/`)

| Note type                     | Path context                                              | Defined by            |
| ----------------------------- | --------------------------------------------------------- | --------------------- |
| `admin/zone`                  | `Admin/Admin.md` (zone root)                              | `ki-repo-kb`               |
| `admin/index`                 | Area index notes (`Admin/Governance/Governance.md`, etc.) | `ki-repo-kb`               |
| `admin/governance/decision`   | `Admin/Governance/Decisions/*.md`                         | `ki-decision-records` |
| `admin/governance/convention` | `Admin/Governance/Conventions/**/*`                       | TBD                   |
| `admin/governance/policy`     | `Admin/Governance/Policies/**/*`                          | TBD                   |
| `admin/governance/template`   | `Admin/Governance/Templates/**/*`                         | TBD                   |
| `admin/operations/process`    | `Admin/Operations/Processes/**/*`                         | TBD                   |
| `admin/operations/activity`   | `Admin/Operations/Activities/**/*`                        | `ki-repo-kb-activities`    |
| `admin/operations/skill`      | `Admin/Operations/Skills/**/*`                            | TBD                   |

`Admin/Operations/Activities/` (or its configured collection) is governed by `ki-repo-kb-activities`: Activity notes retain `note_type: admin/operations/activity`, with an optional nested `housekeeping` profile governed by `ki-work-recurring`. They are canonical notes, not delegated Streams record types. `Admin/Operations/Live Artifacts/` is governed by `ki-repo-kb-live-artifacts`; reconciliation of its component-specific and universal metadata remains separate. The remaining `TBD` rows have no governing skill yet.

[Back to contents](#contents)

#### 4.3.2 Outbound working area (`-/`)

Session digests are only valid under `-/`. Files carrying `note_type: session-digest` elsewhere are a ZONE-5 FAIL (see the audit rubric). The former `note_type: handoff` is rejected by NOTE-1c everywhere, including trade paths; cross-repository records use the schema and lifecycle owned by `ki-trades`.

| Note type | Path context | Lifecycle | Defined by |
| --- | --- | --- | --- |
| `session-digest` | `-/_DIGESTS/*.md` | Delete after useful content is extracted or routed | `ki-repo-kb` |

[Back to contents](#contents)

#### 4.3.3 Calendar branch (`calendar/`)

Time-stamped records; the kind is the temporal grain. Governed by `ki-repo-kb`.

| Note type          | Path context                                          | Defined by |
| ------------------ | ----------------------------------------------------- | ---------- |
| `calendar/index`   | Year / month index notes (`Calendar/<YYYY>/…`)        | `ki-repo-kb`    |
| `calendar/daily`   | A day note (`Calendar/<YYYY>/<month>/<YYYY-MM-DD> …`) | `ki-repo-kb`    |
| `calendar/weekly`  | A weekly review                                       | `ki-repo-kb`    |
| `calendar/monthly` | A monthly summary                                     | `ki-repo-kb`    |
| `calendar/meeting` | A meeting note                                        | `ki-repo-kb`    |
| `calendar/session` | An AI-assisted work-session note                      | `ki-repo-kb`    |

[Back to contents](#contents)

#### 4.3.4 Resources branch (`resources/`)

External reference material. The kinds below are the cross-base **core**; a base may declare finer entity kinds (`resources/book`, `resources/location`, …) under its own config. Governed by `ki-repo-kb`.

| Note type           | Path context                          | Defined by |
| ------------------- | ------------------------------------- | ---------- |
| `resources/index`   | Area index notes (`Resources/…/….md`) | `ki-repo-kb`    |
| `resources/note`    | A general reference note              | `ki-repo-kb`    |
| `resources/person`  | A person reference                    | `ki-repo-kb`    |
| `resources/org`     | An organisation reference             | `ki-repo-kb`    |
| `resources/concept` | A concept reference                   | `ki-repo-kb`    |

[Back to contents](#contents)

#### 4.3.5 Streams branch (`streams/`)

The `Streams` zone's internal structure is owned by `ki-repo-kb-streams`; these are its note kinds.

| Note type          | Path context                                     | Defined by      |
| ------------------ | ------------------------------------------------ | --------------- |
| `streams/zone`     | `Streams/Streams.md` (zone root)                 | `ki-repo-kb-streams` |
| `streams/project` | `Streams/Projects/<slug>.md` (Project note) | `ki-work` |
| `streams/initiative` | `Streams/Initiatives/<slug>.md` (Initiative note) | `ki-work` |
| _adapter-owned_ | Roadmap work-record metadata | `ki-work-roadmap` |

[Back to contents](#contents)

#### 4.3.6 Pillars branch (`pillars/`)

Canonical internal knowledge. Governed by `ki-repo-kb`.

| Note type       | Path context                        | Defined by |
| --------------- | ----------------------------------- | ---------- |
| `pillars/index` | Pillar and area index notes         | `ki-repo-kb`    |
| `pillars/note`  | Canonical knowledge within a Pillar | `ki-repo-kb`    |

[Back to contents](#contents)

### 4.4 Dependent fields

Some `note_type` values require additional fields, defined by the skill that owns that note type:

| `note_type` | Additional required field | Valid values | Defined by |
| --- | --- | --- | --- |
| `admin/governance/decision` | `decision_type` | nine decision domains‡ | `ki-decision-records` |
| `calendar/daily` | `day_type` | work-day / weekend / bank-holiday / annual-leave (open enumeration) | `ki-repo-kb` |
| _adapter-owned_ | Roadmap dependent fields | adapter-defined | `ki-work-roadmap` |

‡ strategy, product, architecture, data, security, operations, governance, research, knowledge.

[Back to contents](#contents)
