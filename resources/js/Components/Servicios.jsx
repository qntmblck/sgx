export default function Servicios() {
  return (
    <section id="servicios" className="py-20 bg-gray-100 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-8">
          Servicios Especializados
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          En SGX, nos dedicamos exclusivamente a soluciones de movilidad eléctrica. Esta especialización nos permite brindar un enfoque total en excelencia operativa y tecnológica.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left text-gray-800">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Representación Exclusiva</h3>
            <p>Representamos en Chile a ANKAI, una de las marcas más reconocidas a nivel mundial en buses eléctricos de alto estándar.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Telemetría Integrada</h3>
            <p>Implementamos plataformas en la nube para gestión de flotas, sin necesidad de infraestructura adicional.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Asesoría Técnica</h3>
            <p>Apoyamos cada proyecto con acompañamiento experto y soporte continuo para garantizar el éxito operativo.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
