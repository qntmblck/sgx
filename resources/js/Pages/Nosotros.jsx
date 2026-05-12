import SEO from '@/Components/SEO'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'
import ContactActions from '@/Components/ContactActions'
import { motion } from 'framer-motion'


const siteUrl = 'https://sgx.cl'
const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': `${siteUrl}/nosotros#webpage`,
  url: `${siteUrl}/nosotros`,
  name: 'SGX Chile | Representante Ankai y asesoría en electromovilidad',
  description:
    'SGX Chile acompaña a operadores, empresas e instituciones en compra de buses, renovación de flota, electromovilidad y proyectos de transporte.',
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
      name: 'Nosotros',
      item: `${siteUrl}/nosotros`,
    },
  ],
}

export default function Nosotros() {
  return (
    <>
      <SEO
        title="SGX Chile | Representante Ankai y buses eléctricos"
        description="Conoce SGX Chile, representante de soluciones Ankai para buses eléctricos, transporte público, renovación de flota y proyectos de electromovilidad."
        canonical="/nosotros"
        image="/img/calle.webp"
        jsonLd={[aboutSchema, breadcrumbSchema]}
      />
      <Header />

      <section
        className="relative flex items-center justify-center overflow-hidden bg-cover bg-center pt-24 pb-6 sm:pt-28 sm:pb-8"
        style={{ backgroundImage: "url('/img/hero.webp')" }}
      >
        <div className="absolute inset-0 bg-slate-950/65" />
        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
          <h1 className="max-w-4xl text-3xl font-extrabold tracking-tight text-white drop-shadow-lg sm:text-5xl">
            ¿Quiénes somos?
          </h1>
          <p className="mt-5 max-w-3xl text-base font-semibold leading-7 text-white/90 sm:text-lg">
            Especialistas en transición tecnológica aplicada al transporte
          </p>
        </div>
      </section>

      <main className="bg-gray-50">
        <section className="mx-auto max-w-7xl px-4 pt-2 pb-12 sm:px-6 sm:pt-3 sm:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-8"
          >
            <article className="text-[17px] leading-8 text-slate-700">
              <div className="mb-6 border-b border-slate-200 pb-5">
                <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  ¿Quiénes somos?
                </h2>
                <p className="mt-4 text-lg font-bold text-slate-900">
                  Especialistas en transición tecnológica aplicada al transporte
                </p>
              </div>

              <div className="space-y-5">
                <p>
                  En SGX Chile SpA somos una empresa enfocada en el desarrollo de proyectos de transporte, electromovilidad y movilidad industrial. Nuestro objetivo es acompañar a operadores, empresas e instituciones en la transición desde operaciones basadas en combustibles fósiles hacia sistemas modernos, eficientes y sostenibles, apoyados en tecnologías limpias.
                </p>

                <p>
                  Nuestra propuesta de valor integra asesoría técnica, análisis operacional, evaluación económica, preparación comercial y acompañamiento estratégico para la implementación de nuevas soluciones de movilidad. No entendemos la electromovilidad como la simple incorporación de vehículos, sino como un proceso integral que requiere planificación, análisis de datos, soporte técnico, infraestructura, viabilidad financiera y adaptación operativa.
                </p>

                <p>
                  SGX apoya a sus clientes en la evaluación de rutas, proyecciones de rendimiento, estimación de costos operacionales, análisis de eficiencia energética y construcción de <strong className="font-bold text-slate-900">modelos financieros asociados a operaciones eléctricas</strong>. Esto permite proyectar con mayor claridad los costos, beneficios, riesgos y condiciones necesarias para avanzar hacia una operación moderna y sostenible.
                </p>

                <p>
                  Asimismo, entregamos apoyo en la <strong className="font-bold text-slate-900">preparación de proyectos para licitaciones de concesión de vías</strong>, procesos de renovación de flota, programas públicos de modernización como <strong className="font-bold text-slate-900">Renueva tu Micro</strong>, y otras iniciativas orientadas a la transformación del transporte público, privado e industrial.
                </p>

                <p>
                  A través del uso de telemetría, monitoreo y análisis de datos, buscamos elevar la operación de transporte a un nivel superior, permitiendo mejorar la toma de decisiones, optimizar el desempeño de la flota, anticipar necesidades de mantenimiento y construir modelos operacionales más eficientes.
                </p>

                <p>
                  En SGX conectamos tecnología, operación, financiamiento y estrategia para impulsar una transición ordenada, realista y profesional hacia el transporte del futuro.
                </p>
              </div>

              <div className="mt-8 grid gap-4 lg:grid-cols-3">
                <figure className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm">
                  <img
                    src="/img/calle.webp"
                    alt="Operación de transporte urbano"
                    className="h-64 w-full object-cover lg:h-56 xl:h-60"
                    loading="lazy"
                  />
                </figure>

                <figure className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm">
                  <img
                    src="/img/productos/E9_1.webp"
                    alt="Bus eléctrico Ankai"
                    className="h-64 w-full object-cover lg:h-56 xl:h-60"
                    loading="lazy"
                  />
                </figure>

                <div className="flex min-h-64 items-center rounded-3xl border border-red-200 bg-red-50 p-5 text-sm font-semibold leading-7 text-red-900 lg:min-h-56 xl:min-h-60">
                  Tecnología, operación, financiamiento y estrategia para una transición profesional hacia el transporte del futuro.
                </div>
              </div>
            </article>
          </motion.div>
        </section>
      </main>

      <ContactActions />
      <Footer />
    </>
  )
}
