import { Head } from '@inertiajs/react'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'

export default function Tecnologia() {
  return (
    <>
      <Head title="SGX · Tecnología" />
      <Header />

      {/* ——— Hero pequeño para Tecnología ——— */}
      <section
        className="pt-24 bg-gradient-to-r from-[#003b5c] to-[#00d084] text-white"
      >
        <div className="max-w-7xl mx-auto px-6 py-12 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold">
            Tecnología
          </h1>
          <p className="mt-2 text-lg text-white/90">
            The Key Technology of Ankai is derived from the world’s leading bus manufacturer, German <span className="font-semibold">KASSBOHREER/SETRA</span> nowadays <span className="font-semibold">EVO BUS</span> of Daimler Benz Group.
          </p>
        </div>
      </section>

      {/* ——— Galería y Beneficios ——— */}
      <main className="pb-16 bg-gray-50">
        <section id="tecnologia" className="max-w-7xl mx-auto px-6 space-y-10">
          {/* Galería de imágenes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/img/ankai/homologation-certificates.png"
                alt="Homologation Certificates"
                className="w-full h-48 object-cover"
              />
              <p className="p-2 text-center text-sm text-gray-700">
                Homologation Certificates
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/img/ankai/quality-management.png"
                alt="Quality Management System"
                className="w-full h-48 object-cover"
              />
              <p className="p-2 text-center text-sm text-gray-700">
                Quality Management System
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/img/ankai/homologation-tests.png"
                alt="Homologation Tests"
                className="w-full h-48 object-cover"
              />
              <p className="p-2 text-center text-sm text-gray-700">
                Homologation Tests
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/img/ankai/electrophoresis.png"
                alt="Electrophoresis Process"
                className="w-full h-48 object-cover"
              />
              <p className="p-2 text-center text-sm text-gray-700">
                Electrophoresis
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/img/ankai/new-energy-bus.png"
                alt="New Energy Bus Development"
                className="w-full h-48 object-cover"
              />
              <p className="p-2 text-center text-sm text-gray-700">
                New Energy Bus Development
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/img/ankai/r-and-d.png"
                alt="Research & Development Ability"
                className="w-full h-48 object-cover"
              />
              <p className="p-2 text-center text-sm text-gray-700">
                R&amp;D Ability
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/img/ankai/monocoque.png"
                alt="Monocoque Structure"
                className="w-full h-48 object-cover"
              />
              <p className="p-2 text-center text-sm text-gray-700">
                Monocoque Structure
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/img/ankai/technology-source.png"
                alt="Technology Source & Route"
                className="w-full h-48 object-cover"
              />
              <p className="p-2 text-center text-sm text-gray-700">
                Technology Source &amp; Route
              </p>
            </div>
          </div>

          {/* Beneficios clave */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                Más Espacio
              </h3>
              <p className="mt-2 text-gray-700">
                Estructura monocasco que maximiza el área interior.
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                Mayor Dureza
              </h3>
              <p className="mt-2 text-gray-700">
                Carrocería 3–6× más resistente que buses convencionales.
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                Ligero Peso
              </h3>
              <p className="mt-2 text-gray-700">
                Hasta 8% menos peso para mejorar eficiencia energética.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
