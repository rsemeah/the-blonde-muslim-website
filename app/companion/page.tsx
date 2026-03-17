import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CompanionGate } from "@/components/companion-gate"
import { Sparkles, Heart, BookOpen, MessageCircle, Moon, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Amina | AI Companion | The Blonde Muslim",
  description: "Meet Amina, your trusted AI companion for spiritual growth, new Muslim guidance, and daily reflections.",
}

export default function CompanionPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section with decorative elements */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-[#38BDF8]/5 blur-3xl" />
          <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-[#1E5F8A]/5 blur-3xl" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            {/* Animated icon */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#38BDF8]/20 to-[#1E5F8A]/20 shadow-lg">
                  <Sparkles className="h-12 w-12 text-[#38BDF8]" />
                </div>
                <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-card border-2 border-border shadow-sm animate-bounce" style={{ animationDuration: '2s' }}>
                  <Moon className="h-4 w-4 text-[#1E5F8A]" />
                </div>
                <div className="absolute -bottom-1 -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-card border-2 border-border shadow-sm">
                  <Star className="h-3 w-3 text-[#38BDF8]" />
                </div>
              </div>
            </div>
            
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#38BDF8]">
              Circle Members Exclusive
            </p>
            <h1 className="mt-4 font-serif text-5xl text-foreground sm:text-6xl lg:text-7xl">
              Meet Amina
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
              Your trusted AI companion on this beautiful journey. 
              Named for &quot;trustworthy&quot; in Arabic, Amina is here to support you 
              with warmth, wisdom, and sisterhood.
            </p>
            
            {/* Quick stats */}
            <div className="mt-10 flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span>Always available</span>
              </div>
              <div className="h-4 w-px bg-border" />
              <div>Private conversations</div>
              <div className="h-4 w-px bg-border" />
              <div>Trusted guidance</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-secondary/30 to-transparent">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground mb-3">
              How Amina Helps
            </p>
            <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
              Your Companion for Every Step
            </h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="group bg-card border border-border rounded-2xl p-8 text-center hover:shadow-lg hover:border-[#38BDF8]/30 transition-all duration-300">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#38BDF8]/10 to-[#38BDF8]/5 mb-5 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="h-7 w-7 text-[#38BDF8]" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">New Muslim Guidance</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Learn prayer basics, wudu, and foundational knowledge with patience and care.
              </p>
            </div>

            <div className="group bg-card border border-border rounded-2xl p-8 text-center hover:shadow-lg hover:border-[#1E5F8A]/30 transition-all duration-300">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1E5F8A]/10 to-[#1E5F8A]/5 mb-5 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="h-7 w-7 text-[#1E5F8A]" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">Daily Reflections</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Thoughtful prompts for spiritual journaling and deeper contemplation.
              </p>
            </div>

            <div className="group bg-card border border-border rounded-2xl p-8 text-center hover:shadow-lg hover:border-[#38BDF8]/30 transition-all duration-300">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#38BDF8]/10 to-[#38BDF8]/5 mb-5 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="h-7 w-7 text-[#38BDF8]" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">Faith Q&A</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Ask questions about Islamic concepts, practices, and spirituality.
              </p>
            </div>

            <div className="group bg-card border border-border rounded-2xl p-8 text-center hover:shadow-lg hover:border-[#1E5F8A]/30 transition-all duration-300">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1E5F8A]/10 to-[#1E5F8A]/5 mb-5 group-hover:scale-110 transition-transform duration-300">
                <Heart className="h-7 w-7 text-[#1E5F8A]" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">Sisterly Support</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Encouragement and companionship for life&apos;s challenges and joys.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Section with Access Gate */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <CompanionGate />
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-16 bg-secondary/30 border-t border-border">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <p className="text-xs text-muted-foreground leading-relaxed">
              <span className="font-medium text-foreground">Important:</span> Amina is an AI companion designed to support your spiritual journey. 
              For detailed religious rulings (fatwas), please consult qualified scholars. 
              For mental health concerns, please seek professional support. 
              Amina is not a replacement for human connection, scholarly guidance, or professional care.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
