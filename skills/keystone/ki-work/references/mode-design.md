# Design

`ki-work design` is a subcommand of the Work guild's lead. It was the `ki-work-design` process skill until the guild folded it into `ki-work` (PROCESS-SUBCOMMANDS), and keeps that skill's procedure and boundaries.

Runs one design from an owner's proposal to approved decisions and a rollout of ordinary work records.

Read [the design-loop standard](standards-work-design.md) before acting. Start each artefact from its template: [brief](../assets/design/brief.md), [review](../assets/design/review.md), [merged report](../assets/design/report.md) and [decisions](../assets/design/decisions.md). [Source notes](sources.md) record the worked exemplar.

## When to use it

Use the loop when the owner has a proposal for something whose shape is still open and wrong choices would be costly to unwind: a new Project or theme, a model several skills or repositories must share, or a migration across the estate. Kris starts it by name, for example `/ki-work design start techne`.

Do not use it for work that already has a clear shape. A finite change with a known goal goes straight to `ki-work next` for capture and `ki-work plan` for readiness; an open question with one obvious answer is a Discussion entry on its record.

## Contract

The loop has five stages - brief, independent reviews, merged report, decisions and rollout - each with the contract the standard defines. Reviews are independent and read-only and may challenge earlier decisions, which only the owner settles; disputes are settled on cited evidence rather than by vote, and only the owner decides. Anything the evidence cannot settle goes to the owner as a tagged decision with lettered options and a recommendation.

The design is a change document, committed as each stage settles it, in the package of the work whose concern it shapes, `work/<territory>/<id>/` in the Cairn store; the brief and reviews stay in the run packet, `$TMPDIR/ki-agents/<run>/`, with one shared slug prefix, until the merged report homes them, and no `design/` folder sits in a package or under `Streams/`. The artefacts are temporary: each graduates when its decisions have durable homes and is deleted in the same change. A Decision Record under `ki-decision-records` follows only when a decision changes, refining an existing record in place where one owns the concern. Local state holds only runtime material such as agent prompts and status files.

The loop writes no work record, grants itself no authority and never chooses for the owner. Push, prune, release and acceptance follow only from a grant the change document's decisions quote.

## Relationship boundary

- `ki-work next` receives the rollout: it captures each record the decisions call for and selects the pilot.
- `ki-work plan` readies each captured record against the decisions, which its Context cites.
- `ki-coordination` delivers a frozen wave of independent Ready records under the decisions' authority grant, recorded in its change document; `ki-work accept` closes records under the same grant.
- `ki-decision-records`, when selected, owns the Decision Record's shape and identity.
- `ki-delegation`, when selected, supplies the packet for any high-risk reviewer or rollout handoff.
- The [Project registry standard](standards-project-registry.md) owns the flat Project or theme note, which never points into a package and links any resulting Decision Record.
- `ki-work-package` owns the package, its closed list, its tidy rules and its `_index.md`; `ki-coordination` says when the package is tidied and whether an outcome is homed.

## Invocation

- `help`, `-h`, or `?` explains the loop without writing.
- `start <subject>` names the subject and the work whose package holds its design, then writes the brief into the run packet.
- `resume <id>` reads the design's change document, and the run packet while one is open, and continues at the first missing stage.

With no subject, no owning work or no owner's proposal, report the missing input and stop.
