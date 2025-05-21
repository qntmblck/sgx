export default function ProductosDestacados() {
  const productos = [
    {
      titulo: 'Buses Urbanos 12m',
      descripcion:
        'Piso bajo, alta capacidad (hasta 90 pasajeros) y autonomía superior. Ideales para redes de transporte público en grandes ciudades.',
      icono: '🚍'
    },
    {
      titulo: 'Midibuses 8–10m',
      descripcion:
        'Soluciones versátiles para minería, industrias y municipios. Excelente rendimiento en rutas medias y difíciles.',
      icono: '🚐'
    },
    {
      titulo: 'Minibuses 6–7m',
      descripcion:
        'Modelos ágiles, compactos y eficientes. Perfectos para aeropuertos, sectores turísticos y operaciones locales.',
      icono: '🚎'
    }
  ]

  return (
    <section id="productos" className="py-24 px-4 bg-gradient-to-br from-white via-lime-50 to-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Gama de Productos ANKAI</h2>
        <p className="text-gray-700 text-base sm:text-lg max-w-3xl mx-auto mb-14">
          ANKAI ofrece soluciones inteligentes y confiables en electromovilidad: desde minibuses urbanos hasta plataformas de 12 metros con tecnología de clase mundial, chasis monocasco y eficiencia certificada.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {productos.map((prod, idx) => (
            <div
              key={idx}
              className={`relative p-8 overflow-hidden rounded-2xl shadow-lg border border-gray-200 backdrop-blur-md bg-white/80 transition-transform hover:-translate-y-1 duration-300 animate-fade-up delay-[${idx * 150}ms]`}
            >
              {/* FONDO DIFUMINADO DETRÁS */}
              <div className="absolute inset-0 z-0">
                <div className="w-48 h-48 bg-gradient-to-br from-lime-300 to-teal-300 opacity-30 rounded-full blur-2xl animate-pulse absolute -top-12 -left-10" />
                <div className="w-32 h-32 bg-gradient-to-br from-lime-200 to-green-300 opacity-20 rounded-full blur-2xl absolute bottom-0 right-0" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{prod.titulo}</h3>
                  <span className="text-3xl">{prod.icono}</span>
                </div>
                <hr className="my-4 border-lime-100" />
                <p className="text-sm text-gray-700 leading-relaxed">{prod.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
