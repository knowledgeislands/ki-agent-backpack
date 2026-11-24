---
ki-document-type: sources@2026-11-24T04:26:02Z
ki-revised: 2026-11-24T04:26:02Z
ki-refresh: external-spec · monthly
---

# Sources — where the standard comes from

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
    - [2.1.1 Upstream tools](#211-upstream-tools)
    - [2.1.2 In-house](#212-in-house)
- [3. Last review](#3-last-review)

## 1. Introduction

The authoritative and in-house sources behind the [Eleventy site standard](standard-eleventy-site.md) and [Audit Rubric](rubric.md). Mode REFRESH reads this file, re-fetches each source, diffs it against the standard + rubric + native rubric definition, then **bumps the `last reviewed` dates** and refreshes the `## Last review` block below (what changed is recorded in the commit, not a changelog). This is the skill's memory of where the standard comes from — keep it current.

[Back to contents](#contents)

## 2. Outside sources

Two layers feed the standard: the **upstream tools** (Eleventy, Tailwind, Lucide — what they support and how they're configured) and the **in-house convention** (the shape the standard defines on top of those tools). A finding is only "upstream-driven" if it traces to the Authoritative table; everything else is house style and should be labelled as such.

### 2.1 Authoritative

The upstream tools, then the in-house layer the standard references.

#### 2.1.1 Upstream tools

| Source | Governs | Last reviewed |
| --- | --- | --- |
| ELEVENTY — [Eleventy docs][11ty] | Config API: `addTransform`, `addDataExtension`, `eleventy.before`, `dir` | 2026-11-22 |
| TAILWIND — [Tailwind CSS v4 docs][tw] | Config-less `@import "tailwindcss"`, `@theme inline`, the CLI | 2026-11-22 |
| LUCIDE — [Lucide docs][lucide] | Icon delivery (UMD passthrough, client educate) | 2026-11-22 |

[Back to contents](#contents)

#### 2.1.2 In-house

The standard is self-contained; it is the source of truth for house style. Any conformant site repo that carries a `[skills.ki-repo-website-content]` table is an example, not a source.

| Source | Governs | Last reviewed |
| --- | --- | --- |
| ENG — `ki-engineering` | Separately coverage-selected toolchain layer (referenced, not restated) | 2026-11-22 |

[Back to contents](#contents)

## 3. Last review

The latest review, on 22 November 2026, re-fetched all three upstream sources and their package metadata, and re-checked that `ki-engineering` still owns the referenced toolchain layer. No source change affects the standard's Eleventy 3, config-less Tailwind 4 or vanilla Lucide delivery contract: Eleventy is stable at 3.1.8 with 4.0 still pre-release, Tailwind is at 4.3.5, and vanilla `lucide` 1.77.0 still ships its UMD build with `createIcons()`.

**Watching:**

- Re-anchor Eleventy's config API when v4 becomes stable, and consider preferring `export const config` over returning `dir`. Continue to verify the vanilla Lucide UMD distribution and Tailwind's `@import` / `@theme` surface each refresh.

[Back to contents](#contents)

[11ty]: https://www.11ty.dev/docs/
[tw]: https://tailwindcss.com/docs
[lucide]: https://lucide.dev/guide/
