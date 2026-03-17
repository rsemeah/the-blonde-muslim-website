import { Drop } from '@/lib/drops/types'
import { DropCard } from './DropCard'

interface DropsGridProps {
  drops: Drop[]
}

export function DropsGrid({ drops }: DropsGridProps) {
  if (drops.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="text-muted-foreground">No drops found in this category.</p>
      </div>
    )
  }

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {drops.map((drop) => (
        <DropCard key={drop.slug} drop={drop} />
      ))}
    </div>
  )
}
