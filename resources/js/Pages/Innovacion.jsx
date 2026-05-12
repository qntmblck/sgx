import SEO from '@/Components/SEO'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'
import ContactActions from '@/Components/ContactActions'
import { motion } from 'framer-motion'
import {
  Database,
  Cloud,
  Cpu,
  Zap,
  Users,
  Globe,
  ShieldCheck,
  Infinity,
  Award,
} from 'lucide-react'

// Wave separator component
const WaveSeparator = () => (
  <div className="-mt-1">
    <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="w-full h-8">
      <path d="M0,0 C600,100 600,100 1200,0 L1200,100 L0,100 Z" fill="rgb(249 250 251)" />
    </svg>
  </div>
)

const siteUrl = 'https://sgx.cl'
const innovationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${siteUrl}/innovacion#webpage`,
  url: `${siteUrl}/innovacion`,
  name: 'Innovación en buses eléctricos y gestión de flotas | SGX Chile',
  description:
    'Tecnología, telemetría, gestión inteligente de flotas, seguridad y soporte para proyectos de buses eléctricos Ankai en Chile.',
  inLanguage: 'es-CL',
  about: {
    '@id': `${siteUrl}/#organization`,
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Inicio',
      item: siteUrl,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Innovación',
      item: `${siteUrl}/innovacion`,
    },
  ],
}

export default function Innovacion() {
  return (
    <>
      <SEO
        title="Innovación para buses eléctricos y flotas | SGX Chile"
        description="SGX Chile integra buses eléctricos Ankai con telemetría, mantenimiento predictivo, conectividad y soporte para operaciones de transporte modernas."
        canonical="/innovacion"
        image="/img/productos.webp"
        jsonLd={[innovationSchema, breadcrumbSchema]}
      />
      <Header />

      <section
        id="innovacion-hero"
        className="relative flex items-center justify-center overflow-hidden bg-cover bg-center py-24 sm:py-28"
        style={{ backgroundImage: "url('/img/productos.webp')" }}
      >
        <div className="absolute inset-0 bg-slate-950/60" />
        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
          <h1 className="max-w-4xl text-3xl font-extrabold tracking-tight text-white drop-shadow-lg sm:text-5xl">
            Innovación & Futuro
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-white/90 sm:text-lg">
            Más allá de la tecnología, diseñamos ecosistemas y servicios que garantizan
            seguridad, eficiencia y sostenibilidad en cada etapa del ciclo de vida.
          </p>
        </div>
      </section>

      <WaveSeparator />

      <main className="bg-gray-50">
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-8 space-y-12">

          {/* I+D y Ecosistema de Investigación */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-2xl font-extrabold text-gray-900">
              Ecosistema de I+D y Colaboraciones
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Contamos con un Centro Nacional de I+D para vehículos eléctricos y cinco
              laboratorios especializados, trabajando mano a mano con universidades
              y centros postdoctorales.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <Database size={20} className="inline-block mr-2 text-red-700" />
                Laboratorios de tren motriz, baterías, EMC, desempeño y durabilidad.
              </li>
              <li>
                <Cloud size={20} className="inline-block mr-2 text-red-700" />
                Simulación en la nube y gemelo digital para validar en rutas reales.
              </li>
              <li>
                <Cpu size={20} className="inline-block mr-2 text-red-700" />
                Modelos de simulación avanzada (elementos finitos, análisis térmico y vibracional)
                para optimizar diseño y mantenimiento.
              </li>
            </ul>
          </motion.div>

          <WaveSeparator />

          {/* Conectividad y Smart Fleet */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-2xl font-extrabold text-gray-900">
              Conectividad y Gestión Inteligente de Flotas
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Plataformas de telemetría y diagnóstico remoto habilitan mantenimiento predictivo
              basado en datos, reduciendo paradas y optimizando el costo total de operación.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <Cloud size={20} className="inline-block mr-2 text-red-700" />
                Dashboard con KPIs en tiempo real: consumo, disponibilidad, alertas y cumplimiento de rutas.
              </li>
              <li>
                <Users size={20} className="inline-block mr-2 text-red-700" />
                Apps móviles para conductores y gestores con notificaciones, checklists y asistencia en ruta.
              </li>
            </ul>
          </motion.div>

          <WaveSeparator />

          {/* Movilidad Autónoma & Energías Limpias */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-2xl font-extrabold text-gray-900">
              Movilidad Autónoma & Energías Limpias
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Experiencia con pilotos de conducción autónoma y desarrollo de buses de hidrógeno
              con celdas de combustible, como parte de la hoja de ruta hacia cero emisiones.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <Zap size={24} className="text-red-700" />
                <span className="text-gray-700">
                  Operaciones piloto en entornos urbanos y suburbanos controlados.
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <Infinity size={24} className="text-red-700" />
                <span className="text-gray-700">
                  Prototipos de hidrógeno en evaluación para ampliar autonomía y reducir tiempos de recarga.
                </span>
              </div>
            </div>
          </motion.div>

          <WaveSeparator />

          {/* Servicio Postventa & Mantenimiento Predictivo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-2xl font-extrabold text-gray-900">
              Servicio Postventa & Mantenimiento Predictivo
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Monitoreo de condición con reglas y umbrales por componente (temperatura, vibración, voltaje),
              integrando metodologías FMEA/RCM, seguimiento de MTBF/MTTR y trazabilidad por VIN.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <ShieldCheck size={20} className="inline-block mr-2 text-red-700" />
                Alertas automáticas y disparadores de intervención programada para maximizar disponibilidad.
              </li>
              <li>
                <Globe size={20} className="inline-block mr-2 text-red-700" />
                Red global de centros de servicio y repuestos con cobertura expedita.
              </li>
            </ul>
          </motion.div>

          <WaveSeparator />

          {/* Seguridad, Robustez & Estándares */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="space-y-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-2xl font-extrabold text-gray-900">
              Seguridad, Robustez & Estándares
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Protección y estanqueidad IP67 en componentes críticos y ensayos de vadeo.</li>
              <li>Rangos de operación validados entre –40 °C y 60 °C.</li>
              <li>Compatibilidad electromagnética (EMC) a nivel de vehículo y cableado.</li>
              <li>Recuperación de energía de frenado (EBS) integrada con control de estabilidad.</li>
              <li>Aligeramiento estructural y optimización de baterías para mayor eficiencia.</li>
              <li>Suite de asistencia al conductor (PCW, HMW, FCW, LDW, SLI) y prioridad de dirección.</li>
            </ul>
          </motion.div>

          <WaveSeparator />

          {/* Patentes & Estándares */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-2xl font-extrabold text-gray-900">
              Patentes & Estándares
            </h2>
            <div className="flex items-start space-x-3">
              <Award size={24} className="text-red-700" />
              <p className="text-gray-700 leading-relaxed">
                Liderazgo histórico en innovación aplicada a buses de nueva energía, con centros nacionales
                de I+D e integración de sistemas que han marcado hitos técnicos en la industria.
              </p>
            </div>
          </motion.div>

          <WaveSeparator />

          {/* CTA Final */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="rounded-3xl border border-red-200 bg-red-50 p-8 text-center shadow-sm space-y-4"
          >
            <h2 className="text-2xl font-extrabold text-gray-900">
              Elevemos tu Flota al Futuro
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Descubre cómo SGX-Innovación entrega soluciones integrales para maximizar
              eficiencia, seguridad y sostenibilidad en cada kilómetro de tu operación.
            </p>
          </motion.div>
          </div>
        </section>
      </main>

      <ContactActions />
      <Footer />
    </>
  )
}
