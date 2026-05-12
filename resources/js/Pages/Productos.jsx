import { useEffect, useMemo, useState } from 'react'

import SEO from '@/Components/SEO'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'
import ContactActions from '@/Components/ContactActions'

import CatalogHero from '@/Components/Productos/CatalogHero'
import SeriesIntro from '@/Components/Productos/SeriesIntro'
import VariantDrawer from '@/Components/Productos/VariantDrawer'

import { catalogoSeries } from '@/Data/catalogoData'

const siteUrl = 'https://sgx.cl'
const productCatalogSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${siteUrl}/productos#webpage`,
  url: `${siteUrl}/productos`,
  name: 'Catálogo, venta y cotización de buses eléctricos ANKAI | SGX Chile',
  description:
    'Catálogo SGX Chile de buses ANKAI eléctricos y de alto estándar para transporte público, empresas, turismo, minería y operaciones industriales.',
  inLanguage: 'es-CL',
  mainEntity: {
    '@type': 'OfferCatalog',
    name: 'Catálogo de buses ANKAI SGX Chile',
    itemListElement: catalogoSeries.map((serie) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Product',
        name: `${serie.nombre} ANKAI`,
        brand: {
          '@type': 'Brand',
          name: 'ANKAI',
        },
        category: 'Bus eléctrico',
        image: `${siteUrl}${serie.imagenHero?.startsWith('/img/catalogo') ? '/img/buses.webp' : (serie.imagenHero || '/img/buses.webp')}`,
        description: serie.descripcion,
      },
      seller: {
        '@type': 'Organization',
        name: 'SGX Chile',
        url: siteUrl,
      },
      url: `${siteUrl}/productos`,
    })),
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Inicio',
      item: siteUrl,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Productos',
      item: `${siteUrl}/productos`,
    },
  ],
}

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
      <SEO
        title="Venta y cotización de buses eléctricos ANKAI | SGX Chile"
        description="Conoce y cotiza buses ANKAI en Chile: Serie E9 urbana eléctrica, Serie A6 interurbana/corporativa y Serie K7 compacta para operaciones especiales."
        canonical="/productos"
        image="/img/productos.webp"
        jsonLd={[productCatalogSchema, breadcrumbSchema]}
      />

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
