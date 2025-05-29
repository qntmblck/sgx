import Header from '@/Components/Header'
import Footer from '@/Components/Footer'
import HeroTecnologia from './NewTec/HeroTecnologia'
import ResumenTecnologia from './NewTec/ResumenTecnologia'
import ListaBeneficios from './NewTec/ListaBeneficios'
import CTAContacto from './NewTec/CTAContacto'

export default function NewTec() {
  return (
    <>
      <Header />

      {/* Hero con fondo y título */}
      <HeroTecnologia />

      {/* Introducción general */}
      <ResumenTecnologia />

      {/* Lista detallada de los 21 beneficios */}
      <ListaBeneficios />

      {/* Llamado a la acción final */}
      <CTAContacto />

      <Footer />
    </>
  )
}
