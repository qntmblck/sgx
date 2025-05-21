export default function ServiciosDestacados() {
  return (
    <section id="servicios" className="py-20 bg-gray-100 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-8">Servicios Estratégicos</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          Impulsamos modelos de transporte sustentable mediante soluciones técnicas de electromovilidad con foco en responsabilidad pública, eficiencia, transparencia y colaboración.
        </p>
        <div className="grid md:grid-cols-3 gap-8 text-left text-gray-800">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Representación Oficial</h3>
            <p>Somos el socio estratégico de ANKAI en Chile, marca reconocida internacionalmente por su liderazgo en buses eléctricos de alto estándar.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Telemetría Inteligente</h3>
            <p>Gestión de flotas en la nube: alertas, reportes analíticos y monitoreo de baterías en tiempo real sin infraestructura adicional.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Soporte Técnico</h3>
            <p>Asesoría técnica continua, capacitaciones y postventa respaldada por nuestros estándares de calidad y atención personalizada.</p>
          </div>
        </div>
      </div>
    </section>
  )
}