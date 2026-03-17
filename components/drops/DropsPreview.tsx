import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Drop } from '@/lib/drops/types'
import { DropCard } from './DropCard'

interface DropsPreviewProps {
  drops: Drop[]
  title: string
  ctaLabel: string
  ctaHref: string
}

export function DropsPreview({ drops, title, ctaLabel, ctaHref }: DropsPreviewProps) {
  // Show max 3 drops
  const previewDrops = drops.slice(0, 3)

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
              Curated Collections
            </p>
            <h2 className="mt-3 font-serif text-4xl text-foreground lg:text-5xl">
              {title}
            </h2>
          </div>
          <Link
            href={ctaHref}
            className="hidden sm:flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-foreground/70 transition-all duration-300 hover:gap-4 hover:text-foreground"
          >
            <span>{ctaLabel}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        
        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {previewDrops.map((drop) => (
            <DropCard key={drop.slug} drop={drop} />
          ))}
        </div>
        
        {/* Mobile CTA */}
        <div className="mt-10 text-center sm:hidden">
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-foreground/70"
          >
            <span>{ctaLabel}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
