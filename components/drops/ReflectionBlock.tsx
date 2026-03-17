import { ReflectionBlock as ReflectionBlockType } from '@/lib/drops/types'

interface ReflectionBlockProps {
  reflection: ReflectionBlockType
}

export function ReflectionBlock({ reflection }: ReflectionBlockProps) {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-background to-amber-50/30" />
      
      {/* Decorative Arch Element */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.03]">
        <svg viewBox="0 0 200 200" fill="currentColor" className="w-full h-full text-foreground">
          <path d="M100 0C44.8 0 0 44.8 0 100v100h200V100C200 44.8 155.2 0 100 0zm0 20c44.2 0 80 35.8 80 80v80H20v-80c0-44.2 35.8-80 80-80z"/>
        </svg>
      </div>
      
      <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
        {/* Insight */}
        <p className="font-serif text-2xl italic leading-relaxed text-foreground lg:text-3xl">
          &ldquo;{reflection.insight}&rdquo;
        </p>
        
        {/* Divider */}
        <div className="my-10 flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-border" />
          <div className="h-2 w-2 rotate-45 border border-border" />
          <div className="h-px w-12 bg-border" />
        </div>
        
        {/* Question */}
        <p className="text-lg font-medium text-foreground lg:text-xl">
          {reflection.question}
        </p>
        
        {/* Reference */}
        {reflection.reference && (
          <p className="mt-8 text-sm text-muted-foreground">
            {reflection.reference}
          </p>
        )}
      </div>
    </section>
  )
}
