---
name: ki-radar
ki-document-type: skill@2026-11-17T00:55:00Z
ki-kind: governance
ki-applicability: declaration-only
ki-guild: agentic-ecosystems
ki-depends-on: []
ki-shared-dependencies: [ki-skills:rubric]
description: >
  Maintain one evidence-backed radar, reviewed monthly, for agentic protocols, interfaces, organisations,
  architectures, research and vendor terms, and for models and model-agent routes with their dated model-tier
  candidates. Use for maturity, interoperability, stance, model comparison, benchmark relevance, tiers or retirements;
  `ki-agentic-ecosystems` defines terms, `ki-acquire pulse` discovers signals, and `ki-work next` owns follow-on work.
argument-hint: "audit | conform | educate | help | refresh"
---

# Knowledge Islands radar

This governance skill maintains one portable, reviewable radar of two subject kinds without turning observation into adoption. Kris merged the agentic and model radars into it on 22 November 2026 (RADAR-MERGE a).

Read [the radar standard](references/standard-radar.md) first: it holds what both kinds share, the evidence core, the monthly cadence, the one REFRESH and the adoption boundary. Each kind keeps its own standard and snapshot:

- **Agentic subjects:** [the agentic-radar standard](references/standard-agentic-radar.md) and [the agentic snapshot](references/agentic-radar.toml), for protocols, interface formats, organisations, architectures, research claims and vendor terms.
- **Model subjects:** [the model-radar standard](references/standard-model-radar.md) and [the model snapshot](references/model-radar.toml), for models, executable routes and benchmarks, with [the model-tier standard](references/standard-model-tiers.md) holding the dated Claude and Codex candidates for each portable purpose, the Codex role resolver and the rule for moving a tier default (MODEL-TIERS a).

[The generated rubric](references/rubric.md) publishes one set of criteria for both, and [the tracked sources](references/sources.md) govern refresh inputs.

What an agentic subject is belongs to `ki-agentic-ecosystems`, whose card the subject names in its `card` field, such as the [Model Context Protocol](../../keystone/ki-agentic-ecosystems/knowledge/specs/mcp/spec.mcp.md); the radar never defines it again. The radar does not choose an agent architecture, rank models automatically, install integrations or agents, change runtime defaults, buy access, or treat a protocol version, package count, benchmark or vendor claim as proof. `ki-acquire pulse` owns public-signal discovery, `ki-env-tokenomics` owns portable model-purpose categories, runtime adapters own effective configuration, capability REFRESH modes own capability-specific policy, and `ki-work next` owns downstream work capture.

## Operating modes

Invoked as `help`, `-h`, or `?`, emit the generated HELP block and stop. With no recognised mode, emit the same HELP and, only in an interactive session, offer a mode choice.

### Mode AUDIT

Run `ki repo audit --skill ki-radar --repo <repo>` for deterministic schema, evidence, classification and lifecycle checks over both snapshots, without fetching sources or ranking anything. Then review the judgment criteria in [the generated rubric](references/rubric.md): whether evidence is independent and applicable enough for the recorded maturity, stance or recommendation, and whether architectural terms remain meaningfully distinct.

AUDIT is read-only. Report mechanical findings before judgment gaps and never infer a preferred stance from source count.

### Mode CONFORM

Run AUDIT first, then `ki repo conform --skill ki-radar --repo <repo> --dry-run`. Only the generated rubric publication is automatically conformable. Changes to either snapshot are authored and guarded, because even a syntactic-looking correction can change maturity, stance, recommendation, support, retirement or ownership.

### Mode EDUCATE

Explain the two subject kinds, the evidence core and each kind's classification, the maturity, implementation, interoperability, recommendation, support and retirement vocabularies, owner and return-trigger requirements, evaluation units, and the adoption boundary. Use examples to distinguish agent loops, branching supervisor trees, graph-orchestrated control flow, knowledge graphs and provenance graphs. Do not scaffold or mutate a repository.

### Mode REFRESH

One REFRESH covers both subject kinds, monthly or when a return trigger fires, under [the radar standard's REFRESH](references/standard-radar.md#45-refresh). It applies only to this skill's canonical files in `ki-agent-backpack`; from an installed copy, stop and redirect to the backpack. A PULSE verdict to act on an agentic or model signal fires its return trigger.

Read [the tracked sources](references/sources.md), perform a bounded current-evidence review, and reconcile proposed changes against both snapshots and the model-tier tables. Preserve uncertainty and counter-evidence. Provider claims alone cannot move a subject inward; Adopt or Trial requires a concrete Knowledge Islands use case and local evidence.

Route material consequences to the owning capability REFRESH mode, a Decision Record, or `ki-work next`. Never mutate a consumer directly from REFRESH.

## Notes

- A community group is not automatically a formal standard, and a versioned protocol is not automatically stable.
- Reference implementations, independent implementations, conformance results and demonstrated interoperability are separate evidence states.
- Compare model results only within a declared evaluation unit: bare model, provider endpoint, model-agent route or complete task environment.
- Record exact openness and licence per model variant; do not infer local practicality from weight availability.
- Begin local-fit evaluation with public or synthetic repositories. Private-repository evaluation requires separate authority.
