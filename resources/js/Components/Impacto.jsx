import { useEffect, useState } from 'react'

const stats = [
  { label: 'Buses eléctricos proyectados a 2026', value: 200, suffix: '+' },
  { label: 'Regiones en evaluación activa', value: 6, suffix: '+' },
  { label: 'Compromiso nacional de descarbonización', value: 2035, start: 2000 },
]

function useCounter(targetValue, duration = 1500, start = 0) {
  const [count, setCount] = useState(start)

  useEffect(() => {
    let current = start
    const totalSteps = targetValue - start
    const stepTime = Math.max(Math.floor(duration / totalSteps), 20)

    const timer = setInterval(() => {
      current += 1
      setCount(current)
      if (current >= targetValue) clearInterval(timer)
    }, stepTime)

    return () => clearInterval(timer)
  }, [targetValue, duration, start])

  return count
}

export default function Impacto() {
  return (
    <section
      id="impacto"
      className="relative isolate overflow-hidden pt-24 sm:pt-32 pb-0 bg-gray-900"
    >
      {/* Fondo fijo con imagen */}
      <div
        className="absolute inset-0 -z-20 bg-fixed bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/img/calle.jpg')" }}
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

      {/* Contenido principal */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Texto a la izquierda */}
          <div>
            <h2 className="text-sm font-semibold text-lime-500 uppercase">Nuestro impacto</h2>
            <p className="mt-2 text-pretty text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Movilidad sustentable para todo el país
            </p>
            <p className="mt-6 text-lg text-gray-300">
              Chile lidera en Latinoamérica con más de{' '}
              <span className="text-lime-400">2.480 buses eléctricos</span> y se ha propuesto descarbonizar el 100% del
              transporte público al año{' '}
              <span className="text-lime-400">2035</span>. En SGX, acompañamos este proceso como socios técnicos estratégicos.
            </p>
          </div>

          {/* Métricas a la derecha */}
          <dl className="space-y-10 text-white flex flex-col items-end text-right">
            {stats.map((stat) => {
              const animatedValue = useCounter(stat.value, 1500, stat.start || 0)
              return (
                <div key={stat.label} className="flex flex-col gap-y-2 border-r border-white/10 pr-6">
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
      </div>

      {/* Imagen final destacada */}
<div className="relative z-10 -mb-2">
  <img
    src="/img/buses.png"
    alt="Gama de buses ANKAI"
    className="mx-auto w-[90%] max-w-6xl object-contain translate-y-2 sm:translate-y-4 lg:translate-y-6"
    loading="lazy"
  />
</div>


    </section>
  )
}
