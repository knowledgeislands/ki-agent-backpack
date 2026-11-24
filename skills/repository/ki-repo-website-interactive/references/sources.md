---
ki-document-type: sources@2026-11-24T04:52:17Z
ki-revised: 2026-11-24T04:26:02Z
ki-refresh: external-spec · monthly
---

# Sources

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
- [3. Last review](#3-last-review)

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

## 3. Last review

The latest review, on 22 November 2026, found all three sources reachable and the standard still following them. Vite, at 8.3.8, still treats a root `index.html` as the entry, scaffolds the `react` and `react-ts` templates with `vite` and `vite build` scripts, and defaults `build.outDir` to `dist`; React still names Vite as a build tool for starting from scratch. The purpose boundary and the core-owned site-root contract hold.

[Back to contents](#contents)
