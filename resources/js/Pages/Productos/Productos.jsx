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
      <main className="pt-24">
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
