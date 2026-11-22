/**
 * Purpose: The Tessera token values the KI-theme SVG export paints with, kept level with the repository's vendored
 * `tessera-tokens` package.
 * Boundary: Values only, copied from `packages/tessera-tokens/tokens.json`, the copy of `packages-tessera`'s
 * `tessera-tokens` this repository vendors and locks in `tessera-tokens-lock.json` under `ki-repo-packages`' vendoring
 * contract. The drift test compares them against that vendored file; to take a newer release, re-vendor it with
 * `bun run self:tessera-tokens:sync`, copy the changed values here and rerun the test.
 *
 * The skill is installed without the repository's `packages/` folder, so it carries the values rather than reading them.
 */

/** The `tessera-tokens` release these values were copied from, as its lock records it. */
export const TESSERA_TOKENS_RELEASE = '0.3.0'

/** The vendored token file the values come from, relative to the repository root. */
export const TESSERA_TOKENS_PATH = 'packages/tessera-tokens/tokens.json'

/** Each token's dotted path in the token file and its `$value` at the locked release. */
export const TESSERA_TOKENS = {
  'color.role.light.paper': '#f5efe0',
  'color.role.light.ink': '#1a2030',
  'color.role.light.muted': '#4a5568',
  'color.role.light.accent': '#1b3a5c',
  'color.role.light.ok': '#2d5a3d',
  'color.role.light.teal': '#317070',
  'color.role.light.warn': '#8a5a12',
  'color.role.light.bad': '#9b2c1c',
  'color.role.light.rule': '#d4c9b4',
  'color.role.light.boundary': '#9a8358',
  'color.role.night.paper': '#0f2440',
  'color.role.night.ink': '#f5efe0',
  'color.role.night.muted': '#a9b4c4',
  'color.role.night.accent': '#9fbbd8',
  'color.role.night.ok': '#8fc4a0',
  'color.role.night.teal': '#7fc2c0',
  'color.role.night.warn': '#c8963c',
  'color.role.night.bad': '#f0947a',
  'color.role.night.rule': '#24476e',
  'color.role.night.boundary': '#5f7896',
  'color.wash.light.ok': '#ddddcc',
  'color.wash.light.warn': '#f1e8d3',
  'color.wash.light.bad': '#ead8c8',
  'color.wash.night.ok': '#1e374c',
  'color.wash.night.warn': '#1e2d40',
  'color.wash.night.bad': '#2a3147',
  'color.core.mist': '#eef1f5',
  'font.mono': ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'Liberation Mono', 'monospace']
} as const

type TokenPath = keyof typeof TESSERA_TOKENS
type Theme = 'light' | 'night'

/** Archify's theme variables, each painted from a Tessera role, wash or core token in the given theme. */
const PAINT: Record<string, (theme: Theme) => TokenPath> = {
  '--bg': (t) => `color.role.${t}.paper`,
  '--grid': (t) => `color.role.${t}.rule`,
  '--canvas-dot': (t) => `color.role.${t}.rule`,
  '--text': (t) => `color.role.${t}.ink`,
  '--text-muted': (t) => `color.role.${t}.muted`,
  '--text-dim': (t) => `color.role.${t}.boundary`,
  '--text-faint': (t) => `color.role.${t}.muted`,
  '--panel': (t) => `color.role.${t}.paper`,
  '--panel-border': (t) => `color.role.${t}.rule`,
  '--lane-fill': (t) => `color.wash.${t}.warn`,
  '--lane-stroke': (t) => `color.role.${t}.boundary`,
  '--arrow': (t) => `color.role.${t}.muted`,
  '--arrow-emphasis': (t) => `color.role.${t}.teal`,
  '--mask': (t) => `color.role.${t}.paper`,
  '--frontend-fill': (t) => `color.wash.${t}.ok`,
  '--frontend-stroke': (t) => `color.role.${t}.teal`,
  '--backend-fill': (t) => `color.wash.${t}.ok`,
  '--backend-stroke': (t) => `color.role.${t}.ok`,
  '--database-fill': (t) => (t === 'light' ? 'color.core.mist' : `color.wash.${t}.ok`),
  '--database-stroke': (t) => `color.role.${t}.accent`,
  '--cloud-fill': (t) => `color.wash.${t}.warn`,
  '--cloud-stroke': (t) => `color.role.${t}.warn`,
  '--security-fill': (t) => `color.wash.${t}.bad`,
  '--security-stroke': (t) => `color.role.${t}.bad`,
  '--messagebus-fill': (t) => `color.wash.${t}.warn`,
  '--messagebus-stroke': (t) => `color.role.${t}.boundary`,
  '--external-fill': (t) => (t === 'light' ? 'color.core.mist' : `color.wash.${t}.bad`),
  '--external-stroke': (t) => `color.role.${t}.muted`
}

/** The Archify theme variables a KI-theme export overrides, with their Tessera values, for one theme. */
export const kiThemeVariables = (theme: Theme): Record<string, string> =>
  Object.fromEntries(Object.entries(PAINT).map(([name, token]) => [name, TESSERA_TOKENS[token(theme)] as string]))

/** The `font.mono` stack as a CSS `font-family` value. */
export const kiMonoStack = (): string =>
  TESSERA_TOKENS['font.mono'].map((name) => (/\s/.test(name) ? `"${name}"` : name)).join(', ')
