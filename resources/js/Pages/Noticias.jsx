import { Head } from '@inertiajs/react'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'
import ContactActions from '@/Components/ContactActions'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Megaphone, ExternalLink } from 'lucide-react'

export default function Noticias() {
  return (
    <>
      <Head title="SGX · Noticias" />
      <Header />

      {/* Hero */}
      <section
        className="
          relative flex items-center justify-center py-20
          bg-gradient-to-r from-[#003b5c] via-[#005a8d] to-[#00d084]
          bg-[length:200%] animate-gradient-x overflow-x-hidden
        "
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow">
            Noticias & Actualidad
          </h1>
          <p className="text-white/90">
            Avances, actividades y hitos de SGX — representante de Ankai — en su camino de ingreso al mercado chileno.
          </p>
        </div>
      </section>

      {/* Contenido */}
      <main className="bg-gray-50">
        <section className="max-w-7xl mx-auto px-6 py-16 space-y-10">

          {/* Nota principal: Seminario PUCV */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-sm overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Imagen / banner del evento */}
              <div className="relative">
                <img
                  src="/img/noticias/seminario-pucv.jpg"
                  alt="Seminario en la Pontificia Universidad Católica de Valparaíso"
                  className="w-full h-72 lg:h-full object-cover"
                />
                <span className="
                  absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold
                  bg-white/90 text-[#003b5c] shadow
                ">
                  Evento
                </span>
              </div>

              {/* Texto */}
              <div className="p-6 lg:p-8 space-y-4">
                <h2 className="text-2xl font-extrabold text-gray-900 leading-snug">
                  Seminario “Valparaíso 2025–2035: Desafíos y Oportunidades para una Movilidad Sustentable”
                </h2>

                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                  <span className="inline-flex items-center gap-2">
                    <Calendar size={16} />
                    2025 (PUCV, Valparaíso)
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <MapPin size={16} />
                    Escuela de Ingeniería de Construcción y Transporte — PUCV
                  </span>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  La <strong>Pontificia Universidad Católica de Valparaíso (PUCV)</strong> y <strong>SGX Chile SpA</strong> —representante de <strong>Ankai</strong>— realizaron
                  un seminario para abordar cómo la región puede acelerar la transición hacia una <em>movilidad más limpia, segura y eficiente</em>.
                  La jornada reunió a academia y sector privado para analizar tendencias y buenas prácticas que permitan preparar a Valparaíso
                  para la próxima década.
                </p>

                <div className="bg-gray-50 rounded-xl p-4">
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-2">Temas destacados</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Infraestructura eléctrica y vial para flotas sostenibles.</li>
                    <li>Calidad del servicio y experiencia de las personas usuarias.</li>
                    <li>Tecnología, operación y adaptación territorial.</li>
                    <li>Panel de conversación con expertos del sector.</li>
                  </ul>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Para el público general, el mensaje es claro: <strong>Ankai</strong> es sinónimo de innovación con respaldo real.
                  Aporta buses de nueva energía con foco en seguridad, confort y eficiencia, y suma la experiencia industrial necesaria
                  para acompañar procesos de transformación del transporte. En Chile, SGX impulsa este aterrizaje con actividades abiertas
                  y contenidos formativos que conectan la tecnología con el día a día de las ciudades.
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white bg-[#005a8d] hover:bg-[#00466e] transition shadow"
                    aria-label="Más información del seminario"
                  >
                    <Megaphone size={18} />
                    Más información
                    <ExternalLink size={16} className="opacity-80" />
                  </a>
                  <a
                    href="/contacto"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 text-gray-800 hover:bg-gray-50 transition"
                  >
                    Contacto prensa
                  </a>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Bloque de contexto de marca (para público general) */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-sm p-6 lg:p-8 space-y-4"
          >
            <h2 className="text-xl font-extrabold text-gray-900">
              ¿Quién es Ankai y por qué es relevante para Chile?
            </h2>
            <p className="text-gray-700">
              <strong>Ankai</strong> es una marca con trayectoria en buses de nueva energía (eléctricos e híbridos enchufables),
              respaldada por centros de I+D, laboratorios especializados y una plataforma tecnológica enfocada en seguridad,
              autonomía y confort. Aunque aún no opera en Chile, su llegada puede traducirse en <em>flotas más limpias</em>,
              <em>viajes más silenciosos</em> y <em>mejor eficiencia operativa</em> para el transporte público y privado.
            </p>
            <ul className="grid md:grid-cols-3 gap-4 text-gray-700">
              <li className="bg-gray-50 rounded-lg p-4">
                <span className="block font-semibold text-gray-900">Innovación útil</span>
                Mejoras continuas en autonomía, consumo y confort para viajes diarios más agradables.
              </li>
              <li className="bg-gray-50 rounded-lg p-4">
                <span className="block font-semibold text-gray-900">Seguridad como estándar</span>
                Asistencias al conductor y diseño estructural para proteger a personas pasajeras y conductoras.
              </li>
              <li className="bg-gray-50 rounded-lg p-4">
                <span className="block font-semibold text-gray-900">Eficiencia y sustentabilidad</span>
                Menor costo por kilómetro y menos emisiones locales en las ciudades.
              </li>
            </ul>
          </motion.article>

        </section>
      </main>

      <ContactActions />
      <Footer />
    </>
  )
}
