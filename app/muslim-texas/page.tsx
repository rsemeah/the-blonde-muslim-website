import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { VideoFeature } from "@/components/video-feature"
import { BusinessApplicationForm } from "@/components/business-application-form"
import Image from "next/image"
import Link from "next/link"
import { Play, MapPin, Utensils, Calendar, Store, Building2, Sparkles } from "lucide-react"

export const metadata = {
  title: "Muslim Texas | The Blonde Muslim",
  description: "A documentary series spotlighting Muslim-owned businesses, culture, and community across Texas.",
}

// Sample featured content for the Explore grid
const featuredContent = [
  {
    id: 1,
    title: "Roots & Recipes",
    category: "Food",
    location: "Dallas-Fort Worth",
    image: "/images/water-wells.png",
    type: "episode"
  },
  {
    id: 2,
    title: "Faith in the City",
    category: "Community",
    location: "Houston",
    image: "/images/candace-profile.png",
    type: "episode"
  },
  {
    id: 3,
    title: "Hidden Gems",
    category: "Businesses",
    location: "Austin",
    image: "/images/mslm-cards.png",
    type: "episode"
  },
]

const categories = [
  { icon: Utensils, label: "Food", count: "12+" },
  { icon: Building2, label: "Mosques", count: "8+" },
  { icon: Calendar, label: "Events", count: "15+" },
  { icon: Store, label: "Brands", count: "20+" },
]

export default function MuslimTexasPage() {
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
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        >
          <source src="/videos/texas.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/50 to-foreground/30" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex min-h-screen flex-col justify-end pb-20 lg:pb-32">
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-background/60">
              Documentary Series
            </p>
            <h1 className="mt-4 font-serif text-6xl font-light text-background sm:text-7xl lg:text-8xl">
              Muslim
              <br />
              <span className="italic">Texas</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-background/80">
              Exploring the vibrant tapestry of Muslim culture, businesses, and community 
              across the Lone Star State. Every episode tells a story of faith, resilience, and belonging.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link 
                href="#explore"
                className="flex items-center gap-3 bg-background px-6 py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-foreground transition-all duration-300 hover:bg-background/90"
              >
                <Play className="h-4 w-4" />
                <span>Explore Content</span>
              </Link>
              <Link 
                href="#get-featured"
                className="flex items-center gap-3 border border-background/30 px-6 py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-background transition-all duration-300 hover:bg-background/10"
              >
                <span>Get Featured</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: FOR AUDIENCE - Explore Muslim Texas */}
      <section id="explore" className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
                For The Community
              </p>
              <h2 className="mt-4 font-serif text-4xl text-foreground sm:text-5xl">
                Explore Muslim Texas
              </h2>
              <p className="mt-4 max-w-xl text-lg text-muted-foreground">
                Discover Muslim-owned businesses, cultural experiences, and community stories across Texas.
              </p>
            </div>
            
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button 
                  key={cat.label}
                  className="flex items-center gap-2 border border-border px-4 py-2 text-sm transition-all hover:border-foreground hover:bg-foreground hover:text-background"
                >
                  <cat.icon className="h-4 w-4" />
                  <span>{cat.label}</span>
                  <span className="text-muted-foreground">({cat.count})</span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Content Grid */}
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredContent.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                  <div className="absolute left-4 top-4 bg-accent px-3 py-1 text-[9px] font-medium uppercase tracking-[0.15em] text-foreground">
                    {item.category}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-serif text-xl text-background">{item.title}</h3>
                    <div className="mt-2 flex items-center gap-2 text-sm text-background/70">
                      <MapPin className="h-3 w-3" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* More Coming Soon */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              More episodes and features coming soon. Follow along on social media.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <a
                href="https://instagram.com/theblondemuslim"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-foreground underline underline-offset-4 hover:no-underline"
              >
                Instagram
              </a>
              <a
                href="https://youtube.com/@TheBlondeMuslim"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-foreground underline underline-offset-4 hover:no-underline"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="h-px bg-border" />
      </div>

      {/* SECTION 2: FOR BUSINESSES - Get Featured */}
      <section id="get-featured" className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-24">
            {/* Left - Information */}
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
                For Businesses
              </p>
              <h2 className="mt-4 font-serif text-4xl text-foreground sm:text-5xl">
                Get Featured
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Muslim Texas is a curated series highlighting Muslim-owned businesses and 
                experiences across the state. We tell authentic stories that connect your 
                business with our engaged community.
              </p>
              
              {/* What You Get */}
              <div className="mt-10">
                <h3 className="font-serif text-xl text-foreground">What You Get</h3>
                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/20">
                      <Play className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Professional Video Feature</p>
                      <p className="text-sm text-muted-foreground">High-quality video content showcasing your business story.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/20">
                      <Sparkles className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Social Media Exposure</p>
                      <p className="text-sm text-muted-foreground">Featured across 600K+ combined followers on multiple platforms.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/20">
                      <MapPin className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Community Reach</p>
                      <p className="text-sm text-muted-foreground">Connect with Muslim consumers actively looking to support halal businesses.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right - Application Form */}
            <div className="bg-secondary p-8 lg:p-10">
              <h3 className="font-serif text-2xl text-foreground">Apply to be Featured</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Tell us about your business and why we should feature you.
              </p>
              <div className="mt-8">
                <BusinessApplicationForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground py-24 text-background lg:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="font-serif text-4xl text-background sm:text-5xl">
            Watch Muslim Texas
          </h2>
          <p className="mt-6 text-lg text-background/80">
            Follow along on Instagram, TikTok, and YouTube for the latest episodes 
            and behind-the-scenes content.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://instagram.com/theblondemuslim"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-background px-8 py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-foreground transition-all duration-300 hover:bg-background/90"
            >
              Instagram
            </a>
            <a
              href="https://youtube.com/@TheBlondeMuslim"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-background/30 px-8 py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-background transition-all duration-300 hover:bg-background/10"
            >
              YouTube
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
