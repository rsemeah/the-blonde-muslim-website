"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
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
  "Trade Show",
  "Podcast",
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
    <section id="contact" className="bg-primary py-20 text-primary-foreground lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left - Info */}
          <div>
            <p className="font-sans text-sm uppercase tracking-widest text-accent">
              Get In Touch
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
              Work With<br />Candace
            </h2>
            <p className="mt-6 font-sans text-lg leading-relaxed text-primary-foreground/90">
              All inquiries managed within 48 hours. Whether you&apos;re a brand seeking authentic 
              partnerships or a business wanting to be featured, let&apos;s create something meaningful together.
            </p>

            {/* Social Links */}
            <div className="mt-10">
              <p className="mb-4 text-sm uppercase tracking-widest text-primary-foreground/70">
                Connect
              </p>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/theblondemuslim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-accent/30"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://tiktok.com/@theblondemuslim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-accent/30"
                  aria-label="TikTok"
                >
                  <TikTokIcon className="h-5 w-5" />
                </a>
                <a
                  href="https://youtube.com/@TheBlondeMuslim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-accent/30"
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
              <div className="rounded-lg bg-primary-foreground/10 p-8 text-center ring-1 ring-accent/20">
                <h3 className="font-serif text-2xl font-semibold">Thank You</h3>
                <p className="mt-4 text-primary-foreground/80">
                  Your inquiry has been received. We&apos;ll be in touch within 48 hours, insha&apos;Allah.
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 bg-accent text-foreground hover:bg-accent/90"
                >
                  Send Another Inquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <FieldGroup className="grid gap-6 sm:grid-cols-2">
                  <Field>
                    <FieldLabel className="text-primary-foreground/80">Name</FieldLabel>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50"
                      placeholder="Your name"
                    />
                  </Field>
                  <Field>
                    <FieldLabel className="text-primary-foreground/80">Email</FieldLabel>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50"
                      placeholder="your@email.com"
                    />
                  </Field>
                </FieldGroup>

                <FieldGroup className="grid gap-6 sm:grid-cols-2">
                  <Field>
                    <FieldLabel className="text-primary-foreground/80">Brand / Business Name</FieldLabel>
                    <Input
                      value={formData.business}
                      onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                      className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50"
                      placeholder="Company name"
                    />
                  </Field>
                  <Field>
                    <FieldLabel className="text-primary-foreground/80">Inquiry Type</FieldLabel>
                    <Select
                      value={formData.inquiryType}
                      onValueChange={(value) => setFormData({ ...formData, inquiryType: value })}
                    >
                      <SelectTrigger className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground">
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
                  </Field>
                </FieldGroup>

                <Field>
                  <FieldLabel className="text-primary-foreground/80">Message</FieldLabel>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </Field>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-accent text-foreground hover:bg-accent/90 sm:w-auto"
                >
                  Send Inquiry
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
