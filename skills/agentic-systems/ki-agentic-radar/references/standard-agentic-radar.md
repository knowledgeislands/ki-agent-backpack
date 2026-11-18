---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T04:35:57Z
ki-status: in force
---

# Agentic radar standard

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 Authority boundary](#41-authority-boundary)
  - [4.2 Snapshot schema](#42-snapshot-schema)
    - [4.2.1 The root](#421-the-root)
    - [4.2.2 Subjects](#422-subjects)
  - [4.3 Evidence](#43-evidence)
  - [4.4 Evidence and movement review](#44-evidence-and-movement-review)
  - [4.5 Structural distinctions](#45-structural-distinctions)
  - [4.6 Dates and refresh](#46-dates-and-refresh)

## 1. Introduction

This standard defines the portable evidence and lifecycle contract for reviewing agentic protocols, interface formats, organisations, architectural patterns, research claims, and vendor terminology. It keeps observation, maturity, implementation, interoperability, and Knowledge Islands stance separate so visibility does not silently become adoption. The sources behind it are in [the sources file](sources.md).

[Back to contents](#contents)

## 2. Scope

The agentic radar's committed snapshot and its review.

### 2.1 In scope

- The `radar.toml` snapshot's schema: subjects and evidence.
- How evidence supports maturity, implementation, interoperability, stance and movement.
- The structural distinctions the radar keeps, and dates and refresh.

[Back to contents](#contents)

### 2.2 Out of scope

- Bounded discovery: `ki-acquire pulse`; capability-specific policy: each capability's REFRESH mode.
- What a subject is: its card in `ki-agentic-systems`.
- Durable choices: Decision Records; downstream work: `ki-work next`.

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Snapshot** | The committed `radar.toml`, the radar's reviewed local state. **Standard:** this one, [4.1](#41-authority-boundary) |
| **Subject** | A protocol, interface format, organisation, incubation, architecture pattern, research claim or vendor term under review. **Standard:** this one, [4.2.2](#422-subjects) |
| **KI stance** | A subject's house ring: `adopt`, `trial`, `assess` or `hold`. **Standard:** this one, [4.2.2](#422-subjects) |
| **Evidence record** | A reviewed source with its evidence class and source role. **Standard:** this one, [4.3](#43-evidence) |

[Back to contents](#contents)

## 4. Rules

The rules, part by part.

### 4.1 Authority boundary

The committed `radar.toml` snapshot is reviewed local state. External sources support individual claims but do not override local judgment. `ki-acquire pulse` owns bounded discovery, capability REFRESH modes own capability-specific policy, Decision Records own durable choices, and `ki-work next` owns downstream work.

AUDIT is read-only. CONFORM may regenerate only the derived rubric publication. Every authored radar correction is diagnostic or guarded because changing a record can alter classification, maturity, stance, movement, or ownership.

[Back to contents](#contents)

### 4.2 Snapshot schema

The root, then the subject records.

[Back to contents](#contents)

#### 4.2.1 The root

The root contains `schema = 1`, one `reviewed_on` date, a `[subjects]` map, and an `[evidence]` map. Dates are real, non-future `YYYY-MM-DD` calendar dates. Stable identities are lower-case hyphenated strings and each record repeats its map identity in `id`.

An intentionally empty snapshot is valid while evidence is being assembled. Empty state communicates that no classification has yet been accepted; it must not be populated from memory or inference.

[Back to contents](#contents)

#### 4.2.2 Subjects

Every subject records `id`, `display_name`, `subject_kind`, `stewardship`, `specification_maturity`, `implementation_state`, `interoperability_state`, `ki_stance`, `movement`, `owner`, `uncertainty`, `return_trigger`, `reviewed_on`, `evidence`, and `counter_evidence`, and may record `card`.

- `subject_kind` is `protocol`, `interface-format`, `organisation`, `incubation`, `architecture-pattern`, `research-claim`, or `vendor-term`.
- `stewardship` is `standards-body`, `foundation`, `consortium`, `vendor`, `community`, `project`, or `none`.
- `specification_maturity` is `not-applicable`, `proposal`, `draft`, `incubating`, `versioned`, `stable`, or `deprecated`.
- `implementation_state` is `none`, `reference-only`, `single-implementation`, or `multiple-independent`.
- `interoperability_state` is `untested`, `claimed`, `demonstrated`, or `conformance-tested`.
- `ki_stance` is `adopt`, `trial`, `assess`, or `hold`.
- `movement` is `new`, `inward`, `outward`, or `unchanged`; it describes the current review, not maturity.
- `owner`, `uncertainty`, and `return_trigger` are explicit non-empty strings. An owner is accountable for the next review; it is not necessarily the subject steward.
- `card` is optional: the id of the card in `ki-agentic-systems` that says what the subject is, such as `spec.mcp`. The radar says how mature a subject is, who has adopted it and the house stance, and never defines the subject again; a subject whose term has a card names it here, and one without a card yet leaves the field out. Where the backpack holds `ki-agentic-systems` beside the radar, the named card must exist in its `knowledge/` graph, found in any of its subgraph folders.

An `architecture-pattern`, `research-claim`, or `vendor-term` uses `not-applicable` specification maturity. It must not be described as a formal standard. An `organisation` can steward work but does not itself gain specification maturity.

`versioned`, `stable`, or `deprecated` maturity requires primary normative-text evidence. A `stable` subject also requires governance-release evidence. These checks establish minimum support, not sufficient judgment.

`reference-only` requires reference-implementation evidence. `single-implementation` requires reference or independent implementation evidence. `multiple-independent` requires at least two distinct independent-implementation evidence records. `demonstrated` interoperability requires interoperability-demonstration evidence, while `conformance-tested` requires conformance-demonstration evidence.

An inward movement cannot accompany Hold. An outward movement cannot accompany Adopt. Adopt or Trial requires local-evaluation evidence for a concrete Knowledge Islands use case. Mechanical consistency never decides whether movement is wise.

[Back to contents](#contents)

### 4.3 Evidence

Every evidence record carries `id`, `title`, `url`, `evidence_class`, `source_role`, `reviewed_on`, and `notes`.

`evidence_class` is one of:

- `normative-text`
- `governance-release`
- `reference-implementation`
- `independent-implementation`
- `conformance-demonstration`
- `interoperability-demonstration`
- `operational-adoption`
- `local-evaluation`
- `research`
- `vendor-claim`

`source_role` is `primary`, `corroborating`, `discovery`, or `counter-evidence`.

A vendor claim cannot be primary evidence. Discovery evidence cannot directly support a subject classification. Counter-evidence records appear only in `counter_evidence`; they do not appear in supporting `evidence`. A supporting record cannot declare the counter-evidence role. Provider or steward claims may identify a release or normative text, but their performance and adoption claims remain corroborating until independently demonstrated.

Every evidence and counter-evidence identity resolves exactly once. Lists contain no duplicates, and one record cannot appear in both lists for the same subject.

[Back to contents](#contents)

### 4.4 Evidence and movement review

Consequential claims require evidence applicable to the precise subject and claim:

- Normative text supports specification identity and wording, not implementation or interoperability.
- A reference implementation shows an intended implementation path, not independent adoption.
- Multiple packages under one steward do not prove multiple independent implementations.
- Conformance testing and interoperability demonstrations are stronger than compatibility claims but remain bounded to their published scope.
- Operational adoption indicates use, not fitness for Knowledge Islands.
- Local evaluation supports a named Knowledge Islands use case and must retain constraints and negative results.

Provider claims alone cannot justify inward movement. Trial or Adopt requires local evidence. Material uncertainty and counter-evidence remain visible even when stance moves inward.

[Back to contents](#contents)

### 4.5 Structural distinctions

The radar keeps recurring structures distinct without turning them into formal standards:

- An **agent loop** repeats observation, decision, action, and feedback within one control loop.
- A **branching supervisor tree** delegates control down an ownership hierarchy and returns results upward.
- **Graph-orchestrated control flow** represents executable dependencies, branches, joins, or state transitions as a graph.
- A **knowledge graph** represents entities and semantic relationships as stored knowledge; it does not imply executable control flow.
- A **provenance graph** represents evidence lineage and derivation; it does not imply semantic knowledge or agent orchestration.

One system may contain several structures. Classification names the aspect being evaluated rather than collapsing them under the word “graph”.

[Back to contents](#contents)

### 4.6 Dates and refresh

The snapshot and every record carry a review date. Reviews older than 9 days warn: the seven-day cadence has elapsed plus two days of operational grace, without invalidating historical evidence. REFRESH runs weekly or when a recorded return trigger fires, including a new specification version, governance transfer, independent implementation, conformance result, interoperability demonstration, material operational adoption, deprecation, or locally relevant use case.

REFRESH is bounded to current subjects and explicit return triggers. It creates no standing inbox and routes material consequences through the owning process.

[Back to contents](#contents)
