"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plane, Users, Heart } from "lucide-react"

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
    <section id="vision" className="relative overflow-hidden bg-secondary py-20 lg:py-28">
      {/* Background decorative arch */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg className="h-[800px] w-[800px] text-primary/5" viewBox="0 0 100 100">
          <path
            d="M10 90 Q10 10 50 10 Q90 10 90 90"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <path
            d="M20 90 Q20 20 50 20 Q80 20 80 90"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <path
            d="M30 90 Q30 30 50 30 Q70 30 70 90"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <p className="font-sans text-sm uppercase tracking-widest text-primary">
          Coming Soon
        </p>
        <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-foreground md:text-5xl">
          Curated Muslimah<br />Travel Experiences
        </h2>
        <p className="mx-auto mt-6 max-w-2xl font-sans text-lg leading-relaxed text-muted-foreground">
          Building toward women&apos;s-only Saudi experiences, curated Hajj and Umrah community 
          journeys, and halal travel designed for Muslim women who want to move through the 
          world with intention and sisterhood.
        </p>

        {/* Vision highlights */}
        <div className="mt-12 flex flex-wrap justify-center gap-8">
          <div className="flex items-center gap-3">
            <Plane className="h-5 w-5 text-primary" />
            <span className="font-sans text-foreground">Saudi Experiences</span>
          </div>
          <div className="flex items-center gap-3">
            <Heart className="h-5 w-5 text-primary" />
            <span className="font-sans text-foreground">Umrah Journeys</span>
          </div>
          <div className="flex items-center gap-3">
            <Users className="h-5 w-5 text-primary" />
            <span className="font-sans text-foreground">Sisterhood First</span>
          </div>
        </div>

        {/* Waitlist Form */}
        <div className="mx-auto mt-12 max-w-md">
          {isSubmitted ? (
            <div className="rounded-lg bg-primary/10 p-6 ring-1 ring-primary/20">
              <p className="font-sans text-foreground">
                Thank you for joining the waitlist. We&apos;ll be in touch soon, insha&apos;Allah.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 border-border bg-card"
              />
              <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Join Waitlist
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
