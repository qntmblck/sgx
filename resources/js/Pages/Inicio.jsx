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
        - overflow-auto en móvil, overflow-hidden en desktop
      */}
      <div className="flex flex-col h-screen overflow-auto md:overflow-hidden">
        <Header />

        {/*
          - flex-1: ocupa todo el espacio sobrante
          - overflow-auto/md:overflow-hidden: idem contenedor padre
        */}
        <main className="flex-1 overflow-auto md:overflow-hidden">
          <HeroSection />
        </main>

        <Footer />
      </div>

      <ContactActions />
    </>
  )
}
