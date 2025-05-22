import { useState } from 'react'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'
import Categorias from './Categorias'
import ProductoCard from './ProductoCard'
import BeneficiosTecnologicos from './BeneficiosTecnologicos'
import Galeria from './Galeria'

export default function Productos() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todos')

  return (
    <>
      <Header />

      {/* Portada con título */}
      <div
        className="relative h-[300px] bg-cover bg-center"
        style={{ backgroundImage: "url('/img/productos.jpg')" }}
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

      <main className="pt-12 max-w-7xl mx-auto px-4">
        <Categorias
          categoriaSeleccionada={categoriaSeleccionada}
          setCategoriaSeleccionada={setCategoriaSeleccionada}
        />
        <ProductoCard categoriaSeleccionada={categoriaSeleccionada} />

        {/* Secciones adicionales */}
        <section id="beneficios">
  <BeneficiosTecnologicos />
</section>

        <Galeria />
      </main>

      <Footer />
    </>
  )
}
