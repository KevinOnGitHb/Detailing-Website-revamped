"use client"
import { BeforeAfterSlider } from "./before-after-slider"
import { Button } from "./ui/button"
import { Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-[#00e594]/5" />

      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0 animate-pulse"
          style={{
            backgroundImage: `linear-gradient(#00e594 1px, transparent 1px), linear-gradient(90deg, #00e594 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
            animationDuration: "4s",
          }}
        />
      </div>

      <div className="relative container mx-auto px-4 py-6">
        <header className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <Sparkles className="h-7 w-7" style={{ color: "#00e594" }} />
            <span className="text-xl font-bold tracking-tight">FRESH LABS DETAILING</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#packages" className="text-sm font-medium hover:text-[#00e594] transition-colors tracking-wide">
              PACKAGES
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-[#00e594] transition-colors tracking-wide">
              CONTACT
            </a>
          </nav>
        </header>

        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-150px)] gap-16">
          {/* Hero Text - More dramatic and bold */}
          <div className="text-center space-y-6 max-w-5xl">
            <div className="inline-block px-4 py-2 rounded-full border border-[#00e594]/30 bg-[#00e594]/5 mb-4">
              <span className="text-sm font-semibold tracking-widest" style={{ color: "#00e594" }}>
                PREMIUM CERAMIC COATING
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter text-balance">
              TRANSFORM
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#00e594]">YOUR RIDE</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light tracking-wide">
              Professional detailing that brings out the true beauty of your vehicle
            </p>
          </div>

          <div className="w-full max-w-7xl px-4">
            <BeforeAfterSlider />
          </div>

          <div className="flex flex-wrap gap-6 justify-center">
            <Button
              size="lg"
              className="text-black font-bold hover:opacity-90 transition-all px-8 py-6 text-base tracking-wide rounded-full"
              style={{ backgroundColor: "#00e594" }}
            >
              <a href="#packages">VIEW PACKAGES</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#00e594] text-[#00e594] hover:bg-[#00e594] hover:text-black bg-transparent font-bold px-8 py-6 text-base tracking-wide rounded-full transition-all"
            >
              <a href="#contact">GET A QUOTE</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
