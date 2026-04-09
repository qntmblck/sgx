export default function CatalogHero() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/img/productos.webp')" }}
    >
      <div className="absolute inset-0 bg-slate-950/60" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 pt-24 pb-14 sm:pt-28 sm:pb-20 text-white">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide">
            SGX Chile · Catálogo 2026
          </span>

          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Portafolio de Buses Eléctricos Ankai
          </h1>

          <p className="mt-5 max-w-2xl text-sm sm:text-base lg:text-lg text-white/85 leading-relaxed">
            Explora la oferta SGX Chile & Ankai Bus para toda la gama de servicios de transporte de pasajeros: Serie E9 para transporte público urbano tipo RED y double deck turístico,
            Serie A6 para recorridos mayores y servicios industriales y minería, y Serie K7 para transporte colectivo de pasajeros con aplicaciones urbanas, escolares y corporativas/ejecutivas.
          </p>
        </div>
      </div>
    </section>
  )
}
