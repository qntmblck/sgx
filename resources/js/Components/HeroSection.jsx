import { useEffect, useState } from 'react'
import PresenciaGlobal from './PresenciaGlobal'

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    requestAnimationFrame(() => setLoaded(true))
  }, [])

  return (
    <section
      id="inicio"
      className="relative w-full text-white px-6 pt-20 sm:pt-28 bg-cover bg-no-repeat bg-center bg-scroll sm:bg-fixed sm:bg-[center_35%]"
      style={{ backgroundImage: 'url(/img/hero.png?v=2)' }}
    >
      {/* Degradado sobre fondo */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-gray-800/40 sm:from-black/60 sm:to-gray-700/30 z-0" />

      {/* Contenido principal */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div
          className={`max-w-5xl transition-all duration-1000 ease-out ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* Título y botón */}
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8 mb-8">
            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight drop-shadow">
              Representantes Autorizados
            </h1>
            <a
              href="/productos#beneficios"
              className="
                w-full sm:w-auto self-start sm:self-auto
                inline-block font-bold rounded-md shadow transition-all duration-300
                bg-gradient-to-br from-[#003b5c] to-[#00d084] hover:brightness-110
                text-sm px-4 py-2 sm:text-base sm:px-5 sm:py-3 md:text-lg md:px-6
              "
            >
              Conoce la Tecnología →
            </a>
          </div>

          {/* Línea ANKAI */}
          <div className="flex items-center flex-wrap gap-3 text-3xl sm:text-5xl font-extrabold mb-8">
            <span>de</span>
            <img src="/img/ankai.png" alt="ANKAI" className="h-10 sm:h-14 object-contain" />
            <span>en Chile</span>
          </div>

          {/* Subtítulo */}
          <p className="text-base sm:text-xl font-semibold max-w-xl text-gray-100 mb-12">
            Impulsamos una nueva era en el transporte público inteligente con tecnología de clase mundial.
          </p>
        </div>
      </div>

      {/* Carrusel PresenciaGlobal */}
      <div className="relative z-10">
        <PresenciaGlobal />
      </div>
    </section>
  )
}
