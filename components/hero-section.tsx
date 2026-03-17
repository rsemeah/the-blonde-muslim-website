"use client"

import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Background Image with Editorial Treatment */}
      <div className="absolute inset-0">
        <Image
          src="/images/garden-paradise.jpg"
          alt=""
          fill
          className="object-cover opacity-30 img-editorial"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid min-h-screen items-center gap-8 pt-24 pb-16 lg:grid-cols-12 lg:gap-12 lg:pt-0">
          
          {/* Left Content - Editorial Typography */}
          <div className="order-2 lg:order-1 lg:col-span-6 xl:col-span-5">
            {/* Eyebrow */}
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
              Faith &middot; Culture &middot; Community
            </p>
            
            {/* Main Headline - Magazine Style */}
            <h1 className="mt-6 font-serif text-5xl font-light leading-[0.95] tracking-tight text-foreground sm:text-6xl lg:text-7xl xl:text-8xl">
              The Blonde
              <br />
              <span className="italic">Muslim</span>
            </h1>
            
            {/* Positioning Statement */}
            <p className="mt-8 max-w-md font-sans text-base leading-relaxed text-muted-foreground lg:text-lg">
              A trusted voice for Muslim women seeking depth, belonging, and knowledge. 
              Storyteller. Community builder. Connector of hearts.
            </p>

            {/* Elegant Divider */}
            <div className="my-10 h-px w-24 bg-accent/50" />

            {/* Editorial Quote */}
            <blockquote className="max-w-sm">
              <p className="font-serif text-xl italic leading-relaxed text-foreground/80 lg:text-2xl">
                {"\"Gardens beneath which rivers flow\""}
              </p>
              <cite className="mt-3 block text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground not-italic">
                Quranic Promise of Paradise
              </cite>
            </blockquote>

            {/* CTAs - Luxury Buttons */}
            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#about"
                className="inline-flex items-center justify-center border border-foreground bg-foreground px-8 py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-background transition-all duration-300 hover:bg-transparent hover:text-foreground"
              >
                Enter Her World
              </Link>
              <Link
                href="#partnerships"
                className="inline-flex items-center justify-center border border-foreground/20 px-8 py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-foreground transition-all duration-300 hover:border-foreground/40"
              >
                Work Together
              </Link>
            </div>
          </div>

          {/* Right Content - Large Portrait */}
          <div className="order-1 flex justify-center lg:order-2 lg:col-span-6 xl:col-span-7">
            <div className="relative">
              {/* Subtle Frame */}
              <div className="absolute -inset-3 border border-accent/20" />
              <div className="absolute -inset-6 border border-accent/10" />
              
              {/* Portrait Container */}
              <div className="relative h-[450px] w-[340px] overflow-hidden bg-secondary sm:h-[550px] sm:w-[420px] lg:h-[600px] lg:w-[460px]">
                <Image
                  src="/images/candace-profile.png"
                  alt="Candace - The Blonde Muslim"
                  fill
                  className="object-cover object-top img-editorial"
                  priority
                />
                {/* Subtle overlay to warm the image */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-background/95 backdrop-blur-sm px-6 py-4 shadow-lg sm:-left-12 sm:px-8 sm:py-5">
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  Combined Reach
                </p>
                <p className="mt-1 font-serif text-3xl text-foreground sm:text-4xl">
                  603<span className="text-accent">K</span>+
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Scroll
          </span>
          <div className="h-12 w-px bg-gradient-to-b from-accent/50 to-transparent" />
        </div>
      </div>
    </section>
  )
}
