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
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }

      // Reintentos para asegurar scroll si el DOM aún no está listo
      setTimeout(scrollToElement, 100)
      setTimeout(scrollToElement, 300)
      setTimeout(scrollToElement, 600)
    }
  }, [])

  return (
    <>
      <Header />

      {/* Portada con título */}
      <div
        className="relative h-[300px] bg-cover bg-center"
        style={{ backgroundImage: "url('/img/productos.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl sm:text-5xl text-white font-extrabold mb-4 drop-shadow">
              Portafolio de Buses ANKAI
            </h1>
            <p className="text-white text-base sm:text-lg max-w-2xl mx-auto drop-shadow-sm">
              Modelos eléctricos, urbanos, interurbanos y de alta capacidad adaptados a las necesidades del transporte moderno en Chile y Latinoamérica.
            </p>
          </div>
        </div>
      </div>
      {/* Sección de productos y beneficios con fondo SGX */}
      <section className="bg-[#001d2e]">
        <main className="py-12 px-2 sm:px-4 lg:px-8 max-w-full">
          <ProductoCard categoriasSeleccionadas={categoriasSeleccionadas} />
          <section id="beneficios">
            <BeneficiosTecnologicos />
          </section>
        </main>
      </section>


      <section id="footer">
        <Footer />
      </section>
      <ContactActions />
    </>
  )
}
