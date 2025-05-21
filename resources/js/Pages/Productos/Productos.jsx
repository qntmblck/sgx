import Header from '@/Components/Header'
import Footer from '@/Components/Footer'
import Categorias from './Categorias.jsx';
import ProductoCard from './ProductoCard.jsx';
import BeneficiosTecnologicos from './BeneficiosTecnologicos.jsx';
import Galeria from './Galeria.jsx';

export default function Productos() {
  return (
    <>
      <Header />

      {/* Imagen de portada */}
      <div className="relative h-[300px] bg-cover bg-center" style={{ backgroundImage: "url('/img/productos.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl sm:text-5xl text-white font-bold">Productos</h1>
        </div>
      </div>

      <main className="pt-12">
        <div className="max-w-7xl mx-auto px-4">
          <Categorias />
          <ProductoCard />
          <BeneficiosTecnologicos />
          <Galeria />
        </div>
      </main>

      <Footer />
    </>
  )
}
