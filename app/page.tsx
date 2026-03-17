import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { CircleSection } from "@/components/circle-section"
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
      <AboutSection />
      <CircleSection />
      <MuslimTexasSection />
      <PartnershipsSection />
      <VisionSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
