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
      <main className="pt-24">
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
