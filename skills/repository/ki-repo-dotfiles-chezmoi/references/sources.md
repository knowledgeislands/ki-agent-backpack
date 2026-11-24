---
ki-document-type: sources@2026-11-24T04:52:17Z
ki-revised: 2026-11-24T04:26:02Z
ki-refresh: external-spec · quarterly
---

# Sources — where the chezmoi dotfiles standard comes from

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
    - [2.1.1 chezmoi.io](#211-chezmoiio)
    - [2.1.2 Format tooling](#212-format-tooling)
    - [2.1.3 House convention](#213-house-convention)
    - [2.1.4 Direct observation](#214-direct-observation)
- [3. Last review](#3-last-review)

## 1. Introduction

The authoritative sources behind [the standard](standard-chezmoi-dotfiles.md), [the generated rubric](rubric.md), and its structured [rubric catalogue](../scripts/rubric/items/index.ts). Mode REFRESH reads this file, re-fetches each source, diffs it against the standard and catalogue, then **bumps the `last reviewed` dates** and refreshes the Last review block below (what changed is recorded in the commit, not a changelog).

Three different kinds of claim live in this standard, and they carry different confidence:

- **Tool-behavior claims** (chezmoi behavior and format-editor APIs) are grounded in the tools' own official documentation — authoritative for the documented capability, but not a guarantee that every real input round-trips byte-for-byte.
- **House-convention claims** (the shell-loader pattern, the bin/env dispatcher pattern, the Pattern A/B decision rule, the editor-selection and verification policy, the single-source multi-target templating pattern, the agent-instruction layering split, the audit-reporting etiquette) are derived from a **single anonymized case-study repo** (n=1, initially audited 2026-07-12, with the config-editing case reviewed 2026-07-14) — not a corpus the way `ki-repo`'s repo standard was derived from ten `knowledgeislands`-org repos. Treat every `[J]` criterion in the rubric as provisional until more repos have been audited against this skill and the pattern is confirmed to generalize.
- **Directly observed claims** (that `chezmoi apply` replaces a target rather than editing it in place) rest on a single measurement against one chezmoi version on one platform, because the behavior is undocumented. They are load-bearing for diagnosis, not for correctness, and REFRESH must re-measure them rather than re-fetch a page.

[Back to contents](#contents)

## 2. Outside sources

The standard follows chezmoi's own documentation and the selected format editors' documentation; its house conventions rest on one case-study repository and its measured claims on direct observation.

### 2.1 Authoritative

The tool documentation first, then the in-house case study and measurements, each with the confidence the Introduction gives it.

#### 2.1.1 chezmoi.io

| Source | Governs | Last reviewed |
| --- | --- | --- |
| [Reference: source state attributes][attributes] | the `dot_`/`executable_`/`private_`/`.tmpl` naming-prefix system and the fixed prefix order | 2026-11-23 |
| [Reference: `.chezmoiignore`][chezmoiignore] | ignore-file syntax, including negation-through-ignored-parents | 2026-11-23 |
| [User guide: use scripts to perform actions][scripts] | `run_onchange_` script semantics — when chezmoi re-runs a script | 2026-11-23 |
| [Reference: templating][templating] | `.chezmoidata`/`.chezmoitemplates`, Go-template rendering | 2026-11-23 |
| [CLI: `chezmoi doctor`][doctor] | built-in diagnostics | 2026-11-23 |
| [CLI: `chezmoi status` / `managed` / `unmanaged`][status] | drift-checking commands | 2026-11-23 |
| [CLI: `source-path` / `target-path`][source-path] | resolving between source and target paths | 2026-11-23 |

[attributes]: https://www.chezmoi.io/reference/source-state-attributes/
[chezmoiignore]: https://www.chezmoi.io/reference/special-files/chezmoiignore/
[scripts]: https://www.chezmoi.io/user-guide/use-scripts-to-perform-actions/
[templating]: https://www.chezmoi.io/user-guide/templating/
[doctor]: https://www.chezmoi.io/reference/commands/doctor/
[status]: https://www.chezmoi.io/reference/commands/status/
[source-path]: https://www.chezmoi.io/reference/commands/source-path/

[Back to contents](#contents)

#### 2.1.2 Format tooling

| Source | Governs | Last reviewed |
| --- | --- | --- |
| [TOMLKit README and limitations][tomlkit] | style-preserving TOML document model and its known ordering limitation | 2026-11-23 |
| [ruamel.yaml round-trip details][ruamel-round-trip] | comment, anchor, merge, and blank-line preservation in the round-trip API | 2026-11-23 |
| [ruamel.yaml indentation details][ruamel-indentation] | normalization limits for inconsistently indented YAML | 2026-11-23 |
| [Microsoft `jsonc-parser` utilities][jsonc-parser] | localized path edits, missing-property creation, and applying text edits | 2026-11-23 |
| [uv: running a script with dependencies][uv-script-dependencies] | `uv run --with` and `--no-project` dependency execution | 2026-11-23 |

[tomlkit]: https://github.com/python-poetry/tomlkit
[ruamel-round-trip]: https://yaml.dev/doc/ruamel.yaml/detail/#Round_trip_including_comments
[ruamel-indentation]: https://yaml.dev/doc/ruamel.yaml/detail/#Inconsistently_indented_YAML
[jsonc-parser]: https://github.com/microsoft/node-jsonc-parser#utilities
[uv-script-dependencies]: https://docs.astral.sh/uv/guides/scripts/#running-a-script-with-dependencies

[Back to contents](#contents)

#### 2.1.3 House convention

The n=1 case study, not chezmoi.io-sourced.

| Source                                                          | Governs                   | Last reviewed |
| --------------------------------------------------------------- | ------------------------- | ------------- |
| One anonymized personal chezmoi dotfiles repo, audited directly | House patterns†           | 2026-11-23    |
| A surgical TOML patch in the same repo, reviewed directly       | Config-editing heuristic‡ | 2026-11-23    |
| The owner's agreed script-header shape, applied across the same repo | Script headers‖ | 2026-11-23 |

† Shell-loader and bin/env dispatcher patterns; Pattern A/B decision rule; single-source multi-target templating; agent-instruction layering; audit etiquette.

‡ Editor selection, missing-key handling, preservation fixtures, and idempotence.

‖ The house's five-part script header; HEADER-1 found every one of the source's 44 scripts in scope carrying it on 7 November 2026.

[Back to contents](#contents)

#### 2.1.4 Direct observation

Measured, not documented.

| Source                                                    | Governs                      | Last reviewed |
| --------------------------------------------------------- | ---------------------------- | ------------- |
| Inode comparison across a forced `chezmoi apply`, v2.74.1 | Apply-replaces-target claim§ | 2026-11-15    |
| `rg -a` / `nm -a` over one shipped GUI application binary | Config-surface discovery¶    | 2026-11-15    |

§ That `chezmoi apply` replaces a target rather than editing it in place, and the consequence for an application watching its own config file. Measured on one target on macOS; chezmoi.io does not document the write mechanism, so re-measure before relying on it for another platform or a materially newer chezmoi.

¶ Reading an application's own configuration surface — setting names, help text, and the defaults block — out of its shipped executable when vendor documentation does not cover it. Derived from one case (a Rust/`gpui` application on macOS, n=1); the technique's yield depends on the binary retaining readable strings and symbols, so treat a stripped or heavily optimized binary as a negative result rather than evidence the setting does not exist.

[Back to contents](#contents)

## 3. Last review

The latest review, on 23 November 2026, re-read every documentation source and the case-study repository; the measured claims were not re-measured, since the installed chezmoi is still v2.74.1, the version they were measured on. The chezmoi.io pages read as the standard says, and chezmoi's releases up to v2.74.2 change no rule here; the format-tooling sources and the house convention's loader, `bin/`, templating and layering patterns stand. All 46 scripts HEADER-1 covers carry the five-part header.

**Watching:** whether the script-header rule should cover the five `modify_` fragment bindings, bash scripts chezmoi runs that carry no Created line; a second and third chezmoi repository audited against the skill, to confirm or narrow every `[J]` criterion; and the measured claims on another platform or a materially newer chezmoi.

[Back to contents](#contents)
