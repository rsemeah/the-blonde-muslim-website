import Image from 'next/image'

interface DropIntroProps {
  intro: string
}

export function DropIntro({ intro }: DropIntroProps) {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <blockquote className="relative">
          {/* Decorative Quote Mark */}
          <span className="absolute -left-4 -top-8 font-serif text-8xl text-muted/30 lg:-left-12">
            &ldquo;
          </span>
          
          {/* Intro Text */}
          <p className="relative font-serif text-2xl italic leading-relaxed text-foreground lg:text-3xl">
            {intro}
          </p>
          
          {/* Signature */}
          <footer className="mt-8 flex items-center gap-4">
            <div className="relative h-12 w-12 overflow-hidden rounded-full bg-secondary">
              <Image
                src="/images/candace-profile.png"
                alt="Candace"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-serif text-lg italic text-foreground">— Candace</p>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">The Blonde Muslim</p>
            </div>
          </footer>
        </blockquote>
      </div>
    </section>
  )
}
