import { useEffect, useState } from 'react'
import PresenciaGlobal from './PresenciaGlobal'

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] text-white px-6 py-24 sm:py-32 bg-cover bg-no-repeat bg-center bg-scroll sm:bg-fixed sm:bg-[center_35%]"
      style={{
        backgroundImage: 'url(/img/hero.png?v=2)',
      }}
    >
      {/* Capa oscura sobre imagen */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-gray-800/40 sm:from-black/60 sm:to-gray-700/30" />

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto transition-opacity duration-1000 ease-out">
        <div className={`max-w-5xl transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {/* Título + botón en fila */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-6">
            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight drop-shadow">
              Representantes Autorizados
            </h1>
            <a
              href="#fortalezas"
              className="inline-block font-bold rounded-md px-6 py-3 text-white shadow bg-lime-500 hover:bg-lime-600 transition self-start sm:self-auto"
            >
              Conoce la Tecnología →
            </a>
          </div>

          {/* Línea "de ANKAI en Chile" */}
          <div className="flex items-center flex-wrap gap-2 text-3xl sm:text-5xl font-extrabold mb-6">
            <span>de</span>
            <img src="/img/ankai.png" alt="ANKAI" className="h-10 sm:h-14 object-contain" />
            <span>en Chile</span>
          </div>

          {/* Descripción */}
          <p className="text-base sm:text-xl font-semibold max-w-xl text-gray-100">
            Impulsamos una nueva era en el transporte público inteligente con tecnología de clase mundial.
          </p>
        </div>
      </div>

      {/* Carrusel en la base */}
      <div className="absolute bottom-0 w-full z-10">
        <PresenciaGlobal />
      </div>
    </section>
  )
}
