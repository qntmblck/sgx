export default function BeneficiosTecnologicos() {
  const beneficios = [
    {
      titulo: 'Chasis Monocasco',
      descripcion: 'Inspirado en la industria aeronáutica, el diseño monocasco de ANKAI proporciona una estructura 3 a 6 veces más resistente que la de buses convencionales, aumentando seguridad y reduciendo el peso en un 8%.',
      icono: '🛡️'
    },
    {
      titulo: 'Pioneros en Pruebas de Vuelco Lateral',
      descripcion: 'ANKAI fue el primer fabricante de buses en China en ejecutar exitosamente pruebas de vuelco lateral, reafirmando su compromiso con la seguridad estructural bajo estándares internacionales.',
      icono: '🧪'
    },
    {
      titulo: 'Pintura por Electroforesis',
      descripcion: 'Aplicación anticorrosiva completa mediante proceso de electroforesis, asegurando durabilidad y resistencia en climas costeros o de alta salinidad.',
      icono: '🎨'
    },
    {
      titulo: 'Tecnología 100% Eléctrica',
      descripcion: 'Configuraciones adaptadas con baterías CATL o BYD, autonomía entre 220–350 km, y tren motriz optimizado para máxima eficiencia energética.',
      icono: '⚡'
    },
    {
      titulo: 'Gestión Inteligente',
      descripcion: 'Monitoreo en tiempo real del estado del vehículo, consumo energético, parámetros críticos, ubicación y alertas operativas.',
      icono: '📡'
    },
    {
      titulo: 'Plataforma Modular de Servicio',
      descripcion: 'Todas las líneas (G, A, K) comparten arquitectura modular: facilita la capacitación técnica, repuestos y mantenimiento estandarizado.',
      icono: '🧩'
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-r from-lime-50 via-white to-lime-100 px-4 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Beneficios Tecnológicos</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          Con más de 50 años de experiencia, ANKAI lidera la industria con buses estructuralmente avanzados, seguros, eficientes y adaptados al futuro eléctrico del transporte urbano y regional.
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
