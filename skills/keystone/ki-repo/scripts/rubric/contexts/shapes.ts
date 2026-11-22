/** Project specialisations; website implementation and hosting skills refine its core shape. */
export const PROJECT_SHAPES = [
  'ki-repo-project',
  'ki-repo-dotfiles-chezmoi',
  'ki-repo-backpack',
  'ki-repo-homebrew-tap',
  'ki-repo-mcp',
  'ki-repo-tools',
  'ki-repo-website'
] as const

/**
 * The skill each shape needs declared: its own table, except where the shape's skill was folded into
 * another on 22 November 2026 (REPO-CORE a, REPO-OTHERS a). The shape names themselves stay.
 */
export const SHAPE_OWNERS: Readonly<Partial<Record<ProjectShape, string>>> = {
  'ki-repo-project': 'ki-repo',
  'ki-repo-homebrew-tap': 'ki-repo-tools'
}

export type ProjectShape = (typeof PROJECT_SHAPES)[number]
export type RepositoryShape = ProjectShape | 'ki-repo-kb'
export type ShapeResolution = { primaryShape?: RepositoryShape; issue?: string }

export function resolveRepositoryShape(
  declared: readonly string[],
  primaryShape: unknown,
  kind: 'project' | 'kb'
): ShapeResolution {
  if (typeof primaryShape !== 'string' || !primaryShape)
    return { issue: 'primary_shape is required and must name a declared repository shape' }
  if (kind === 'kb' && primaryShape !== 'ki-repo-kb')
    return { issue: 'a Knowledge Base requires primary_shape = "ki-repo-kb"' }
  if (kind === 'project' && !PROJECT_SHAPES.includes(primaryShape as ProjectShape))
    return { issue: `a Project primary_shape must be one of: ${PROJECT_SHAPES.join(', ')}` }
  const owner = SHAPE_OWNERS[primaryShape as ProjectShape] ?? primaryShape
  if (!declared.includes(owner)) return { issue: `primary_shape requires a declared [skills.${owner}] table` }
  return { primaryShape: primaryShape as RepositoryShape }
}
