---
ki-document-type: rubric@2026-11-17T00:55:00Z
---

<!-- GENERATED FILE: produced by `ki dev skill rubric`. Do not hand-edit; edit scripts/rubric/items/, then rerun `ki dev skill rubric <skill> --write`. -->

# Generated rubric — change-management adapter selection and Project registry close-out

> **Generated publication.** The TypeScript rubric items under `scripts/rubric/items/` are canonical. Edit those definitions, then rerun `ki dev skill rubric ki-work --write`.

Line-by-line criteria for auditing ki-work. Classifications are derived from item aspects: **[M]** mechanical, **[J]** judgment, **[M + J]** hybrid, and **[M-heuristic + J]** hybrid with heuristic mechanical evidence. Sources are cited as declared by each canonical item.

## Contents

- [SELECT — adapter selection](#select--adapter-selection)
- [PROJ — Project registry](#proj--project-registry)

## SELECT — adapter selection

→ [standard](standard-change-management-adapters.md)

One declared, locally resolvable, applicable forward-work adapter, with no implicit fallback.

- **SELECT-1 [M] — explicit adapter** — The repository selects exactly one supported adapter, declares its owning skill, and uses it for the declared repository kind. (standard-change-management-adapters.md)
  - _Remediation:_ diagnostic — Declare one supported adapter, its owning skill table, and a compatible repository kind.

## PROJ — Project registry

→ [standard](standard-project-registry.md)

A Capital's Projects are assessed before they close, and its idea-stage Projects stay within their caps.

- **PROJ-1 [M] — Project close-out assessment** — A Capital's active or paused Project with no open record in any locally registered checkout, or a completed or cancelled Project, carries a ### Close-out assessment in its ## Notes before its lead closes it. (standard-project-registry.md#45-close-out-assessment)
  - _Remediation:_ diagnostic — Assess what was delivered against the Project's Outcome and whether follow-up or remedial work is needed, capture that work as triage records in the owning repositories, and write the assessment in ## Notes; the lead then decides whether to close the Project.
- **PROJ-2 [M] — idea-stage Projects** — A Capital's idea-stage Project, planned with a decision as its outcome, is named by no open record, and there is at most one per theme and three across the territory. (standard-project-registry.md#43-idea-stage-project)
  - _Remediation:_ diagnostic — Graduate an idea-stage Project to active with a delivery Outcome before records name it; over a cap, graduate or fold an idea-stage Project, or have its lead lift the cap.
