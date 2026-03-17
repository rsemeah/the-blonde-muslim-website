import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { VideoFeature } from "@/components/video-feature"
import Link from "next/link"

export const metadata = {
  title: "The Circle | The Blonde Muslim",
  description: "A sacred space for Muslim women to connect, reflect, and grow together.",
}

// Crescent Moon SVG Component
function CrescentMoon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z" />
    </svg>
  )
}

export default function CirclePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero with Video Background */}
      <section className="relative min-h-screen overflow-hidden bg-foreground">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        >
          <source src="/videos/community.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex min-h-screen flex-col items-center justify-center py-24 text-center">
            {/* Crescent Moon */}
            <CrescentMoon className="h-12 w-12 text-accent/60" />
            
            <h1 className="mt-8 font-serif text-5xl font-light text-background sm:text-6xl lg:text-7xl">
              The Circle
            </h1>
            
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-background/80">
              A sacred space for Muslim women to connect, reflect, and grow together. 
              Not therapy. Not religious authority. Simply community.
            </p>

            <div className="mt-10 h-px w-24 bg-accent/30" />
            
            <p className="mt-10 font-serif text-2xl italic text-background/70">
              {"\"Where sisters become family\""}
            </p>
          </div>
        </div>
      </section>

      {/* What The Circle Is */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
              What It Is
            </p>
            <h2 className="mt-4 font-serif text-4xl text-foreground sm:text-5xl">
              A Space for Belonging
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              The Circle is an intentional gathering space where Muslim women can come together 
              for conversation, support, reflection, and genuine connection.
            </p>
          </div>

          {/* Pillars */}
          <div className="mt-20 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                <CrescentMoon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mt-6 font-serif text-xl text-foreground">Reflection</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Space to pause, contemplate, and reconnect with what matters most.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                <CrescentMoon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mt-6 font-serif text-xl text-foreground">Connection</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Building genuine bonds with sisters who understand your journey.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                <CrescentMoon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mt-6 font-serif text-xl text-foreground">Support</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                A soft place to land when life feels heavy or uncertain.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                <CrescentMoon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mt-6 font-serif text-xl text-foreground">Growth</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Encouragement to become the woman Allah created you to be.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Video Section */}
      <section className="bg-secondary">
        <div className="grid lg:grid-cols-2">
          {/* Video */}
          <div className="relative aspect-square lg:aspect-auto">
            <VideoFeature 
              src="/videos/lifestyle.mp4" 
              aspectRatio="square"
              className="h-full w-full"
              overlay={false}
            />
          </div>
          
          {/* Content */}
          <div className="flex items-center px-8 py-20 lg:px-16 lg:py-32">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
                Gatherings
              </p>
              <h2 className="mt-4 font-serif text-4xl text-foreground">
                Intentional Spaces
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                The Circle hosts intimate gatherings, both virtual and in-person, 
                designed to nurture sisterhood and create meaningful connections 
                that last beyond a single conversation.
              </p>
              <ul className="mt-8 space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>Monthly virtual gatherings</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>Seasonal in-person meetups</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>Private community space</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>Curated conversations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="text-sm leading-relaxed text-muted-foreground">
            The Circle is a community gathering space and is not a substitute for professional 
            therapy, counseling, or religious scholarship. For mental health support, please 
            consult a licensed professional. For religious guidance, please consult qualified scholars.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground py-24 text-background lg:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <CrescentMoon className="mx-auto h-10 w-10 text-accent/60" />
          <h2 className="mt-8 font-serif text-4xl text-background sm:text-5xl">
            Join The Circle
          </h2>
          <p className="mt-6 text-lg text-background/80">
            Express your interest and be the first to know about upcoming gatherings.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center justify-center bg-background px-10 py-5 text-[11px] font-medium uppercase tracking-[0.2em] text-foreground transition-all duration-300 hover:bg-background/90"
          >
            Express Interest
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
