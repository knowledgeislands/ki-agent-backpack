---
ki-document-type: sources@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T04:45:33Z
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
- [3. Decisions](#3-decisions)
- [4. Last review](#4-last-review)

## 1. Introduction

The toolchain pins and conventions behind [the engineering standard](standard-engineering.md). Mode REFRESH reads this file, re-fetches each source, diffs it against the standard, rubric, and [canonical item catalogue](../scripts/rubric/items/index.ts), then **bumps the `last reviewed` dates** and refreshes the [Last review](#4-last-review) block below. Provenance only — what changed goes in the REFRESH commit, not a changelog here.

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
| BUN — [Bun releases][bun] | `packageManager` and `mise` runtime line; Bun-install / Node-run split. Pinned at: harness declared and resolved `1.4.3`, adopted 2026-10-25; CONFORM scaffold `1.4.4` from 2026-11-03; graded by `DEPS-1` | 2026-11-03 |
| NODE — [Node release schedule][node] | `engines.node >= 22` for `dist/`. Pinned at: declared floor `>=22` | 2026-10-06 |
| BIOME — [Biome releases][biome] | `biome.json` schema + formatter/linter config. Pinned at: declared and resolved `2.5.15` | 2026-10-06 |
| TS — [TypeScript releases][ts] | `tsconfig` / `tsconfig.build` compiler options. Pinned at: declared range and resolved `7.0.2` | 2026-10-06 |
| VITEST — [Vitest guide][vitest] | config-gated test profile + 100% coverage (`vitest run`, v8). Pinned at: capability-selected; upstream `5.0.3` | 2026-10-06 |
| SYNCPACK — [syncpack releases][syncpack] | package ordering inside engineering audit/conform. Pinned at: declared range and resolved `15.3.3` | 2026-10-06 |
| COMMITLINT — [Commitlint releases][commitlint] | deterministic Conventional Commit validation in the `.githooks/commit-msg` binding. Pinned at: declared range and resolved `21.2.3` | 2026-10-06 |
| MDLINT — [rumdl releases][rumdl] | Markdown audit/conform inside `ki-authoring` ❡. Pinned at: declared `^0.3.0`, resolved `0.3.0` | 2026-10-18 |
| KNIP — [knip releases][knip] | dependency + dead-code checks inside engineering audit/conform. Pinned at: declared range and resolved `6.39.0` | 2026-10-06 |
| DEPCRUISER — [dependency-cruiser releases][depcruise] | module-boundary checker in the isolated `tooling/depcruise` root (`DESIGN-2`). Pinned at: collection declares `^18.5.0` with TypeScript `^6.0.3` | 2026-10-06 |

❡ The Markdown mechanical pass.

[Back to contents](#contents)

#### 2.1.2 Tool compatibility constraints

A pin is current only if every tool that consumes it supports it. A consumer that lags a pinned tool forces a workaround; record it here with the condition that retires it, so REFRESH reports both a pin bump that would break a consumer and a workaround that is no longer needed. The Source cell names the consumer and what it consumes; the Governs cell what it supports, the pin, the workaround and when it retires.

| Source | Governs | Last reviewed |
| --- | --- | --- |
| dependency-cruiser `18.5.0`, consuming the TypeScript compiler API | Consumer supports: `typescript >=2 <7`. Pinned: `7.0.2`. Workaround: isolated `tooling/depcruise` root on TypeScript 6, installed by the root `prepare` script. Retire when: a release accepts TypeScript 7, which awaits the compiler API planned for TypeScript 7.1 ([#1069][depcruise-ts7], [7.1 plan][ts71]) | 2026-10-06 |

[Back to contents](#contents)

#### 2.1.3 Supported generated-artifact locations

These upstream locations determine whether the shared ignore contract needs an additional rule. A tool output already nested beneath an existing managed rule must not create a duplicate pattern. Each Governs cell gives the generated location and its managed coverage.

| Source | Governs | Last reviewed |
| --- | --- | --- |
| Turborepo — [Caching][turbo-cache] | Generated location: `.turbo/cache`. Managed coverage: `.turbo/` from `ki-engineering` | 2026-10-06 |
| Vite — [Shared options][vite-cache] | Generated location: `node_modules/.vite`. Managed coverage: `node_modules/` from `ki-engineering` | 2026-10-06 |

[Back to contents](#contents)

#### 2.1.4 In-house (the workspace convention)

The standard is a **deliberately selected house shape**, not a vote count. Current configured repositories and this harness's committed tool files are supporting implementation evidence; the normative rules live in the standard and its registered rubric.

| Source | Governs | Last reviewed |
| --- | --- | --- |
| HARNESS — `package.json` + `bun.lock` † | declared ranges and exact resolved versions for the canonical harness | 2026-10-06 |
| COLLECTION — current configured collection ※ | house-shape comparison during a deliberate refresh, not a normative repository count | 2026-10-06 |
| FRAMEWORK — harness rubric sources ‡ | mode, checker, judgment-status, and generated-publication contracts | 2026-10-06 |

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
[depcruise-ts7]: https://github.com/sverweij/dependency-cruiser/issues/1069
[ts71]: https://github.com/microsoft/TypeScript/issues/63703
[turbo-cache]: https://turborepo.com/docs/crafting-your-repository/caching
[vite-cache]: https://vite.dev/config/shared-options#cachedir

[Back to contents](#contents)

## 3. Decisions

The owner decisions the standard names by id. The standard's other decisions are its ADRs, linked where it cites them.

| Id | Decision | Date | Backs | Status |
| --- | --- | --- | --- | --- |
| COMMIT-VS-CI | Option a, which Kris chose: commit time checks and never rewrites, so the `lint-staged` block is check-only. | 2026-10-26 | [engineering standard, 4.5.1](standard-engineering.md#451-the-coverage-manifest--every-key-is-driven-by-an-owning-skill-core) | In force |
| ENGINEERING-BUN | Option a, which Kris took, relayed by the Cairn summit's guardian from the summit's [change 15](https://github.com/krisb/ki-cairn-store/blob/658d48f/work/cairn/cairn.summit/15-where-guidance-lives.change.md#71-questions): the standard and `SKILL.md` ask for `bun@1.4.x`, the minor every repository pins, in place of `bun@1.3.x`. | 2026-11-17 | [engineering standard, 4.5](standard-engineering.md#45-packagejson--toolchain-pinning-core) | In force |

[Back to contents](#contents)

## 4. Last review

On 18 November 2026 the skill's words were brought to HARNESS-NAME, from the Cairn summit's change 12, step 1, for the Repository guild: REFRESH names the backpack, the release standard bootstraps and embeds the canonical backpack, and the exemplars name the backpack's manifest; the test harness sense and the `ki:harness:eval` script keep their words. No criterion changed and no outside source refreshed.

On 18 November 2026 the Repository guild's review, from the Cairn summit's change 10, brought the files into the formats: [the engineering standard](standard-engineering.md), formerly `standards-engineering.md`, was renamed and reshaped to the standard format with its rules unchanged, its former sections 0 to 9 becoming 4.4 to 4.13 and its `§` cross-references following, and this file to the sources format, its extra table columns folded into the Governs cells. The rubric's source names follow. No rule changed and no outside source was refreshed.

On 17 November 2026, under ENGINEERING-BUN a, which Kris took that day, relayed by the Cairn summit's guardian from the summit's [change 15](https://github.com/krisb/ki-cairn-store/blob/658d48f/work/cairn/cairn.summit/15-where-guidance-lives.change.md#71-questions), the standard and `SKILL.md` ask for `bun@1.4.x`, the minor every repository pins, in place of `bun@1.3.x`, which the estate had left: read that day, `tools-ki`, `ki-techne-harness` and `mcp-gsuite` pin 1.4.3, `mcp-cairn` 1.4.2, and `packages-stoa`, `apps-cairn.local` and this harness 1.4.4. Levelling the repositories to one patch is the house upgrade the standard already describes, left to each repository's next change. No outside source was fetched.

On 2026-10-14, under `KI-HARNESS-GOV-187`, the standard gained the connection-critical rollouts subsection beside clean-end-state cutovers, in Kris's words: "any change to a firewall or to the configuration of a service critical for connection (Headroom proxy, SSH, Tailscale, network, auth) must carry in its rollout plan a tested restore path that reconnects first, then evaluates why it failed", placed here because Kris asked for it where "Claude and Codex both load it (ki-delegation and the engineering standard)". No pin changed.

REFRESH last run **2026-10-06**. Cadence: monthly, alongside the other governance skills.

- **Reconciled declared and resolved evidence:** the canonical harness declares Bun `1.4.3`, Biome `2.5.15`, TypeScript `^7.0.2`, syncpack `^15.3.3`, Commitlint `^21.2.3`, knip `^6.39.0`, lint-staged `^17.6.0` and rumdl `^0.3.0`; its committed lock resolves those releases. rumdl moved from `^0.2.78` on 2026-10-18, after the `ki-authoring` reproductions passed on 0.3.0. The CONFORM scaffold defaults and the Biome exemplar move to the same releases.
- **Current upstream comparison:** Biome, TypeScript, syncpack, Commitlint, knip and rumdl match their latest releases. Vitest `5.0.3` is current for capability-selected repositories. Bun `1.4.2` was published on 2026-09-05; the harness and every configured repository still pinned `1.4.1`, past the 14-day window, and no audit criterion measured the runtime, because the freshness check read only `bun outdated`. That gap is now closed: `DEPS-1` grades the `packageManager` runtime under the same window, and the harness and CONFORM scaffold pin `1.4.2`. The harness adopted Bun `1.4.3` on 2026-10-25, but the CONFORM scaffold kept `1.4.2` and so proposed downgrading every repository that followed; on 2026-11-01 the scaffold's `packageManager` and `mise` defaults moved to `1.4.3`. Repositories then adopted Bun `1.4.4` ahead of the harness, and the `1.4.3` scaffold proposed downgrading them, so on 2026-11-03 the scaffold defaults moved to `1.4.4`; the harness's own pin stays `1.4.3` until it adopts the release. Node 24 is the active LTS and 26 is current; the `>=22` floor stands while 22 remains in maintenance.
- **Compatibility constraints added:** dependency-cruiser `18.5.0` supports `typescript >=2 <7`, so the isolated install root stays. TypeScript 7.0 ships no compiler API; 7.1 makes stabilising it the release goal, with stable planned for 2026-11-24.
- **Collection:** the configured `ki-engineering` repositories declare Bun `1.4.1` and TypeScript `^7.0.2`; the 23 with boundary enforcement pin `dependency-cruiser ^18.5.0` with TypeScript `^6.0.3` and install it from `prepare`.
- **Generated-artifact locations:** Turborepo still writes `.turbo/cache` and Vite `node_modules/.vite`.

**Watching:** the dependency-cruiser workaround in [2.1.2](#212-tool-compatibility-constraints), until a release accepts TypeScript 7.

[Back to contents](#contents)
