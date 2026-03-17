"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Video, Share2, MapPin, Film, Star } from "lucide-react"

const deliverables = [
  {
    icon: Video,
    title: "Short-form Video",
    description: "Reel + TikTok coverage",
  },
  {
    icon: Share2,
    title: "Story Placement",
    description: "With link-out to your business",
  },
  {
    icon: MapPin,
    title: "Location Tagging",
    description: "Across all platforms",
  },
  {
    icon: Film,
    title: "YouTube Feature",
    description: "Optional long-form content",
  },
  {
    icon: Star,
    title: "Ramadan Packages",
    description: "Seasonal spotlight opportunities",
  },
]

export function MuslimTexasSection() {
  return (
    <section id="muslim-texas" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left - Content */}
          <div>
            <p className="font-sans text-sm uppercase tracking-widest text-primary">
              Signature Series
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-foreground md:text-5xl">
              Muslim Texas
            </h2>
            <p className="mt-6 font-sans text-lg leading-relaxed text-muted-foreground">
              A curated documentary series capturing the restaurants, mosques, events, and culture 
              shaping Muslim life across Texas. Celebrating the vibrant tapestry of our community, 
              one story at a time.
            </p>

            {/* Video Preview */}
            <div className="mt-8 aspect-video overflow-hidden rounded-lg bg-secondary">
              <video
                src="/videos/intro.mp4"
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>

            <div className="mt-8">
              <p className="mb-4 text-sm text-muted-foreground">
                Features starting at $500 · Bundle pricing available · Ramadan rates seasonal
              </p>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="#contact">Feature Your Business</Link>
              </Button>
            </div>
          </div>

          {/* Right - Deliverables */}
          <div className="flex flex-col justify-center">
            <h3 className="mb-6 font-serif text-2xl font-semibold text-foreground">
              What You Get
            </h3>
            <div className="space-y-4">
              {deliverables.map((item) => (
                <Card
                  key={item.title}
                  className="group flex items-center gap-4 border-border bg-card p-5 transition-all hover:border-primary hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
