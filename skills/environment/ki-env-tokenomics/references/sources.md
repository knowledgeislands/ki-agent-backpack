---
ki-document-type: sources@2026-11-24T04:26:02Z
ki-revised: 2026-11-24T04:26:02Z
ki-refresh: external-spec · quarterly
---

# Sources — where the tokenomics standard comes from

## Contents

- [1. Introduction](#1-introduction)
- [2. Outside sources](#2-outside-sources)
  - [2.1 Authoritative](#21-authoritative)
  - [2.2 Advisory](#22-advisory)
- [3. Last review](#3-last-review)

## 1. Introduction

The sources behind [the tokenomics standard](standard-tokenomics.md), the portable policy, and its [rubric](rubric.md). Runtime configuration and model documentation are owned by the relevant adapter source list.

[Back to contents](#contents)

## 2. Outside sources

Two sources set the principles the portable policy follows.

### 2.1 Authoritative

| Source | Governs | Last reviewed |
| --- | --- | --- |
| [Effective context engineering for AI agents][context] | finite-context and attribution principles | 2026-11-23 |
| [Agent Skills specification][skills] | skill descriptions as a standing selection surface | 2026-11-23 |

[Back to contents](#contents)

### 2.2 Advisory

None.

[Back to contents](#contents)

## 3. Last review

The latest review, on 23 November 2026, re-read both sources and found them unchanged. The context-engineering article still treats context as a finite attention budget, and the Agent Skills specification still loads about 100 tokens of name and description per skill at startup, caps a description at 1,024 characters and recommends a body under 5,000 tokens and 500 lines, so nothing touches the budget defaults or the model-purpose set.

**Watching:**

- The context-engineering article puts no token figures on tool definitions, so the MCP server budget remains a count of servers, not a token estimate.

[Back to contents](#contents)

[context]: https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents
[skills]: https://agentskills.io/specification
