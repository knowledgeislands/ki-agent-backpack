---
ki-document-type: sources@2026-11-24T04:26:02Z
ki-revised: 2026-11-24T04:26:02Z
ki-refresh: canonical · on-change
---

# Sources

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
    - [2.1.1 In-house repositories and reports](#211-in-house-repositories-and-reports)
- [3. Last review](#3-last-review)

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

## 3. Last review

The latest review, on 22 November 2026, confirmed that `packages-stoa` no longer keeps `consumers.json5` and that its workbench has moved to `apps/storybook/` with a `custom-elements.json`, as the standard asks. The in-house sources were last read on 17 November 2026, when `packages-stoa`'s decision record on its consuming sites and `packages-tessera`'s `AGENTS.md` both confirmed that a release sends no notice. No outside specification governs the standard.

**Watching:** a second package repository, which would test rules drawn from one case; a second layered repository, which would test whether several packages release together; and `packages-stoa`'s own `[skills.ki-repo-packages]` declaration, still to come.

[Back to contents](#contents)
