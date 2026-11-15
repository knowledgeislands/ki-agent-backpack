# Sources — portable tokenomics policy

**Refresh:** external-spec · quarterly

| Source | Governs | Last reviewed |
| --- | --- | --- |
| [Effective context engineering for AI agents][context] | finite-context and attribution principles | 2026-11-15 |
| [Agent Skills specification][skills] | skill descriptions as a standing selection surface | 2026-11-15 |

## Last review

**REFRESH last run 2026-11-15.** Both sources were re-read and confirmed. Anthropic's context-engineering article is unchanged since its September 2025 publication: context is still a finite attention budget that degrades as it grows, and the aim is still the smallest set of high-signal tokens, with tools, retrieval and sub-agents weighed for their cost. The Agent Skills specification still loads every skill's name and description at startup, at about 100 tokens each, and loads the body only on activation, so descriptions remain a standing selection surface. It still caps a description at 1,024 characters and recommends a body under 5,000 tokens and 500 lines. Nothing in either touches the budget defaults, the model-purpose set or POL-2. Being watched: the article puts no token figures on tool definitions, so the MCP server budget remains a count of servers, not a token estimate.

**REFRESH last run 2026-10-13.** Under Kris's 2026-10-13 decision in the `ways-of-working` run that 'the main thread should be a coordinator, not do the reasoning', model purpose now recommends `fast`, or `standard` where needed, at low effort for coordinating threads, defined by `ki-delegation` at the time and by `ki-coordination` since 2026-10-14, reserving `reasoning` and `frontier` for the background agents that do the reasoning. This is practice-driven; the external sources were not re-reviewed, and the portable model-type set and POL-2 are unchanged.

The 2026-08-12 review made portable claims distinguish declared policy from observed measurement and effective runtime state.

Runtime configuration and model documentation are owned by the relevant adapter source list.

[context]: https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents
[skills]: https://agentskills.io/specification
