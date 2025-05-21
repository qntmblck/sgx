export default function Electromovilidad() {
  return (
    <section id="electromovilidad" className="bg-gray-100 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-6">
          Electromovilidad en Chile
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-6">
          Chile lidera la adopción de buses eléctricos en Latinoamérica, con más de <strong>2.480 unidades</strong> en operación y una meta nacional de descarbonizar el 100% del transporte público al año 2035.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Gracias a la alta autonomía y eficiencia de ANKAI, SGX impulsa soluciones de movilidad que:
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10 text-left text-gray-800">
          <div className="bg-white shadow p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Reducen costos operativos</h3>
            <p>Menor mantenimiento, mayor eficiencia energética y mejor control de flota.</p>
          </div>
          <div className="bg-white shadow p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Mejoran el servicio</h3>
            <p>Vehículos silenciosos, modernos y conectados para una experiencia superior al usuario.</p>
          </div>
          <div className="bg-white shadow p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-blue-800">Cumplen normativas</h3>
            <p>Compatibles con los estándares ambientales más exigentes a nivel nacional e internacional.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
