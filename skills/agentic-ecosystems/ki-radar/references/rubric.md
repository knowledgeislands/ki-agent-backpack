---
ki-document-type: rubric@2026-11-17T00:55:00Z
---

<!-- GENERATED FILE: produced by `ki dev skill rubric`. Do not hand-edit; edit scripts/rubric/items/, then rerun `ki dev skill rubric <skill> --write`. -->

# Generated rubric — Evidence-backed review of agentic subjects, models and model-agent routes

> **Generated publication.** The TypeScript rubric items under `scripts/rubric/items/` are canonical. Edit those definitions, then rerun `ki dev skill rubric ki-radar --write`.

Line-by-line criteria for auditing ki-radar. Classifications are derived from item aspects: **[M]** mechanical, **[J]** judgment, **[M + J]** hybrid, and **[M-heuristic + J]** hybrid with heuristic mechanical evidence. Sources are cited as declared by each canonical item.

## Contents

- [SCHEMA — Snapshot schema](#schema--snapshot-schema)
- [EVIDENCE — Evidence quality](#evidence--evidence-quality)
- [CLASSIFICATION — Subject classification](#classification--subject-classification)
- [LIFECYCLE — Review lifecycle](#lifecycle--review-lifecycle)
- [RUBRIC — Generated rubric publication](#rubric--generated-rubric-publication)

## SCHEMA — Snapshot schema

→ [standard](standard-radar.md#42-snapshots)

Each TOML snapshot has one stable, attributable, mechanically valid representation.

- **SCHEMA-1 [M] — each snapshot’s schema, identities and owners are valid** — Each subject kind’s snapshot parses as schema 1 TOML with only its declared maps and fields, stable lower-case hyphenated identities repeated exactly in their records, and the required typed fields without unknown keys; an agentic subject has explicit non-empty owner, uncertainty, and return-trigger values, and any `card` names a card that exists in `ki-agentic-ecosystems`’ `knowledge/` graph when that skill sits beside the radar. (standard-radar.md#42-snapshots, standard-agentic-radar.md#42-snapshot-schema, standard-model-radar.md#42-snapshot-schema)
  - _Remediation:_ diagnostic — Correct authored structure or identity only after confirming the intended record, owner, uncertainty, and return trigger; do not infer missing facts.

## EVIDENCE — Evidence quality

→ [standard](standard-radar.md#43-evidence)

Evidence is linked, classified, applicable, and proportionate to how it is used.

- **EVIDENCE-1 [M] — evidence records and links are valid** — Every evidence record carries the shared core of a current identity, title, HTTP(S) source, review date and notes, plus its subject kind’s classification: an evidence class and source role on the agentic snapshot, an evaluation unit and independence class on the model snapshot. Every evidence and counter-evidence reference resolves without duplication or support/counter overlap; provider claims are not primary, and discovery or counter-evidence records are not used as direct support. (standard-radar.md#43-evidence, standard-agentic-radar.md#43-evidence, standard-model-radar.md#425-evidence)
  - _Remediation:_ diagnostic — Review the source claim, intended role and record linkage before correcting authored evidence; do not invent replacements.
- **EVIDENCE-2 [J] — evidence is applicable and proportionate** — Consequential claims use evidence applicable to the precise subject, unit and claim, keep materially independent corroboration where available and local-fit evidence proportional to any recommendation, retain uncertainty and counter-evidence, and never treat a provider performance claim, package count or vendor assertion as decisive. (standard-radar.md#46-movement-and-adoption, standard-agentic-radar.md#44-evidence-and-movement-review, standard-model-radar.md#44-evidence-and-movement-review)
  - _Evidence scope:_ The target skill and the evidence named by this criterion.
  - _Review prompt:_ Does each consequential classification, recommendation or movement have applicable, sufficiently independent evidence with local fit, uncertainty and counter-evidence preserved?
  - _Outcomes:_ conforming; gap; exclusion
  - _Conforming guidance:_ Record the review as conforming, a named Gap with its next action, or an explicit justified exclusion.

## CLASSIFICATION — Subject classification

→ [standard](standard-agentic-radar.md#422-subjects)

Maturity, implementation, interoperability, and structural terms retain precise evidence-backed meaning.

- **CLASSIFICATION-1 [M + J] — maturity and implementation claims are supported** — On the agentic snapshot, closed subject, stewardship, maturity, implementation, and interoperability vocabularies are used; non-specification subjects remain not-applicable; versioned or stable maturity, implementation breadth, conformance, and demonstrated interoperability each have their required evidence class. (standard-agentic-radar.md#422-subjects)
  - _Remediation:_ guarded — Review primary evidence and decide whether the classification or supporting record is authoritative before editing.
  - _Evidence scope:_ The target skill and the evidence named by this criterion.
  - _Review prompt:_ Do maturity, implementation, and interoperability labels accurately describe the bounded evidence without promoting patterns, research, or vendor terms into formal standards?
  - _Outcomes:_ conforming; gap; exclusion
  - _Conforming guidance:_ Record the review as conforming, a named Gap with its next action, or an explicit justified exclusion.
- **CLASSIFICATION-2 [J] — structural terms remain meaningfully distinct** — Agent loops, branching supervisor trees, graph-orchestrated control flow, knowledge graphs, and provenance graphs are classified by the aspect being observed rather than collapsed by shared graph terminology. (standard-agentic-radar.md#45-structural-distinctions)
  - _Evidence scope:_ The target skill and the evidence named by this criterion.
  - _Review prompt:_ Are control loops, delegation hierarchy, executable control flow, semantic knowledge, and evidence lineage kept distinct wherever structural subjects are described?
  - _Outcomes:_ conforming; gap; exclusion
  - _Conforming guidance:_ Record the review as conforming, a named Gap with its next action, or an explicit justified exclusion.

## LIFECYCLE — Review lifecycle

→ [standard](standard-radar.md#44-dates-and-cadence)

Dates, classifications, stances, ownership and return triggers remain current and coherent.

- **LIFECYCLE-1 [M] — vocabulary and review dates are valid** — Each snapshot’s classifications, stances and movements use their closed vocabularies; dates are real, non-future ISO calendar dates; a review older than 35 days, the monthly cadence plus four days of grace, warns without invalidating historical evidence. (standard-radar.md#44-dates-and-cadence, standard-agentic-radar.md#422-subjects, standard-model-radar.md#43-dates-and-freshness)
  - _Remediation:_ diagnostic — Refresh stale evidence or correct malformed vocabulary and dates only after checking the authored source and intended classification.
- **LIFECYCLE-2 [M + J] — stance, support and lifecycle combinations are coherent** — On the agentic snapshot, inward movement cannot accompany Hold, outward movement cannot accompany Adopt, and Trial or Adopt requires local-evaluation evidence. On the model snapshot, default routes are adopted and use active models, retired models have only hold and not-integrated routes, benchmark retirement and applicability agree, and successors resolve. Mechanical contradictions are reported, but their repair needs an explicit stance, recommendation or lifecycle decision. (standard-radar.md#46-movement-and-adoption, standard-agentic-radar.md#422-subjects, standard-model-radar.md#423-executable-routes, standard-model-radar.md#424-benchmarks)
  - _Remediation:_ guarded — Review the supporting evidence and decide which stance, recommendation, support, retirement or benchmark state is authoritative before editing.
  - _Evidence scope:_ The target skill and the evidence named by this criterion.
  - _Review prompt:_ Does each stance, recommendation, support level, retirement and movement express a defensible reviewed Knowledge Islands decision, with a concrete use case, explicit uncertainty, owner and actionable return trigger, rather than merely a mechanically consistent tuple?
  - _Outcomes:_ conforming; gap; exclusion
  - _Conforming guidance:_ Record the review as conforming, a named Gap with its next action, or an explicit justified exclusion.

## RUBRIC — Generated rubric publication

→ [standard](../../../keystone/ki-skills/references/standard-rubric-authoring.md)

The tracked readable rubric is the exact publication of the structured catalogue.

- **RUBRIC-1 [M] — structured catalogue publication is exact** — A structured catalogue tracks `references/rubric.md` as its exact generated publication. The host supplies only validated publication evidence: a missing or differing file is a FAIL; during CONFORM this item requests the host-owned derived write without choosing its path or bytes. (../../../keystone/ki-skills/references/standard-rubric-authoring.md#414-generated-rubric-publication)
  - _Remediation:_ automatic
