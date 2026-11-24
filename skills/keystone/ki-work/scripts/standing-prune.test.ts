import { describe, expect, test } from 'bun:test'
import { evaluateStandingPrune, type StandingPruneInput } from './internal/prune-selection.ts'

const now = new Date('2026-11-22T20:00:00Z')
const record = (overrides: Partial<StandingPruneInput> = {}): StandingPruneInput => ({
  status: 'done',
  terminalCommittedAt: new Date('2026-11-15T20:00:00Z'),
  landed: true,
  now,
  ...overrides
})

describe('the standing prune', () => {
  test('a done or cancelled record landed seven days ago is due without asking', () => {
    expect(evaluateStandingPrune(record())).toEqual({ due: true })
    expect(evaluateStandingPrune(record({ status: 'cancelled' }))).toEqual({ due: true })
  })

  test('waits until seven days have passed', () => {
    expect(evaluateStandingPrune(record({ terminalCommittedAt: new Date('2026-11-16T08:00:00Z') }))).toEqual({
      due: false,
      reason: 'terminal for under 7 days'
    })
  })

  test('waits for the commits to land upstream', () => {
    expect(evaluateStandingPrune(record({ landed: false })).due).toBe(false)
    expect(evaluateStandingPrune(record({ landed: 'unknown' })).due).toBe(false)
    expect(evaluateStandingPrune(record({ terminalCommittedAt: null })).due).toBe(false)
  })

  test('never applies to open work', () => {
    expect(evaluateStandingPrune(record({ status: 'awaiting-review' }))).toEqual({
      due: false,
      reason: 'not done or cancelled'
    })
  })
})
