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
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {productos.map((prod, idx) => (
            <div
              key={idx}
              className={`bg-white border border-gray-200 p-6 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300 animate-fade-up delay-[${idx * 200}ms]`}
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-lime-700">{prod.titulo}</h3>
                <span className="text-2xl">{prod.icono}</span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">{prod.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
