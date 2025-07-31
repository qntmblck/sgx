import { Head } from '@inertiajs/react'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'
import ContactActions from '@/Components/ContactActions'
import { motion } from 'framer-motion'

// Wave separator component
const WaveSeparator = () => (
  <div className="-mt-1">
    <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="w-full h-8">
      <path d="M0,0 C600,100 600,100 1200,0 L1200,100 L0,100 Z" fill="rgb(249 250 251)" />
    </svg>
  </div>
)

export default function Tecnologia() {
  return (
    <>
      <Head title="SGX · Tecnología" />
      <Header />

      {/* ——— Hero con imagen de fondo ——— */}
      <section
        id="tecnologia-hero"
        className="
          relative flex items-center justify-center
          py-24
          bg-cover bg-center
          overflow-x-hidden
        "
        style={{ backgroundImage: "url('/img/productos.webp')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center space-y-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-wide drop-shadow-lg">
            Tecnología en SGX
          </h1>
          <p className="text-lg text-white/90 leading-relaxed">
            Basada en más de 20 años de transferencia de ingeniería alemana de{' '}
            <span className="font-semibold">Kässbohrer / Setra</span> (hoy{' '}
            <span className="font-semibold">EvoBus</span> de Daimler AG), la
            carrocería monocasco de Ankai marca el estándar mundial en
            resistencia, espacio e innovación.
          </p>
        </div>
      </section>


      <WaveSeparator />

      {/* ——— Detalles Técnicos ——— */}
      <main className="bg-gray-50">
        <section className="max-w-7xl mx-auto px-6 py-16 space-y-16">
          {/* Herencia Alemana & Monocasco */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="sticky top-24 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-md text-2xl font-extrabold text-gray-900">
              Herencia Alemana & Diseño Monocasco
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Nuestras unidades Ankai usan un chasis monocasco patentado — una
              construcción de “cáscara única” sin bastidor— licenciada
              originalmente por Setra. Esto ofrece:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>3–6× más resistencia estructural</strong> que buses
                tradicionales, para máxima seguridad.
              </li>
              <li>
                <strong>8% de ahorro de peso</strong> gracias a acero de alta
                resistencia, mejorando la eficiencia.
              </li>
              <li>
                <strong>Mayor espacio interior</strong> sin aumentar dimensiones
                exteriores.
              </li>
            </ul>
          </motion.div>

          <WaveSeparator />

          {/* Sistemas de Calidad & Homologaciones */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="sticky top-24 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-md text-2xl font-extrabold text-gray-900">
              Sistemas de Calidad & Homologaciones
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Todos los buses SGX‑Ankai se fabrican bajo un sistema de gestión
              certificado <strong>IATF 16949</strong>, garantizando control en
              cada etapa. Entre nuestras homologaciones:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: 'ECE R66 Rollover',
                  desc: 'Primer bus chino en superar la prueba de vuelco UN R66, protegiendo a los pasajeros ante vuelcos.',
                },
                {
                  title: 'CCC & GOST',
                  desc: 'Certificación China Compulsory (CCC) y cumplimiento GOST ruso para mercados globales.',
                },
                {
                  title: 'DOT & GJB9001',
                  desc: 'Aprobación DOT de EE.UU. y norma militar china GJB9001 2001 para máxima fiabilidad.',
                },
                {
                  title: 'Electrofóresis',
                  desc: 'Revestimiento catódico de alta adherencia que protege contra la corrosión en climas costeros y montañosos.',
                },
              ].map(({ title, desc }) => (
                <div
                  key={title}
                  className="
                    bg-white/20 backdrop-blur-lg
                    rounded-2xl p-6
                    shadow-md
                    transform-gpu perspective-1000
                    hover:rotate-x-3 hover:rotate-y-3 hover:shadow-xl
                    border-2 border-transparent hover:border-[#00d084]
                    transition-all duration-300
                  "
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-700">{desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <WaveSeparator />

          {/* Liderazgo en Nuevas Energías */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="sticky top-24 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-md text-2xl font-extrabold text-gray-900">
              Liderazgo en Nuevas Energías
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Ankai fue pionero con el primer bus eléctrico en ruta urbana
              (2010) y proveyó flota eléctrica en Beijing 2008. Hoy SGX ofrece:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>e‑Control Management</strong>: optimización de energía
                en tiempo real.
              </li>
              <li>
                <strong>Baterías probadas</strong> en el Centro Nacional de
                Investigación de Buses Eléctricos (2011).
              </li>
              <li>
                <strong>Autonomía hasta 350 km</strong> en ciclo urbano.
              </li>
            </ul>
          </motion.div>

          <WaveSeparator />

          {/* I+D+i & Innovación */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="sticky top-24 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-md text-2xl font-extrabold text-gray-900">
              I+D+i & Innovación
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Con alianzas con Siemens (Alemania) y universidades como Shanghai
              Jiao Tong, Ankai ha registrado más de <strong>1.700 patentes</strong>{' '}
              y ha ganado <strong>37 premios nacionales</strong>. Nuestros
              laboratorios cubren rendimiento, EMC y pruebas en temperaturas
              extremas.
            </p>
          </motion.div>

          <WaveSeparator />

          {/* Pensado para Chile */}
          <motion.div
            className="bg-white/20 backdrop-blur-lg rounded-2xl p-8 shadow-md text-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-extrabold text-gray-900">
              Pensado para Chile
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Con <strong>más espacio</strong> para viajes largos Norte–Sur,{' '}
              <strong>mayor dureza</strong> en caminos rurales y{' '}
              <strong>ligero peso</strong> para ahorrar bencina, nuestros buses
              SGX-Ankai enfrentan la Ruta 5, la costa y la Patagonia con confort,
              seguridad y eficiencia.
            </p>
          </motion.div>
        </section>
      </main>

      <ContactActions />
      <Footer />
    </>
  )
}
