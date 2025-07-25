import { Head } from '@inertiajs/react'
import Header from '@/Components/Header'
import HeroSection from '@/Components/HeroSection'
import Footer from '@/Components/Footer'
import ContactActions from '@/Components/ContactActions'

export default function Inicio() {
  return (
    <>
      <Head title="SGX · Inicio" />

      {/*
        - min-h-screen asegura que al menos cubra toda la altura
        - no hay overflow-y en este div: el scroll recae en el body
        - overflow-x-hidden para evitar scroll horizontal
      */}
      <div className="flex flex-col min-h-screen overflow-x-hidden">
        <Header />

        {/*
          - flex-1 estira el hero para llenar el espacio sobrante
          - sin overflow: cualquier scroll aquí hace scroll de toda la página
        */}
        <main className="flex-1">
          <HeroSection />
        </main>

        <Footer />
      </div>

      <ContactActions />
    </>
  )
}
