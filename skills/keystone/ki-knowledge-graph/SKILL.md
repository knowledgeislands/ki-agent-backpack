---
name: ki-knowledge-graph
ki-document-type: skill@2026-11-17T00:55:00Z
ki-kind: governance
ki-applicability: declaration-only
ki-guild: keystone
ki-depends-on: []
ki-shared-dependencies: [ki-skills:rubric]
description: >
  Govern knowledge graphs: Semantic Markdown cards named by readable ids, a `_graph.md` root definition, typed links
  with SKOS by default, subgraphs, layered graphs with shadow nodes, staging graphs and tending. Use to define or tend
  a graph; `ki-acquire` owns capture, the Inbox curation and dispatch, `ki-dodecakrisis` sorting and `ki-repo-kb`
  knowledge-base structure.
argument-hint: 'audit <repo> | conform <repo> | educate <repo> | tend <area> | help | refresh'
---

# Knowledge graph

Read [the knowledge-graph standard](references/standard-knowledge-graph.md) first: what every graph shares, its root definition, cards, links and subgraphs, layered graphs and shadow nodes, and then the staging graph and tending. While [the migration overlay](references/migration-knowledge-graph.md) exists, read it last; it lists temporary adjustments, and the standard wins wherever the two differ.

The skill holds the method, how a graph is defined, staged and tended; a graph itself keeps the things that are, its concepts and their relations, and a card never restates this method. Sorting before Deposit is the `ki-dodecakrisis` skill's, and faithful capture, coverage, originals and provider rules are the `ki-acquire` skill's and its provider skills'. Curating captures into cards, and dispatch, belong to the Inbox (personal.inbox), under CURATION-HOME, 19 November 2026. The folders and zones of a knowledge base, the staging base's included, are the `ki-repo-kb` skill's. Prose style is the `ki-authoring` skill's, and a receiving island's triage of what it is sent is the `ki-work next` skill's. Executable checks and importers live in the repositories that run them. The concepts the standard relies on are cards in the skill's own graph, flat in `knowledge/` and opened by [its root definition](knowledge/_graph.md), while the standard, rubric and sources stay in `references/`; read a card when the standard names its concept. The [generated rubric](references/rubric.md) holds the review criteria. This skill accepts no repository configuration properties.

## Operating modes

For `help`, `-h`, `?` or no recognised mode, explain the method, modes and off-ramps without reading or changing any card; offer a mode choice only in an interactive session.

Every mode reads first. TEND writes only in the repository whose graph it works, under the authority the work already carries.

### Mode AUDIT

Run `ki repo audit --skill ki-knowledge-graph --repo <repo>`, then review the supplied cards and graphs against the standard, recording each judgment criterion as conforming, a named gap or a justified exclusion. Missing evidence stays a named gap.

### Mode CONFORM

Run AUDIT, then `ki repo conform --skill ki-knowledge-graph --repo <repo> --dry-run`. The host may regenerate rubric publication. Propose root-definition, card front-matter and link-predicate corrections as a list; this mode does not rename, merge, split, move or delete a card.

### Mode EDUCATE

Explain the root definition, the card format, links and subgraphs, and for a staging repository the staging graph and tending, using the repository's own cards as examples. Do not change a card to demonstrate the method.

### Mode TEND

Tend one named area of a staging graph: report duplicate definitions, cards no link reaches, unqualified claims and untended shadow nodes, then propose merges, splits, renames and shadow-node pruning as a list. Make only the changes the work already authorises, each in its own commit; never prune an area's last shadow node at its touch point.

### Mode REFRESH

REFRESH writes only in the canonical `ki-agent-backpack` repository; from an installed copy, stop and redirect there. Read [the sources](references/sources.md), compare the skill's own cards, the knowledge-tending cards and actual practice in the graphs that follow the standard with the standard, then make and verify the smallest correction. When a migration item is done, delete its line, and delete the overlay once it is empty.
