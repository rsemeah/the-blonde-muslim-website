"use client"

import Link from "next/link"

export function CircleSection() {
  return (
    <section id="circle" className="relative overflow-hidden bg-secondary/30 py-24 lg:py-32">
      {/* Subtle Crescent Pattern */}
      <div className="absolute inset-0 crescent-motif opacity-50" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left - Content */}
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-accent">
              Sacred Community
            </p>
            <h2 className="mt-4 font-serif text-4xl font-light leading-tight text-foreground sm:text-5xl lg:text-6xl">
              The Circle
            </h2>
            <p className="mt-2 font-serif text-xl italic text-muted-foreground">
              A gathering place for Muslimahs
            </p>

            <div className="my-8 h-px w-16 bg-accent/40" />

            <div className="max-w-lg space-y-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
              <p>
                The Circle is a soft, sacred space for Muslim women to come together 
                in reflection, support, and sisterhood. It is not therapy. It is not 
                religious instruction. It is simply belonging.
              </p>
              <p>
                Here, women find conversation, connection, and the comfort of being 
                understood. A place to pause, breathe, and remember that you are 
                not alone on this journey.
              </p>
            </div>

            {/* Offerings */}
            <div className="mt-10 space-y-4">
              {[
                "Intentional gatherings for reflection",
                "Community conversations and support",
                "A space to be seen and heard",
                "Connection rooted in shared faith",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <p className="text-sm text-foreground">{item}</p>
                </div>
              ))}
            </div>

            <Link
              href="#contact"
              className="mt-10 inline-flex items-center justify-center border border-foreground/20 px-8 py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-foreground transition-all duration-300 hover:bg-foreground hover:text-background"
            >
              Join The Circle
            </Link>
          </div>

          {/* Right - Visual Element */}
          <div className="relative flex items-center justify-center">
            <div className="relative">
              {/* Crescent Moon Visual */}
              <svg
                viewBox="0 0 200 200"
                className="h-64 w-64 text-accent/20 sm:h-80 sm:w-80 lg:h-96 lg:w-96"
                fill="currentColor"
              >
                <path d="M100 10 A90 90 0 1 1 100 190 A70 70 0 1 0 100 10" />
              </svg>
              
              {/* Center Quote */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="max-w-[200px] text-center">
                  <p className="font-serif text-lg italic leading-relaxed text-foreground/80 sm:text-xl">
                    {"\"The believers are like one body\""}
                  </p>
                  <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    Hadith
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
