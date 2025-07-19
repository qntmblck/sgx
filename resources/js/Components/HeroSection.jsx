import { useEffect, useState, useRef } from 'react'

// Hook numérico (idéntico al anterior)
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
  const experiencia       = useCounter(60,  { duration: 2000, delay: 500 })
  const paisesExportacion = useCounter(100, { duration: 2000, delay: 800 })
  const certificaciones   = useCounter(4,   { duration: 2000, delay: 1100 })
  const ref = useRef(null)

  // Bloquear scroll táctil y de rueda solo dentro del hero
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const prevent = e => e.preventDefault()
    el.addEventListener('touchmove', prevent, { passive: false })
    el.addEventListener('wheel', prevent, { passive: false })
    return () => {
      el.removeEventListener('touchmove', prevent)
      el.removeEventListener('wheel', prevent)
    }
  }, [])

  return (
    <section
      ref={ref}
      id="inicio"
      className="
        relative
        flex flex-col items-center justify-center
        min-h-screen
        bg-cover bg-center
        overflow-hidden
        overscroll-none
      "
      style={{
        backgroundImage: 'url(/img/hero.webp?v=2)',
        touchAction: 'none'
      }}
    >
      {/* Overlay para contraste */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-3xl space-y-6">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
          Representantes de{' '}
          <span className="text-[#e63946]">Anhui Ankai Automobile Co. Ltd.</span> en Chile
        </h1>

        <p className="
            text-sm sm:text-lg md:text-xl
            text-gray-100
            bg-black/30 px-3 py-1 rounded-md
            inline-block
          ">
          Impulsando una movilidad sustentable y de alto estándar.
        </p>

        {/* Tres bloques siempre en una fila */}
        <div className="flex flex-nowrap justify-center space-x-4 mt-8 w-full px-4">
          {[
            { value: experiencia,       label: 'Años de Trayectoria' },
            { value: paisesExportacion, label: 'Países de Exportación' },
            { value: certificaciones,   label: 'Certificaciones Internacionales' },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="
                flex-1 min-w-0
                bg-white/10 backdrop-blur-sm
                rounded-lg p-4 sm:p-6
                flex flex-col items-center
                transition-transform hover:scale-105
              "
            >
              <div className="text-2xl sm:text-4xl font-bold text-white">
                {value}+
              </div>
              <div className="mt-1 text-gray-300 uppercase text-xs sm:text-sm text-center">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
