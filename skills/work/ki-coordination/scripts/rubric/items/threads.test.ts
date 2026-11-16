import { afterEach, describe, expect, test } from 'bun:test'
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import type { AuditOutcome } from '../../shared/rubric.ts'
import { type CoordinationRubricContext, createCoordinationSession } from '../contexts/coordination.ts'
import { COORD } from './threads.ts'

const roots: string[] = []

afterEach(() => {
  for (const root of roots.splice(0)) rmSync(root, { recursive: true, force: true })
})

/** A repository with user settings present but no binding, so every binding check reports. */
const unbound = (): string => {
  const root = mkdtempSync(join(tmpdir(), 'ki-coordination-levels-'))
  roots.push(root)
  mkdirSync(join(root, '.claude'), { recursive: true })
  writeFileSync(join(root, '.claude', 'settings.json'), '{}')
  return root
}

const context = (root: string): CoordinationRubricContext => {
  const session = createCoordinationSession({ mode: 'audit', repository: root, userHome: root, configuration: {} })
  const [subject] = session.subjects
  if (!subject) throw new Error('the coordination session has no subject')
  return subject.context() as CoordinationRubricContext
}

/** Every outcome level an item emits that its declaration does not admit, as `ki`'s `validateOutcome` rejects them. */
const undeclaredLevels = (ctx: CoordinationRubricContext): string[] =>
  COORD.items.flatMap((item) => {
    const mechanical = item.mechanical
    if (!mechanical?.audit) return []
    const admitted = new Set([mechanical.level, ...(mechanical.overrideLevels ?? [])])
    const outcomes = mechanical.audit.run(COORD.selectContext(ctx)) as readonly AuditOutcome[]
    return outcomes
      .map((outcome) => ('level' in outcome ? outcome.level : undefined))
      .filter((level): level is NonNullable<typeof level> => level !== undefined && !admitted.has(level))
      .map((level) => `${item.code} ${level}`)
  })

describe('declared outcome levels', () => {
  test("every item's outcomes over an unbound repository use a declared level", () => {
    const ctx = context(unbound())
    expect(ctx.binding.outcomes.some((outcome) => outcome.status === 'VIOLATION')).toBe(true)
    expect(undeclaredLevels(ctx)).toEqual([])
  })
})
