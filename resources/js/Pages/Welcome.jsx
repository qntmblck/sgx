import { Head } from '@inertiajs/react'
import Header from '@/Components/Header'
import HeroSection from '@/Components/HeroSection'
import Sobre from '@/Components/Sobre'
import Electromovilidad from '@/Components/Electromovilidad'
import Productos from '@/Components/Productos'
import Telemetria from '@/Components/Telemetria'
import Impacto from '@/Components/Impacto'
import Servicios from '@/Components/Servicios'
import Contacto from '@/Components/Contacto'
import Footer from '@/Components/Footer'

export default function Welcome() {
  return (
    <>
      <Head title="SGX · Representantes Autorizados ANKAI" />
      <div className="bg-white text-gray-900 scroll-smooth">
        <Header />
        <main>
          <HeroSection />
          <Sobre />
          <Electromovilidad />
          <Productos />
          <Telemetria />
          <Impacto />
          <Servicios />
          <Contacto />
        </main>
        <Footer />
      </div>
    </>
  )
}
