"use client"

import Link from "next/link"

const partnerships = [
  {
    number: "01",
    title: "Sponsored Content",
    description: "Authentic storytelling that resonates with our engaged Muslim community.",
  },
  {
    number: "02",
    title: "Brand Ambassadorship",
    description: "Long-term partnerships built on trust, values, and genuine connection.",
  },
  {
    number: "03",
    title: "Event Coverage",
    description: "Elegant presence and professional coverage at your gatherings.",
  },
  {
    number: "04",
    title: "Community Campaigns",
    description: "Initiatives that uplift and benefit the Muslim community together.",
  },
  {
    number: "05",
    title: "Speaking Engagements",
    description: "Thoughtful conversations on faith, culture, and modern Muslim life.",
  },
  {
    number: "06",
    title: "Hosted Experiences",
    description: "Curated gatherings and events for your brand and audience.",
  },
]

export function PartnershipsSection() {
  return (
    <section id="partnerships" className="relative overflow-hidden bg-secondary/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
                Work With Me
              </p>
              <h2 className="mt-4 font-serif text-4xl font-light leading-tight text-foreground sm:text-5xl lg:text-6xl">
                Partnership
                <br />
                <span className="italic">Opportunities</span>
              </h2>
            </div>
            <div className="flex flex-col justify-end">
              <p className="max-w-md text-base leading-relaxed text-muted-foreground lg:text-lg">
                Collaborate with a trusted voice reaching 600K+ Muslim women across platforms. 
                Every partnership is approached with intention, authenticity, and care.
              </p>
              <Link
                href="#contact"
                className="mt-8 inline-flex w-fit items-center justify-center border border-foreground/20 px-8 py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-foreground transition-all duration-300 hover:bg-foreground hover:text-background"
              >
                Start a Conversation
              </Link>
            </div>
          </div>
        </div>

        {/* Partnership Grid */}
        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {partnerships.map((item) => (
            <div
              key={item.number}
              className="group bg-background p-8 transition-all duration-300 hover:bg-secondary/50 lg:p-10"
            >
              <span className="font-serif text-4xl font-light text-accent/40 transition-colors duration-300 group-hover:text-accent">
                {item.number}
              </span>
              <h3 className="mt-4 font-serif text-xl text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
