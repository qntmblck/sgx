export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative text-white px-6 py-24 sm:py-32 bg-cover bg-no-repeat bg-center bg-scroll sm:bg-fixed sm:bg-[center_35%]"
      style={{
        backgroundImage: 'url(/img/hero.png?v=1)',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#00684a]/80 to-[#00684a]/60 sm:from-[#00684a]/60 sm:to-[#00684a]/40" />
      <div className="relative max-w-7xl mx-auto text-left">
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight drop-shadow mb-4">
            Representantes Autorizados
          </h1>
          <div className="flex items-center flex-wrap gap-2 text-3xl sm:text-5xl font-extrabold mb-6">
            <span>de</span>
            <img src="/img/ankai.png" alt="ANKAI" className="h-10 sm:h-14 object-contain" />
            <span>en Chile</span>
          </div>
          <p className="text-base sm:text-xl font-semibold max-w-xl">
            Impulsamos una nueva era en el transporte público inteligente con tecnología de clase mundial.
          </p>
        </div>
        <div className="mt-10 flex justify-end">
          <a
            href="#electromovilidad"
            className="inline-block font-bold rounded-md px-6 py-3 text-white shadow border border-white hover:bg-[#00d084] hover:border-[#00d084] transition"
          >
            Conoce la Electromovilidad →
          </a>
        </div>
      </div>
    </section>
  )
}
