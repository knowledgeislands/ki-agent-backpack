import { existsSync, lstatSync, readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import type { AuditOutcome } from '../../shared/rubric.ts'

/** The tap's primary shape, owned by `ki-repo-tools` since REPO-OTHERS a folded the tap skill in. */
export const TAP_SHAPE = 'ki-repo-homebrew-tap'
const FORMULA_DIRECTORY = 'Formula'
const HOOK = '.githooks/pre-commit'

type NodeKind = 'missing' | 'file' | 'directory' | 'unsafe'
type FormulaDirectoryState = 'missing' | 'present' | 'unsafe'

export type FormulaEvidence = {
  readonly name: string
  readonly file: string
  readonly text: string
}

export type TapContext = {
  readonly targetExists: boolean
  /** True where `[skills.ki-repo-tools]` is declared and the repository is a Homebrew tap. */
  readonly applicable: boolean
  readonly formulaDirectory: FormulaDirectoryState
  readonly formulae: readonly FormulaEvidence[]
  readonly homebrewValidation: readonly AuditOutcome[]
  readonly readme: string | null
  /** What the committed hook runs (`TAP-HOOK`). */
  readonly hook: readonly AuditOutcome[]
}

const nodeKind = (path: string): NodeKind => {
  try {
    const stat = lstatSync(path)
    if (stat.isSymbolicLink()) return 'unsafe'
    if (stat.isFile()) return 'file'
    if (stat.isDirectory()) return 'directory'
    return 'unsafe'
  } catch {
    return 'missing'
  }
}

/** Whether `Formula/` is a real directory, the tap's detection signal beside its `primary_shape`. */
export const hasFormulaDirectory = (root: string): boolean => nodeKind(join(root, FORMULA_DIRECTORY)) === 'directory'

/** A line that audits, conforms, repairs or rewrites: none belongs at commit time; the full audit runs in CI. */
const heavy = (line: string): boolean =>
  /\bki repo (?:audit|conform|repair)\b|(?:^|\s)--(?:fix|write)(?=\s|$)|\bquiet_audit\b/.test(line)

// A staged listing piped to `ruby -wc`, which checks syntax with warnings and never rewrites.
const checksStagedRuby = (line: string): boolean => /\bgit diff --cached\b/.test(line) && /\bruby -wc\b/.test(line)

/** What a Homebrew tap commit gate runs; `ki-repo` HOOK-1 owns whether the hook exists and HOOK-4 its canonical text. */
export const inspectTapHook = (root: string): readonly AuditOutcome[] => {
  const directory = join(root, '.githooks')
  const path = join(root, HOOK)
  if (!existsSync(path))
    return existsSync(directory) && lstatSync(directory).isSymbolicLink()
      ? [
          {
            status: 'VIOLATION',
            message: 'The .githooks directory is a symbolic link, not committed source.',
            subject: '.githooks'
          }
        ]
      : [{ status: 'NOT_APPLICABLE', message: 'No committed .githooks/pre-commit; ki-repo HOOK-1 owns its existence.' }]
  const metadata = lstatSync(path)
  if (!metadata.isFile() || metadata.isSymbolicLink() || lstatSync(directory).isSymbolicLink())
    return [{ status: 'VIOLATION', message: `${HOOK} is not a safe regular file.`, subject: HOOK }]
  const lines = readFileSync(path, 'utf8')
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line !== '' && !line.startsWith('#'))
  const offending = lines.find(heavy)
  if (offending !== undefined)
    return [
      {
        status: 'VIOLATION',
        message: `${HOOK} runs \`${offending}\`; the gate is check-only and runs no audit, conform, repair or fix.`,
        subject: HOOK
      }
    ]
  return lines.some(checksStagedRuby)
    ? [
        {
          status: 'PASS',
          message: `${HOOK} runs ruby -wc over the staged Ruby and only check-only staged lints; the full audit runs in CI.`,
          subject: HOOK
        }
      ]
    : [{ status: 'VIOLATION', message: `${HOOK} does not run \`ruby -wc\` over the staged Ruby.`, subject: HOOK }]
}

/** Reads a tap's formulae, README and hook; `applicable` comes from the tools session's own routing. */
export const inspectTap = (root: string, targetExists: boolean, applicable: boolean): TapContext => {
  const formulaPath = join(root, FORMULA_DIRECTORY)
  const formulaKind = targetExists ? nodeKind(formulaPath) : 'missing'
  const formulaDirectory: FormulaDirectoryState =
    formulaKind === 'directory' ? 'present' : formulaKind === 'missing' ? 'missing' : 'unsafe'
  const formulae =
    formulaDirectory === 'present'
      ? readdirSync(formulaPath, { withFileTypes: true })
          .filter((entry) => entry.isFile() && entry.name.endsWith('.rb'))
          .map((entry) => entry.name)
          .sort()
          .map((file) => ({
            name: file.replace(/\.rb$/, ''),
            file,
            text: readFileSync(join(formulaPath, file), 'utf8')
          }))
      : []
  const readmePath = join(root, 'README.md')
  const readme = targetExists && nodeKind(readmePath) === 'file' ? readFileSync(readmePath, 'utf8') : null
  return {
    targetExists,
    applicable,
    formulaDirectory,
    formulae,
    homebrewValidation: [],
    readme,
    hook: applicable
      ? inspectTapHook(root)
      : [{ status: 'NOT_APPLICABLE', message: 'Not a Homebrew tap: TAP-HOOK reads only a tap’s gate.' }]
  }
}
