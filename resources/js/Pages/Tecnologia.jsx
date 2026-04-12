import { useMemo, useState } from 'react'
import { Head } from '@inertiajs/react'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'
import ContactActions from '@/Components/ContactActions'
import { motion, AnimatePresence } from 'framer-motion'

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.35 },
}

const tabs = [
  { id: 'origen', label: 'Origen Tecnológico' },
  { id: 'ingenieria', label: 'Ingeniería y Desarrollo' },
  { id: 'produccion', label: 'Producción Industrial' },
  { id: 'sistemas', label: 'Sistemas Integrados' },
  { id: 'telemetria', label: 'Telemetría' },
]

const sectionEyebrowClass =
  'text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700'

const sectionTitleClass =
  'text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900'

const subsectionTitleClass =
  'text-xl sm:text-2xl font-bold tracking-tight text-slate-900'

const paragraphClass =
  'text-sm sm:text-base leading-7 text-slate-600'

const cardClass =
  'rounded-3xl border border-slate-200 bg-white shadow-[0_10px_35px_rgba(15,23,42,0.06)]'

function ImageFrame({
  src,
  alt,
  ratio = 'aspect-[16/10]',
  className = '',
  imgClassName = '',
}) {
  return (
    <div className={`${cardClass} overflow-hidden ${className}`}>
      <div className={`${ratio} w-full bg-white`}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={`h-full w-full object-contain p-2 sm:p-3 ${imgClassName}`}
        />
      </div>
    </div>
  )
}

function InfoCard({ title, children, className = '' }) {
  return (
    <div className={`${cardClass} p-6 sm:p-7 ${className}`}>
      <h3 className={subsectionTitleClass}>{title}</h3>
      <div className="mt-4 space-y-4">{children}</div>
    </div>
  )
}

function StageCard({ title, children }) {
  return (
    <div className={`${cardClass} p-6`}>
      <h4 className="text-lg font-bold text-slate-900">{title}</h4>
      <div className="mt-3 space-y-3">{children}</div>
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

function TabButton({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        'px-4 py-2 rounded-md transition font-semibold text-sm whitespace-nowrap',
        active
          ? 'bg-gradient-to-br from-[#003b5c] to-[#00d084] text-white shadow'
          : 'bg-white text-slate-700 border border-slate-200 hover:text-emerald-600 hover:border-emerald-300',
      ].join(' ')}
    >
      {children}
    </button>
  )
}

export default function Tecnologia() {
  const [activeTab, setActiveTab] = useState('origen')

  const content = useMemo(
    () => ({
      origen: (
        <motion.section key="origen" {...fadeUp} className="space-y-8">
          <div className="max-w-4xl space-y-4">
            <p className={sectionEyebrowClass}>Plataforma tecnológica</p>
            <h2 className={sectionTitleClass}>Origen Tecnológico</h2>
            <p className={paragraphClass}>
              La base tecnológica de los buses Ankai se origina en la transferencia de
              conocimiento desde la industria alemana, específicamente a través de su
              cooperación con Kässbohrer SETRA, hoy parte de EVO BUS del grupo Daimler-Benz.
            </p>
            <p className={paragraphClass}>
              Este proceso permitió incorporar y desarrollar tecnologías avanzadas de diseño
              estructural, sentando las bases de una plataforma de ingeniería que ha sido
              posteriormente adaptada, optimizada, perfeccionada y aplicada a toda la línea
              productiva de Ankai.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ImageFrame
              src="/img/tecnologia/tec_2.png"
              alt="Línea de desarrollo tecnológico Ankai"
              ratio="aspect-[16/10]"
            />
            <ImageFrame
              src="/img/tecnologia/tec_3.png"
              alt="Estructura técnica del bus"
              ratio="aspect-[16/10]"
            />
          </div>

          <InfoCard title="Transferencia tecnológica y desarrollo">
            <p className={paragraphClass}>
              A partir del año 1993, Ankai inicia un proceso de cooperación técnica con
              SETRA, uno de los fabricantes más reconocidos a nivel mundial en el desarrollo
              de buses de alto estándar.
            </p>
            <p className={paragraphClass}>
              A partir de esta colaboración, se introducen modelos desarrollados bajo
              licencia, permitiendo la adopción progresiva de tecnologías estructurales
              avanzadas y metodologías de diseño propias de la ingeniería alemana.
            </p>
          </InfoCard>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <StageCard title="Primera etapa (1993): Introducción Tecnológica">
              <p className={paragraphClass}>
                Se inicia la primera década de cooperación técnica con SETRA, incorporando
                los primeros modelos desarrollados bajo licencia y estableciendo las bases
                para la adopción de tecnologías estructurales avanzadas.
              </p>
            </StageCard>

            <StageCard title="Segunda etapa (2003): Consolidación del Conocimiento">
              <p className={paragraphClass}>
                Se desarrolla una segunda década de colaboración, profundizando la
                transferencia tecnológica e incorporando nuevos modelos, lo que permite
                consolidar capacidades de diseño y fabricación.
              </p>
            </StageCard>

            <StageCard title="Tercera etapa (2006): Adaptación y Desarrollo Propio">
              <p className={paragraphClass}>
                A partir de la experiencia adquirida, Ankai adapta y optimiza estas
                tecnologías en función de sus propios estándares productivos, integrando
                mejoras estructurales y de fabricación.
              </p>
            </StageCard>

            <StageCard title="Cuarta etapa (2008): Dominio de la Tecnología Monocasco">
              <p className={paragraphClass}>
                Como resultado de este proceso, Ankai logra absorber y desarrollar
                completamente la tecnología de estructura monocasco, originalmente aplicada
                en la industria aeronáutica y posteriormente en buses de alto estándar.
              </p>
              <p className={paragraphClass}>
                En 2008, la compañía obtiene la patente de invención de esta tecnología,
                consolidando su dominio y aplicándola de manera transversal en sus procesos
                de diseño y producción.
              </p>
            </StageCard>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-[1fr_1fr] gap-6 items-start">
            <ImageFrame
              src="/img/tecnologia/tec_4.png"
              alt="Concepto estructural monocasco"
              ratio="aspect-[16/9]"
            />

            <InfoCard title="Concepto de Monocasco">
              <p className={paragraphClass}>
                El diseño monocasco se basa en una estructura integral, donde la carrocería
                actúa como un único elemento resistente, eliminando la necesidad de un chasis
                independiente y permitiendo una distribución más eficiente de cargas.
              </p>

              <div className="pt-1">
                <h4 className="text-base sm:text-lg font-bold text-slate-900">
                  Principios de diseño
                </h4>
                <div className="mt-3">
                  <BulletList
                    items={[
                      'Peso: lo más liviano posible.',
                      'Resistencia estructural: lo más resistente posible.',
                      'Espacio: lo más amplio posible.',
                    ]}
                  />
                </div>
              </div>
            </InfoCard>
          </div>

          <p className={`${paragraphClass} max-w-5xl`}>
            El origen tecnológico de Ankai no responde únicamente a una colaboración
            inicial, sino a un proceso continuo de absorción, desarrollo y aplicación de
            ingeniería, que permite hoy contar con una plataforma tecnológica propia, basada
            en estándares internacionales y adaptada a distintas condiciones operacionales.
          </p>
        </motion.section>
      ),

      ingenieria: (
        <motion.section key="ingenieria" {...fadeUp} className="space-y-8">
          <div className="max-w-4xl space-y-4">
            <p className={sectionEyebrowClass}>Diseño y validación</p>
            <h2 className={sectionTitleClass}>Ingeniería y Desarrollo</h2>
            <p className={paragraphClass}>
              El desarrollo de un bus moderno no comienza en la línea de producción, sino en
              un entorno de ingeniería donde cada componente y sistema es diseñado, simulado
              y validado antes de su fabricación.
            </p>
            <p className={paragraphClass}>
              Ankai integra herramientas avanzadas de modelación, simulación y validación
              para desarrollar sus vehículos, permitiendo anticipar su comportamiento en
              operación real y optimizar su desempeño desde la etapa de diseño.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ImageFrame
              src="/img/tecnologia/tec_5.png"
              alt="Modelación estructural"
              ratio="aspect-[16/10]"
            />
            <ImageFrame
              src="/img/tecnologia/tec_6.png"
              alt="Simulación estructural avanzada"
              ratio="aspect-[16/10]"
            />
          </div>

          <p className={paragraphClass}>
            El proceso de ingeniería incorpora simulaciones digitales que permiten evaluar
            el comportamiento del vehículo bajo distintas condiciones operacionales,
            reduciendo la incertidumbre y mejorando la calidad del diseño final.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <InfoCard title="Simulación Estructural">
              <p className={paragraphClass}>
                Se analiza digitalmente la estructura del vehículo para evaluar su
                resistencia, deformación y distribución de cargas, optimizando su desempeño
                antes de su construcción.
              </p>
            </InfoCard>

            <ImageFrame
              src="/img/tecnologia/tec_7.png"
              alt="Simulación estructural"
              ratio="aspect-[16/10]"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <InfoCard title="Simulación Dinámica, Colisión y Seguridad">
              <p className={paragraphClass}>
                Se estudia el comportamiento dinámico del vehículo, incluyendo estabilidad,
                maniobrabilidad y respuesta en operación.
              </p>
              <p className={paragraphClass}>
                Se simulan distintos escenarios de impacto, incluyendo colisiones frontales,
                laterales y volcamiento, con el objetivo de evaluar la integridad
                estructural del vehículo.
              </p>
            </InfoCard>

            <div className="grid grid-cols-1 gap-6">
              <ImageFrame
                src="/img/tecnologia/tec_8.png"
                alt="Simulación dinámica y seguridad"
                ratio="aspect-[16/10]"
              />
              <ImageFrame
                src="/img/tecnologia/tec_9.png"
                alt="Simulación térmica y energética"
                ratio="aspect-[16/10]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <StageCard title="Simulación Térmica">
              <p className={paragraphClass}>
                Se modela la gestión térmica de los sistemas críticos del vehículo,
                asegurando un adecuado comportamiento en condiciones de operación exigentes.
              </p>
            </StageCard>

            <StageCard title="Simulación Electrónica y Energética">
              <p className={paragraphClass}>
                Se modela el consumo energético y el desempeño del sistema de propulsión,
                permitiendo optimizar eficiencia y autonomía.
              </p>
              <p className={paragraphClass}>
                Se desarrollan y validan sistemas de control electrónico mediante simulación,
                incluyendo estrategias de operación e integración de componentes.
              </p>
            </StageCard>
          </div>
        </motion.section>
      ),

      produccion: (
        <motion.section key="produccion" {...fadeUp} className="space-y-8">
          <div className="max-w-4xl space-y-4">
            <p className={sectionEyebrowClass}>Capacidad industrial</p>
            <h2 className={sectionTitleClass}>Producción Industrial</h2>
            <p className={paragraphClass}>
              El desempeño de un bus no se define únicamente en su diseño, sino en la
              capacidad de llevar ese diseño a la realidad de manera consistente, precisa y
              controlada.
            </p>
            <p className={paragraphClass}>
              Ankai cuenta con una infraestructura industrial integrada, donde procesos de
              fabricación, tratamiento de superficies y control de calidad operan de forma
              coordinada, asegurando que cada unidad producida mantenga los estándares
              definidos en su etapa de ingeniería.
            </p>
          </div>

          <InfoCard title="Infraestructura Productiva">
            <p className={paragraphClass}>
              La producción de buses se realiza en complejos industriales especializados que
              integran distintas líneas de fabricación, incluyendo plantas para buses de gran
              escala, buses livianos y componentes de nueva energía.
            </p>
            <p className={paragraphClass}>
              Las instalaciones de Ankai actualmente superan los 800.000 km2. Estas
              instalaciones permiten una producción continua y estructurada, con capacidades
              industriales consolidadas a gran escala.
            </p>
            <p className={paragraphClass}>
              Ankai es la única empresa en China que cuenta con el Centro Nacional de
              Investigación y Desarrollo (I+D) en Integración de Sistemas de Buses
              Eléctricos, además de liderar el Centro Nacional y Local de Ingeniería en
              Desarrollo y Aplicación de Sistemas de Buses Eléctricos.
            </p>
          </InfoCard>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <ImageFrame
              src="/img/tecnologia/tec_10.png"
              alt="Infraestructura productiva 1"
              ratio="aspect-[4/3]"
            />
            <ImageFrame
              src="/img/tecnologia/tec_11.png"
              alt="Infraestructura productiva 2"
              ratio="aspect-[4/3]"
            />
            <ImageFrame
              src="/img/tecnologia/tec_12.png"
              alt="Infraestructura productiva 3"
              ratio="aspect-[4/3]"
            />
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-[1.05fr_0.95fr] gap-6 items-start">
            <ImageFrame
              src="/img/tecnologia/tec_13.png"
              alt="Flujo productivo integrado"
              ratio="aspect-[16/9]"
            />

            <InfoCard title="Flujo Productivo Integrado">
              <p className={paragraphClass}>
                Ankai cuenta con talleres de producción modernos y una línea de producción en
                “U” diseñada científicamente.
              </p>
              <p className={paragraphClass}>
                Gracias al sistema de transporte automático mecanizado y a una disposición de
                procesos eficiente, el avanzado sistema de gestión TPS permite una producción
                continua, rápida y eficiente, mejorando significativamente la productividad.
              </p>
            </InfoCard>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-start">
            <InfoCard title="Soldadura Estructural Robotizada">
              <p className={paragraphClass}>
                La estructura del vehículo es ensamblada mediante procesos de soldadura
                robotizada, que permiten unir subconjuntos estructurales con alta precisión y
                bajo control de deformaciones.
              </p>
              <p className={paragraphClass}>
                Los equipos robotizados para soldaduras de piezas pequeñas se utilizan
                principalmente para unir subconjuntos de estructuras. Con un mecanismo
                automático de volteo, permiten sincronizar soldadura, cambio de moldes, carga
                y descarga de piezas, logrando una soldadura integral bajo estado de sujeción.
              </p>
              <p className={paragraphClass}>
                Esto reduce deformaciones y mejora la precisión del proceso. Los sistemas
                permiten una precisión de la soldadura en torno a ±1 mm, con tiempos de
                producción de hasta 18 minutos por pieza.
              </p>
              <p className={paragraphClass}>
                Este enfoque garantiza continuidad estructural, mejora la calidad de las
                uniones y reduce desviaciones en el proceso productivo.
              </p>
            </InfoCard>

            <ImageFrame
              src="/img/tecnologia/tec_14.png"
              alt="Soldadura estructural robotizada"
              ratio="aspect-[16/10]"
            />
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-start">
            <ImageFrame
              src="/img/tecnologia/tec_15.png"
              alt="Electrofóresis catódica"
              ratio="aspect-[16/10]"
            />

            <InfoCard title="Protección Anti-Corrosión: Electrofóresis Catódica (E-Coat)">
              <p className={paragraphClass}>
                La tecnología de electrofóresis aplicada a la carrocería completa proporciona
                máxima resistencia a la niebla salina y a la humedad, lo que asegura una
                mayor durabilidad frente a distintos entornos climáticos y prolonga la vida
                útil del vehículo.
              </p>
              <p className={paragraphClass}>
                Una vez ensamblada la estructura, el vehículo es sometido a un proceso de
                electroforesis catódica por inmersión total, donde se aplica un recubrimiento
                uniforme mediante corriente eléctrica.
              </p>
              <p className={paragraphClass}>
                Este proceso permite proteger toda la carrocería, incluyendo cavidades
                internas y zonas de difícil acceso.
              </p>
            </InfoCard>
          </div>

          <div className="max-w-5xl space-y-4">
            <p className={paragraphClass}>
              La integración de procesos de diseño estructural, soldadura robotizada,
              tratamiento anticorrosivo y pintura automatizada permite asegurar que cada bus
              fabricado mantenga un estándar consistente de calidad, durabilidad y desempeño.
            </p>
            <p className={paragraphClass}>
              Este enfoque industrial reduce variabilidad en la producción y mejora la
              confiabilidad del vehículo en operación real.
            </p>
            <p className={paragraphClass}>
              La producción industrial en Ankai responde a un sistema integrado, donde cada
              etapa del proceso está diseñada para asegurar que el vehículo final refleje
              fielmente su diseño de ingeniería, manteniendo altos estándares de calidad,
              resistencia y durabilidad.
            </p>
          </div>
        </motion.section>
      ),

      sistemas: (
        <motion.section key="sistemas" {...fadeUp} className="space-y-8">
          <div className="max-w-4xl space-y-4">
            <p className={sectionEyebrowClass}>Seguridad y control</p>
            <h2 className={sectionTitleClass}>Sistemas Tecnológicos Integrados</h2>
            <p className={paragraphClass}>
              El desempeño y la seguridad de un bus en operación no depende únicamente de su
              estructura o sistema de propulsión, sino de la integración de múltiples
              sistemas tecnológicos que permiten garantizar seguridad, estabilidad y
              confiabilidad en condiciones reales.
            </p>
            <p className={paragraphClass}>
              Ankai desarrolla e integra soluciones a nivel de vehículo completo, combinando
              sistemas eléctricos, electrónicos y de control para asegurar un funcionamiento
              coordinado y seguro.
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-start">
            <InfoCard title="Arquitectura Integrada de Control">
              <p className={paragraphClass}>
                El sistema del vehículo incorpora controladores altamente integrados que
                coordinan el funcionamiento de los principales subsistemas, incluyendo
                propulsión, dirección, compresión de aire y distribución eléctrica.
              </p>
              <p className={paragraphClass}>
                El controlador integrado 5 en 1 combina el controlador del motor de tracción,
                el controlador del motor de dirección asistida electrónica, el controlador
                del motor del compresor de aire, el controlador de motor DC/DC y la
                distribución de alta tensión.
              </p>
              <p className={paragraphClass}>
                Este diseño permite alcanzar mayor eficiencia, ahorro energético y un nivel
                superior de seguridad y confiabilidad.
              </p>
            </InfoCard>

            <ImageFrame
              src="/img/tecnologia/tec_16.png"
              alt="Arquitectura integrada de control"
              ratio="aspect-[16/10]"
            />
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-start">
            <ImageFrame
              src="/img/tecnologia/tec_17.png"
              alt="Seguridad de alto voltaje y baterías"
              ratio="aspect-[16/10]"
            />

            <InfoCard title="Seguridad de los Sistemas de Alto Voltaje y Sistema de Batería">
              <p className={paragraphClass}>
                El sistema eléctrico del vehículo incorpora seis niveles de protección que
                permiten gestionar de manera segura la operación del sistema de alto voltaje:
                protección contra sobrecorriente, sistema de detección de humo y fuego,
                conmutación contra sobrecorriente, sistemas de distribución segura de la
                alimentación de alto voltaje, protección activa y aislamiento, y protección
                activa contra sobrecorriente y sobretensión.
              </p>
              <p className={paragraphClass}>
                A su vez, el sistema de baterías incorpora cinco capas de protección
                orientadas a prevenir fallas críticas y asegurar operación segura en todo
                momento.
              </p>
            </InfoCard>
          </div>

          <InfoCard title="Sistemas de Seguridad Activa y Asistencia al Conductor">
            <p className={paragraphClass}>
              Los buses eléctricos Ankai cuentan con una serie de sistemas integrados para
              garantizar una conducción bajo los máximos parámetros de seguridad.
            </p>
            <p className={paragraphClass}>
              El vehículo incorpora sistemas de asistencia basados en control inteligente que
              permiten reducir el riesgo de incidentes en operación, apoyando al conductor y
              actuando frente a situaciones anómalas.
            </p>
            <p className={paragraphClass}>
              Estos sistemas se enfocan en la prevención de eventos críticos mediante el
              monitoreo del comportamiento del conductor y la detección de condiciones de riesgo.
            </p>
          </InfoCard>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <StageCard title="Driver Fatigue Warning (DFW)">
              <p className={paragraphClass}>
                Sistema de detección de fatiga del conductor que monitorea patrones de
                conducción y comportamiento al volante, identificando señales de cansancio o
                pérdida de atención.
              </p>
            </StageCard>

            <StageCard title="Anti-Collision Warning (ACW)">
              <p className={paragraphClass}>
                Sistema de advertencia de colisión que detecta la proximidad de obstáculos o
                vehículos en la trayectoria, alertando al conductor con anticipación frente a
                posibles impactos.
              </p>
            </StageCard>

            <StageCard title="Lane Departure Warning (LDW)">
              <p className={paragraphClass}>
                Sistema de alerta de cambio involuntario de carril que monitorea la posición
                del vehículo respecto a las líneas de la vía.
              </p>
            </StageCard>

            <StageCard title="Speed Limit Indicator (SLI)">
              <p className={paragraphClass}>
                Sistema de monitoreo de velocidad que permite advertir al conductor cuando se
                superan los límites definidos o condiciones de operación seguras.
              </p>
            </StageCard>

            <StageCard title="Slope Start Assist (SSA / HSA)">
              <p className={paragraphClass}>
                Sistema de asistencia en partida en pendiente que evita el retroceso
                involuntario del vehículo al iniciar la marcha en inclinaciones.
              </p>
            </StageCard>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-[0.95fr_1.05fr] gap-6 items-start">
            <ImageFrame
              src="/img/tecnologia/tec_18.png"
              alt="Compatibilidad electromagnética y sistemas de apoyo"
              ratio="aspect-[16/10]"
            />

            <InfoCard title="Compatibilidad Electromagnética (EMC) y Protección Ambiental y Operativa">
              <p className={paragraphClass}>
                El diseño del vehículo considera criterios de compatibilidad electromagnética
                a nivel de sistema, asegurando funcionamiento estable de todos los
                componentes electrónicos.
              </p>
              <p className={paragraphClass}>
                El vehículo ha sido diseñado para operar de manera confiable en condiciones
                ambientales exigentes, incorporando soluciones técnicas orientadas a proteger
                sus sistemas críticos frente a factores externos como humedad, polvo,
                variaciones térmicas y condiciones de operación severas.
              </p>
              <p className={paragraphClass}>
                En términos de operación en terreno, el bus cuenta con capacidades que le
                permiten enfrentar condiciones urbanas complejas, incluyendo escenarios de
                anegamiento, además de un rango amplio de operación térmica.
              </p>
            </InfoCard>
          </div>
        </motion.section>
      ),

      telemetria: (
        <motion.section key="telemetria" {...fadeUp} className="space-y-8">
          <div className="max-w-4xl space-y-4">
            <p className={sectionEyebrowClass}>Operación inteligente</p>
            <h2 className={sectionTitleClass}>Plataforma Inteligente y Telemetría</h2>
            <p className={paragraphClass}>
              La telemetría corresponde al conjunto de tecnologías que permiten recopilar,
              transmitir y analizar información del vehículo y su operación en tiempo real,
              incluyendo variables como ubicación, velocidad, estado de sistemas,
              comportamiento de conducción y desempeño energético.
            </p>
            <p className={paragraphClass}>
              En el contexto del transporte público moderno, la telemetría constituye un
              estándar mínimo para la operación, ya que permite monitorear el cumplimiento de
              los programas operacionales, la calidad del servicio y la trazabilidad de la flota.
            </p>
            <p className={paragraphClass}>
              Sin embargo, su valor va más allá del cumplimiento normativo. La telemetría
              habilita una gestión avanzada de la operación, permitiendo optimizar rutas,
              mejorar la eficiencia del sistema, anticipar fallas, analizar el comportamiento
              de los conductores y tomar decisiones basadas en datos en tiempo real.
            </p>
            <p className={paragraphClass}>
              Sobre esta base, los buses Ankai incorporan una arquitectura tecnológica que
              permite integrar estos sistemas de información, cuya implementación y adaptación
              a la operación local se realiza mediante la coordinación entre Ankai, SGX y
              Magnetic North, conformando una solución completa de transporte inteligente.
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-start">
            <ImageFrame
              src="/img/tecnologia/tec_19.png"
              alt="Plataforma inteligente de big data"
              ratio="aspect-[16/10]"
            />

            <InfoCard title="Plataforma Inteligente de Big Data de Ankai">
              <p className={paragraphClass}>
                Ankai ha desarrollado funciones como monitoreo del vehículo, gestión
                operacional, alertas del sistema eléctrico y baterías, y funciones de
                análisis de comportamiento en la conducción.
              </p>
              <p className={paragraphClass}>
                Este desarrollo les da soporte a los clientes para tener un control razonable
                sobre la flota, analizar el comportamiento de sus conductores y definir
                estrategias inteligentes de carga del vehículo.
              </p>
            </InfoCard>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-start">
            <InfoCard title="Integración Tecnológica (ANKAI – SGX – MAGNETIC NORTH)">
              <p className={paragraphClass}>
                La implementación de estos sistemas en una operación real requiere una
                integración tecnológica que considere las condiciones locales, los
                requerimientos del sistema de transporte y las necesidades específicas de cada operador.
              </p>
              <p className={paragraphClass}>
                En este contexto, SGX cumple un rol central como integrador, articulando la
                plataforma del fabricante con soluciones tecnológicas especializadas.
              </p>
            </InfoCard>

            <ImageFrame
              src="/img/tecnologia/tec_20.png"
              alt="Integración tecnológica"
              ratio="aspect-[16/10]"
            />
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-[1fr_1fr] gap-6 items-start">
            <ImageFrame
              src="/img/tecnologia/tec_21.png"
              alt="Sistema de información embarcado y analítica"
              ratio="aspect-[16/10]"
            />

            <InfoCard title="Sistema de Información Embarcado y Gestión de la Operación">
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
                ejecución y control del servicio en tiempo real, mejorando la eficiencia del
                sistema y asegurando el cumplimiento de los programas operacionales.
              </p>
            </InfoCard>
          </div>

          <InfoCard title="Análisis de Datos y Optimización de la Operación">
            <p className={paragraphClass}>
              La información generada por los sistemas embarcados se procesa mediante
              herramientas de análisis e inteligencia artificial. La telemetría no sólo
              permite monitorear el estado del vehículo, sino que constituye la base para la
              gestión integral de la operación.
            </p>
            <p className={paragraphClass}>
              En sistemas regulados, estos datos permiten medir el cumplimiento de
              indicadores como frecuencia, puntualidad y kilómetros comerciales válidos. En
              operaciones privadas, permiten construir y optimizar modelos operacionales y
              financieros basados en evidencia real.
            </p>
            <p className={paragraphClass}>
              A partir de esta información, es posible estructurar, validar y mejorar el
              programa operacional, optimizando recursos, reduciendo costos y asegurando
              continuidad operacional.
            </p>
          </InfoCard>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <StageCard title="Indicadores Operacionales">
              <BulletList
                items={[
                  'Cumplimiento del programa operacional.',
                  'Frecuencia y regularidad.',
                  'Puntualidad.',
                  'Kilómetros operacionales.',
                  'Trazabilidad completa de la operación.',
                ]}
              />
            </StageCard>

            <StageCard title="Gestión de la Eficiencia Operacional">
              <BulletList
                items={[
                  'Velocidad promedio por ruta.',
                  'Optimización de frecuencias.',
                  'Relación entre kilómetros productivos y no productivos.',
                  'Consumo energético real por condiciones de operación.',
                  'Demanda del servicio.',
                  'Impacto del estilo de conducción.',
                ]}
              />
            </StageCard>

            <StageCard title="Gestión Económica y Mejora Continua">
              <p className={paragraphClass}>
                La telemetría permite vincular directamente la operación con su desempeño
                económico, entregando información clave para la toma de decisiones
                operacionales y financieras.
              </p>
              <p className={paragraphClass}>
                El uso continuo de datos permite validar modelos operacionales, identificar
                riesgos e ineficiencias, ajustar estrategias de operación y proyectar
                mantenimiento en función del uso real.
              </p>
            </StageCard>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-[#003b5c] to-[#00a884] p-8 sm:p-10 text-white shadow-xl space-y-5">
            <h3 className="text-2xl sm:text-3xl font-extrabold">
              Acompañamiento Estratégico
            </h3>
            <p className="text-white/95 leading-relaxed text-sm sm:text-base">
              En SGX Chile tenemos la convicción de que la adopción de nuevas tecnologías, y
              en particular la electromovilidad, no depende únicamente del producto, sino de
              la capacidad de los operadores para incorporar, entender y optimizar su uso en
              condiciones reales de operación.
            </p>
            <p className="text-white/95 leading-relaxed text-sm sm:text-base">
              Reducir la curva de aprendizaje es clave para capturar los beneficios reales de
              eficiencia, desempeño y rentabilidad que ofrece la electromovilidad.
            </p>
            <p className="text-white/95 leading-relaxed text-sm sm:text-base">
              Por ello, nuestro enfoque no se limita a la provisión de buses, sino que busca
              acompañar estratégicamente a los operadores en su proceso de transición,
              entregando herramientas, información y criterios que les permitan operar bajo
              los más altos estándares de eficiencia operacional.
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
      ),
    }),
    []
  )

  return (
    <>
      <Head title="Tecnología" />

      <div className="min-h-screen flex flex-col overflow-x-hidden bg-white">
        <Header />

        <main className="flex-1 pt-20">
          {/* Hero */}
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
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
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
                  forma a buses diseñados para responder a las exigencias del transporte
                  moderno en Chile.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Tabs */}
          <section className="bg-slate-50 border-b border-slate-200 sticky top-[72px] z-30">
            <div className="max-w-7xl mx-auto px-6 py-4">
              <div className="flex gap-3 overflow-x-auto scrollbar-hide">
                {tabs.map((tab) => (
                  <TabButton
                    key={tab.id}
                    active={activeTab === tab.id}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </TabButton>
                ))}
              </div>
            </div>
          </section>

          {/* Content */}
          <section className="bg-slate-50">
            <div className="max-w-7xl mx-auto px-6 py-10 sm:py-12">
              <AnimatePresence mode="wait">
                {content[activeTab]}
              </AnimatePresence>
            </div>
          </section>
        </main>

        <Footer />
      </div>

      <ContactActions />
    </>
  )
}
