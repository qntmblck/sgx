export default function BeneficiosTecnologicos() {
  const beneficios = [
  { titulo: 'Chasis Monocasco', descripcion: 'Estructura 3 a 6 veces más resistente. Reducción de peso del 8%.', imagen: '/img/iconos/monocasco.png' },
  { titulo: 'Controlador 5 en 1', descripcion: 'Control de motor, dirección, aire, distribución y CC.', imagen: '/img/iconos/controlador.png' },
  { titulo: 'Protección IP67 + EMC', descripcion: 'Sistema sellado. Detección de humo y monitoreo térmico.', imagen: '/img/iconos/proteccion.png' },
  { titulo: 'Batería Fosfato-Litio', descripcion: 'Mayor densidad energética y vida útil. -800 kg.', imagen: '/img/iconos/bateria.png' },
  { titulo: 'ADAS Inteligente', descripcion: 'Alerta de peatones, colisión y frenado regenerativo.', imagen: '/img/iconos/adas.png' },
  { titulo: 'Dirección con Imán', descripcion: 'Mayor eficiencia, menos ruido y consumo.', imagen: '/img/iconos/iman.png' },
  { titulo: 'Telemetría Remota', descripcion: 'Escaneo en tiempo real y alertas por red móvil.', imagen: '/img/iconos/telemetria.png' },
  { titulo: 'Estructura Liviana', descripcion: 'Acero Baosteel 16mn. Reducción de 200kg.', imagen: '/img/iconos/estructura.png' },
  { titulo: 'Cabina Inteligente', descripcion: 'Pantalla táctil, ergonomía avanzada y operación continua.', imagen: '/img/iconos/conductor.png' },
  { titulo: 'Frenado Regenerativo', descripcion: 'Sistema EBS inteligente con recuperación distribuida.', imagen: '/img/iconos/frenado.png' },
  { titulo: 'Alta Estanqueidad', descripcion: 'Sellado IP67. Inmersión hasta 500 mm durante 24h.', imagen: '/img/iconos/ip67.png' },
  { titulo: 'Asistencia en Pendiente', descripcion: 'Sistema antideslizamiento automático en tráfico y rampas.', imagen: '/img/iconos/pendiente.png' },
  { titulo: 'Reducción de Ruido NVH', descripcion: 'Motor silencioso y aislamiento acústico avanzado.', imagen: '/img/iconos/ruido.png' },
  { titulo: 'Inflado Silencioso', descripcion: 'Bomba trasera de imán permanente. Menos ruido al conducir.', imagen: '/img/iconos/inflado.png' },
  { titulo: 'Eficiencia Energética', descripcion: 'Optimización por simulación AVL Cruise. +autonomía.', imagen: '/img/iconos/eficiencia.png' },
  { titulo: 'Sistema Antiincendios', descripcion: 'Extinción automática y detección térmica en baterías.', imagen: '/img/iconos/extincion.png' },
  { titulo: 'Sistema Desbloqueo Rápido', descripcion: 'Acceso inmediato y seguro al compartimiento de batería.', imagen: '/img/iconos/desbloqueo.png' },
  { titulo: 'Zona Conductor Segura', descripcion: 'Área ergonómica, aislada y tecnológicamente avanzada.', imagen: '/img/iconos/zona-conductor.png' },
  { titulo: 'Frente Abatible', descripcion: 'Parabrisas y parachoques de fácil acceso para mantención.', imagen: '/img/iconos/frente.png' },
  { titulo: 'Aislamiento Total', descripcion: 'Batería en techo/lateral, sin acceso desde cabina.', imagen: '/img/iconos/aislamiento.png' },
  { titulo: 'Carga Protegida', descripcion: 'Monitoreo de temperatura y corte automático en fallas.', imagen: '/img/iconos/carga.png' }
]


  return (
    <section className="w-full py-8 bg-transparent">
      <div className="w-full overflow-x-auto scrollbar-hide snap-x snap-mandatory">
        <div
          className="flex w-max gap-4 animate-carousel px-4 sm:px-6 lg:px-8"
          style={{ animationDuration: '50s' }}
        >
          {[...beneficios, ...beneficios].map((item, index) => (
            <div
              key={`${item.titulo}-${index}`}
              className="flex-shrink-0 w-[85vw] sm:w-[300px] h-[160px] sm:h-[150px] snap-center
                         border border-white/20 rounded-xl p-4 shadow-md
                         hover:scale-[1.01] transition-transform duration-300 backdrop-blur-md
                         bg-[linear-gradient(to_bottom_right,rgba(0,59,92,0.15),rgba(20,158,96,0.15))]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-full overflow-hidden border border-white bg-white">
                  <img src={item.imagen} alt={item.titulo} className="w-full h-full object-contain" />
                </div>
                <h3 className="text-sm sm:text-base font-extrabold text-white">{item.titulo}</h3>
              </div>
              <p className="text-xs sm:text-sm text-white font-semibold leading-snug">{item.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
