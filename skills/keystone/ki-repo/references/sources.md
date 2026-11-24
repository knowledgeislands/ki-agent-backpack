---
ki-document-type: sources@2026-11-24T04:26:02Z
ki-revised: 2026-11-24T04:26:02Z
ki-refresh: external-spec · monthly
---

# Sources — where the repo standard comes from

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
  - [2.2 Advisory](#22-advisory)
- [3. Last review](#3-last-review)

## 1. Introduction

The authoritative sources behind [the repository standard](standard-repository.md), [the configuration standard](standard-configuration.md), and the generated [rubric](rubric.md). Mode REFRESH reads this file, re-fetches each source, diffs it against the standards and structured catalogue, then **bumps the `last reviewed` dates** and refreshes [Last review](#3-last-review) (what changed is recorded in the commit, not a changelog). GitHub's settings surface moves (rulesets, security toggles, Actions policy), so this is the skill's memory of where the standard comes from — keep it current.

[Back to contents](#contents)

## 2. Outside sources

The GitHub and licensing specifications the standards follow.

### 2.1 Authoritative

| Source | Governs | Last reviewed |
| --- | --- | --- |
| [REST: repository settings][repo-settings] | merge methods, auto-delete-branch, features, description, visibility, and repository-administration permission | 2026-11-23 |
| [REST: branch protection][branch-protection] | the optional `branch-protection` body (PR, `build` check, linear) | 2026-11-23 |
| [Repository rulesets][rulesets] | the modern alternative to classic protection (private-repo path) | 2026-11-23 |
| [REST: Dependabot alerts / fixes][dependabot] | `vulnerability-alerts`, `automated-security-fixes` endpoints | 2026-11-23 |
| [Secret scanning detection scope][secret-scanning] | public automatic scanning and private/internal GitHub Secret Protection boundary | 2026-11-23 |
| [REST: Actions permissions for a repository][actions] | `allowed_actions` policy | 2026-11-23 |
| [`gh` CLI manual][gh-cli] | `gh repo list/view/edit`, `gh api` — how evidence is read and confirmed live changes are applied | 2026-11-23 |
| [SPDX License List][spdx] | authoritative license identifiers, including MIT and UNLICENSED | 2026-11-23 |
| [Choose a License][choosealicense] | supporting license-selection guidance | 2026-11-23 |

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

## 3. Last review

On 23 November 2026 REFRESH re-read all nine tracked sources, and no governed field or criterion had changed, so the repository and configuration standards and the rubric still follow them. GitHub's REST examples are still at API version `2026-03-10`, secret scanning is still free and automatic on public repositories only, and SPDX list 3.29.0 is still current and keeps `MIT`. The organisation scan for emergent topics was not run.

**Watching:**

- `required_status_checks.contexts` leaving the branch-protection body in favour of `checks`, when the auditor's fallback to `contexts` can go.
- Whether `sha_pinning_required` should join the Actions policy.
- Classic branch protection beside rulesets: it carries no deprecation, and its GET response must keep giving the fields the auditor reads.

[Back to contents](#contents)
