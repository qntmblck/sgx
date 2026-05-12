export default function CatalogHero() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/img/productos.webp')" }}
    >
      <div className="absolute inset-0 bg-slate-950/60" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-24 pb-8 text-white sm:px-6 sm:pt-28 sm:pb-10">
        <div className="max-w-4xl">
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-white/80 backdrop-blur-sm">
            SGX Chile · Catálogo 2026
          </span>

          <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight drop-shadow-lg sm:text-5xl lg:text-6xl">
            Portafolio de Buses Eléctricos Ankai
          </h1>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-white/90 sm:text-base lg:text-lg">
            Explora la oferta SGX Chile & Ankai Bus para toda la gama de servicios de transporte de pasajeros:

            Serie E9 para transporte público urbano tipo RED y double deck turístico,
            Serie A6 para recorridos mayores y servicios industriales y minería,
            Serie K7 para transporte colectivo de pasajeros con aplicaciones urbanas, escolares y corporativas/ejecutivas.

            Próximos productos: E9 eléctrico de 18 metros, E60 eléctrico para aplicaciones especiales.
          </p>
        </div>
      </div>
    </section>
  )
}
