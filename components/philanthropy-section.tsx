"use client"

import Image from "next/image"
import { Heart, Droplets, Users } from "lucide-react"

export function PhilanthropySection() {
  return (
    <section id="giving" className="relative bg-foreground py-20 text-background lg:py-28">
      {/* Subtle crescent pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <circle cx="80" cy="50" r="30" fill="currentColor" />
          <circle cx="90" cy="50" r="25" fill="#1a1a1a" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-2xl">
              <Image
                src="/images/water-wells.png"
                alt="Water wells providing clean water to communities - Droplets of Mercy"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-6 rounded-lg bg-background p-6 shadow-xl">
              <div className="flex items-center gap-3">
                <Droplets className="h-8 w-8 text-accent" />
                <div>
                  <p className="text-2xl font-bold text-foreground">Clean Water</p>
                  <p className="text-sm text-muted-foreground">For communities in need</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <p className="font-sans text-sm uppercase tracking-widest text-accent">
              Sadaqah Jariyah
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
              Giving Back to<br />the Ummah
            </h2>
            <p className="mt-6 font-sans text-lg leading-relaxed text-background/80">
              Every action we take can be an act of worship. Through partnerships with organizations 
              like Droplets of Mercy, we&apos;re building solar-powered water wells in Pakistan, 
              providing clean water to communities who need it most.
            </p>
            <p className="mt-4 font-sans text-lg leading-relaxed text-background/80">
              This is more than charity—it&apos;s sadaqah jariyah, continuous charity that benefits 
              generations. When you support this community, you&apos;re part of something eternal.
            </p>

            {/* Impact stats */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              <div className="text-center">
                <Heart className="mx-auto mb-2 h-6 w-6 text-accent" />
                <p className="font-serif text-2xl font-semibold">Faith</p>
                <p className="text-sm text-background/60">Driven Purpose</p>
              </div>
              <div className="text-center">
                <Droplets className="mx-auto mb-2 h-6 w-6 text-accent" />
                <p className="font-serif text-2xl font-semibold">Water</p>
                <p className="text-sm text-background/60">Wells Built</p>
              </div>
              <div className="text-center">
                <Users className="mx-auto mb-2 h-6 w-6 text-accent" />
                <p className="font-serif text-2xl font-semibold">Lives</p>
                <p className="text-sm text-background/60">Transformed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
