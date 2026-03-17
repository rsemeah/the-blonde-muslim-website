"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"

export function VisionSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section id="vision" className="relative overflow-hidden bg-background py-24 lg:py-32">
      {/* Decorative Arches */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
        <svg className="h-[900px] w-[900px]" viewBox="0 0 100 100">
          <path d="M5 95 Q5 5 50 5 Q95 5 95 95" fill="none" stroke="currentColor" strokeWidth="0.3" />
          <path d="M15 95 Q15 15 50 15 Q85 15 85 95" fill="none" stroke="currentColor" strokeWidth="0.3" />
          <path d="M25 95 Q25 25 50 25 Q75 25 75 95" fill="none" stroke="currentColor" strokeWidth="0.3" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-accent">
          On the Horizon
        </p>
        <h2 className="mt-4 font-serif text-4xl font-light leading-tight text-foreground sm:text-5xl lg:text-6xl">
          Future Experiences
        </h2>

        <div className="mx-auto my-10 h-px w-24 bg-accent/30" />

        <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
          Building toward women-only Saudi experiences, curated Hajj and Umrah community 
          journeys, and halal travel designed for Muslim women who want to move through the 
          world with intention, faith, and sisterhood.
        </p>

        {/* Vision Pillars */}
        <div className="mt-14 flex flex-wrap justify-center gap-12 lg:gap-16">
          {[
            { title: "Sacred Journeys", desc: "Umrah & Hajj" },
            { title: "Cultural Immersion", desc: "Halal Travel" },
            { title: "Sisterhood", desc: "Women-Only" },
          ].map((item) => (
            <div key={item.title} className="text-center">
              <p className="font-serif text-xl text-foreground">{item.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Waitlist */}
        <div className="mx-auto mt-16 max-w-md">
          <p className="mb-6 text-sm text-muted-foreground">
            Be the first to know when experiences open
          </p>
          {isSubmitted ? (
            <div className="border border-accent/30 bg-accent/5 p-6">
              <p className="font-serif text-lg text-foreground">
                Thank you for your interest
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {"We'll be in touch soon, insha'Allah."}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 border-border/50 bg-transparent px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-foreground"
              />
              <button
                type="submit"
                className="border border-foreground bg-foreground px-8 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-background transition-all duration-300 hover:bg-transparent hover:text-foreground"
              >
                Join Waitlist
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
