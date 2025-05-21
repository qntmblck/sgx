import Header from '@/Components/Header'
import Footer from '@/Components/Footer'
import FormularioContacto from './FormularioContacto.jsx';
import InfoContacto from './InfoContacto.jsx';
import MapaEmbebido from './MapaEmbebido.jsx';
import CTAFinal from './CTAFinal.jsx';

export default function Contacto() {
  return (
    <>
      <Header />

      {/* Imagen de portada */}
      <div className="relative h-[300px] bg-cover bg-center" style={{ backgroundImage: "url('/img/contacto.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl sm:text-5xl text-white font-bold">Contáctanos</h1>
        </div>
      </div>

      <main className="pt-12">
        <div className="max-w-7xl mx-auto px-4">
          <FormularioContacto />
          <InfoContacto />
          <MapaEmbebido />
          <CTAFinal />
        </div>
      </main>

      <Footer />
    </>
  )
}
