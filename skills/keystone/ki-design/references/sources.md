---
ki-document-type: sources@2026-11-24T04:26:02Z
ki-revised: 2026-11-24T04:26:02Z
ki-refresh: canonical · on-change
---

# Sources — where the design standard comes from

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
  - [2.2 Advisory](#22-advisory)
- [3. Last review](#3-last-review)

## 1. Introduction

The sources behind [the design standard](standard-design.md) and its [rubric](rubric.md). Mode REFRESH reads this file, checks the standard against the skills it governs, and records what it checked in the [Last review](#3-last-review) block.

[Back to contents](#contents)

## 2. Outside sources

The technical levels in [4.3](standard-design.md#43-each-kinds-levels) follow two outside models and name the contract formats an API is written in; the levels of visual design and their sources are `ki-design-system`'s.

### 2.1 Authoritative

| Source | Governs | Last reviewed |
| --- | --- | --- |
| C4 — [The C4 model](https://c4model.com/) | An architecture's three levels, system context, containers and components, the fourth, code, not drawn | 2026-11-17 |
| ARC42 — [arc42](https://arc42.org/overview/), the building block view (section 5) and runtime view (section 6) | A component's black box, white box and runtime | 2026-11-17 |
| OAS — [OpenAPI 3.2](https://spec.openapis.org/oas/v3.2.0.html) | An API contract that callers outside the repository build to | 2026-11-17 |
| ASYNCAPI — [AsyncAPI 3.0](https://www.asyncapi.com/docs/reference/specification/v3.0.0) | An event or message contract that callers outside the repository build to | 2026-11-17 |

[Back to contents](#contents)

### 2.2 Advisory

| Source | Informs | Last reviewed |
| --- | --- | --- |
| AIP — Google's [AIP-121](https://google.aip.dev/121) and [AIP-122](https://google.aip.dev/122) | An API designed resources first, then its operations | 2026-11-17 |
| ZALANDO — Zalando's [RESTful API guidelines](https://opensource.zalando.com/restful-api-guidelines/), API first | An API defined and reviewed before it is built | 2026-11-17 |
| CRITIQUE — The design reviews of [Google's design docs](https://www.industrialempathy.com/posts/design-docs-at-google/), [AIP-100](https://google.aip.dev/100), the [Rust RFC process](https://rust-lang.github.io/rfcs/), [the advice process](https://martinfowler.com/articles/scaling-architecture-conversationally.html), [Nielsen Norman Group's design critiques](https://www.nngroup.com/articles/design-critiques/) and [Conventional Comments](https://conventionalcomments.org/) | The review's shape, now held for every kind in `ki-authoring`'s [review standard](../../ki-authoring/references/standard-review.md), whose sources file keeps these citations; [4.2](standard-design.md#42-how-a-design-is-shaped) adds only what a design's review needs | 2026-11-17 |

[Back to contents](#contents)

## 3. Last review

The latest review, on 22 November 2026, confirmed that the standard's technical levels still follow C4 and arc42 and that its API contracts are still written in OpenAPI and AsyncAPI, with no rule changed. The outside sources were last read on 17 November 2026, when the technical levels were built after C4, arc42 and resource-oriented API design.

[Back to contents](#contents)
