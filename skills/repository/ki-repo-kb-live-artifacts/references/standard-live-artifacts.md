---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T04:46:21Z
ki-status: in force
---

# Live Artifact standard

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 Placement and pairing](#41-placement-and-pairing)
  - [4.2 Frontmatter](#42-frontmatter)
  - [4.3 Index](#43-index)
  - [4.4 Render freshness](#44-render-freshness)
  - [4.5 What the checker may change](#45-what-the-checker-may-change)

## 1. Introduction

The contract for Live Artifacts in a Knowledge Islands base: where they live, their Markdown source and HTML render, their frontmatter and index, how fresh a render must be, and what the checker may repair. The sources behind it are in [the sources file](sources.md).

[Back to contents](#contents)

## 2. Scope

A base's Live Artifacts collection.

### 2.1 In scope

- The collection's location and the pairing of each source with its render.
- A source's required frontmatter.
- The index note and its descriptions.
- The render freshness threshold.
- The checker's safe repairs and what it must not do.

[Back to contents](#contents)

### 2.2 Out of scope

- The `Admin/Operations/` zone that hosts the collection: `ki-repo-kb`.
- The Markdown style of a source: `ki-authoring`.
- Generating renders.

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Live Artifact** | An intentionally mutable operational document held below `Admin/Operations/Live Artifacts/`, with a Markdown source and an HTML render. **Standard:** this one, [4.1](#41-placement-and-pairing) |
| **Source** | An artifact's authoritative Markdown file. **Standard:** this one, [4.1](#41-placement-and-pairing) |
| **Render** | An artifact's co-located HTML file with the same stem as its source. **Standard:** this one, [4.1](#41-placement-and-pairing) |
| **Index** | `Live Artifacts.md`, which lists the sources with a useful one-line description. **Standard:** this one, [4.3](#43-index) |

[Back to contents](#contents)

## 4. Rules

Placement, frontmatter, the index, render freshness and the checker's repairs.

### 4.1 Placement and pairing

Live Artifacts are intentionally mutable operational documents held below `Admin/Operations/Live Artifacts/` in a Knowledge Islands base.

Each artifact has a Markdown source and a co-located HTML render with the same stem.

[Back to contents](#contents)

### 4.2 Frontmatter

The Markdown source is authoritative and carries frontmatter with `status`, `renders`, and `author`.

The status is `active` or `archived`; `renders` includes `html`.

[Back to contents](#contents)

### 4.3 Index

When artifact sources exist, `Live Artifacts.md` indexes them with a useful one-line description.

Index presence is a warning-level mechanical requirement. A source name omitted from an existing index is informational mechanical evidence that may be repaired with a placeholder entry; whether each description is useful remains a judgment check.

[Back to contents](#contents)

### 4.4 Render freshness

The HTML render must not lag its Markdown source by more than the configured threshold, which defaults to 24 hours.

[Back to contents](#contents)

### 4.5 What the checker may change

The checker may propose creating or appending unambiguous index entries and adding a missing `renders: html` value to an existing frontmatter block. The host validates and publishes the resulting shared-session proposal.

It must not generate renders, delete orphaned files, choose an artifact status, or write judgmental descriptions.

[Back to contents](#contents)
