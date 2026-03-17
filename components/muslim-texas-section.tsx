"use client"

import Link from "next/link"

export function MuslimTexasSection() {
  return (
    <section id="muslim-texas" className="relative overflow-hidden bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center lg:mb-20">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Editorial Series
          </p>
          <h2 className="mt-4 font-serif text-4xl font-light text-foreground sm:text-5xl lg:text-6xl">
            Muslim Texas
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
            A curated documentary series capturing the restaurants, mosques, events, and culture 
            shaping Muslim life across Texas. Stories of community, one frame at a time.
          </p>
        </div>

        {/* Editorial Layout - Asymmetric */}
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-6">
          {/* Main Video Feature */}
          <div className="lg:col-span-7">
            <div className="relative">
              <div className="absolute -inset-2 border border-accent/10" />
              <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                <video
                  src="/videos/intro.mp4"
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-background lg:p-8">
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-background/70">
                    Featured Episode
                  </p>
                  <p className="mt-2 font-serif text-xl lg:text-2xl">
                    Discovering Hidden Gems in DFW
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Side Content */}
          <div className="flex flex-col justify-between lg:col-span-5 lg:pl-6">
            {/* What You Get */}
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Partnership Includes
              </p>
              <div className="mt-6 space-y-5">
                {[
                  { title: "Short-form Coverage", desc: "Reel + TikTok feature" },
                  { title: "Story Placement", desc: "With link-out to your business" },
                  { title: "Location Tagging", desc: "Across all platforms" },
                  { title: "YouTube Feature", desc: "Optional long-form documentary" },
                  { title: "Ramadan Spotlight", desc: "Seasonal packages available" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="mt-2 h-1 w-1 rounded-full bg-accent" />
                    <div>
                      <p className="font-medium text-foreground">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 border-t border-border pt-8">
              <p className="text-sm text-muted-foreground">
                Features starting at <span className="font-medium text-foreground">$500</span> 
                {" "}&middot; Bundle pricing available
              </p>
              <Link
                href="#contact"
                className="mt-6 inline-flex items-center justify-center border border-foreground bg-foreground px-8 py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-background transition-all duration-300 hover:bg-transparent hover:text-foreground"
              >
                Feature Your Business
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
