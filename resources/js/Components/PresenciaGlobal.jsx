export default function PresenciaGlobalCarousel() {
  const regiones = [
    {
      icon: '🇨🇳',
      nombre: 'Asia',
      resumen:
        'Base de desarrollo con más de 50 años de innovación. Principal proveedor de flotas urbanas en China, Corea y Medio Oriente.'
    },
    {
      icon: '🇪🇺',
      nombre: 'Europa',
      resumen:
        'Buses turísticos y eléctricos operando en Alemania, Rusia y países del Báltico. Cumplimiento normativo Euro VI, E-Mark y GOST.'
    },
    {
      icon: '🌎',
      nombre: 'Latinoamérica',
      resumen:
        'Proyectos activos en México (800 buses GNC), Chile (F7 ejecutivos) y Uruguay (eléctricos urbanos). Región en expansión.'
    },
    {
      icon: '🇿🇦',
      nombre: 'África',
      resumen:
        'Flotas interurbanas y turismo en Sudáfrica, Egipto y Ghana. Adaptación a clima extremo y caminos rurales.'
    },
    {
      icon: '🇺🇸',
      nombre: 'Estados Unidos',
      resumen:
        'Proveedores homologados bajo certificación DOT. Iniciativas de electrificación en rutas privadas y escolares.'
    }
  ]

  const tarjetas = [...regiones, ...regiones] // loop duplicado

  const servicios = [
    'Diseño y manufactura de buses urbanos, ejecutivos, turísticos y de nueva energía.',
    'Laboratorios de innovación en baterías, inteligencia artificial y sistemas ADAS.',
    'Asistencia posventa internacional: soporte técnico, repuestos y capacitación.',
    'Certificaciones internacionales: ISO 9001, CCC, DOT, E-Mark, GOST, GSO.'
  ]

  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="relative">
        <div
          className="flex w-max animate-carousel gap-6"
          style={{ animationDuration: '40s' }}
        >
          {tarjetas.map((r, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[370px] bg-gradient-to-br from-lime-50 to-white border border-gray-200 rounded-xl p-6 shadow-md hover:scale-[1.01] transition duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold text-gray-900">{r.nombre}</h3>
                <span className="text-2xl">{r.icon}</span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">{r.resumen}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sección de puntos destacados en layout 2x2 */}
      <div className="mt-16 max-w-5xl mx-auto bg-white border border-lime-200 rounded-xl px-6 py-10 text-sm text-gray-700 leading-relaxed shadow-sm">
        <h3 className="text-center font-semibold text-lime-700 text-base mb-8">
          Servicios Destacados de ANKAI a Nivel Mundial
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
          {servicios.map((item, idx) => (
            <div key={idx} className="flex items-start space-x-2">
              <span className="text-lime-700 text-base mt-1">•</span>
              <p className="text-gray-700 text-sm">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
