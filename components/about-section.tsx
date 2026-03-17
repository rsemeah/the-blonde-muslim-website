"use client"

import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 lg:mb-24">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Her Story
          </p>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl font-light leading-tight text-foreground sm:text-5xl lg:text-6xl">
            A voice of warmth, wisdom,
            <br />
            <span className="italic">and quiet strength</span>
          </h2>
        </div>

        {/* Editorial Layout */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left - Large Image */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-3 border border-accent/10" />
              <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
                <Image
                  src="/images/water-wells.png"
                  alt="Water well project - Sadaqah Jariyah"
                  fill
                  className="object-cover img-editorial"
                />
              </div>
              <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Droplets of Mercy &middot; Pakistan
              </p>
            </div>
          </div>

          {/* Right - Story Content */}
          <div className="lg:col-span-7 lg:pl-8">
            <div className="max-w-xl">
              {/* Opening */}
              <p className="font-serif text-2xl leading-relaxed text-foreground lg:text-3xl">
                Candace is not just an influencer. She is a storyteller, a connector of hearts, 
                and a trusted presence in the Muslim community.
              </p>

              <div className="my-10 h-px w-16 bg-accent/40" />

              {/* Body */}
              <div className="space-y-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
                <p>
                  Based in Texas, she has built a community of over 600,000 women who come to her 
                  for authentic storytelling at the intersection of faith, culture, and modern Muslim life. 
                  Her work spans lifestyle, philanthropy, and cultural documentation.
                </p>
                <p>
                  What sets her apart is her softness. Her approach is never preachy, never performative. 
                  Instead, she leads with grace, inviting others into reflection, connection, and growth 
                  through faith and belonging.
                </p>
                <p>
                  Her philanthropic heart beats loudest in her commitment to Sadaqah Jariyah 
                  through water well projects in Pakistan, providing clean water to 
                  communities in need and building a legacy of continuous charity.
                </p>
              </div>

              {/* Values Grid */}
              <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3">
                {[
                  { label: "Faith", desc: "Grounded in devotion" },
                  { label: "Community", desc: "Building sisterhood" },
                  { label: "Service", desc: "Giving with purpose" },
                ].map((value) => (
                  <div key={value.label}>
                    <p className="font-serif text-xl text-foreground">{value.label}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
