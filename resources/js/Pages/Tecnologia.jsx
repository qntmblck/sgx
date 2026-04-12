import { Head } from '@inertiajs/react'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'
import ContactActions from '@/Components/ContactActions'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const WaveSeparator = () => (
  <div className="-mt-1">
    <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="h-8 w-full">
      <path d="M0,0 C600,100 600,100 1200,0 L1200,100 L0,100 Z" fill="rgb(249 250 251)" />
    </svg>
  </div>
)

const tabs = [
  {
    id: 'origen-tecnologico',
    label: 'Origen Tecnológico',
    blocks: [
      {
        type: 'paragraph',
        text: 'La base tecnológica de los buses Ankai se origina en la transferencia de conocimiento desde la industria alemana, específicamente a través de su cooperación con Kässbohrer SETRA, hoy parte de EVO BUS del grupo Daimler-Benz.',
      },
      {
        type: 'paragraph',
        text: 'Este proceso permitió incorporar y desarrollar tecnologías avanzadas de diseño estructural, sentando las bases de una plataforma de ingeniería que ha sido posteriormente adaptada, optimizada, perfeccionada y aplicada a toda la línea productiva de Ankai.',
      },
      {
        type: 'subtitle',
        text: 'Transferencia tecnológica y desarrollo',
      },
      {
        type: 'paragraph',
        text: 'A partir del año 1993, Ankai inicia un proceso de cooperación técnica con SETRA, uno de los fabricantes más reconocidos a nivel mundial en el desarrollo de buses de alto estándar.',
      },
      {
        type: 'paragraph',
        text: 'A partir de esta colaboración, se introducen modelos desarrollados bajo licencia, permitiendo la adopción progresiva de tecnologías estructurales avanzadas y metodologías de diseño propias de la ingeniería alemana.',
      },
      { type: 'image', src: '/img/tecnologia/Tec_1.jpg', alt: 'Origen tecnológico Ankai - imagen 1' },
      {
        type: 'feature',
        title: 'Primera etapa (1993): Introducción Tecnológica',
        text: 'Se inicia la primera década de cooperación técnica con SETRA, incorporando los primeros modelos desarrollados bajo licencia y estableciendo las bases para la adopción de tecnologías estructurales avanzadas.',
      },
      {
        type: 'feature',
        title: 'Segunda etapa (2003): Consolidación del Conocimiento',
        text: 'Se desarrolla una segunda década de colaboración, profundizando la transferencia tecnológica e incorporando nuevos modelos, lo que permite consolidar capacidades de diseño y fabricación.',
      },
      {
        type: 'feature',
        title: 'Tercera etapa (2006): Adaptación y Desarrollo Propio',
        text: 'A partir de la experiencia adquirida, Ankai adapta y optimiza estas tecnologías en función de sus propios estándares productivos, integrando mejoras estructurales y de fabricación.',
      },
      {
        type: 'feature',
        title: 'Cuarta etapa (2008): Dominio de la Tecnología “Monocasco”',
        text: 'Como resultado de este proceso, Ankai logra absorber y desarrollar completamente la tecnología de estructura monocasco (monocoque), originalmente aplicada en la industria aeronáutica y posteriormente en buses de alto estándar.',
      },
      {
        type: 'paragraph',
        text: 'En 2008, la compañía obtiene la patente de invención de esta tecnología, consolidando su dominio y aplicándola de manera transversal en sus procesos de diseño y producción.',
      },
      {
        type: 'subtitle',
        text: 'Concepto de “Monocasco”',
      },
      {
        type: 'paragraph',
        text: 'El diseño monocasco se basa en una estructura integral, donde la carrocería actúa como un único elemento resistente, eliminando la necesidad de un chasis independiente y permitiendo una distribución más eficiente de cargas.',
      },
      {
        type: 'subtitle',
        text: 'Principios de Diseño',
      },
      {
        type: 'paragraph',
        text: 'La estructura monocasco del bus se creó a partir del concepto de un avión, con principios similares de diseño:',
      },
      {
        type: 'bulletList',
        items: [
          'Peso: lo más liviano posible',
          'Resistencia estructural: lo más resistente posible',
          'Espacio: lo más amplio posible',
        ],
      },
      { type: 'image', src: '/img/tecnologia/Tec_2.jpg', alt: 'Origen tecnológico Ankai - imagen 2' },
      {
        type: 'paragraph',
        text: 'El origen tecnológico de Ankai no responde únicamente a una colaboración inicial, sino a un proceso continuo de absorción, desarrollo y aplicación de ingeniería, que permite hoy contar con una plataforma tecnológica propia, basada en estándares internacionales y adaptada a distintas condiciones operacionales.',
      },
      { type: 'image', src: '/img/tecnologia/Tec_3.jpg', alt: 'Origen tecnológico Ankai - imagen 3' },
    ],
  },
  {
    id: 'ingenieria-y-desarrollo',
    label: 'Ingeniería y Desarrollo',
    blocks: [
      {
        type: 'paragraph',
        text: 'El desarrollo de un bus moderno no comienza en la línea de producción, sino en un entorno de ingeniería donde cada componente y sistema es diseñado, simulado y validado antes de su fabricación.',
      },
      {
        type: 'paragraph',
        text: 'Ankai integra herramientas avanzadas de modelación, simulación y validación para desarrollar sus vehículos, permitiendo anticipar su comportamiento en operación real y optimizar su desempeño desde la etapa de diseño.',
      },
      { type: 'image', src: '/img/tecnologia/Tec_4.jpg', alt: 'Ingeniería y desarrollo - imagen 1' },
      {
        type: 'paragraph',
        text: 'El proceso de ingeniería incorpora simulaciones digitales que permiten evaluar el comportamiento del vehículo bajo distintas condiciones operacionales, reduciendo la incertidumbre y mejorando la calidad del diseño final.',
      },
      {
        type: 'feature',
        title: 'Simulación Estructural',
        text: 'Se analiza digitalmente la estructura del vehículo para evaluar su resistencia, deformación y distribución de cargas, optimizando su desempeño antes de su construcción.',
      },
      { type: 'image', src: '/img/tecnologia/Tec_5.jpg', alt: 'Ingeniería y desarrollo - imagen 2' },
      {
        type: 'feature',
        title: 'Simulación Dinámica, Colisión y Seguridad',
        text: 'Se estudia el comportamiento dinámico del vehículo, incluyendo estabilidad, maniobrabilidad y respuesta en operación. Se simulan distintos escenarios de impacto, incluyendo colisiones frontales, laterales y volcamiento, con el objetivo de evaluar la integridad estructural del vehículo.',
      },
      { type: 'image', src: '/img/tecnologia/Tec_6.jpg', alt: 'Ingeniería y desarrollo - imagen 3' },
      {
        type: 'feature',
        title: 'Simulación Térmica',
        text: 'Se modela la gestión térmica de los sistemas críticos del vehículo, asegurando un adecuado comportamiento en condiciones de operación exigentes.',
      },
      { type: 'image', src: '/img/tecnologia/Tec_7.jpg', alt: 'Ingeniería y desarrollo - imagen 4' },
      {
        type: 'feature',
        title: 'Simulación Electrónica y Energética',
        text: 'Se modela el consumo energético y el desempeño del sistema de propulsión, permitiendo optimizar eficiencia y autonomía. Se desarrollan y validan sistemas de control electrónico mediante simulación, incluyendo estrategias de operación e integración de componentes.',
      },
      { type: 'image', src: '/img/tecnologia/Tec_8.jpg', alt: 'Ingeniería y desarrollo - imagen 5' },
    ],
  },
  {
    id: 'produccion-industrial',
    label: 'Producción Industrial',
    blocks: [
      {
        type: 'paragraph',
        text: 'El desempeño de un bus no se define únicamente en su diseño, sino en la capacidad de llevar ese diseño a la realidad de manera consistente, precisa y controlada.',
      },
      {
        type: 'paragraph',
        text: 'Ankai cuenta con una infraestructura industrial integrada, donde procesos de fabricación, tratamiento de superficies y control de calidad operan de forma coordinada, asegurando que cada unidad producida mantenga los estándares definidos en su etapa de ingeniería.',
      },
      {
        type: 'subtitle',
        text: 'Infraestructura Productiva',
      },
      {
        type: 'paragraph',
        text: 'La producción de buses se realiza en complejos industriales especializados que integran distintas líneas de fabricación, incluyendo plantas para buses de gran escala, buses livianos y componentes de nueva energía. Las instalaciones de Ankai actualmente superan los 800.000 km2.',
      },
      {
        type: 'paragraph',
        text: 'Estas instalaciones permiten una producción continua y estructurada, con capacidades industriales consolidadas a gran escala.',
      },
      {
        type: 'paragraph',
        text: 'Ankai es la única empresa en China que cuenta con el Centro Nacional de Investigación y Desarrollo (I+D) en Integración de Sistemas de Buses Eléctricos, además de liderar el Centro Nacional y Local de Ingeniería en Desarrollo y Aplicación de Sistemas de Buses Eléctricos.',
      },
      { type: 'image', src: '/img/tecnologia/Tec_9.jpg', alt: 'Producción industrial - imagen 1' },
      {
        type: 'feature',
        title: 'Flujo Productivo Integrado',
        text: 'Ankai cuenta con talleres de producción modernos y una línea de producción en “U” diseñada científicamente. Gracias al sistema de transporte automático mecanizado y a una disposición de procesos eficiente, el avanzado sistema de gestión TPS permite una producción continua, rápida y eficiente, mejorando significativamente la productividad.',
      },
      { type: 'image', src: '/img/tecnologia/Tec_10.jpg', alt: 'Producción industrial - imagen 2' },
      {
        type: 'feature',
        title: 'Soldadura Estructural Robotizada',
        text: 'La estructura del vehículo es ensamblada mediante procesos de soldadura robotizada, que permiten unir subconjuntos estructurales con alta precisión y bajo control de deformaciones.',
      },
      {
        type: 'paragraph',
        text: 'Los equipos robotizados para soldaduras de piezas pequeñas se utilizan principalmente para unir subconjuntos de estructuras. Con un mecanismo automático de volteo, permiten sincronizar soldadura, cambio de moldes, carga y descarga de piezas, logrando una soldadura integral bajo estado de sujeción. Esto reduce deformaciones y mejora la precisión del proceso. Los sistemas permiten una precisión de la soldadura en torno a ±1 mm, con tiempos de producción de hasta 18 minutos por pieza.',
      },
      {
        type: 'paragraph',
        text: 'Este enfoque garantiza continuidad estructural, mejora la calidad de las uniones y reduce desviaciones en el proceso productivo.',
      },
      { type: 'image', src: '/img/tecnologia/Tec_11.jpg', alt: 'Producción industrial - imagen 3' },
      {
        type: 'feature',
        title: 'Protección Anti-Corrosión: Electrofóresis Catódica (E-Coat)',
        text: 'La tecnología de electrofóresis aplicada a la carrocería completa proporciona máxima resistencia a la niebla salina y a la humedad, lo que asegura una mayor durabilidad frente a distintos entornos climáticos y prolonga la vida útil del vehículo.',
      },
      {
        type: 'paragraph',
        text: 'Una vez ensamblada la estructura, el vehículo es sometido a un proceso de electroforesis catódica por inmersión total, donde se aplica un recubrimiento uniforme mediante corriente eléctrica.',
      },
      {
        type: 'paragraph',
        text: 'Este proceso permite proteger toda la carrocería, incluyendo cavidades internas y zonas de difícil acceso.',
      },
      { type: 'image', src: '/img/tecnologia/Tec_12.jpg', alt: 'Producción industrial - imagen 4' },
      {
        type: 'paragraph',
        text: 'La integración de procesos de diseño estructural, soldadura robotizada, tratamiento anticorrosivo y pintura automatizada permite asegurar que cada bus fabricado mantenga un estándar consistente de calidad, durabilidad y desempeño.',
      },
      {
        type: 'paragraph',
        text: 'Este enfoque industrial reduce variabilidad en la producción y mejora la confiabilidad del vehículo en operación real.',
      },
      {
        type: 'paragraph',
        text: 'La producción industrial en Ankai responde a un sistema integrado, donde cada etapa del proceso está diseñada para asegurar que el vehículo final refleje fielmente su diseño de ingeniería, manteniendo altos estándares de calidad, resistencia y durabilidad.',
      },
    ],
  },
  {
    id: 'sistemas-tecnologicos-integrados',
    label: 'Sistemas Tecnológicos Integrados',
    blocks: [
      {
        type: 'paragraph',
        text: 'El desempeño y la seguridad de un bus en operación no depende únicamente de su estructura o sistema de propulsión, sino de la integración de múltiples sistemas tecnológicos que permiten garantizar seguridad, estabilidad y confiabilidad en condiciones reales.',
      },
      {
        type: 'paragraph',
        text: 'Ankai desarrolla e integra soluciones a nivel de vehículo completo, combinando sistemas eléctricos, electrónicos y de control para asegurar un funcionamiento coordinado y seguro.',
      },
      {
        type: 'feature',
        title: 'Arquitectura Integrada de Control',
        text: 'El sistema del vehículo incorpora controladores altamente integrados que coordinan el funcionamiento de los principales subsistemas, incluyendo propulsión, dirección, compresión de aire y distribución eléctrica.',
      },
      {
        type: 'paragraph',
        text: 'El controlador integrado 5 en 1 combina el controlador del motor de tracción, el controlador del motor de dirección asistida electrónica, el controlador del motor del compresor de aire, el controlador de motor DC/DC y la distribución de alta tensión. Este diseño permite alcanzar mayor eficiencia, ahorro energético y un nivel superior de seguridad y confiabilidad.',
      },
      { type: 'image', src: '/img/tecnologia/Tec_13.jpg', alt: 'Sistemas tecnológicos integrados - imagen 1' },
      {
        type: 'feature',
        title: 'Seguridad de los Sistemas de Alto Voltaje y Sistema de Batería',
        text: 'El sistema eléctrico del vehículo incorpora seis niveles de protección que permiten gestionar de manera segura la operación del sistema de alto voltaje: protección contra sobrecorriente, sistema de detección de humo y fuego, conmutación contra sobrecorriente, sistemas de distribución segura de la alimentación de alto voltaje, protección activa y aislamiento, y protección activa contra sobrecorriente y sobretensión. A su vez, el sistema de baterías incorpora cinco capas de protección orientadas a prevenir fallas críticas y asegurar operación segura en todo momento: diseño ignífugo y retardante de llamas, sistemas de detección de humo, sistema de protección contra sobrecorriente, sobretensión, sobrecarga y sobredescarga, sistemas de desbloqueo y desmontaje rápido, y sistema automático de detección de incendios.',
      },
      { type: 'image', src: '/img/tecnologia/Tec_14.jpg', alt: 'Sistemas tecnológicos integrados - imagen 2' },
      {
        type: 'feature',
        title: 'Sistemas de Seguridad Activa y Asistencia al Conductor',
        text: 'Los buses eléctricos Ankai cuentan con una serie de sistemas integrados para garantizar una conducción bajo los máximos parámetros de seguridad. El vehículo incorpora sistemas de asistencia basados en control inteligente que permiten reducir el riesgo de incidentes en operación, apoyando al conductor y actuando frente a situaciones anómalas.',
      },
      {
        type: 'paragraph',
        text: 'Estos sistemas se enfocan en la prevención de eventos críticos mediante el monitoreo del comportamiento del conductor y la detección de condiciones de riesgo.',
      },
      {
        type: 'paragraph',
        text: 'Entre ellos, se cuentan:',
      },
      {
        type: 'feature',
        title: 'Driver Fatigue Warning (DFW)',
        text: 'Sistema de detección de fatiga del conductor que monitorea patrones de conducción y comportamiento al volante, identificando señales de cansancio o pérdida de atención. Ante la detección de condiciones anómalas, el sistema genera alertas que permiten al conductor tomar acciones preventivas, reduciendo el riesgo de accidentes asociados a fatiga.',
      },
      {
        type: 'feature',
        title: 'Anti-Collision Warning (ACW)',
        text: 'Sistema de advertencia de colisión que detecta la proximidad de obstáculos o vehículos en la trayectoria, alertando al conductor con anticipación frente a posibles impactos. Esta función permite mejorar el tiempo de reacción y reducir la probabilidad de colisiones en entornos urbanos o de alta densidad de tráfico.',
      },
      {
        type: 'feature',
        title: 'Lane Departure Warning (LDW)',
        text: 'Sistema de alerta de cambio involuntario de carril que monitorea la posición del vehículo respecto a las líneas de la vía. En caso de desviaciones no intencionadas, el sistema emite alertas al conductor, contribuyendo a mantener la trayectoria y reducir riesgos asociados a distracciones o fatiga.',
      },
      {
        type: 'feature',
        title: 'Speed Limit Indicator (SLI)',
        text: 'Sistema de monitoreo de velocidad que permite advertir al conductor cuando se superan los límites definidos o condiciones de operación seguras. Esta función contribuye a una conducción más controlada, especialmente en entornos urbanos o zonas con restricciones específicas.',
      },
      {
        type: 'feature',
        title: 'Slope Start Assist (SSA / HSA)',
        text: 'Sistema de asistencia en partida en pendiente que evita el retroceso involuntario del vehículo al iniciar la marcha en inclinaciones. Esta función mejora el control del bus en maniobras críticas, especialmente en zonas urbanas con topografía exigente.',
      },
      { type: 'image', src: '/img/tecnologia/Tec_15.jpg', alt: 'Sistemas tecnológicos integrados - imagen 3' },
      {
        type: 'feature',
        title: 'Compatibilidad Electromagnética (EMC)',
        text: 'El diseño del vehículo considera criterios de compatibilidad electromagnética a nivel de sistema, asegurando funcionamiento estable de todos los componentes electrónicos.',
      },
      { type: 'image', src: '/img/tecnologia/Tec_16.jpg', alt: 'Sistemas tecnológicos integrados - imagen 4' },
      {
        type: 'feature',
        title: 'Protección Ambiental y Operativa',
        text: 'El vehículo ha sido diseñado para operar de manera confiable en condiciones ambientales exigentes, incorporando soluciones técnicas orientadas a proteger sus sistemas críticos frente a factores externos como humedad, polvo, variaciones térmicas y condiciones de operación severas.',
      },
      {
        type: 'paragraph',
        text: 'A nivel de componentes eléctricos y electrónicos, se consideran estándares de protección elevados, incluyendo grados de sellado que permiten evitar el ingreso de agua y partículas, asegurando la continuidad operativa incluso en entornos adversos. Esto resulta particularmente relevante en sistemas de alto voltaje, donde la integridad del aislamiento y la protección frente a agentes externos son fundamentales para la seguridad del vehículo.',
      },
      {
        type: 'paragraph',
        text: 'En términos de operación en terreno, el bus cuenta con capacidades que le permiten enfrentar condiciones urbanas complejas, incluyendo escenarios de anegamiento. La configuración del sistema eléctrico y la ubicación de componentes críticos permiten alcanzar capacidades de vadeo superiores a los 500 mm, manteniendo la operatividad del vehículo en condiciones de acumulación de agua en la vía.',
      },
      {
        type: 'paragraph',
        text: 'Adicionalmente, el diseño considera un rango amplio de operación térmica, permitiendo el funcionamiento del vehículo en temperaturas extremas, desde climas fríos hasta condiciones de alta temperatura, sin comprometer el desempeño de los sistemas de propulsión, baterías o control.',
      },
      {
        type: 'paragraph',
        text: 'Estas características permiten que el vehículo no solo cumpla con condiciones estándar de operación, sino que esté preparado para enfrentar escenarios reales donde la continuidad del servicio es crítica, reduciendo riesgos de falla y asegurando disponibilidad operativa en el tiempo.',
      },
      { type: 'image', src: '/img/tecnologia/Tec_17.jpg', alt: 'Sistemas tecnológicos integrados - imagen 5' },
    ],
  },
  {
    id: 'plataforma-inteligente-y-telemetria',
    label: 'Plataforma Inteligente y Telemetría',
    blocks: [
      {
        type: 'paragraph',
        text: 'La telemetría corresponde al conjunto de tecnologías que permiten recopilar, transmitir y analizar información del vehículo y su operación en tiempo real, incluyendo variables como ubicación, velocidad, estado de sistemas, comportamiento de conducción y desempeño energético.',
      },
      {
        type: 'paragraph',
        text: 'En el contexto del transporte público moderno —y particularmente en Chile bajo el modelo de Sistema de Concesión de Vías— la telemetría constituye un estándar mínimo para la operación, ya que permite monitorear el cumplimiento de los programas operacionales, la calidad del servicio y la trazabilidad de la flota.',
      },
      {
        type: 'paragraph',
        text: 'Sin embargo, su valor va más allá del cumplimiento normativo. La telemetría habilita una gestión avanzada de la operación, permitiendo optimizar rutas, mejorar la eficiencia del sistema, anticipar fallas, analizar el comportamiento de los conductores y tomar decisiones basadas en datos en tiempo real.',
      },
      {
        type: 'paragraph',
        text: 'Sobre esta base, los buses Ankai incorporan una arquitectura tecnológica que permite integrar estos sistemas de información, cuya implementación y adaptación a la operación local se realiza mediante la coordinación entre Ankai, SGX y Magnetic North, conformando una solución completa de transporte inteligente.',
      },
      {
        type: 'feature',
        title: 'Plataforma Inteligente de Big Data de Ankai',
        text: 'Ankai ha desarrollado funciones como monitoreo del vehículo, gestión operacional, alertas del sistema eléctrico y baterías, y funciones de análisis de comportamiento en la conducción.',
      },
      {
        type: 'paragraph',
        text: 'Este desarrollo les da soporte a los clientes para tener un control razonable sobre la flota, analizar el comportamiento de sus conductores y definir estrategias inteligentes de carga del vehículo.',
      },
      { type: 'image', src: '/img/tecnologia/Tec_18.jpg', alt: 'Plataforma inteligente y telemetría - imagen 1' },
      {
        type: 'feature',
        title: 'Integración Tecnológica (ANKAI – SGX – MAGNETIC NORTH)',
        text: 'La implementación de estos sistemas en una operación real requiere una integración tecnológica que considere las condiciones locales, los requerimientos del sistema de transporte y las necesidades específicas de cada operador.',
      },
      {
        type: 'paragraph',
        text: 'En este contexto, SGX cumple un rol central como integrador, articulando la plataforma del fabricante con soluciones tecnológicas especializadas.',
      },
      { type: 'image', src: '/img/tecnologia/Tec_19.jpg', alt: 'Plataforma inteligente y telemetría - imagen 2' },
      {
        type: 'feature',
        title: 'Sistema de Información Embarcado y Gestión de la Operación',
        text: 'El vehículo incorpora una arquitectura de sistemas embarcados que permite capturar, procesar y transmitir información en tiempo real, integrando múltiples dispositivos y sensores en una misma red.',
      },
      {
        type: 'paragraph',
        text: 'Esta infraestructura no solo permite el monitoreo del estado del bus, sino que habilita directamente la gestión de la operación, estableciendo una conexión permanente entre el vehículo y los centros de control. De esta forma, la información generada a bordo se transforma en una herramienta activa para la toma de decisiones operacionales.',
      },
      {
        type: 'paragraph',
        text: 'A través de esta integración, es posible coordinar la planificación, ejecución y control del servicio en tiempo real, mejorando la eficiencia del sistema y asegurando el cumplimiento de los programas operacionales.',
      },
      { type: 'image', src: '/img/tecnologia/Tec_20.jpg', alt: 'Plataforma inteligente y telemetría - imagen 3' },
      {
        type: 'feature',
        title: 'Análisis de Datos y Optimización de la Operación',
        text: 'La información generada por los sistemas embarcados se procesa mediante herramientas de análisis e inteligencia artificial (IA). La telemetría no solo permite monitorear el estado del vehículo, sino que constituye la base para la gestión integral de la operación, independiente del tipo de sistema de transporte en el que se utilice.',
      },
      {
        type: 'paragraph',
        text: 'En sistemas regulados, como el Modelo de Concesión de Vías, estos datos permiten medir el cumplimiento de indicadores definidos por la autoridad, tales como frecuencia, puntualidad y kilómetros comerciales válidos. Sin embargo, en operaciones privadas o no concesionadas, la telemetría cumple un rol igualmente crítico, ya que permite construir y optimizar modelos operacionales y financieros que, aunque no estén formalmente definidos, existen de manera implícita en la operación diaria.',
      },
      {
        type: 'paragraph',
        text: 'A partir de esta información, es posible estructurar, validar y mejorar el Programa Operacional (PO), entendido como la forma en que la flota se organiza para cumplir con los niveles de servicio esperados, optimizando recursos, reduciendo costos y asegurando continuidad operacional.',
      },
      {
        type: 'subtitle',
        text: 'Indicadores Operacionales',
      },
      {
        type: 'paragraph',
        text: 'La plataforma permite monitorear y analizar indicadores fundamentales para cualquier tipo de operación de transporte de pasajeros, tales como:',
      },
      {
        type: 'bulletList',
        items: [
          'Cumplimiento del Programa Operacional (PO): seguimiento de la ejecución real de los servicios respecto a lo planificado',
          'Frecuencia y Regularidad: control de intervalos entre vehículos y consistencia del servicio',
          'Puntualidad: evaluación del desempeño respecto a horarios definidos o esperados',
          'Kilómetros Operacionales (comerciales y en vacío): análisis del uso efectivo de la flota y sus ineficiencias',
          'Trazabilidad de la Operación: registro completo del recorrido y comportamiento del vehículo y el personal de conducción',
        ],
      },
      {
        type: 'subtitle',
        text: 'Gestión de la Eficiencia Operacional',
      },
      {
        type: 'paragraph',
        text: 'El análisis de datos permite identificar desviaciones y oportunidades de mejora en la operación, incluyendo:',
      },
      {
        type: 'bulletList',
        items: [
          'Velocidad promedio por ruta',
          'Optimización de frecuencias',
          'Relación entre kilómetros productivos y no productivos',
          'Consumo energético real por condiciones de operación',
          'Demanda del servicio',
          'Impacto del estilo de conducción en la eficiencia y el desgaste mecánico',
        ],
      },
      {
        type: 'feature',
        title: 'Gestión Económica de la Operación',
        text: 'La telemetría permite vincular directamente la operación con su desempeño económico, entregando información clave para la toma de decisiones operacionales y financieras.',
      },
      {
        type: 'paragraph',
        text: 'En sistemas concesionados, esto se traduce en el cumplimiento de indicadores que determinan ingresos económicos. En sistemas privados, permite evaluar la rentabilidad de la operación en tiempo real, optimizar la asignación de recursos y controlar costos operacionales.',
      },
      {
        type: 'feature',
        title: 'Validación y Mejora Continua',
        text: 'El uso continuo de datos permite contrastar la operación real con las proyecciones iniciales, generando un proceso de mejora continua basado en evidencia.',
      },
      {
        type: 'paragraph',
        text: 'Esto permite:',
      },
      {
        type: 'bulletList',
        items: [
          'Validar modelos operacionales',
          'Identificar riesgos e ineficiencias',
          'Ajustar estrategias de operación',
          'Proyectar mantenimiento en función del uso real',
        ],
      },
      {
        type: 'paragraph',
        text: 'En ese contexto, la telemetría deja de ser una mera herramienta de monitoreo y pasa a ser un sistema de soporte integral para la toma de decisiones estratégicas.',
      },
      {
        type: 'feature',
        title: 'Acompañamiento Estratégico',
        text: 'En SGX Chile tenemos la convicción de que la adopción de nuevas tecnologías —y en particular la electromovilidad— no depende únicamente del producto, sino de la capacidad de los operadores para incorporar, entender y optimizar su uso en condiciones reales de operación.',
      },
      {
        type: 'paragraph',
        text: 'En este contexto, uno de los principales desafíos no es la tecnología en sí, sino la curva de aprendizaje asociada a su implementación. Reducir esa brecha es clave para capturar los beneficios reales de eficiencia, desempeño y rentabilidad que ofrece la electromovilidad.',
      },
      {
        type: 'paragraph',
        text: 'Por ello, nuestro enfoque no se limita a la provisión de buses, sino que busca acompañar estratégicamente a los operadores en su proceso de transición, entregando herramientas, información y criterios que les permitan operar bajo los más altos estándares de eficiencia operacional.',
      },
      {
        type: 'paragraph',
        text: 'Nuestra visión es que cualquier operador —independiente de su tamaño, ubicación o nivel de desarrollo— pueda acceder a estos estándares, desde sistemas urbanos complejos hasta operaciones regionales a lo largo de todo Chile, desde Arica hasta Punta Arenas.',
      },
      {
        type: 'paragraph',
        text: 'Porque la electromovilidad no es solo un cambio tecnológico, es un cambio en la forma de operar.',
      },
      {
        type: 'closingQuestion',
        text: '¿Estás preparado para dar el siguiente paso y operar bajo los estándares de la electromovilidad con SGX Chile & Ankai Bus?',
      },
      { type: 'image', src: '/img/tecnologia/Tec_21.jpg', alt: 'Plataforma inteligente y telemetría - imagen 4' },
    ],
  },
]

const Hero = () => (
  <section
    id="tecnologia-hero"
    className="relative flex items-center justify-center overflow-hidden bg-cover bg-center py-24 sm:py-28"
    style={{ backgroundImage: "url('/img/productos.webp')" }}
  >
    <div className="absolute inset-0 bg-slate-950/60" />
    <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
      <span className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-white/80 backdrop-blur-sm">
        SGX Chile · Tecnología
      </span>
      <h1 className="max-w-4xl text-3xl font-extrabold tracking-tight text-white drop-shadow-lg sm:text-5xl">
        Tecnología e ingeniería aplicada al desarrollo de buses de alto estándar
      </h1>
      <p className="mt-5 max-w-3xl text-base leading-7 text-white/90 sm:text-lg">
        Conoce la base tecnológica, la ingeniería, la capacidad industrial, los sistemas integrados y la plataforma de telemetría que estructuran la propuesta tecnológica de Ankai.
      </p>
    </div>
  </section>
)

const TabButton = ({ label, active, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={[
      'whitespace-nowrap rounded-full border px-4 py-2.5 text-sm font-semibold transition-all duration-200 sm:px-5',
      active
        ? 'border-red-700 bg-red-700 text-white shadow-md shadow-red-700/20'
        : 'border-slate-200 bg-white text-slate-700 hover:border-red-200 hover:text-red-700',
    ].join(' ')}
  >
    {label}
  </button>
)

const ContentImage = ({ src, alt }) => (
  <figure className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
    <img src={src} alt={alt} className="h-auto w-full object-cover" loading="lazy" />
  </figure>
)

const renderBlock = (block, index) => {
  switch (block.type) {
    case 'subtitle':
      return (
        <h3 key={index} className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
          {block.text}
        </h3>
      )

    case 'feature':
      return (
        <div key={index} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h4 className="text-lg font-bold text-slate-900 sm:text-xl">{block.title}</h4>
          <p className="mt-3 text-[17px] leading-8 text-slate-700">{block.text}</p>
        </div>
      )

    case 'bulletList':
      return (
        <ul key={index} className="space-y-3 pl-6 text-[17px] leading-8 text-slate-700 marker:text-red-700 list-disc">
          {block.items.map((item, itemIndex) => (
            <li key={`${index}-${itemIndex}`}>{item}</li>
          ))}
        </ul>
      )

    case 'image':
      return <ContentImage key={index} src={block.src} alt={block.alt} />

    case 'closingQuestion':
      return (
        <div
          key={index}
          className="rounded-3xl border border-red-200 bg-red-50 px-6 py-7 text-lg font-semibold leading-8 text-red-900"
        >
          {block.text}
        </div>
      )

    case 'paragraph':
    default:
      return (
        <p key={index} className="text-[17px] leading-8 text-slate-700">
          {block.text}
        </p>
      )
  }
}

export default function Tecnologia() {
  const [activeTab, setActiveTab] = useState(tabs[0].id)
  const currentTab = tabs.find((tab) => tab.id === activeTab) ?? tabs[0]

  return (
    <>
      <Head title="Tecnología" />
      <Header />

      <div style={{ fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif" }}>
        <Hero />
        <WaveSeparator />

        <main className="bg-gray-50">
          <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-8"
            >
              <div className="mb-8">
                <span className="inline-flex rounded-full bg-red-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-red-700">
                  Contenido técnico
                </span>
                <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                  Plataforma tecnológica Ankai
                </h2>
                <p className="mt-3 max-w-4xl text-base leading-7 text-slate-600 sm:text-lg">
                  La página se organiza en cinco secciones internas para presentar, de manera integral, el origen tecnológico, el desarrollo de ingeniería, la capacidad industrial, los sistemas integrados y la plataforma inteligente de información y telemetría.
                </p>
              </div>

              <div className="mb-8 overflow-x-auto pb-2">
                <div className="flex min-w-max gap-3">
                  {tabs.map((tab) => (
                    <TabButton
                      key={tab.id}
                      label={tab.label}
                      active={tab.id === activeTab}
                      onClick={() => setActiveTab(tab.id)}
                    />
                  ))}
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTab.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.28 }}
                  className="space-y-7"
                >
                  <div className="border-b border-slate-200 pb-5">
                    <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                      {currentTab.label}
                    </h3>
                  </div>

                  <div className="space-y-6">
                    {currentTab.blocks.map((block, index) => renderBlock(block, index))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </section>
        </main>
      </div>

      <ContactActions />
      <Footer />
    </>
  )
}
