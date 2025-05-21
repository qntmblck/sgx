export default function ServiciosDestacados() {
  return (
    <section id="servicios" className="py-20 bg-gray-50 px-4 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Servicios Estratégicos</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          SGX entrega soluciones complementarias a la electromovilidad, incluyendo herramientas de monitoreo, asesoría técnica y soporte posventa respaldado por experiencia internacional.
        </p>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition border border-lime-100">
            <h3 className="text-lg font-bold text-lime-700 mb-2">Asesoría Técnica</h3>
            <p>Diagnóstico, selección de flota, y acompañamiento durante la etapa de integración de buses eléctricos.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition border border-lime-100">
            <h3 className="text-lg font-bold text-lime-700 mb-2">Telemetría Integrada</h3>
            <p>Herramientas en la nube para monitorear consumo energético, autonomía y alertas en tiempo real.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition border border-lime-100">
            <h3 className="text-lg font-bold text-lime-700 mb-2">Soporte y Postventa</h3>
            <p>Compromiso local con servicio técnico, repuestos disponibles y capacitación operativa continua.</p>
          </div>
        </div>
      </div>
    </section>
  )
}