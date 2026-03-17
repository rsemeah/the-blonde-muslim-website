import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { VideoFeature } from "@/components/video-feature"
import Image from "next/image"
import Link from "next/link"
import { Play, MapPin, Utensils, Calendar, Store } from "lucide-react"

export const metadata = {
  title: "Muslim Texas | The Blonde Muslim",
  description: "A documentary series spotlighting Muslim-owned businesses, culture, and community across Texas.",
}

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
            <div className="mt-10 flex items-center gap-6">
              <button className="flex items-center gap-3 bg-background/10 backdrop-blur-sm px-6 py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-background transition-all duration-300 hover:bg-background/20">
                <Play className="h-4 w-4" />
                <span>Watch Trailer</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About The Series */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
                The Series
              </p>
              <h2 className="mt-4 font-serif text-4xl text-foreground sm:text-5xl">
                Stories That Matter
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Muslim Texas is more than a documentary series. It&apos;s a celebration of the 
                Muslim community&apos;s contributions to Texas culture, economy, and society.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                From family-owned restaurants serving generations-old recipes to innovative 
                businesses shaping the future, each episode shines a light on the people 
                who make our communities vibrant.
              </p>
            </div>
            
            {/* Categories */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="bg-secondary p-8">
                <Utensils className="h-8 w-8 text-accent" />
                <h3 className="mt-6 font-serif text-xl text-foreground">Restaurants</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  The flavors of the Ummah, served with love in the heart of Texas.
                </p>
              </div>
              <div className="bg-secondary p-8">
                <Store className="h-8 w-8 text-accent" />
                <h3 className="mt-6 font-serif text-xl text-foreground">Businesses</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  Muslim entrepreneurs building legacies and serving their communities.
                </p>
              </div>
              <div className="bg-secondary p-8">
                <Calendar className="h-8 w-8 text-accent" />
                <h3 className="mt-6 font-serif text-xl text-foreground">Events</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  Gatherings that bring our community together in celebration.
                </p>
              </div>
              <div className="bg-secondary p-8">
                <MapPin className="h-8 w-8 text-accent" />
                <h3 className="mt-6 font-serif text-xl text-foreground">Hidden Gems</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  Local treasures and cultural landmarks worth discovering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Episode */}
      <section className="bg-secondary">
        <div className="grid lg:grid-cols-2">
          {/* Video */}
          <div className="relative aspect-video lg:aspect-auto lg:min-h-[600px]">
            <VideoFeature 
              src="/videos/lifestyle.mp4" 
              aspectRatio="landscape"
              className="h-full w-full"
              overlay={false}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="flex h-20 w-20 items-center justify-center rounded-full bg-background/90 text-foreground transition-transform duration-300 hover:scale-110">
                <Play className="ml-1 h-8 w-8" />
              </button>
            </div>
          </div>
          
          {/* Content */}
          <div className="flex items-center px-8 py-20 lg:px-16 lg:py-32">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
                Latest Episode
              </p>
              <h2 className="mt-4 font-serif text-4xl text-foreground">
                Roots & Recipes
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                A deep dive into the Muslim-owned restaurants that have become beloved 
                institutions in the DFW area. From traditional Pakistani cuisine to 
                innovative fusion concepts, these are the stories behind the flavors.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <span className="bg-accent/20 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-accent">
                  28 min
                </span>
                <span className="text-sm text-muted-foreground">Dallas-Fort Worth</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Your Business */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
                For Businesses
              </p>
              <h2 className="mt-4 font-serif text-4xl text-foreground sm:text-5xl">
                Be Featured
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Do you own or know of a Muslim-owned business in Texas that deserves 
                to be featured? We&apos;re always looking for stories that inspire and 
                connect our community.
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  <p className="text-muted-foreground">Professional video production</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  <p className="text-muted-foreground">Cross-platform distribution (600K+ reach)</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  <p className="text-muted-foreground">Authentic storytelling that resonates</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  <p className="text-muted-foreground">Community-first approach</p>
                </div>
              </div>

              <Link
                href="/contact"
                className="mt-10 inline-flex items-center justify-center border border-foreground bg-foreground px-8 py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-background transition-all duration-300 hover:bg-transparent hover:text-foreground"
              >
                Submit Your Business
              </Link>
            </div>
            
            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] overflow-hidden bg-secondary">
                  <Image 
                    src="/images/water-wells.png" 
                    alt="Community impact"
                    width={300}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="aspect-square overflow-hidden bg-secondary">
                  <VideoFeature 
                    src="/videos/faith.mp4" 
                    aspectRatio="square"
                    className="h-full w-full"
                  />
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <div className="aspect-square overflow-hidden bg-secondary">
                  <VideoFeature 
                    src="/videos/partnerships.mp4" 
                    aspectRatio="square"
                    className="h-full w-full"
                  />
                </div>
                <div className="aspect-[3/4] overflow-hidden bg-secondary">
                  <Image 
                    src="/images/candace-profile.png" 
                    alt="The Blonde Muslim"
                    width={300}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
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
