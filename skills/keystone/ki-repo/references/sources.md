---
ki-document-type: sources@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T05:20:00Z
ki-refresh: external-spec · monthly
---

# Sources — where the repo standard comes from

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
  - [2.2 Advisory](#22-advisory)
- [3. Decisions](#3-decisions)
- [4. Last review](#4-last-review)

## 1. Introduction

The authoritative sources behind [the repository standard](standard-repository.md), [the configuration standard](standard-configuration.md), and the generated [rubric](rubric.md). Mode REFRESH reads this file, re-fetches each source, diffs it against the standards and structured catalogue, then **bumps the `last reviewed` dates** and refreshes [Last review](#4-last-review) (what changed is recorded in the commit, not a changelog). GitHub's settings surface moves (rulesets, security toggles, Actions policy), so this is the skill's memory of where the standard comes from — keep it current.

[Back to contents](#contents)

## 2. Outside sources

The GitHub and licensing specifications the standards follow.

### 2.1 Authoritative

| Source | Governs | Last reviewed |
| --- | --- | --- |
| [REST: repository settings][repo-settings] | merge methods, auto-delete-branch, features, description, visibility, and repository-administration permission | 2026-11-17 |
| [REST: branch protection][branch-protection] | the optional `branch-protection` body (PR, `build` check, linear) | 2026-11-17 |
| [Repository rulesets][rulesets] | the modern alternative to classic protection (private-repo path) | 2026-11-17 |
| [REST: Dependabot alerts / fixes][dependabot] | `vulnerability-alerts`, `automated-security-fixes` endpoints | 2026-11-17 |
| [Secret scanning detection scope][secret-scanning] | public automatic scanning and private/internal GitHub Secret Protection boundary | 2026-11-17 |
| [REST: Actions permissions for a repository][actions] | `allowed_actions` policy | 2026-11-17 |
| [`gh` CLI manual][gh-cli] | `gh repo list/view/edit`, `gh api` — how evidence is read and confirmed live changes are applied | 2026-11-17 |
| [SPDX License List][spdx] | authoritative license identifiers, including MIT and UNLICENSED | 2026-11-17 |
| [Choose a License][choosealicense] | supporting license-selection guidance | 2026-11-17 |

[repo-settings]: https://docs.github.com/en/rest/repos/repos#update-a-repository
[branch-protection]: https://docs.github.com/en/rest/branches/branch-protection
[rulesets]: https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets
[dependabot]: https://docs.github.com/en/rest/repos/repos#enable-vulnerability-alerts
[secret-scanning]: https://docs.github.com/en/code-security/secret-scanning/introduction/about-secret-scanning
[actions]: https://docs.github.com/en/rest/actions/permissions
[gh-cli]: https://cli.github.com/manual/
[spdx]: https://spdx.org/licenses/
[choosealicense]: https://choosealicense.com/

[Back to contents](#contents)

### 2.2 Advisory

None.

[Back to contents](#contents)

## 3. Decisions

The decisions the standards cite by id, oldest first; each standard keeps citing its id where the rule stands.

| Id | Decision | Date | Backs | Status |
| --- | --- | --- | --- | --- |
| STRICTNESS-CONFORM | One canonical commit hook per shape and package presence, audited by exact comparison, with no extension point. | 2026-10-20 | [repository](standard-repository.md#45-commit-gate) | In force |
| HOMEPAGE-SOURCE | `.ki.toml` is the master for the repository's homepage; the root `package.json` `homepage` and the GitHub homepage mirror it, never the other way round. | 2026-10-24 | [repository](standard-repository.md#462-packagejson-identity--metadata) | In force |
| PREFIX-RENAME | The handle `personal` is reserved for an estate owner's own territory, the one word that territory uses everywhere, and never names a public brand or organisation. | 2026-10-25 | [configuration](standard-configuration.md#49-territory-selection) | In force |
| COMMIT-VS-CI | A commit hook runs only fast, check-only, offline checks over what is staged; the full `ki repo audit` runs in CI, never in the hook. | 2026-10-26 | [repository](standard-repository.md#45-commit-gate) | In force |
| INTERIM-HOMEPAGE-OMISSION | Where `.ki.toml` declares no `homepage`, a homepage left in the root `package.json` or on GitHub is drift: the audit reports it, and conform proposes clearing it but clears nothing without explicit approval. | 2026-10-26 | [repository](standard-repository.md#462-packagejson-identity--metadata) | In force |
| NAMING-TO-KI | A site repository is named `apps-` and its hostname's labels in reverse order; widened on 29 October 2026 to rename every existing site repository, not only new ones. | 2026-10-27 | [repository](standard-repository.md#48-repository-naming) | In force |
| RUNTIMES-ALL | Every Knowledge Islands repository declares every runtime, with the folders and ignores each needs; a narrower list is an evidenced exception in `.ki.toml`, never the default, and runtime-specific skills go only to their own runtime. The exception is the declared divergence `all-runtimes = false`, and `RUNTIMES-7` warns on a narrower list without it. Option a, Kris, 13 November 2026, relayed by the Cairn summit's guardian from the summit's [change 13](https://github.com/krisb/ki-cairn-store/blob/da86f2e/work/cairn/cairn.summit/13-runtimes-and-skill-copies.change.md#41-every-runtime-everywhere). | 2026-11-13 | [configuration](standard-configuration.md#431-declaring-backpacks-and-skills) | In force |
| REPORTS-RETIRE | The managed ignore block reserves every `reports/` folder, with no exception for an earlier package copy's `+/_WORK/<id>/reports/`, since a work package keeps no reports and no checkout tracks such a copy; it changes every repository's managed block at its next conform. | 2026-11-14 | [repository](standard-repository.md#411-root-files) | In force |
| SKILL-MODE-KEY | A repository declares a skill vendored with the host-owned `mode` in its `[skills.<name>]` table, `"current"` or `"vendored"`, recording the backpack `commit` its copy came from; the host leaves the copy alone and reports drift from that commit as a warning. | 2026-11-14 | [configuration](standard-configuration.md#434-vendored-skills) | In force |
| SHARE-OUTPUTS | A session working in a repository commits what the owner is to see in a form GitHub shows and gives the link that opens where the owner is reading; an agent host's own page may sit beside it, never in its place. From the Cairn summit's change 15, §4.3, with the owner's LINKS-WHERE-READ. | 2026-11-14 | [repository](standard-repository.md#44-working-areas) | In force |
| PROMOTION-ONE | Where REVIEW sends durable content is `ki-authoring`'s placement ladder, the one table of where knowledge is placed, and the procedure points at it instead of listing its homes. Kris's word, 16 November, about 23:30 GMT, relayed by the Cairn summit's guardian from the summit's [change 11](https://github.com/krisb/ki-cairn-store/blob/4bc5285/work/cairn/cairn.summit/11-keystone-guild.change.md#45-decided). | 2026-11-16 | [REVIEW](mode-review.md#documentation-and-knowledge) | In force |
| DESIGN-PLACE | `docs/design/` is a documentation root, selecting `ki-design`, whose design documents follow `ki-authoring`'s design format; all six repositories that keep designs already put them there. Kris's word, 17 November, about 00:56 GMT, taking the high-confidence points: "you've got high confidence in some of these, so I think you need to take them and get on with it", relayed by the Cairn summit's guardian from the summit's [change 16](https://github.com/krisb/ki-cairn-store/blob/9a7354a/work/cairn/cairn.summit/16-design-guild.change.md#42-decided). | 2026-11-17 | [repository](standard-repository.md), [configuration](standard-configuration.md), [documentation topology](standard-documentation-topology.md#41-the-five-concerns) | In force |
| SETTINGS-SCOPE | The settings plan's `all` array covers every non-fork repository in `knowledgeislands/`, 22 on 17 November, and `public` every public one among them, each checked against GitHub's live visibility; the fork `paperclip` stays out. Taken at high confidence by the Cairn summit's guardian on Kris's word to take high-confidence calls. | 2026-11-17 | [repository](standard-repository.md#413-applying-it) | In force |
| COVERAGE-SIGNAL | A `+/_WORK/` folder no longer counts as `ki-work-package`'s coverage signal: a work package lives in the Cairn store, so a `+/_WORK/` left in a repository is out of place and COV-1 warns on it, naming the store's `work/<territory>/<id>/`; the old `+/_CHECKPOINTS/` keeps its tolerance-window signal. A check at about 04:15 GMT found no tracked checkout holding such a copy. COVERAGE-SIGNAL a, taken by the Cairn summit's guardian, 17 November 2026, about 04:30 GMT, under Kris's direction to take high-confidence calls, from the summit's [change 10](https://github.com/krisb/ki-cairn-store/blob/57d4c69/work/cairn/cairn.summit/10-skills-review.change.md#71-questions). | 2026-11-17 | [configuration](standard-configuration.md#410-coverage-enforcement) | In force |
| COPY-DETAILS | A vendored copy the audit cannot check is reported as information, not a warning, since a copy that cannot be checked is not thereby wrong; and where the backpack's current version of the skill differs from the one at the copy's `commit`, the audit adds an information-level note that the backpack has moved on past it. The note's code is `tools-ki`'s, built by ki.tools; the managed `.gitignore` block re-including vendored copies, `RUNTIMES-6` checking they are tracked, and Git computing the hashes go to the Repository guild's review. Kris, 17 November 2026, about 23:34 GMT, under GUARDIAN-LANDS a, from the Cairn summit's [change 13](https://github.com/krisb/ki-cairn-store/blob/c17433e/work/cairn/cairn.summit/13-runtimes-and-skill-copies.change.md#42-standalone-repositories-carry-their-skills). | 2026-11-17 | [configuration](standard-configuration.md#434-vendored-skills) | In force |

[Back to contents](#contents)

## 4. Last review

On 18 November 2026 the skill's words were brought to HARNESS-NAME and BACKPACK-DEPTH, from the Cairn summit's change 12, step 1, for the Keystone guild: where it meant the Knowledge Islands bundle it now says backpack, and the configuration standard's `[repo]` list is `backpacks`, the key the `ki` tool already reads, its sections 4.3 and 4.3.1 renamed with their anchors and the rubric regenerated. The test harness in the review checklist and the decision identifiers keep their words. No outside source refreshed.

Later on 17 November 2026 COPY-DETAILS's first two points were written into [the vendored skills rule](standard-configuration.md#434-vendored-skills): a copy the audit cannot check stays information, and the audit notes, as information, when the backpack has moved on past a copy's `commit`. No criterion changed and no outside source was refreshed; the note's code is `tools-ki`'s.

On 17 November 2026 REFRESH ran against all nine tracked sources, taken by the Cairn summit's guardian at about 04:03 GMT from the summit's change 11, gap 4. No governed field or criterion changed, so no standard or rubric was edited; the organisation scan for emergent topics was not run.

- **REST repository settings / `gh` CLI**: merge methods, `delete_branch_on_merge`, `has_issues`, `has_projects`, `has_wiki`, `description`, `homepage` and `visibility` (`public` or `private`) remain on the update endpoint at API version `2026-03-10`; `security_and_analysis` still takes `secret_scanning` and `secret_scanning_push_protection`, and `gh repo list/view/edit` and `gh api` remain. `use_squash_pr_title_as_default` is closing down in favour of `squash_merge_commit_title`, and `has_pull_requests` and `pull_request_creation_policy` now appear; none is governed here.
- **REST branch protection / rulesets**: classic protection remains, with no deprecation, and GET still returns the fields the auditor reads. `required_status_checks.contexts` carries a closing-down notice in favour of `checks`; the standard's body already sends `checks` and the auditor reads `checks` before `contexts`. The rulesets page offers conversion from classic protection, presented as a benefit, not a deprecation.
- **Dependabot / Actions**: the `vulnerability-alerts` and `automated-security-fixes` endpoints are unchanged; `/actions/permissions` keeps `enabled` and `allowed_actions` and adds `sha_pinning_required`, which is not governed here.
- **Secret scanning**: the scope page no longer states who gets scanning, so the source now points at GitHub's About secret scanning page: it "runs automatically for free" on public repositories, and private and internal ones need GitHub Secret Protection on Team or Enterprise Cloud. The public-only check remains correct.
- **SPDX / Choose a License**: SPDX list 3.29.0 of 16 September 2026 keeps `MIT`; `UNLICENSED` is npm's word, not an SPDX identifier, and stays the proprietary declaration. Choose a License still recommends MIT for simple permissive use.
- **Open watch-items:** `contexts` leaving the branch-protection body, when the auditor's fallback can go; whether `sha_pinning_required` should join the Actions policy; and classic protection beside rulesets.

On 17 November 2026 an in-house review applied DESIGN-PLACE a, which Kris took that day at about 00:56 GMT, relayed by the Cairn summit's guardian from the summit's [change 16, the Design guild](https://github.com/krisb/ki-cairn-store/blob/9a7354a/work/cairn/cairn.summit/16-design-guild.change.md#42-decided). `docs/design/` joins the documentation roots: the coverage cascade detects it and asks for `[skills.ki-design]`, so `ki-design` moves from declaration-only to detected and joins `ki-detects`; [the repository](standard-repository.md) and [configuration](standard-configuration.md) standards name it, and [the documentation topology](standard-documentation-topology.md#41-the-five-concerns) gains Designs as its fifth concern. A repository that keeps designs and does not yet declare `ki-design` now fails COV-1 until it declares it or sets `coverage-design = false`. No outside source refreshed.

On 16 November 2026 an in-house review applied PROMOTION-ONE a, which Kris took that day at about 23:30 GMT, relayed by the Cairn summit's guardian from the summit's [change 11](https://github.com/krisb/ki-cairn-store/blob/4bc5285/work/cairn/cairn.summit/11-keystone-guild.change.md#45-decided). [REVIEW's](mode-review.md#documentation-and-knowledge) check on legacy `.claude/memory/` points at `ki-authoring`'s placement ladder instead of listing its homes. No outside source refreshed.

REFRESH last run **2026-09-26** against all nine tracked sources. Repository settings, classic protection and rulesets, Dependabot endpoints, secret-scanning scope, Actions permissions, CLI routes, and licence guidance remain available. GitHub's current REST examples use API version `2026-03-10`, but no governed field or criterion changed in this refresh.

- **REST repository settings / `gh` CLI**: merge controls, branch deletion, feature fields, description, visibility, and CLI evidence/application routes remain available. Setting repository properties requires the exact repository-administration permission; inspect the account and exact proposed write before mutation.
- **REST branch protection / rulesets**: classic branch protection and rulesets coexist. The optional classic-protection check remains valid; watch for a future deprecation or recommendation change.
- **Dependabot / Actions**: `vulnerability-alerts`, `automated-security-fixes`, and `/actions/permissions` retain the observed endpoints and `allowed_actions` policy.
- **Secret scanning**: public repositories retain automatic free secret scanning; private and internal scope requires GitHub Secret Protection. The public-only check remains correct.
- **SPDX / Choose a License**: SPDX is the authority for declared identifiers; Choose a License remains a selection aid. `UNLICENSED` remains the proprietary declaration.
- **Open watch-items:** re-confirm that the branch-protection GET response continues to support the compatibility evidence the auditor consumes, and that classic protection remains available beside rulesets.

[Back to contents](#contents)
