---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-19T07:02:02Z
ki-status: in force
---

# Streams structure standard

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 Operational container](#41-operational-container)
  - [4.2 Records and the Project registry](#42-records-and-the-project-registry)
  - [4.3 Recurring Activities](#43-recurring-activities)
  - [4.4 Future trades](#44-future-trades)
  - [4.5 Legacy migration](#45-legacy-migration)
  - [4.6 Canonical knowledge and retention](#46-canonical-knowledge-and-retention)

## 1. Introduction

This standard defines `Streams/` as the operational container of a Knowledge Islands base. It does not define a second Focus-based work queue. The applicable change-management adapter owns each area’s records, lifecycle, and allocation details.

The sources behind it are in [the sources file](sources.md).

[Back to contents](#contents)

## 2. Scope

The `Streams/` container of a Knowledge Base and the checks its AUDIT applies there.

### 2.1 In scope

- The container's operational areas and what may not sit in them.
- The Project registry notes' upward-only links in a Capital.
- Where roadmap records and the Project registry sit, and which skill checks them.
- Recurring Activities, the reserved trades area, legacy migration and retention.

[Back to contents](#contents)

### 2.2 Out of scope

- The roadmap record format, lifecycle, identifier grammar, horizons and the KB record checks: the [repository roadmap standard](../../../work/ki-work-roadmap/references/standard-repository-roadmaps.md).
- The Project registry itself, its close-out and idea-stage checks: the [Project registry standard](../../../keystone/ki-work/references/standard-project-registry.md).
- Activity notes: the [Activity standard](standard-activities.md); their recurring-work profile: `ki-work-recurring`.
- The five-zone model outside `Streams/`: the [knowledge-base standard](standard-knowledge-base.md).

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Streams** | A Knowledge Base's operational container for work-management records, never the settled knowledge they produce. **Standard:** this one, [4.1](#41-operational-container) |
| **Operational area** | A fixed folder under `Streams/`, such as `Roadmap/`, which is neither a horizon nor a lifecycle state. **Standard:** this one, [4.1](#41-operational-container) |
| **Close-out assessment** | The `### Close-out assessment` heading a Project's note gets before the Project closes. **Standard:** [Project registry](../../../keystone/ki-work/references/standard-project-registry.md#45-close-out-assessment) |
| **Idea-stage Project** | A `planned` Project whose `outcome` opens with its lead's name followed by "decides". **Standard:** [Project registry](../../../keystone/ki-work/references/standard-project-registry.md#43-idea-stage-project) |
| **Legacy migration** | The receiving base's deliberate disposition of each retained record from the former Focus and state folders. **Standard:** this one, [4.5](#45-legacy-migration) |

[Back to contents](#contents)

## 4. Rules

The container, where records and the Project registry sit, recurring Activities, future trades, legacy migration and retention.

### 4.1 Operational container

`Streams/` is the Knowledge Base counterpart to a project repository’s operational `docs/` surface: it holds work-management records, never the settled knowledge they produce.

```text
Streams/
  Roadmap/
  Projects/        # only in a territory Capital holding the Project registry
  Themes/          # only in a territory Capital holding the theme registry
  Trades/          # only when a future KB trade placement is adopted
```

`Roadmap/` is the fixed area, not a horizon or lifecycle state. In particular, triage is roadmap status metadata and never a `Streams/Triage/` directory. `Projects/` and `Themes/` are the fixed homes of a territory Capital's registry under the [Project registry standard](../../../keystone/ki-work/references/standard-project-registry.md): one flat note per Project with a `Projects.md` index, and one theme page per theme with a `Themes.md` index. They hold no work records, and their notes link upwards only: a note names no work record and carries no dated `## Update` section, because each record names its Project or theme and `ki` views list the records. AUDIT fails a Project note or theme page, or either index note, that names a work-record identifier or carries an `## Update` section. Decision Record identifiers are not work records.

`Streams/` holds only definitions and records, under the [work model](https://github.com/knowledgeislands/ki-principal/blob/main/Admin/Governance/Decisions/GDR-KI-PRINCIPAL-009-the-work-model.md): everything that churns, the work's state, decisions and `ki-work design` papers, stays in its work package, `work/<territory>/<id>/` in the Cairn store, and briefs and reports in the run packet. AUDIT therefore fails any `design/` folder anywhere under `Streams/`; its papers move into a change document in the work's package. For the [tolerance window](../../../keystone/ki-work/references/standard-project-registry.md#413-tolerance-window) AUDIT reads `Streams/Initiatives/` and a Project folder note `Projects/<slug>/<slug>.md` as before, checking them the same way and warning on each. A future `Trades/` area needs an explicit contract; do not create it merely because the generic `ki-trades` working areas exist elsewhere in the repository.

The container does not prescribe a topical-folder or `groups` vocabulary. Where an owning adapter supports topical metadata, the receiving base chooses its vocabulary. That metadata never replaces an operational area or changes an identifier.

[Back to contents](#contents)

### 4.2 Records and the Project registry

`Streams/Roadmap/` is the KB placement of a project repository's `docs/roadmap/`. `ki-work-roadmap` owns its records, their identity, frontmatter floor, `_ISSUES.md` ledger, areas and intake, under [its KB rule](../../../work/ki-work-roadmap/references/standard-repository-roadmaps.md#41-repositories-it-applies-to); its audit checks them in a Knowledge Base. `ki-work` owns the Project registry's [close-out assessment](../../../keystone/ki-work/references/standard-project-registry.md#45-close-out-assessment) and [idea-stage checks](../../../keystone/ki-work/references/standard-project-registry.md#43-idea-stage-project). This standard keeps only the container they sit in (KB-FOLD b, 22 November 2026).

[Back to contents](#contents)

### 4.3 Recurring Activities

Recurring obligations are canonical Activity notes in the collection the [Activity standard](standard-activities.md) configures (default `Admin/Operations/Activities/`). Each active Activity names its home, the territory's regular work or a Project, and may carry a `theme`. An Activity with the `housekeeping` profile uses `ki-work-recurring` for scheduling, due-run reservation and successful-run evidence. It is the single authoritative definition, not a duplicate of a Streams template. Its due runs are ordinary linked roadmap records under `Streams/Roadmap/`.

A due run is a linked ordinary roadmap record in `Streams/Roadmap/`. Its horizon and lifecycle remain record metadata; it is not moved into a Streams state folder.

[Back to contents](#contents)

### 4.4 Future trades

`Streams/Trades/` is reserved, not yet a required part of the structure. If adopted, it must be defined by a KB-specific extension of `ki-trades`; the generic `+` and `-` repository working areas remain outside this standard.

[Back to contents](#contents)

### 4.5 Legacy migration

`Active`, `Background`, `Dormant`, and the former Focus folders are legacy navigation and state labels. They are not target paths and must not be reintroduced as topical groups.

For each retained legacy record, the receiving base decides deliberately whether it is:

1. finite forward work → a flat `Streams/Roadmap/` record;
2. a recurring obligation → one Activity note in the configured Activity collection, using the `ki-work-recurring` profile when its recurring-work lifecycle applies;
3. durable knowledge → a canonical `Admin/`, `Pillars/`, or `Resources/` note; or
4. obsolete working material → retained or pruned through explicit owner approval.

The base also decides its own repository code, fixed roadmap area codes, issue-ledger high-water marks, retained-ID map, and any optional topical metadata. Never derive identities or historic topical membership from a legacy path.

[Back to contents](#contents)

### 4.6 Canonical knowledge and retention

An existing `Streams/Housekeeping/` area is not a supported second schedule source. AUDIT flags it for deliberate reconciliation. Preserve its identifiers, active-run links and successful-run evidence when the owner approves consolidation into Activities; neither AUDIT nor CONFORM moves, deletes or duplicates those definitions.

Streams records are working evidence, not a knowledge store. Durable outputs belong in `Admin/`, `Pillars/`, `Resources/`, or a Decision Record. A completed roadmap record remains until explicitly selected for prune; Activity and trade retention follow their owning standards.

[Back to contents](#contents)
