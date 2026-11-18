---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T04:34:53Z
ki-status: in force
---

# Model radar standard

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 Authority and boundary](#41-authority-and-boundary)
  - [4.2 Snapshot schema](#42-snapshot-schema)
    - [4.2.1 The root](#421-the-root)
    - [4.2.2 Models](#422-models)
    - [4.2.3 Executable routes](#423-executable-routes)
    - [4.2.4 Benchmarks](#424-benchmarks)
    - [4.2.5 Evidence](#425-evidence)
  - [4.3 Dates and freshness](#43-dates-and-freshness)
  - [4.4 Evidence and movement review](#44-evidence-and-movement-review)

## 1. Introduction

This standard defines a portable evidence and lifecycle contract for reviewing language models and executable model-agent routes. It separates identity, route support, recommendation, retirement, benchmark applicability, and evidence so that no single score silently becomes policy. The sources behind it are in [the sources file](sources.md).

[Back to contents](#contents)

## 2. Scope

The model radar's committed snapshot and its review.

### 2.1 In scope

- The `radar.toml` snapshot's schema: models, executable routes, benchmarks and evidence.
- Dates, freshness and the refresh cadence.
- How evidence and recommendation movement are reviewed.

[Back to contents](#contents)

### 2.2 Out of scope

- Bounded discovery: `ki-acquire pulse`.
- Portable purpose categories: `ki-env-tokenomics`; runtime configuration: the runtime adapters.
- Downstream work adoption: `ki-work next`.

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Snapshot** | The committed `radar.toml`, the radar's structured current state. **Standard:** this one, [4.1](#41-authority-and-boundary) |
| **Executable route** | A model reached through a named agent, protocol and access, with its own recommendation and support. **Standard:** this one, [4.2.3](#423-executable-routes) |
| **Recommendation** | A route's ring: `adopt`, `trial`, `assess` or `hold`. **Standard:** this one, [4.2.3](#423-executable-routes) |
| **Evidence record** | A reviewed source with its unit and independence, referenced by models, routes and benchmarks. **Standard:** this one, [4.2.5](#425-evidence) |

[Back to contents](#contents)

## 4. Rules

The rules, part by part.

### 4.1 Authority and boundary

The committed `radar.toml` snapshot is the structured current state. External sources support individual claims but do not override reviewed local judgment. `ki-acquire pulse` owns bounded discovery, `ki-env-tokenomics` owns portable purpose categories, runtime adapters own runtime configuration, and `ki-work next` owns downstream work adoption.

AUDIT is read-only. CONFORM may regenerate only the derived rubric publication. Every change to authored radar state remains diagnostic or guarded because correcting a record can change recommendation, support, or retirement meaning.

[Back to contents](#contents)

### 4.2 Snapshot schema

The root, then each of the four record tables.

[Back to contents](#contents)

#### 4.2.1 The root

The root contains `schema = 1`, one `reviewed_on` ISO calendar date, and exactly four map tables: `models`, `routes`, `benchmarks`, and `evidence`. Each record key is its stable lower-case hyphenated identity and each record repeats that value in `id`. Stable identities do not encode a recommendation or lifecycle state.

[Back to contents](#contents)

#### 4.2.2 Models

A model records `id`, `display_name`, `provider`, `openness`, `license`, `retirement`, `reviewed_on`, `evidence`, and `counter_evidence`.

- `openness` is `proprietary`, `open-weight`, or `open-source-ai-definition`. It applies to the exact variant; family association is not evidence.
- `retirement` is `active`, `retiring`, or `retired`.
- `license` is the exact reviewed licence name or identifier, not a generic open/proprietary label.

[Back to contents](#contents)

#### 4.2.3 Executable routes

A route records `id`, `model`, `agent`, `protocol`, `access`, `locality`, `recommendation`, `support`, `movement`, `reviewed_on`, `evidence`, and `counter_evidence`.

- `access` is `vendor-api`, `gateway-api`, `subscription-agent`, or `self-hosted`.
- `locality` is `laptop`, `workstation`, `server`, `cluster`, or `unavailable`. A self-hosted route still names its practical locality.
- `recommendation` is `adopt`, `trial`, `assess`, or `hold`.
- `support` is `default`, `available`, `evaluation`, or `not-integrated`.
- `movement` is `new`, `inward`, `outward`, or `unchanged` and describes the current review, not maturity.

`default` support requires `adopt`; a default route cannot use a retiring or retired model. A route for a retired model must be `not-integrated` and `hold`. These checks expose contradictions but do not choose the repair.

[Back to contents](#contents)

#### 4.2.4 Benchmarks

A benchmark records `id`, `display_name`, `owner`, `unit`, `domain`, `metric`, `constraints`, `reproducibility`, `risks`, `run_cost`, `applicability`, `lifecycle`, `published_on`, `data_as_of`, `reviewed_on`, `evidence`, and optional `successor`.

- `unit` is `bare-model`, `provider-endpoint`, `model-agent`, or `task-environment`.
- `applicability` is `primary`, `corroborating`, `discovery`, or `not-applicable`.
- `lifecycle` is `current`, `watch`, or `retired`.

A retired benchmark is `not-applicable` and may name an existing successor. A current benchmark cannot be `not-applicable`. Publication and data dates remain distinct so old data beneath a recently edited page stays visible.

[Back to contents](#contents)

#### 4.2.5 Evidence

An evidence record contains `id`, `title`, `url`, `unit`, `independence`, and `reviewed_on`, plus optional `notes`.

- `unit` uses the same vocabulary as benchmark units.
- `independence` is `provider`, `independent`, or `local`.

Every evidence or counter-evidence reference resolves to one evidence record. Counter-evidence is retained rather than averaged away. Provider evidence may establish identity, access, licence, pricing, and lifecycle, but provider-reported performance alone cannot justify inward recommendation movement.

[Back to contents](#contents)

### 4.3 Dates and freshness

All dates use real `YYYY-MM-DD` calendar values. The snapshot and each record must not be future-dated. REFRESH runs weekly, or earlier when a material release or deprecation warrants it. A review older than 9 days warns: the seven-day cadence has elapsed plus two days of operational grace, but elapsed time alone does not invalidate historical evidence.

[Back to contents](#contents)

### 4.4 Evidence and movement review

Mechanical validity is only the floor. Reviewers determine whether:

- the evidence evaluates the declared unit and use case;
- materially independent sources corroborate consequential claims where available;
- cost, latency, context, privacy, licence, route availability, and feasible hardware remain visible;
- a trial or adoption has local-fit evidence from public or synthetic work proportional to its consequence; and
- the rationale preserves material uncertainty and counter-evidence.

No benchmark or composite score is universally authoritative. Results from unlike units may corroborate one another but must not be numerically merged without an explicit defensible method.

[Back to contents](#contents)
