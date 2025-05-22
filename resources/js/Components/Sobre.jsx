import { CheckIcon } from '@heroicons/react/20/solid'
import { useInView } from 'react-intersection-observer'
import ParticlesFondo from '@/Components/ParticlesFondo'

const pilares = [
  {
    name: 'Misión',
    description:
      'Impulsar modelos de transporte sustentable mediante soluciones técnicas de electromovilidad que integren tecnología, eficiencia operativa y adaptación territorial, con enfoque en responsabilidad pública.',
  },
  {
    name: 'Visión',
    description:
      'Ser reconocidos como socio estratégico de referencia en electromovilidad en Chile, destacando por eficiencia, flexibilidad técnica y compromiso territorial.',
  },
]

export default function Sobre() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section id="sobre" className="relative overflow-hidden bg-lime-50">
      {/* Curva verde tipo horizonte */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg
          viewBox="0 0 500 80"
          preserveAspectRatio="none"
          className="w-full h-20 fill-[#00d084]"
        >
          <path d="M0,80 C150,20 350,20 500,80 L500,0 L0,0 Z" />
        </svg>
      </div>

      {/* Partículas animadas sobre el fragmento verde */}
      <div className="absolute top-0 left-0 w-full h-20 z-10 pointer-events-none">
        <ParticlesFondo />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-28 sm:py-32 z-20" ref={ref}>
        <div className="grid lg:grid-cols-5 gap-x-16 gap-y-16 max-w-6xl mx-auto items-center">
          {/* ¿Quiénes Somos? */}
          <div
            className={`col-span-2 transition duration-1000 ease-out transform ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-sm font-semibold uppercase text-lime-500 tracking-wide">
              Representantes oficiales ANKAI
            </h2>
            <p className="mt-2 text-4xl font-extrabold tracking-tight text-blue-800 sm:text-5xl leading-tight text-center sm:text-left">
              ¿Quiénes Somos?
            </p>
            <div className="mt-2 mb-6 border-t-4 w-24 border-[#00d084] rounded-full mx-auto sm:mx-0" />
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed text-justify">
              SGX es la empresa representante oficial de{' '}
              <span className="text-lime-500 font-semibold">ANKAI</span> en Chile, uno de los mayores fabricantes de buses eléctricos del mundo, con presencia en más de 100 países.
              <br /><br />
              Nuestra misión es facilitar el acceso a tecnologías de transporte inteligente adaptadas al territorio nacional, fortaleciendo la transición energética con soluciones confiables, seguras y sostenibles.
              <br /><br />
              Desde SGX, promovemos una movilidad alineada con las metas de descarbonización del país, colaborando activamente con operadores públicos y privados.
            </p>
          </div>

          {/* Misión y Visión */}
          <dl className="col-span-3 space-y-14 text-lg sm:text-xl text-gray-700">
            {pilares.map((item, i) => (
              <div
                key={item.name}
                className={`relative pl-9 transform transition duration-700 ease-in-out ${
                  inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                } hover:scale-115 hover:shadow-2xl hover:bg-white/60 rounded-lg p-2 cursor-default`}
                style={{ transitionDelay: `${(i + 1) * 200}ms` }}
              >
                <dt className="font-semibold text-blue-800">
                  <CheckIcon
                    aria-hidden="true"
                    className="absolute left-0 top-1 h-5 w-5 text-lime-500"
                  />
                  {item.name}
                </dt>
                <dd className="mt-4">{item.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
