import { Head } from '@inertiajs/react'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'
import ContactActions from '@/Components/ContactActions'
import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'

export default function Noticias() {
  return (
    <>
      <Head title="SGX · Noticias" />
      <Header />

      {/* Hero */}
      <section
        className="relative flex items-center justify-center overflow-hidden bg-cover bg-center py-24 sm:py-28"
        style={{ backgroundImage: "url('/img/productos.webp')" }}
      >
        <div className="absolute inset-0 bg-slate-950/60" />
        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
          <h1 className="max-w-4xl text-3xl font-extrabold tracking-tight text-white drop-shadow-lg sm:text-5xl">
            Noticias & Actualidad
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-white/90 sm:text-lg">
            Noticias, actividades e hitos de SGX Chile & Ankai Bus.
          </p>
        </div>
      </section>

      {/* Contenido */}
      <main className="bg-gray-50">
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm"
          >
            <div className="space-y-6 p-6 lg:p-8">
              <h2 className="text-2xl font-extrabold leading-snug text-slate-900 sm:text-3xl">
                Viaje de Validación Técnica en Brasil junto a Operadores de Transporte de Pasajeros
              </h2>

              <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-red-800">
                <span className="inline-flex items-center gap-2">
                  <Calendar size={16} />
                  Noviembre 2025
                </span>
                <span className="inline-flex items-center gap-2">
                  <MapPin size={16} />
                  São Paulo, Brasil
                </span>
              </div>

              <div className="space-y-4 text-[17px] leading-8 text-slate-700">
                <p>
                  Posterior al seminario organizado entre SGX Chile y la Escuela de Ingeniería de la Pontificia Universidad Católica de Valparaíso (PUCV), nuestra empresa coordinó un viaje de validación técnica a São Paulo, Brasil, junto a operadores de transporte público urbano e interurbano de Chile, con el objetivo de evaluar en terreno las capacidades operacionales de las series ANKAI G9 y E9 en condiciones reales de operación.
                </p>

                <p>
                  La visita estuvo enfocada especialmente en analizar el desempeño de los buses eléctricos en escenarios de alto tránsito, recorridos urbanos complejos y condiciones de pendiente, considerando que uno de los principales desafíos para la electromovilidad en regiones de Chile corresponde precisamente a la operación en zonas geográficamente exigentes.
                </p>

                <p>
                  Esta instancia contó con el apoyo de Grupo SCH, representante de JAC Motors y ANKAI en Brasil, quienes facilitaron el acceso operativo y técnico a distintas unidades actualmente en funcionamiento en São Paulo.
                </p>

                <p>
                  Durante la visita, los operadores tuvieron la oportunidad de inspeccionar directamente los buses en operación, revisar aspectos técnicos y constructivos, analizar componentes críticos y, especialmente, intercambiar experiencias con operadores brasileños que actualmente desarrollan operación eléctrica de pasajeros en distintos contextos urbanos.
                </p>

                <p>
                  Uno de los aspectos más relevantes de la actividad fue la posibilidad de sostener conversaciones directas respecto a los desafíos reales de implementación de la electromovilidad, incluyendo operación diaria, mantenimiento, infraestructura de carga, comportamiento energético y adaptación operacional, así como también los beneficios económicos asociados a la transición tecnológica en transporte de pasajeros.
                </p>

                <p>
                  Para SGX Chile, esta actividad representó un paso relevante en el fortalecimiento de una propuesta de valor basada no solamente en la provisión de buses, sino también en la validación operacional, el acompañamiento técnico y la generación de confianza para operadores que evalúan procesos de modernización y transición hacia tecnologías de cero emisiones.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2 lg:grid-cols-4">
                <img src="/img/noticias/N2/N2_1.webp" alt="Viaje de validación técnica en São Paulo - imagen 1" loading="lazy" className="h-56 w-full rounded-3xl border border-slate-200 object-cover" />
                <img src="/img/noticias/N2/N2_2.webp" alt="Viaje de validación técnica en São Paulo - imagen 2" loading="lazy" className="h-56 w-full rounded-3xl border border-slate-200 object-cover" />
                <img src="/img/noticias/N2/N2_3.webp" alt="Viaje de validación técnica en São Paulo - imagen 3" loading="lazy" className="h-56 w-full rounded-3xl border border-slate-200 object-cover" />
                <img src="/img/noticias/N2/N2_4.webp" alt="Viaje de validación técnica en São Paulo - imagen 4" loading="lazy" className="h-56 w-full rounded-3xl border border-slate-200 object-cover" />
              </div>

              <video
                controls
                preload="metadata"
                poster="/img/noticias/N2/N2_1.webp"
                className="aspect-video w-full rounded-3xl border border-slate-200 bg-slate-950 object-cover"
              >
                <source src="/img/noticias/N2/N2_br_optimized.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.article>

          {/* Nota principal */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-10 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm"
          >
            <div className="p-6 lg:p-8 space-y-6">

              {/* Título */}
              <h2 className="text-2xl font-extrabold leading-snug text-slate-900 sm:text-3xl">
                Seminario “Valparaíso 2025–2035: Desafíos y Oportunidades para una Movilidad Sustentable”
              </h2>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-red-800">
                <span className="inline-flex items-center gap-2">
                  <Calendar size={16} />
                  Septiembre 2025 · Valparaíso
                </span>
                <span className="inline-flex items-center gap-2">
                  <MapPin size={16} />
                  Escuela de Ingeniería y Construcción — PUCV
                </span>
              </div>

              {/* Texto principal */}
              <div className="space-y-4 text-[17px] leading-8 text-slate-700">
                <p>
                  El 24 de septiembre de 2025, SGX Chile, en conjunto con la Pontificia Universidad Católica de Valparaíso, organizó el seminario “Valparaíso 2025–2035: Desafíos y Oportunidades para una Movilidad Sustentable”. La actividad abordó distintas visiones en torno a la licitación de las unidades de servicio 1 y 2, así como los principales desafíos de la región para avanzar hacia un sistema de transporte más moderno y eficiente.
                </p>

                <p>
                  La jornada contó con la ponencia del Dr. Stefan Steiniger, Director del Magíster en Ingeniería en Transporte de la PUCV, y con la exposición de Sebastián Gatica, Director de SGX Chile. En este contexto, se analizaron temas clave para la transición del sistema de transporte regional:
                </p>

                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <ul className="list-disc space-y-2 pl-6 marker:text-red-700">
                    <li>Desafíos de la planificación de la red de transporte regional</li>
                    <li>Eficiencia energética y efectos de la geografía en la operación eléctrica</li>
                    <li>Pendientes máximas y longitudes de viaje</li>
                    <li>Telemetría y gestión de flota</li>
                    <li>Formación de capital humano y profesionalización de conductores</li>
                    <li>Cadena de valor: operadores, autoridades, proveedores e instituciones</li>
                  </ul>
                </div>

                <p>
                  El seminario concluyó con un panel de conversación que reunió a representantes del sector público y privado, destacando la participación de Mariano Pola (Grupo Micrológica), la Senadora Camila Flores —Presidenta de la Comisión de Transportes y Telecomunicaciones del Senado— y Manuel Millones, Delegado Presidencial Regional de Valparaíso.
                </p>

                <p>
                  La instancia permitió abordar, desde distintas perspectivas, los principales desafíos técnicos y operacionales que enfrenta la región en esta etapa de transición. Asimismo, se generó un espacio de intercambio entre autoridades, expertos en transporte, SGX Chile —desde la perspectiva de la provisión de buses aptos para las condiciones de pendiente— y operadores de transporte de las regiones de Valparaíso, Santiago y Coquimbo.
                </p>
              </div>

              {/* Galería */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <img src="/img/noticias/S1.webp" className="h-56 w-full rounded-3xl border border-slate-200 object-cover" />
                <img src="/img/noticias/S2.webp" className="h-56 w-full rounded-3xl border border-slate-200 object-cover" />
                <img src="/img/noticias/S3.webp" className="h-56 w-full rounded-3xl border border-slate-200 object-cover" />
                <img src="/img/noticias/S4.webp" className="h-56 w-full rounded-3xl border border-slate-200 object-cover" />
              </div>

            </div>
          </motion.article>

        </section>
      </main>

      <ContactActions />
      <Footer />
    </>
  )
}
