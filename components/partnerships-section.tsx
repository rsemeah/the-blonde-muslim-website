"use client"

import { Card } from "@/components/ui/card"

const partnerships = [
  {
    number: "01",
    title: "Sponsored Content",
    description: "Authentic storytelling that resonates with our engaged Muslim community.",
  },
  {
    number: "02",
    title: "Event Coverage",
    description: "Professional presence and coverage at your events and gatherings.",
  },
  {
    number: "03",
    title: "Brand Ambassadorship",
    description: "Long-term partnerships built on trust and shared values.",
  },
  {
    number: "04",
    title: "Community Campaigns",
    description: "Initiatives that uplift and benefit the Muslim community.",
  },
  {
    number: "05",
    title: "Trade Show Presence",
    description: "Representation at industry events and exhibitions.",
  },
  {
    number: "06",
    title: "Podcast Feature",
    description: "Conversations on faith, culture, and meaningful topics.",
  },
]

export function PartnershipsSection() {
  return (
    <section id="partner" className="bg-background py-20 lg:py-28 pattern-islamic">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="font-sans text-sm uppercase tracking-widest text-primary">
            Opportunities
          </p>
          <h2 className="mt-4 font-serif text-4xl font-semibold text-foreground md:text-5xl">
            Partnership Options
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-sans text-lg text-muted-foreground">
            Collaborate with a trusted voice reaching 600K+ Muslim women across platforms.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {partnerships.map((item) => (
            <Card
              key={item.number}
              className="group border-border bg-card p-8 transition-all hover:border-primary hover:shadow-lg"
            >
              <span className="font-serif text-4xl font-light text-primary/40 transition-colors group-hover:text-primary">
                {item.number}
              </span>
              <h3 className="mt-4 font-serif text-xl font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
