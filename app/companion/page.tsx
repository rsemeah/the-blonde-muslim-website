import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CompanionGate } from "@/components/companion-gate"
import { Heart, BookOpen, MessageCircle, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Amina | AI Companion | The Blonde Muslim",
  description:
    "Meet Amina, your trusted AI companion for spiritual growth, new Muslim guidance, and daily reflections.",
}

export default function CompanionPage() {
  return (
    <div className="min-h-screen bg-[#F7F2EB]">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            {/* Moon icon */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#D7BA82]/20 shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#D7BA82"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-12 w-12"
                    aria-hidden="true"
                  >
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#F2ECE4] border-2 border-[#D7BA82]/30 shadow-sm">
                  <span className="text-[#D7BA82] text-lg leading-none">&#10022;</span>
                </div>
              </div>
            </div>

            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#C9796A]">
              Circle Members Exclusive
            </p>
            <h1 className="mt-4 font-serif text-5xl text-[#2C2926] sm:text-6xl lg:text-7xl">
              Meet Amina
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#2C2926]/70 max-w-2xl mx-auto">
              Your trusted AI companion on this beautiful journey. Named for
              &quot;trustworthy&quot; in Arabic, Amina is here to support you with warmth,
              wisdom, and sisterhood.
            </p>

            {/* Trust indicators */}
            <div className="mt-10 flex items-center justify-center gap-8 text-sm text-[#2C2926]/60">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span>Always available</span>
              </div>
              <div className="h-4 w-px bg-[#2C2926]/20" />
              <div>Private conversations</div>
              <div className="h-4 w-px bg-[#2C2926]/20" />
              <div>Trusted guidance</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 lg:py-28 bg-[#F2ECE4]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#2C2926]/50 mb-3">
              How Amina Helps
            </p>
            <h2 className="font-serif text-3xl text-[#2C2926] sm:text-4xl">
              Your Companion for Every Step
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: BookOpen,
                color: "#C9796A",
                bg: "#C9796A",
                title: "New Muslim Guidance",
                body: "Learn prayer basics, wudu, and foundational knowledge with patience and care.",
              },
              {
                icon: Heart,
                color: "#D7BA82",
                bg: "#D7BA82",
                title: "Daily Reflections",
                body: "Thoughtful prompts for spiritual journaling and deeper contemplation.",
              },
              {
                icon: MessageCircle,
                color: "#8E9878",
                bg: "#8E9878",
                title: "Faith Q&A",
                body: "Ask questions about Islamic concepts, practices, and spirituality.",
              },
              {
                icon: Users,
                color: "#C9796A",
                bg: "#C9796A",
                title: "Sisterly Support",
                body: "Encouragement and companionship for life\u2019s challenges and joys.",
              },
            ].map(({ icon: Icon, color, bg, title, body }) => (
              <div
                key={title}
                className="group bg-[#F7F2EB] border border-[#8E9878]/20 rounded-2xl p-8 text-center hover:shadow-md transition-all duration-300"
              >
                <div
                  className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl mb-5 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: `${bg}18` }}
                >
                  <Icon className="h-7 w-7" style={{ color }} />
                </div>
                <h3 className="font-serif text-xl text-[#2C2926] mb-3">{title}</h3>
                <p className="text-sm text-[#2C2926]/60 leading-relaxed">{body}</p>
              </div>
            ))}
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
      <section className="py-16 bg-[#F2ECE4] border-t border-[#8E9878]/20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="bg-[#F7F2EB] border border-[#8E9878]/20 rounded-xl p-6 text-center">
            <p className="text-xs text-[#2C2926]/60 leading-relaxed">
              <span className="font-medium text-[#2C2926]">Important:</span> Amina is an AI
              companion designed to support your spiritual journey. For detailed religious rulings
              (fatwas), please consult qualified scholars. For mental health concerns, please seek
              professional support. Amina is not a replacement for human connection, scholarly
              guidance, or professional care.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
