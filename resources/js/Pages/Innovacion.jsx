import { Head } from '@inertiajs/react'
import Header from '@/Components/Header'
import PresenciaGlobal from '@/Components/PresenciaGlobal'
import Footer from '@/Components/Footer'

export default function Innovacion() {
  return (
    <>
      <Head title="SGX · Innovación" />
      <Header />
      <main className="pt-24">
        <PresenciaGlobal />
      </main>
      <Footer />
    </>
  )
}
