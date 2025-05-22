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
    <section id="impacto" className="bg-lime-50 py-24 px-4">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="text-pretty text-4xl font-extrabold tracking-tight text-blue-800 sm:text-5xl mb-10">
            Nuestro Impacto
          </h2>
          <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
            {/* Descripción */}
            <div className="lg:w-full lg:max-w-2xl lg:flex-auto text-gray-700">
              <p className="text-xl/8">
                Chile lidera la adopción de buses eléctricos en Latinoamérica con más de{' '}
                <strong className="text-lime-500">2.480 unidades</strong> en operación. La meta es descarbonizar
                el 100% del transporte público al año <strong className="text-lime-500">2035</strong>.
              </p>
              <p className="mt-10 max-w-xl text-base/7">
                En SGX, como representantes oficiales de ANKAI, acompañamos a actores públicos y privados para
                consolidar un ecosistema de movilidad sostenible, alineado con los más altos estándares internacionales.
              </p>
            </div>

            {/* Métricas animadas */}
            <div className="lg:flex lg:flex-auto lg:justify-center">
              <dl className="w-64 space-y-8 xl:w-80">
                {stats.map((stat, index) => {
                  const animatedValue = useCounter(stat.value)
                  return (
                    <div key={stat.label} className="flex flex-col-reverse gap-y-2">
                      <dt className="text-base/7 text-gray-600">{stat.label}</dt>
                      <dd className="text-5xl font-semibold tracking-tight text-blue-800">
                        {animatedValue}
                        {stat.suffix || ''}
                      </dd>
                    </div>
                  )
                })}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
