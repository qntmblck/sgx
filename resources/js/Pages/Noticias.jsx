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
      <section className="relative flex items-center justify-center py-20 bg-gradient-to-r from-[#003b5c] via-[#005a8d] to-[#00d084] bg-[length:200%] animate-gradient-x overflow-x-hidden">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow">
            Noticias & Actualidad
          </h1>
          <p className="text-white/90">
            Noticias, actividades e hitos de SGX Chile & Ankai Bus.
          </p>
        </div>
      </section>

      {/* Contenido */}
      <main className="bg-gray-50">
        <section className="max-w-7xl mx-auto px-6 py-16 space-y-10">

          {/* Nota principal */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-sm overflow-hidden"
          >
            <div className="p-6 lg:p-8 space-y-6">

              {/* Título */}
              <h2 className="text-2xl font-extrabold text-gray-900 leading-snug">
                Seminario “Valparaíso 2025–2035: Desafíos y Oportunidades para una Movilidad Sustentable”
              </h2>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
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
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  El 24 de septiembre de 2025, SGX Chile, en conjunto con la Pontificia Universidad Católica de Valparaíso, organizó el seminario “Valparaíso 2025–2035: Desafíos y Oportunidades para una Movilidad Sustentable”. La actividad abordó distintas visiones en torno a la licitación de las unidades de servicio 1 y 2, así como los principales desafíos de la región para avanzar hacia un sistema de transporte más moderno y eficiente.
                </p>

                <p>
                  La jornada contó con la ponencia del Dr. Stefan Steiniger, Director del Magíster en Ingeniería en Transporte de la PUCV, y con la exposición de Sebastián Gatica, Director de SGX Chile. En este contexto, se analizaron temas clave para la transición del sistema de transporte regional:
                </p>

                <div className="bg-gray-50 rounded-xl p-4">
                  <ul className="list-disc list-inside space-y-1">
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
                <img src="/img/noticias/S1.webp" className="rounded-xl object-cover w-full h-56" />
                <img src="/img/noticias/S2.webp" className="rounded-xl object-cover w-full h-56" />
                <img src="/img/noticias/S3.webp" className="rounded-xl object-cover w-full h-56" />
                <img src="/img/noticias/S4.webp" className="rounded-xl object-cover w-full h-56" />
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
