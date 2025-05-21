import { useInView } from 'react-intersection-observer'

export default function Sobre() {
  const pilares = [
    {
      titulo: 'Misión',
      texto:
        'Impulsar modelos de transporte sustentable mediante soluciones técnicas de electromovilidad que integren tecnología, eficiencia operativa y adaptación territorial, con enfoque en responsabilidad pública.',
      icono: '🚍'
    },
    {
      titulo: 'Visión',
      texto:
        'Ser reconocidos como socio estratégico de referencia en electromovilidad en Chile, destacando por eficiencia, flexibilidad técnica y compromiso territorial.',
      icono: '🌱'
    },
    {
      titulo: 'Valores',
      texto:
        'Transparencia institucional, agilidad operativa, colaboración estratégica y adaptabilidad organizacional para entornos de largo plazo.',
      icono: '🤝'
    }
  ]

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.25 })

  return (
    <section id="sobre" className="relative py-24 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-lime-100 to-white -skew-y-2 transform" />
      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">Sobre SGX</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center" ref={ref}>
          {/* Bloques: Misión, Visión, Valores */}
          <div className="flex flex-col gap-8">
            {pilares.map((item, i) => (
              <div
                key={i}
                className={`relative z-10 bg-white w-full p-6 rounded-xl shadow-xl transform transition duration-700 opacity-0
                ${inView ? `animate-fade-in-right delay-[${i * 300}ms]` : ''}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-lime-700">{item.titulo}</h3>
                  <span className="text-2xl">{item.icono}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{item.texto}</p>
              </div>
            ))}
          </div>

          {/* Descripción SGX */}
          <div className={`bg-white p-8 rounded-xl shadow-md transition duration-1000 opacity-0
            ${inView ? 'animate-fade-up delay-[900ms]' : ''}`}>
            <h3 className="text-xl font-semibold text-lime-700 mb-4">¿Quiénes Somos?</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              SGX es la empresa representante oficial de ANKAI en Chile, uno de los mayores fabricantes de buses eléctricos del mundo, con presencia en más de 100 países.
              <br /><br />
              Nuestra misión es facilitar el acceso a tecnologías de transporte inteligente adaptadas al territorio nacional, fortaleciendo la transición energética con soluciones confiables, seguras y sostenibles.
              <br /><br />
              Desde SGX, promovemos una movilidad alineada con las metas de descarbonización del país, colaborando activamente con operadores públicos y privados.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
