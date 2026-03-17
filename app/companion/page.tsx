import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CompanionGate } from "@/components/companion-gate"
import { Sparkles, Heart, BookOpen, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Amina | AI Companion | The Blonde Muslim",
  description: "Meet Amina, your trusted AI companion for spiritual growth, new Muslim guidance, and daily reflections.",
}

export default function CompanionPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex justify-center mb-6">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-sky-blue/10">
                <Sparkles className="h-10 w-10 text-[#38BDF8]" />
              </div>
            </div>
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
              Circle Members Exclusive
            </p>
            <h1 className="mt-4 font-serif text-5xl text-foreground sm:text-6xl lg:text-7xl">
              Meet Amina
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Your trusted AI companion on this beautiful journey. 
              Named for &quot;trustworthy&quot; in Arabic, Amina is here to support you 
              with warmth, wisdom, and sisterhood.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center p-6">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#38BDF8]/10 mb-4">
                <BookOpen className="h-6 w-6 text-[#38BDF8]" />
              </div>
              <h3 className="font-serif text-lg text-foreground mb-2">New Muslim Guidance</h3>
              <p className="text-sm text-muted-foreground">
                Learn prayer basics, wudu, and foundational knowledge with patience and care.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#1E5F8A]/10 mb-4">
                <Sparkles className="h-6 w-6 text-[#1E5F8A]" />
              </div>
              <h3 className="font-serif text-lg text-foreground mb-2">Daily Reflections</h3>
              <p className="text-sm text-muted-foreground">
                Thoughtful prompts for spiritual journaling and deeper contemplation.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#38BDF8]/10 mb-4">
                <MessageCircle className="h-6 w-6 text-[#38BDF8]" />
              </div>
              <h3 className="font-serif text-lg text-foreground mb-2">Faith Q&A</h3>
              <p className="text-sm text-muted-foreground">
                Ask questions about Islamic concepts, practices, and spirituality.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#1E5F8A]/10 mb-4">
                <Heart className="h-6 w-6 text-[#1E5F8A]" />
              </div>
              <h3 className="font-serif text-lg text-foreground mb-2">Sisterly Support</h3>
              <p className="text-sm text-muted-foreground">
                Encouragement and companionship for life&apos;s challenges and joys.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Section with Access Gate */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <CompanionGate />
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-secondary/30">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <p className="text-xs text-muted-foreground leading-relaxed">
            Amina is an AI companion designed to support your spiritual journey. 
            For detailed religious rulings (fatwas), please consult qualified scholars. 
            For mental health concerns, please seek professional support. 
            Amina is not a replacement for human connection, scholarly guidance, or professional care.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
