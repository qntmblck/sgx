import { useState, useEffect } from 'react'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'
import ProductoCard from './ProductoCard'
import BeneficiosTecnologicos from './BeneficiosTecnologicos'
import ContactActions from '@/Components/ContactActions'

export default function Productos() {
  const [categoriasSeleccionadas, setCategoriasSeleccionadas] = useState([])

  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const id = hash.replace('#', '')
      const scrollToElement = () => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }

      setTimeout(scrollToElement, 100)
      setTimeout(scrollToElement, 300)
      setTimeout(scrollToElement, 600)
    }
  }, [])

  return (
    <>
      <Header />

      {/* Hero dinámico */}
      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/img/productos.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-20 sm:pt-28 pb-16">
          <div className="text-center mb-10">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow mb-4">
              Portafolio de Buses ANKAI
            </h1>
            <p className="text-white text-lg sm:text-xl max-w-3xl mx-auto drop-shadow-sm">
              Modelos eléctricos, urbanos, interurbanos y de alta capacidad adaptados a las necesidades del transporte moderno en Chile y Latinoamérica.
            </p>
          </div>

          {/* Carrusel beneficios tecnológicos */}
          <BeneficiosTecnologicos />
        </div>
      </div>

      {/* Productos */}
      <section className="bg-[#001d2e]">
        <main className="py-12 px-2 sm:px-4 lg:px-8 max-w-full">
          <ProductoCard categoriasSeleccionadas={categoriasSeleccionadas} />
        </main>
      </section>

      <Footer />
      <ContactActions />
    </>
  )
}
