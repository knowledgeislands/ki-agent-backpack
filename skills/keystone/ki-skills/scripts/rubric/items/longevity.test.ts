import { describe, expect, test } from 'bun:test'
import type { RefreshContext } from '../contexts/longevity.ts'
import { LONGEVITY } from './longevity.ts'

const long3 = LONGEVITY.items.find(({ code }) => code === 'LONG-3')

const monthly = (ageDays: number | null): RefreshContext => ({
  sourcesPresent: true,
  refreshClass: 'external-spec',
  cadence: 'monthly',
  windowDays: 30,
  lastReviewed: ageDays === null ? null : '2026-01-01',
  ageDays
})

const run = (context: RefreshContext) => long3?.mechanical?.audit.run(context) ?? []

describe('LONG-3 warns, then fails, an overdue source list', () => {
  test('passes within the cadence and its 14 days of grace', () => {
    expect(run(monthly(44))[0]?.status).toBe('PASS')
  })

  test('warns for the first two months after the source list falls due', () => {
    for (const age of [45, 104]) {
      const [outcome] = run(monthly(age))
      expect(outcome?.status).toBe('VIOLATION')
      expect(outcome?.level).toBeUndefined()
    }
  })

  test('fails once it is more than two months overdue', () => {
    const [outcome] = run(monthly(105))
    expect(outcome?.status).toBe('VIOLATION')
    expect(outcome?.level).toBe('FAIL')
    expect(outcome?.message).toContain('more than 60 days overdue')
  })

  test('keeps an on-change skill exempt', () => {
    const [outcome] = run({ ...monthly(400), cadence: 'on-change', windowDays: null })
    expect(outcome?.status).toBe('NOT_APPLICABLE')
  })
})
