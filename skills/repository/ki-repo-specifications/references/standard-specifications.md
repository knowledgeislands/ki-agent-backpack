---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T05:18:00Z
ki-status: in force
---

# KI Specifications repository-structure standard

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 Repository identity and areas](#41-repository-identity-and-areas)
  - [4.2 Commit gate](#42-commit-gate)

## 1. Introduction

The structural floor of the KI Specifications repository: its identity marker and its stable top-level areas, and its commit gate. The sources behind it are in [the sources file](sources.md).

[Back to contents](#contents)

## 2. Scope

The repository structure of `knowledgeislands/ki-specifications`.

### 2.1 In scope

- The keyless `[skills.ki-repo-specifications]` marker and the seven top-level areas.
- The Specifications repository's commit gate.

[Back to contents](#contents)

### 2.2 Out of scope

- The areas' internal layout, numbering, lifecycle and document semantics, which stay in the canonical Specifications repository.
- Universal requirements and hook existence: `ki-repo`.

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **KIP** | A deliberative proposal, kept in `proposals/`. **Standard:** this one, [4.1](#41-repository-identity-and-areas) |
| **KIS** | A normative specification document, kept in `specifications/`. **Standard:** this one, [4.1](#41-repository-identity-and-areas) |
| **Floor** | The minimal structure the checker verifies, the areas and the marker, without prescribing what lies inside them. **Standard:** this one, [4.1](#41-repository-identity-and-areas) |

[Back to contents](#contents)

## 4. Rules

The identity and areas, then the commit gate.

### 4.1 Repository identity and areas

KI Specifications is a normal Knowledge Islands repository with one additional structural identity. It declares a keyless `[skills.ki-repo-specifications]` table and exposes seven stable top-level areas:

- `proposals/` for deliberative KIPs;
- `specifications/` for normative KIS documents;
- `schemas/` for machine-readable contracts;
- `templates/` for conformant starting points;
- `examples/` for reference packages;
- `docs/` for process, decisions, roadmap, and supporting guidance;
- `tooling/` for validation guidance and later executable tooling.

This is a floor, not a frozen ontology. The checker verifies the areas and marker but does not prescribe their internal layout, numbering, lifecycle, or document semantics. Those remain in the canonical Specifications repository until experience justifies factoring a stable rule into this skill.

[Back to contents](#contents)

### 4.2 Commit gate

`ki-repo` owns whether a committed hook exists and compares it byte for byte with the canonical text ([ADR-KI-HARNESS-SKILLS-017](../../../../docs/decisions/ADR-KI-HARNESS-SKILLS-017-commit-gate-existence-and-content-are-owned-separately.md)). A Specifications repository's canonical hooks, with and without a `package.json`, are published as worked examples under [`assets/githooks/`](../assets/githooks/); copy them exactly. `GATE-1` checks that the committed `pre-commit` runs only check-only staged lints and never `ki repo audit`, `ki repo conform`, `ki repo repair`, `--fix` or `--write`. It is not applicable without a committed hook. The `ki-repo-specifications` audit, tests and builds belong to the manual gate and CI, as Kris chose COMMIT-VS-CI a) on 26 October 2026.

The skill adds only this structural delta. Coverage selects `ki-repo` separately for universal requirements such as README, LICENSE, `.gitignore`, GitHub configuration, and security settings.

[Back to contents](#contents)
