---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T04:26:43Z
ki-status: in force
---

# ChatGPT acquisition standard

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 Readable source](#41-readable-source)
  - [4.2 Coverage and end point](#42-coverage-and-end-point)
  - [4.3 Routing](#43-routing)
  - [4.4 Fidelity](#44-fidelity)
  - [4.5 Source retirement](#45-source-retirement)

## 1. Introduction

This standard adds ChatGPT's coverage and capability rules to the `ki-acquire` common contract. A capture is the digest the receiving repository's capture route writes from an accessible conversation, or a full-thread snapshot when one is requested. The capture is the only record: keep no checkpoint, mark file, intake receipt or conversation index beside it.

The sources and decisions behind these rules are in [the sources file](sources.md).

[Back to contents](#contents)

## 2. Scope

What this provider standard adds to the common contract, and what it leaves to others.

### 2.1 In scope

- The readable source a capture may be taken from.
- A capture's coverage, its end point and its linked segments.
- Routing a capture to a territory.
- Fidelity of what a capture preserves.
- The gate on archiving or deleting a conversation.

[Back to contents](#contents)

### 2.2 Out of scope

- The source-independent capture contract, curation and dispatch: `ki-acquire`'s common acquisition standard.
- Commands, flags and defaults of the executable bridge: the Inbox's `ki-muninn` README.
- Local paths and publication authority: the receiving repository's guides.

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Capture** | The digest the receiving repository's capture route writes from an accessible conversation, or a requested full-thread snapshot; the only record. **Standard:** this one, [1](#1-introduction) |
| **End point** | The inclusive last substantive message a capture covers, recorded in its README front matter. **Standard:** this one, [4.2](#42-coverage-and-end-point) |
| **Linked segment** | A later dated capture covering only new substantive knowledge after the previous end point. **Standard:** this one, [4.2](#42-coverage-and-end-point) |

[Back to contents](#contents)

## 4. Rules

The rules, part by part.

### 4.1 Readable source

Capture only conversation text the runtime can actually read, or an official account export kept outside Git. Opaque local-store records, interface titles, browser scraping and undocumented private APIs are never conversation content. The executable bridge, the Inbox's `ki-muninn chatgpt import` and `chatgpt export`, checks one user-prepared readable capture and writes it as a Knowledge Export Package; it contacts no provider and claims nothing more. An account export is a bounded snapshot, not proof of complete project membership.

[Back to contents](#contents)

### 4.2 Coverage and end point

A first capture digests the thread through its last substantive message before the request. A later capture covers only new substantive knowledge strictly after the previous end point, as a dated linked segment; a request repetition or capture administration is not new knowledge. A full-thread snapshot is a new linked capture, never an overwrite of an earlier digest.

The digest's README front matter records the end point: the inclusive last substantive message, with its message ID, timestamp or an exact distinctive excerpt as available, together with the capture scope, sequence and previous capture. On retry, read that front matter: an unchanged complete capture is a no-op, a partial one is finished in place, and new material starts the next segment. A filename or date alone is not an end point; an ambiguous boundary stops for resolution.

[Back to contents](#contents)

### 4.3 Routing

Route from the project name, conversation evidence and territory context. A project name establishes intent but is not authority on its own; an unknown or conflicting route stays visible for review rather than defaulting to any territory. Renaming a project never re-routes earlier captures.

[Back to contents](#contents)

### 4.4 Fidelity

Preserve reasoning, decisions, actions, assumptions, uncertainties and the owner's corrections in proportion to the material, keeping source statements, assistant hypotheses and verified findings distinct. Record thread start, last message and capture dates separately and only to evidenced precision; unknown stays unknown. Quote only exact accessible words. Preserve required attachments as exact originals under the common contract, and list omitted ones. Never fabricate timestamps, messages or public URLs from internal identifiers.

[Back to contents](#contents)

### 4.5 Source retirement

Acquisition is read-only. Archiving or deleting a ChatGPT conversation needs a separate, current manual-release decision with the capture verified at a named Git revision and immediate human approval; capture success never authorises deletion.

[Back to contents](#contents)
