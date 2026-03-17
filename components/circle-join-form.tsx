"use client"

import { useState } from "react"
import { CheckCircle } from "lucide-react"

export function CircleJoinForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
          <CheckCircle className="h-8 w-8 text-accent" />
        </div>
        <h3 className="mt-6 font-serif text-2xl text-foreground">
          You&apos;re In
        </h3>
        <p className="mt-2 text-lg text-foreground">
          Welcome to The Circle.
        </p>
        <p className="mt-4 text-muted-foreground">
          Keep an eye on your inbox for updates about upcoming gatherings and exclusive content.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-2 w-full border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-foreground focus:outline-none focus:ring-0"
          placeholder="Aisha"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-2 w-full border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-foreground focus:outline-none focus:ring-0"
          placeholder="aisha@example.com"
        />
      </div>
      
      <div>
        <label htmlFor="intention" className="block text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
          What brings you to The Circle? <span className="normal-case tracking-normal text-muted-foreground/50">(Optional)</span>
        </label>
        <textarea
          id="intention"
          name="intention"
          rows={3}
          className="mt-2 w-full resize-none border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-foreground focus:outline-none focus:ring-0"
          placeholder="I'm looking for connection with other Muslim women..."
        />
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-foreground px-8 py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-background transition-all duration-300 hover:bg-foreground/90 disabled:opacity-50"
      >
        {isSubmitting ? "Joining..." : "Join The Circle"}
      </button>
      
      <p className="text-center text-[11px] text-muted-foreground">
        We respect your privacy. No spam, ever.
      </p>
    </form>
  )
}
