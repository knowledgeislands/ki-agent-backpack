---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T04:45:05Z
ki-status: in force
---

# Receiver triage of acquired packets

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 Delivery](#41-delivery)
  - [4.2 Intake handling](#42-intake-handling)
  - [4.3 Receiver authority](#43-receiver-authority)

## 1. Introduction

How a Knowledge Base receives a packet the acquire port delivers into a territory principal's `+/_ACQUIRED/`: what the delivery holds, how the receiver handles it, and what the receiver may and may not do with it. The decisions behind these rules are in [the sources file](sources.md).

[Back to contents](#contents)

## 2. Scope

The receiver's handling of delivered acquired packets.

### 2.1 In scope

- What a delivery into `+/_ACQUIRED/` holds and when it is accepted.
- The receiver's intake handling: filing, turning into work or parking.
- What the receiver writes, records and leaves alone.

[Back to contents](#contents)

### 2.2 Out of scope

- The knowledge dispositions of each AI session: the [common acquisition receiver-local triage rule](../../../keystone/ki-acquire/references/standard-acquisition.md#48-receiver-local-triage) in `ki-acquire`.
- The exact scaffold README of `+/_ACQUIRED/`: `ki-repo-kb-principal`, while that overlay is declared.

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Delivery** | A folder in `+/_ACQUIRED/` holding one whole capture package or a roll-up of whole packages. **Standard:** this one, [4.1](#41-delivery) |
| **Intake handling** | The receiver's choice of where a packet goes or what work follows: file it, turn it into work, or park it. **Standard:** this one, [4.2](#42-intake-handling) |
| **Knowledge disposition** | What happened to the knowledge in each AI session. **Standard:** [common acquisition standard](../../../keystone/ki-acquire/references/standard-acquisition.md#48-receiver-local-triage) |

[Back to contents](#contents)

## 4. Rules

The rules, part by part.

### 4.1 Delivery

A delivery into a territory principal's `+/_ACQUIRED/` is accepted on delivery. Each delivery folder contains one whole capture package or a roll-up of whole packages, preserving original names and bytes without an extra manifest, dispatch ID or ledger. The acquire port alone delivers packets; the receiver owns what happens to their local copies afterwards. `ki-repo-kb-principal` owns the exact scaffold README while that overlay is declared.

[Back to contents](#contents)

### 4.2 Intake handling

Choose the packet’s intake handling under the receiver’s local governance. This decides where it goes or what work follows; the [common acquisition receiver-local triage rule](../../../keystone/ki-acquire/references/standard-acquisition.md#48-receiver-local-triage) separately records what happened to the knowledge in each AI session: harvested, retained as source evidence, routed onward or no residual knowledge. Intake handling alone proves none of those outcomes. A partial session keeps its coverage gap and cannot be marked fully triaged or as containing no residual knowledge.

- **File the packet:** preserve the original package and its provenance when filing it in the appropriate local knowledge area. Any derived canonical knowledge follows the base's normal adoption and Enactment rules; delivery alone does not make it canonical.
- **Turn it into work:** use the receiver's selected work adapter and normal capture, selection and approval rules. Keep a source link to the packet; delivery does not automatically adopt work, make it Ready or authorise implementation.
- **Park it:** retain the packet locally in `+/_ACQUIRED/` until the receiver can triage it. Parking needs no invented manifest, dispatch ledger or receipt written into the packet.

[Back to contents](#contents)

### 4.3 Receiver authority

Write nothing back into the acquire port. Handle a misdelivered packet case by case under receiver authority; there is no `returned <reason>` mark or automatic return route. Record session dispositions and their evidence in a labelled receiver-triage section of the package’s existing README or capture document under the common rule; do not alter preserved source text, provenance, filenames or original bytes. A parked packet needs no extra marker or document, and may remain unreviewed with its gaps visible. Triage does not grant permission to delete originals, rewrite preserved source material or dispatch into another repository. Any later trade follows its own authority and intake rules.

[Back to contents](#contents)
