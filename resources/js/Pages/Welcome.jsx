cat > resources/js/Pages/Welcome.jsx <<'EOF'
import { Head } from '@inertiajs/react'
import Header from '@/Components/Header'
import HeroSection from '@/Components/HeroSection'
import Sobre from '@/Components/Sobre'
import FortalezasAnkai from '@/Components/FortalezasAnkai'
import ProductosDestacados from '@/Components/ProductosDestacados'
import ServiciosDestacados from '@/Components/ServiciosDestacados'
import ReconocimientoGlobal from '@/Components/ReconocimientoGlobal'
import Impacto from '@/Components/Impacto'
import CTAContacto from '@/Components/CTAContacto'
import Footer from '@/Components/Footer'

export default function Welcome() {
  return (
    <>
      <Head title="SGX · Representantes Oficiales de ANKAI en Chile" />
      <div className="bg-white text-gray-900 scroll-smooth">
        <Header />
        <main>
          <HeroSection />
          <Sobre />
          <FortalezasAnkai />
          <ProductosDestacados />
          <ServiciosDestacados />
          <ReconocimientoGlobal />
          <Impacto />
          <CTAContacto />
        </main>
        <Footer />
      </div>
    </>
  )
}
EOF
