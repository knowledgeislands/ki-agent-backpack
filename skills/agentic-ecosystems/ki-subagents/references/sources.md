---
ki-document-type: sources@2026-11-17T00:28:37Z
ki-revised: 2026-11-18T04:26:09Z
ki-refresh: canonical · on-change
---

# Sources — where the portable subagent roles standard comes from

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
  - [2.2 Advisory](#22-advisory)
- [3. Decisions](#3-decisions)
- [4. Last review](#4-last-review)

## 1. Introduction

The sources behind [the portable subagent roles standard](standard-portable-subagents.md) and its [rubric](rubric.md).

[Back to contents](#contents)

## 2. Outside sources

No external runtime document is normative for this portable parent. Runtime sources are isolated in the corresponding adapters.

### 2.1 Authoritative

None.

[Back to contents](#contents)

### 2.2 Advisory

None.

[Back to contents](#contents)

## 3. Decisions

| Id | Decision | Date | Backs | Status |
| --- | --- | --- | --- | --- |
| [SDR-KI-HARNESS-002](../../../../docs/decisions/SDR-KI-HARNESS-002-runtime-portable-contracts-and-executor-positioning.md) | Runtime-neutral semantic contract and adapter boundary | 2026-07-11 | [4.1](standard-portable-subagents.md#41-purpose), [4.4](standard-portable-subagents.md#44-boundary) | current |
| [ADR-KI-HARNESS-AGENTS-002](../../../../docs/decisions/ADR-KI-HARNESS-AGENTS-002-portable-subagent-contract-and-runtime-adapters.md) | The `ki-subagents-claude` file is the primary projection carrying the role record | 2026-08-12 | [4.3](standard-portable-subagents.md#43-record-and-projections) | current |
| SUBAGENT-PUBLISHER a | “a, refined: no `ki` tool surface for subagent roles; roles are installed into each host by an agent run, not by a publisher command, and every role is registered (declared where its territory's install reads it) so the install picks every one up (Kris, 23 November, about 00:15 GMT, in chat: "Yeah, just install them by hand, but automated for you. There's no need to add a tool surface for it, right? And yeah, they should be registered as well, actually. So it's important that it picks those up.")”, Cairn summit's change 10, 4.3, landed under step 6.3. Applied here: the register is the backpack's `subagents/README.md`, linking every role source, chosen over a `.ki.toml` list because it sits beside the roles, is read by the install run already and needs no `ki` change; REGISTER-1 checks it, and 4.5 describes the install run. | 2026-11-23 | [4.5](standard-portable-subagents.md#45-register-and-install), [REGISTER-1](rubric.md) | In force |

[Back to contents](#contents)

## 4. Last review

On 18 November 2026 the skill's words were brought to HARNESS-NAME, from the Cairn summit's change 12, step 1, for the Agentic systems guild: REFRESH routes to the backpack, and what the standard called the Harness host is the `ki` host. No criterion changed and no outside source refreshed.

On 18 November 2026 the Agentic systems guild's review, from the Cairn summit's change 10, brought the files into the formats: `standards-portable-subagents.md` was renamed `standard-portable-subagents.md` and reshaped, its rules unchanged under numbered sections, and this file took the sources format, with the local authorities as decisions. No rule changed and no outside source was refreshed.

Last reviewed 2026-08-12 against SDR-KI-HARNESS-002 and this repository's Round 25 approved delegation packet, which set the parent/adapters split and the host-unavailable boundary.

[Back to contents](#contents)
