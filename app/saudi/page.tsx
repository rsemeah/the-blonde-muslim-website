import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SaudiWaitlistForm } from "@/components/saudi-waitlist-form"
import { Plane, Moon, Users, MapPin, Heart, Star } from "lucide-react"

export const metadata = {
  title: "Saudi Journey | KSA Waitlist | The Blonde Muslim",
  description: "Join the waitlist for a curated Muslimah travel experience to Saudi Arabia. Umrah, community, and connection.",
}

const highlights = [
  {
    icon: Moon,
    title: "Spiritual Journey",
    description: "A thoughtfully planned Umrah experience with guidance and sisterhood.",
  },
  {
    icon: Users,
    title: "Sisterhood Travel",
    description: "Travel with a curated group of like-minded Muslim women.",
  },
  {
    icon: MapPin,
    title: "Beyond Umrah",
    description: "Explore the rich history and culture of Saudi Arabia.",
  },
  {
    icon: Heart,
    title: "Intentional Experience",
    description: "Every detail designed with your comfort and growth in mind.",
  },
]

const possibleInclusions = [
  "Guided Umrah experience",
  "4-5 star accommodations",
  "Historical site visits",
  "Group reflections and gatherings",
  "Local cultural experiences",
  "Professional photography",
  "Sisterhood connections",
  "Spiritual preparation guides",
]

export default function SaudiPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-foreground py-32 text-background lg:py-40">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_var(--tw-gradient-stops))] from-background/30 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_var(--tw-gradient-stops))] from-background/20 via-transparent to-transparent" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-8 inline-flex items-center gap-2 bg-background/10 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-background/80">
              <Plane className="h-3.5 w-3.5" />
              Coming Soon
            </div>
            <h1 className="font-serif text-5xl text-background sm:text-6xl lg:text-7xl">
              Saudi Journey
            </h1>
            <p className="mt-4 font-serif text-xl italic text-accent">
              A Curated Muslimah Experience
            </p>
            <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-background/80">
              Join the waitlist for an intimate, thoughtfully designed travel experience 
              to the Kingdom of Saudi Arabia. Umrah, history, culture, and sisterhood.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
                The Vision
              </p>
              <h2 className="mt-4 font-serif text-4xl text-foreground sm:text-5xl">
                More Than a Trip
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                This isn&apos;t just travel. It&apos;s an intentional gathering of Muslim women 
                seeking connection with their faith, with history, and with each other.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                From the sacred moments of Umrah to exploring the ancient streets and 
                new wonders of Saudi Arabia, every detail will be designed with 
                purpose, comfort, and spiritual growth in mind.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-px flex-1 bg-border" />
                <Star className="h-5 w-5 text-accent" />
                <div className="h-px flex-1 bg-border" />
              </div>
              <p className="mt-8 font-serif text-xl italic text-foreground">
                &ldquo;Travel is a form of worship when done with intention.&rdquo;
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid gap-6 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item.title} className="bg-secondary/50 p-6">
                  <item.icon className="h-6 w-6 text-[#1E5F8A]" />
                  <h3 className="mt-4 font-serif text-lg text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="bg-secondary/30 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
              What to Expect
            </p>
            <h2 className="mt-4 font-serif text-4xl text-foreground sm:text-5xl">
              A Journey of Intention
            </h2>
            <p className="mt-6 text-muted-foreground">
              While details are still being finalized, here&apos;s what we&apos;re planning:
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl">
            <div className="grid gap-4 sm:grid-cols-2">
              {possibleInclusions.map((item) => (
                <div key={item} className="flex items-center gap-3 bg-background p-4">
                  <div className="h-2 w-2 rounded-full bg-[#38BDF8]" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-xl text-center">
            <p className="text-sm text-muted-foreground">
              Dates, pricing, and full itinerary will be shared with waitlist members first. 
              Limited spots will be available to ensure an intimate experience.
            </p>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="bg-foreground py-24 text-background lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-background/60">
                Be the First to Know
              </p>
              <h2 className="mt-4 font-serif text-4xl text-background sm:text-5xl">
                Join the Waitlist
              </h2>
              <p className="mt-6 text-lg text-background/80">
                Waitlist members will receive early access to booking, special pricing, 
                and all the details before anyone else.
              </p>
              <div className="mt-8 space-y-4 text-background/70">
                <p className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Early access to booking
                </p>
                <p className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Waitlist-only pricing
                </p>
                <p className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  First look at itinerary
                </p>
                <p className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  No commitment required
                </p>
              </div>
            </div>

            <div className="bg-background p-8 lg:p-10">
              <SaudiWaitlistForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-center font-serif text-3xl text-foreground">
            Questions You Might Have
          </h2>
          
          <div className="mt-12 space-y-8">
            <div>
              <h3 className="font-serif text-lg text-foreground">When is this happening?</h3>
              <p className="mt-2 text-muted-foreground">
                We&apos;re targeting 2025 for the first journey. Exact dates will be shared 
                with waitlist members first.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg text-foreground">How much will it cost?</h3>
              <p className="mt-2 text-muted-foreground">
                Pricing is still being finalized. Waitlist members will receive special 
                early-bird pricing when bookings open.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg text-foreground">Is this for first-time travelers?</h3>
              <p className="mt-2 text-muted-foreground">
                This experience is designed for all levels - whether it&apos;s your first 
                Umrah or you&apos;ve been before. The focus is on intention and sisterhood.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg text-foreground">How many spots will be available?</h3>
              <p className="mt-2 text-muted-foreground">
                To keep the experience intimate and meaningful, we&apos;re planning for 
                a small group. Exact numbers will be announced.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
