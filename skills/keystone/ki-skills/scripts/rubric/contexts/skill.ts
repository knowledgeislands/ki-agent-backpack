import { existsSync, readdirSync, readFileSync, realpathSync } from 'node:fs'
import { builtinModules } from 'node:module'
import { basename, dirname, join, relative, resolve, sep } from 'node:path'
import type { RubricPublication } from '../../shared/rubric.ts'
import {
  createKiShapeContext,
  createKiShapeFrontmatterEvidence,
  type KiShapeSkillContext,
  type KiSkillsRubricContext,
  type KnowledgeCardEvidence
} from './contexts.ts'
import { type SkillDependencyNode, skillMentions } from './dependencies.ts'
import { inspectSkillFormats, kiSkillField } from './formats.ts'
import { type ParsedFrontmatter, parseFrontmatter } from './frontmatter.ts'
import { scriptHelpEvidence } from './scripts.ts'
import { listMarkdownFiles } from './skill-files.ts'
import { stripCode } from './text.ts'
import { estimateTokens } from './tokens.ts'

export const frontmatterList = (value: string | undefined): string[] => {
  if (!value) return []
  const contents = value.trim().replace(/^\[/, '').replace(/\]$/, '')
  if (!contents.trim()) return []
  return contents
    .split(',')
    .map((entry) => entry.trim().replace(/^(?:"([\s\S]*)"|'([\s\S]*)')$/, '$1$2'))
    .filter(Boolean)
}

/** Read one skill's declared dependency edges from its frontmatter. */
export const skillDependencyNode = (frontmatter: ParsedFrontmatter): SkillDependencyNode => ({
  name: frontmatter.keys.get('name') ?? '',
  dependsOn: frontmatterList(frontmatter.keys.get('ki-depends-on')),
  optionalDependsOn: frontmatterList(frontmatter.keys.get('ki-optional-depends-on'))
})

export type SkillWritableCapabilities = {
  readContent?: () => string
  setName?: (name: string) => void
  addArgumentHintVerbs?: (verbs: readonly string[]) => void
}

type SkillRubricContext = {
  context: KiSkillsRubricContext
  validFrontmatter: boolean
}

const isLocalGovernanceSource = (directory: string): boolean =>
  basename(directory) === 'ki-self' &&
  basename(dirname(directory)) === 'skills' &&
  basename(dirname(dirname(directory))) === '.agents'

const table = (value: unknown): Record<string, unknown> | null =>
  value && typeof value === 'object' && !Array.isArray(value) ? (value as Record<string, unknown>) : null

const sourceBackpackName = (directory: string): string | undefined => {
  let source: string
  try {
    source = realpathSync(directory)
  } catch {
    return undefined
  }

  let root = source
  while (dirname(root) !== root) {
    const configuration = join(root, '.ki.toml')
    if (existsSync(configuration)) {
      const skillPath = relative(root, source)
      if (skillPath !== 'skills' && !skillPath.startsWith(`skills${sep}`)) return undefined
      try {
        const skills = table(Bun.TOML.parse(readFileSync(configuration, 'utf8')))?.skills
        const backpack = table(table(skills)?.['ki-repo-backpack'])
        const identity = table(table(skills)?.['ki-repo'])?.repository
        const match =
          typeof identity === 'string'
            ? /^https:\/\/github\.com\/[a-z0-9](?:[a-z0-9._-]*[a-z0-9])?\/([a-z0-9](?:[a-z0-9._-]*[a-z0-9])?)$/.exec(
                identity
              )
            : null
        return backpack && match ? match[1] : undefined
      } catch {
        return undefined
      }
    }
    root = dirname(root)
  }
  return undefined
}

const IMPORT_SPECIFIER_PATTERNS = [
  /^\s*(?:import|export)\s[^;'"()]*?\bfrom\s*['"]([^'"]+)['"]/gm,
  /^\s*import\s*['"]([^'"]+)['"]/gm,
  /\bimport\s*\(\s*['"]([^'"]+)['"]/g,
  /\brequire\s*\(\s*['"]([^'"]+)['"]/g
]

/** Static, side-effect, dynamic and CommonJS specifiers; a quoted `from` inside a string literal is not a statement. */
const importSpecifiers = (source: string): string[] => [
  ...new Set(
    IMPORT_SPECIFIER_PATTERNS.flatMap((pattern) => [...source.matchAll(pattern)].map((match) => match[1] ?? ''))
  )
]

const RUNTIME_BUILTINS = new Set(builtinModules)

/** A runtime built-in needs no package resolution: `node:*`, a bare Node built-in, `bun`, or `bun:*`. */
const isRuntimeBuiltin = (specifier: string): boolean =>
  specifier.startsWith('node:') ||
  specifier === 'bun' ||
  specifier.startsWith('bun:') ||
  RUNTIME_BUILTINS.has(specifier)

const listScriptFiles = (scriptsDirectory: string): string[] => {
  if (!existsSync(scriptsDirectory)) return []
  const scriptFiles: string[] = []
  const walk = (path: string): void => {
    for (const entry of readdirSync(path, { withFileTypes: true })) {
      const entryPath = join(path, entry.name)
      if (entry.isDirectory()) walk(entryPath)
      else if (entry.isFile() && entry.name.endsWith('.ts') && !entry.name.endsWith('.test.ts'))
        scriptFiles.push(entryPath)
    }
  }
  walk(scriptsDirectory)
  return scriptFiles
}

/** Every file below a support directory, relative to it, sorted. */
const listSupportFiles = (supportDirectory: string): string[] => {
  if (!existsSync(supportDirectory)) return []
  const files: string[] = []
  const walk = (path: string): void => {
    for (const entry of readdirSync(path, { withFileTypes: true })) {
      const entryPath = join(path, entry.name)
      if (entry.isDirectory()) walk(entryPath)
      else if (entry.isFile()) files.push(relative(supportDirectory, entryPath))
    }
  }
  walk(supportDirectory)
  return files.sort()
}

/** The front-matter `id` of each Markdown file under `knowledge/` that declares one: the cards of the skill's graph. */
const readKnowledgeIds = (knowledgeDirectory: string, knowledgePaths: readonly string[]): Record<string, string> => {
  const ids: Record<string, string> = {}
  for (const path of knowledgePaths) {
    if (!path.endsWith('.md')) continue
    const document = readFileSync(join(knowledgeDirectory, path), 'utf8').match(
      /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/
    )?.[1]
    const id = document?.match(/^id:\s*['"]?([^'"\s]+)['"]?\s*$/m)?.[1]
    if (id) ids[path] = id
  }
  return ids
}

const FRONT_MATTER = /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/
const REFERENCE_DEFINITION = /^ {0,3}\[([^\]]+)\]:\s*<?([^\s>]+)>?/gm
const INLINE_LINK = /\]\(\s*<?([^\s)>]+)>?(?:\s+"[^"]*")?\s*\)/g
const REFERENCE_LINK = /\[([^\]]+)\](?:\[([^\]]*)\])?(?![:(])/g

const frontMatterValue = (document: string | undefined, key: string): string | null =>
  document?.match(new RegExp(`^${key}:\\s*['"]?([^'"\\n]*?)['"]?\\s*$`, 'm'))?.[1]?.trim() || null

/** A link destination that names a local file, without its fragment or query; null for a URL or a bare fragment. */
const localTarget = (destination: string): string | null => {
  if (/^[a-z][a-z0-9+.-]*:/i.test(destination) || destination.startsWith('#') || destination.startsWith('/'))
    return null
  const path = destination.replace(/[#?].*$/, '')
  if (!path) return null
  try {
    return decodeURIComponent(path)
  } catch {
    return path
  }
}

/** The card types a graph's root definition declares: the backticked first cells of its `## Card types` table. */
const readKnowledgeCardTypes = (knowledgeDirectory: string): string[] => {
  const root = join(knowledgeDirectory, '_graph.md')
  if (!existsSync(root)) return []
  const section = readFileSync(root, 'utf8').match(/^##\s+Card types\s*$([\s\S]*?)(?=^##\s|$(?![\s\S]))/m)?.[1] ?? ''
  return [...section.matchAll(/^\|\s*`([^`]+)`\s*\|/gm)].map((match) => match[1] as string)
}

/** Each graph file's type and status, its relative links that resolve to nothing, and the cards its Next section links. */
const readKnowledgeCards = (
  knowledgeDirectory: string,
  knowledgePaths: readonly string[],
  ids: Readonly<Record<string, string>>
): Record<string, KnowledgeCardEvidence> => {
  const cards: Record<string, KnowledgeCardEvidence> = {}
  for (const path of knowledgePaths) {
    if (!path.endsWith('.md')) continue
    const file = join(knowledgeDirectory, path)
    const content = readFileSync(file, 'utf8')
    const document = content.match(FRONT_MATTER)?.[1]
    const body = content.replace(/```[\s\S]*?```/g, '').replace(/`[^`\n]*`/g, '')
    const definitions = new Map<string, string>()
    for (const match of body.matchAll(REFERENCE_DEFINITION))
      definitions.set((match[1] as string).toLowerCase(), match[2] as string)
    const destinations = [
      ...definitions.values(),
      ...[...body.matchAll(INLINE_LINK)].map((match) => match[1] as string)
    ]
    const resolveLocal = (destination: string): string | null => {
      const target = localTarget(destination)
      return target === null ? null : resolve(dirname(file), target)
    }
    const brokenLinks = [
      ...new Set(
        destinations.filter((destination) => {
          const target = resolveLocal(destination)
          return target !== null && !existsSync(target)
        })
      )
    ]
    const nextSection = body.match(/^##\s+Next\s*$([\s\S]*?)(?=^##\s|$(?![\s\S]))/m)?.[1]
    let next: string[] | null = null
    if (nextSection !== undefined) {
      const prose = nextSection.replace(REFERENCE_DEFINITION, '')
      const linked = [
        ...[...prose.matchAll(INLINE_LINK)].map((match) => match[1] as string),
        ...[...prose.matchAll(REFERENCE_LINK)]
          .map((match) => definitions.get((match[2] || match[1] || '').toLowerCase()))
          .filter((destination): destination is string => destination !== undefined)
      ]
      next = [
        ...new Set(
          linked
            .map(resolveLocal)
            .filter((target): target is string => target !== null)
            .map((target) => relative(knowledgeDirectory, target))
            .filter((target) => target in ids && target !== '_graph.md')
        )
      ]
    }
    cards[path] = {
      type: frontMatterValue(document, 'type'),
      status: frontMatterValue(document, 'status'),
      brokenLinks,
      next
    }
  }
  return cards
}

const rubricFamilyModules = (
  scriptsDirectory: string
): {
  itemsIndexExists: boolean
  itemsIndexDefinesRules: boolean
  familyModules: readonly {
    collection: string
    source: string | null
    exportsOrderedCollection: boolean
    unexpectedExports: readonly string[]
  }[]
} => {
  const indexPath = join(scriptsDirectory, 'rubric', 'items', 'index.ts')
  if (!existsSync(indexPath)) return { itemsIndexExists: false, itemsIndexDefinesRules: false, familyModules: [] }

  const indexSource = readFileSync(indexPath, 'utf8')
  const imports = new Map<string, string>()
  for (const match of indexSource.matchAll(/import\s+(?:type\s+)?{([^}]*)}\s*from\s*['"](\.\/[^'"]+)['"]/g)) {
    const specifier = match[2] as string
    for (const imported of (match[1] as string).split(',')) {
      const name = imported.trim().split(/\s+as\s+/)[0]
      if (name) imports.set(name, specifier)
    }
  }

  const families = indexSource.match(/\bfamilies:\s*\[([\s\S]*?)]/m)?.[1] ?? ''
  const collections = [...new Set([...families.matchAll(/\b([A-Z][A-Z0-9_]*)\b/g)].map((match) => match[1] as string))]
  const familyModules = collections.map((collection) => {
    const specifier = imports.get(collection)
    const modulePath = specifier ? resolve(dirname(indexPath), `${specifier.replace(/\.ts$/, '')}.ts`) : null
    const source = modulePath && existsSync(modulePath) ? readFileSync(modulePath, 'utf8') : null
    const collectionMatch = source?.match(
      new RegExp(`export\\s+const\\s+${collection}\\b[\\s\\S]*?=\\s*\\{[\\s\\S]*?\\bitems:\\s*\\[([\\s\\S]*?)]`, 'm')
    )
    const members = collectionMatch
      ? [
          ...new Set(
            [...(collectionMatch[1] as string).matchAll(/\b([A-Z][A-Z0-9_]+)\b/g)].map((match) => match[1] as string)
          )
        ]
      : []
    const factoryFamily = new RegExp(
      `export\\s+const\\s+${collection}\\b[\\s\\S]*?=\\s*createRubricPublicationFamily\\b`,
      'm'
    ).test(source ?? '')
    const exportsOrderedCollection =
      (collectionMatch !== null && collectionMatch !== undefined && members.length > 0) || factoryFamily
    const publicExports = source
      ? [
          ...source.matchAll(
            /^export\s+(?:const|function|class|interface|type|enum)\s+([A-Za-z_$][A-Za-z0-9_$]*)|^export\s+default\b/gm
          )
        ].map((match) => match[1] ?? 'default')
      : []
    const unexpectedExports = publicExports.filter((name) => name !== collection)
    return { collection, source, exportsOrderedCollection, unexpectedExports }
  })

  return {
    itemsIndexExists: true,
    itemsIndexDefinesRules: /\b(?:mechanical|judgment)\s*:|\brun\s*:/.test(indexSource),
    familyModules
  }
}

const extractSection = (body: string, heading: string): string | null => {
  const match = new RegExp(`^##\\s+${heading}\\s*$`, 'im').exec(body)
  if (!match) return null
  const rest = body.slice((match.index ?? 0) + match[0].length)
  const next = rest.search(/^##\s+/m)
  return next === -1 ? rest : rest.slice(0, next)
}

const extractBodyModes = (section: string | null): Set<string> => {
  const modes = new Set<string>()
  if (!section) return modes
  for (const match of section.matchAll(/^###\s+Mode\s+([\w-]+)/gim)) modes.add((match[1] as string).toUpperCase())
  let headerSeen = false
  for (const rawLine of section.split(/\r?\n/)) {
    const line = rawLine.trim()
    if (!line.startsWith('|')) {
      headerSeen = false
      continue
    }
    const cells = line
      .split('|')
      .slice(1, -1)
      .map((cell) => cell.trim())
    if (!headerSeen) {
      if (/^mode$/i.test(cells[0] ?? '')) headerSeen = true
      continue
    }
    const mode = (cells[0] ?? '').replace(/`/g, '').trim()
    if (!/^:?-+:?$/.test(mode) && mode) modes.add(mode.toUpperCase())
  }
  return modes
}

const ENDORSE_EXTENSION_RES = [
  /\bprefer that (extension )?skill\b/i,
  /delegat\w*[^.\n]*\bmodes?\b[^.\n]*\bback\b/i,
  /\bextends this one\b/i
]
const DISAVOWAL_CUE = /retir|never|forbid|\bflag|heurist|anti-pattern|disavow|must not|do not/i

const endorsesRetiredExtension = (markdown: string): boolean => {
  const stripped = stripCode(markdown).replace(/"[^"\n]*"/g, '')
  return stripped
    .split(/\r?\n/)
    .some((line) => !DISAVOWAL_CUE.test(line) && ENDORSE_EXTENSION_RES.some((pattern) => pattern.test(line)))
}

/** Build the complete KI shape evidence used by both AUDIT and CONFORM fallback checks. */
const createKiShapeEvidence = (
  skillDirectory: string,
  frontmatter: ParsedFrontmatter,
  body: string,
  dependencyGraph?: readonly SkillDependencyNode[]
): KiShapeSkillContext => {
  const localGovernanceSource = isLocalGovernanceSource(skillDirectory)
  const section = extractSection(body, 'Operating modes')
  const markdownFiles = listMarkdownFiles(skillDirectory)
  const referenceText = markdownFiles
    .filter((file) => basename(file) !== 'SKILL.md')
    .map((file) => readFileSync(file, 'utf8'))
    .join('\n')
  const skillText = `${body}\n${referenceText}`
  const scriptsDirectory = join(skillDirectory, 'scripts')
  const scriptNames = existsSync(scriptsDirectory) ? readdirSync(scriptsDirectory) : []
  const referencePaths = listSupportFiles(join(skillDirectory, 'references'))
  const knowledgePaths = listSupportFiles(join(skillDirectory, 'knowledge'))
  const knowledgeIds = readKnowledgeIds(join(skillDirectory, 'knowledge'), knowledgePaths)
  const refreshReference = join(skillDirectory, 'references', 'mode-refresh.md')
  const refreshSection = section?.match(/^###\s+Mode\s+REFRESH\b[\s\S]*?(?=^###\s+Mode\s+|$(?![\s\S]))/im)?.[0] ?? ''
  const rubricItemSources = listScriptFiles(join(scriptsDirectory, 'rubric', 'items'))
    .map((file) => readFileSync(file, 'utf8'))
    .join('\n')
  const implementationSource = listScriptFiles(scriptsDirectory)
    .map((file) => readFileSync(file, 'utf8'))
    .join('\n')

  return {
    ...createKiShapeFrontmatterEvidence({ frontmatter, scriptNames, localGovernanceSource }),
    ...(localGovernanceSource ? {} : { sourceBackpackName: sourceBackpackName(skillDirectory) }),
    rubricCatalogue: existsSync(join(scriptsDirectory, 'rubric', 'items', 'index.ts')),
    referencePaths,
    knowledgePaths,
    knowledgeIds,
    knowledgeCards: readKnowledgeCards(join(skillDirectory, 'knowledge'), knowledgePaths, knowledgeIds),
    knowledgeCardTypes: readKnowledgeCardTypes(join(skillDirectory, 'knowledge')),
    operatingModesSection: section,
    bodyModes: extractBodyModes(section),
    operatingModesIntro: section?.split(/^###\s+|^\s*\|/m)[0] ?? '',
    flatModeHeadings: [...stripCode(body).matchAll(/^##\s+Mode\s+([\w-]+)/gim)].map((match) => match[1] as string),
    bareModeHeadings: section
      ? [...stripCode(section).matchAll(/^###\s+(?!Mode\b)(\S[^\n]*)/gim)].map((match) => (match[1] as string).trim())
      : [],
    refreshText: `${refreshSection}${existsSync(refreshReference) ? `\n${readFileSync(refreshReference, 'utf8')}` : ''}`,
    retiredExtensionFiles: markdownFiles
      .filter((file) => endorsesRetiredExtension(basename(file) === 'SKILL.md' ? body : readFileSync(file, 'utf8')))
      .map((file) => file.slice(skillDirectory.length + 1)),
    strongGate: /do not edit[^.\n]*directly|go through (a )?proposal|standing directive|installing the gate/i.test(
      stripCode(skillText)
    ),
    anchorMentioned: /CLAUDE\.md|AGENTS\.md|always-loaded|installing the gate|\banchor/i.test(skillText),
    rubricReadsAnchor: /CLAUDE\.md|AGENTS\.md/.test(implementationSource),
    mechanicalRubricCount: (rubricItemSources.match(/\bmechanical\s*:/g) ?? []).length,
    hasMechanicalImplementation:
      scriptNames.some((name) => name.endsWith('.ts')) ||
      existsSync(join(scriptsDirectory, 'rubric', 'items', 'index.ts')),
    documentsMechanicalDelegation: /lint:md|toolchain (?:already )?enforces/i.test(skillText),
    dependsOnPresent: frontmatter.present.has('ki-depends-on'),
    dependsOn: (frontmatter.keys.get('ki-depends-on') ?? '').trim(),
    optionalDependsOnPresent: frontmatter.present.has('ki-optional-depends-on'),
    optionalDependsOn: (frontmatter.keys.get('ki-optional-depends-on') ?? '').trim(),
    ...(dependencyGraph ? { dependencyGraph } : {}),
    skillMentions: skillMentions(body),
    supportedRuntimesPresent: frontmatter.present.has('ki-supported-runtimes'),
    supportedRuntimes: (frontmatter.keys.get('ki-supported-runtimes') ?? '').trim(),
    runtimeBinding: frontmatter.values['ki-runtime-binding'] === true,
    owns: frontmatterList(kiSkillField(frontmatter, 'owns')),
    contributes: frontmatterList(kiSkillField(frontmatter, 'contributes')),
    requires: frontmatterList(kiSkillField(frontmatter, 'requires')),
    implementationSource: implementationSource || null
  }
}

/** Build the same complete per-skill evidence for AUDIT and CONFORM. */
export const createSkillRubricContext = (
  directory: string,
  capabilities: SkillWritableCapabilities = {},
  publication?: RubricPublication,
  dependencyGraph?: readonly SkillDependencyNode[]
): SkillRubricContext => {
  const readContent = capabilities.readContent ?? (() => readFileSync(join(directory, 'SKILL.md'), 'utf8'))
  const content = readContent()
  const frontmatter = parseFrontmatter(content)
  const validFrontmatter = frontmatter.raw !== null && frontmatter.isMapping
  const supportDirectories = readdirSync(directory, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
  const knowledgeGraph = existsSync(join(directory, 'knowledge', '_graph.md'))
  const frontmatterContext = { hasBlock: frontmatter.raw !== null, isMapping: frontmatter.isMapping }

  if (!frontmatter.isMapping)
    return {
      validFrontmatter,
      context: { layout: { supportDirectories, knowledgeGraph }, frontmatter: frontmatterContext }
    }

  const name = frontmatter.keys.get('name')
  const description = frontmatter.keys.get('description')
  const sharedDependencies = frontmatterList(frontmatter.keys.get('ki-shared-dependencies'))
  const localGovernanceSource = isLocalGovernanceSource(directory)
  const body = content.slice((content.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/) || [''])[0].length)
  const scriptsDirectory = join(directory, 'scripts')
  const sharedDirectory = join(scriptsDirectory, 'shared')
  const familyEvidence = rubricFamilyModules(scriptsDirectory)
  const imports = listScriptFiles(scriptsDirectory).flatMap((scriptPath) =>
    importSpecifiers(readFileSync(scriptPath, 'utf8'))
      .filter((specifier) => !isRuntimeBuiltin(specifier))
      .map((specifier) => {
        const entry = relative(scriptsDirectory, scriptPath)
        if (!specifier.startsWith('.') && !specifier.startsWith('/'))
          return { entry, specifier, packageImport: true, resolvesInsideScripts: false }
        const resolved = resolve(dirname(scriptPath), specifier)
        return {
          entry,
          specifier,
          packageImport: false,
          resolvesInsideScripts: resolved.startsWith(`${scriptsDirectory}/`)
        }
      })
  )

  return {
    validFrontmatter,
    context: {
      layout: { supportDirectories, knowledgeGraph },
      frontmatter: frontmatterContext,
      name: {
        name,
        directoryName: localGovernanceSource ? 'ki-self' : basename(directory),
        localGovernanceSource,
        reservedVendorNameAllowed:
          frontmatter.values['ki-runtime-binding'] === true &&
          /^\[[^\]]*\bclaude-code\b[^\]]*]$/.test((frontmatter.keys.get('ki-supported-runtimes') ?? '').trim()),
        setName: capabilities.setName
      },
      description: { description },
      optional: {
        compatibility: frontmatter.keys.get('compatibility'),
        metadataPresent: frontmatter.present.has('metadata'),
        metadata: frontmatter.values.metadata,
        allowedToolsPresent: frontmatter.present.has('allowed-tools'),
        allowedTools: frontmatter.values['allowed-tools'],
        disallowedToolsPresent: frontmatter.present.has('disallowed-tools'),
        disallowedTools: frontmatter.values['disallowed-tools'],
        licensePresent: frontmatter.present.has('license'),
        license: frontmatter.values.license
      },
      scripts: { helpEvidence: scriptHelpEvidence(directory) },
      checker: {
        imports,
        rootSkill: name === 'ki-skills',
        declaredSharedModules: frontmatterList(frontmatter.keys.get('ki-shared-modules')),
        sharedDependencies,
        legacyLibPresent: existsSync(join(scriptsDirectory, 'lib')),
        presentSharedModules: existsSync(sharedDirectory)
          ? readdirSync(sharedDirectory, { withFileTypes: true })
              .filter((entry) => entry.isDirectory() || (entry.isFile() && !entry.name.endsWith('.test.ts')))
              .map((entry) => (entry.isFile() && entry.name.endsWith('.ts') ? entry.name.slice(0, -3) : entry.name))
              .sort()
          : [],
        rubricModuleExists: existsSync(join(sharedDirectory, 'rubric.ts')),
        structuredRubricRequired: name === 'ki-skills' || sharedDependencies.includes('ki-skills:rubric'),
        ...familyEvidence
      },
      ...(name === 'ki-skills' ? { rubric: { publication } } : {}),
      shape: createKiShapeContext({
        skill: createKiShapeEvidence(directory, frontmatter, body, dependencyGraph),
        addArgumentHintVerbs: capabilities.addArgumentHintVerbs
      }),
      size: { bodyLines: body.split(/\r?\n/).length, bodyTokens: estimateTokens(body) },
      formats: inspectSkillFormats(directory, content, frontmatter, (name ?? '').startsWith('ki-'))
    }
  }
}
