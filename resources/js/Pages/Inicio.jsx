import { Head } from '@inertiajs/react'
import Header from '@/Components/Header'
import HeroSection from '@/Components/HeroSection'
import Footer from '@/Components/Footer'
import ContactActions from '@/Components/ContactActions'

export default function Inicio() {
  return (
    <>
      <Head title="SGX · Inicio" />

      {/* flex-col de altura exacta de la ventana, sin overflow */}
      <div className="flex flex-col h-screen overflow-hidden">
        <Header />

        {/* main ocupa todo el espacio restante y oculta overflow */}
        <main className="flex-1 overflow-hidden">
          <HeroSection />
        </main>

        <Footer />
      </div>

      <ContactActions />
    </>
  )
}
