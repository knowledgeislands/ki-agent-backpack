---
ki-document-type: sources@2026-11-17T00:28:37Z
ki-revised: 2026-11-23T02:25:51Z
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
| ASSETS — [Workers Static Assets][assets] | `assets`, assets-only Workers, and SPA fallback | 2026-11-22 |
| BUILDS — [Workers Builds configuration][builds] | Build command, deploy command, Preview command, and optional root directory | 2026-11-22 |
| BRANCHES — [Workers Builds build branches][branches] | Production branch and Enable Preview Builds under Branch control | 2026-11-22 |
| BUILDS-API — [Workers Builds API reference][builds-api] | Production and preview triggers, branch filters, trigger variables, user-scoped token | 2026-11-22 |
| BEST — [Workers best practices][best] | Workers Static Assets as the target for new projects | 2026-11-22 |
| WRANGLER — [Wrangler configuration][wrangler] | Worker identity, routes, assets, observability, `workers_dev`, and `preview_urls` | 2026-11-22 |
| DOMAIN — [Workers Custom Domains][domains] | Dashboard path and `custom_domain` routes | 2026-11-22 |
| DEV — [workers.dev][workers-dev] | `<name>.<account-subdomain>.workers.dev` URL syntax; disabling it leaves Version URLs on | 2026-11-22 |
| VERSIONS — [Version URLs][version-urls] | Version and alias URL syntax, the `preview_urls` default, and alias limits | 2026-11-22 |
| PREVIEWS — [Worker Previews][previews] | The separate `wrangler preview` model and its one-way switch | 2026-11-22 |
| ACCESS — [Cloudflare Access for Workers][access] · [Access application paths][access-paths] | Preview protection, rule precedence, and partial-wildcard hostnames | 2026-11-22 |
| DNS — [Partial setup][dns-partial] · [Subdomain setup][dns-subdomain] | Plan gating for off-Cloudflare zone setups | 2026-11-22 |

The dashboard navigation name **Workers & Pages** remains correct in operator instructions even though Pages is not the deployment target for new projects.

[Back to contents](#contents)

#### 2.1.2 In-house

| Source | Governs | Last reviewed |
| --- | --- | --- |
| BUILD — `ki-repo-website` | The generator-neutral `dist/` seam this adapter consumes | 2026-11-22 |

[Back to contents](#contents)

## 3. Decisions

| Id | Decision | Date | Backs | Status |
| --- | --- | --- | --- | --- |
| WEBSITE-APP-NAME a | `ki-repo-website-app` is renamed `ki-repo-website-interactive`, a name that says the kind of site without naming a framework. Kris, 22 November 2026, about 22:16 GMT, in chat: "WEBSITE-APP-NAME a"; the Cairn summit's change 10, step 6.3. | 2026-11-22 | The sibling named in the [Cloudflare hosting standard](standard-cloudflare-hosting.md) | In force |
| CF-CREDENTIALS a | `ki-repo-website-cloudflare` 4.7, getting Cloudflare credentials through `~/bin/cf-token` short-lived least-privilege tokens, moves to the Environment guild as an access rule beside `ki-env-binding`, not `ki-delegation`, whose 4.6.4 stays the authority rule on runs that may change them; 4.8's Zero Trust naming stays in the Cloudflare skill. Kris, 22 November 2026, about 20:35 GMT, the Repository guild's sitting, card: "Move to Environment". | 2026-11-22 | [4.7](standard-cloudflare-hosting.md#47-credential-access) | In force |
| CRED-HOME a | Credential access lives in `ki-env-binding` as a new standard, `standard-credential-access.md`, holding the Cloudflare `~/bin/cf-token` rule (from `ki-repo-website-cloudflare` 4.7, under CF-CREDENTIALS a) and the 1Password `~/bin/chezmoi/op-cache` rule (from `ki-delegation` 4.6.1); the description widens from MCP to tools and access; the old places become one-line pointers, and `ki-delegation` 4.6.4 stays the authority rule. Kris, 22 November 2026, about 21:30 GMT, the Environment guild's sitting, card: "ki-env-binding, both rules"; the Cairn summit's change 10, step 6.3. | 2026-11-22 | [4.7](standard-cloudflare-hosting.md#47-credential-access) | In force |
| RUN-SECRETS | Kris adopted the Cloudflare half: a run separately authorised to read Cloudflare credentials reads them only through `~/bin/cf-token`, as an access rule, not authority for a credential read or a Cloudflare operation | 2026-10-25 | [4.7](standard-cloudflare-hosting.md#47-credential-access), now `ki-env-binding`'s credential access standard | taken |
| BUILDS-ONLY | "No, we don't do it that way. We just use the build, we use the worker's build capability.", Kris, about 00:37 UTC, recorded in the `personal.summit` package's change 40: Workers Builds is the only deploy path, and no GitHub Actions deploy workflow is kept, not even as a fallback | 2026-11-22 | [4.6](standard-cloudflare-hosting.md#46-cicd) | taken |
| SIGNIN-PRIVATE | "for personal and friends, because we're hosting multiple sites within those, it doesn't make any sense for that to have a URL or a whatever the visitor sees as being specific to any one of them", Kris, about 08:25 GMT, and at 08:34, "I don't particularly care as long as it's [brand-]agnostic ... What's more important is that the sign-in screen is neutral", recorded in the `personal.summit` package's change 40: an account hosting several sites shows a "Private" sign-in that names no site; a dedicated account, such as 5G Emerge, Humans not Robots or Knowledge Islands, may name itself | 2026-11-22 | [4.8](standard-cloudflare-hosting.md#48-zero-trust-team-naming) | taken |
| WWW-301 | Kris's fixed rule, 22 November 2026: "Any domain should have a 301 redirect. We don't serve an app. We put a redirect in there instead. That's a fixed rule that we need to have." Every domain's `www` answers with a 301 to its apex through a zone dynamic redirect rule, modelled on knowledgeislands.info's, and serves no app; its DNS record is a proxied `AAAA` to `100::`, not a Workers custom domain. Landed under the Cairn summit's change 10, step 6.3, with two lessons: a redirect-rules token also needs Zone Read on the zone, and a new hostname is checked against 1.1.1.1 with the address pinned, because local negative caching lasts up to 30 minutes. | 2026-11-22 | [4.11](standard-cloudflare-hosting.md#411-every-domains-www-redirects-to-its-apex), [WCF-28](rubric.md) | In force |

The Zero Trust team naming that Kris set on 29 October 2026 is quoted in the standard beside its rule, [4.8](standard-cloudflare-hosting.md#48-zero-trust-team-naming), and has no id.
| CLOUDFLARE-FACTS | Fact corrections from the 4.1 refresh: 4.4's optional `assets` keys include Wrangler's new `base_path`; 4.9's gotchas add that a Version URL and its branch alias stop working once version retention deletes the version; and the Version URLs link follows its move. 4.9's Builds steps are unchanged. Loreward, within remit, 22 November 2026, from the 4.1 refresh. Reversible; Kris can overturn it. | 2026-11-22 | [Cloudflare hosting standard, 4.4](standard-cloudflare-hosting.md#44-the-site-wranglerjsonc-shape), [4.9](standard-cloudflare-hosting.md#49-branch-previews-behind-access) | In force |

[Back to contents](#contents)

## 4. Last review

On 22 November 2026 WEBSITE-APP-NAME a, from the Cairn summit's change 10, step 6.3, renamed `ki-repo-website-app` to `ki-repo-website-interactive`, and this skill's references follow; no rule or criterion changed.

On 22 November 2026 the Environment guild's landing, from the Cairn summit's change 10, step 6.3, applied CF-CREDENTIALS a and CRED-HOME a, recorded under [Decisions](#3-decisions): [credential access](standard-cloudflare-hosting.md#47-credential-access) became a one-line pointer to `ki-env-binding`'s credential access standard, and Zero Trust team naming stays here. No criterion changed and no outside source refreshed.

On 22 November 2026 the Cairn summit's change 10, step 6.3, the Repository guild's landing, brought in Lupin's lesson of about 20:30 GMT that evening: the proxied `AAAA` records to `100::` on a zone are Cloudflare's own read-only records for each Workers custom domain, not bridging placeholders, and go when the domain is detached, so readiness is read from the account's Workers domains and an empty zone routes list. It corrects step 4 of [moving a site to another account](exemplars.md#moving-a-site-to-another-account) and adds a sentence to [the custom-domain clause](standard-cloudflare-hosting.md#44-the-site-wranglerjsonc-shape). No rule changed and no outside source was refreshed.

On 22 November 2026 Loreward, within remit, from the 4.1 refresh, took CLOUDFLARE-FACTS, recorded under [Decisions](#3-decisions): [the hosting standard](standard-cloudflare-hosting.md) lists `base_path` among the optional `assets` keys and adds the Version URL retention gotcha to 4.9, point 6, and the Version URLs link points at its new page. 4.9's Builds steps are unchanged; the refresh's two queries on them, CLOUDFLARE-BUILDS-API and CLOUDFLARE-WORKER-PREVIEWS, wait for Kris. No rule changed and no outside source was refreshed.

On 22 November 2026 REFRESH re-read every outside source and the BUILD seam, answering the backpack audit's LONG-3 warning that the monthly cadence was overdue; every page was reachable, VERSIONS through a redirect to `/workers/versions-and-deployments/version-urls/`. The canonical deployed site was not inspected. No rule, default or protection changed: two findings that would change one went to Kris as queries, and the wording the standard can absorb was proposed, not written.

- Confirmed: Workers is the target for new projects ("If you are starting a new project, use Workers instead of Pages"), and a static site needs only `assets.directory`, with no Worker script; the deploy command still defaults to `npx wrangler deploy`, with no deploy-directory field; the Branch control labels, the custom-domain dashboard path and `custom_domain` routes, and that a deleted custom domain leaves its certificate; the workers.dev and Version URL syntax, and that disabling `workers.dev` leaves Version URLs on; `preview_urls` follows `workers_dev` when no setting exists; hostname Access applies before Worker-level and account-level Access, and a subdomain wildcard matches one label; partial setup needs Business or Enterprise and subdomain setup Enterprise; the Builds API still takes only a user-scoped token. Wrangler is on major version 4, at `4.166.0`, and `observability.enabled` defaults to true for new Workers.
- Changed, for a query: the Builds API reference no longer documents triggers. It documents one build configuration per Worker, `GET` and `PATCH /accounts/{account_id}/builds/workers/{worker_tag}`, whose `previews_enabled` and `previews_base_config` also govern a Worker still on legacy branch builds, so the trigger calls the [branch-previews](standard-cloudflare-hosting.md#49-branch-previews-behind-access) restore path makes, `DELETE` included, now rest only on the live run of 18 October 2026.
- Changed, for a query: Worker Previews have matured. New Workers and new Workers Builds projects default to them, with Preview command `npx wrangler preview`; they need Wrangler `4.135.0` or later, take their own settings from a `previews` block, can serve on a custom domain, and are limited to 100 a Worker on Free and 500 on paid plans. Access gained the `preview_worker` and `all_preview_workers` destinations, which protect a Worker's previews without a hostname application. Setting the Preview command to `npx wrangler versions upload` is still documented and still yields Version URLs.
- New detail: `assets.base_path`, an optional prefix for serving assets from a subdirectory; Version URLs and their aliases stop working when version retention deletes the version, and an alias does not keep its version; `preview_urls` now names both Version URLs and workers.dev Preview URLs; account-owned tokens for Workers Builds are announced as coming.

On 22 November 2026 BUILDS-ONLY and SIGNIN-PRIVATE, which Kris decided that night and morning (the `personal.summit` package's change 40), landed: [CI/CD](standard-cloudflare-hosting.md#46-cicd) keeps no GitHub Actions deploy workflow, not even as a fallback, and [team naming](standard-cloudflare-hosting.md#48-zero-trust-team-naming) gives an account hosting several sites a neutral "Private" sign-in, while a dedicated account keeps its own name. The exemplars and EDUCATE follow. No outside source was refreshed.

On 22 November 2026 SKILLS-LEARNING, Kris's steer of that morning to bake the night's lessons into the skills, brought in what moving the personal account's sites between Cloudflare accounts taught (the `personal.summit` package's change 40): a recipe for moving a site to another account in [the exemplars](exemplars.md#moving-a-site-to-another-account), with a pointer from [the custom-domain clause](standard-cloudflare-hosting.md#44-the-site-wranglerjsonc-shape); the minting practice of `~/bin/cf-token` under `ki-env-binding`'s [credential access standard](../../../environment/ki-env-binding/references/standard-credential-access.md#42-cloudflare-through-cf-token); a team rename's effect on Workers that check the Access token under [team naming](standard-cloudflare-hosting.md#48-zero-trust-team-naming); and the one-time GitHub app link in EDUCATE. The exemplar's Workers Builds block lost a stale output-directory line, which the standard already ruled out. No rule changed and no outside source was refreshed; BUILDS-ONLY and the multi-site sign-in naming went to Kris as queries.

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
- Carried from [KI-HARNESS-GOV-208](https://github.com/knowledgeislands/ki-agent-backpack/blob/87da1b26/docs/roadmap/KI-HARNESS-GOV-208-branch-previews-behind-access.md): on 22 November 2026 the Builds API reference documented no trigger call at all, and Worker Previews had matured, so both went to Kris as queries; until he answers, check at each monthly refresh whether the build-configuration calls cover the restore path and whether new Workers can still default to Version URLs.
- Watch for account-owned tokens for Workers Builds, which would change the user-minter step under `ki-env-binding`'s [credential access standard](../../../environment/ki-env-binding/references/standard-credential-access.md#42-cloudflare-through-cf-token).

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
[version-urls]: https://developers.cloudflare.com/workers/versions-and-deployments/version-urls/
[previews]: https://developers.cloudflare.com/workers/previews/
[access]: https://developers.cloudflare.com/workers/configuration/cloudflare-access/
[access-paths]: https://developers.cloudflare.com/cloudflare-one/access-controls/policies/app-paths/
