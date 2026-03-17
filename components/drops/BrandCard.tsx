import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { BrandCard as BrandCardType } from '@/lib/drops/types'

interface BrandCardProps {
  brand: BrandCardType
}

export function BrandCard({ brand }: BrandCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden bg-card border border-border/50 transition-all duration-300 hover:border-border hover:shadow-sm">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <Image
          src={brand.image}
          alt={brand.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Featured Badge */}
        {brand.featured && (
          <div className="absolute left-3 top-3 z-10">
            <span className="inline-flex px-2 py-0.5 text-[9px] font-medium uppercase tracking-wider bg-foreground text-background">
              Featured
            </span>
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h4 className="font-medium text-foreground">{brand.name}</h4>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {brand.description}
        </p>
        
        {/* CTA */}
        <a 
          href={brand.ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto pt-4 inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-foreground/70 transition-colors hover:text-foreground"
        >
          {brand.ctaLabel}
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  )
}
