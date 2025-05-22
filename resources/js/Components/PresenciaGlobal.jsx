export default function PresenciaGlobal() {
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

  const tarjetas = [...regiones, ...regiones]

  const servicios = [
    'Diseño y manufactura de buses urbanos, ejecutivos, turísticos y de nueva energía.',
    'Laboratorios de innovación en baterías, inteligencia artificial y sistemas ADAS.',
    'Asistencia posventa internacional: soporte técnico, repuestos y capacitación.',
    'Certificaciones internacionales: ISO 9001, CCC, DOT, E-Mark, GOST, GSO.'
  ]

  const fortalezas = [
    {
      titulo: 'Chasis Monocasco',
      descripcion:
        'Estructura reforzada inspirada en la industria aeronáutica. Mejora la seguridad, reduce peso y maximiza la eficiencia energética.',
      icono: '🛡️'
    },
    {
      titulo: 'Protección Electroforética',
      descripcion:
        'Recubrimiento anticorrosivo completo en toda la carrocería mediante inmersión total. Ideal para climas extremos.',
      icono: '🎨'
    },
    {
      titulo: 'Energías Inteligentes',
      descripcion:
        'Líneas adaptadas a tecnologías eléctricas, híbridas, GNC e hidrógeno según requerimientos regionales.',
      icono: '⚡'
    }
  ]

  return (
    <section className="bg-white py-16 overflow-hidden">
      {/* Carrusel de regiones */}
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



    </section>
  )
}
