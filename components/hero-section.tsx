"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Instagram, Youtube } from "lucide-react"

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  )
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
      {/* Paradise Garden Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/garden-paradise.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/75 to-background" />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* Arabic Bismillah */}
            <p className="font-serif text-lg text-primary/80 mb-2">
              {"بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ"}
            </p>
            
            <h1 className="font-serif text-5xl font-semibold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
              The Blonde<br />Muslim
            </h1>
            <p className="mt-6 max-w-lg font-sans text-lg leading-relaxed text-muted-foreground">
              {"Gardens beneath which rivers flow."} A space for Muslimahs to connect, grow in faith, and serve the Ummah together. Authentic storytelling from Texas to the heart of our community.
            </p>

            {/* Stats */}
            <div className="mt-8 flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Instagram className="h-4 w-4 text-primary" />
                <span className="font-semibold text-foreground">384K</span>
              </div>
              <div className="flex items-center gap-2">
                <TikTokIcon className="h-4 w-4 text-primary" />
                <span className="font-semibold text-foreground">197K</span>
              </div>
              <div className="flex items-center gap-2">
                <Youtube className="h-4 w-4 text-primary" />
                <span className="font-semibold text-foreground">22K</span>
              </div>
              <div className="border-l border-border pl-6">
                <span className="font-semibold text-foreground">603K+</span>
                <span className="ml-1 text-muted-foreground">Combined Reach</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="#partner">Partner With Me</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10">
                <Link href="#giving">View Impact</Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Portrait */}
          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="relative">
              {/* Decorative arch frame with turquoise accent */}
              <div className="absolute -inset-4 rounded-t-full border-2 border-primary/30" />
              <div className="absolute -inset-6 rounded-t-full border border-accent/20" />
              <div className="relative h-[400px] w-[320px] overflow-hidden rounded-t-full bg-secondary shadow-2xl md:h-[500px] md:w-[400px]">
                <Image
                  src="/images/candace-profile.png"
                  alt="Candace - The Blonde Muslim"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
