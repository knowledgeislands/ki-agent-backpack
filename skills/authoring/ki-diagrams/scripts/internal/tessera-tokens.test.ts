import { expect, test } from 'bun:test'
import { execFileSync } from 'node:child_process'
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { kiThemeVariables, TESSERA_TOKENS, TESSERA_TOKENS_PATH, TESSERA_TOKENS_RELEASE } from './tessera-tokens.ts'

/** The repository this copy of the skill sits in, or `undefined` where it is installed outside one. */
const repositoryRoot = (): string | undefined => {
  try {
    return execFileSync('git', ['rev-parse', '--show-toplevel'], {
      cwd: import.meta.dir,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore']
    }).trim()
  } catch {
    return undefined
  }
}

const root = repositoryRoot()
const vendored = root ? join(root, TESSERA_TOKENS_PATH) : undefined
const tokens =
  vendored && existsSync(vendored) ? (JSON.parse(readFileSync(vendored, 'utf8')) as Record<string, unknown>) : undefined

test.skipIf(tokens === undefined)('the values match the vendored tessera-tokens at its locked release', () => {
  const lock = JSON.parse(readFileSync(join(root as string, 'tessera-tokens-lock.json'), 'utf8')) as { release: string }
  expect(lock.release).toBe(TESSERA_TOKENS_RELEASE)
  for (const [path, value] of Object.entries(TESSERA_TOKENS)) {
    const token = path.split('.').reduce<unknown>((node, key) => (node as Record<string, unknown>)?.[key], tokens)
    expect({ path, value: (token as { $value?: unknown })?.$value }).toEqual({ path, value })
  }
})

test('every theme variable is painted from a Tessera token in both themes', () => {
  const values = new Set<string>(Object.values(TESSERA_TOKENS).filter((value) => typeof value === 'string'))
  for (const theme of ['light', 'night'] as const) {
    const variables = kiThemeVariables(theme)
    expect(Object.keys(variables)).toContain('--bg')
    for (const value of Object.values(variables)) expect(values.has(value)).toBe(true)
  }
})
