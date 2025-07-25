import { Head } from '@inertiajs/react'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'
import {
  Cpu,
  Zap,
  ShieldCheck,
  Award,
  Globe,
  ThermometerSnowflake,
  Layers,
  CheckCircle2,
} from 'lucide-react'

export default function Innovacion() {
  const items = [
    {
      icon: <Globe size={28} />,
      title: 'Cooperación con SETRA',
      text: 'Alianza estratégica con SETRA para transferencia tecnológica en chasis.',
    },
    {
      icon: <Layers size={28} />,
      title: 'Estructura Monocasco',
      text: 'Carrocería integral tipo “cage” con más espacio interior y 3–6× más resistente.',
    },
    {
      icon: <Cpu size={28} />,
      title: 'I+D+i Research',
      text: 'Centro de I+D con múltiples patentes, programas científicos y premios.',
    },
    {
      icon: <Zap size={28} />,
      title: 'Liderazgo en Buses Eléctricos',
      text: 'Primeros en producción, operación y listado nacional con más modelos.',
    },
    {
      icon: <ShieldCheck size={28} />,
      title: 'Electroforesis',
      text: 'Recubrimiento anticorrosivo de alta densidad para máxima durabilidad.',
    },
    {
      icon: <ThermometerSnowflake size={28} />,
      title: 'Lab. & Tests de Homologación',
      text: 'Ensayos slope, tilting, rollover, EMC, ABS y temperaturas extremas.',
    },
    {
      icon: <Award size={28} />,
      title: 'Quality Management',
      text: 'ISO 9001:2000, ISO/TS16949:2002, CCC China Compulsory, GJB9001 a‑2001.',
    },
    {
      icon: <CheckCircle2 size={28} />,
      title: 'Homologaciones Certificadas',
      text: 'DOT, GOST, E‑mark, SASO, PCT, ECE, y más.',
    },
  ]

  return (
    <>
      <Head title="SGX · Innovación" />
      <Header />

      {/* ——— Hero pequeño para Innovación ——— */}
      <section
        className="pt-24 bg-gradient-to-r from-[#003b5c] to-[#00d084] text-white"
      >
        <div className="max-w-7xl mx-auto px-6 py-12 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold">
            Innovación
          </h1>
          <p className="mt-2 text-lg text-white/90">
            Impulsamos la innovación tecnológica con soluciones de vanguardia.
          </p>
        </div>
      </section>

      {/* ——— Cards de Innovación ——— */}
      <main className="pb-16 bg-gray-50">
        <section className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map(({ icon, title, text }) => (
              <div
                key={title}
                className="
                  bg-white
                  rounded-2xl p-6
                  flex flex-col items-center text-center
                  shadow-md hover:shadow-xl
                  transform hover:-translate-y-1
                  transition-all duration-300
                "
              >
                <div
                  className="
                    mb-4 p-3
                    bg-gradient-to-br from-[#003b5c] to-[#00d084]
                    rounded-full text-white
                  "
                >
                  {icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {title}
                </h3>
                <p className="text-sm text-gray-600">{text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
