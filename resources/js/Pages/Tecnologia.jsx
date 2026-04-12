import { Head } from '@inertiajs/react'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'
import ContactActions from '@/Components/ContactActions'
import { motion } from 'framer-motion'

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12 },
  transition: { duration: 0.5 },
}

const sectionEyebrowClass =
  'text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700'

const sectionTitleClass =
  'text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900'

const blockTitleClass =
  'text-xl sm:text-2xl font-bold tracking-tight text-slate-900'

const paragraphClass =
  'text-sm sm:text-base leading-7 text-slate-600'

const cardClass =
  'rounded-3xl border border-slate-200 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.06)]'

function SectionDivider() {
  return (
    <div className="h-px w-full bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />
  )
}

function ImageFrame({
  src,
  alt,
  fit = 'contain',
  ratio = 'aspect-[16/10]',
  className = '',
}) {
  return (
    <div className={`${cardClass} overflow-hidden ${className}`}>
      <div className={`w-full ${ratio} bg-white`}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={`h-full w-full ${fit === 'cover' ? 'object-cover' : 'object-contain'} p-2 sm:p-3`}
        />
      </div>
    </div>
  )
}

function MetricCard({ title, text }) {
  return (
    <div className={`${cardClass} p-6 sm:p-7`}>
      <h4 className="text-lg font-bold text-slate-900">{title}</h4>
      <p className="mt-3 text-sm sm:text-base leading-7 text-slate-600">{text}</p>
    </div>
  )
}

function BulletList({ items }) {
  return (
    <ul className="space-y-3 text-sm sm:text-base leading-7 text-slate-600">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-2 h-2.5 w-2.5 rounded-full bg-emerald-500 shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function Tecnologia() {
  return (
    <>
      <Head title="Tecnología" />

      <div className="min-h-screen flex flex-col overflow-x-hidden bg-white">
        <Header />

        <main className="flex-1 pt-20">
          {/* Hero */}
          <section className="relative isolate overflow-hidden bg-[#08111d]">
            <div className="absolute inset-0">
              <img
                src="/img/tecnologia/tec_1.png"
                alt="Tecnología Ankai"
                className="h-full w-full object-cover opacity-25"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-[#08111d]/90" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:py-28">
              <motion.div {...fadeUp} className="max-w-4xl">
                <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.28em] text-white/90">
                  Tecnología
                </span>

                <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.02] tracking-tight text-white">
                  Tecnología avanzada para una operación más segura, eficiente y confiable
                </h1>

                <p className="mt-6 max-w-3xl text-base sm:text-lg leading-8 text-white/85">
                  La ingeniería de Ankai integra desarrollo estructural, procesos industriales
                  avanzados, sistemas de seguridad y plataformas de gestión operacional,
                  dando forma a buses diseñados para responder por encima del estándar
                  operativo exigido en Chile.
                </p>
              </motion.div>
            </div>
          </section>

          <section className="bg-slate-50">
            <div className="mx-auto max-w-7xl px-6 py-14 sm:py-18 space-y-16 sm:space-y-20">
              {/* Origen tecnológico */}
              <motion.section {...fadeUp} className="space-y-8">
                <div className="max-w-4xl space-y-4">
                  <p className={sectionEyebrowClass}>Plataforma tecnológica</p>
                  <h2 className={sectionTitleClass}>Origen Tecnológico</h2>
                  <p className={paragraphClass}>
                    La base tecnológica de los buses Ankai proviene de la transferencia de
                    conocimiento desde la industria alemana, mediante su cooperación con
                    Kässbohrer SETRA, hoy parte de EVO BUS del grupo Daimler-Benz.
                  </p>
                  <p className={paragraphClass}>
                    Ese proceso dio origen a una plataforma de ingeniería propia, aplicada de
                    forma transversal a toda su línea productiva.
                  </p>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-start">
                  <ImageFrame
                    src="/img/tecnologia/tec_2.png"
                    alt="Línea de evolución tecnológica Ankai"
                    fit="contain"
                    ratio="aspect-[16/10]"
                  />

                  <ImageFrame
                    src="/img/tecnologia/tec_4.png"
                    alt="Concepto estructural monocasco"
                    fit="contain"
                    ratio="aspect-[16/10]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
                  <MetricCard
                    title="Introducción tecnológica"
                    text="Inicio de la cooperación técnica y adopción de tecnologías estructurales avanzadas."
                  />
                  <MetricCard
                    title="Consolidación del conocimiento"
                    text="Profundización de la transferencia tecnológica y fortalecimiento del diseño y la fabricación."
                  />
                  <MetricCard
                    title="Desarrollo propio"
                    text="Adaptación y optimización de la tecnología según estándares productivos propios."
                  />
                  <MetricCard
                    title="Dominio del monocasco"
                    text="Integración plena de una estructura más eficiente, resistente y ligera."
                  />
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-[1.15fr_0.85fr] gap-6 items-start">
                  <div className={`${cardClass} p-7 sm:p-8`}>
                    <h3 className={blockTitleClass}>Transferencia tecnológica y desarrollo</h3>
                    <p className="mt-4 text-sm sm:text-base leading-7 text-slate-600">
                      Desde 1993, Ankai incorpora metodologías de diseño estructural de alto
                      estándar y evoluciona hacia una plataforma tecnológica propia. El
                      resultado no es una simple herencia industrial, sino un proceso continuo
                      de absorción, perfeccionamiento y aplicación de ingeniería.
                    </p>
                  </div>

                  <div className={`${cardClass} p-7 sm:p-8`}>
                    <h3 className={blockTitleClass}>Principios de diseño</h3>
                    <BulletList
                      items={[
                        'Peso optimizado para mejorar eficiencia y capacidad útil.',
                        'Resistencia estructural elevada para mayor seguridad y durabilidad.',
                        'Más espacio interior mediante una estructura integral eficiente.',
                      ]}
                    />
                  </div>
                </div>
              </motion.section>

              <SectionDivider />

              {/* Ingeniería y desarrollo */}
              <motion.section {...fadeUp} className="space-y-8">
                <div className="max-w-4xl space-y-4">
                  <p className={sectionEyebrowClass}>Diseño y validación</p>
                  <h2 className={sectionTitleClass}>Ingeniería y Desarrollo</h2>
                  <p className={paragraphClass}>
                    El desarrollo de un bus moderno comienza en un entorno de ingeniería donde
                    cada componente y sistema es diseñado, simulado y validado antes de su
                    fabricación.
                  </p>
                  <p className={paragraphClass}>
                    Esto permite anticipar el comportamiento en operación real y elevar la
                    calidad del diseño final.
                  </p>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                  <ImageFrame
                    src="/img/tecnologia/tec_5.png"
                    alt="Modelación estructural del bus"
                    fit="contain"
                    ratio="aspect-[16/10]"
                  />
                  <ImageFrame
                    src="/img/tecnologia/tec_6.png"
                    alt="Simulación digital aplicada al diseño"
                    fit="contain"
                    ratio="aspect-[16/10]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <MetricCard
                    title="Simulación estructural"
                    text="Evaluación digital de resistencia, deformación y distribución de cargas antes de construir."
                  />
                  <MetricCard
                    title="Dinámica, colisión y seguridad"
                    text="Análisis de estabilidad, maniobrabilidad y respuesta del vehículo ante distintos escenarios."
                  />
                  <MetricCard
                    title="Simulación térmica"
                    text="Validación del comportamiento de sistemas críticos en condiciones operacionales exigentes."
                  />
                  <MetricCard
                    title="Simulación electrónica y energética"
                    text="Optimización del consumo energético, autonomía y estrategias de control del sistema de propulsión."
                  />
                </div>
              </motion.section>

              <SectionDivider />

              {/* Producción industrial */}
              <motion.section {...fadeUp} className="space-y-8">
                <div className="max-w-4xl space-y-4">
                  <p className={sectionEyebrowClass}>Capacidad industrial</p>
                  <h2 className={sectionTitleClass}>Producción Industrial</h2>
                  <p className={paragraphClass}>
                    El desempeño de un bus no se define solo en el diseño, sino en la capacidad
                    de producirlo de manera consistente, precisa y controlada.
                  </p>
                  <p className={paragraphClass}>
                    Ankai integra fabricación, tratamiento de superficies y control de calidad
                    dentro de una infraestructura industrial coordinada.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <ImageFrame
                    src="/img/tecnologia/tec_10.png"
                    alt="Infraestructura productiva Ankai"
                    fit="contain"
                    ratio="aspect-[4/3]"
                  />
                  <ImageFrame
                    src="/img/tecnologia/tec_11.png"
                    alt="Procesos de producción industrial"
                    fit="contain"
                    ratio="aspect-[4/3]"
                  />
                  <ImageFrame
                    src="/img/tecnologia/tec_13.png"
                    alt="Flujo productivo integrado"
                    fit="contain"
                    ratio="aspect-[4/3]"
                  />
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-[1fr_1fr] gap-6 items-start">
                  <div className={`${cardClass} p-7 sm:p-8`}>
                    <h3 className={blockTitleClass}>Infraestructura y flujo productivo</h3>
                    <p className="mt-4 text-sm sm:text-base leading-7 text-slate-600">
                      La producción se realiza en complejos industriales especializados, con
                      líneas de fabricación integradas y una organización orientada a
                      continuidad, productividad y consistencia en la calidad.
                    </p>
                  </div>

                  <div className={`${cardClass} p-7 sm:p-8`}>
                    <h3 className={blockTitleClass}>Soldadura robotizada y protección anticorrosiva</h3>
                    <p className="mt-4 text-sm sm:text-base leading-7 text-slate-600">
                      La estructura se ensambla con soldadura robotizada de alta precisión y
                      posteriormente se protege mediante electroforesis catódica total, lo que
                      mejora continuidad estructural, durabilidad y resistencia frente a
                      entornos exigentes.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                  <ImageFrame
                    src="/img/tecnologia/tec_14.png"
                    alt="Soldadura estructural robotizada"
                    fit="contain"
                    ratio="aspect-[16/10]"
                  />
                  <ImageFrame
                    src="/img/tecnologia/tec_15.png"
                    alt="Protección anti corrosión mediante E-Coat"
                    fit="contain"
                    ratio="aspect-[16/10]"
                  />
                </div>
              </motion.section>

              <SectionDivider />

              {/* Seguridad y control */}
              <motion.section {...fadeUp} className="space-y-8">
                <div className="max-w-4xl space-y-4">
                  <p className={sectionEyebrowClass}>Seguridad y control</p>
                  <h2 className={sectionTitleClass}>Sistemas Tecnológicos Integrados</h2>
                  <p className={paragraphClass}>
                    La seguridad y la confiabilidad en operación dependen de la integración de
                    múltiples sistemas eléctricos, electrónicos y de control que trabajan de
                    manera coordinada a nivel de vehículo completo.
                  </p>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                  <div className={`${cardClass} p-7 sm:p-8`}>
                    <h3 className={blockTitleClass}>Arquitectura integrada de control</h3>
                    <p className="mt-4 text-sm sm:text-base leading-7 text-slate-600">
                      El sistema 5 en 1 integra control de tracción, dirección asistida,
                      compresor de aire, DC/DC y distribución de alta tensión, mejorando
                      eficiencia, ahorro energético y confiabilidad global.
                    </p>
                  </div>

                  <ImageFrame
                    src="/img/tecnologia/tec_16.png"
                    alt="Arquitectura integrada de control del vehículo"
                    fit="contain"
                    ratio="aspect-[16/10]"
                  />
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                  <ImageFrame
                    src="/img/tecnologia/tec_17.png"
                    alt="Sistemas de alto voltaje y batería"
                    fit="contain"
                    ratio="aspect-[16/10]"
                  />

                  <div className={`${cardClass} p-7 sm:p-8`}>
                    <h3 className={blockTitleClass}>Protección de alto voltaje y batería</h3>
                    <p className="mt-4 text-sm sm:text-base leading-7 text-slate-600">
                      El vehículo incorpora múltiples capas de seguridad para gestionar de
                      forma segura el sistema de alto voltaje y la batería, incluyendo
                      protección ante sobrecorriente, humo, incendio, sobretensión y eventos
                      críticos de operación.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  <MetricCard
                    title="Driver Fatigue Warning"
                    text="Monitorea señales de fatiga y genera alertas preventivas al conductor."
                  />
                  <MetricCard
                    title="Anti-Collision Warning"
                    text="Advierte proximidad de obstáculos o vehículos para mejorar el tiempo de reacción."
                  />
                  <MetricCard
                    title="Lane Departure Warning"
                    text="Detecta desvíos involuntarios y ayuda a mantener una trayectoria segura."
                  />
                  <MetricCard
                    title="Speed Limit Indicator"
                    text="Advierte excesos de velocidad o condiciones de operación no seguras."
                  />
                  <MetricCard
                    title="Slope Start Assist"
                    text="Evita el retroceso involuntario al iniciar la marcha en pendiente."
                  />
                  <MetricCard
                    title="Protección operacional"
                    text="Diseño preparado para humedad, polvo, variación térmica y escenarios de anegamiento."
                  />
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-[0.9fr_1.1fr] gap-6 items-start">
                  <ImageFrame
                    src="/img/tecnologia/tec_18.png"
                    alt="Compatibilidad electromagnética y operación inteligente"
                    fit="contain"
                    ratio="aspect-[16/10]"
                  />

                  <div className={`${cardClass} p-7 sm:p-8`}>
                    <h3 className={blockTitleClass}>Compatibilidad electromagnética y entorno real</h3>
                    <p className="mt-4 text-sm sm:text-base leading-7 text-slate-600">
                      El diseño considera compatibilidad electromagnética a nivel de sistema y
                      soluciones técnicas para asegurar continuidad operativa en ambientes
                      exigentes, incluyendo capacidad de vadeo y un amplio rango de operación térmica.
                    </p>
                  </div>
                </div>
              </motion.section>

              <SectionDivider />

              {/* Telemetría */}
              <motion.section {...fadeUp} className="space-y-8">
                <div className="max-w-4xl space-y-4">
                  <p className={sectionEyebrowClass}>Operación inteligente</p>
                  <h2 className={sectionTitleClass}>Plataforma Inteligente y Telemetría</h2>
                  <p className={paragraphClass}>
                    La telemetría permite recopilar, transmitir y analizar en tiempo real
                    variables críticas del vehículo y su operación.
                  </p>
                  <p className={paragraphClass}>
                    Más que una exigencia de control, se convierte en una base para optimizar
                    la gestión completa del servicio.
                  </p>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                  <ImageFrame
                    src="/img/tecnologia/tec_19.png"
                    alt="Plataforma inteligente de big data"
                    fit="contain"
                    ratio="aspect-[16/10]"
                  />
                  <div className={`${cardClass} p-7 sm:p-8`}>
                    <h3 className={blockTitleClass}>Big Data e integración tecnológica</h3>
                    <p className="mt-4 text-sm sm:text-base leading-7 text-slate-600">
                      La solución combina monitoreo del vehículo, gestión operacional,
                      análisis de conducción e integración tecnológica entre Ankai, SGX y
                      Magnetic North para adaptar la plataforma a la operación local.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                  <div className={`${cardClass} p-7 sm:p-8`}>
                    <h3 className={blockTitleClass}>Sistema de información embarcado</h3>
                    <p className="mt-4 text-sm sm:text-base leading-7 text-slate-600">
                      El vehículo integra dispositivos y sensores en una red embarcada que
                      conecta el bus con los centros de control, habilitando monitoreo,
                      coordinación del servicio y gestión operacional en tiempo real.
                    </p>
                  </div>

                  <ImageFrame
                    src="/img/tecnologia/tec_20.png"
                    alt="Sistema de información embarcado"
                    fit="contain"
                    ratio="aspect-[16/10]"
                  />
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-[1fr_1fr] gap-6 items-start">
                  <ImageFrame
                    src="/img/tecnologia/tec_21.png"
                    alt="Análisis de datos y optimización operacional"
                    fit="contain"
                    ratio="aspect-[16/10]"
                  />

                  <div className={`${cardClass} p-7 sm:p-8`}>
                    <h3 className={blockTitleClass}>Análisis de datos y optimización operacional</h3>
                    <p className="mt-4 text-sm sm:text-base leading-7 text-slate-600">
                      La información embarcada se transforma en decisiones: permite medir
                      desempeño, optimizar rutas, validar programas operacionales, reducir
                      costos y proyectar mantenimiento en función del uso real.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  <MetricCard
                    title="Indicadores operacionales"
                    text="Cumplimiento del programa, frecuencia, regularidad, puntualidad y trazabilidad completa."
                  />
                  <MetricCard
                    title="Eficiencia operacional"
                    text="Velocidad promedio, frecuencia, kilómetros productivos y consumo energético real."
                  />
                  <MetricCard
                    title="Gestión económica"
                    text="Relación directa entre operación, rentabilidad, uso de recursos y control de costos."
                  />
                </div>

                <div className={`${cardClass} bg-gradient-to-br from-[#003b5c] to-[#00a884] p-8 sm:p-10 text-white border-0`}>
                  <h3 className="text-2xl sm:text-3xl font-extrabold">
                    Acompañamiento Estratégico
                  </h3>
                  <p className="mt-4 text-sm sm:text-base leading-8 text-white/95 max-w-4xl">
                    En SGX Chile entendemos que la electromovilidad no depende solo del
                    producto, sino de la capacidad de incorporarlo, entenderlo y operarlo con
                    criterio. Por eso acompañamos a los operadores en su transición,
                    entregando herramientas, información y soporte para capturar beneficios
                    reales de eficiencia, desempeño y rentabilidad.
                  </p>
                  <p className="mt-5 text-lg sm:text-xl font-semibold text-white">
                    La electromovilidad no es sólo un cambio tecnológico, es una nueva forma de operar.
                  </p>
                </div>
              </motion.section>
            </div>
          </section>
        </main>

        <Footer />
      </div>

      <ContactActions />
    </>
  )
}
