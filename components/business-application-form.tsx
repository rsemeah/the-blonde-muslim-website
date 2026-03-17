"use client"

import { useState } from "react"
import { CheckCircle } from "lucide-react"

const businessTypes = [
  "Restaurant / Food",
  "Retail / Shop",
  "Services",
  "Health & Wellness",
  "Education",
  "Events / Entertainment",
  "Other"
]

export function BusinessApplicationForm() {
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
          Application Received
        </h3>
        <p className="mt-2 text-foreground">
          Thank you for your interest!
        </p>
        <p className="mt-4 text-muted-foreground">
          We review applications regularly and will reach out if your business is a good fit 
          for an upcoming feature.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="businessName" className="block text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Business Name *
        </label>
        <input
          type="text"
          id="businessName"
          name="businessName"
          required
          className="mt-2 w-full border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-foreground focus:outline-none focus:ring-0"
          placeholder="Your Business Name"
        />
      </div>
      
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="location" className="block text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Location *
          </label>
          <input
            type="text"
            id="location"
            name="location"
            required
            className="mt-2 w-full border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-foreground focus:outline-none focus:ring-0"
            placeholder="City, TX"
          />
        </div>
        
        <div>
          <label htmlFor="businessType" className="block text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Business Type *
          </label>
          <select
            id="businessType"
            name="businessType"
            required
            className="mt-2 w-full border border-border bg-background px-4 py-3 text-foreground focus:border-foreground focus:outline-none focus:ring-0"
          >
            <option value="">Select type...</option>
            {businessTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>
      
      <div>
        <label htmlFor="instagram" className="block text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Instagram / Website
        </label>
        <input
          type="text"
          id="instagram"
          name="instagram"
          className="mt-2 w-full border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-foreground focus:outline-none focus:ring-0"
          placeholder="@yourbusiness or website URL"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Contact Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-2 w-full border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-foreground focus:outline-none focus:ring-0"
          placeholder="contact@yourbusiness.com"
        />
      </div>
      
      <div>
        <label htmlFor="whyFeature" className="block text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Why should we feature you? *
        </label>
        <textarea
          id="whyFeature"
          name="whyFeature"
          rows={4}
          required
          className="mt-2 w-full resize-none border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-foreground focus:outline-none focus:ring-0"
          placeholder="Tell us your story, what makes your business special, and why the Muslim Texas audience would love to discover you..."
        />
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-foreground px-8 py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-background transition-all duration-300 hover:bg-foreground/90 disabled:opacity-50"
      >
        {isSubmitting ? "Submitting..." : "Apply to be Featured"}
      </button>
    </form>
  )
}
