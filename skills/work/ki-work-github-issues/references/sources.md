# Sources — GitHub Issues adapter

**Refresh:** external-spec · monthly

| Source | Governs | Last reviewed |
| --- | --- | --- |
| [Issue dependencies][dependencies] | blocker relation semantics and permissions | 2026-11-15 |
| [Sub-issues][subissues] | hierarchy distinct from blockers | 2026-11-15 |
| [Issue fields][fields] | account-wide (organisation or user) versus project-scoped metadata planes | 2026-11-15 |
| [Close an issue][close] | closure state and permissions | 2026-11-15 |
| [Transfer an issue][transfer] | mutable locator, redirect, retained/missing metadata | 2026-11-15 |
| [Delete an issue][delete] | permanent Issue deletion, distinct from project-item archive | 2026-11-15 |
| [Issues REST API][api] | Issue-versus-pull-request filtering and API boundary | 2026-11-15 |

## Local authority

The adapter standard is normative for KI configuration, migration stops, and no-execution boundary. GitHub documentation is primary evidence for remote capability and behaviour; it does not authorise KI process execution.

## Last review

On 2026-11-15, every source was re-read. GitHub still documents dependencies and sub-issues as separate relationships with their own commands, issue fields as the source of truth and project fields as scoped to one project, transfers as redirecting the old URL and keeping only the labels and milestones the target repository already has, permanent Issue deletion as distinct from project-item archive, and REST Issues endpoints as able to return pull requests. Two things changed without touching the standard: issue fields can now be defined for a user account as well as an organisation, so the fields row now says account-wide; and transferring an Issue now needs at least the new Moderate role in both repositories rather than write access. The dependencies page still names no permission for adding a blocker. We are watching how the Moderate role reaches other Issue operations. The adapter still treats displayed references as mutable locators and remains fail-closed.

On 2026-09-26, GitHub still documented dependencies and sub-issues as separate relationships, organisation issue fields and project fields as distinct metadata planes, transfers as redirecting old URLs while moving an open Issue, permanent Issue deletion as distinct from project-item archive, and REST Issues endpoints as able to return pull requests. The adapter therefore continues to treat displayed references as mutable locators and remains fail-closed.

[dependencies]: https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/creating-issue-dependencies
[subissues]: https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/adding-sub-issues
[fields]: https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/managing-issue-fields-in-your-organization
[close]: https://docs.github.com/en/issues/tracking-your-work-with-issues/administering-issues/closing-an-issue
[transfer]: https://docs.github.com/en/issues/tracking-your-work-with-issues/administering-issues/transferring-an-issue-to-another-repository
[delete]: https://docs.github.com/en/issues/tracking-your-work-with-issues/administering-issues/deleting-an-issue
[api]: https://docs.github.com/en/rest/issues/issues
