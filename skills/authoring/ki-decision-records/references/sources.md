---
ki-document-type: sources@2026-11-24T04:26:02Z
ki-revised: 2026-11-24T04:26:02Z
ki-refresh: external-spec · 365d
---

# Sources — where the Decision Records standard comes from

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
  - [2.2 Advisory](#22-advisory)
- [3. Last review](#3-last-review)

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
| NYGARD — [Nygard ADR format (original): Documenting architecture decisions](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions) | The short single-decision record with Context, active-voice Decision and Consequences | 2026-11-23 |

[Back to contents](#contents)

### 2.2 Advisory

| Source | Informs | Last reviewed |
| --- | --- | --- |
| ADR-GITHUB — [ADR GitHub community resources: adr.github.io](https://adr.github.io) | Supporting community evidence for optional record patterns, not authority for the house taxonomy, serial scope, or living-record policy | 2026-11-23 |

[Back to contents](#contents)

## 3. Last review

The latest review, on 23 November 2026, re-fetched both sources, and no rule changed. NYGARD's page is live and unchanged: Title, Context, an active-voice Decision, Status and Consequences. ADR-GITHUB is still community evidence only and recommends no sections or statuses; MADR's latest release is still 4.0.0 (September 2024).

**Watching:**

- MADR's "Considered Options / Pros & Cons" pattern: re-evaluate adoption only if the ecosystem consolidates on it; declined by design for now.
- "eADR" (ADRs embedded in source), which appears only in a talk title on adr.github.io: watch whether a documented convention emerges.
- Nygard's Status section, deliberately not adopted: recheck only that the divergence remains intended.

[Back to contents](#contents)
