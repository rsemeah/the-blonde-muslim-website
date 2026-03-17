import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { VideoFeature } from "@/components/video-feature"
import { 
  InstagramIcon, 
  TikTokIcon, 
  YouTubeIcon, 
  VerifiedBadge 
} from "@/components/social-icons"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Play, Users, Heart, Globe } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Cinematic Hero with Video Background */}
      <section className="relative min-h-screen overflow-hidden bg-foreground">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        >
          <source src="/videos/hero-intro.mp4" type="video/mp4" />
        </video>
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-transparent to-foreground/30" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex min-h-screen flex-col justify-center py-24 lg:py-0">
            <div className="max-w-2xl">
              {/* Eyebrow */}
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-background/70">
                Faith &middot; Beauty &middot; Community
              </p>
              
              {/* Main Headline */}
              <h1 className="mt-6 font-serif text-5xl font-light leading-[0.95] tracking-tight text-background sm:text-6xl lg:text-7xl xl:text-8xl">
                The Blonde
                <br />
                <span className="inline-flex items-center gap-4">
                  <span className="italic">Muslim</span>
                  <VerifiedBadge className="h-8 w-8 text-accent lg:h-10 lg:w-10" />
                </span>
              </h1>
              
              {/* Positioning */}
              <p className="mt-8 max-w-md text-base leading-relaxed text-background/80 lg:text-lg">
                A trusted voice for Muslim women seeking beauty, depth, and belonging. 
                Storyteller. Community builder. Connector of hearts.
              </p>

              {/* CTAs */}
              <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center bg-background px-8 py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-foreground transition-all duration-300 hover:bg-background/90"
                >
                  Enter Her World
                </Link>
                <Link
                  href="/partnerships"
                  className="inline-flex items-center justify-center border border-background/30 px-8 py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-background transition-all duration-300 hover:bg-background/10"
                >
                  Work Together
                </Link>
              </div>
            </div>

            {/* Floating Stats Panel */}
            <div className="absolute bottom-12 right-6 hidden bg-background/10 backdrop-blur-md p-6 lg:block lg:right-12">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3 border-r border-background/20 pr-6">
                  <InstagramIcon className="h-5 w-5 text-background/70" />
                  <div>
                    <p className="font-serif text-2xl text-background">384K</p>
                    <p className="text-[9px] uppercase tracking-[0.15em] text-background/50">Followers</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 border-r border-background/20 pr-6">
                  <TikTokIcon className="h-5 w-5 text-background/70" />
                  <div>
                    <p className="font-serif text-2xl text-background">197K</p>
                    <p className="text-[9px] uppercase tracking-[0.15em] text-background/50">Followers</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <YouTubeIcon className="h-5 w-5 text-background/70" />
                  <div>
                    <p className="font-serif text-2xl text-background">22.5K</p>
                    <p className="text-[9px] uppercase tracking-[0.15em] text-background/50">Subscribers</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 border-t border-background/20 pt-4">
                <p className="text-center text-[10px] font-medium uppercase tracking-[0.2em] text-background/60">
                  603K+ Combined Reach
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Platform Stats */}
      <section className="border-b border-border bg-secondary/30 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            {/* As Seen On */}
            <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-8">
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
                Trusted Voice In
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8">
                <span className="font-serif text-lg text-foreground/60">Muslim Lifestyle</span>
                <span className="hidden text-muted-foreground/30 lg:block">|</span>
                <span className="font-serif text-lg text-foreground/60">Faith & Spirituality</span>
                <span className="hidden text-muted-foreground/30 lg:block">|</span>
                <span className="font-serif text-lg text-foreground/60">Travel & Culture</span>
              </div>
            </div>
            
            {/* Platform Icons */}
            <div className="flex items-center gap-6">
              <Link
                href="https://instagram.com/theblondemuslim"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <InstagramIcon className="h-5 w-5" />
                <span className="text-sm font-medium">384K</span>
              </Link>
              <Link
                href="https://tiktok.com/@theblondemuslim"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <TikTokIcon className="h-5 w-5" />
                <span className="text-sm font-medium">197K</span>
              </Link>
              <Link
                href="https://youtube.com/@TheBlondeMuslim"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <YouTubeIcon className="h-5 w-5" />
                <span className="text-sm font-medium">22.5K</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Pathways Grid */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            
            {/* About Card */}
            <Link href="/about" className="group relative overflow-hidden">
              <div className="aspect-[4/5] overflow-hidden bg-secondary">
                <Image
                  src="/images/candace-profile.png"
                  alt="About Candace"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-background/60">
                  Her Story
                </p>
                <h3 className="mt-2 font-serif text-3xl text-background">About</h3>
                <div className="mt-4 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-background/80 transition-all duration-300 group-hover:gap-4">
                  <span>Discover</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>

            {/* The Circle Card */}
            <Link href="/circle" className="group relative overflow-hidden">
              <div className="aspect-[4/5] overflow-hidden bg-secondary">
                <VideoFeature 
                  src="/videos/community.mp4" 
                  aspectRatio="portrait"
                  className="h-full w-full"
                  overlay={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-background/60">
                  Community
                </p>
                <h3 className="mt-2 font-serif text-3xl text-background">The Circle</h3>
                <div className="mt-4 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-background/80 transition-all duration-300 group-hover:gap-4">
                  <span>Join</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>

            {/* Muslim Texas Card */}
            <Link href="/muslim-texas" className="group relative overflow-hidden md:col-span-2 lg:col-span-1">
              <div className="aspect-[4/5] overflow-hidden bg-secondary lg:aspect-[4/5]">
                <VideoFeature 
                  src="/videos/texas.mp4" 
                  aspectRatio="portrait"
                  className="h-full w-full"
                  overlay={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-background/60">
                  Editorial Series
                </p>
                <h3 className="mt-2 font-serif text-3xl text-background">Muslim Texas</h3>
                <div className="mt-4 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-background/80 transition-all duration-300 group-hover:gap-4">
                  <span>Explore</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Editorial Quote Section */}
      <section className="bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <div className="mx-auto h-px w-16 bg-accent/50" />
          <blockquote className="mt-12">
            <p className="font-serif text-3xl italic leading-relaxed text-foreground sm:text-4xl lg:text-5xl">
              {"\"Gardens beneath which rivers flow\""}
            </p>
            <cite className="mt-8 block text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground not-italic">
              Quranic Promise of Paradise
            </cite>
          </blockquote>
          <div className="mx-auto mt-12 h-px w-16 bg-accent/50" />
        </div>
      </section>

      {/* Partnerships Preview */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
                Collaborations
              </p>
              <h2 className="mt-4 font-serif text-4xl text-foreground sm:text-5xl">
                Work With Me
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                For brands seeking an authentic voice in the Muslim lifestyle space. 
                From editorial features to brand partnerships, let&apos;s create something meaningful together.
              </p>
              <Link
                href="/partnerships"
                className="mt-8 inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-foreground transition-all duration-300 hover:gap-5"
              >
                <span>View Partnership Options</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
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

      {/* Vision Preview */}
      <section className="relative overflow-hidden bg-foreground py-24 text-background lg:py-32">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        >
          <source src="/videos/vision.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-background/60">
              What&apos;s Coming
            </p>
            <h2 className="mt-4 font-serif text-4xl text-background sm:text-5xl lg:text-6xl">
              The Vision
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-background/80">
              Curated gatherings. Women-centered experiences. Future travel journeys for the soul. 
              A deeper way to connect, reflect, and grow together.
            </p>
            <Link
              href="/vision"
              className="mt-8 inline-flex items-center gap-3 border-b border-background/30 pb-2 text-[11px] font-medium uppercase tracking-[0.2em] text-background transition-all duration-300 hover:border-background/60"
            >
              <span>Learn More</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="font-serif text-4xl text-foreground sm:text-5xl">
            Let&apos;s Connect
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            For partnerships, speaking inquiries, or community interest.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center justify-center border border-foreground bg-foreground px-10 py-5 text-[11px] font-medium uppercase tracking-[0.2em] text-background transition-all duration-300 hover:bg-transparent hover:text-foreground"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
