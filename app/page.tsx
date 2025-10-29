import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Packages } from "@/components/packages"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <Features />
      <Packages />
      <Contact />
      {/* Removed Process, Gallery, and Footer components as per updates */}
    </main>
  )
}
