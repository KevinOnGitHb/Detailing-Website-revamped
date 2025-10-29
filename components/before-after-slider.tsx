"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = (x / rect.width) * 100

    setSliderPosition(Math.min(Math.max(percentage, 0), 100))
  }

  const handleMouseDown = () => setIsDragging(true)
  const handleMouseUp = () => setIsDragging(false)

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return
    handleMove(e.clientX)
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return
    handleMove(e.touches[0].clientX)
  }

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove)
      window.addEventListener("mouseup", handleMouseUp)
      window.addEventListener("touchmove", handleTouchMove)
      window.addEventListener("touchend", handleMouseUp)
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("touchend", handleMouseUp)
    }
  }, [isDragging])

  return (
    <div className="relative rounded-2xl overflow-hidden border border-[#00e594]/20 shadow-2xl shadow-[#00e594]/10">
      <div
        ref={containerRef}
        className="relative w-full aspect-[16/9] cursor-ew-resize select-none bg-black"
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="/images/design-mode/dirty.png.jpeg"
            alt="Before detailing"
            className="w-full h-full object-contain scale-x-[-1]"
            draggable={false}
          />
          <div className="absolute top-8 left-8 bg-black/60 text-white px-6 py-3 rounded-full font-black text-xs tracking-widest backdrop-blur-md border border-white/10">
            BEFORE
          </div>
        </div>

        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
        >
          <img
            src="/images/design-mode/clean.png.jpeg"
            alt="After detailing with ceramic coating"
            className="w-full h-full object-contain scale-x-[-1]"
            draggable={false}
          />
          <div
            className="absolute top-8 right-8 text-black px-6 py-3 rounded-full font-black text-xs tracking-widest backdrop-blur-md shadow-lg"
            style={{
              backgroundColor: "#00e594",
              boxShadow: "0 0 30px rgba(0, 229, 148, 0.4)",
            }}
          >
            AFTER
          </div>
        </div>

        <div
          className="absolute top-0 bottom-0 w-1 cursor-ew-resize"
          style={{
            left: `${sliderPosition}%`,
            backgroundColor: "#00e594",
            boxShadow: "0 0 30px rgba(0, 229, 148, 0.6), 0 0 60px rgba(0, 229, 148, 0.3)",
          }}
        >
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center border-4 border-black transition-transform hover:scale-110"
            style={{
              backgroundColor: "#00e594",
              boxShadow: "0 0 40px rgba(0, 229, 148, 0.8), 0 0 80px rgba(0, 229, 148, 0.4)",
            }}
          >
            <ChevronLeft className="h-6 w-6 text-black absolute left-2" strokeWidth={3} />
            <ChevronRight className="h-6 w-6 text-black absolute right-2" strokeWidth={3} />
          </div>
        </div>
      </div>
    </div>
  )
}
