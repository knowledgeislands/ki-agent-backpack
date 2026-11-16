---
type: sources@2026-11-09T21:36:32Z
revised: 2026-11-16T08:11:41Z
refresh: external-spec · monthly
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
| [REST: repository settings][repo-settings] | merge methods, auto-delete-branch, features, description, visibility, and repository-administration permission | 2026-11-16 |
| [REST: branch protection][branch-protection] | the optional `branch-protection` body (PR, `build` check, linear) | 2026-11-16 |
| [Repository rulesets][rulesets] | the modern alternative to classic protection (private-repo path) | 2026-11-16 |
| [REST: Dependabot alerts / fixes][dependabot] | `vulnerability-alerts`, `automated-security-fixes` endpoints | 2026-11-16 |
| [Secret scanning detection scope][secret-scanning] | public automatic scanning and private/internal GitHub Secret Protection boundary | 2026-11-16 |
| [REST: Actions permissions for a repository][actions] | `allowed_actions` policy | 2026-11-16 |
| [`gh` CLI manual][gh-cli] | `gh repo list/view/edit`, `gh api` — how evidence is read and confirmed live changes are applied | 2026-11-16 |
| [SPDX License List][spdx] | authoritative license identifiers, including MIT and UNLICENSED | 2026-09-26 |
| [Choose a License][choosealicense] | supporting license-selection guidance | 2026-09-26 |

[repo-settings]: https://docs.github.com/en/rest/repos/repos#update-a-repository
[branch-protection]: https://docs.github.com/en/rest/branches/branch-protection
[rulesets]: https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets
[dependabot]: https://docs.github.com/en/rest/repos/repos#enable-vulnerability-alerts
[secret-scanning]: https://docs.github.com/en/code-security/reference/secret-security/secret-scanning-scope
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
| REPORTS-RETIRE | The managed ignore block reserves every `reports/` folder, with no exception for an earlier package copy's `+/_WORK/<id>/reports/`, since a work package keeps no reports and no checkout tracks such a copy; it changes every repository's managed block at its next conform. | 2026-11-14 | [repository](standard-repository.md#411-root-files) | In force |
| SKILL-MODE-KEY | A repository declares a skill vendored with the host-owned `mode` in its `[skills.<name>]` table, `"current"` or `"vendored"`, recording the backpack `commit` its copy came from; the host leaves the copy alone and reports drift from that commit as a warning. | 2026-11-14 | [configuration](standard-configuration.md#434-vendored-skills) | In force |
| SHARE-OUTPUTS | A session working in a repository commits what the owner is to see in a form GitHub shows and gives the link that opens where the owner is reading; an agent host's own page may sit beside it, never in its place. From the Cairn summit's change 15, §4.3, with the owner's LINKS-WHERE-READ. | 2026-11-14 | [repository](standard-repository.md#44-working-areas) | In force |

[Back to contents](#contents)

## 4. Last review

REFRESH last run **2026-11-16** against seven of nine tracked sources; spdx.org and choosealicense.com are outside this session's allowed network domains and could not be fetched — their entries retain their 2026-09-26 dates and are carried forward as the last confirmed state. GitHub REST API version `2026-03-10` is still current in all fetched pages. No governed field or criterion changed in this refresh.

- **REST repository settings**: merge controls (`allow_squash_merge`, `allow_merge_commit`, `allow_rebase_merge`), `delete_branch_on_merge`, feature fields (`has_issues`, `has_wiki`, `has_projects`), description, visibility, and admin-permission requirements remain available and unchanged. New fields visible in the security_and_analysis schema (`secret_scanning_ai_detection`, `secret_scanning_delegated_bypass`, `anonymous_access_enabled`, `code_search_index_status`) do not affect any governed rule.
- **REST branch protection / rulesets**: classic branch protection endpoints remain available with no sunset date. The `contexts` parameter carries a "Closing down notice" recommending `checks` instead, but no removal date is set. Classic protection and rulesets coexist; the optional `branch-protection` check remains valid. A "Converting branch protections to rulesets" guide exists but is not a recommendation to migrate.
- **Dependabot / Actions**: `vulnerability-alerts`, `automated-security-fixes`, and `/actions/permissions` retain the observed endpoints and `allowed_actions` policy (`all`, `local_only`, `selected`). A new `sha_pinning_required` field appears in the GET response; it does not affect the `allowed-actions = all` rule.
- **Secret scanning**: public repositories retain automatic free secret scanning; private and internal scope requires GitHub Secret Protection. The public-only check remains correct.
- **`gh` CLI**: `gh repo edit`, `gh repo list`, `gh api` and core evidence routes remain available. New commands noted (`gh agent-task`, `gh skill`, `gh ruleset`, `gh repo read-dir`, `gh repo read-file`) do not affect any governed route.
- **SPDX / Choose a License**: not fetched this run (blocked); carried forward from 2026-09-26 as last confirmed.
- **Open watch-items:**
  - Re-confirm SPDX and choosealicense.com in a session with network access to those hosts; `UNLICENSED` and MIT guidance expected stable.
  - Re-confirm that the branch-protection GET response continues to support the compatibility evidence the auditor consumes; classic protection still available beside rulesets.
  - `contexts` deprecation on required status checks has no sunset date — watch for a removal announcement.

[Back to contents](#contents)
