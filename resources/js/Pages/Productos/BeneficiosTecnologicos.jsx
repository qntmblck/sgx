export default function BeneficiosTecnologicos() {
  const beneficios = [
    {
      titulo: 'Chasis Monocasco',
      descripcion: 'Inspirado en la industria aeronáutica, estructura 3 a 6 veces más resistente que buses convencionales. Reducción de peso del 8%.',
      imagen: '/img/iconos/monocasco.png',
    },
    {
      titulo: 'Controlador Integrado 5 en 1',
      descripcion: 'Agrupa control de motor, dirección, aire, distribución y CC. Mejora eficiencia, seguridad y reduce fallas.',
      imagen: '/img/iconos/controlador.png',
    },
    {
      titulo: 'Protección Total IP67 + EMC',
      descripcion: 'Sistema sellado contra agua, fuego y descargas. Incluye detección de humo, extinción y monitoreo térmico en carga.',
      imagen: '/img/iconos/proteccion.png',
    },
    {
      titulo: 'Batería Fosfato Hierro-Litio',
      descripcion: '153 Wh/kg. Mayor densidad energética, menor peso (-800 kg) y duración extendida.',
      imagen: '/img/iconos/bateria.png',
    },
    {
      titulo: 'Sistemas de Asistencia ADAS',
      descripcion: 'Incluye alerta de peatones, colisión, cambio de carril, distancia y frenado regenerativo inteligente.',
      imagen: '/img/iconos/adas.png',
    },
    {
      titulo: 'Dirección & Inflado con Imán Permanente',
      descripcion: 'Alta eficiencia y bajo ruido. Mejoran la experiencia de conducción y reducen consumo.',
      imagen: '/img/iconos/iman.png',
    },
    {
      titulo: 'Telemetría y Diagnóstico Remoto',
      descripcion: 'Conectividad total con análisis en tiempo real. Escaneo de parámetros y alertas por red móvil.',
      imagen: '/img/iconos/telemetria.png',
    },
    {
      titulo: 'Diseño Liviano de Estructura',
      descripcion: 'Acero Baosteel 16mn + carrocería optimizada. Reducción de 200kg con mayor rigidez.',
      imagen: '/img/iconos/estructura.png',
    },
    {
      titulo: 'Zona de Conductor Inteligente',
      descripcion: 'Pantalla táctil, ergonomía avanzada y reducción de fatiga. Interfaz optimizada para operación continua.',
      imagen: '/img/iconos/conductor.png',
    }
  ]

  return (
    <section id="beneficios" className="relative py-16 px-4 sm:px-6 lg:px-12 max-w-full overflow-hidden">
      <h2 className="text-center text-3xl sm:text-4xl font-bold text-white mb-12">
        Beneficios Tecnológicos
      </h2>

      {/* Fondo translúcido armonioso con SGX */}
      <div className="absolute inset-0 px-2 sm:px-4">
        <div className="w-full h-full rounded-[48px] backdrop-blur-md shadow-2xl ring-1 ring-inset ring-white/20
        bg-gradient-to-br from-[#003b5c]/40 via-[#149e60]/20 to-white/10" />
      </div>

      {/* Carrusel horizontal animado */}
      <div className="relative z-10 w-full overflow-x-auto scrollbar-hide">
        <div
          className="flex w-max animate-carousel gap-4 px-4 sm:px-6"
          style={{ animationDuration: '50s' }}
        >
          {[...beneficios, ...beneficios].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-shrink-0 w-[300px] sm:w-[340px] h-auto p-5 rounded-xl shadow-md hover:scale-[1.01] transition-transform duration-300
              bg-[linear-gradient(to_bottom_right,rgba(199,55,47,0.85),rgba(199,55,47,0.75))] backdrop-blur-md border border-white/10"
            >
              <div className="flex flex-col justify-between w-full">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white pr-2">{item.titulo}</h3>
                  <div className="w-10 h-10 ml-2 flex-shrink-0">
                    <img
                      src={item.imagen}
                      alt={item.titulo}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <p className="text-sm text-white/90 leading-snug">{item.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
