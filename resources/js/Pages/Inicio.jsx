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
        - flex-col de altura 100vh
        - overflow-y-auto permite scroll vertical
        - overflow-x-hidden elimina scroll horizontal
        - en desktop mantenemos overflow-hidden
      */}
      <div className="flex flex-col h-screen overflow-y-auto overflow-x-hidden md:overflow-hidden">
        <Header />

        {/*
          - flex-1 ocupa todo el espacio sobrante
          - mismo control de overflow que el contenedor padre
        */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden md:overflow-hidden">
          <HeroSection />
        </main>

        <Footer />
      </div>

      <ContactActions />
    </>
  )
}
