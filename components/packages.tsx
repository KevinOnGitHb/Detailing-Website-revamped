import { Button } from "./ui/button"
import { Check } from "lucide-react"

const packages = [
  {
    name: "Fresh Basic",
    price: "$90",
    priceDetail: "Sedan / $110 SUV/Truck",
    description: "Perfect for maintenance and upkeep",
    features: [
      "Foam Cannon Hand Wash (Two Bucket Method)",
      "Wheel & Tire Cleaning + Dressing",
      "Bug & Grime Removal",
      "Spray Wax Protection",
      "Basic Interior Vacuum (Floors & Seats)",
      "Interior Wipe Down (Dash, Panels)",
      "Interior & Exterior Glass Cleaned",
    ],
    badge: "Ideal for bi-weekly/monthly maintenance",
    color: "#10b981",
  },
  {
    name: "Fresh Plus",
    price: "$180",
    priceDetail: "Sedan / $210 SUV/Truck",
    description: "For cars that need deeper attention inside & out",
    features: [
      "Everything in Fresh Basic, plus:",
      "Clay Towel Decontamination",
      "Iron Fallout Removal",
      "Deep Door Jamb Cleaning",
      "Exhaust Tip Polishing",
      "Full Interior Vacuum (Crevices, Under Seats)",
      "Carpet & Seat Shampoo (Extractor + Drill Brush)",
      "Leather Cleaning & Conditioning",
      "Steam Cleaning (Vents, Trim)",
    ],
    badge: "Leaves your car feeling truly refreshed",
    popular: true,
    color: "#f97316",
  },
  {
    name: "Gloss Pro Package",
    price: "$250",
    priceDetail: "Sedan / $280 SUV/Truck",
    description: "Enhance your paint and interior appearance",
    features: [
      "Everything in Fresh Plus, plus:",
      "One-Step Paint Polish (Gloss Enhancement)",
      "High-Quality Microfiber & Polish Pads",
      "Extended Clay & Iron Prep",
      "Deeper Carpet Extraction",
      "Final Spray Wax Protection",
    ],
    badge: "Designed to make your car pop again",
    color: "#ec4899",
  },
  {
    name: "Signature Ceramic",
    price: "$500+",
    priceDetail: "Starting price",
    description: "Paint perfected. Long-lasting protection applied",
    features: [
      "Everything in Gloss Pro, plus:",
      "Full 2-Step Paint Correction (Cut + Polish)",
      "Panel Wipedown with CarPro Eraser",
      "CQuartz UK 3.0 Ceramic Coating Applied",
      "Optional Coating for Wheels + Glass",
      "Final Detail & Inspection",
    ],
    badge: "Up to 2 years of paint protection",
    premium: true,
    color: "#3b82f6",
  },
]

const addOns = [
  { name: "Engine Bay Detail", price: "$40" },
  { name: "Headlight Restoration", price: "$75" },
  { name: "Odor Neutralization", price: "$60" },
  { name: "Ozone Treatment", price: "$60" },
  { name: "Extra Duty Vehicle", price: "$20-$50" },
  { name: "3-Row or Oversized Vehicle", price: "+$30" },
  { name: "Glass or Wheel Ceramic Coating", price: "+$50 each" },
]

export function Packages() {
  return (
    <section id="packages" className="relative py-32 bg-black overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 229, 148, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(0, 229, 148, 0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
            animation: "grid-move 20s linear infinite",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 space-y-6">
          <h2 className="text-5xl md:text-7xl font-bold text-white">
            DETAILING{" "}
            <span
              className="bg-gradient-to-r from-[#00e594] to-[#00bfa5] bg-clip-text text-transparent"
              style={{
                textShadow: "0 0 40px rgba(0, 229, 148, 0.3)",
              }}
            >
              PACKAGES
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto text-balance">
            Choose the perfect package for your vehicle. All services include our satisfaction guarantee.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1400px] mx-auto mb-16">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`group relative p-6 rounded-2xl bg-gradient-to-b from-gray-900/80 to-black/80 border transition-all duration-300 ${
                pkg.popular || pkg.premium ? "scale-105 border-[#00e594]" : "border-gray-800 hover:border-[#00e594]/50"
              }`}
              style={
                pkg.popular || pkg.premium
                  ? {
                      boxShadow: "0 0 40px rgba(0, 229, 148, 0.3), 0 4px 20px rgba(0, 0, 0, 0.5)",
                    }
                  : {
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
                    }
              }
            >
              {(pkg.popular || pkg.premium) && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold text-black whitespace-nowrap"
                  style={{
                    backgroundColor: "#00e594",
                    boxShadow: "0 0 20px rgba(0, 229, 148, 0.5)",
                  }}
                >
                  {pkg.popular ? "MOST POPULAR" : "PREMIUM"}
                </div>
              )}

              {/* Glow effect on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "radial-gradient(circle at center, rgba(0, 229, 148, 0.1), transparent 70%)",
                }}
              />

              <div className="relative space-y-4">
                <div className="h-1 w-16 rounded-full mb-4" style={{ backgroundColor: pkg.color }} />

                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{pkg.name}</h3>
                  <p className="text-sm text-gray-400 mb-2">{pkg.description}</p>
                </div>

                <div>
                  <span className="text-3xl md:text-4xl font-bold text-white">{pkg.price}</span>
                  <p className="text-xs text-gray-500 mt-1">{pkg.priceDetail}</p>
                </div>

                <ul className="space-y-2.5 py-4 min-h-[280px]">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="h-4 w-4 shrink-0 mt-0.5" style={{ color: "#00e594" }} />
                      <span className="text-sm text-gray-300 leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>

                {pkg.badge && (
                  <div className="py-3 px-4 rounded-lg bg-[#00e594]/10 border border-[#00e594]/20">
                    <p className="text-xs text-[#00e594] font-semibold text-center">{pkg.badge}</p>
                  </div>
                )}

                <Button
                  className={`w-full font-bold text-sm py-5 rounded-xl transition-all duration-300 ${
                    pkg.popular || pkg.premium
                      ? "text-black hover:scale-105"
                      : "bg-transparent text-[#00e594] border-2 hover:bg-[#00e594] hover:text-black"
                  }`}
                  style={
                    pkg.popular || pkg.premium
                      ? {
                          backgroundColor: "#00e594",
                          boxShadow: "0 0 20px rgba(0, 229, 148, 0.4)",
                        }
                      : {
                          borderColor: "#00e594",
                        }
                  }
                >
                  <a href="#contact">BOOK NOW</a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-3">
              CUSTOMIZE WITH{" "}
              <span
                className="bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] bg-clip-text text-transparent"
                style={{
                  textShadow: "0 0 30px rgba(251, 191, 36, 0.3)",
                }}
              >
                ADD-ONS
              </span>
            </h3>
            <p className="text-gray-400 text-lg">Enhance any package with these premium extras</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {addOns.map((addon, idx) => (
              <div
                key={addon.name}
                className="group relative p-5 rounded-xl bg-gradient-to-br from-gray-900/60 to-black/60 border border-gray-800 hover:border-[#fbbf24]/50 transition-all duration-300"
                style={{
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.4)",
                }}
              >
                {/* Glow effect on hover */}
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "radial-gradient(circle at center, rgba(251, 191, 36, 0.08), transparent 70%)",
                  }}
                />

                <div className="relative">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-1.5 w-8 rounded-full bg-[#fbbf24]" />
                    <span className="text-xs font-bold text-[#fbbf24]">ADD-ON</span>
                  </div>
                  <h4 className="text-white font-semibold text-base mb-3 leading-tight min-h-[40px]">{addon.name}</h4>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-[#fbbf24]">{addon.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
