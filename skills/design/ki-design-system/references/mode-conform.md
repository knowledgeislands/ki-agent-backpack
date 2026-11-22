---
ki-document-type: mode@2026-11-17T00:55:00Z
---

# Mode CONFORM - bring a design system into line

**Precondition:** run [AUDIT](mode-audit.md) first and retain the gap list.

CONFORM moves knowledge to its home; it never redesigns the interface or changes a token's value.

1. Run `ki repo conform --skill ki-design-system --repo <repo> --dry-run`. The host owns only generated-publication repair; DSYS findings are diagnostic.
2. Fix the declaration: add the missing keys to `[skills.ki-design-system]`, or point them at the files the repository actually uses.
3. Where the guide repeats a value the token source holds, replace it with the token's name. A colour value with no token gets one first, with the owner's agreement; any other value without a token may stay in the guide until it gets one.
4. Bring the design system into its folder, `docs/design/design-system/`: the token source or its export, the components document and the design book, with each published view's copy under `projections/<name>/` and an `index.json` naming its account. Move files with `git mv`, and leave a view's republishing to a seat in its own account.
5. Move misplaced knowledge to its home: rationale to a Decision Record, stable behaviour something depends on to a Specification, future work to a work record, and procedure back to the guide. Preserve the conclusion before removing the source.
6. For each checkable rule without a check, add the check or list the rule as a review step in the guide's merge section.
7. Re-run AUDIT.
