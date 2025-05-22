import { useEffect, useState } from 'react'

const stats = [
  { label: 'Buses eléctricos proyectados a 2026', value: 200, suffix: '+' },
  { label: 'Regiones en evaluación activa', value: 6, suffix: '+' },
  { label: 'Compromiso nacional de descarbonización', value: 2035 },
]

function useCounter(targetValue, duration = 1500) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const stepTime = Math.max(Math.floor(duration / targetValue), 20)

    const timer = setInterval(() => {
      start += 1
      setCount(start)
      if (start >= targetValue) clearInterval(timer)
    }, stepTime)

    return () => clearInterval(timer)
  }, [targetValue, duration])

  return count
}

export default function Impacto() {
  return (
    <section
      id="impacto"
      className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32"
    >
      {/* Imagen de fondo (opcional) */}
      <img
        alt=""
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2850&q=80&blend=111827&blend-mode=multiply&sat=-100&exp=15"
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-30"
      />

      {/* SVG decorativo difuminado */}
      <div
        aria-hidden="true"
        className="absolute -bottom-8 -left-96 -z-10 transform-gpu blur-3xl sm:-bottom-64 sm:-left-40 lg:-bottom-32 lg:left-8 xl:-left-10"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1266/975] w-[79.125rem] bg-gradient-to-tr from-[#00d084] to-[#0f5132] opacity-20"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Texto introductorio */}
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
          <h2 className="text-sm font-semibold text-lime-500 uppercase">Nuestro impacto</h2>
          <p className="mt-2 text-pretty text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Movilidad sustentable para todo el país
          </p>
          <p className="mt-6 text-lg text-gray-300">
            Chile lidera en Latinoamérica con más de <span className="text-lime-400">2.480 buses eléctricos</span> y se
            ha propuesto descarbonizar el 100% del transporte público al año <span className="text-lime-400">2035</span>.
            En SGX, acompañamos este proceso como socios técnicos estratégicos.
          </p>
        </div>

        {/* Métricas animadas */}
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 text-white sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {stats.map((stat, index) => {
            const animatedValue = useCounter(stat.value)
            return (
              <div key={stat.label} className="flex flex-col gap-y-2 border-l border-white/10 pl-6">
                <dt className="text-sm text-gray-300">{stat.label}</dt>
                <dd className="order-first text-5xl font-semibold tracking-tight text-lime-400">
                  {animatedValue}
                  {stat.suffix || ''}
                </dd>
              </div>
            )
          })}
        </dl>
      </div>
    </section>
  )
}
