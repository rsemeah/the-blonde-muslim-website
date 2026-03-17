"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Heart, Users, Sparkles, ExternalLink } from "lucide-react"
import { useState } from "react"

const products = [
  {
    title: "The Heart Deck",
    arabic: "القلب",
    description: "50 conversation cards designed to spark meaningful dialogue about faith, purpose, and life's beautiful complexities.",
    price: "$34",
    featured: true,
  },
  {
    title: "The Soul Deck",
    arabic: "الروح", 
    description: "A companion deck exploring spiritual growth, self-reflection, and connection with Allah.",
    price: "$34",
    featured: false,
  },
]

const testimonials = [
  {
    quote: "These cards changed how my family talks about faith. We've never felt closer.",
    author: "Aisha R.",
    location: "California",
  },
  {
    quote: "I use them at our women's halaqah. The conversations that emerge are so profound.",
    author: "Fatima K.",
    location: "Texas",
  },
  {
    quote: "Finally, something that helps us have real conversations as Muslim women.",
    author: "Noor M.",
    location: "New York",
  },
]

export default function MSLMPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center bg-foreground overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M30 0L60 30 30 60 0 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-32 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Content */}
            <div className="text-background">
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-background/60">
                A Brand by The Blonde Muslim
              </p>
              
              <h1 className="mt-6 font-serif text-6xl font-light leading-[0.9] tracking-tight lg:text-7xl xl:text-8xl">
                MSLM
              </h1>
              
              <p className="mt-2 font-serif text-2xl italic text-accent lg:text-3xl">
                The Collective
              </p>
              
              <p className="mt-8 max-w-lg font-sans text-lg leading-relaxed text-background/80">
                Tools for deeper connection. Products designed to help Muslim women 
                have the conversations that matter — with each other, with family, 
                and with themselves.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="https://www.mslmcollective.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-background px-8 py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-foreground transition-all hover:bg-accent hover:text-foreground"
                >
                  Shop MSLM
                  <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="#products"
                  className="inline-flex items-center gap-3 border border-background/30 px-8 py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-background transition-all hover:bg-background/10"
                >
                  Explore Products
                </Link>
              </div>
            </div>

            {/* Product Image */}
            <div className="relative">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="/images/mslm-cards.png"
                  alt="MSLM The Heart conversation cards"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-accent px-6 py-4 text-foreground">
                <p className="text-[10px] uppercase tracking-[0.2em]">Featured Product</p>
                <p className="mt-1 font-serif text-xl">The Heart Deck</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-secondary/30 py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
            The Vision
          </p>
          <blockquote className="mt-8 font-serif text-3xl font-light leading-relaxed text-foreground lg:text-4xl">
            "We live in a world of surface-level connection. MSLM exists to go deeper — 
            to create tools that help Muslim women have real conversations about 
            <span className="italic text-accent"> faith, life, and everything in between.</span>"
          </blockquote>
          <p className="mt-8 text-sm text-muted-foreground">
            — Candace, Founder
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
                The Collection
              </p>
              <h2 className="mt-4 font-serif text-4xl font-light text-foreground lg:text-5xl">
                Products for Connection
              </h2>
            </div>
            <Link
              href="https://www.mslmcollective.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground lg:flex"
            >
              View All at mslmcollective.com
              <ExternalLink className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {products.map((product, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden border border-border bg-card p-8 transition-all hover:border-accent lg:p-12 ${
                  product.featured ? "lg:col-span-2 lg:flex lg:items-center lg:gap-12" : ""
                }`}
              >
                {product.featured && (
                  <div className="absolute right-6 top-6 bg-accent px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-foreground">
                    Bestseller
                  </div>
                )}
                
                <div className={product.featured ? "lg:w-1/2" : ""}>
                  <p className="font-serif text-4xl text-accent/60">{product.arabic}</p>
                  <h3 className="mt-4 font-serif text-3xl text-foreground">{product.title}</h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{product.description}</p>
                  <div className="mt-6 flex items-center justify-between">
                    <p className="font-serif text-2xl text-foreground">{product.price}</p>
                    <Link
                      href="https://www.mslmcollective.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-accent transition-colors hover:text-foreground"
                    >
                      Shop Now
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-foreground py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center text-background">
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-background/60">
              See It In Action
            </p>
            <h2 className="mt-4 font-serif text-4xl font-light lg:text-5xl">
              Moments of Connection
            </h2>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            <div className="relative aspect-[4/5] overflow-hidden">
              <video
                src="/videos/mslm-cards.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <p className="font-serif text-2xl">The Heart Deck</p>
                <p className="mt-2 text-sm text-white/70">Starting conversations that matter</p>
              </div>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden">
              <video
                src="/videos/mslm-community.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <p className="font-serif text-2xl">Community Gatherings</p>
                <p className="mt-2 text-sm text-white/70">Bringing women together</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
            From the Community
          </p>
          <h2 className="mt-4 font-serif text-4xl font-light text-foreground lg:text-5xl">
            What Women Are Saying
          </h2>

          <div className="mt-16">
            <blockquote className="font-serif text-2xl font-light leading-relaxed text-foreground lg:text-3xl">
              "{testimonials[activeTestimonial].quote}"
            </blockquote>
            <p className="mt-8 text-sm text-muted-foreground">
              — {testimonials[activeTestimonial].author}, {testimonials[activeTestimonial].location}
            </p>

            <div className="mt-8 flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    index === activeTestimonial ? "w-8 bg-accent" : "bg-border"
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-border bg-secondary/30 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                <Heart className="h-7 w-7 text-accent" />
              </div>
              <h3 className="mt-6 font-serif text-xl text-foreground">Made with Intention</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Every product is thoughtfully designed to serve the Muslim community.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                <Users className="h-7 w-7 text-accent" />
              </div>
              <h3 className="mt-6 font-serif text-xl text-foreground">Community First</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Built by Muslim women, for Muslim women and their families.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                <Sparkles className="h-7 w-7 text-accent" />
              </div>
              <h3 className="mt-6 font-serif text-xl text-foreground">Deeper Connection</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Tools that go beyond surface-level to spark meaningful dialogue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="font-serif text-4xl font-light text-background lg:text-5xl">
            Start Deeper Conversations
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-background/70">
            Join thousands of Muslim women using MSLM products to connect more meaningfully.
          </p>
          <Link
            href="https://www.mslmcollective.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 bg-accent px-10 py-5 text-[11px] font-medium uppercase tracking-[0.2em] text-foreground transition-all hover:bg-accent/90"
          >
            Shop MSLM Collective
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
