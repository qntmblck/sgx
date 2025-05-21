export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative text-white py-32 px-6 bg-[center_35%] bg-cover bg-fixed"
      style={{ backgroundImage: 'url(/img/hero.png?=v1)' }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#00684a]/60 to-[#00684a]/40 backdrop-brightness-90" />
      <div className="relative max-w-7xl mx-auto text-left">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight drop-shadow mb-4">
            Representantes Autorizados
          </h1>
          <div className="flex items-center flex-wrap gap-2 text-4xl sm:text-5xl font-extrabold mb-6">
            <span>de</span>
            <img src="/img/ankai.png" alt="ANKAI" className="h-12 sm:h-14 object-contain" />
            <span>en Chile</span>
          </div>
          <p className="text-lg sm:text-xl font-semibold max-w-xl">
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
