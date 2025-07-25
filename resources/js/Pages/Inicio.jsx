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
        - quitamos cualquier flex para que el main solo ocupe lo que necesita
        - overflow-x-hidden para evitar scroll horizontal
      */}
      <div className="overflow-x-hidden">
        <Header />

        {/*
          - eliminamos flex-1: el HeroSection se dimensiona a su contenido
          - sin clases extra de layout
        */}
        <main>
          <HeroSection />
        </main>

        <Footer />
      </div>

      <ContactActions />
    </>
  )
}
