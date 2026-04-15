import { useEffect, useMemo, useState } from 'react'
import { Head } from '@inertiajs/react'

import Header from '@/Components/Header'
import Footer from '@/Components/Footer'
import ContactActions from '@/Components/ContactActions'

import CatalogHero from '@/Components/Productos/CatalogHero'
import SeriesIntro from '@/Components/Productos/SeriesIntro'
import VariantDrawer from '@/Components/Productos/VariantDrawer'

import { catalogoSeries } from '@/Data/catalogoData'

export default function Productos() {
  const [activeSeriesId, setActiveSeriesId] = useState(catalogoSeries[0]?.id ?? null)
  const [openVariant, setOpenVariant] = useState(null)

  const activeSeries = useMemo(
    () => catalogoSeries.find((serie) => serie.id === activeSeriesId) ?? null,
    [activeSeriesId]
  )

  useEffect(() => {
    const shouldLock = Boolean(openVariant)
    document.documentElement.style.overflow = shouldLock ? 'hidden' : ''
    document.body.style.overflow = shouldLock ? 'hidden' : ''

    return () => {
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
    }
  }, [openVariant])

  return (
    <>
      <Head title="SGX · Productos" />

      <Header />

      <main className="overflow-x-hidden bg-white">
        <CatalogHero />


        <SeriesIntro serie={activeSeries} />


      </main>

      <VariantDrawer
        item={openVariant}
        onClose={() => setOpenVariant(null)}
      />

      <Footer />
      <ContactActions />
    </>
  )
}
