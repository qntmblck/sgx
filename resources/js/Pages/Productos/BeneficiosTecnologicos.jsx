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
    <section id="beneficios" className="bg-transparent py-16 px-6 sm:px-8">
      <h2 className="text-center text-3xl sm:text-4xl font-bold text-[#003b5c] mb-12">
        Beneficios Tecnológicos
      </h2>

      {/* Carrusel horizontal deslizable y animado */}
      <div className="overflow-x-auto scrollbar-hide scroll-smooth -mx-4 px-4">
        <div
          className="flex w-max animate-carousel gap-4"
          style={{ animationDuration: '50s' }}
        >
          {[...beneficios, ...beneficios].map((item, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[280px] sm:w-[320px] h-auto bg-gradient-to-br from-[#002f4b] via-[#005c8a] to-[#0099cc] text-white p-6 rounded-xl shadow-md hover:scale-[1.01] transition-transform duration-300"

            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold">{item.titulo}</h3>
                <div className="w-10 h-10 ml-2">
                  <img
                    src={item.imagen}
                    alt={item.titulo}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <p className="text-sm text-white/90">{item.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
