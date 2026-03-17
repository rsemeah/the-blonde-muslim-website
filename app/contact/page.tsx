"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { 
  InstagramIcon, 
  TikTokIcon, 
  YouTubeIcon, 
  TwitterXIcon, 
  FacebookIcon, 
  PinterestIcon, 
  ThreadsIcon,
  EmailIcon,
  VerifiedBadge
} from "@/components/social-icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { MapPin, Clock, Send, CheckCircle } from "lucide-react"
import Link from "next/link"

const socialLinks = [
  { 
    name: "Instagram", 
    href: "https://instagram.com/theblondemuslim", 
    icon: InstagramIcon,
    followers: "384K",
    handle: "@theblondemuslim"
  },
  { 
    name: "TikTok", 
    href: "https://tiktok.com/@theblondemuslim", 
    icon: TikTokIcon,
    followers: "197K",
    handle: "@theblondemuslim"
  },
  { 
    name: "YouTube", 
    href: "https://youtube.com/@TheBlondeMuslim", 
    icon: YouTubeIcon,
    followers: "22.5K",
    handle: "@TheBlondeMuslim"
  },
  { 
    name: "X (Twitter)", 
    href: "https://twitter.com/theblondemuslim", 
    icon: TwitterXIcon,
    handle: "@theblondemuslim"
  },
  { 
    name: "Facebook", 
    href: "https://facebook.com/theblondemuslim", 
    icon: FacebookIcon,
    handle: "TheBlondeMuslim"
  },
  { 
    name: "Pinterest", 
    href: "https://pinterest.com/theblondemuslim", 
    icon: PinterestIcon,
    handle: "@theblondemuslim"
  },
  { 
    name: "Threads", 
    href: "https://threads.net/@theblondemuslim", 
    icon: ThreadsIcon,
    handle: "@theblondemuslim"
  },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="bg-foreground pt-32 pb-20 text-background lg:pt-40 lg:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-background/60">
              Get In Touch
            </p>
            <h1 className="mt-4 font-serif text-5xl font-light tracking-tight text-background sm:text-6xl lg:text-7xl">
              Let&apos;s Connect
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-background/80">
              For partnerships, speaking engagements, community inquiries, or press features.
              I&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-5 lg:gap-24">
            
            {/* Contact Info */}
            <div className="lg:col-span-2">
              {/* Quick Info */}
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-3">
                    <EmailIcon className="h-5 w-5 text-muted-foreground" />
                    <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                      Email
                    </p>
                  </div>
                  <a 
                    href="mailto:partnerships@theblondemuslim.com"
                    className="mt-2 block font-serif text-xl text-foreground transition-colors hover:text-accent"
                  >
                    partnerships@theblondemuslim.com
                  </a>
                </div>

                <div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                      Based In
                    </p>
                  </div>
                  <p className="mt-2 font-serif text-xl text-foreground">
                    Irvine, California
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-muted-foreground" />
                    <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                      Response Time
                    </p>
                  </div>
                  <p className="mt-2 font-serif text-xl text-foreground">
                    Within 48 Hours
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="my-10 h-px bg-border" />

              {/* Social Links */}
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-foreground">
                  Follow Along
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 border border-border bg-card p-4 transition-all duration-300 hover:border-foreground/30 hover:shadow-md"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary transition-all duration-300 group-hover:bg-foreground group-hover:text-background">
                        <social.icon className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1">
                          <p className="text-sm font-medium text-foreground">{social.name}</p>
                          {social.followers && (
                            <VerifiedBadge className="h-3.5 w-3.5" />
                          )}
                        </div>
                        {social.followers ? (
                          <p className="text-xs text-muted-foreground">{social.followers} followers</p>
                        ) : (
                          <p className="text-xs text-muted-foreground">{social.handle}</p>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="border border-border bg-card p-8 lg:p-12">
                {submitted ? (
                  <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                      <CheckCircle className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="mt-6 font-serif text-2xl text-foreground">
                      Message Received
                    </h3>
                    <p className="mt-4 max-w-md text-muted-foreground">
                      Thank you for reaching out. I review all inquiries personally 
                      and will respond within 48 hours, insha&apos;Allah.
                    </p>
                    <Button
                      className="mt-8"
                      variant="outline"
                      onClick={() => setSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                      Send a Message
                    </p>
                    <h2 className="mt-2 font-serif text-3xl text-foreground">
                      Inquiry Form
                    </h2>
                    
                    <FieldGroup className="mt-8">
                      <div className="grid gap-6 sm:grid-cols-2">
                        <Field>
                          <FieldLabel>Name</FieldLabel>
                          <Input 
                            placeholder="Your name" 
                            required 
                            className="border-border bg-background"
                          />
                        </Field>
                        <Field>
                          <FieldLabel>Email</FieldLabel>
                          <Input 
                            type="email" 
                            placeholder="your@email.com" 
                            required 
                            className="border-border bg-background"
                          />
                        </Field>
                      </div>
                      
                      <div className="grid gap-6 sm:grid-cols-2">
                        <Field>
                          <FieldLabel>Brand / Company</FieldLabel>
                          <Input 
                            placeholder="Your organization" 
                            className="border-border bg-background"
                          />
                        </Field>
                        <Field>
                          <FieldLabel>Inquiry Type</FieldLabel>
                          <Select>
                            <SelectTrigger className="border-border bg-background">
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="partnership">Brand Partnership</SelectItem>
                              <SelectItem value="speaking">Speaking Engagement</SelectItem>
                              <SelectItem value="press">Press / Media</SelectItem>
                              <SelectItem value="community">Community Interest</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </Field>
                      </div>
                      
                      <Field>
                        <FieldLabel>Message</FieldLabel>
                        <Textarea 
                          placeholder="Tell me about your inquiry..." 
                          rows={6}
                          required
                          className="border-border bg-background"
                        />
                      </Field>
                    </FieldGroup>

                    <Button 
                      type="submit" 
                      size="lg"
                      className="mt-8 w-full bg-foreground text-background hover:bg-foreground/90 sm:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent" />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="h-4 w-4" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-secondary/30 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Prefer Social?
          </p>
          <h2 className="mt-4 font-serif text-3xl text-foreground">
            DM me directly on Instagram
          </h2>
          <p className="mt-4 text-muted-foreground">
            For quick questions or just to say hello, my DMs are always open.
          </p>
          <Link
            href="https://instagram.com/theblondemuslim"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 border border-foreground bg-foreground px-8 py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-background transition-all duration-300 hover:bg-transparent hover:text-foreground"
          >
            <InstagramIcon className="h-5 w-5" />
            <span>@theblondemuslim</span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
