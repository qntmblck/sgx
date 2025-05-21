export default function Productos() {
  return (
    <section id="productos" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-10">
          Gama de Productos ANKAI
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          SGX ofrece una línea completa de buses eléctricos ANKAI diseñados para adaptarse a diversas necesidades del transporte urbano, interurbano e industrial. Cada modelo incorpora tecnología de vanguardia y eficiencia energética.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-gray-100 rounded-lg shadow hover:shadow-lg transition p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Buses Urbanos 12m</h3>
            <p>Ideales para rutas de alto volumen. Capacidad para 90 pasajeros, piso bajo, autonomía extendida y sistemas de seguridad avanzada.</p>
          </div>
          <div className="bg-gray-100 rounded-lg shadow hover:shadow-lg transition p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Midibuses 8–9m</h3>
            <p>Perfectos para transporte en minería e industria. Compactos, resistentes y con autonomía de hasta 320 km.</p>
          </div>
          <div className="bg-gray-100 rounded-lg shadow hover:shadow-lg transition p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Minibuses 6m</h3>
            <p>Solución ideal para recorridos locales o zonas de difícil acceso. Tamaño reducido, gran maniobrabilidad y cero emisiones.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
