import Image from 'next/image'
import { DropCategory } from '@/lib/drops/types'

const categoryColors: Record<string, string> = {
  lifestyle: 'bg-amber-100 text-amber-800',
  fashion: 'bg-rose-100 text-rose-800',
  food: 'bg-emerald-100 text-emerald-800',
  spiritual: 'bg-sky-100 text-sky-800',
}

interface DropHeroProps {
  title: string
  subtitle: string
  category: DropCategory
  coverImage: string
}

export function DropHero({ title, subtitle, category, coverImage }: DropHeroProps) {
  return (
    <section className="relative min-h-[70vh] flex items-end">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={coverImage}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-foreground/20" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 w-full pb-16 pt-32 lg:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Category Badge */}
          <span className={`inline-flex px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] ${categoryColors[category]}`}>
            {category}
          </span>
          
          {/* Title */}
          <h1 className="mt-6 font-serif text-5xl text-background sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          
          {/* Subtitle */}
          <p className="mt-6 max-w-2xl text-xl text-background/80 lg:text-2xl">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  )
}
