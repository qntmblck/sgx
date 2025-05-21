export default function Telemetria() {
  return (
    <section id="telemetria" className="py-20 bg-gray-100 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-8">
          Plataforma de Telemetría Avanzada
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-10">
          Nuestra solución de telemetría en la nube permite supervisar su flota en tiempo real, mejorar la seguridad operativa y reducir costos de forma significativa.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left text-gray-800">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Monitoreo de Baterías</h3>
            <p>Visualice en tiempo real el nivel de carga, temperatura y salud de cada batería para prevenir fallos y extender la vida útil.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Alertas Inmediatas</h3>
            <p>Reciba notificaciones automáticas ante cualquier anomalía como sobrecalentamiento, pérdida de energía o fallos críticos.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Reportes Analíticos</h3>
            <p>Acceda a informes detallados de rendimiento, consumo, conducción y mantenimiento para optimizar su operación diaria.</p>
          </div>
        </div>

        <p className="mt-12 text-md text-gray-600 max-w-4xl mx-auto">
          La plataforma no requiere servidores físicos, se adapta al crecimiento de su operación y ofrece actualizaciones automáticas con seguridad robusta y soporte 24/7.
        </p>
      </div>
    </section>
  )
}
