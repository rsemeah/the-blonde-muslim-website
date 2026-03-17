import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight, BookOpen, Video, Users, Heart, Star, CheckCircle2 } from "lucide-react"

export const metadata = {
  title: "FIVE | Learn to Pray | The Blonde Muslim",
  description: "A complete prayer learning system for new Muslims. Video course, prayer ebook, and Sisters Club community.",
}

const courseFeatures = [
  "Step-by-step video lessons",
  "Clear pronunciation guides",
  "Beautiful visual demonstrations",
  "Learn at your own pace",
  "Lifetime access",
  "Mobile-friendly format",
]

const ebookFeatures = [
  "Complete prayer guide",
  "Arabic text with transliteration",
  "Printable format",
  "Quick reference sections",
  "Duas and supplications",
]

const sistersClubFeatures = [
  "Private community space",
  "Connect with other sisters",
  "Ask questions freely",
  "Ongoing support",
  "Monthly gatherings",
]

export default function FivePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-foreground py-32 text-background lg:py-40">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-background/20 via-transparent to-transparent" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-background/60">
              For New Muslims
            </p>
            <h1 className="mt-6 font-serif text-6xl text-background sm:text-7xl lg:text-8xl">
              FIVE
            </h1>
            <p className="mt-4 font-serif text-2xl italic text-accent">
              Learn to Pray with Confidence
            </p>
            <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-background/80">
              A complete prayer learning system designed with love for sisters beginning 
              their journey. Video course, prayer ebook, and a supportive community.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="https://candace-ashley-s-school.teachable.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-background px-10 py-5 text-[11px] font-medium uppercase tracking-[0.2em] text-foreground transition-all hover:bg-accent hover:text-foreground"
              >
                Start Learning
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why FIVE Section */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
              Why This Matters
            </p>
            <h2 className="mt-4 font-serif text-4xl text-foreground sm:text-5xl">
              Prayer is the Foundation
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              The five daily prayers are the cornerstone of our faith. As a new Muslim, 
              learning to pray can feel overwhelming. FIVE was created to make this 
              beautiful practice accessible, clear, and encouraging.
            </p>
          </div>

          <div className="mt-20 grid gap-12 lg:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                <Heart className="h-7 w-7 text-foreground" />
              </div>
              <h3 className="mt-6 font-serif text-xl text-foreground">Made with Love</h3>
              <p className="mt-3 text-muted-foreground">
                Created by a revert who understands the journey of learning as an adult.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                <Star className="h-7 w-7 text-foreground" />
              </div>
              <h3 className="mt-6 font-serif text-xl text-foreground">Clear & Simple</h3>
              <p className="mt-3 text-muted-foreground">
                Step-by-step guidance without overwhelming complexity or jargon.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                <Users className="h-7 w-7 text-foreground" />
              </div>
              <h3 className="mt-6 font-serif text-xl text-foreground">Community Support</h3>
              <p className="mt-3 text-muted-foreground">
                You&apos;re not alone. Join sisters on the same beautiful path.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Offerings */}
      <section className="bg-secondary/50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
              What&apos;s Included
            </p>
            <h2 className="mt-4 font-serif text-4xl text-foreground sm:text-5xl">
              The Complete System
            </h2>
          </div>

          <div className="mt-20 grid gap-8 lg:grid-cols-3">
            {/* Video Course */}
            <div className="group relative overflow-hidden bg-background p-10 transition-all hover:shadow-lg">
              <div className="flex h-14 w-14 items-center justify-center bg-foreground text-background">
                <Video className="h-6 w-6" />
              </div>
              <h3 className="mt-8 font-serif text-2xl text-foreground">
                Prayer Video Course
              </h3>
              <p className="mt-4 text-muted-foreground">
                Comprehensive video lessons walking you through each prayer, 
                movement, and recitation with clarity and care.
              </p>
              <ul className="mt-6 space-y-3">
                {courseFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-[#38BDF8]" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t border-border pt-6">
                <p className="font-serif text-3xl text-foreground">$99</p>
                <p className="mt-1 text-sm text-muted-foreground">One-time payment, lifetime access</p>
              </div>
              <Link
                href="https://candace-ashley-s-school.teachable.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-foreground transition-all hover:gap-4"
              >
                Enroll Now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Prayer Ebook */}
            <div className="group relative overflow-hidden bg-background p-10 transition-all hover:shadow-lg">
              <div className="flex h-14 w-14 items-center justify-center bg-foreground text-background">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="mt-8 font-serif text-2xl text-foreground">
                Prayer Ebook
              </h3>
              <p className="mt-4 text-muted-foreground">
                A beautifully designed reference guide you can print, save, 
                or access on any device.
              </p>
              <ul className="mt-6 space-y-3">
                {ebookFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-[#38BDF8]" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t border-border pt-6">
                <p className="font-serif text-3xl text-foreground">Included</p>
                <p className="mt-1 text-sm text-muted-foreground">With video course purchase</p>
              </div>
              <Link
                href="https://candace-ashley-s-school.teachable.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-foreground transition-all hover:gap-4"
              >
                Get Access
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Sisters Club */}
            <div className="group relative overflow-hidden bg-background p-10 transition-all hover:shadow-lg">
              <div className="flex h-14 w-14 items-center justify-center bg-foreground text-background">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="mt-8 font-serif text-2xl text-foreground">
                Sisters Club
              </h3>
              <p className="mt-4 text-muted-foreground">
                A private community space to connect with other sisters, 
                ask questions, and find encouragement.
              </p>
              <ul className="mt-6 space-y-3">
                {sistersClubFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-[#38BDF8]" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t border-border pt-6">
                <p className="font-serif text-3xl text-foreground">Included</p>
                <p className="mt-1 text-sm text-muted-foreground">With video course purchase</p>
              </div>
              <Link
                href="https://candace-ashley-s-school.teachable.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-foreground transition-all hover:gap-4"
              >
                Join Community
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial / Quote */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <div className="mx-auto h-px w-16 bg-accent/50" />
          <blockquote className="mt-12">
            <p className="font-serif text-3xl italic leading-relaxed text-foreground sm:text-4xl">
              &ldquo;The prayer is the first thing the servant will be asked about on the Day of Judgment.&rdquo;
            </p>
            <cite className="mt-8 block text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground not-italic">
              Prophet Muhammad (peace be upon him)
            </cite>
          </blockquote>
          <div className="mx-auto mt-12 h-px w-16 bg-accent/50" />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground py-24 text-background lg:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="font-serif text-4xl text-background sm:text-5xl">
            Begin Your Journey
          </h2>
          <p className="mt-6 text-lg text-background/80">
            Take the first step toward confident, beautiful prayer. 
            You deserve to feel connected in your salah.
          </p>
          <Link
            href="https://candace-ashley-s-school.teachable.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center justify-center bg-background px-10 py-5 text-[11px] font-medium uppercase tracking-[0.2em] text-foreground transition-all duration-300 hover:bg-accent"
          >
            Start Learning Today
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
