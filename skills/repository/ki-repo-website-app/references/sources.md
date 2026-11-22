---
ki-document-type: sources@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T05:38:33Z
ki-refresh: external-spec · monthly
---

# Sources

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
- [3. Decisions](#3-decisions)
- [4. Last review](#4-last-review)

## 1. Introduction

The sources behind [the interactive website standard](standard-app-site.md) and [rubric](rubric.md).

[Back to contents](#contents)

## 2. Outside sources

Vite's and React's own documentation, which the implementation follows.

### 2.1 Authoritative

| Source | Governs | Last reviewed |
| --- | --- | --- |
| VITE — <https://vite.dev/guide/> | React templates, `index.html`, and `vite`/`vite build` lifecycle | 2026-11-22 |
| VITE-OUT — <https://vite.dev/config/build-options.html#build-outdir> | Default `dist` output | 2026-11-22 |
| REACT — <https://react.dev/learn/creating-a-react-app> | Client-only React applications and framework/build-tool selection | 2026-11-22 |

[Back to contents](#contents)

## 3. Decisions

None recorded by id: the standard rests on the outside sources above.

[Back to contents](#contents)

## 4. Last review

Reviewed 2026-11-22, prompted by LONG-3's overdue warning; all three sources were reachable and no standard change was needed. Vite is at 8.3.8 and still bundles with Rolldown, treats a root `index.html` as the entry, scaffolds `react` and `react-ts` templates, now beside `react-compiler` and `react-compiler-ts`, with `vite` and `vite build` scripts, and defaults `build.outDir` to `dist`, emptied on build when inside the root. React still names Vite, with Parcel and Rsbuild, as a build tool for starting from scratch, and says its recommended frameworks also produce client-only single-page applications. The official React plugin, `@vitejs/plugin-react`, is at 6.3.0. The purpose boundary and the core-owned site-root contract hold. Previously reviewed 2026-10-04.

On 18 November 2026 the skill's words were brought to HARNESS-NAME, from the Cairn summit's change 12, step 1, for the Repository guild: REFRESH points at the backpack from an installed copy. No criterion changed and no outside source refreshed.

On 18 November 2026 the Repository guild's review, from the Cairn summit's change 10, brought the files into the formats: [the interactive website standard](standard-app-site.md), formerly `standards-app-site.md`, was renamed and reshaped to the standard format with its rules unchanged, and this file to the sources format. The rubric's source names follow. No rule changed and no outside source was refreshed.

[Back to contents](#contents)
