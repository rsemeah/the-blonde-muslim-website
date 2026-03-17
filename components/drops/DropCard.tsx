import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Drop } from '@/lib/drops/types'

const categoryColors: Record<string, string> = {
  lifestyle: 'bg-amber-100 text-amber-800',
  fashion: 'bg-rose-100 text-rose-800',
  food: 'bg-emerald-100 text-emerald-800',
  spiritual: 'bg-sky-100 text-sky-800',
}

interface DropCardProps {
  drop: Drop
}

export function DropCard({ drop }: DropCardProps) {
  return (
    <Link 
      href={`/drops/${drop.slug}`}
      className="group relative flex flex-col overflow-hidden bg-card transition-all duration-500 hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent z-10" />
        <Image
          src={drop.coverImage}
          alt={drop.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Category Badge */}
        <div className="absolute left-4 top-4 z-20">
          <span className={`inline-flex px-3 py-1 text-[10px] font-medium uppercase tracking-wider ${categoryColors[drop.category]}`}>
            {drop.category}
          </span>
        </div>
        
        {/* Featured Badge */}
        {drop.featured && (
          <div className="absolute right-4 top-4 z-20">
            <span className="inline-flex px-3 py-1 text-[10px] font-medium uppercase tracking-wider bg-foreground text-background">
              Featured
            </span>
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-2xl text-foreground group-hover:text-foreground/80 transition-colors">
          {drop.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          {drop.subtitle}
        </p>
        <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-muted-foreground/80">
          {drop.intro}
        </p>
        
        {/* CTA */}
        <div className="mt-auto pt-6 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-foreground/70 transition-all duration-300 group-hover:gap-4 group-hover:text-foreground">
          <span>Explore Drop</span>
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </Link>
  )
}
