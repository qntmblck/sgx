import Header from '@/Components/Header'
import Footer from '@/Components/Footer'
import AsesoriaTecnica from './AsesoriaTecnica.jsx';
import Telemetria from './Telemetria.jsx';
import PostVenta from './PostVenta.jsx';
import Certificaciones from './Certificaciones.jsx';

export default function Servicios() {
  return (
    <>
      <Header />

      {/* Imagen de portada */}
      <div className="relative h-[300px] bg-cover bg-center" style={{ backgroundImage: "url('/img/servicios.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl sm:text-5xl text-white font-bold">Servicios</h1>
        </div>
      </div>

      <main className="pt-12">
        <div className="max-w-7xl mx-auto px-4">
          <AsesoriaTecnica />
          <Telemetria />
          <PostVenta />
          <Certificaciones />
        </div>
      </main>

      <Footer />
    </>
  )
}
