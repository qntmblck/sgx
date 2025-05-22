import { useEffect } from 'react'
import { Head } from '@inertiajs/react'
import Header from '@/Components/Header'
import HeroSection from '@/Components/HeroSection'
import PresenciaGlobal from '@/Components/PresenciaGlobal'
import Sobre from '@/Components/Sobre'
import Impacto from '@/Components/Impacto'
import ProductosDestacados from '@/Components/ProductosDestacados'
import CTAContacto from '@/Components/CTAContacto'
import Footer from '@/Components/Footer'

export default function Welcome() {
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const el = document.getElementById(hash.replace('#', ''))
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  }, [])

  return (
    <>
      <Head title="SGX · Representantes Oficiales de ANKAI en Chile" />
      <div className="bg-white text-gray-900 scroll-smooth">
        <Header />
        <main>
          <section id="inicio"><HeroSection /></section>
          <PresenciaGlobal />
          <section id="sobre"><Sobre /></section>
          <section id="impacto"><Impacto /></section>
          <ProductosDestacados />
          <CTAContacto />
        </main>
        <section id="footer">
  <Footer />
</section>
      </div>
    </>
  )
}
