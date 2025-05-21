import { Head } from '@inertiajs/react'
import Header from '@/Components/Header'
import HeroSection from '@/Components/HeroSection'
import PresenciaGlobal from '@/Components/PresenciaGlobal'
import Sobre from '@/Components/Sobre'
import FortalezasAnkai from '@/Components/FortalezasAnkai'
import ProductosDestacados from '@/Components/ProductosDestacados'
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
          <PresenciaGlobal />
          <Sobre />
          <FortalezasAnkai />
          <ProductosDestacados />
          <Impacto />
          <CTAContacto />
        </main>
        <Footer />
      </div>
    </>
  )
}
