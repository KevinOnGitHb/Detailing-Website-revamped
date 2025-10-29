import { Sparkles, Wrench, Car, Droplets } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "Interior Detailing",
    description: "Vacuum, shampoo, leather treatment, and odor removal. Your interior will feel brand new.",
  },
  {
    icon: Droplets,
    title: "Exterior Wash & Wax",
    description: "Thorough hand wash and protective wax layer for a lasting shine.",
  },
  {
    icon: Wrench,
    title: "Engine Bay Detail",
    description: "Degrease and dress your engine bay to a clean, like-new appearance.",
  },
  {
    icon: Car,
    title: "Mobile Detailing",
    description: "We come to you! Book a service at your home or office!",
  },
]

export function Features() {
  return (
    <section className="relative py-32 bg-black overflow-hidden">
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
            OUR{" "}
            <span
              className="bg-gradient-to-r from-[#00e594] to-[#00bfa5] bg-clip-text text-transparent"
              style={{
                textShadow: "0 0 40px rgba(0, 229, 148, 0.3)",
              }}
            >
              SERVICES
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto text-balance">
            We provide a wide range of detailing options to meet your needs. Choose the services that best suit your
            car's condition and your personal preferences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-8 rounded-2xl bg-gradient-to-b from-gray-900/50 to-black/50 border border-gray-800 hover:border-[#00e594]/50 transition-all duration-300"
              style={{
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
              }}
            >
              {/* Glow effect on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "radial-gradient(circle at center, rgba(0, 229, 148, 0.1), transparent 70%)",
                }}
              />

              <div className="relative space-y-4">
                <div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-xl"
                  style={{
                    backgroundColor: "rgba(0, 229, 148, 0.1)",
                    boxShadow: "0 0 20px rgba(0, 229, 148, 0.2)",
                  }}
                >
                  <feature.icon className="h-8 w-8" style={{ color: "#00e594" }} />
                </div>
                <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
