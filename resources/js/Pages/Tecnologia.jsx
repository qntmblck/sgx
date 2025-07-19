import { Head } from '@inertiajs/react'
import Header from '@/Components/Header'
import Sobre from '@/Components/Sobre'
import Impacto from '@/Components/Impacto'
import Footer from '@/Components/Footer'

export default function Tecnologia() {
  return (
    <>
      <Head title="SGX · Tecnología" />
      <Header />
      <main className="pt-24">
        <Sobre />
        <Impacto />
      </main>
      <Footer />
    </>
  )
}
