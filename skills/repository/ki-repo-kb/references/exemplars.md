---
ki-document-type: exemplars@2026-11-17T00:55:00Z
---

# KB Exemplars

## Contents

- [Collections](#collections)
- [Selected patterns](#selected-patterns)
- [The folded standards](#the-folded-standards)

Curated patterns showing what well-formed Knowledge Islands KB notes, folder structures, and zone layouts look like. Use these as concrete references when authoring notes, running CONFORM, or deciding whether a structural choice is correct. They are drawn from `ki-principal` — the canonical live KB — rather than invented examples, so they reflect real decisions made in a conforming base.

## Collections

| Source | URL | What it covers |
| --- | --- | --- |
| ki-principal | [knowledgeislands/ki-principal](https://github.com/knowledgeislands/ki-principal) | Zone layout, folder-note, frontmatter, link style † |

† Zone layout, folder-note structure, frontmatter, and internal link style across a live KB conforming to the standard. `ki-principal` is the reference base the skill tracks — see `sources.md` for conformance status.

## Selected patterns

### Correct note frontmatter

Every KB note carries `note_type`; the current exemplar also uses `status`, `tags`, and `author`. The `note_type` field drives routing; `status` carries a note-type-specific state where one exists; `tags` carry the topic context; `author` records provenance for curation. The generic `type` field is not valid KB note metadata. The following is the canonical shape for `Admin/Admin.md`, a zone-root index note:

```yaml
---
note_type: admin/zone
tags:
  - card/note
  - topic/knowledge-islands
status: draft - May 2026
author: AI-assisted
---
```

Key points: `note_type` is the sole note-kind classifier and is constrained by the note's location; `tags` is a YAML list, never an inline string; the `status` field uses a freeform date suffix so the age of a status assessment is visible without opening the note body; `author` distinguishes human-authored, AI-authored, and collaborative notes (`AI-assisted` / `Manual` / `Mixed`).

### Folder-note structure (zone root)

Each index-carrying zone has a same-name index note at its root. The note body lists sub-areas as relative markdown links. From `Admin/Admin.md`:

```markdown
# Admin

## Overview

`Admin` is the governance and operations zone …

## Structure

`Admin` organises into two arms:

- **`Governance/`** — artefacts that define what this island IS …
- **`Operations/`** — artefacts that describe how this island RUNS …

## Contents

- [[Admin/MEMORY|MEMORY]] — root memory index: the island's active Admin content.
- [[Admin/Governance/Charter|Charter]] — island identity and adoption position.
- [[Admin/Governance/Governance|Governance]] — governance arm index.
- [[Admin/Operations/Operations|Operations]] — operations arm index.
- [[Admin/Governance/Decisions/Decisions|Decisions]] — the island's Decision Records.
```

The index note's `## Contents` list uses full-path Obsidian wikilinks with readable aliases. Each sub-folder that has a named arm (`Governance/`, `Operations/`) gets its own same-name index note, creating a navigable tree one level at a time.

### Well-structured zone layout

`ki-principal` demonstrates the five canonical zones plus the two working areas:

```text
ki-principal/
├── +/                   ← inbound working area (unsettled, not yet routed)
├── -/                   ← outbound working area (leaving the base)
├── Admin/               ← governance and operations (gated by Enactment Process)
│   ├── Admin.md         ← zone root index
│   ├── Governance/
│   └── Operations/
│       └── Activities/  ← adopted behaviours, including recurring obligations
├── Calendar/            ← time-bound records (sessions, reviews)
├── Pillars/             ← stable internal knowledge
│   ├── Pillars.md       ← zone root index
│   ├── Aesthetics/
│   ├── Philosophy/
│   └── Technē/
├── Resources/           ← reference material with external origin
└── Streams/             ← work in motion (see the Streams structure standard)
    ├── Streams.md
    └── Roadmap/
```

The working areas (`+/`, `-/`) have no zone index note; only the five canonical zones carry one. Pillar folders inside `Pillars/` match the island's topic arms — they are not fixed by the standard; what is fixed is that each carries a same-name index note at its root.

### Internal vs external link style

Internal links use the shortest unique Obsidian wikilink path, while contents lists use full paths with aliases. External links use inline markdown with descriptive anchor text; bare URLs are not written into note bodies.

```markdown
<!-- Internal — shortest unique wikilink or full path with an alias -->

See [[Charter]] for the island identity. See [[Pillars/Philosophy/Knowledge Islands|Knowledge Islands]] for the portable model.

<!-- External — descriptive anchor text -->

See the [Agent Skills standard](https://agentskills.io/) for the published spec.

<!-- Wrong — relative markdown paths are not the base's internal-note convention -->

See [Charter](Governance/Charter.md) for the island identity.
```

The `ki-repo-kb` skill writes Obsidian wikilinks inside the base while keeping its own skill documentation on relative Markdown links.

## The folded standards

Shapes for the Activity, Live Artifact and Streams standards, which came from their own skills.

### Activities

#### Slash-command activity

```yaml
---
status: active
realization: slash-command
skill: ki-repo-kb
author: AI-assisted
---
```

```markdown
# KB Audit

Runs `ki-repo-kb` AUDIT mode on demand to check the base structure against the KB standard.

Adopted because the KB grows rapidly and manual structure reviews are error-prone.
```

#### Scheduled-task activity

```yaml
---
status: active
realization: scheduled-task
schedule_name: Morning Briefing
schedule_env: scheduler
author: AI-assisted
---
```

```markdown
# Morning Briefing

Runs each working day at 06:00. Reads the calendar, active streams, and any outstanding items, then produces a briefing note in Calendar/.

Verify registration in the selected scheduling runtime. The base's Charter records the adoption position.
```

#### Conversational activity

```yaml
---
status: active
realization: conversational
author: AI-assisted
---
```

```markdown
# Weekly Review

A recurring conversation with the island custodian each Friday to review the week's captures, route outstanding notes, and update the active streams. No external artefact — invoked by the user.
```

### Live Artifacts

#### Minimal active artifact

`Admin/Operations/Live Artifacts/Status Board.md`:

```yaml
---
status: active
renders: html
author: AI-assisted
---
```

```markdown
# Status Board

| Area    | Status  | Last updated |
| ------- | ------- | ------------ |
| Streams | 2 open  | 2026-06-27   |
| Inbox   | 0 items | 2026-06-27   |
```

The paired `Status Board.html` is generated from this source and lives in the same directory.

#### Index entry

`Admin/Operations/Live Artifacts/Live Artifacts.md` entry:

```markdown
| Status Board | active | Current open streams and inbox count. |
```

#### Archived artifact

```yaml
---
status: archived
renders: html
archived: 2026-06-01
archive_reason: Replaced by the consolidated Status Board.
author: AI-assisted
---
```

### Streams

These illustrations show the KB placement contract. They do not prescribe a base's repository code, roadmap areas, topical vocabulary, or historic migration map.

#### Target structure

```text
Streams/
  Roadmap/
    _ISSUES.md
    KB-OPS-001-establish-streams-container.md
    KB-GOV-002-record-local-authority.md
Admin/
  Operations/
    Activities/
      Activities.md
      Weekly Knowledge Review.md
```

`Streams/Roadmap/` is flat. Horizon and lifecycle are frontmatter in each record, not folders. The illustrated Activity location is the default; use the base's configured `activities_dir` when different. Weekly Knowledge Review is one authoritative Activity with a `ki-work-recurring` profile; its due run becomes a linked roadmap record, not a duplicate recurring definition.

#### Legacy migration decision

| Legacy record | Deliberate destination |
| --- | --- |
| `Streams/Active/Review Practice Proposal.md` | Flat roadmap item, if it is finite forward work. |
| `Streams/Background/Monthly Review.md` | One recurring Activity in its configured collection. |
| `Streams/Dormant/Knowledge Model.md` | Canonical knowledge, if it has become settled subject matter. |

The owner confirms every classification. The legacy path never determines the new identifier or optional topical metadata.
