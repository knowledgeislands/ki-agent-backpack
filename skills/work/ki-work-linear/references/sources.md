# Sources — Linear adapter

**Refresh:** external-spec · monthly

| Source | Governs | Last reviewed |
| --- | --- | --- |
| [Teams][workflow] | team-specific workflow values and automatic archive | 2026-11-15 |
| [Issues][move] | mutable locators, aliases, team moves, and affected fields | 2026-11-15 |
| [Delete and archive issues][retention] | automatic archive, deletion, recovery, and retention | 2026-11-15 |

## Local authority

The adapter standard is normative for KI configuration, migration stops, and no-execution boundary. Linear documentation is primary evidence for remote capability and behaviour; it does not prove UUID persistence through a team move or authorise KI process execution.

## Last review

On 2026-11-15, every source was re-read. Linear had moved two pages. The Issue status page now redirects to an Issue properties page with no body, so the workflow row points to the Teams page, which says workflows can be customised per team and that each team's settings hold its statuses, auto-close and auto-archive. The Edit issues page is gone, and team moves are now a section of the Issues page. That section still says a move gives a new issue identifier and URL, old URLs redirect, old identifiers stay searchable, and cycles, team labels and projects may be cleared or removed while status maps to the destination team's closest workflow state. It now adds that relations and priority stay, and that open issues moved by someone outside a triage team go to triage. Archiving is still automatic with no manual action, and deleted items are still recoverable for 30 days. Nothing here changes the standard. We are watching whether Linear brings back a page that sets out issue statuses. The adapter still treats displayed identifiers as mutable locators and remains fail-closed.

On 2026-09-26, Linear still documented team-specific workflows, a new issue identifier and URL after a team move, old-locator search and redirects, and destination-field remapping or removal. Archiving remains automatic, while deleted items remain recoverable for 30 days. The adapter therefore continues to treat displayed identifiers as mutable locators and remains fail-closed.

[workflow]: https://linear.app/docs/teams
[move]: https://linear.app/docs/creating-issues#move-an-issue-to-another-team
[retention]: https://linear.app/docs/delete-archive-issues
