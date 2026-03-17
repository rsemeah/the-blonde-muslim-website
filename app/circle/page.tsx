import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { VideoFeature } from "@/components/video-feature"
import { CircleJoinForm } from "@/components/circle-join-form"
import Link from "next/link"
import { Check, Heart, Sparkles, Users, Calendar, Lock } from "lucide-react"

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
            <CrescentMoon className="h-12 w-12 text-sky-blue" />
            
            <h1 className="mt-8 font-serif text-5xl font-light text-background sm:text-6xl lg:text-7xl">
              The Circle
            </h1>
            
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-background/80">
              A private-feeling community for Muslim women focused on growth, lifestyle, and faith.
              Not therapy. Not religious authority. Simply sisterhood.
            </p>

            <div className="mt-10 h-px w-24 bg-madinah-blue/50" />
            
            <p className="mt-10 font-serif text-2xl italic text-background/70">
              {"\"Where sisters become family\""}
            </p>
          </div>
        </div>
      </section>

      {/* What It Is - Clear Explanation */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            {/* Left - What It Is */}
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
                What It Is
              </p>
              <h2 className="mt-4 font-serif text-4xl text-foreground sm:text-5xl">
                A Space for Belonging
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                The Circle is an intentional gathering space where Muslim women can come together 
                for conversation, support, reflection, and genuine connection. It&apos;s a community 
                built on trust, where you can show up as your authentic self.
              </p>
              
              <div className="mt-10 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary">
                    <Heart className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-foreground">Authentic Connection</h3>
                    <p className="mt-1 text-muted-foreground">Real conversations with sisters who understand your journey.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary">
                    <Sparkles className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-foreground">Intentional Growth</h3>
                    <p className="mt-1 text-muted-foreground">Encouragement to become the woman Allah created you to be.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary">
                    <Lock className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-foreground">Safe Space</h3>
                    <p className="mt-1 text-muted-foreground">A soft place to land when life feels heavy or uncertain.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right - Who It's For */}
            <div className="bg-secondary p-10 lg:p-12">
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
                Who It&apos;s For
              </p>
              <h2 className="mt-4 font-serif text-3xl text-foreground">
                Muslim Women Seeking...
              </h2>
              
              <ul className="mt-8 space-y-4">
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-accent" />
                  <span className="text-foreground">Connection with like-minded sisters</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-accent" />
                  <span className="text-foreground">Alignment in faith and lifestyle</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-accent" />
                  <span className="text-foreground">Intentional living and growth</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-accent" />
                  <span className="text-foreground">A judgment-free space to be yourself</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-accent" />
                  <span className="text-foreground">Conversations that go beyond surface level</span>
                </li>
              </ul>
              
              <p className="mt-8 text-sm italic text-muted-foreground">
                Whether you&apos;re a revert, born Muslim, new to the area, or simply seeking deeper 
                connection—you belong here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="bg-foreground py-24 text-background lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-background/60">
              Member Benefits
            </p>
            <h2 className="mt-4 font-serif text-4xl text-background sm:text-5xl">
              What You Get
            </h2>
          </div>
          
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-background/10">
                <Sparkles className="h-7 w-7 text-accent" />
              </div>
              <h3 className="mt-6 font-serif text-xl text-background">Exclusive Content</h3>
              <p className="mt-3 text-sm leading-relaxed text-background/70">
                Access to content, reflections, and conversations not shared anywhere else.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-background/10">
                <Calendar className="h-7 w-7 text-accent" />
              </div>
              <h3 className="mt-6 font-serif text-xl text-background">Early Access</h3>
              <p className="mt-3 text-sm leading-relaxed text-background/70">
                First to know about events, experiences, and new opportunities.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-background/10">
                <Users className="h-7 w-7 text-accent" />
              </div>
              <h3 className="mt-6 font-serif text-xl text-background">Community</h3>
              <p className="mt-3 text-sm leading-relaxed text-background/70">
                Private space to connect with other Circle members and build lasting friendships.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-background/10">
                <Heart className="h-7 w-7 text-accent" />
              </div>
              <h3 className="mt-6 font-serif text-xl text-background">Future Events</h3>
              <p className="mt-3 text-sm leading-relaxed text-background/70">
                Invitations to intimate gatherings, virtual and in-person meetups.
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

      {/* Join Form CTA */}
      <section className="bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
            <div>
              <CrescentMoon className="h-10 w-10 text-accent" />
              <h2 className="mt-6 font-serif text-4xl text-foreground sm:text-5xl">
                Join The Circle
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Express your interest and be among the first to know about upcoming gatherings, 
                exclusive content, and community events.
              </p>
              <p className="mt-4 text-sm italic text-muted-foreground">
                Joining is free. This is about connection, not commerce.
              </p>
            </div>
            
            {/* Join Form */}
            <div className="bg-background p-8 lg:p-10">
              <CircleJoinForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
