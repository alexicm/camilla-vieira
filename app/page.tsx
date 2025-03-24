import HeroSection from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <HeroSection />
      <ServicesSection />
    </main>
  )
}

