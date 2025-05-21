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
      <main className="pt-24">
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
