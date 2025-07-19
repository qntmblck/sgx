import { useEffect, useState } from 'react'

// Numeric animator hook (igual que antes)
function useCounter(target, { duration = 1500, delay = 0 } = {}) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const start = performance.now()
    let frame
    const step = (now) => {
      const t = Math.min(1, (now - start - delay) / duration)
      if (t > 0) setCount(Math.floor(t * target))
      if (t < 1) frame = requestAnimationFrame(step)
    }
    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [target, duration, delay])
  return count
}

export default function HeroSection() {
  const certificaciones = useCounter(8, { duration: 2000, delay: 500 })
  const innovaciones    = useCounter(4, { duration: 2000, delay: 800 })
  const pioneros        = useCounter(1, { duration: 2000, delay: 1100 })

  // trigger mounting animations
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    requestAnimationFrame(() => setLoaded(true))
  }, [])

  const stats = [
    { value: certificaciones, label: 'Certificaciones Internacionales' },
    { value: innovaciones,    label: 'Tecnologías Clave' },
    { value: pioneros,        label: 'Pioneros en Bus Eléctrico' },
  ]

  return (
    <section
      id="inicio"
      className="h-screen relative flex items-center justify-center bg-fixed bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: 'url(/img/hero.webp?v=2)',
        backgroundSize:   '150% auto',
        backgroundPosition: 'center top',
      }}
    >
      {/* Overlay suave */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70" />

      {/* Contenido */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl space-y-6">
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg
            transition-transform duration-700 ease-out
            ${loaded ? 'animate-fade-in-right' : 'translate-x-[-20px] opacity-0'}`}
          style={{ animationDelay: '200ms' }}
        >
          Representantes de{' '}
          <span className="text-[#e63946]">ANKAI</span> en Chile
        </h1>

        <p
          className={`inline-block bg-black/50 px-4 py-2 rounded-md text-base sm:text-lg md:text-xl text-gray-100 mx-auto max-w-3xl
            transition-opacity duration-700 ease-out
            ${loaded ? 'animate-fade-up' : 'opacity-0'}`}
          style={{ animationDelay: '400ms' }}
        >
          Pioneros en electromovilidad, impulsando el transporte público con tecnología, cobertura y experiencia.
        </p>

        {/* Estadísticas */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`
                bg-white/10 backdrop-blur-sm rounded-lg p-6 transform transition-all duration-500 ease-out
                hover:scale-105 hover:backdrop-blur-lg hover:shadow-2xl
                ${loaded ? 'animate-fade-up' : 'opacity-0 translate-y-4'}
              `}
              style={{ animationDelay: `${600 + i * 200}ms` }}
            >
              <div className="text-4xl sm:text-5xl font-bold text-white">
                {stat.value}{ stat.value === pioneros ? 'º' : '+' }
              </div>
              <div className="mt-1 text-gray-300 uppercase text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 w-full flex justify-center">
        <div className="animate-bounce p-2 bg-white/20 rounded-full transition-shadow hover:shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none"
               viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  )
}
