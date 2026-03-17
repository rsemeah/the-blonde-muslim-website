import { DropSection as DropSectionType } from '@/lib/drops/types'
import { BrandCard } from './BrandCard'

interface DropSectionProps {
  section: DropSectionType
  index: number
}

export function DropSection({ section, index }: DropSectionProps) {
  // Sort brands with featured first
  const sortedBrands = [...section.brands].sort((a, b) => {
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1
    return 0
  })

  return (
    <section className={`py-16 lg:py-20 ${index % 2 === 1 ? 'bg-secondary/30' : ''}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Part {index + 1}
          </p>
          <h2 className="mt-3 font-serif text-3xl text-foreground lg:text-4xl">
            {section.title}
          </h2>
          {section.description && (
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              {section.description}
            </p>
          )}
        </div>
        
        {/* Brand Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sortedBrands.map((brand) => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </div>
      </div>
    </section>
  )
}
