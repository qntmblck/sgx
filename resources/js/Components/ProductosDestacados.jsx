export default function ProductosDestacados() {
  return (
    <section id="productos" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-10">Gama de Productos ANKAI</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          Líderes en innovación y rendimiento, nuestros modelos integran tecnología de clase mundial, estructura monocasco, eficiencia energética y seguridad avanzada.
        </p>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-gray-100 rounded-lg shadow hover:shadow-lg transition p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Buses Urbanos 12m</h3>
            <p>Con piso bajo, capacidad para 90 pasajeros y autonomía extendida. Perfectos para flotas de alto volumen con eficiencia y confort.</p>
          </div>
          <div className="bg-gray-100 rounded-lg shadow hover:shadow-lg transition p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Midibuses 8–9m</h3>
            <p>Robustos y compactos, ideales para minería e industria. Autonomía de hasta 320 km y diseño resistente a condiciones adversas.</p>
          </div>
          <div className="bg-gray-100 rounded-lg shadow hover:shadow-lg transition p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Minibuses 6m</h3>
            <p>Gran maniobrabilidad y tamaño reducido, ideales para comunas, aeropuertos o entornos urbanos estrechos.</p>
          </div>
        </div>
      </div>
    </section>
  )
}