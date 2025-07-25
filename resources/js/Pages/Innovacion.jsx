import { Head } from '@inertiajs/react'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'

export default function Innovacion() {
  return (
    <>
      <Head title="SGX · Innovación" />
      <Header />

      <main className="pt-24 pb-16 bg-white">
        <section
          id="innovacion"
          className="max-w-4xl mx-auto px-6 space-y-8"
        >
          {/* Título */}
          <h2 className="text-3xl font-extrabold text-gray-900">
            Innovación
          </h2>

          {/* Listado numerado de innovaciones */}
          <ol className="list-decimal list-inside space-y-4 text-gray-700">
            <li>
              <span className="font-semibold">Cooperación con SETRA:</span>{' '}
              Alianza estratégica con SETRA para transferencia tecnológica en chasis.
            </li>
            <li>
              <span className="font-semibold">Estructura Monocasco:</span>{' '}
              Carrocería “cage” integral que ofrece más espacio interior y una resistencia 3–6× superior.
            </li>
            <li>
              <span className="font-semibold">I+D+i Research:</span>{' '}
              Centro de I+D con múltiples patentes, programas científicos y premios tecnológicos.
            </li>
            <li>
              <span className="font-semibold">Liderazgo en buses eléctricos:</span>{' '}
              Primeros en producción, primeros en operación, primeros en listado nacional y con la mayor cantidad de modelos en el National Bulletin.
            </li>
            <li>
              <span className="font-semibold">Electroforesis:</span>{' '}
              Recubrimiento anticorrosivo de alta densidad para máxima durabilidad.
            </li>
            <li>
              <span className="font-semibold">Laboratorios & Test de Homologación:</span>{' '}
              Ensayos de estabilidad (slope, tilting, rollover), EMC, temperaturas extremas, ABS, y más.
            </li>
            <li>
              <span className="font-semibold">Quality Management System:</span>{' '}
              Certificaciones ISO 9001:2000, ISO/TS16949:2002, CCC (China Compulsory), GJB9001 a‑2001 (norma militar China).
            </li>
            <li>
              <span className="font-semibold">Homologaciones Certificadas:</span>{' '}
              Certificados internacionales (DOT, GOST, E‑mark, SASO, PCT, etc.).
            </li>
          </ol>
        </section>
      </main>

      <Footer />
    </>
  )
}
