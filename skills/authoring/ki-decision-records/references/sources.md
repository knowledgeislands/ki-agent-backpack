---
ki-document-type: sources@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T04:07:48Z
ki-refresh: external-spec · 365d
---

# Sources — where the Decision Records standard comes from

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
  - [2.2 Advisory](#22-advisory)
- [3. Decisions](#3-decisions)
- [4. Last review](#4-last-review)

## 1. Introduction

Tracked sources for Mode REFRESH behind [the Decision Records standard](standard-decision-records.md) and its [rubric](rubric.md). Re-fetch before proposing changes to the format standard or rubric. Update `last reviewed` dates and the Last review block after each refresh run.

What to look for on refresh:

- New section recommendations from the ADR community (e.g. Options, Pros/Cons patterns) — evaluate whether DRs should adopt them
- The house standard deliberately **omits** Nygard's Status section and lifecycle (DRs are living present-state records); on refresh, confirm this divergence is still intended rather than re-importing a status vocabulary
- Community conventions for multi-type DR naming or scoping

[Back to contents](#contents)

## 2. Outside sources

Nygard's original format grounds the standard; the ADR community supports it.

### 2.1 Authoritative

| Source | Governs | Last reviewed |
| --- | --- | --- |
| NYGARD — [Nygard ADR format (original): Documenting architecture decisions](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions) | The short single-decision record with Context, active-voice Decision and Consequences | 2026-08-12 |

[Back to contents](#contents)

### 2.2 Advisory

| Source | Informs | Last reviewed |
| --- | --- | --- |
| ADR-GITHUB — [ADR GitHub community resources: adr.github.io](https://adr.github.io) | Supporting community evidence for optional record patterns, not authority for the house taxonomy, serial scope, or living-record policy | 2026-08-12 |

[Back to contents](#contents)

## 3. Decisions

None recorded by id: the nine-prefix taxonomy, `decision_type_url`, and living-record policy are house conventions the standard states.

[Back to contents](#contents)

## 4. Last review

On 18 November 2026 the Authoring guild's review, from the Cairn summit's change 10, brought the files into the formats: [the Decision Records standard](standard-decision-records.md), formerly `standard-decision-records.md`, was renamed and reshaped to the standard format with its rules unchanged, and this file to the sources format. The rubric's source names follow. No rule changed and no outside source was refreshed.

REFRESH last run **2026-08-12**.

- **Nygard ADR format** — current primary page remains available. It recommends a short single-decision record with Context, active-voice Decision, Status, and Consequences; the house living-record model intentionally diverges from its historical-status treatment.
- **ADR GitHub community** — remains supporting community evidence for optional record patterns, not authority for the house taxonomy, serial scope, or living-record policy.
- **House metadata** — the nine-prefix taxonomy, `decision_type_url`, and living-record policy remain house conventions. Current primary discovery did not verify public `decision_type_url` targets, so the standard labels them non-authoritative house reference metadata rather than published external specifications.

External sources are current. **Internal note:** the house DR format is a **living present-state record** — lifecycle axes, historical narrative, supersession chains, and `## Changelog` are excluded, and `SKILL.md`, the Decision Records standard, the rubric, and the checker align on that form. Serial uniqueness remains per-prefix within scope.

**Watching:**

- MADR "Considered Options / Pros & Cons" pattern — re-evaluate adoption only if the ecosystem consolidates on it; currently declined by design.
- "eADR" (embedded ADRs in source) surfacing in adr.github.io talks — watch whether a documented convention emerges.
- Nygard's Status section — deliberately not adopted; recheck only that the divergence remains intended.

[Back to contents](#contents)
