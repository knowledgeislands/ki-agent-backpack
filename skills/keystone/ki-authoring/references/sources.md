---
ki-document-type: sources@2026-11-24T04:26:02Z
ki-revised: 2026-11-24T04:26:02Z
ki-refresh: external-spec · monthly
---

# Sources for authoring

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
  - [2.2 Advisory](#22-advisory)
- [3. Last review](#3-last-review)

## 1. Introduction

The sources behind [the enforcement standard](standard-authoring.md), [the Markdown standard](standard-markdown.md), [the TOML standard](standard-toml.md), [the white-paper standard](standard-whitepapers.md), [knowledge promotion](standard-knowledge-promotion.md), [the review standard](standard-review.md), and the seven format standards: [format](standard-formats-format.md), [standard](standard-formats-standard.md), [change](standard-formats-change.md), [sources](standard-formats-sources.md), [record](standard-formats-record.md), [design](standard-formats-design.md) and [presentation](standard-formats-presentation.md). Mode REFRESH reads this file, re-fetches each outside source, diffs it against the conventions, then **bumps the `last reviewed` dates** and refreshes [Last review](#3-last-review) (what changed is recorded in the commit, not a changelog). The house style is mostly internally owned, but it sits on top of these external tools and specs, which move — so this is the skill's memory of what it rests on.

[Industry white-paper authoring](standard-whitepapers.md) is an owner-directed synthesis of editorial practice: reader-led argument, calibrated claims, practical implications and substantive review. It is an internal authoring convention, not an external specification or a prescribed chapter model. Private production evidence and the promotion receipt remain with the originating repository; this public standard carries only the generalised rules.

[Back to contents](#contents)

## 2. Outside sources

The specifications and tools the standards follow or draw on.

### 2.1 Authoritative

| Source                      | Governs                                                     | Last reviewed |
| --------------------------- | ----------------------------------------------------------- | ------------- |
| [CommonMark spec][cm]       | the Markdown syntax baseline                                | 2026-11-23    |
| [rumdl rules][ru]           | the `MDxxx` rules enforced, their options, and reflow modes | 2026-11-23    |
| [rumdl global settings][rgs] | configuration-file and global-setting semantics | 2026-11-23 |
| [rumdl CLI][rcli] | `check --fix` behaviour and exit semantics | 2026-11-23 |
| [rumdl releases][rr] | current upstream release | 2026-11-23 |
| [GitHub alert guidance][ga] | GitHub alert labels, purpose, and Markdown form             | 2026-11-23    |
| [TOML spec][toml]           | TOML syntax for the shared `.ki.toml`                | 2026-11-23    |

[Back to contents](#contents)

### 2.2 Advisory

Advisory sources inform local judgment conventions but are not specifications, mechanical findings, or universal Knowledge Islands policy.

| Source                | Informs                                                 | Last reviewed |
| --------------------- | ------------------------------------------------------- | ------------- |
| [Standard Readme][sr] | README entry-point structure and reader discoverability | 2026-11-23    |
| [Conventional Comments][cc] | [The review standard](standard-review.md#44-a-findings-shape)'s finding: each labelled with its kind and whether it blocks | 2026-11-23 |
| [Design docs at Google][ubl] | [Who reviews](standard-review.md#41-who-reviews): peers who did not write it, early, while change is cheap | 2026-11-23 |
| [AIP-100][aip100] and [Zalando's API guidelines][zal] | [What it is reviewed against](standard-review.md#42-what-it-is-reviewed-against): precedent and anchored rules, a deviation marked where it is made | 2026-11-23 |
| [The Rust RFC book][rfc] and [Oxide's RFD 1][rfd] | [The outcome](standard-review.md#45-the-outcome): a stated disposition, held in the document's own state | 2026-11-23 |
| [Scaling architecture conversationally][advice] | [Who reviews](standard-review.md#41-who-reviews): the advice process, whoever decides consulting first and the advice recorded | 2026-11-23 |
| [Nielsen Norman Group's design critiques][nng] | [Not taste](standard-review.md#42-what-it-is-reviewed-against): every comment tied to the goals | 2026-11-23 |
| [Pandoc's slide shows][pandoc] and [Marpit's heading divider][marpit] | [The presentation format](standard-formats-presentation.md#43-slides): slides split at a heading level, `::: notes` carried into speaker notes, and one source exported to `.pptx`, reveal.js and beamer; checked against pandoc 3.14 on sol | 2026-11-23 |

[cm]: https://spec.commonmark.org/
[ru]: https://rumdl.dev/rules
[rgs]: https://rumdl.dev/global-settings/
[rcli]: https://rumdl.dev/usage/cli/
[rr]: https://github.com/rvben/rumdl/releases
[ga]: https://docs.github.com/en/contributing/style-guide-and-content-model/style-guide#alerts
[toml]: https://toml.io/en/v1.1.0
[sr]: https://github.com/RichardLitt/standard-readme
[cc]: https://conventionalcomments.org/
[ubl]: https://www.industrialempathy.com/posts/design-docs-at-google/
[aip100]: https://google.aip.dev/100
[zal]: https://opensource.zalando.com/restful-api-guidelines/
[rfc]: https://rust-lang.github.io/rfcs/
[rfd]: https://rfd.shared.oxide.computer/rfd/0001
[advice]: https://martinfowler.com/articles/scaling-architecture-conversationally.html
[nng]: https://www.nngroup.com/articles/design-critiques/
[pandoc]: https://pandoc.org/MANUAL.html#slide-shows
[marpit]: https://marpit.marp.app/directives?id=heading-divider

[Back to contents](#contents)

## 3. Last review

The latest review, on 23 November 2026, re-fetched every outside source, all reachable, and found the standards still follow them. CommonMark 0.31.2 and TOML v1.1.0 remain current, GitHub's alert guidance and Standard Readme are unchanged, the advisory sources still say what the review standard draws from them, and Pandoc 3.14 and Marpit's heading divider are unchanged. The recorded rumdl reproductions were re-run on 0.3.5, the upstream release, beside the harness's 0.3.2, and no convention, rule configuration or standard needs to change.

- **Watching:**
  - Every estate repository on the house toolchain pins `^0.3.0` or later, except the website and `ki-design`, which stay on their own pins until they follow. `--preflight` breaks on 0.2.78, so a consumer still below 0.3.0 must move its pin before it adopts the house `check --fix --preflight` command.
  - rumdl 0.3.5's `MD076` reports 57 tight lists in 9 harness files, each with an item holding a blank-separated code block; `rumdl fmt` adds the blank lines, which 0.3.2 also accepts. The harness's move to 0.3.5 should carry that reformat in the same change so the gate stays a fixed point.
  - A rule this configuration disables is a deferral, not a verdict. Re-test each against its recorded reproduction on every rumdl upgrade, and re-enable the ones upstream has fixed.
  - `MD056` is fixed for aliased wikilinks under the Obsidian flavor. Under the standard flavor, `[[Target|Label]]` keeps GFM pipe semantics and is reported as an extra table cell, and since 0.3.0 the fix no longer truncates the row. The house configuration keeps the finding but marks `MD056` unfixable, so `check --fix` preserves the source, as defence in depth. Re-test both flavors and the no-fix guard on each upgrade; both held on 0.3.5.
  - Block constructs are recognised on soft-wrapped continuation lines, one root cause behind three corruptions. A line beginning `##]` is admitted as an ATX heading although CommonMark requires a space after the hash run, and `MD022`, `MD018` and `MD026` then split the paragraph and delete its full stop. An empty list item after a wrapped line is read as a setext heading, and `MD003` injects a literal `##` mid-sentence. `MD030` reads `8.Does ownership...` as a marker with no space. To re-test each, run the construct through `rumdl check --fix` and a reference CommonMark parser and confirm they agree. On 0.3.5 the `##]` case still reproduces, the setext case does not, and `MD030` reports the line as paragraph text without inserting a space. No rule is disabled for these in the house configuration, because the harness content does not carry them; `kit-legal` disables `MD030` locally and defuses the other two by rejoining the wraps at source.
  - `MD013` reflow silently skips any paragraph containing a `|`, so a wikilink-heavy base is less normalised than a clean gate implies. Non-destructive, and no rule is disabled for it. To re-test, write a wrapped paragraph containing `[[Target|Label]]` and confirm `rumdl check --fix` joins it to one line; still skipped on 0.3.5 under the standard flavor.
  - `MD060` mis-handles a placeholder table whose only body row holds `-` cells, stripping the padding and leaving it misaligned while reporting clean, and still does under `any` on 0.3.5. Even once fixed, re-enabling needs a separate judgement, since no style reproduces the former conditional padding: `aligned` rewrites every wide table into one long row and `any` enforces nothing.
  - `MD057` is disabled pending a decision about published skill copies, whose links into the source repository's `docs/` tree resolve there and dangle in the publication; this waits on a decision here, not on upstream. Enabling the rule estate-wide would fail that repository for links correct at source.
  - rumdl is pre-1.0 and single-maintainer; confirm the house Markdown output is unaffected on each bump. The estate is a fixed point of this configuration, so any diff on upgrade is a regression to investigate rather than an improvement to accept.
  - Biome does not support Markdown; if that changes it would displace rumdl's formatter role but not its linter role, since the structural and link-integrity rules have no Biome counterpart.
  - Where a principal repository that is a Knowledge Base keeps a territory's presentations is unsettled; until it is, [the presentation format](standard-formats-presentation.md) has a Knowledge Base keep them where its own structure says.

[Back to contents](#contents)
