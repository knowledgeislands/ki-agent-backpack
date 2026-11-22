---
ki-document-type: sources@2026-11-17T00:28:37Z
ki-revised: 2026-11-22T09:20:00Z
ki-refresh: external-spec · monthly
---

# Sources — where the standard comes from

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
    - [2.1.1 Cloudflare documentation](#211-cloudflare-documentation)
    - [2.1.2 In-house](#212-in-house)
- [3. Decisions](#3-decisions)
- [4. Last review](#4-last-review)

## 1. Introduction

The sources behind [the Cloudflare hosting standard](standard-cloudflare-hosting.md), its [worked exemplars](exemplars.md) and [rubric](rubric.md). Mode REFRESH re-fetches these sources, reconciles them with the standard and structured catalogue, then updates the review dates and this review note. The dashboard information architecture and Cloudflare's Pages-to-Workers direction remain moving surfaces.

[Back to contents](#contents)

## 2. Outside sources

Cloudflare's own documentation governs; the website core supplies the seam the adapter consumes.

### 2.1 Authoritative

Cloudflare's documentation, then the in-house seam.

#### 2.1.1 Cloudflare documentation

| Source | Governs | Last reviewed |
| --- | --- | --- |
| ASSETS — [Workers Static Assets][assets] | `assets`, assets-only Workers, and SPA fallback | 2026-10-04 |
| BUILDS — [Workers Builds configuration][builds] | Build command, deploy command, Preview command, and optional root directory | 2026-10-18 |
| BRANCHES — [Workers Builds build branches][branches] | Production branch and Enable Preview Builds under Branch control | 2026-10-18 |
| BUILDS-API — [Workers Builds API reference][builds-api] | Production and preview triggers, branch filters, trigger variables, user-scoped token | 2026-10-18 |
| BEST — [Workers best practices][best] | Workers Static Assets as the target for new projects | 2026-10-04 |
| WRANGLER — [Wrangler configuration][wrangler] | Worker identity, routes, assets, observability, `workers_dev`, and `preview_urls` | 2026-10-18 |
| DOMAIN — [Workers Custom Domains][domains] | Dashboard path and `custom_domain` routes | 2026-10-04 |
| DEV — [workers.dev][workers-dev] | `<name>.<account-subdomain>.workers.dev` URL syntax; disabling it leaves Version URLs on | 2026-10-18 |
| VERSIONS — [Version URLs][version-urls] | Version and alias URL syntax, the `preview_urls` default, and alias limits | 2026-10-18 |
| PREVIEWS — [Worker Previews][previews] | The separate `wrangler preview` model and its one-way switch | 2026-10-18 |
| ACCESS — [Cloudflare Access for Workers][access] · [Access application paths][access-paths] | Preview protection, rule precedence, and partial-wildcard hostnames | 2026-10-18 |
| DNS — [Partial setup][dns-partial] · [Subdomain setup][dns-subdomain] | Plan gating for off-Cloudflare zone setups | 2026-10-04 |

The dashboard navigation name **Workers & Pages** remains correct in operator instructions even though Pages is not the deployment target for new projects.

[Back to contents](#contents)

#### 2.1.2 In-house

| Source | Governs | Last reviewed |
| --- | --- | --- |
| BUILD — `ki-repo-website` | The generator-neutral `dist/` seam this adapter consumes | 2026-10-04 |

[Back to contents](#contents)

## 3. Decisions

| Id | Decision | Date | Backs | Status |
| --- | --- | --- | --- | --- |
| RUN-SECRETS | Kris adopted the Cloudflare half: a run separately authorised to read Cloudflare credentials reads them only through `~/bin/cf-token`, as an access rule, not authority for a credential read or a Cloudflare operation | 2026-10-25 | [4.7](standard-cloudflare-hosting.md#47-credential-access) | taken |
| BUILDS-ONLY | "No, we don't do it that way. We just use the build, we use the worker's build capability.", Kris, about 00:37 UTC, recorded in the `personal.summit` package's change 40: Workers Builds is the only deploy path, and no GitHub Actions deploy workflow is kept, not even as a fallback | 2026-11-22 | [4.6](standard-cloudflare-hosting.md#46-cicd) | taken |
| SIGNIN-PRIVATE | "for personal and friends, because we're hosting multiple sites within those, it doesn't make any sense for that to have a URL or a whatever the visitor sees as being specific to any one of them", Kris, about 08:25 GMT, and at 08:34, "I don't particularly care as long as it's [brand-]agnostic ... What's more important is that the sign-in screen is neutral", recorded in the `personal.summit` package's change 40: an account hosting several sites shows a "Private" sign-in that names no site; a dedicated account, such as 5G Emerge, Humans not Robots or Knowledge Islands, may name itself | 2026-11-22 | [4.8](standard-cloudflare-hosting.md#48-zero-trust-team-naming) | taken |

The Zero Trust team naming that Kris set on 29 October 2026 is quoted in the standard beside its rule, [4.8](standard-cloudflare-hosting.md#48-zero-trust-team-naming), and has no id.

[Back to contents](#contents)

## 4. Last review

On 22 November 2026 BUILDS-ONLY and SIGNIN-PRIVATE, which Kris decided that night and morning (the `personal.summit` package's change 40), landed: [CI/CD](standard-cloudflare-hosting.md#46-cicd) keeps no GitHub Actions deploy workflow, not even as a fallback, and [team naming](standard-cloudflare-hosting.md#48-zero-trust-team-naming) gives an account hosting several sites a neutral "Private" sign-in, while a dedicated account keeps its own name. The exemplars and EDUCATE follow. No outside source was refreshed.

On 22 November 2026 SKILLS-LEARNING, Kris's steer of that morning to bake the night's lessons into the skills, brought in what moving the personal account's sites between Cloudflare accounts taught (the `personal.summit` package's change 40): a recipe for moving a site to another account in [the exemplars](exemplars.md#moving-a-site-to-another-account), with a pointer from [the custom-domain clause](standard-cloudflare-hosting.md#44-the-site-wranglerjsonc-shape); the minting practice of `~/bin/cf-token` under [credential access](standard-cloudflare-hosting.md#47-credential-access); a team rename's effect on Workers that check the Access token under [team naming](standard-cloudflare-hosting.md#48-zero-trust-team-naming); and the one-time GitHub app link in EDUCATE. The exemplar's Workers Builds block lost a stale output-directory line, which the standard already ruled out. No rule changed and no outside source was refreshed; BUILDS-ONLY and the multi-site sign-in naming went to Kris as queries.

On 18 November 2026 the skill's words were brought to HARNESS-NAME, from the Cairn summit's change 12, step 1, for the Repository guild: REFRESH points at the backpack from an installed copy. No criterion changed and no outside source refreshed.

On 18 November 2026 the Repository guild's review, from the Cairn summit's change 10, brought the files into the formats: [the Cloudflare hosting standard](standard-cloudflare-hosting.md), formerly `standards-cloudflare-hosting.md`, was renamed and reshaped to the standard format with its rules unchanged, the overlay's site-selection paragraph becoming its first rules section, and this file to the sources format, with the review's open watch items gathered under Watching and RUN-SECRETS in the Decisions table. The section numbers and anchors in the rubric, the exemplars and the modes follow. No rule changed and no outside source was refreshed.

An in-house policy review on **25 October 2026** read back the Ways of working owner decisions. The Ways of working decisions log entries of 24 and 25 October 2026, read back as taken, govern this change. Coordination carries the report, command, publication and unattended-window decisions; delegation carries the authority, conflict-run and Cloudflare credential boundaries; Cloudflare hosting carries the matching credential-access rule. This is an in-house policy review, with no provider operation or external-source refresh.

A focused refresh on **2026-10-18**, under `KI-HARNESS-GOV-208`, rechecked BUILDS, DEV and WRANGLER and added BRANCHES, BUILDS-API, VERSIONS, PREVIEWS and ACCESS for the branch-previews section; the other rows keep their 4 October review.

- Reconciled: the Preview command watch item and the second-trigger pattern are one setting. A Worker has at most two Builds triggers, production and preview; the dashboard shows the preview trigger as Enable Preview Builds with its Preview command, and the API holds it as the second trigger. The house Preview command stays `bun run ki:site:upload`, which runs `bunx wrangler versions upload` and yields Version URLs.
- New: Worker Previews (`wrangler preview`, changelog of 22 September 2026) are a separate model. New Workers default to it, and an existing Worker's switch is one-way, after which a custom Preview command must invoke `wrangler preview`. The standard does not adopt it; watch for a proposal.
- Confirmed: disabling `workers.dev` leaves Version URLs on; `preview_urls` defaults to the `workers_dev` value when no setting exists; Access hostname applications accept a partial wildcard in one subdomain label and take precedence over Worker-level and account-level Access; the Builds API needs a user-scoped token.
- Unconfirmed in documentation: the Builds API reference documents no trigger DELETE call; the restore path's `DELETE /accounts/{account_id}/builds/triggers/{trigger_uuid}` rests on the live run of 18 October 2026.

REFRESH last ran in full on **2026-10-04**; all eight pages were reachable. Current Cloudflare documentation still confirms Workers Static Assets for new projects, assets-only deployments without a Worker script, Workers Builds' build/deploy command pair, the Worker custom-domain path, workers.dev URL syntax, and the `assets` key set. The canonical deployed site still matches the standard.

- Corrected: partial (CNAME) setup is available on Business and Enterprise plans, not Enterprise only; subdomain setup remains Enterprise-only. The standard's custom-domain clause now says so.
- `pages_build_output_dir` is retained only as a mechanically rejected legacy Pages marker; use `assets.directory`.
- Workers Builds has no "deploy directory" field. The deploy command defaults to `npx wrangler deploy`; the Wrangler assets directory owns the output path.
- An interactive app adds `assets.not_found_handling = "single-page-application"` without adding a `main` Worker entry.

**Watching:**

- Watch: Wrangler remains on major version 4, and Cloudflare now defaults `observability.enabled` to true for new Workers; the explicit declaration stays required.
- Watch the Pages-to-Workers direction and dashboard information architecture during each monthly refresh.
- Carried from [KI-HARNESS-GOV-208](https://github.com/knowledgeislands/ki-agent-backpack/blob/87da1b26/docs/roadmap/KI-HARNESS-GOV-208-branch-previews-behind-access.md): at each monthly refresh, check whether the Builds API reference now documents the trigger `DELETE` call the restore path relies on, and whether Worker Previews have matured enough for the house to decide on adopting them in place of Version URLs; raise that decision with Kris when they have.

[Back to contents](#contents)

[assets]: https://developers.cloudflare.com/workers/static-assets/
[best]: https://developers.cloudflare.com/workers/best-practices/workers-best-practices/
[builds]: https://developers.cloudflare.com/workers/ci-cd/builds/configuration/
[domains]: https://developers.cloudflare.com/workers/configuration/routing/custom-domains/
[workers-dev]: https://developers.cloudflare.com/workers/configuration/routing/workers-dev/
[dns-partial]: https://developers.cloudflare.com/dns/zone-setups/partial-setup/
[dns-subdomain]: https://developers.cloudflare.com/dns/zone-setups/subdomain-setup/
[wrangler]: https://developers.cloudflare.com/workers/wrangler/configuration/
[branches]: https://developers.cloudflare.com/workers/ci-cd/builds/build-branches/
[builds-api]: https://developers.cloudflare.com/workers/ci-cd/builds/api-reference/
[version-urls]: https://developers.cloudflare.com/workers/configuration/previews/
[previews]: https://developers.cloudflare.com/workers/previews/
[access]: https://developers.cloudflare.com/workers/configuration/cloudflare-access/
[access-paths]: https://developers.cloudflare.com/cloudflare-one/access-controls/policies/app-paths/
