export default function ProductosDestacados() {
  const lineas = [
    {
      titulo: 'Buses Urbanos 12m',
      descripcion: 'Piso bajo, alta capacidad (hasta 90 pasajeros), autonomía superior y chasis monocasco. Perfectos para grandes ciudades.',
      icono: '🚌'
    },
    {
      titulo: 'Midibuses 8–10m',
      descripcion: 'Soluciones versátiles para minería, industrias y municipios. Rendimiento robusto en rutas medias.',
      icono: '🚐'
    },
    {
      titulo: 'Minibuses 6–7m',
      descripcion: 'Modelos ágiles y compactos. Ideales para transporte local, hotelero o turístico.',
      icono: '🚎'
    }
  ]

  return (
    <section id="productos" className="py-24 px-4 bg-gradient-to-br from-white via-lime-50 to-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Gama de Productos ANKAI</h2>
        <p className="text-gray-700 text-base sm:text-lg max-w-3xl mx-auto mb-14">
          ANKAI ofrece soluciones inteligentes y confiables: desde minibuses urbanos hasta plataformas de 12 metros con tecnología de clase mundial.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {lineas.map((prod, idx) => (
            <div key={idx} className="relative p-8 rounded-2xl shadow-lg border border-gray-200 bg-white/80 hover:-translate-y-1 transition duration-300">
              <div className="absolute inset-0 z-0">
                <div className="w-48 h-48 bg-gradient-to-br from-lime-300 to-teal-300 opacity-30 rounded-full blur-2xl absolute -top-12 -left-10" />
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

