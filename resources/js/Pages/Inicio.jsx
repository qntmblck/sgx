import { Head } from '@inertiajs/react'
import Header from '@/Components/Header'
import HeroSection from '@/Components/HeroSection'
import Footer from '@/Components/Footer'
import ContactActions from '@/Components/ContactActions'

export default function Inicio() {
  return (
    <>
      <Head title="SGX · Inicio" />
      <Header />
      <main>
        <HeroSection />
      </main>
      <Footer />
      <ContactActions />
    </>
  )
}

