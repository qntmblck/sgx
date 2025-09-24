import { Head } from '@inertiajs/react'
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

export default function Innovacion() {
  return (
    <>
      <Head title="SGX · Innovación" />
      <Header />

      {/* Hero animado con gradiente */}
      <section
        id="innovacion-hero"
        className="relative flex items-center justify-center py-24
          bg-gradient-to-r from-[#003b5c] via-[#005a8d] to-[#00d084]
          bg-[length:200%] animate-gradient-x overflow-x-hidden"
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-lg">
            Innovación & Futuro
          </h1>
          <p className="text-lg text-white/90 leading-relaxed">
            Más allá de la tecnología, diseñamos ecosistemas y servicios que garantizan
            seguridad, eficiencia y sostenibilidad en cada etapa del ciclo de vida.
          </p>
        </div>
      </section>

      <WaveSeparator />

      <main className="bg-gray-50">
        <section className="max-w-7xl mx-auto px-6 py-16 space-y-16">

          {/* I+D y Ecosistema de Investigación */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
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
                <Database size={20} className="inline-block mr-2 text-[#005a8d]" />
                Laboratorios de tren motriz, baterías, EMC, desempeño y durabilidad.
              </li>
              <li>
                <Cloud size={20} className="inline-block mr-2 text-[#005a8d]" />
                Simulación en la nube y gemelo digital para validar en rutas reales.
              </li>
              <li>
                <Cpu size={20} className="inline-block mr-2 text-[#005a8d]" />
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
            className="space-y-6"
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
                <Cloud size={20} className="inline-block mr-2 text-[#005a8d]" />
                Dashboard con KPIs en tiempo real: consumo, disponibilidad, alertas y cumplimiento de rutas.
              </li>
              <li>
                <Users size={20} className="inline-block mr-2 text-[#005a8d]" />
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
            className="space-y-6"
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
                <Zap size={24} className="text-[#005a8d]" />
                <span className="text-gray-700">
                  Operaciones piloto en entornos urbanos y suburbanos controlados.
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <Infinity size={24} className="text-[#005a8d]" />
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
            className="space-y-6"
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
                <ShieldCheck size={20} className="inline-block mr-2 text-[#005a8d]" />
                Alertas automáticas y disparadores de intervención programada para maximizar disponibilidad.
              </li>
              <li>
                <Globe size={20} className="inline-block mr-2 text-[#005a8d]" />
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
            className="space-y-6"
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
            className="space-y-6"
          >
            <h2 className="text-2xl font-extrabold text-gray-900">
              Patentes & Estándares
            </h2>
            <div className="flex items-start space-x-3">
              <Award size={24} className="text-[#005a8d]" />
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
            className="text-center space-y-4 bg-white/20 backdrop-blur-lg rounded-2xl p-8 shadow-md"
          >
            <h2 className="text-2xl font-extrabold text-gray-900">
              Elevemos tu Flota al Futuro
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Descubre cómo SGX-Innovación entrega soluciones integrales para maximizar
              eficiencia, seguridad y sostenibilidad en cada kilómetro de tu operación.
            </p>
          </motion.div>

        </section>
      </main>

      <ContactActions />
      <Footer />
    </>
  )
}
