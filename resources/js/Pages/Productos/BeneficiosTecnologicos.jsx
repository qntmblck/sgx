export default function BeneficiosTecnologicos() {
  const beneficios = [
    {
      titulo: 'Chasis Monocasco',
      descripcion: 'Inspirado en la industria aeronáutica, estructura 3 a 6 veces más resistente que buses convencionales. Reducción de peso del 8%.',
      icono: '🛡️'
    },
    {
      titulo: 'Controlador Integrado 5 en 1',
      descripcion: 'Agrupa control de motor, dirección, aire, distribución y CC. Mejora eficiencia, seguridad y reduce fallas.',
      icono: '🧠'
    },
    {
      titulo: 'Protección Total IP67 + EMC',
      descripcion: 'Sistema sellado contra agua, fuego y descargas. Incluye detección de humo, extinción y monitoreo térmico en carga.',
      icono: '🧯'
    },
    {
      titulo: 'Batería Fosfato Hierro-Litio',
      descripcion: '153 Wh/kg. Mayor densidad energética, menor peso (-800 kg) y duración extendida.',
      icono: '🔋'
    },
    {
      titulo: 'Sistemas de Asistencia ADAS',
      descripcion: 'Incluye alerta de peatones, colisión, cambio de carril, distancia y frenado regenerativo inteligente.',
      icono: '🚨'
    },
    {
      titulo: 'Dirección & Inflado con Imán Permanente',
      descripcion: 'Alta eficiencia y bajo ruido. Mejoran la experiencia de conducción y reducen consumo.',
      icono: '🧲'
    },
    {
      titulo: 'Telemetría y Diagnóstico Remoto',
      descripcion: 'Conectividad total con análisis en tiempo real. Escaneo de parámetros y alertas por red móvil.',
      icono: '📡'
    },
    {
      titulo: 'Diseño Liviano de Estructura',
      descripcion: 'Acero Baosteel 16mn + carrocería optimizada. Reducción de 200kg con mayor rigidez.',
      icono: '🏗️'
    },
    {
      titulo: 'Zona de Conductor Inteligente',
      descripcion: 'Pantalla táctil, ergonomía avanzada y reducción de fatiga. Interfaz optimizada para operación continua.',
      icono: '🧑‍✈️'
    }
  ]

  return (
    <section id="beneficios" className="py-20 bg-gradient-to-r from-lime-50 via-white to-lime-100 px-4 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Beneficios Tecnológicos</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          ANKAI impulsa la movilidad sustentable con buses seguros, inteligentes y 100% eléctricos. Su ingeniería avanzada redefine los estándares del transporte urbano y regional.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {beneficios.map((item, idx) => (
            <div
              key={idx}
              className="transition transform hover:-translate-y-1 hover:shadow-xl bg-white p-6 rounded-lg shadow text-left"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-800">{item.titulo}</h3>
                <span className="text-2xl">{item.icono}</span>
              </div>
              <p className="text-sm text-gray-600">{item.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
