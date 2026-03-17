"use client"

import Image from "next/image"
import { Heart, Droplets, Users } from "lucide-react"

export function PhilanthropySection() {
  return (
    <section id="giving" className="relative bg-primary py-20 text-primary-foreground lg:py-28">
      {/* Decorative Islamic geometric overlay */}
      <div className="absolute inset-0 pattern-honey opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-2xl ring-4 ring-accent/30">
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
                <Droplets className="h-8 w-8 text-primary" />
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
            <p className="mt-6 font-sans text-lg leading-relaxed text-primary-foreground/90">
              Every action we take can be an act of worship. Through partnerships with organizations 
              like Droplets of Mercy, we&apos;re building solar-powered water wells in Pakistan, 
              providing clean water to communities who need it most.
            </p>
            <p className="mt-4 font-sans text-lg leading-relaxed text-primary-foreground/90">
              This is more than charity—it&apos;s sadaqah jariyah, continuous charity that benefits 
              generations. When you support this community, you&apos;re part of something eternal.
            </p>

            {/* Quranic reference */}
            <blockquote className="mt-8 border-l-4 border-accent pl-4 italic text-primary-foreground/80">
              {"\"The example of those who spend their wealth in the way of Allah is like a seed which grows seven spikes...\""}
              <cite className="mt-2 block text-sm not-italic text-accent">— Surah Al-Baqarah 2:261</cite>
            </blockquote>

            {/* Impact stats */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              <div className="text-center">
                <Heart className="mx-auto mb-2 h-6 w-6 text-accent" />
                <p className="font-serif text-2xl font-semibold">Faith</p>
                <p className="text-sm text-primary-foreground/70">Driven Purpose</p>
              </div>
              <div className="text-center">
                <Droplets className="mx-auto mb-2 h-6 w-6 text-accent" />
                <p className="font-serif text-2xl font-semibold">Water</p>
                <p className="text-sm text-primary-foreground/70">Wells Built</p>
              </div>
              <div className="text-center">
                <Users className="mx-auto mb-2 h-6 w-6 text-accent" />
                <p className="font-serif text-2xl font-semibold">Lives</p>
                <p className="text-sm text-primary-foreground/70">Transformed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
