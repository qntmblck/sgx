import { Head } from '@inertiajs/react'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'

export default function Tecnologia() {
  return (
    <>
      <Head title="SGX · Tecnología" />
      <Header />

      <main className="pt-24 pb-16 bg-white">
        <section
          id="tecnologia"
          className="max-w-7xl mx-auto px-6 space-y-10"
        >
          {/* Título */}
          <h2 className="text-3xl font-extrabold text-gray-900">
            Tecnología
          </h2>

          {/* Descripción */}
          <p className="text-lg text-gray-700">
            The Key Technology of Ankai is derived from the world’s leading bus
            manufacturer, German{' '}
            <span className="font-semibold">KASSBOHREER/SETRA</span> nowadays{' '}
            <span className="font-semibold">EVO BUS</span> of Daimler Benz Group.
          </p>

          {/* Galería de imágenes representativas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="overflow-hidden rounded-lg shadow">
              <img
                src="/img/ankai/homologation-certificates.png"
                alt="Homologation Certificates"
                className="w-full h-48 object-cover"
              />
              <p className="p-2 text-center text-sm text-gray-600">
                Homologation Certificates
              </p>
            </div>
            <div className="overflow-hidden rounded-lg shadow">
              <img
                src="/img/ankai/quality-management.png"
                alt="Quality Management System"
                className="w-full h-48 object-cover"
              />
              <p className="p-2 text-center text-sm text-gray-600">
                Quality Management System
              </p>
            </div>
            <div className="overflow-hidden rounded-lg shadow">
              <img
                src="/img/ankai/homologation-tests.png"
                alt="Homologation Tests"
                className="w-full h-48 object-cover"
              />
              <p className="p-2 text-center text-sm text-gray-600">
                Homologation Tests
              </p>
            </div>
            <div className="overflow-hidden rounded-lg shadow">
              <img
                src="/img/ankai/electrophoresis.png"
                alt="Electrophoresis Process"
                className="w-full h-48 object-cover"
              />
              <p className="p-2 text-center text-sm text-gray-600">
                Electrophoresis
              </p>
            </div>
            <div className="overflow-hidden rounded-lg shadow">
              <img
                src="/img/ankai/new-energy-bus.png"
                alt="New Energy Bus Development"
                className="w-full h-48 object-cover"
              />
              <p className="p-2 text-center text-sm text-gray-600">
                New Energy Bus Development
              </p>
            </div>
            <div className="overflow-hidden rounded-lg shadow">
              <img
                src="/img/ankai/r-and-d.png"
                alt="Research & Development Ability"
                className="w-full h-48 object-cover"
              />
              <p className="p-2 text-center text-sm text-gray-600">
                R&amp;D Ability
              </p>
            </div>
            <div className="overflow-hidden rounded-lg shadow">
              <img
                src="/img/ankai/monocoque.png"
                alt="Monocoque Structure"
                className="w-full h-48 object-cover"
              />
              <p className="p-2 text-center text-sm text-gray-600">
                Monocoque Structure
              </p>
            </div>
            <div className="overflow-hidden rounded-lg shadow">
              <img
                src="/img/ankai/technology-source.png"
                alt="Technology Source & Route"
                className="w-full h-48 object-cover"
              />
              <p className="p-2 text-center text-sm text-gray-600">
                Technology Source &amp; Route
              </p>
            </div>
          </div>

          {/* Beneficios clave */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Más Espacio
              </h3>
              <p className="mt-2 text-gray-600">
                Estructura monocasco que maximiza el área interior.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Mayor Dureza
              </h3>
              <p className="mt-2 text-gray-600">
                Fuerza de carrocería 3–6 veces superior a buses convencionales.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Ligero Peso
              </h3>
              <p className="mt-2 text-gray-600">
                Reducción de peso aproximada del 8% para eficiencia energética.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
