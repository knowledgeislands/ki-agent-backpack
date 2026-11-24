---
ki-document-type: sources@2026-11-24T04:26:02Z
ki-revised: 2026-11-24T04:26:02Z
ki-refresh: external-spec · monthly
---

# Sources — where the engineering standard comes from

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
    - [2.1.1 Upstream tools](#211-upstream-tools)
    - [2.1.2 Tool compatibility constraints](#212-tool-compatibility-constraints)
    - [2.1.3 Supported generated-artifact locations](#213-supported-generated-artifact-locations)
    - [2.1.4 In-house (the workspace convention)](#214-in-house-the-workspace-convention)
- [3. Last review](#3-last-review)

## 1. Introduction

The toolchain pins and conventions behind [the engineering standard](standard-engineering.md). Mode REFRESH reads this file, re-fetches each source, diffs it against the standard, rubric, and [canonical item catalogue](../scripts/rubric/items/index.ts), then **bumps the `last reviewed` dates** and refreshes the [Last review](#3-last-review) block below. Provenance only — what changed goes in the REFRESH commit, not a changelog here.

Two layers feed the standard: the **upstream tools** (what they require / their current versions) and the **in-house convention** (the opinionated shape the sibling repos share on top). A pin is only "upstream-driven" if it traces to a tool's release; everything else is house style.

[Back to contents](#contents)

## 2. Outside sources

The upstream tools the standard pins, the constraints between them, the locations they write to, and the in-house convention.

### 2.1 Authoritative

Each sub-group is a table of Source, Governs and Last reviewed; a tag the rubric cites opens the Source cell.

#### 2.1.1 Upstream tools

The pins the standard hard-codes. The standard pins versions in `packageManager`, `engines`, `biome.json`'s `$schema`, and the devDependency ranges. Track the current line of each so a REFRESH knows when a pin has aged; each Governs cell ends with the pin.

| Source | Governs | Last reviewed |
| --- | --- | --- |
| BUN — [Bun releases][bun] | `packageManager` and `mise` runtime line; Bun-install / Node-run split. Pinned at: harness declared and resolved `1.4.4`, adopted 2026-11-05; CONFORM scaffold `1.4.4` from 2026-11-03; graded by `DEPS-1` | 2026-11-23 |
| NODE — [Node release schedule][node] | `engines.node >= 22` for `dist/`. Pinned at: declared floor `>=22` | 2026-11-23 |
| BIOME — [Biome releases][biome] | `biome.json` schema + formatter/linter config. Pinned at: harness declared and resolved `2.6.6`; CONFORM scaffold and exemplar `$schema` `2.6.6` | 2026-11-23 |
| TS — [TypeScript releases][ts] | `tsconfig` / `tsconfig.build` compiler options. Pinned at: declared range and resolved `7.0.2` | 2026-11-23 |
| VITEST — [Vitest guide][vitest] | config-gated test profile + 100% coverage (`vitest run`, v8). Pinned at: capability-selected; upstream `5.1.1` | 2026-11-23 |
| SYNCPACK — [syncpack releases][syncpack] | package ordering inside engineering audit/conform. Pinned at: declared range and resolved `15.3.3` | 2026-11-23 |
| COMMITLINT — [Commitlint releases][commitlint] | deterministic Conventional Commit validation in the `.githooks/commit-msg` binding. Pinned at: declared range and resolved `21.2.4` | 2026-11-23 |
| MDLINT — [rumdl releases][rumdl] | Markdown audit/conform inside `ki-authoring` ❡. Pinned at: declared `^0.3.2`, resolved `0.3.2` | 2026-11-23 |
| KNIP — [knip releases][knip] | dependency + dead-code checks inside engineering audit/conform. Pinned at: declared range and resolved `6.44.2` | 2026-11-23 |
| DEPCRUISER — [dependency-cruiser releases][depcruise] | module-boundary checker in the isolated `tooling/depcruise` root (`DESIGN-2`). Pinned at: collection declares `^18.5.0` to `^18.8.0`, each with TypeScript `^6.0.3` | 2026-11-23 |

❡ The Markdown mechanical pass.

[Back to contents](#contents)

#### 2.1.2 Tool compatibility constraints

A pin is current only if every tool that consumes it supports it. A consumer that lags a pinned tool forces a workaround; record it here with the condition that retires it, so REFRESH reports both a pin bump that would break a consumer and a workaround that is no longer needed. The Source cell names the consumer and what it consumes; the Governs cell what it supports, the pin, the workaround and when it retires.

| Source | Governs | Last reviewed |
| --- | --- | --- |
| dependency-cruiser `18.9.0`, consuming the TypeScript compiler API | Consumer supports: `typescript >=2 <7 \|\| >=7.1 <8`, the 7.1 range added in [`18.8.0`][depcruise-ts7]. Pinned: `7.0.2`. Workaround: isolated `tooling/depcruise` root on TypeScript 6, installed by the root `prepare` script. Retire when: the repository moves to TypeScript 7.1, whose stable release is planned for 2026-11-24 ([7.1 plan][ts71]) | 2026-11-23 |

[Back to contents](#contents)

#### 2.1.3 Supported generated-artifact locations

These upstream locations determine whether the shared ignore contract needs an additional rule. A tool output already nested beneath an existing managed rule must not create a duplicate pattern. Each Governs cell gives the generated location and its managed coverage.

| Source | Governs | Last reviewed |
| --- | --- | --- |
| Turborepo — [Caching][turbo-cache] | Generated location: `.turbo/cache`. Managed coverage: `.turbo/` from `ki-engineering` | 2026-11-23 |
| Vite — [Shared options][vite-cache] | Generated location: `node_modules/.vite`. Managed coverage: `node_modules/` from `ki-engineering` | 2026-11-23 |

[Back to contents](#contents)

#### 2.1.4 In-house (the workspace convention)

The standard is a **deliberately selected house shape**, not a vote count. Current configured repositories and this harness's committed tool files are supporting implementation evidence; the normative rules live in the standard and its registered rubric.

| Source | Governs | Last reviewed |
| --- | --- | --- |
| HARNESS — `package.json` + `bun.lock` † | declared ranges and exact resolved versions for the canonical harness | 2026-11-23 |
| COLLECTION — current configured collection ※ | house-shape comparison during a deliberate refresh, not a normative repository count | 2026-11-23 |
| FRAMEWORK — harness rubric sources ‡ | mode, checker, judgment-status, and generated-publication contracts | 2026-11-23 |

† `package.json` expresses the compatible range where one is selected; `bun.lock` is the resolved evidence for this harness. They are distinct.

※ derive this during the current refresh from `.ki.toml` selectors; do not hard-code an inventory in this skill.

‡ `ki-skills` rubric-authoring standard and this skill's canonical item catalogue.

[bun]: https://bun.sh/blog
[node]: https://nodejs.org/en/about/previous-releases
[biome]: https://github.com/biomejs/biome/releases
[ts]: https://github.com/microsoft/typescript-go/releases
[vitest]: https://vitest.dev/
[syncpack]: https://github.com/JamieMason/syncpack/releases
[commitlint]: https://github.com/conventional-changelog/commitlint/releases
[rumdl]: https://github.com/rvben/rumdl/releases
[knip]: https://github.com/webpro-nl/knip/releases
[depcruise]: https://github.com/sverweij/dependency-cruiser/releases
[depcruise-ts7]: https://github.com/sverweij/dependency-cruiser/releases/tag/v18.8.0
[ts71]: https://github.com/microsoft/TypeScript/issues/63703
[turbo-cache]: https://turborepo.dev/docs/crafting-your-repository/caching
[vite-cache]: https://vite.dev/config/shared-options#cachedir

[Back to contents](#contents)

## 3. Last review

The latest review, on 23 November 2026, read every outside source and every in-house row, and all were reachable; no rule, default or protection needs a change. Bun `1.4.5`, Biome `2.6.8`, TypeScript `7.0.2`, Vitest `5.1.1`, syncpack `15.3.4`, Commitlint `21.2.4`, rumdl `0.3.5`, knip `6.48.0` and dependency-cruiser `18.9.0` touch no governed key; Node 26 is the latest LTS with 24 and 22 still LTS, so the `>=22` floor stands; and Turborepo and Vite still write where [2.1.3](#213-supported-generated-artifact-locations) says. HARNESS and COLLECTION were read from the lock and the local checkouts, and FRAMEWORK, the `ki-skills` rubric-authoring standard, has changed since 6 October 2026 only in format and naming.

**Watching:**

- The dependency-cruiser workaround in [2.1.2](#212-tool-compatibility-constraints), until repositories move to TypeScript 7.1.
- The harness's adoption windows for rumdl, knip, Biome, lint-staged, Bun and syncpack, the first closing on 24 November 2026 and syncpack's `15.3.4` and knip's `6.48.0` on 6 December.
- The TS row's link: repoint it to `https://github.com/microsoft/TypeScript/releases` once TypeScript 7.1 is published there; on 22 November 2026 only the 7.1 beta was.

[Back to contents](#contents)
