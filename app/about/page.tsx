import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { VideoFeature } from "@/components/video-feature"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "About | The Blonde Muslim",
  description: "The story, values, and presence of The Blonde Muslim in the Muslim community.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="relative min-h-[70vh] overflow-hidden bg-secondary pt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid min-h-[60vh] items-center gap-12 py-16 lg:grid-cols-2 lg:gap-24">
            {/* Text */}
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
                Her Story
              </p>
              <h1 className="mt-4 font-serif text-5xl font-light leading-[1.1] text-foreground sm:text-6xl lg:text-7xl">
                About
                <br />
                <span className="italic">Candace</span>
              </h1>
              <div className="mt-8 h-px w-24 bg-accent/50" />
            </div>
            
            {/* Image */}
            <div className="relative">
              <div className="absolute -inset-4 border border-accent/10" />
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/candace-profile.png"
                  alt="Candace - The Blonde Muslim"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-12">
            {/* Main Content */}
            <div className="lg:col-span-7">
              <p className="font-serif text-2xl leading-relaxed text-foreground sm:text-3xl">
                She is not just an influencer. She is a trusted voice, a storyteller, 
                a connector, and a graceful presence beloved in the Muslim community.
              </p>
              
              <div className="mt-12 space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  As a revert to Islam, Candace brings a unique perspective to faith, identity, 
                  and belonging. Her journey has been one of transformation, discovery, and 
                  deepening connection with Allah and the Ummah.
                </p>
                <p>
                  Based in Texas, she has built a platform that celebrates Muslim culture, 
                  supports Muslim-owned businesses, and creates space for women to connect, 
                  reflect, and grow together.
                </p>
                <p>
                  Her work spans lifestyle content, editorial storytelling, community building, 
                  and meaningful brand partnerships that align with her values and serve her audience.
                </p>
              </div>
            </div>

            {/* Side Quote */}
            <div className="lg:col-span-5 lg:pl-12">
              <div className="sticky top-32 border-l-2 border-accent/30 pl-8">
                <blockquote className="font-serif text-2xl italic leading-relaxed text-foreground">
                  {"\"My faith is not something I perform. It's who I am. Everything I create flows from that foundation.\""}
                </blockquote>
                <cite className="mt-6 block text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground not-italic">
                  Candace
                </cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section with Video */}
      <section className="bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
            {/* Video */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-4 border border-accent/10" />
              <VideoFeature 
                src="/videos/faith.mp4" 
                aspectRatio="square"
                className="w-full"
              />
            </div>
            
            {/* Values */}
            <div className="order-1 lg:order-2">
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
                What She Believes
              </p>
              <h2 className="mt-4 font-serif text-4xl text-foreground">
                Core Values
              </h2>
              
              <div className="mt-10 space-y-8">
                <div>
                  <h3 className="font-serif text-xl text-foreground">Faith First</h3>
                  <p className="mt-2 text-muted-foreground">
                    Everything begins with tawakkul in Allah. Her work is an extension of her worship.
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-foreground">Authentic Beauty</h3>
                  <p className="mt-2 text-muted-foreground">
                    Beauty that honors modesty, celebrates culture, and reflects inner light.
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-foreground">Community Connection</h3>
                  <p className="mt-2 text-muted-foreground">
                    Building bridges, supporting the Ummah, and creating spaces for belonging.
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-foreground">Intentional Living</h3>
                  <p className="mt-2 text-muted-foreground">
                    Every collaboration, every piece of content, every connection made with purpose.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Presence / Reach */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
              Her Reach
            </p>
            <h2 className="mt-4 font-serif text-4xl text-foreground">
              A Growing Community
            </h2>
          </div>
          
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            <div className="text-center">
              <p className="font-serif text-5xl text-foreground lg:text-6xl">384K</p>
              <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Instagram
              </p>
            </div>
            <div className="text-center">
              <p className="font-serif text-5xl text-foreground lg:text-6xl">197K</p>
              <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                TikTok
              </p>
            </div>
            <div className="text-center">
              <p className="font-serif text-5xl text-foreground lg:text-6xl">22K</p>
              <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                YouTube
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground py-24 text-background lg:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="font-serif text-4xl text-background">
            Ready to Connect?
          </h2>
          <p className="mt-6 text-lg text-background/80">
            For partnerships, speaking, or community inquiries.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/partnerships"
              className="inline-flex items-center justify-center bg-background px-8 py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-foreground transition-all duration-300 hover:bg-background/90"
            >
              Work Together
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-background/30 px-8 py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-background transition-all duration-300 hover:bg-background/10"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
