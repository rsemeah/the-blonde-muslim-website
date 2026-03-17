import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { PhilanthropySection } from "@/components/philanthropy-section"
import { MuslimTexasSection } from "@/components/muslim-texas-section"
import { PartnershipsSection } from "@/components/partnerships-section"
import { VisionSection } from "@/components/vision-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <PhilanthropySection />
      <MuslimTexasSection />
      <PartnershipsSection />
      <VisionSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
