---
ki-document-type: mode@2026-11-17T00:55:00Z
---

# Mode REVIEW — assess a skill's evolution

Use REVIEW for an existing skill or skill set when the question is architectural evolution rather than rubric conformance alone.

1. Require an explicit skill or repository target. Run AUDIT first and retain its mechanical result; resolve conformance failures before proposing optimisation.
2. Read the selected `SKILL.md`, its on-demand references, executable helpers, tests, and the adjacent implementation that the skill governs. Identify repeated deterministic procedures, expensive loaded detail, trigger collisions, unclear ownership, and work that belongs in another automation shape. For each governance skill, test whether a judgment-only or hybrid AUDIT criterion has a deterministic subcheck, and whether a diagnostic or guarded mechanical CONFORM result now permits a bounded, idempotent, owner-controlled repair. Keep the residual judgment and authority boundary explicit; propose concrete failing evidence before changing either classification.
3. Apply the [candidate-finding standard](standard-candidate-findings.md). Each candidate is also a finding in the shape of `ki-authoring`'s [review standard](../../ki-authoring/references/standard-review.md#44-a-findings-shape): its Evidence is the anchor, and it carries the finding's kind, whether it blocks and its confidence, with its Proposed action as what to change; the report ends with what was not checked. Prefer the smallest suitable disposition: a reference before a script, a script before a new skill, and a skill before a standing agent or hook only when the trigger and scope are genuinely independent.
4. Reconcile the candidates with the canonical roadmap through the candidate-finding standard, present the proposed routes, and stop for the owner's outcome, one of the [review standard](../../ki-authoring/references/standard-review.md#45-the-outcome)'s two: **Approve,** the skill stands as it is and no candidate is taken up; or **Accept with changes,** the accepted candidates becoming the work it creates, routed to the roadmap through the repository's ordinary process. Confirming the routes is part of that outcome, not an outcome of its own; the review itself changes nothing.

AUDIT answers whether a skill meets the current standard. REVIEW answers how it could evolve without weakening its scope, safety, or token economy.
