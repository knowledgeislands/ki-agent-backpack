---
ki-document-type: standard@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T04:45:07Z
ki-status: in force
---

# Knowledge Islands website core standard

## Contents

- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
  - [2.1 In scope](#21-in-scope)
  - [2.2 Out of scope](#22-out-of-scope)
- [3. Terms and definitions](#3-terms-and-definitions)
- [4. Rules](#4-rules)
  - [4.1 Selection](#41-selection)
  - [4.2 Site selection](#42-site-selection)
  - [4.3 Build seam](#43-build-seam)
  - [4.4 Ownership](#44-ownership)

## 1. Introduction

The generator- and provider-neutral contract every Knowledge Islands website shares: which purpose-specific implementation it selects, which site root it builds, and the `dist/` and `ki:site:*` seam between the implementation and any hosting adapter. The sources behind it are in [the sources file](sources.md).

[Back to contents](#contents)

## 2. Scope

The website core: implementation selection, site selection and the build seam.

### 2.1 In scope

- Selecting exactly one purpose-specific implementation.
- Single-site `site-root` and the named multi-site registry.
- The generated `dist/` and the root `ki:site:build`, `ki:site:dev` and `ki:site:clean` aliases.
- What the core owns, and the hooks a website copies.

[Back to contents](#contents)

### 2.2 Out of scope

- What the selected package's commands run: `ki-repo-website-content` or `ki-repo-website-app`.
- How `dist/` is published: a hosting adapter such as `ki-repo-website-cloudflare`.
- Turborepo adoption and the toolchain: `ki-engineering`.

[Back to contents](#contents)

## 3. Terms and definitions

| Term | Definition |
| --- | --- |
| **Purpose-specific implementation** | `ki-repo-website-content` for a page collection or `ki-repo-website-app` for one interactive browser application, exactly one of which a website declares. **Standard:** this one, [4.1](#41-selection) |
| **Site root** | The selected site's directory, `apps/site` by default, set by `site-root` or a named registry. **Standard:** this one, [4.2](#42-site-selection) |
| **Primary site** | The named site, in multi-site mode, that the unqualified `ki:site:*` aliases serve. **Standard:** this one, [4.2](#42-site-selection) |
| **Build seam** | The generated `dist/` at the site root and the three public root aliases that build, develop and clean it. **Standard:** this one, [4.3](#43-build-seam) |

[Back to contents](#contents)

## 4. Rules

The rules, part by part: selection, site selection, the build seam and ownership.

### 4.1 Selection

Every governed website declares `[skills.ki-repo-website]` and exactly one purpose-specific implementation:

- `[skills.ki-repo-website-content]` for a page collection generated from Markdown and data.
- `[skills.ki-repo-website-app]` for one interactive browser application.

The two implementations are mutually exclusive. Hosting is independent and composes with either.

[Back to contents](#contents)

### 4.2 Site selection

The site-root rules below define single-site mode. Multi-site mode is explicit and mutually exclusive with `site-root`:

```toml
[skills.ki-repo-website]
primary-site = "apex"

[skills.ki-repo-website.sites]
apex = "apps/site-apex"
tower = "apps/site-tower"
```

Site names use lower-kebab-case. Every root is unique, safe, repository-relative, and a physical directory; `primary-site` names exactly one declared site. Implementation and hosting overlays apply to every named site by default. An overlay may select a non-empty, duplicate-free subset of known names with `sites = ["apex"]`; it never declares paths. Every selected site receives its own attributed evidence. Conform never infers or creates a named registry.

Configuration-producing modes MUST keep the `apps/site` default implicit: leave `[skills.ki-repo-website]` keyless and write `site-root` only for an override. Audit diagnoses an explicit `site-root = "apps/site"` as a redundant default and asks the owner to remove the key; omission preserves the same selected root.

`[skills.ki-repo-website]` is the single owner of `site-root`. Omission selects `apps/site`, the canonical application workspace. An explicit `site-root = "."` selects the repository root; any other override is a canonical safe relative path without empty, current-directory, parent-directory, backslash, drive, or absolute components. Implementation and hosting tables remain keyless and consume this selection rather than restating it.

The selected site root owns the implementation package manifest, implementation configuration, source entry, ordinary lifecycle scripts, generated output, and hosting configuration. The repository root package manifest owns the public `ki:site:*` aliases. The selection never permits filesystem reads outside the repository.

[Back to contents](#contents)

### 4.3 Build seam

The public `ki:site:*` alias has three auditable terminal forms: the exact selected-package command, one exact `self:site:<primary>:<verb>` hop to that command, or exact `turbo run <task>` delegation when root `turbo.json` declares the matching task (`build`, `ki:site:dev`, or `clean`). Turborepo adoption and task-graph quality remain owned by `ki-engineering`; this seam checks only that the named task exists and matches the public verb. Direct `--cwd` command chains, undeclared or mismatched tasks, additional shell commands, missing aliases, and cyclic forwarding remain invalid.

The selected implementation generates `dist/` at its site root: `apps/site/dist/` by default and `dist/` for an explicit flat repository. Generated output is ignored by Git and recreated by the build.

The repository root `package.json` exposes public aliases that delegate to the selected site package:

- `ki:site:build` — delegate to the selected package's `build` script and generate production `dist/`.
- `ki:site:dev` — delegate to the selected package's same `ki:site:dev` key; an explicit flat site root implements development directly because root and selected package are the same manifest.
- `ki:site:clean` — delegate to the selected package's `clean` script and remove generated output.

Those three aliases are the complete root capability-owned lifecycle seam. The selected implementation skill validates package-local `ki:site:dev`; content-specific `ki:site:dev:css` and `ki:site:dev:serve` remain inside that package and are not additional root claims.

The implementation skill verifies the selected package's command semantics. A hosting adapter consumes the selected root's `dist/` and must not infer the generator.

In multi-site mode the unqualified root `ki:site:*` aliases remain the public seam for the primary site. A public alias may contain its exact terminal command or exactly `bun run self:site:<primary>:<verb>` when that repository-owned script contains the exact terminal command. Missing, mismatched, chained, or cyclic forwarding fails. Named `self:site:<site>:<verb>` scripts for secondary sites remain optional repository-owned operations and do not expand the public seam.

[Back to contents](#contents)

### 4.4 Ownership

This core owns implementation selection, `site-root`, and the build-output/lifecycle seam only. It adds no hook content: a website's canonical hooks are the `ki-repo` frame with the `ki-engineering` package lines or the `ki-authoring` staged-Markdown line, published as worked examples under [`assets/githooks/`](../assets/githooks/); copy them exactly, since `ki-repo` HOOK-4 compares each hook byte for byte ([ADR-KI-HARNESS-SKILLS-017](../../../../docs/decisions/ADR-KI-HARNESS-SKILLS-017-commit-gate-existence-and-content-are-owned-separately.md)). The build stays out of the hook. It does not choose Eleventy, React, a CSS stack, a host, DNS provider, or server-side code.

[Back to contents](#contents)
