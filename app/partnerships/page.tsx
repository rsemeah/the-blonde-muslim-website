import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { VideoFeature } from "@/components/video-feature"
import Link from "next/link"
import { ArrowRight, Camera, Mic, Users, Sparkles, Heart, Globe } from "lucide-react"

export const metadata = {
  title: "Partnerships | The Blonde Muslim",
  description: "Work with The Blonde Muslim on brand collaborations, speaking engagements, and community campaigns.",
}

const partnershipTypes = [
  {
    icon: Camera,
    title: "Brand Collaborations",
    description: "Authentic content creation that resonates with Muslim women seeking beauty, lifestyle, and faith-aligned products.",
  },
  {
    icon: Mic,
    title: "Speaking & Events",
    description: "Keynotes, panels, and hosted experiences for conferences, brand events, and community gatherings.",
  },
  {
    icon: Users,
    title: "Community Campaigns",
    description: "Initiatives that serve and uplift the Muslim community while achieving meaningful brand objectives.",
  },
  {
    icon: Sparkles,
    title: "Ambassador Programs",
    description: "Long-term partnerships that build deep brand affinity through consistent, values-aligned content.",
  },
  {
    icon: Heart,
    title: "Cause Marketing",
    description: "Campaigns that combine commercial objectives with social impact and charitable giving.",
  },
  {
    icon: Globe,
    title: "Muslim Texas Features",
    description: "Spotlight your Muslim-owned business through the Muslim Texas documentary series.",
  },
]

export default function PartnershipsPage() {
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
                Work Together
              </p>
              <h1 className="mt-4 font-serif text-5xl font-light leading-[1.1] text-foreground sm:text-6xl">
                Partner
                <br />
                <span className="italic">With Me</span>
              </h1>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
                For brands seeking an authentic voice in the Muslim lifestyle space. 
                Let&apos;s create something meaningful together.
              </p>
              <div className="mt-8 h-px w-24 bg-accent/50" />
            </div>
            
            {/* Video */}
            <div className="relative">
              <div className="absolute -inset-4 border border-accent/10" />
              <VideoFeature 
                src="/videos/partnerships.mp4" 
                aspectRatio="landscape"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
              Why Partner
            </p>
            <h2 className="mt-4 font-serif text-4xl text-foreground sm:text-5xl">
              Trusted Voice, Real Impact
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              With a combined reach of over 600,000 followers, The Blonde Muslim 
              has built a deeply engaged community of Muslim women who trust her 
              recommendations and value her perspective.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <p className="font-serif text-5xl text-foreground">603K+</p>
              <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Combined Reach
              </p>
            </div>
            <div className="text-center">
              <p className="font-serif text-5xl text-foreground">5.2%</p>
              <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Avg Engagement
              </p>
            </div>
            <div className="text-center">
              <p className="font-serif text-5xl text-foreground">25-44</p>
              <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Core Demographics
              </p>
            </div>
            <div className="text-center">
              <p className="font-serif text-5xl text-foreground">85%</p>
              <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Women Audience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
              How We Work
            </p>
            <h2 className="mt-4 font-serif text-4xl text-foreground">
              Partnership Types
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {partnershipTypes.map((type, index) => (
              <div 
                key={index}
                className="group bg-background p-8 transition-all duration-300 hover:shadow-lg"
              >
                <type.icon className="h-8 w-8 text-accent" />
                <h3 className="mt-6 font-serif text-xl text-foreground">
                  {type.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {type.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span>Inquire</span>
                  <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Alignment */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
                Brand Alignment
              </p>
              <h2 className="mt-4 font-serif text-4xl text-foreground">
                Values-First Partnerships
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                I partner with brands that align with my values and serve my community 
                authentically. Every collaboration is thoughtfully considered to ensure 
                it benefits both the brand and my audience.
              </p>
              
              <div className="mt-10 space-y-6">
                <div className="border-l-2 border-accent/30 pl-6">
                  <h3 className="font-serif text-lg text-foreground">Ideal Partners</h3>
                  <p className="mt-2 text-muted-foreground">
                    Fashion, beauty, lifestyle, travel, home, wellness, and family brands 
                    that respect modesty and Muslim values.
                  </p>
                </div>
                <div className="border-l-2 border-accent/30 pl-6">
                  <h3 className="font-serif text-lg text-foreground">Content Style</h3>
                  <p className="mt-2 text-muted-foreground">
                    Editorial, cinematic, warm, and authentic. Never salesy or 
                    disconnected from my natural voice.
                  </p>
                </div>
                <div className="border-l-2 border-accent/30 pl-6">
                  <h3 className="font-serif text-lg text-foreground">What I Don&apos;t Promote</h3>
                  <p className="mt-2 text-muted-foreground">
                    Alcohol, gambling, non-halal food, or anything that conflicts 
                    with Islamic values.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Video */}
            <div className="relative">
              <div className="absolute -inset-4 border border-accent/10" />
              <VideoFeature 
                src="/videos/vision.mp4" 
                aspectRatio="portrait"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground py-24 text-background lg:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="font-serif text-4xl text-background sm:text-5xl">
            Let&apos;s Create Together
          </h2>
          <p className="mt-6 text-lg text-background/80">
            Ready to discuss a partnership? I&apos;d love to hear about your brand 
            and explore how we can work together.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center justify-center bg-background px-10 py-5 text-[11px] font-medium uppercase tracking-[0.2em] text-foreground transition-all duration-300 hover:bg-background/90"
          >
            Start a Conversation
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
