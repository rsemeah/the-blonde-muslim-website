import { Drop, DropCategory } from './types'
import { ramadanReset } from './ramadan-reset'
import { modestFashionEdit } from './modest-fashion-edit'
import { texasHalalGuide } from './texas-halal-guide'
import { selfCareRoutine } from './self-care-routine'
import { spiritualReflection } from './spiritual-reflection'

export * from './types'

export const allDrops: Drop[] = [
  ramadanReset,
  modestFashionEdit,
  texasHalalGuide,
  selfCareRoutine,
  spiritualReflection,
]

export function getDropBySlug(slug: string): Drop | undefined {
  return allDrops.find((drop) => drop.slug === slug)
}

export function getFeaturedDrops(): Drop[] {
  return allDrops.filter((drop) => drop.featured)
}

export function getDropsByCategory(category: DropCategory): Drop[] {
  return allDrops.filter((drop) => drop.category === category)
}

export function getAllDropSlugs(): string[] {
  return allDrops.map((drop) => drop.slug)
}
