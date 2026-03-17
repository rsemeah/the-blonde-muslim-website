import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface DropCTAProps {
  ctaText: string
  ctaHref: string
}

export function DropCTA({ ctaText, ctaHref }: DropCTAProps) {
  return (
    <section className="bg-foreground py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-background/50">
          Continue the Journey
        </p>
        <h2 className="mt-4 font-serif text-3xl text-background lg:text-4xl">
          {ctaText}
        </h2>
        <Link
          href={ctaHref}
          className="group mt-8 inline-flex items-center gap-3 bg-background px-8 py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-foreground transition-all duration-300 hover:bg-background/90"
        >
          <span>Go There</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  )
}
