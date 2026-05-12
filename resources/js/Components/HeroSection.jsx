import { useEffect, useState } from 'react'

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
  const experiencia = useCounter(60, { duration: 2000, delay: 500 })
  const paisesExportacion = useCounter(100, { duration: 2000, delay: 800 })
  const certificaciones = useCounter(4, { duration: 2000, delay: 1100 })

  return (
    <section
      id="inicio"
      className="
        relative flex flex-col items-center justify-center
        flex-1
        min-h-[calc(100vh-80px-88px)]
        bg-cover bg-center
        overflow-x-hidden
        px-4
        py-10 sm:py-16
      "
      style={{ backgroundImage: 'url(/img/hero.webp?v=2)' }}
    >
      <div className="absolute inset-0 bg-slate-950/65" />

      <div
        className="
          relative z-10
          w-full max-w-5xl mx-auto
          text-center
          space-y-6
        "
      >
        <h1
          className="
            text-3xl sm:text-5xl md:text-6xl
            font-extrabold text-white leading-tight drop-shadow-lg
            break-words
          "
        >
          Representantes de{' '}
          <span className="text-red-400">
            Anhui Ankai Automobile Co. Ltd.
          </span>{' '}
          en Chile
        </h1>

        <p
          className="
            text-sm sm:text-lg md:text-xl
            text-gray-100 bg-white/10 border border-white/15 px-4 py-2 rounded-full inline-block backdrop-blur-sm
          "
        >
          Impulsando una movilidad sustentable y de alto estándar.
        </p>

        <div className="flex flex-nowrap justify-center space-x-4 mt-8 w-full">
          {[
            { value: experiencia, label: 'Años de Trayectoria' },
            { value: paisesExportacion, label: 'Países de Exportación' },
            { value: certificaciones, label: 'Certificaciones Internacionales' },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="
                flex-1 min-w-0
                border border-white/15 bg-white/10 backdrop-blur-sm
                rounded-3xl p-4 sm:p-6
                flex flex-col items-center
                shadow-sm transition-transform hover:-translate-y-1
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
