---
ki-document-type: rubric@2026-11-17T00:55:00Z
---

<!-- GENERATED FILE: produced by `ki dev skill rubric`. Do not hand-edit; edit scripts/rubric/items/, then rerun `ki dev skill rubric <skill> --write`. -->

# Generated rubric — Knowledge Islands knowledge bases

> **Generated publication.** The TypeScript rubric items under `scripts/rubric/items/` are canonical. Edit those definitions, then rerun `ki dev skill rubric ki-repo-kb --write`.

Line-by-line criteria for auditing ki-repo-kb. Classifications are derived from item aspects: **[M]** mechanical, **[J]** judgment, **[M + J]** hybrid, and **[M-heuristic + J]** hybrid with heuristic mechanical evidence. Sources are cited as declared by each canonical item.

## Contents

- [RUBRIC — Generated rubric publication](#rubric--generated-rubric-publication)
- [ZONE — zone layout](#zone--zone-layout)
- [CONFIG — KB configuration](#config--kb-configuration)
- [ADMIN — Admin zone](#admin--admin-zone)
- [ROUTE — routing and placement](#route--routing-and-placement)
- [NOTE — note conventions](#note--note-conventions)
- [MEM — memory cascade](#mem--memory-cascade)
- [LINK — base linking](#link--base-linking)
- [GATE — commit gate](#gate--commit-gate)
- [STREAM — Streams structure](#stream--streams-structure)
- [ENACT — Enactment gate](#enact--enactment-gate)
- [ACT — knowledge-base activities](#act--knowledge-base-activities)
- [LA — artifact structure](#la--artifact-structure)
- [LA-F — artifact frontmatter](#la-f--artifact-frontmatter)
- [PRINCIPAL — principal governance](#principal--principal-governance)

## RUBRIC — Generated rubric publication

→ [standard](../../../keystone/ki-skills/references/standard-rubric-authoring.md)

The tracked readable rubric is the exact publication of the structured catalogue.

- **RUBRIC-1 [M] — structured catalogue publication is exact** — A structured catalogue tracks `references/rubric.md` as its exact generated publication. The host supplies only validated publication evidence: a missing or differing file is a FAIL; during CONFORM this item requests the host-owned derived write without choosing its path or bytes. (../../../keystone/ki-skills/references/standard-rubric-authoring.md#414-generated-rubric-publication)
  - _Remediation:_ automatic

## ZONE — zone layout

→ [standard](standard-knowledge-base.md)

Required zones, indexes, working areas, output placement, and retained digest scaffold.

- **ZONE-1 [M] — required zone layout** — Calendar/, Pillars/, Resources/, Streams/, and Admin/ resolve through any declared zone alias to readable directories, including directory symlinks. (standard-knowledge-base.md)
  - _Remediation:_ diagnostic — Correct the required zone layout or placement, then rerun the audit.
- **ZONE-2 [M] — same-name zone indexes** — Each present zone has its same-name index note. (standard-knowledge-base.md)
  - _Remediation:_ automatic
- **ZONE-3 [M] — root memory index** — The resolved Admin zone carries MEMORY.md. (standard-knowledge-base.md)
  - _Remediation:_ automatic
- **ZONE-4 [M] — working areas are not zones** — +/ and -/ are reported as working areas only and are exempt from the zone-index rule. (standard-knowledge-base.md)
  - _Remediation:_ diagnostic — Correct the required zone layout or placement, then rerun the audit.
- **ZONE-5 [M] — produced outputs use the outbound working area** — Notes with note_type session-digest reside under the resolved -/ working area; cross-repository handoffs belong to ki-trades. (standard-knowledge-base.md)
  - _Remediation:_ diagnostic — Correct the required zone layout or placement, then rerun the audit.
- **ZONE-6 [M] — session-digest scaffold is canonical** — A declared ki-repo-kb capability retains the exact -/_DIGESTS/README.md scaffold after digest records are removed. (standard-knowledge-base.md)
  - _Remediation:_ automatic

## CONFIG — KB configuration

→ [standard](standard-knowledge-base.md)

Validate-down `[skills.ki-repo-kb]` configuration and zone aliases.

- **CONFIG-0 [M] — parseable KB configuration** — When present, .ki.toml parses before the KB table is evaluated. (standard-knowledge-base.md)
  - _Remediation:_ diagnostic — Correct the TOML syntax before relying on KB configuration.
- **CONFIG-1 [M] — known configuration keys** — Only required_frontmatter, preflight, zones, templates, boolean strict_link_resolution, and the folded bindings activities_dir, backpack, artifacts_dir, sync_threshold_hours and process_note are recognised beneath [skills.ki-repo-kb]. (standard-knowledge-base.md)
  - _Remediation:_ diagnostic — Correct the selected ki-repo-kb configuration evidence, then rerun the audit.
- **CONFIG-2 [M] — non-redundant zone aliases** — A zone alias does not restate its canonical folder name. (standard-knowledge-base.md)
  - _Remediation:_ diagnostic — Correct the selected ki-repo-kb configuration evidence, then rerun the audit.
- **CONFIG-3 [M] — canonical zone alias keys** — Every [skills.ki-repo-kb.zones] key names a canonical zone or working area. (standard-knowledge-base.md)
  - _Remediation:_ diagnostic — Correct the selected ki-repo-kb configuration evidence, then rerun the audit.
- **CONFIG-4 [M] — KB configuration boundary** — The checker validates only the ki-repo-kb table; shared ki-repo store_roles metadata selects mirror applicability without validating sibling tables. (standard-knowledge-base.md)
  - _Remediation:_ diagnostic — Correct the selected ki-repo-kb configuration evidence, then rerun the audit.
- **CONFIG-5 [M] — declared preflight paths** — Literal preflight paths resolve under the base; globs remain runtime-resolved. (standard-knowledge-base.md)
  - _Remediation:_ diagnostic — Correct the selected ki-repo-kb configuration evidence, then rerun the audit.
- **CONFIG-6 [M] — contained process note binding** — When process_note is declared, it resolves to a regular file beneath the base without symlink traversal. (standard-knowledge-base.md)
  - _Remediation:_ diagnostic — Correct the selected ki-repo-kb configuration evidence, then rerun the audit.

## ADMIN — Admin zone

→ [standard](standard-knowledge-base.md)

Optional Admin subdivisions and their governance baseline.

- **ADMIN-1 [M] — optional Admin subdivisions** — When Governance/ or Operations/ is active, it has its same-name index; absent subdivisions warn only. (standard-knowledge-base.md)
  - _Remediation:_ diagnostic — Add the required Admin evidence or correct its local structure, then rerun the audit.
- **ADMIN-2 [M] — governance charter** — An active Admin/Governance/ directory carries Charter.md. (standard-knowledge-base.md)
  - _Remediation:_ diagnostic — Add the required Admin evidence or correct its local structure, then rerun the audit.
- **ADMIN-3 [M] — governance conformance record** — An active Admin/Governance/ directory carries Conformance.md. (standard-knowledge-base.md)
  - _Remediation:_ diagnostic — Add the required Admin evidence or correct its local structure, then rerun the audit.

## ROUTE — routing and placement

→ [standard](standard-knowledge-base.md)

Judgment review of the knowledge-base routing test.

- **ROUTE-1 [J] — notes follow the routing test** — Notes are placed in the zone selected by their time-bound, active-work, settled-knowledge, or external-reference role. (standard-knowledge-base.md)
  - _Evidence scope:_ Sampled notes, their current zones, and the routing test.
  - _Review prompt:_ Does each sampled note sit in the zone selected by the routing test?
  - _Outcomes:_ conforming; move note; routing clarification
  - _Conforming guidance:_ Move a note only through the base owner’s routing decision; preserve staged records and established owners.

## NOTE — note conventions

→ [standard](standard-frontmatter.md)

Frontmatter mechanics and note-authoring judgment.

- **NOTE-1 [M + J] — declared required frontmatter** — When required_frontmatter is declared, each note with frontmatter carries those keys; otherwise key requirements remain a judgment call. (standard-frontmatter.md, standard-knowledge-base.md)
  - _Remediation:_ diagnostic — Add the declared required frontmatter keys, then rerun the audit.
  - _Evidence scope:_ The base frontmatter convention and its host guidance.
  - _Review prompt:_ When no required_frontmatter list is declared, are the required keys appropriate to this base and its host guidance?
  - _Outcomes:_ conforming; convention revision; not applicable
  - _Conforming guidance:_ Set required keys through the base owner’s convention; do not infer them from a mechanical finding.
- **NOTE-1a [M] — well-formed frontmatter fences** — Every opening frontmatter fence closes. (standard-frontmatter.md)
  - _Remediation:_ diagnostic — Close the affected frontmatter fence, then rerun the audit.
- **NOTE-1b [M] — snake_case frontmatter keys** — Top-level frontmatter keys use snake_case. (standard-frontmatter.md)
  - _Remediation:_ diagnostic — Rename affected top-level frontmatter keys to snake_case, then rerun the audit.
- **NOTE-1c [M] — explicit note type metadata** — Every KB-owned note frontmatter uses note_type and never the legacy generic type field or retired handoff classification; acquisition-adapter and protocol records remain with their owning skills. (standard-frontmatter.md)
  - _Remediation:_ diagnostic — Use note_type for KB notes. Route retired handoff records through ki-trades rather than relabelling them; preserve adapter and protocol metadata.
- **NOTE-2 [J] — note naming convention** — Calendar notes are dated and other note names follow the base convention. (standard-knowledge-base.md)
  - _Evidence scope:_ Sampled notes and the base naming convention.
  - _Review prompt:_ Do note names follow the base-specific naming convention?
  - _Outcomes:_ conforming; rename note; convention revision
  - _Conforming guidance:_ Apply the base owner’s naming convention without inventing a new taxonomy.
- **NOTE-3 [J] — source and analysis distinction** — Facts are cited to a source path or reference, and analysis is labelled where the base distinguishes it. (standard-knowledge-base.md)
  - _Evidence scope:_ Sampled factual and analytical note content and the base convention.
  - _Review prompt:_ Are facts sourced and analysis labelled according to the base convention?
  - _Outcomes:_ conforming; note revision; convention revision
  - _Conforming guidance:_ Add evidence or labels according to the base convention; do not manufacture sources.
- **NOTE-4 [M + J] — substantive source mirrors** — Declared source mirrors name one aliased store file, an allowed mirror_type, checksum syntax and, unless indexed, some body content; fidelity remains judgment. (standard-knowledge-base.md, standard-source-mirrors.md)
  - _Remediation:_ diagnostic — Have the base owner reconcile mirror provenance and durable extracts; never open a source store during this audit.
  - _Evidence scope:_ Sampled declared source mirrors and the base-owned enrichment record.
  - _Review prompt:_ Does each extract carry the durable facts a reader would otherwise open the binary for, without private detail of no enduring use? Are fidelity and checksum freshness verified only under base authority?
  - _Outcomes:_ conforming; mirror enrichment; not applicable
  - _Conforming guidance:_ A minimum word count is a pointer diagnostic, not evidence of source fidelity or authorisation.

## MEM — memory cascade

→ [standard](standard-knowledge-base.md)

Memory-index accuracy and its always-loaded anchor.

- **MEM-1 [J] — active-Pillar memory accuracy** — Admin/MEMORY.md lists the Pillars actually active in the base. (standard-knowledge-base.md)
  - _Evidence scope:_ The memory index and active Pillars in the base.
  - _Review prompt:_ Does the memory index accurately list active Pillars?
  - _Outcomes:_ conforming; memory revision; not applicable
  - _Conforming guidance:_ Update the owned memory index from current base evidence; do not infer active status.
- **MEM-2 [M] — always-loaded memory cascade anchor** — Root CLAUDE.md or AGENTS.md anchors the memory cascade before substantive work. (standard-knowledge-base.md)
  - _Remediation:_ diagnostic — Add or correct the root memory cascade anchor, then rerun the audit.

## LINK — base linking

→ [standard](standard-knowledge-base.md)

Mechanical internal-link resolution in exact case and judgment review of the preferred GFM form.

- **LINK-1 [M + J] — Internal links resolve in exact case** — Ambiguous wikilinks fail; unresolved or wrong-case internal links warn unless strict_link_resolution is true; GFM is preferred. (standard-knowledge-base.md)
  - _Remediation:_ diagnostic — Repair missing or wrong-case destinations and qualify ambiguous wikilinks, then rerun the audit; supported link syntax alone is never a defect.
  - _Evidence scope:_ Sampled base notes and the prescribed linking convention.
  - _Review prompt:_ Do sampled notes prefer descriptive note-relative GFM links in angle brackets, while retaining readable supported wikilinks and preserving meaning during conversion?
  - _Outcomes:_ conforming; note revision; convention clarification
  - _Conforming guidance:_ Revise links to the established convention; do not change the convention from a sample alone.

## GATE — commit gate

→ [standard](standard-knowledge-base.md)

What a Knowledge Base commit gate runs.

- **GATE-1 [M] — check-only commit gate** — Where a committed `.githooks/pre-commit` exists, it runs only fast check-only staged lints: no `ki repo audit`, `ki repo conform`, `ki repo repair`, `--fix` or `--write`. The full `ki repo audit` runs in CI. `ki-repo` HOOK-1 owns whether the hook exists and HOOK-4 its canonical text. (standard-knowledge-base.md)
  - _Remediation:_ diagnostic — Copy the canonical pre-commit from `assets/githooks/`, then rerun the audit.

## STREAM — Streams structure

→ [standard](standard-streams-structure.md)

Operational-area layout, legacy migration, and upward-only registry notes.

- **STREAM-1 [M] — operational areas** — Streams contains the Roadmap operational area and no design folder; recurring definitions belong in Activities, with Trades reserved for later explicit adoption. (standard-streams-structure.md)
  - _Remediation:_ diagnostic — Establish Roadmap; move any design folder into a change document in the package of its work, work/<territory>/<id>/; reconcile any Housekeeping definitions into configured Activities only with owner approval, preserving linked-run evidence.
- **STREAM-2 [M] — legacy state folders** — Legacy state and Focus folders, Streams/Initiatives/ and Project folder notes are migration inputs, not target Streams structure. (standard-streams-structure.md)
  - _Remediation:_ diagnostic — Classify each retained legacy record before removing or replacing a legacy navigation folder; move each Initiative to a theme page and each Project folder note to a flat note.
- **STREAM-4 [J] — adapter-owned records** — Roadmap records follow their owning adapter; recurring definitions are Activity notes rather than a generic Streams record model. (standard-streams-structure.md)
  - _Evidence scope:_ Roadmap records and any recurring definitions still awaiting reconciliation out of Streams.
  - _Review prompt:_ Does each roadmap record follow its adapter, with recurring obligations routed to the configured Activity collection?
  - _Outcomes:_ conforming; adapter migration required; classification decision required
  - _Conforming guidance:_ Route the record to the correct area and apply its owning adapter’s format; record any unresolved classification decision.
- **STREAM-5 [J] — legacy migration disposition** — Each retained legacy Stream has a deliberate roadmap, recurring Activity, canonical-knowledge, or prune disposition. (standard-streams-structure.md)
  - _Evidence scope:_ Sampled legacy Streams records and their owner-approved migration decisions.
  - _Review prompt:_ Does each sampled legacy record have an appropriate explicit disposition?
  - _Outcomes:_ conforming; migration required; owner decision required
  - _Conforming guidance:_ Record the owner-approved destination before moving, retaining, or pruning the legacy record; never infer it from the former path.
- **STREAM-9 [M] — upward-only registry notes** — Project notes and theme pages under Streams/Projects/ and Streams/Themes/, and any legacy Initiative notes, name no work records and carry no dated ## Update section; records link upwards to their Project or theme. (standard-streams-structure.md)
  - _Remediation:_ diagnostic — Remove record lists, record links and status narrative from the note, keeping any idea or context in ## Notes. Records carry their own project or theme, and ki views list them.

## ENACT — Enactment gate

→ [standard](standard-enactment-process.md)

The always-loaded canonical-change gate anchor, routing changes through ki-work.

- **ENACT-1 [M] — always-loaded change-management gate** — A base with governed work anchors its canonical-change routing in root CLAUDE.md or AGENTS.md. (standard-enactment-process.md)
  - _Remediation:_ diagnostic — Add the appropriate canonical change-management anchor only after confirming the base carries governed work and the always-loaded instruction surface.
- **ENACT-2 [J] — imperative gate directive** — The anchor is imperative and routes canonical changes through the selected ki-work adapter. (standard-enactment-process.md)
  - _Evidence scope:_ The always-loaded gate anchor and its stated exceptions.
  - _Review prompt:_ Is the anchor a genuine imperative directive with the appropriate exemptions?
  - _Outcomes:_ conforming; directive revision required; exception decision required
  - _Conforming guidance:_ Rewrite the anchor as a clear imperative directive and document only the process-approved exemptions.

## ACT — knowledge-base activities

→ [standard](standard-activities.md)

Activity note structure, frontmatter, realization-specific declarations, and safe index maintenance.

- **ACT-S-1 [M + J] — activity index** — `Activities.md` exists when one or more activity notes exist and links every note with Markdown or Obsidian wikilinks. (standard-activities.md)
  - _Remediation:_ automatic
  - _Evidence scope:_ The Activities index, its note entries, ordering, and reader-facing descriptions.
  - _Review prompt:_ Is the index current, well ordered, and informative rather than merely mechanically complete?
  - _Outcomes:_ conforming; index revision required; index structure decision required
  - _Conforming guidance:_ Revise the index ordering or descriptions so a reader can understand and navigate the active activity set; record a structure decision for a material reorganisation.
- **ACT-S-2 [M] — activity collection location** — The configured activity collection resolves safely beneath an existing base. (standard-activities.md)
  - _Remediation:_ diagnostic — Correct activities_dir so it resolves safely beneath the selected base, or repair the unsafe collection entry without following links.
- **ACT-S-3 [M] — current Activity configuration** — activities_dir and backpack sit in [skills.ki-repo-kb]; harness is read as backpack's old name and warned. CONFIG-1 owns the table's other keys (KB-FOLD b). (standard-activities.md)
  - _Remediation:_ diagnostic — Rename harness to backpack, or remove harness where backpack is already declared.
- **ACT-F-1 [M] — activity status** — Frontmatter-bearing activity notes declare `status` as `active`, `paused`, or `retired`. (standard-activities.md)
  - _Remediation:_ diagnostic — Add a valid activity status that reflects the activity’s actual lifecycle state.
- **ACT-F-2 [M] — activity realization** — Frontmatter-bearing activity notes declare a `realization`. (standard-activities.md)
  - _Remediation:_ diagnostic — Declare the activity realization that accurately describes how the activity is invoked or operated.
- **ACT-F-3 [M] — recognized realization** — Unknown realization values are surfaced for environment documentation without blocking extension. (standard-activities.md)
  - _Remediation:_ diagnostic — Document an unknown realization in the agentic environment or select a known realization only when it accurately describes the activity.
- **ACT-F-4 [M] — activity author** — Frontmatter-bearing activity notes declare who authored or adopted the activity. (standard-activities.md)
  - _Remediation:_ diagnostic — Declare the person or agent that authored or adopted the activity according to its actual provenance.
- **ACT-F-5 [M] — activity home and theme** — An active Activity's home is the territory's regular work, or the Project named in `project` when it is that Project's own recurring check. A `theme`, at the top level or in its housekeeping profile, is an optional label and the two agree; the former `initiative` warns until 2026-11-07 and fails from that day. (standard-activities.md#43-home)
  - _Remediation:_ diagnostic — Rename `initiative` to the optional `theme`, agreed with the Activity owner; name `project` only for a Project's own recurring check.
- **ACT-R-1 [M] — slash-command skill field** — A `slash-command` activity declares its `skill` field. (standard-activities.md)
  - _Remediation:_ diagnostic — Declare the owning SKILL.md for the slash-command activity after confirming the command’s intended capability.
- **ACT-R-2 [M] — slash-command skill resolution** — A declared slash-command skill resolves when a backpack path is supplied. (standard-activities.md)
  - _Remediation:_ diagnostic — Correct the declared skill or configure the intended backpack path; do not infer a substitute capability automatically.
- **ACT-R-3 [M] — scheduled-task name** — A `scheduled-task` activity declares its `schedule_name`. (standard-activities.md)
  - _Remediation:_ diagnostic — Declare the external scheduler’s actual task name for the scheduled activity.
- **ACT-R-4 [M] — scheduled-task registration** — Scheduled-task registrations are surfaced for verification in their external environment. (standard-activities.md)
  - _Remediation:_ diagnostic — Verify the named task in its external scheduler and update the activity note or scheduler registration through the owning environment.
- **ACT-R-5 [M] — recurring-work lifecycle owner** — An Activity with a housekeeping mapping requires declared ki-work-recurring; that capability validates its schedule, identity, and run evidence in the same note. (standard-activities.md#45-recurring-work-profile)
  - _Remediation:_ diagnostic — Declare and activate ki-work-recurring for recurring-work Activities, then audit its profile. Do not create a duplicate template or start a run.
- **ACT-J-1 [J] — activity note clarity** — Each activity note body explains what the activity does, when it runs, and why it was adopted. (standard-activities.md)
  - _Evidence scope:_ Every activity note body and its stated purpose, trigger, and adoption rationale.
  - _Review prompt:_ Does each activity note clearly explain what it does, when it runs, and why it was adopted?
  - _Outcomes:_ conforming; narrative revision required; rationale required
  - _Conforming guidance:_ Add a concise explanation of behaviour, trigger or cadence, and adoption rationale while retaining the note’s operational focus.
- **ACT-J-2 [J] — activity index quality** — The activity index is current, ordered, and useful to a reader. (standard-activities.md)
  - _Evidence scope:_ The Activities index and its ordering, descriptions, and current activity coverage.
  - _Review prompt:_ Is the activity index current, ordered, and useful rather than just mechanically complete?
  - _Outcomes:_ conforming; index revision required; organisation decision required
  - _Conforming guidance:_ Revise ordering and descriptions to aid a reader, or record the organisation decision that explains a non-obvious index structure.
- **ACT-J-3 [J] — retirement rationale** — Retired activities document why they were retired rather than disappearing silently. (standard-activities.md)
  - _Evidence scope:_ Every retired activity note and its lifecycle history.
  - _Review prompt:_ Do retired activities document a clear retirement rationale?
  - _Outcomes:_ conforming; rationale required; status correction required
  - _Conforming guidance:_ Record why the activity was retired and the relevant replacement or cessation context, or correct a status that does not reflect retirement.
- **ACT-J-4 [J] — slash-command documentation** — Slash-command activities link to their skill documentation or trigger description. (standard-activities.md)
  - _Evidence scope:_ Every slash-command activity and its linked skill documentation or trigger guidance.
  - _Review prompt:_ Does every slash-command activity link to useful skill documentation or trigger guidance?
  - _Outcomes:_ conforming; documentation link required; trigger guidance required
  - _Conforming guidance:_ Link the activity to its authoritative skill documentation or add clear trigger guidance that explains how it is invoked.
- **ACT-J-5 [J] — scheduled-task narrative** — Scheduled-task activities document cadence and expected outcome. (standard-activities.md)
  - _Evidence scope:_ Every scheduled-task activity note, its cadence, and expected outcome.
  - _Review prompt:_ Does every scheduled-task note state its cadence and expected outcome?
  - _Outcomes:_ conforming; cadence required; outcome required
  - _Conforming guidance:_ State the scheduler cadence and the expected observable outcome so operators can distinguish normal execution from drift.

## LA — artifact structure

→ [standard](standard-live-artifacts.md)

Artifact pairing, index, freshness, and judgment prompts.

- **LA-S-0 [M] — safe artifact configuration** — The artifact table parses and any configured directory remains beneath the base without symlink traversal. (standard-live-artifacts.md)
  - _Remediation:_ diagnostic — Correct the artifact configuration before auditing or proposing changes.
- **LA-S-1 [M] — artifact index** — The index note exists when artifact sources are present and may safely gain omitted source names. (standard-live-artifacts.md)
  - _Remediation:_ automatic
- **LA-S-2 [M] — published sources** — Every Markdown artifact has a same-stem HTML render. (standard-live-artifacts.md)
  - _Remediation:_ diagnostic — Render or correct the artifact source through the responsible owner.
- **LA-S-3 [M] — orphaned renders** — Every HTML render has a same-stem Markdown source. (standard-live-artifacts.md)
  - _Remediation:_ diagnostic — Restore or retire the orphaned render through the responsible owner.
- **LA-S-4 [M] — render freshness** — Each HTML render is no older than the configured threshold behind its Markdown source. (standard-live-artifacts.md)
  - _Remediation:_ diagnostic — Refresh the rendered artifact through the responsible owner.
- **LA-J-1 [J] — useful index descriptions** — The index accurately lists active artifacts with useful one-line descriptions. (standard-live-artifacts.md)
  - _Evidence scope:_ The live-artifact index and every active artifact.
  - _Review prompt:_ Does the index accurately list every active artifact with a useful one-line description?
  - _Outcomes:_ conforming; gap; exclusion
  - _Conforming guidance:_ Correct the index, record a named gap, or record an explicit justified exclusion.
- **LA-J-2 [J] — Markdown authority** — Markdown is the authoritative source and no content exists only in HTML. (standard-live-artifacts.md)
  - _Evidence scope:_ Every Markdown live artifact and its rendered representation.
  - _Review prompt:_ Is each Markdown artifact authoritative, with no essential content present only in its HTML render?
  - _Outcomes:_ conforming; gap; exclusion
  - _Conforming guidance:_ Restore Markdown authority, record a named gap, or record an explicit justified exclusion.
- **LA-J-3 [J] — archive rationale** — Archived artifacts retain when-and-why context rather than disappearing silently. (standard-live-artifacts.md)
  - _Evidence scope:_ Every archived live artifact and its retained rationale.
  - _Review prompt:_ Do archived artifacts retain a clear when-and-why rationale rather than disappearing silently?
  - _Outcomes:_ conforming; gap; exclusion
  - _Conforming guidance:_ Add the retained rationale, record a named gap, or record an explicit justified exclusion.
- **LA-J-4 [J] — stable artifact names** — Artifact names are descriptive and stable for published links. (standard-live-artifacts.md)
  - _Evidence scope:_ Every active and archived artifact filename and its published links.
  - _Review prompt:_ Are artifact names descriptive and stable enough to preserve published links?
  - _Outcomes:_ conforming; gap; exclusion
  - _Conforming guidance:_ Rename only with responsible-owner approval and preserve links; otherwise record a gap or explicit exclusion.

## LA-F — artifact frontmatter

→ [standard](standard-live-artifacts.md)

Required metadata on Markdown artifact sources.

- **LA-F-1 [M] — artifact status** — Each artifact source declares status: active or status: archived. (standard-live-artifacts.md)
  - _Remediation:_ diagnostic — Correct the artifact status from authoritative live-artifact evidence.
- **LA-F-2 [M] — render declaration** — Each frontmatter block includes html in its renders declaration. (standard-live-artifacts.md)
  - _Remediation:_ automatic
- **LA-F-3 [M] — artifact owner** — Each artifact source declares the author who owns and maintains it. (standard-live-artifacts.md)
  - _Remediation:_ diagnostic — Correct the artifact owner through the responsible author.

## PRINCIPAL — principal governance

→ [standard](standard-principal.md)

A Capital's governance surfaces, acquired-packet scaffold, and authored territorial relationships.

- **PRINCIPAL-1 [M] — principal governance surface exists** — A principal base carries the required governance, memory, and Enactment Process entry points. (standard-principal.md)
  - _Remediation:_ diagnostic — Create or restore the missing principal governance entry point through the principal owner.
- **PRINCIPAL-3 [J] — territorial declarations agree** — Charter and Known Lands agree on the territory, its one Capital, canonical repository identities, and governed membership; registry location, repository selection, company binding, or a passing audit does not appoint a principal or grant exchange rights. (standard-principal.md#43-territorial-declaration)
  - _Evidence scope:_ The Charter, internal Known Lands inventory, and their cited authority declarations.
  - _Review prompt:_ Do the declarations identify one Capital and agree on jurisdiction and membership, with discrepancies retained for the territorial owner rather than resolved from runtime or working-set evidence?
  - _Outcomes:_ conforming; declaration reconciliation required; owner decision required
  - _Conforming guidance:_ Reconcile the authored declarations through the territorial owner; record unresolved differences without inferring authority from registry, repository selection, or company state.
- **PRINCIPAL-4 [J] — internal inventory and external signposting are distinct** — Known Lands separates governed internal membership from external signposting, uses canonical repository identities and authority references, and leaves local locations in the registry; receiver-owned public adoption needs no reciprocal public consumer list. (standard-principal.md#44-known-lands-relationships)
  - _Evidence scope:_ Known Lands entries and any declarations of external knowledge consumption or adoption.
  - _Review prompt:_ Are internal members and external destinations distinguishable, with external authority respected, local unavailability separate from membership, and adoption controlled by the receiver without publishing private consumer identities?
  - _Outcomes:_ conforming; relationship clarification required; owner decision required
  - _Conforming guidance:_ Clarify relationship sections or labels and authority references; keep local locations in the registry and adoption decisions with the receiver.
- **PRINCIPAL-5 [M] — acquired-packet scaffold is exact** — While the base is its territory's Capital, +/_ACQUIRED/README.md matches its owned template byte for byte. Missing or drifted regular scaffolds are restored without touching packets; unsafe ancestors or leaves fail without a write proposal. (standard-principal.md#42-acquired-packet-scaffold)
  - _Remediation:_ automatic
