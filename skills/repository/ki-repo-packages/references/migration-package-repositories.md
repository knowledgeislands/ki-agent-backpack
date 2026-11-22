# Package repository migration

This file holds the temporary adjustments to [the package repository standard](standard-package-repositories.md), which describes only the final state, as Kris set under MIGRATION-OVERLAY on 7 November 2026. Read the standard first; it wins wherever the two differ. Delete each line once its condition is met, and the file whole once it is empty, with no edit to the standard.

| Adjustment | Until |
| --- | --- |
| `packages-stoa` still declares only `ki-repo-project`, with a comment naming `ki-repo-tools` as the nearest shape; it does not yet declare this overlay. Its owner adds `[skills.ki-repo-packages] package = "stoa"` | The Stoa work declares the overlay |
| The skill is a declaration-only overlay on the general Project shape, not one of `ki-repo`'s core primary shapes, so `ki-repo` neither detects it nor offers it as a `primary_shape` | Kris decides PKG-PRIMARY, whether package repositories become a core shape |
