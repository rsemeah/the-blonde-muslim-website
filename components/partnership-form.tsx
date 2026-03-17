"use client"

import { useState } from "react"
import { CheckCircle } from "lucide-react"

const partnershipTypes = [
  "Brand Collaboration",
  "Sponsored Content",
  "Ambassador Program",
  "Event / Speaking",
  "Muslim Texas Feature",
  "Other"
]

export function PartnershipForm() {
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
          Inquiry Received
        </h3>
        <p className="mt-2 text-foreground">
          Thank you for reaching out!
        </p>
        <p className="mt-4 text-muted-foreground">
          I&apos;ll review your inquiry and get back to you within 48 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-2 w-full border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-foreground focus:outline-none focus:ring-0"
            placeholder="Your Name"
          />
        </div>
        
        <div>
          <label htmlFor="company" className="block text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Company / Brand *
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            className="mt-2 w-full border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-foreground focus:outline-none focus:ring-0"
            placeholder="Brand Name"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="email" className="block text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-2 w-full border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-foreground focus:outline-none focus:ring-0"
          placeholder="you@company.com"
        />
      </div>
      
      <div>
        <label htmlFor="partnershipType" className="block text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Partnership Type *
        </label>
        <select
          id="partnershipType"
          name="partnershipType"
          required
          className="mt-2 w-full border border-border bg-background px-4 py-3 text-foreground focus:border-foreground focus:outline-none focus:ring-0"
        >
          <option value="">Select type...</option>
          {partnershipTypes.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Tell me about your project *
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="mt-2 w-full resize-none border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-foreground focus:outline-none focus:ring-0"
          placeholder="Share details about your brand, campaign goals, timeline, and what you're looking for..."
        />
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-foreground px-8 py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-background transition-all duration-300 hover:bg-foreground/90 disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "Start a Conversation"}
      </button>
    </form>
  )
}
