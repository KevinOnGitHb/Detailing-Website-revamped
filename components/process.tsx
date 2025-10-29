import { Search, Sparkles, Shield, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Inspection",
    description: "Thorough assessment of your vehicle's condition and detailing needs",
  },
  {
    icon: Sparkles,
    number: "02",
    title: "Deep Clean",
    description: "Meticulous cleaning, decontamination, and paint correction",
  },
  {
    icon: Shield,
    number: "03",
    title: "Protection",
    description: "Application of premium ceramic coating for lasting protection",
  },
  {
    icon: CheckCircle,
    number: "04",
    title: "Final Touch",
    description: "Quality check and finishing touches for perfection",
  },
]

export function Process() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Our Process</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            A systematic approach to delivering exceptional results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-primary/20" />
              )}
              <div className="relative space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary text-primary-foreground font-bold text-xl">
                  {step.number}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <step.icon className="h-5 w-5 text-primary" />
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
