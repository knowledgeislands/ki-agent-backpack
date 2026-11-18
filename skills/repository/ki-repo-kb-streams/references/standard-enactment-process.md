---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T04:48:06Z
ki-status: in force
---

# KB change-management routing standard

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 Routing](#41-routing)
  - [4.2 Canonical change gate](#42-canonical-change-gate)
  - [4.3 Base-owned migration](#43-base-owned-migration)

## 1. Introduction

This standard records how a Knowledge Base uses shared change-management capabilities after adopting the Streams operational container. It replaces the former self-contained Enactment process.

The sources behind it are in [the sources file](sources.md).

[Back to contents](#contents)

## 2. Scope

How a Knowledge Base routes change to the shared change-management skills.

### 2.1 In scope

- Which skill owns each kind of work, and where its records sit in the base.
- The always-loaded gate on canonical change.
- What the receiving base decides in its own migration.

[Back to contents](#contents)

### 2.2 Out of scope

- The `Streams/` container's structure: the [Streams structure standard](standard-streams-structure.md).
- The record formats and lifecycles the owning skills set.

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Canonical change gate** | The rule that substantive changes to `Admin/`, `Pillars/`, or `Resources/` require explicitly approved forward work. **Standard:** this one, [4.2](#42-canonical-change-gate) |
| **Streams operational container** | A Knowledge Base's `Streams/` folder, whose operational areas hold work-management records. **Standard:** [Streams structure](standard-streams-structure.md#41-operational-container) |

[Back to contents](#contents)

## 4. Rules

Routing, the canonical change gate and the base's own migration.

### 4.1 Routing

| Need | KB location | Owner |
| --- | --- | --- |
| Finite forward work | `Streams/Roadmap/` | `ki-work-roadmap` plus `ki-work next`, `ki-work plan`, `ki-work implement`, and `ki-work accept` |
| Recurring obligation | Configured Activity collection † | `ki-repo-kb-activities` and `ki-work-recurring` |
| Cross-repository trade | Generic `+` / `-` working areas until a KB trade placement is adopted | `ki-trades` |

† Default `Admin/Operations/Activities/`; the base may bind a different `activities_dir` through `ki-repo-kb-activities`.

The roadmap record carries the shared `draft` → `ready` → `in-progress` → `awaiting-review` → `done` lifecycle. Its horizon is metadata, not a folder. A recurring Activity is the source for due runs, not a delivery-state record.

[Back to contents](#contents)

### 4.2 Canonical change gate

Substantive changes to `Admin/`, `Pillars/`, or `Resources/` require explicitly approved forward work. The base’s always-loaded instruction routes a change to the appropriate adapter and does not create a parallel generic Streams record.

[Back to contents](#contents)

### 4.3 Base-owned migration

The receiving Knowledge Base chooses its repository code, roadmap issuing areas, serial high-water marks, retained identifier map, and any topical metadata. It classifies each retained legacy stream before moving it. The shared Harness neither derives a new identity from a former Focus path nor infers historic topical membership.

[Back to contents](#contents)
