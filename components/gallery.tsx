export function Gallery() {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Our Work</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            See the transformation we deliver with every detail
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
            <img
              src="/luxury-car-exterior-detail-close-up.jpg"
              alt="Detailed car exterior"
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <p className="text-white font-semibold">Exterior Detail</p>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
            <img
              src="/ceramic-coating-water-beading-on-car-paint.jpg"
              alt="Ceramic coating water beading"
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <p className="text-white font-semibold">Ceramic Coating</p>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
            <img
              src="/luxury-car-interior-leather-seats-detailed.jpg"
              alt="Interior detailing"
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <p className="text-white font-semibold">Interior Detail</p>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
            <img
              src="/car-wheel-and-tire-detailing-close-up.jpg"
              alt="Wheel detailing"
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <p className="text-white font-semibold">Wheel Detail</p>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
            <img
              src="/car-paint-correction-polishing-process.jpg"
              alt="Paint correction"
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <p className="text-white font-semibold">Paint Correction</p>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
            <img
              src="/glossy-car-paint-reflection-after-ceramic-coating.jpg"
              alt="Final results"
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <p className="text-white font-semibold">Final Results</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
