export default function FortalezasAnkai() {
  const fortalezas = [
    {
      titulo: 'Estructura Monocasco',
      descripcion: 'Un chasis unificado que mejora la resistencia estructural, reduce el peso y optimiza el consumo energético.',
      icono: '🛡️'
    },
    {
      titulo: 'Protección Electroforética',
      descripcion: 'Recubrimiento avanzado en toda la carrocería que extiende la vida útil y soporta ambientes hostiles.',
      icono: '🧪'
    },
    {
      titulo: 'Energías Inteligentes',
      descripcion: 'Tecnologías adaptadas: eléctrico, híbrido, GNC e hidrógeno, según la necesidad operativa.',
      icono: '⚡'
    }
  ]

  return (
    <section id="fortalezas" className="relative py-24 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-lime-100 to-white -skew-y-2 transform" />
      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center animate-fade-up">
          Tecnología y Seguridad ANKAI
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {fortalezas.map((item, i) => (
            <div
              key={i}
              className="relative z-10 bg-white p-8 rounded-xl shadow-xl transform hover:-translate-y-2 transition duration-300 animate-fade-up delay-150"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-lime-700">{item.titulo}</h3>
                <div className="text-2xl">{item.icono}</div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{item.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
