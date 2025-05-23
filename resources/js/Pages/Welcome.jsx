import { useEffect } from 'react'
import { Head } from '@inertiajs/react'

import Header from '@/Components/Header'
import HeroSection from '@/Components/HeroSection'
import Sobre from '@/Components/Sobre'
import Impacto from '@/Components/Impacto'
import ProductosDestacados from '@/Components/ProductosDestacados'
import CTAContacto from '@/Components/CTAContacto'
import Footer from '@/Components/Footer'
import ContactActions from '@/Components/ContactActions'

export default function Welcome() {
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const id = hash.replace('#', '')
      const scrollToElement = () => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }

      // Reintenta si el elemento no está listo inmediatamente
      setTimeout(scrollToElement, 100)
      setTimeout(scrollToElement, 300)
      setTimeout(scrollToElement, 600)
    }
  }, [])

  return (
    <>
      <Head title="SGX · Representantes Oficiales de ANKAI en Chile" />

      <div className="bg-white text-gray-900 scroll-smooth">
        <Header />

        <main>
          {/* Hero + Carrusel SGX */}
          <section id="inicio">
            <HeroSection />
          </section>

          {/* Secciones scrollables por hash */}
          <section id="sobre">
            <Sobre />
          </section>

          <section id="impacto">
            <Impacto />
          </section>

          {/* beneficios debe tener su ID también */}
          <section id="beneficios">
            <ProductosDestacados />
          </section>

          <CTAContacto />
        </main>

        <Footer />
        <ContactActions />
      </div>
    </>
  )
}
