import { expect, test } from 'bun:test'
import { inspectRoadmapAreas, matchesRoadmapArea } from './roadmap-areas.ts'

test('rejects malformed or retired area declarations', () => {
  for (const value of [
    null,
    {},
    [],
    ['GOV', 'GOV'],
    ['gov'],
    { gov: 'Governance' },
    { GOV: 'company-record' },
    { GOV: '' }
  ])
    expect(inspectRoadmapAreas(value).error).toBeDefined()
})

test('preserves repository-wide and legacy issuing modes', () => {
  expect(inspectRoadmapAreas(undefined)).toEqual({ areas: new Map(), legacy: false })
  expect(inspectRoadmapAreas(['GOV'])).toEqual({ areas: new Map([['GOV', undefined]]), legacy: true })
  expect(matchesRoadmapArea('TEST-001', undefined, { repoCode: 'TEST', areas: new Map() })).toBe(true)
  expect(matchesRoadmapArea('TEST-GOV-001', 'GOV', { repoCode: 'TEST', areas: new Map() })).toBe(false)
})
