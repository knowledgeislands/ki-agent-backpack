---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-23T01:50:00Z
ki-status: in force
---

# Radar standard

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 One radar, two subject kinds](#41-one-radar-two-subject-kinds)
  - [4.2 Snapshots](#42-snapshots)
  - [4.3 Evidence](#43-evidence)
  - [4.4 Dates and cadence](#44-dates-and-cadence)
  - [4.5 REFRESH](#45-refresh)
  - [4.6 Movement and adoption](#46-movement-and-adoption)

## 1. Introduction

This standard holds what `ki-radar`'s two subject kinds share: one authority boundary, one evidence core, one monthly cadence, one REFRESH and one adoption boundary. Each subject kind keeps its own standard and snapshot intact: [the agentic-radar standard](standard-agentic-radar.md) and `agentic-radar.toml` for agentic protocols, interfaces, organisations, architectures, research and vendor terms, and [the model-radar standard](standard-model-radar.md) and `model-radar.toml` for models, executable routes and benchmarks, with [the model-tier standard](standard-model-tiers.md) beside it. Kris merged the two radars on 22 November 2026 under RADAR-MERGE a; the sources behind it are in [the sources file](sources.md).

[Back to contents](#contents)

## 2. Scope

What both subject kinds share; anything that is only one kind's stays in that kind's standard.

### 2.1 In scope

- Which standard and snapshot govern which subject kind.
- The evidence record's shared core and each kind's classification fields.
- Dates, freshness and the monthly cadence; the one REFRESH and its return triggers.
- The adoption boundary both kinds keep.

[Back to contents](#contents)

### 2.2 Out of scope

- Each kind's record schema, vocabularies and review rules: its own standard.
- Bounded discovery: `ki-acquire pulse`; what a subject is: its card in `ki-agentic-ecosystems`.
- Portable model purposes: `ki-env-tokenomics`; runtime configuration: the runtime adapters.
- Durable choices: Decision Records; downstream work: `ki-work next`.

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Subject kind** | One of the radar's two kinds of reviewed thing, agentic or model, each with its own standard and snapshot. **Standard:** this one, [4.1](#41-one-radar-two-subject-kinds) |
| **Snapshot** | A subject kind's committed TOML file, `agentic-radar.toml` or `model-radar.toml`, its reviewed local state. **Standard:** this one, [4.2](#42-snapshots) |
| **Evidence core** | The fields every evidence record carries, whichever snapshot holds it. **Standard:** this one, [4.3](#43-evidence) |
| **Return trigger** | A recorded event that brings a subject back for review before the next monthly REFRESH. **Standard:** this one, [4.5](#45-refresh) |

[Back to contents](#contents)

## 4. Rules

The rules both subject kinds share, part by part.

### 4.1 One radar, two subject kinds

`ki-radar` reviews two subject kinds. An agentic subject is a protocol, interface format, organisation, incubation, architecture pattern, research claim or vendor term; a model subject is a model, an executable model-agent route or a benchmark. A subject belongs to one kind only, and its kind's standard governs its schema, vocabularies and review rules.

The committed snapshots are reviewed local state. External sources support individual claims but do not override local judgment. AUDIT is read-only, and CONFORM may regenerate only the derived rubric publication: every authored radar correction is diagnostic or guarded, because changing a record can alter classification, maturity, stance, recommendation, support, retirement or ownership.

[Back to contents](#contents)

### 4.2 Snapshots

Each subject kind has one snapshot in `references/`: `agentic-radar.toml` under [the agentic-radar standard's schema](standard-agentic-radar.md#42-snapshot-schema) and `model-radar.toml` under [the model-radar standard's schema](standard-model-radar.md#42-snapshot-schema). Both are schema 1 TOML with a root `reviewed_on`, stable lower-case hyphenated identities repeated exactly in their records, and no keys their standard does not declare. An agentic subject's `owner` names the skill or actor answerable for it; the radar's own subjects name `ki-radar`.

[Back to contents](#contents)

### 4.3 Evidence

Every evidence record, in either snapshot, carries the evidence core: `id`, `title`, an HTTP(S) `url`, `reviewed_on` and `notes`, optional on a model record. Each kind then classifies the record its own way, and the two classifications stay distinct rather than being forced into one vocabulary:

- An agentic record adds `evidence_class` and `source_role`, under [the agentic-radar standard](standard-agentic-radar.md#43-evidence).
- A model record adds `unit` and `independence`, under [the model-radar standard](standard-model-radar.md#425-evidence).

Both kinds keep the same evidence rules. Every evidence and counter-evidence reference resolves to exactly one record, and no list repeats one. Counter-evidence stays visible rather than averaged away. A provider's or steward's claim may establish identity, release, access, licence, pricing or lifecycle, but its performance and adoption claims stay corroborating until independently shown, and never decide an inward move.

[Back to contents](#contents)

### 4.4 Dates and cadence

All dates are real `YYYY-MM-DD` calendar values, and neither snapshot nor any record is future-dated. The radar is reviewed monthly, matching how it is run (RADAR-MERGE a). A review older than 35 days, a month of 31 days plus four days of operational grace, warns; elapsed time alone does not invalidate historical evidence.

[Back to contents](#contents)

### 4.5 REFRESH

One REFRESH covers both subject kinds. It writes only this skill's canonical files in `ki-agent-backpack`; from an installed copy it stops and redirects there. It reads [the tracked sources](sources.md), gathers bounded current evidence for current subjects and their return triggers, reconciles it with both snapshots and the model-tier tables, and proposes reviewed changes. If the last review is within the month and no trigger fired, it confirms before forcing an early run.

A return trigger fires REFRESH early for the subjects it names. Each subject kind's standard lists its own, such as a new specification version or a material model release or deprecation. `ki-acquire pulse` hands the radar its signals this way: when PULSE's verdict is to act on an agentic or model signal, that act fires this REFRESH's return trigger rather than editing a snapshot itself (PULSE-BOUNDARY).

REFRESH creates no standing inbox. It routes material consequences to the owning capability's REFRESH mode, a Decision Record or `ki-work next`, and never mutates a consumer directly.

[Back to contents](#contents)

### 4.6 Movement and adoption

Observation never silently becomes adoption. Inward movement needs current identity and lifecycle evidence, materially independent evaluation where it exists, and local-fit evidence proportional to the recommendation: Trial or Adopt, for either kind, needs a concrete Knowledge Islands use case and local evidence. Material uncertainty and counter-evidence stay visible even when a subject moves inward. The radar informs decisions; it does not rank automatically, install integrations, change runtime defaults, buy access or transmit private material.

[Back to contents](#contents)
