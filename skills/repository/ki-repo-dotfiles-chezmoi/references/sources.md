---
ki-document-type: sources@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T04:55:00Z
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
- [3. Decisions](#3-decisions)
- [4. Last review](#4-last-review)

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
| [Reference: source state attributes][attributes] | the `dot_`/`executable_`/`private_`/`.tmpl` naming-prefix system and the fixed prefix order | 2026-11-17 |
| [Reference: `.chezmoiignore`][chezmoiignore] | ignore-file syntax, including negation-through-ignored-parents | 2026-11-15 |
| [User guide: use scripts to perform actions][scripts] | `run_onchange_` script semantics — when chezmoi re-runs a script | 2026-11-15 |
| [Reference: templating][templating] | `.chezmoidata`/`.chezmoitemplates`, Go-template rendering | 2026-11-15 |
| [CLI: `chezmoi doctor`][doctor] | built-in diagnostics | 2026-11-15 |
| [CLI: `chezmoi status` / `managed` / `unmanaged`][status] | drift-checking commands | 2026-11-15 |
| [CLI: `source-path` / `target-path`][source-path] | resolving between source and target paths | 2026-11-15 |

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
| [TOMLKit README and limitations][tomlkit] | style-preserving TOML document model and its known ordering limitation | 2026-11-15 |
| [ruamel.yaml round-trip details][ruamel-round-trip] | comment, anchor, merge, and blank-line preservation in the round-trip API | 2026-11-15 |
| [ruamel.yaml indentation details][ruamel-indentation] | normalization limits for inconsistently indented YAML | 2026-11-15 |
| [Microsoft `jsonc-parser` utilities][jsonc-parser] | localized path edits, missing-property creation, and applying text edits | 2026-11-15 |
| [uv: running a script with dependencies][uv-script-dependencies] | `uv run --with` and `--no-project` dependency execution | 2026-11-15 |

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
| One anonymized personal chezmoi dotfiles repo, audited directly | House patterns†           | 2026-11-15    |
| A surgical TOML patch in the same repo, reviewed directly       | Config-editing heuristic‡ | 2026-11-15    |
| The owner's agreed script-header shape, applied across the same repo | Script headers‖ | 2026-11-07 |

† Shell-loader and bin/env dispatcher patterns; Pattern A/B decision rule; single-source multi-target templating; agent-instruction layering; audit etiquette.

‡ Editor selection, missing-key handling, preservation fixtures, and idempotence.

‖ The five-part header Kris agreed on 30 October 2026 and asked on 7 November 2026 to adopt into this skill; HEADER-1 found every one of the source's 44 scripts in scope carrying it on 7 November 2026.

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

## 3. Decisions

None recorded by id. Kris's two decisions behind the rules are quoted in the standard beside the rules they set: the five-part [script header](standard-chezmoi-dotfiles.md#44-script-headers) he agreed on 30 October 2026 and asked on 7 November 2026 to adopt into this skill, and the source's having no commit gate, set on 20 October 2026, under the [Git boundary](standard-chezmoi-dotfiles.md#410-git-boundary) and ADR-KI-HARNESS-SKILLS-017.

[Back to contents](#contents)

## 4. Last review

On 18 November 2026 the Repository guild's review, from the Cairn summit's change 10, brought the files into the formats: [the chezmoi dotfiles standard](standard-chezmoi-dotfiles.md), formerly `standards-chezmoi-dotfiles.md`, was renamed and reshaped to the standard format with its rules unchanged, and this file to the sources format, its four source groups now sub-groups of Authoritative. SKILL.md, the rubric items and the rubric follow the new name and anchors. No rule changed and no outside source was refreshed.

Focused review, **2026-11-17**: the source state attributes page re-read, and the two points the 15 November refresh raised were measured on chezmoi v2.74.1 in a scratch source and destination. The page sets a fixed prefix order for each kind of entry and allows no `executable_` on a directory; `executable_dot_bad/` applied as a literal directory named `executable_dot_bad`, so the standard's old example did not do what it said. `private_` removes group and world permissions, and `dot_bash/private_executable_secrets.tmpl` applied as `~/.bash/secrets` at mode `0700`, not `0600`. The standard's prefix table and example now follow the page, and those two watch points are closed.

Scheduled REFRESH, **2026-11-15** — every outside source re-read, the measured claims re-measured on chezmoi v2.74.1, and the case-study repo re-read.

- **chezmoi.io sources**: confirmed. Two pages had moved: `.chezmoiignore` now sits under `special-files/`, and the scripts reference has become the user guide page "Use scripts to perform actions". The attributes link pointed at the target-types page, so it now points at the source state attributes page its row names. The prefixes, `run_onchange_` re-running on changed rendered content, `.chezmoidata` and `.chezmoitemplates`, `doctor`, `status` recursing by default, and `source-path`/`target-path` all read as the standard says. `.chezmoiignore` still does not document negation through an ignored parent, but its rule that every exclude beats every include agrees, and a sandbox test confirmed it.
- **Format-tooling sources**: confirmed. The ruamel.yaml section anchors are now case-sensitive and were corrected. TOMLKit keeps its one ordering limitation, `jsonc-parser`'s `modify` still creates missing properties, and `uv run --with` and `--no-project` are unchanged.
- **House-convention and observed sources**: the case-study repo still shows the loader, `bin/`, templating and layering patterns, and its TOML binding still uses tomlkit through `uv`. It is now a `modify_` binding, the standard's Pattern C, rather than a post-apply patch. `chezmoi apply` still replaced the target's inode, and `chezmoi diff <dir>` still printed nothing without `-r`. The standard now records v2.74.1 beside its earlier versions. `rg -a` still recovered setting names from the same application's binary, though `nm -a` yielded little. The script-header row was not re-checked and keeps 7 November.
- **Watching**: the source state attributes page says prefixes must come in a fixed order for each kind of entry, and allows no `executable_` on a directory. The standard's prefix example, `executable_dot_bash/private_secrets.tmpl`, and its "mode `0600`" for `private_` (the page says it removes group and world permissions) were raised with the owner rather than changed, and fixed on 2026-11-17 (above).

Focused format-editor promotion, **2026-07-16** — the surgical config-editing heuristic proven in the case-study repo was generalized into the standard and bounded by the selected editors' primary documentation.

- **chezmoi.io sources**: not re-fetched in this focused review; their last-reviewed dates remain 2026-07-12.
- **Format-tooling sources**: TOMLKit, ruamel.yaml, Microsoft `jsonc-parser`, and uv documentation fetched and reviewed 2026-07-16. The standard records documented preservation behavior and explicit limits rather than promising universal byte identity.
- **House-convention source**: the same single case study, explicitly not treated as a corpus. Its TOML fixture demonstrated a byte-stable no-op round trip and missing-key creation for that file and tool version; those observations became verification requirements, not universal tool guarantees. A version-specific `dasel` limitation and the time-sensitive claim that JSON5 lacks mature tooling were deliberately not promoted. Re-confirm every `[J]` criterion once a second and third chezmoi repo have been audited against this skill; narrow or retire anything that proves case-specific.

**Watching:** a second and third chezmoi repository audited against this skill, to confirm or narrow every `[J]` criterion, and the measured claims on another platform or a materially newer chezmoi.

[Back to contents](#contents)
