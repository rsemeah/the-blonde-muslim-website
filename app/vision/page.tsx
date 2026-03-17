import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Compass, Users, Plane, Heart } from "lucide-react"

export const metadata = {
  title: "Vision | The Blonde Muslim",
  description: "The future of The Blonde Muslim - curated gatherings, travel experiences, and deeper community offerings.",
}

export default function VisionPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Cinematic Hero */}
      <section className="relative min-h-screen overflow-hidden bg-foreground">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        >
          <source src="/videos/vision.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/60 to-foreground/40" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex min-h-screen flex-col items-center justify-center py-24 text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-background/60">
              What&apos;s Coming
            </p>
            <h1 className="mt-6 font-serif text-5xl font-light text-background sm:text-6xl lg:text-7xl xl:text-8xl">
              The Vision
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-background/80">
              Building something deeper. More intentional. 
              A future where Muslim women can gather, travel, and grow together.
            </p>
            <div className="mt-12 h-px w-24 bg-accent/30" />
          </div>
        </div>
      </section>

      {/* What's Coming */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-4xl text-foreground sm:text-5xl">
              The Journey Ahead
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              This is just the beginning. What started as content creation is evolving 
              into something more meaningful - real experiences, real connections, real impact.
            </p>
          </div>

          {/* Vision Pillars */}
          <div className="mt-20 grid gap-12 lg:grid-cols-2">
            {/* Curated Gatherings */}
            <div className="relative overflow-hidden bg-secondary p-10 lg:p-12">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/10" />
              <Users className="relative h-10 w-10 text-accent" />
              <h3 className="relative mt-8 font-serif text-2xl text-foreground">
                Curated Gatherings
              </h3>
              <p className="relative mt-4 text-lg leading-relaxed text-muted-foreground">
                Intimate, in-person events that bring Muslim women together for 
                meaningful connection, reflection, and celebration. From workshop 
                retreats to elegant evening gatherings.
              </p>
              <p className="relative mt-6 text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
                Coming Soon
              </p>
            </div>

            {/* Travel Experiences */}
            <div className="relative overflow-hidden bg-secondary p-10 lg:p-12">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/10" />
              <Plane className="relative h-10 w-10 text-accent" />
              <h3 className="relative mt-8 font-serif text-2xl text-foreground">
                Travel Experiences
              </h3>
              <p className="relative mt-4 text-lg leading-relaxed text-muted-foreground">
                Curated journeys to meaningful destinations. Group travel experiences 
                designed for Muslim women who want to explore the world while staying 
                true to their values.
              </p>
              <p className="relative mt-6 text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
                In Development
              </p>
            </div>

            {/* The Circle Evolution */}
            <div className="relative overflow-hidden bg-secondary p-10 lg:p-12">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/10" />
              <Heart className="relative h-10 w-10 text-accent" />
              <h3 className="relative mt-8 font-serif text-2xl text-foreground">
                The Circle Evolution
              </h3>
              <p className="relative mt-4 text-lg leading-relaxed text-muted-foreground">
                Expanding The Circle into a more structured community offering with 
                regular gatherings, guest conversations, and resources for personal 
                and spiritual growth.
              </p>
              <p className="relative mt-6 text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
                Growing
              </p>
            </div>

            {/* Muslim Texas Expansion */}
            <div className="relative overflow-hidden bg-secondary p-10 lg:p-12">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/10" />
              <Compass className="relative h-10 w-10 text-accent" />
              <h3 className="relative mt-8 font-serif text-2xl text-foreground">
                Muslim Texas Expansion
              </h3>
              <p className="relative mt-4 text-lg leading-relaxed text-muted-foreground">
                Taking the documentary series beyond Texas. Exploring Muslim communities 
                across America and eventually around the world, telling stories that 
                inspire and connect.
              </p>
              <p className="relative mt-6 text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
                Future Vision
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <blockquote>
            <p className="font-serif text-3xl italic leading-relaxed text-foreground sm:text-4xl">
              {"\"I want to build spaces - both digital and physical - where Muslim women feel seen, supported, and inspired to become the best versions of themselves.\""}
            </p>
            <cite className="mt-8 block text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground not-italic">
              Candace
            </cite>
          </blockquote>
        </div>
      </section>

      {/* Stay Connected */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="font-serif text-4xl text-foreground sm:text-5xl">
            Be Part of the Journey
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Want to be first to know about future experiences, gatherings, and offerings? 
            Join the inner circle and stay connected.
          </p>
          
          {/* Waitlist Form */}
          <form className="mx-auto mt-10 max-w-md">
            <div className="flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 border border-border bg-transparent px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
              />
              <button
                type="submit"
                className="border border-foreground bg-foreground px-8 py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-background transition-all duration-300 hover:bg-transparent hover:text-foreground"
              >
                Join
              </button>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              No spam. Just meaningful updates about what&apos;s coming.
            </p>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground py-24 text-background lg:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="font-serif text-4xl text-background">
            Have Ideas to Share?
          </h2>
          <p className="mt-6 text-lg text-background/80">
            I&apos;d love to hear what you&apos;d want to experience. 
            Your input shapes what we build together.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center justify-center bg-background px-10 py-5 text-[11px] font-medium uppercase tracking-[0.2em] text-foreground transition-all duration-300 hover:bg-background/90"
          >
            Share Your Thoughts
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
