"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Instagram, Youtube } from "lucide-react"

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  )
}

const inquiryTypes = [
  "Sponsored Content",
  "Muslim Texas Feature",
  "Event Appearance",
  "Brand Ambassador",
  "Speaking Engagement",
  "The Circle",
  "Other",
]

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    inquiryType: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setFormData({ name: "", email: "", business: "", inquiryType: "", message: "" })
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-foreground py-24 text-background lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left - Info */}
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-accent">
              Get In Touch
            </p>
            <h2 className="mt-4 font-serif text-4xl font-light leading-tight sm:text-5xl lg:text-6xl">
              {"Let's Create"}
              <br />
              <span className="italic">Together</span>
            </h2>

            <div className="my-10 h-px w-16 bg-accent/40" />

            <p className="max-w-md text-base leading-relaxed text-background/80 lg:text-lg">
              All inquiries managed within 48 hours. Whether you seek authentic 
              partnerships or wish to be featured, every collaboration is approached 
              with intention and care.
            </p>

            {/* Social Links */}
            <div className="mt-12">
              <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.2em] text-background/60">
                Connect
              </p>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/theblondemuslim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center border border-background/20 transition-all duration-300 hover:bg-background hover:text-foreground"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://tiktok.com/@theblondemuslim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center border border-background/20 transition-all duration-300 hover:bg-background hover:text-foreground"
                  aria-label="TikTok"
                >
                  <TikTokIcon className="h-5 w-5" />
                </a>
                <a
                  href="https://youtube.com/@TheBlondeMuslim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center border border-background/20 transition-all duration-300 hover:bg-background hover:text-foreground"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div>
            {isSubmitted ? (
              <div className="border border-background/20 p-10 text-center">
                <p className="font-serif text-2xl">Thank You</p>
                <p className="mt-4 text-background/70">
                  {"Your inquiry has been received. We'll be in touch within 48 hours, insha'Allah."}
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 border border-background/20 px-8 py-3 text-[11px] font-medium uppercase tracking-[0.2em] transition-all duration-300 hover:bg-background hover:text-foreground"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[11px] font-medium uppercase tracking-[0.15em] text-background/70">
                      Name
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="border-background/20 bg-transparent text-background placeholder:text-background/40 focus:border-background"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-[11px] font-medium uppercase tracking-[0.15em] text-background/70">
                      Email
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="border-background/20 bg-transparent text-background placeholder:text-background/40 focus:border-background"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[11px] font-medium uppercase tracking-[0.15em] text-background/70">
                      Brand / Business
                    </label>
                    <Input
                      value={formData.business}
                      onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                      className="border-background/20 bg-transparent text-background placeholder:text-background/40 focus:border-background"
                      placeholder="Company name"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-[11px] font-medium uppercase tracking-[0.15em] text-background/70">
                      Inquiry Type
                    </label>
                    <Select
                      value={formData.inquiryType}
                      onValueChange={(value) => setFormData({ ...formData, inquiryType: value })}
                    >
                      <SelectTrigger className="border-background/20 bg-transparent text-background">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        {inquiryTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-[11px] font-medium uppercase tracking-[0.15em] text-background/70">
                    Message
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="border-background/20 bg-transparent text-background placeholder:text-background/40 focus:border-background"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="border border-background bg-background px-10 py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-foreground transition-all duration-300 hover:bg-transparent hover:text-background"
                >
                  Send Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
