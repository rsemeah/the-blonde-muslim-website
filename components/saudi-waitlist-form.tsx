"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react"

export function SaudiWaitlistForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    experience: "",
    interest: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#38BDF8]/10">
          <CheckCircle2 className="h-8 w-8 text-[#38BDF8]" />
        </div>
        <h3 className="mt-6 font-serif text-2xl text-foreground">You&apos;re on the List!</h3>
        <p className="mt-3 text-muted-foreground">
          We&apos;ll be in touch with exclusive details about the Saudi Journey 
          before anyone else. Keep an eye on your inbox.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="mt-2 w-full border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-foreground focus:outline-none focus:ring-0"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="mt-2 w-full border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-foreground focus:outline-none focus:ring-0"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="city" className="block text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
          City / Location
        </label>
        <input
          type="text"
          id="city"
          required
          value={formData.city}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          className="mt-2 w-full border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-foreground focus:outline-none focus:ring-0"
          placeholder="Where are you based?"
        />
      </div>

      <div>
        <label htmlFor="experience" className="block text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
          Have you been to Saudi before?
        </label>
        <select
          id="experience"
          required
          value={formData.experience}
          onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
          className="mt-2 w-full border border-border bg-background px-4 py-3 text-foreground focus:border-foreground focus:outline-none focus:ring-0"
        >
          <option value="">Select an option</option>
          <option value="never">No, this would be my first time</option>
          <option value="umrah">Yes, for Umrah</option>
          <option value="hajj">Yes, for Hajj</option>
          <option value="multiple">Yes, multiple times</option>
        </select>
      </div>

      <div>
        <label htmlFor="interest" className="block text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
          What excites you most about this trip? (Optional)
        </label>
        <textarea
          id="interest"
          rows={3}
          value={formData.interest}
          onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
          className="mt-2 w-full border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-foreground focus:outline-none focus:ring-0 resize-none"
          placeholder="Share what draws you to this experience..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex w-full items-center justify-center gap-3 bg-foreground px-8 py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-background transition-all hover:bg-foreground/90 disabled:opacity-70"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Joining...
          </>
        ) : (
          <>
            Join the Waitlist
            <ArrowRight className="h-4 w-4" />
          </>
        )}
      </button>

      <p className="text-center text-xs text-muted-foreground">
        No commitment. We&apos;ll only email you about the Saudi Journey.
      </p>
    </form>
  )
}
