import { Head } from '@inertiajs/react'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'
import ContactActions from '@/Components/ContactActions'
import { motion } from 'framer-motion'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.55 },
}

const sectionTitleClass =
  'text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight'

const sectionEyebrowClass =
  'text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700'

const subsectionTitleClass =
  'text-xl sm:text-2xl font-bold text-gray-900'

const paragraphClass =
  'text-gray-700 leading-relaxed text-sm sm:text-base'

const imageCardClass =
  'overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm'

const ImageBlock = ({ src, alt, className = '' }) => (
  <div className={`${imageCardClass} ${className}`}>
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover"
      loading="lazy"
    />
  </div>
)

const SectionDivider = () => (
  <div className="h-px w-full bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />
)

export default function Tecnologia() {
  return (
    <>
      <Head title="Tecnología" />

      <div className="min-h-screen flex flex-col overflow-x-hidden bg-white">
        <Header />

        <main className="flex-1 pt-20">
          <section className="relative overflow-hidden bg-[#0b1320]">
            <div className="absolute inset-0">
              <img
                src="/img/tecnologia/tec_1.png"
                alt="Tecnología Ankai"
                className="h-full w-full object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/75" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 sm:py-24 lg:py-28">
              <motion.div
                {...fadeUp}
                className="max-w-4xl space-y-6 text-white"
              >
                <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em]">
                  Tecnología
                </span>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                  Tecnología avanzada para una operación más segura, eficiente y confiable
                </h1>

                <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-3xl">
                  La ingeniería de Ankai integra desarrollo estructural, procesos industriales
                  avanzados, sistemas de seguridad y plataformas de gestión operacional, dando
                  forma a buses diseñados para superar las exigencias del transporte moderno en Chile.
                </p>
              </motion.div>
            </div>
          </section>

          <section className="bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 py-14 sm:py-16 space-y-16 sm:space-y-20">
              <motion.section {...fadeUp} className="space-y-8">
                <div className="space-y-4">
                  <p className={sectionEyebrowClass}>Plataforma tecnológica</p>
                  <h2 className={sectionTitleClass}>Origen Tecnológico</h2>
                  <p className={paragraphClass}>
                    La base tecnológica de los buses Ankai se origina en la transferencia
                    de conocimiento desde la industria alemana, específicamente a través de
                    su cooperación con Kässbohrer SETRA, hoy parte de EVO BUS del grupo
                    Daimler-Benz.
                  </p>
                  <p className={paragraphClass}>
                    Este proceso permitió incorporar y desarrollar tecnologías avanzadas de
                    diseño estructural, sentando las bases de una plataforma de ingeniería
                    que ha sido posteriormente adaptada, optimizada, perfeccionada y aplicada
                    a toda la línea productiva de Ankai.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <ImageBlock
                    src="/img/tecnologia/tec_1.png"
                    alt="Origen tecnológico Ankai 1"
                    className="h-[260px] sm:h-[320px]"
                  />
                  <ImageBlock
                    src="/img/tecnologia/tec_2.png"
                    alt="Origen tecnológico Ankai 2"
                    className="h-[260px] sm:h-[320px]"
                  />
                </div>

                <div className="space-y-4">
                  <h3 className={subsectionTitleClass}>Transferencia tecnológica y desarrollo</h3>
                  <p className={paragraphClass}>
                    A partir del año 1993, Ankai inicia un proceso de cooperación técnica con
                    SETRA, uno de los fabricantes más reconocidos a nivel mundial en el
                    desarrollo de buses de alto estándar.
                  </p>
                  <p className={paragraphClass}>
                    A partir de esta colaboración, se introducen modelos desarrollados bajo
                    licencia, permitiendo la adopción progresiva de tecnologías estructurales
                    avanzadas y metodologías de diseño propias de la ingeniería alemana.
                  </p>
                </div>

                <ImageBlock
                  src="/img/tecnologia/tec_3.png"
                  alt="Transferencia tecnológica y desarrollo"
                  className="h-[280px] sm:h-[420px]"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4 rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
                    <h4 className="text-lg font-bold text-gray-900">
                      Primera etapa: Introducción tecnológica
                    </h4>
                    <p className={paragraphClass}>
                      Se inicia la primera década de cooperación técnica con SETRA,
                      incorporando los primeros modelos desarrollados bajo licencia y
                      estableciendo las bases para la adopción de tecnologías estructurales
                      avanzadas.
                    </p>
                  </div>

                  <div className="space-y-4 rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
                    <h4 className="text-lg font-bold text-gray-900">
                      Segunda etapa: Consolidación del conocimiento
                    </h4>
                    <p className={paragraphClass}>
                      Se desarrolla una segunda década de colaboración, profundizando la
                      transferencia tecnológica e incorporando nuevos modelos, lo que permite
                      consolidar capacidades de diseño y fabricación.
                    </p>
                  </div>

                  <div className="space-y-4 rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
                    <h4 className="text-lg font-bold text-gray-900">
                      Tercera etapa: Adaptación y desarrollo propio
                    </h4>
                    <p className={paragraphClass}>
                      A partir de la experiencia adquirida, Ankai adapta y optimiza estas
                      tecnologías en función de sus propios estándares productivos, integrando
                      mejoras estructurales y de fabricación.
                    </p>
                  </div>

                  <div className="space-y-4 rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
                    <h4 className="text-lg font-bold text-gray-900">
                      Cuarta etapa: Dominio de la tecnología monocasco
                    </h4>
                    <p className={paragraphClass}>
                      Como resultado de este proceso, Ankai logra absorber y desarrollar
                      completamente la tecnología de estructura monocasco, originalmente
                      aplicada en la industria aeronáutica y posteriormente en buses de alto estándar.
                    </p>
                    <p className={paragraphClass}>
                      En 2008, la compañía obtiene la patente de invención de esta tecnología,
                      consolidando su dominio y aplicándola de manera transversal en sus
                      procesos de diseño y producción.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className={subsectionTitleClass}>Concepto de monocasco</h3>
                  <p className={paragraphClass}>
                    El diseño monocasco se basa en una estructura integral, donde la
                    carrocería actúa como un único elemento resistente, eliminando la
                    necesidad de un chasis independiente y permitiendo una distribución más
                    eficiente de cargas.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                  <ImageBlock
                    src="/img/tecnologia/tec_4.png"
                    alt="Concepto de monocasco"
                    className="h-[240px] sm:h-[300px]"
                  />

                  <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200 space-y-4">
                    <h3 className={subsectionTitleClass}>Principios de diseño</h3>
                    <p className={paragraphClass}>
                      La estructura monocasco del bus se creó a partir del concepto de un
                      avión, con principios similares de diseño:
                    </p>
                    <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
                      <li><strong>Peso:</strong> lo más liviano posible</li>
                      <li><strong>Resistencia estructural:</strong> lo más resistente posible</li>
                      <li><strong>Espacio:</strong> lo más amplio posible</li>
                    </ul>
                  </div>
                </div>

                <p className={paragraphClass}>
                  El origen tecnológico de Ankai no responde únicamente a una colaboración
                  inicial, sino a un proceso continuo de absorción, desarrollo y aplicación
                  de ingeniería, que permite hoy contar con una plataforma tecnológica propia,
                  basada en estándares internacionales y adaptada a distintas condiciones
                  operacionales.
                </p>
              </motion.section>

              <SectionDivider />

              <motion.section {...fadeUp} className="space-y-8">
                <div className="space-y-4">
                  <p className={sectionEyebrowClass}>Diseño y validación</p>
                  <h2 className={sectionTitleClass}>Ingeniería y Desarrollo</h2>
                  <p className={paragraphClass}>
                    El desarrollo de un bus moderno no comienza en la línea de producción,
                    sino en un entorno de ingeniería donde cada componente y sistema es
                    diseñado, simulado y validado antes de su fabricación.
                  </p>
                  <p className={paragraphClass}>
                    Ankai integra herramientas avanzadas de modelación, simulación y
                    validación para desarrollar sus vehículos, permitiendo anticipar su
                    comportamiento en operación real y optimizar su desempeño desde la etapa
                    de diseño.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <ImageBlock
                    src="/img/tecnologia/tec_5.png"
                    alt="Ingeniería y desarrollo 1"
                    className="h-[260px] sm:h-[320px]"
                  />
                  <ImageBlock
                    src="/img/tecnologia/tec_6.png"
                    alt="Ingeniería y desarrollo 2"
                    className="h-[260px] sm:h-[320px]"
                  />
                </div>

                <p className={paragraphClass}>
                  El proceso de ingeniería incorpora simulaciones digitales que permiten
                  evaluar el comportamiento del vehículo bajo distintas condiciones
                  operacionales, reduciendo la incertidumbre y mejorando la calidad del
                  diseño final.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200 space-y-3">
                    <h3 className={subsectionTitleClass}>Simulación Estructural</h3>
                    <p className={paragraphClass}>
                      Se analiza digitalmente la estructura del vehículo para evaluar su
                      resistencia, deformación y distribución de cargas, optimizando su
                      desempeño antes de su construcción.
                    </p>
                  </div>

                  <ImageBlock
                    src="/img/tecnologia/tec_7.png"
                    alt="Simulación estructural"
                    className="h-[240px] sm:h-[280px]"
                  />

                  <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200 space-y-3">
                    <h3 className={subsectionTitleClass}>
                      Simulación Dinámica, Colisión y Seguridad
                    </h3>
                    <p className={paragraphClass}>
                      Se estudia el comportamiento dinámico del vehículo, incluyendo
                      estabilidad, maniobrabilidad y respuesta en operación. Se simulan
                      distintos escenarios de impacto, incluyendo colisiones frontales,
                      laterales y volcamiento, con el objetivo de evaluar la integridad
                      estructural del vehículo.
                    </p>
                  </div>

                  <ImageBlock
                    src="/img/tecnologia/tec_8.png"
                    alt="Simulación dinámica y seguridad"
                    className="h-[240px] sm:h-[280px]"
                  />

                  <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200 space-y-3">
                    <h3 className={subsectionTitleClass}>Simulación Térmica</h3>
                    <p className={paragraphClass}>
                      Se modela la gestión térmica de los sistemas críticos del vehículo,
                      asegurando un adecuado comportamiento en condiciones de operación exigentes.
                    </p>
                  </div>

                  <ImageBlock
                    src="/img/tecnologia/tec_9.png"
                    alt="Simulación térmica"
                    className="h-[240px] sm:h-[280px]"
                  />

                  <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200 space-y-3 md:col-span-2">
                    <h3 className={subsectionTitleClass}>
                      Simulación Electrónica y Energética
                    </h3>
                    <p className={paragraphClass}>
                      Se modela el consumo energético y el desempeño del sistema de
                      propulsión, permitiendo optimizar eficiencia y autonomía. Se desarrollan
                      y validan sistemas de control electrónico mediante simulación,
                      incluyendo estrategias de operación e integración de componentes.
                    </p>
                  </div>
                </div>
              </motion.section>

              <SectionDivider />

              <motion.section {...fadeUp} className="space-y-8">
                <div className="space-y-4">
                  <p className={sectionEyebrowClass}>Capacidad industrial</p>
                  <h2 className={sectionTitleClass}>Producción Industrial</h2>
                  <p className={paragraphClass}>
                    El desempeño de un bus no se define únicamente en su diseño, sino en la
                    capacidad de llevar ese diseño a la realidad de manera consistente,
                    precisa y controlada.
                  </p>
                  <p className={paragraphClass}>
                    Ankai cuenta con una infraestructura industrial integrada, donde procesos
                    de fabricación, tratamiento de superficies y control de calidad operan de
                    forma coordinada, asegurando que cada unidad producida mantenga los
                    estándares definidos en su etapa de ingeniería.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className={subsectionTitleClass}>Infraestructura Productiva</h3>
                  <p className={paragraphClass}>
                    La producción de buses se realiza en complejos industriales especializados
                    que integran distintas líneas de fabricación, incluyendo plantas para
                    buses de gran escala, buses livianos y componentes de nueva energía. Las
                    instalaciones de Ankai actualmente superan los 800.000 km2.
                  </p>
                  <p className={paragraphClass}>
                    Estas instalaciones permiten una producción continua y estructurada, con
                    capacidades industriales consolidadas a gran escala.
                  </p>
                  <p className={paragraphClass}>
                    Ankai es la única empresa en China que cuenta con el Centro Nacional de
                    Investigación y Desarrollo (I+D) en Integración de Sistemas de Buses
                    Eléctricos, además de liderar el Centro Nacional y Local de Ingeniería en
                    Desarrollo y Aplicación de Sistemas de Buses Eléctricos.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <ImageBlock
                    src="/img/tecnologia/tec_10.png"
                    alt="Infraestructura productiva 1"
                    className="h-[220px] sm:h-[260px]"
                  />
                  <ImageBlock
                    src="/img/tecnologia/tec_11.png"
                    alt="Infraestructura productiva 2"
                    className="h-[220px] sm:h-[260px]"
                  />
                  <ImageBlock
                    src="/img/tecnologia/tec_12.png"
                    alt="Infraestructura productiva 3"
                    className="h-[220px] sm:h-[260px]"
                  />
                </div>

                <div className="space-y-4">
                  <h3 className={subsectionTitleClass}>Flujo Productivo Integrado</h3>
                  <p className={paragraphClass}>
                    Ankai cuenta con talleres de producción modernos y una línea de
                    producción en “U” diseñada científicamente. Gracias al sistema de
                    transporte automático mecanizado y a una disposición de procesos
                    eficiente, el avanzado sistema de gestión TPS permite una producción
                    continua, rápida y eficiente, mejorando significativamente la productividad.
                  </p>
                </div>

                <ImageBlock
                  src="/img/tecnologia/tec_13.png"
                  alt="Flujo productivo integrado"
                  className="h-[220px] sm:h-[300px]"
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                  <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200 space-y-4">
                    <h3 className={subsectionTitleClass}>Soldadura Estructural Robotizada</h3>
                    <p className={paragraphClass}>
                      La estructura del vehículo es ensamblada mediante procesos de soldadura
                      robotizada, que permiten unir subconjuntos estructurales con alta
                      precisión y bajo control de deformaciones.
                    </p>
                    <p className={paragraphClass}>
                      Los equipos robotizados para soldaduras de piezas pequeñas se utilizan
                      principalmente para unir subconjuntos de estructuras. Con un mecanismo
                      automático de volteo, permiten sincronizar soldadura, cambio de moldes,
                      carga y descarga de piezas, logrando una soldadura integral bajo estado
                      de sujeción. Esto reduce deformaciones y mejora la precisión del
                      proceso. Los sistemas permiten una precisión de la soldadura en torno a
                      ±1 mm, con tiempos de producción de hasta 18 minutos por pieza.
                    </p>
                    <p className={paragraphClass}>
                      Este enfoque garantiza continuidad estructural, mejora la calidad de las
                      uniones y reduce desviaciones en el proceso productivo.
                    </p>
                  </div>

                  <ImageBlock
                    src="/img/tecnologia/tec_14.png"
                    alt="Soldadura estructural robotizada"
                    className="h-[300px] sm:h-[420px]"
                  />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                  <ImageBlock
                    src="/img/tecnologia/tec_15.png"
                    alt="Electrofóresis catódica"
                    className="h-[260px] sm:h-[320px]"
                  />

                  <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200 space-y-4">
                    <h3 className={subsectionTitleClass}>
                      Protección Anti-Corrosión: Electrofóresis Catódica (E-Coat)
                    </h3>
                    <p className={paragraphClass}>
                      La tecnología de electrofóresis aplicada a la carrocería completa
                      proporciona máxima resistencia a la niebla salina y a la humedad, lo
                      que asegura una mayor durabilidad frente a distintos entornos
                      climáticos y prolonga la vida útil del vehículo.
                    </p>
                    <p className={paragraphClass}>
                      Una vez ensamblada la estructura, el vehículo es sometido a un proceso
                      de electroforesis catódica por inmersión total, donde se aplica un
                      recubrimiento uniforme mediante corriente eléctrica.
                    </p>
                    <p className={paragraphClass}>
                      Este proceso permite proteger toda la carrocería, incluyendo cavidades
                      internas y zonas de difícil acceso.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className={paragraphClass}>
                    La integración de procesos de diseño estructural, soldadura robotizada,
                    tratamiento anticorrosivo y pintura automatizada permite asegurar que
                    cada bus fabricado mantenga un estándar consistente de calidad,
                    durabilidad y desempeño.
                  </p>
                  <p className={paragraphClass}>
                    Este enfoque industrial reduce variabilidad en la producción y mejora la
                    confiabilidad del vehículo en operación real.
                  </p>
                  <p className={paragraphClass}>
                    La producción industrial en Ankai responde a un sistema integrado, donde
                    cada etapa del proceso está diseñada para asegurar que el vehículo final
                    refleje fielmente su diseño de ingeniería, manteniendo altos estándares
                    de calidad, resistencia y durabilidad.
                  </p>
                </div>
              </motion.section>

              <SectionDivider />

              <motion.section {...fadeUp} className="space-y-8">
                <div className="space-y-4">
                  <p className={sectionEyebrowClass}>Seguridad y control</p>
                  <h2 className={sectionTitleClass}>Sistemas Tecnológicos Integrados</h2>
                  <p className={paragraphClass}>
                    El desempeño y la seguridad de un bus en operación no depende únicamente
                    de su estructura o sistema de propulsión, sino de la integración de
                    múltiples sistemas tecnológicos que permiten garantizar seguridad,
                    estabilidad y confiabilidad en condiciones reales.
                  </p>
                  <p className={paragraphClass}>
                    Ankai desarrolla e integra soluciones a nivel de vehículo completo,
                    combinando sistemas eléctricos, electrónicos y de control para asegurar
                    un funcionamiento coordinado y seguro.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                  <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200 space-y-4">
                    <h3 className={subsectionTitleClass}>Arquitectura Integrada de Control</h3>
                    <p className={paragraphClass}>
                      El sistema del vehículo incorpora controladores altamente integrados
                      que coordinan el funcionamiento de los principales subsistemas,
                      incluyendo propulsión, dirección, compresión de aire y distribución eléctrica.
                    </p>
                    <p className={paragraphClass}>
                      El controlador integrado 5 en 1 combina el controlador del motor de
                      tracción, el controlador del motor de dirección asistida electrónica,
                      el controlador del motor del compresor de aire, el controlador de motor
                      DC/DC y la distribución de alta tensión. Este diseño permite alcanzar
                      mayor eficiencia, ahorro energético y un nivel superior de seguridad y confiabilidad.
                    </p>
                  </div>

                  <ImageBlock
                    src="/img/tecnologia/tec_16.png"
                    alt="Arquitectura integrada de control"
                    className="h-[260px] sm:h-[320px]"
                  />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                  <ImageBlock
                    src="/img/tecnologia/tec_17.png"
                    alt="Seguridad de alto voltaje y baterías"
                    className="h-[300px] sm:h-[430px]"
                  />

                  <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200 space-y-4">
                    <h3 className={subsectionTitleClass}>
                      Seguridad de los Sistemas de Alto Voltaje y Sistema de Batería
                    </h3>
                    <p className={paragraphClass}>
                      El sistema eléctrico del vehículo incorpora seis niveles de protección
                      que permiten gestionar de manera segura la operación del sistema de
                      alto voltaje: protección contra sobrecorriente, sistema de detección de
                      humo y fuego, conmutación contra sobrecorriente, sistemas de
                      distribución segura de la alimentación de alto voltaje, protección
                      activa y aislamiento, y protección activa contra sobrecorriente y sobretensión.
                    </p>
                    <p className={paragraphClass}>
                      A su vez, el sistema de baterías incorpora cinco capas de protección
                      orientadas a prevenir fallas críticas y asegurar operación segura en
                      todo momento: diseño ignífugo y retardante de llamas, sistemas de
                      detección de humo, sistema de protección contra sobrecorriente,
                      sobretensión, sobrecarga y sobredescarga, sistemas de desbloqueo y
                      desmontaje rápido, y sistema automático de detección de incendios.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className={subsectionTitleClass}>
                    Sistemas de Seguridad Activa y Asistencia al Conductor
                  </h3>
                  <p className={paragraphClass}>
                    Los buses eléctricos Ankai cuentan con una serie de sistemas integrados
                    para garantizar una conducción bajo los máximos parámetros de seguridad.
                    El vehículo incorpora sistemas de asistencia basados en control
                    inteligente que permiten reducir el riesgo de incidentes en operación,
                    apoyando al conductor y actuando frente a situaciones anómalas.
                  </p>
                  <p className={paragraphClass}>
                    Estos sistemas se enfocan en la prevención de eventos críticos mediante
                    el monitoreo del comportamiento del conductor y la detección de
                    condiciones de riesgo.
                  </p>
                  <p className={paragraphClass}>Entre ellos, se cuentan:</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {[
                    {
                      title: 'Driver Fatigue Warning (DFW)',
                      text:
                        'Sistema de detección de fatiga del conductor que monitorea patrones de conducción y comportamiento al volante, identificando señales de cansancio o pérdida de atención. Ante la detección de condiciones anómalas, el sistema genera alertas que permiten al conductor tomar acciones preventivas, reduciendo el riesgo de accidentes asociados a fatiga.',
                    },
                    {
                      title: 'Anti-Collision Warning (ACW)',
                      text:
                        'Sistema de advertencia de colisión que detecta la proximidad de obstáculos o vehículos en la trayectoria, alertando al conductor con anticipación frente a posibles impactos. Esta función permite mejorar el tiempo de reacción y reducir la probabilidad de colisiones en entornos urbanos o de alta densidad de tráfico.',
                    },
                    {
                      title: 'Lane Departure Warning (LDW)',
                      text:
                        'Sistema de alerta de cambio involuntario de carril que monitorea la posición del vehículo respecto a las líneas de la vía. En caso de desviaciones no intencionadas, el sistema emite alertas al conductor, contribuyendo a mantener la trayectoria y reducir riesgos asociados a distracciones o fatiga.',
                    },
                    {
                      title: 'Speed Limit Indicator (SLI)',
                      text:
                        'Sistema de monitoreo de velocidad que permite advertir al conductor cuando se superan los límites definidos o condiciones de operación seguras. Esta función contribuye a una conducción más controlada, especialmente en entornos urbanos o zonas con restricciones específicas.',
                    },
                    {
                      title: 'Slope Start Assist (SSA / HSA)',
                      text:
                        'Sistema de asistencia en partida en pendiente que evita el retroceso involuntario del vehículo al iniciar la marcha en inclinaciones. Esta función mejora el control del bus en maniobras críticas, especialmente en zonas urbanas con topografía exigente.',
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200 space-y-3"
                    >
                      <h4 className="text-lg font-bold text-gray-900">{item.title}</h4>
                      <p className={paragraphClass}>{item.text}</p>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                  <ImageBlock
                    src="/img/tecnologia/tec_18.png"
                    alt="Compatibilidad electromagnética"
                    className="h-[220px] sm:h-[280px]"
                  />

                  <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200 space-y-4">
                    <h3 className={subsectionTitleClass}>Compatibilidad Electromagnética (EMC)</h3>
                    <p className={paragraphClass}>
                      El diseño del vehículo considera criterios de compatibilidad
                      electromagnética a nivel de sistema, asegurando funcionamiento estable
                      de todos los componentes electrónicos.
                    </p>

                    <h3 className={`${subsectionTitleClass} pt-2`}>
                      Protección Ambiental y Operativa
                    </h3>
                    <p className={paragraphClass}>
                      El vehículo ha sido diseñado para operar de manera confiable en
                      condiciones ambientales exigentes, incorporando soluciones técnicas
                      orientadas a proteger sus sistemas críticos frente a factores externos
                      como humedad, polvo, variaciones térmicas y condiciones de operación severas.
                    </p>
                    <p className={paragraphClass}>
                      A nivel de componentes eléctricos y electrónicos, se consideran
                      estándares de protección elevados, incluyendo grados de sellado que
                      permiten evitar el ingreso de agua y partículas, asegurando la
                      continuidad operativa incluso en entornos adversos.
                    </p>
                    <p className={paragraphClass}>
                      En términos de operación en terreno, el bus cuenta con capacidades que
                      le permiten enfrentar condiciones urbanas complejas, incluyendo
                      escenarios de anegamiento. La configuración del sistema eléctrico y la
                      ubicación de componentes críticos permiten alcanzar capacidades de
                      vadeo superiores a los 500 mm.
                    </p>
                    <p className={paragraphClass}>
                      Adicionalmente, el diseño considera un rango amplio de operación
                      térmica, permitiendo el funcionamiento del vehículo en temperaturas
                      extremas, desde climas fríos hasta condiciones de alta temperatura, sin
                      comprometer el desempeño de los sistemas de propulsión, baterías o control.
                    </p>
                    <p className={paragraphClass}>
                      Estas características permiten enfrentar escenarios reales donde la
                      continuidad del servicio es crítica, reduciendo riesgos de falla y
                      asegurando disponibilidad operativa en el tiempo.
                    </p>
                  </div>
                </div>
              </motion.section>

              <SectionDivider />

              <motion.section {...fadeUp} className="space-y-8">
                <div className="space-y-4">
                  <p className={sectionEyebrowClass}>Operación inteligente</p>
                  <h2 className={sectionTitleClass}>Plataforma Inteligente y Telemetría</h2>
                  <p className={paragraphClass}>
                    La telemetría corresponde al conjunto de tecnologías que permiten
                    recopilar, transmitir y analizar información del vehículo y su operación
                    en tiempo real, incluyendo variables como ubicación, velocidad, estado de
                    sistemas, comportamiento de conducción y desempeño energético.
                  </p>
                  <p className={paragraphClass}>
                    En el contexto del transporte público moderno, la telemetría constituye
                    un estándar mínimo para la operación, ya que permite monitorear el
                    cumplimiento de los programas operacionales, la calidad del servicio y la
                    trazabilidad de la flota.
                  </p>
                  <p className={paragraphClass}>
                    Sin embargo, su valor va más allá del cumplimiento normativo. La
                    telemetría habilita una gestión avanzada de la operación, permitiendo
                    optimizar rutas, mejorar la eficiencia del sistema, anticipar fallas,
                    analizar el comportamiento de los conductores y tomar decisiones basadas
                    en datos en tiempo real.
                  </p>
                  <p className={paragraphClass}>
                    Sobre esta base, los buses Ankai incorporan una arquitectura tecnológica
                    que permite integrar estos sistemas de información, cuya implementación y
                    adaptación a la operación local se realiza mediante la coordinación entre
                    Ankai, SGX y Magnetic North, conformando una solución completa de
                    transporte inteligente.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <ImageBlock
                    src="/img/tecnologia/tec_19.png"
                    alt="Plataforma inteligente de big data"
                    className="h-[280px] sm:h-[340px]"
                  />
                  <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200 space-y-4">
                    <h3 className={subsectionTitleClass}>Plataforma Inteligente de Big Data de Ankai</h3>
                    <p className={paragraphClass}>
                      Ankai ha desarrollado funciones como monitoreo del vehículo, gestión
                      operacional, alertas del sistema eléctrico y baterías, y funciones de
                      análisis de comportamiento en la conducción.
                    </p>
                    <p className={paragraphClass}>
                      Este desarrollo da soporte a los clientes para tener un control
                      razonable sobre la flota, analizar el comportamiento de sus conductores
                      y definir estrategias inteligentes de carga del vehículo.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                  <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200 space-y-4">
                    <h3 className={subsectionTitleClass}>
                      Integración Tecnológica (ANKAI – SGX – MAGNETIC NORTH)
                    </h3>
                    <p className={paragraphClass}>
                      La implementación de estos sistemas en una operación real requiere una
                      integración tecnológica que considere las condiciones locales, los
                      requerimientos del sistema de transporte y las necesidades específicas
                      de cada operador.
                    </p>
                    <p className={paragraphClass}>
                      En este contexto, SGX cumple un rol central como integrador,
                      articulando la plataforma del fabricante con soluciones tecnológicas especializadas.
                    </p>
                  </div>

                  <ImageBlock
                    src="/img/tecnologia/tec_20.png"
                    alt="Integración tecnológica"
                    className="h-[260px] sm:h-[320px]"
                  />
                </div>

                <div className="space-y-4 rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
                  <h3 className={subsectionTitleClass}>
                    Sistema de Información Embarcado y Gestión de la Operación
                  </h3>
                  <p className={paragraphClass}>
                    El vehículo incorpora una arquitectura de sistemas embarcados que permite
                    capturar, procesar y transmitir información en tiempo real, integrando
                    múltiples dispositivos y sensores en una misma red.
                  </p>
                  <p className={paragraphClass}>
                    Esta infraestructura no solo permite el monitoreo del estado del bus, sino
                    que habilita directamente la gestión de la operación, estableciendo una
                    conexión permanente entre el vehículo y los centros de control.
                  </p>
                  <p className={paragraphClass}>
                    A través de esta integración, es posible coordinar la planificación,
                    ejecución y control del servicio en tiempo real, mejorando la eficiencia
                    del sistema y asegurando el cumplimiento de los programas operacionales.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                  <ImageBlock
                    src="/img/tecnologia/tec_21.png"
                    alt="Análisis de datos y optimización de la operación"
                    className="h-[300px] sm:h-[420px]"
                  />

                  <div className="space-y-6">
                    <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200 space-y-4">
                      <h3 className={subsectionTitleClass}>
                        Análisis de Datos y Optimización de la Operación
                      </h3>
                      <p className={paragraphClass}>
                        La información generada por los sistemas embarcados se procesa
                        mediante herramientas de análisis e inteligencia artificial. La
                        telemetría no sólo permite monitorear el estado del vehículo, sino
                        que constituye la base para la gestión integral de la operación.
                      </p>
                      <p className={paragraphClass}>
                        En sistemas regulados, estos datos permiten medir el cumplimiento de
                        indicadores como frecuencia, puntualidad y kilómetros comerciales válidos.
                        En operaciones privadas, permiten construir y optimizar modelos
                        operacionales y financieros basados en evidencia real.
                      </p>
                      <p className={paragraphClass}>
                        A partir de esta información, es posible estructurar, validar y
                        mejorar el programa operacional, optimizando recursos, reduciendo costos
                        y asegurando continuidad operacional.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                  <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200 space-y-4 xl:col-span-1">
                    <h3 className={subsectionTitleClass}>Indicadores Operacionales</h3>
                    <p className={paragraphClass}>
                      La plataforma permite monitorear y analizar indicadores fundamentales
                      para cualquier tipo de operación de transporte de pasajeros:
                    </p>
                    <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
                      <li>Cumplimiento del programa operacional</li>
                      <li>Frecuencia y regularidad</li>
                      <li>Puntualidad</li>
                      <li>Kilómetros operacionales</li>
                      <li>Trazabilidad completa de la operación</li>
                    </ul>
                  </div>

                  <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200 space-y-4 xl:col-span-1">
                    <h3 className={subsectionTitleClass}>Gestión de la Eficiencia Operacional</h3>
                    <p className={paragraphClass}>
                      El análisis de datos permite identificar desviaciones y oportunidades de mejora:
                    </p>
                    <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
                      <li>Velocidad promedio por ruta</li>
                      <li>Optimización de frecuencias</li>
                      <li>Relación entre kilómetros productivos y no productivos</li>
                      <li>Consumo energético real por condición operacional</li>
                      <li>Demanda del servicio</li>
                      <li>Impacto del estilo de conducción</li>
                    </ul>
                  </div>

                  <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200 space-y-4 xl:col-span-1">
                    <h3 className={subsectionTitleClass}>Gestión Económica de la Operación</h3>
                    <p className={paragraphClass}>
                      La telemetría permite vincular directamente la operación con su
                      desempeño económico, entregando información clave para la toma de
                      decisiones operacionales y financieras.
                    </p>
                    <p className={paragraphClass}>
                      En sistemas concesionados, esto se traduce en indicadores que determinan
                      ingresos. En sistemas privados, permite evaluar rentabilidad,
                      optimizar recursos y controlar costos operacionales.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200 space-y-4">
                  <h3 className={subsectionTitleClass}>Validación y Mejora Continua</h3>
                  <p className={paragraphClass}>
                    El uso continuo de datos permite contrastar la operación real con las
                    proyecciones iniciales, generando un proceso de mejora continua basado en evidencia.
                  </p>
                  <p className={paragraphClass}>Esto permite:</p>
                  <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
                    <li>Validar modelos operacionales</li>
                    <li>Identificar riesgos e ineficiencias</li>
                    <li>Ajustar estrategias de operación</li>
                    <li>Proyectar mantenimiento en función del uso real</li>
                  </ul>
                  <p className={paragraphClass}>
                    En ese contexto, la telemetría deja de ser una mera herramienta de
                    monitoreo y pasa a ser un sistema de soporte integral para la toma de decisiones estratégicas.
                  </p>
                </div>

                <div className="rounded-3xl bg-gradient-to-br from-[#003b5c] to-[#00a884] p-8 sm:p-10 text-white shadow-xl space-y-5">
                  <h3 className="text-2xl sm:text-3xl font-extrabold">
                    Acompañamiento Estratégico
                  </h3>
                  <p className="text-white/95 leading-relaxed text-sm sm:text-base">
                    En SGX Chile tenemos la convicción de que la adopción de nuevas
                    tecnologías, y en particular la electromovilidad, no depende únicamente
                    del producto, sino de la capacidad de los operadores para incorporar,
                    entender y optimizar su uso en condiciones reales de operación.
                  </p>
                  <p className="text-white/95 leading-relaxed text-sm sm:text-base">
                    Reducir la curva de aprendizaje es clave para capturar los beneficios
                    reales de eficiencia, desempeño y rentabilidad que ofrece la electromovilidad.
                  </p>
                  <p className="text-white/95 leading-relaxed text-sm sm:text-base">
                    Por ello, nuestro enfoque no se limita a la provisión de buses, sino que
                    busca acompañar estratégicamente a los operadores en su proceso de transición,
                    entregando herramientas, información y criterios para operar bajo los más altos
                    estándares de eficiencia operacional.
                  </p>
                  <p className="text-white/95 leading-relaxed text-sm sm:text-base">
                    Nuestra visión es que cualquier operador pueda acceder a estos estándares,
                    desde sistemas urbanos complejos hasta operaciones regionales a lo largo de Chile.
                  </p>
                  <p className="text-lg sm:text-xl font-semibold">
                    La electromovilidad no es sólo un cambio tecnológico, es una nueva forma de operar.
                  </p>
                  <p className="text-lg sm:text-xl font-bold">
                    ¿Está tu operación preparada para dar el siguiente paso con SGX Chile y Ankai Bus?
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
