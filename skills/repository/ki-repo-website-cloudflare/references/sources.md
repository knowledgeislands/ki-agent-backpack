---
ki-document-type: sources@2026-11-24T04:52:17Z
ki-revised: 2026-11-24T04:26:02Z
ki-refresh: external-spec · monthly
---

# Sources — where the standard comes from

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
    - [2.1.1 Cloudflare documentation](#211-cloudflare-documentation)
    - [2.1.2 In-house](#212-in-house)
- [3. Last review](#3-last-review)

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

## 3. Last review

The latest review, on 22 November 2026, re-read every Cloudflare page above and the BUILD seam; every page was reachable, VERSIONS through a redirect to its new address. It confirmed that Workers Static Assets remain the target for new projects, that a static site needs only `assets.directory`, and that the deploy command, Branch control, custom-domain, workers.dev, Version URL, Access and DNS plan facts the [hosting standard](standard-cloudflare-hosting.md) relies on still hold. Two pages had changed, BUILDS-API and PREVIEWS, and both are watched below.

**Watching:**

- Wrangler remains on major version 4, and Cloudflare now defaults `observability.enabled` to true for new Workers; the explicit declaration stays required.
- The Pages-to-Workers direction and the dashboard's information architecture.
- BUILDS-API no longer documents triggers, only one build configuration per Worker; check whether those calls cover the [branch-previews](standard-cloudflare-hosting.md#49-branch-previews-behind-access) restore path, whose trigger calls rest only on a live run of 18 October 2026.
- PREVIEWS: Worker Previews have matured and new Workers default to them; check whether new Workers still yield Version URLs. The standard does not adopt Worker Previews.
- Account-owned tokens for Workers Builds, announced as coming, which would change the user-minter step under `ki-env-binding`'s [credential access standard](../../../environment/ki-env-binding/references/standard-credential-access.md#42-cloudflare-through-cf-token).

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
