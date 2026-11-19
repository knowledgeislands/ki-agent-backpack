---
ki-document-type: sources@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T05:05:00Z
ki-refresh: canonical · on-change
---

# Sources

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
    - [2.1.1 In-house repositories and reports](#211-in-house-repositories-and-reports)
- [3. Decisions](#3-decisions)
- [4. Last review](#4-last-review)

## 1. Introduction

The sources behind [the package repository standard](standard-package-repositories.md), [the migration overlay](migration-package-repositories.md) and [the generated rubric](rubric.md).

Review alongside a change to `packages-stoa`'s vendoring tools, release rule or sync paragraph, to `ki-repo-tools`' release-on-demand policy, to `ki-engineering`'s script names or TypeScript rules, or when a second package repository appears.

[Back to contents](#contents)

## 2. Outside sources

The standard follows the house's own package repositories and the Stoa Project's findings about them; no outside specification governs it.

### 2.1 Authoritative

The reference repositories and the reports drawn from them.

#### 2.1.1 In-house repositories and reports

| Source | Governs | Last reviewed |
| --- | --- | --- |
| [`packages-stoa`](https://github.com/knowledgeislands/packages-stoa) at `5da3fb0` | Its `AGENTS.md` above all is the reference repository: its layout, core rules, release rule, sync paragraph and vendoring tools (`packages/stoa/tooling/stoa.js` and `lock.js`). It is the only package repository so far, so every rule here is drawn from one case (n=1). | 2026-11-07 |
| STOA-SHAPE — the finding of the Stoa Project, `ki.prj.stoa`, in [its ki-repo-0-32-0 report](https://github.com/knowledgeislands/ki-principal/blob/34b5faeb/+/_WORK/ki.prj.stoa/reports/ki-repo-0-32-0.report.md#stoa-shape---how-a-package-repository-differs-from-the-tools-shape) | Compared `packages-stoa` at `119d6ad` with `ki-repo-tools` and named what a package-repository skill would own: the vendoring contract, consumers and deferral, release and notice, the version locations, the sync paragraph and workbench story coverage | 2026-11-07 |
| STOA-TOOLCHAIN — the finding in [the Stoa Project's stoa-toolchain report](https://github.com/knowledgeislands/ki-principal/blob/152fa806/+/_WORK/ki.prj.stoa/reports/stoa-toolchain.report.md#stoa-toolchain---how-the-house-engineering-convention-fits-a-plain-javascript-package-repository), against `packages-stoa` at `5da3fb0` | The source of each place [Code form and the engineering standard](standard-package-repositories.md#412-code-form-and-the-engineering-standard) applies `ki-engineering`'s intent to plain JavaScript checked by JSDoc | 2026-11-07 |
| `packages-stoa`'s [ADR-STOA-057](https://github.com/knowledgeislands/packages-stoa/blob/main/docs/decisions/ADR-STOA-057-stoa-keeps-no-register-of-its-consuming-sites.md) of 10 November 2026 | Removed the release notice because the register fell behind the sites' lock files and the notices needed a messaging route outside the repository | 2026-11-17 |
| `packages-tessera`'s `AGENTS.md` | Says the same as ADR-STOA-057: a release sends no notice | 2026-11-17 |

[Back to contents](#contents)

## 3. Decisions

Kris's decisions behind the rules, each with where it was taken or recorded.

| Id | Decision | Date | Backs | Status |
| --- | --- | --- | --- | --- |
| REPO-SHAPE-PACKAGES | Kris's words of 7 November 2026 in ki.sop.main, routed to the harness work package `ki.reg.guilds`: "I think they're probably pretty similar to tools. It probably does mean that we should have a skill for whatever structure this thing might have. It seems like it's a new repo shape really, doesn't it?" They asked for this skill. | 2026-11-07 | [the standard](standard-package-repositories.md) | taken |
| MIGRATION-OVERLAY | Held by the harness work package `ki.reg.guilds`, with the away-window grant under which this skill was written; it shapes [the migration overlay](migration-package-repositories.md) | 2026-11-07 | [the migration overlay](migration-package-repositories.md) | taken |
| STOA-NO-CONSUMERS | Kris's words of 1 November 2026, sent to the Stoa work by HNR's sites State of play with its addendum: "There should be no reference out of Knowledge Islands to other territories", and consumers are found by "patterns that it knows about that would identify that it's been used" | 2026-11-01 | [4.8](standard-package-repositories.md#48-consumers) | taken |
| STORYBOOK-APP | Recorded in the Cairn summit's change 14, the guilds change, in Kris's Cairn store: every package repository has `apps/storybook/`, built to static files, in place of `apps/workbench/`, chosen over Ladle, Histoire, React Cosmos and Pattern Lab, with Fluent UI's `apps/public-docsite-v9` as the model | 2026-11-14 | [4.4](standard-package-repositories.md#44-the-storybook) | taken |
| ELEMENTS-MANIFEST | Recorded in the Cairn summit's change 14: each web component package publishes `custom-elements.json` from the Custom Elements Manifest analyser, as Spectrum Web Components and Shoelace do | 2026-11-14 | [4.5](standard-package-repositories.md#45-the-custom-elements-manifest) | taken |
| ELEMENTS-MULTI | Recorded in the Cairn summit's change 14: a package repository may hold one package per layer, each copied and locked on its own | 2026-11-14 | [4.3](standard-package-repositories.md#43-several-packages) | taken |
| COMPONENT-LIBRARY | Recorded in the Cairn summit's change 14: the words component library and web component library | 2026-11-14 | [1](standard-package-repositories.md#1-introduction) | taken |
| PACKAGES-NOTICE a | Kris's decision relayed by the Cairn summit's guardian from the summit's [change 15](https://github.com/krisb/ki-cairn-store/blob/658d48f/work/cairn/cairn.summit/15-where-guidance-lives.change.md#71-questions): a release sends no notice, and each consumer finds a release with its own `drift` | 2026-11-17 | [4.9](standard-package-repositories.md#49-versions-and-releases) | taken |

[Back to contents](#contents)

## 4. Last review

On 18 November 2026 the skill's words were brought to HARNESS-NAME, from the Cairn summit's change 12, step 1, for the Repository guild: REFRESH points at the backpack from an installed copy. No criterion changed and no outside source refreshed.

On 18 November 2026 the Repository guild's review, from the Cairn summit's change 10, brought the files into the formats: `standards-package-repositories.md` was renamed [`standard-package-repositories.md`](standard-package-repositories.md) and reshaped to the standard format with its rules unchanged, its sections becoming Rules 4.1 to 4.13, and this file to the sources format, its sources in the Outside sources table and Kris's decisions in the Decisions table. The migration overlay keeps its plural name, its link following the standard. SKILL.md, the rubric items and the generated rubric follow. No rule changed and no outside source was refreshed.

On 17 November 2026, under PACKAGES-NOTICE a, which Kris took that day, relayed by the Cairn summit's guardian from the summit's [change 15](https://github.com/krisb/ki-cairn-store/blob/658d48f/work/cairn/cairn.summit/15-where-guidance-lives.change.md#71-questions), a release sends no notice: [Versions and releases](standard-package-repositories.md#49-versions-and-releases) loses its fourth step, the table's Release row and PKG's release item follow, and each consumer finds a release with its own `drift`. The skill now follows its two repositories: `packages-stoa`'s [ADR-STOA-057](https://github.com/knowledgeislands/packages-stoa/blob/main/docs/decisions/ADR-STOA-057-stoa-keeps-no-register-of-its-consuming-sites.md) of 10 November 2026, which removed the notice because the register fell behind the sites' lock files and the notices needed a messaging route outside the repository, and `packages-tessera`'s `AGENTS.md`, which says the same; both were read on 17 November. No outside source was fetched.

On 14 November 2026, under GUILDS-REMIT in the Cairn summit's change 25 (now 14), STORYBOOK-APP, ELEMENTS-MANIFEST and ELEMENTS-MULTI were written into the standard and rubric: `PKG-3` now looks for `apps/storybook/` with a `build` and reports a remaining workbench, `PKG-J5` asks for the manifest, and the declaration takes `packages` for several. Several packages release together at one version, a reading of ELEMENTS-MULTI kept until a second layered repository tests it. No external source was fetched.

Written on 7 November 2026 from the sources above. No external source was fetched; no second package repository exists to test the rules against.

**Watching:** a second package repository, which would test rules drawn from one case, and a second layered repository, which would test whether several packages release together.

[Back to contents](#contents)
