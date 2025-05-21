import { useEffect, useState } from 'react'

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="inicio"
      className="relative text-white px-6 py-24 sm:py-32 bg-cover bg-no-repeat bg-center bg-scroll sm:bg-fixed sm:bg-[center_35%]"
      style={{
        backgroundImage: 'url(/img/hero.png?v=2)',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-gray-800/40 sm:from-black/60 sm:to-gray-700/30" />
      <div className="relative max-w-7xl mx-auto text-left transition-opacity duration-1000 ease-out">
        <div className={`max-w-4xl transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight drop-shadow mb-4">
            Representantes Autorizados
          </h1>
          <div className="flex items-center flex-wrap gap-2 text-3xl sm:text-5xl font-extrabold mb-6">
            <span>de</span>
            <img src="/img/ankai.png" alt="ANKAI" className="h-10 sm:h-14 object-contain" />
            <span>en Chile</span>
          </div>
          <p className="text-base sm:text-xl font-semibold max-w-xl text-gray-100">
            Impulsamos una nueva era en el transporte público inteligente con tecnología de clase mundial.
          </p>
        </div>
        <div className={`mt-10 flex justify-end transition-all duration-700 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <a
            href="#fortalezas"
            className="inline-block font-bold rounded-md px-6 py-3 text-white shadow border border-white hover:bg-cyan-500 hover:border-cyan-500 transition"
          >
            Conoce la Tecnología →
          </a>
        </div>
      </div>
    </section>
  )
}
