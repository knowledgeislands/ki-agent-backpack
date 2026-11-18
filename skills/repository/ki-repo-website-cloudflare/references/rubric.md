---
ki-document-type: rubric@2026-11-17T00:55:00Z
---

<!-- GENERATED FILE: produced by `ki dev skill rubric`. Do not hand-edit; edit scripts/rubric/items/, then rerun `ki dev skill rubric <skill> --write`. -->

# Generated rubric — Cloudflare static-site hosting

> **Generated publication.** The TypeScript rubric items under `scripts/rubric/items/` are canonical. Edit those definitions, then rerun `ki dev skill rubric ki-repo-website-cloudflare --write`.

Line-by-line criteria for auditing ki-repo-website-cloudflare. Classifications are derived from item aspects: **[M]** mechanical, **[J]** judgment, **[M + J]** hybrid, and **[M-heuristic + J]** hybrid with heuristic mechanical evidence. Sources are cited as declared by each canonical item.

## Contents

- [RUBRIC — Generated rubric publication](#rubric--generated-rubric-publication)
- [WCF — Cloudflare hosting](#wcf--cloudflare-hosting)

## RUBRIC — Generated rubric publication

→ [standard](../../../keystone/ki-skills/references/standard-rubric-authoring.md)

The tracked readable rubric is the exact publication of the structured catalogue.

- **RUBRIC-1 [M] — structured catalogue publication is exact** — A structured catalogue tracks `references/rubric.md` as its exact generated publication. The host supplies only validated publication evidence: a missing or differing file is a FAIL; during CONFORM this item requests the host-owned derived write without choosing its path or bytes. (../../../keystone/ki-skills/references/standard-rubric-authoring.md#414-generated-rubric-publication)
  - _Remediation:_ automatic

## WCF — Cloudflare hosting

→ [standard](standard-cloudflare-hosting.md)

Workers Static Assets hosting standard.

- **WCF-1 [M] — site Worker config** — A site Worker configuration with static assets exists. (standard-cloudflare-hosting.md#42-model--workers-static-assets-not-pages)
  - _Remediation:_ diagnostic — Correct the evidenced Cloudflare hosting issue through the responsible site owner; hosted conform does not infer deployment or security intent.
- **WCF-2 [M] — Workers deploy** — Deployment uses Workers Static Assets and contains no legacy Pages marker or Pages deploy command. (standard-cloudflare-hosting.md#42-model--workers-static-assets-not-pages)
  - _Remediation:_ diagnostic — Correct the evidenced Cloudflare hosting issue through the responsible site owner; hosted conform does not infer deployment or security intent.
- **WCF-3 [M] — single site Worker** — Exactly one site Worker carries an assets block. (standard-cloudflare-hosting.md#42-model--workers-static-assets-not-pages)
  - _Remediation:_ diagnostic — Correct the evidenced Cloudflare hosting issue through the responsible site owner; hosted conform does not infer deployment or security intent.
- **WCF-4 [M + J] — assets directory** — Parsed assets.directory is the exact contained dist output adjacent to its Wrangler config. (standard-cloudflare-hosting.md#43-the-dist-seam)
  - _Remediation:_ diagnostic — Correct the evidenced Cloudflare hosting issue through the responsible site owner; hosted conform does not infer deployment or security intent.
  - _Evidence scope:_ The Cloudflare Worker, static assets, deployment configuration, and evidence named by this criterion.
  - _Review prompt:_ Confirm the declared dist path is the exact output directory produced by the separately audited generator-neutral website build.
  - _Outcomes:_ conforming; gap; exclusion
  - _Conforming guidance:_ Revise the hosting design through the responsible site owner, record a named gap, or record an explicit justified exclusion.
- **WCF-6 [M] — generated directories ignored** — dist and .wrangler are gitignored. (standard-cloudflare-hosting.md#43-the-dist-seam, standard-cloudflare-hosting.md#45-the-script-family)
  - _Remediation:_ diagnostic — Correct the evidenced Cloudflare hosting issue through the responsible site owner; hosted conform does not infer deployment or security intent.
- **WCF-8 [M] — Worker identity** — name and compatibility date are present. (standard-cloudflare-hosting.md#44-the-site-wranglerjsonc-shape)
  - _Remediation:_ diagnostic — Correct the evidenced Cloudflare hosting issue through the responsible site owner; hosted conform does not infer deployment or security intent.
- **WCF-9 [M] — observability** — observability.enabled is true. (standard-cloudflare-hosting.md#44-the-site-wranglerjsonc-shape)
  - _Remediation:_ diagnostic — Correct the evidenced Cloudflare hosting issue through the responsible site owner; hosted conform does not infer deployment or security intent.
- **WCF-10 [M-heuristic + J] — optional custom-domain routes** — When a custom domain is declared, at least one route uses custom_domain. (standard-cloudflare-hosting.md#44-the-site-wranglerjsonc-shape)
  - _Remediation:_ diagnostic — Correct the evidenced Cloudflare hosting issue through the responsible site owner; hosted conform does not infer deployment or security intent.
  - _Evidence scope:_ The Cloudflare Worker, static assets, deployment configuration, and evidence named by this criterion.
  - _Review prompt:_ When custom-domain routes are declared, verify they name the intended apex and any www host; workers.dev-only hosting needs no exception.
  - _Outcomes:_ conforming; gap; exclusion
  - _Conforming guidance:_ Revise the hosting design through the responsible site owner, record a named gap, or record an explicit justified exclusion.
- **WCF-13 [M + J] — deploy script** — The selected site package deploys with Wrangler and the repository root delegates the public alias. (standard-cloudflare-hosting.md#45-the-script-family)
  - _Remediation:_ diagnostic — Correct the evidenced Cloudflare hosting issue through the responsible site owner; hosted conform does not infer deployment or security intent.
  - _Evidence scope:_ The Cloudflare Worker, static assets, deployment configuration, and evidence named by this criterion.
  - _Review prompt:_ Confirm the real deployment path builds a current dist before invoking wrangler deploy; do not execute deployment during audit or conform.
  - _Outcomes:_ conforming; gap; exclusion
  - _Conforming guidance:_ Revise the hosting design through the responsible site owner, record a named gap, or record an explicit justified exclusion.
- **WCF-14 [M + J] — preview script** — The selected site package previews with Wrangler and the repository root delegates the public alias. (standard-cloudflare-hosting.md#45-the-script-family)
  - _Remediation:_ diagnostic — Correct the evidenced Cloudflare hosting issue through the responsible site owner; hosted conform does not infer deployment or security intent.
  - _Evidence scope:_ The Cloudflare Worker, static assets, deployment configuration, and evidence named by this criterion.
  - _Review prompt:_ Verify the preview script builds the site before wrangler dev and serves the same dist seam as production.
  - _Outcomes:_ conforming; gap; exclusion
  - _Conforming guidance:_ Revise the hosting design through the responsible site owner, record a named gap, or record an explicit justified exclusion.
- **WCF-25 [M + J] — version-upload authority** — A local upload script and its public alias, optional unless preview_urls is true, create an undeployed Worker version only through explicit remote-effect authority. (standard-cloudflare-hosting.md#45-the-script-family, standard-cloudflare-hosting.md#49-branch-previews-behind-access)
  - _Remediation:_ diagnostic — Correct the evidenced Cloudflare hosting issue through the responsible site owner; hosted conform does not infer deployment or security intent.
  - _Evidence scope:_ The Cloudflare Worker, static assets, deployment configuration, and evidence named by this criterion.
  - _Review prompt:_ Confirm audits, conformance, local builds, tests, and dry evaluation inspect ki:site:upload without executing Wrangler; only an explicitly authorised operator or Workers Builds service may supply Cloudflare credentials and create the remote version.
  - _Outcomes:_ conforming; gap; exclusion
  - _Conforming guidance:_ Revise the hosting design through the responsible site owner, record a named gap, or record an explicit justified exclusion.
- **WCF-26 [M + J] — the Cloudflare guide** — A tracked guide at docs/guides/developer/cloudflare.md records the dashboard-owned settings — Workers Builds commands, domains, redirects — that wrangler.jsonc cannot express. (standard-cloudflare-hosting.md#410-the-cloudflare-guide--dashboard-owned-settings)
  - _Remediation:_ diagnostic — Correct the evidenced Cloudflare hosting issue through the responsible site owner; hosted conform does not infer deployment or security intent.
  - _Evidence scope:_ The Cloudflare Worker, static assets, deployment configuration, and evidence named by this criterion.
  - _Review prompt:_ Confirm the guide records the exact dashboard-owned values — Workers Builds build/deploy commands and root directory, domain and redirect choices, workers.dev, and, when preview_urls is true, the non-production trigger's branch filters and build and preview commands, the preview Access application and its policy, the previews_enabled flag, and the saved restore path — matching the live dashboard, and duplicates nothing wrangler.jsonc already declares.
  - _Outcomes:_ conforming; gap; exclusion
  - _Conforming guidance:_ Revise the hosting design through the responsible site owner, record a named gap, or record an explicit justified exclusion.
- **WCF-27 [M-heuristic + J] — preview Access pairing** — When preview_urls is true, the Cloudflare guide declares a preview Access application covering *-<name>.<account-subdomain>.workers.dev, so no preview is a public copy of unreleased work. (standard-cloudflare-hosting.md#49-branch-previews-behind-access)
  - _Remediation:_ diagnostic — Correct the evidenced Cloudflare hosting issue through the responsible site owner; hosted conform does not infer deployment or security intent.
  - _Evidence scope:_ The Cloudflare Worker, static assets, deployment configuration, and evidence named by this criterion.
  - _Review prompt:_ Confirm the live preview Access application covers the version and branch-alias hostnames and the bare workers.dev hostname with the site allow policy and no bypass, and that a preview URL redirects to the Access login; read the dashboard only through an authorised operator.
  - _Outcomes:_ conforming; gap; exclusion
  - _Conforming guidance:_ Revise the hosting design through the responsible site owner, record a named gap, or record an explicit justified exclusion.
- **WCF-19 [M + J] — companion Worker boundary** — Companion Workers remain out of scope. (standard-cloudflare-hosting.md#411-boundaries--what-is-not-in-scope)
  - _Remediation:_ diagnostic — Correct the evidenced Cloudflare hosting issue through the responsible site owner; hosted conform does not infer deployment or security intent.
  - _Evidence scope:_ The Cloudflare Worker, static assets, deployment configuration, and evidence named by this criterion.
  - _Review prompt:_ Confirm configs classified as companions have main without assets and route their bindings, secrets, and runtime concerns to cloudflare/wrangler.
  - _Outcomes:_ conforming; gap; exclusion
  - _Conforming guidance:_ Revise the hosting design through the responsible site owner, record a named gap, or record an explicit justified exclusion.
- **WCF-20 [M] — hosting opt-in** — The Cloudflare opt-in table is present. (standard-cloudflare-hosting.md#42-model--workers-static-assets-not-pages)
  - _Remediation:_ diagnostic — Correct the evidenced Cloudflare hosting issue through the responsible site owner; hosted conform does not infer deployment or security intent.
- **WCF-21 [M] — opt-in validation** — The hosting table is keyless or selects a valid non-empty subset of named website sites. (standard-cloudflare-hosting.md#42-model--workers-static-assets-not-pages)
  - _Remediation:_ diagnostic — Correct the evidenced Cloudflare hosting issue through the responsible site owner; hosted conform does not infer deployment or security intent.
- **WCF-22 [M + J] — hosting delta** — This remains the hosting delta only. (standard-cloudflare-hosting.md#411-boundaries--what-is-not-in-scope)
  - _Remediation:_ diagnostic — Correct the evidenced Cloudflare hosting issue through the responsible site owner; hosted conform does not infer deployment or security intent.
  - _Evidence scope:_ The Cloudflare Worker, static assets, deployment configuration, and evidence named by this criterion.
  - _Review prompt:_ Confirm Workers Builds, account/domain binding, and deployed behavior separately without expanding this rubric into the site build or general Worker concerns.
  - _Outcomes:_ conforming; gap; exclusion
  - _Conforming guidance:_ Revise the hosting design through the responsible site owner, record a named gap, or record an explicit justified exclusion.
- **WCF-23 [M] — assets-only Worker** — A static website Worker has no main field and therefore executes no server-side code. (standard-cloudflare-hosting.md#42-model--workers-static-assets-not-pages)
  - _Remediation:_ diagnostic — Correct the evidenced Cloudflare hosting issue through the responsible site owner; hosted conform does not infer deployment or security intent.
- **WCF-24 [M] — SPA fallback** — An interactive app uses Workers Static Assets single-page-application fallback. (standard-cloudflare-hosting.md#44-the-site-wranglerjsonc-shape)
  - _Remediation:_ diagnostic — Correct the evidenced Cloudflare hosting issue through the responsible site owner; hosted conform does not infer deployment or security intent.
