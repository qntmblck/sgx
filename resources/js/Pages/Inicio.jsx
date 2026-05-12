import SEO from '@/Components/SEO'
import Header from '@/Components/Header'
import HeroSection from '@/Components/HeroSection'
import Footer from '@/Components/Footer'
import ContactActions from '@/Components/ContactActions'

const siteUrl = 'https://sgx.cl'
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteUrl}/#organization`,
  name: 'SGX Chile',
  legalName: 'SGX Chile SpA',
  url: siteUrl,
  logo: `${siteUrl}/img/sgx.webp`,
  image: `${siteUrl}/img/buses.webp`,
  email: 'contacto@sgx.cl',
  telephone: '+56962365714',
  areaServed: {
    '@type': 'Country',
    name: 'Chile',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+56962365714',
    contactType: 'sales',
    email: 'contacto@sgx.cl',
    areaServed: 'CL',
    availableLanguage: 'es',
  },
  description:
    'SGX Chile representa soluciones Ankai para venta de buses eléctricos, buses urbanos, buses interurbanos y proyectos de electromovilidad.',
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  name: 'SGX Chile',
  url: siteUrl,
  publisher: {
    '@id': `${siteUrl}/#organization`,
  },
  inLanguage: 'es-CL',
}

const homeSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${siteUrl}/#webpage`,
  url: siteUrl,
  name: 'Elevando el estándar de la movilidad en Chile con ANKAI | SGX Chile',
  description:
    'SGX Chile introduce buses Ankai de alto estándar para transporte público, empresas, municipios, turismo, minería y operaciones industriales.',
  isPartOf: {
    '@id': `${siteUrl}/#website`,
  },
  about: {
    '@id': `${siteUrl}/#organization`,
  },
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: `${siteUrl}/img/buses.webp`,
  },
  inLanguage: 'es-CL',
}

export default function Inicio() {
  return (
    <>
      <SEO
        title="Buses eléctricos ANKAI para transporte en Chile | SGX"
        description="SGX Chile representa buses Ankai eléctricos y de alto estándar para transporte público, empresas, municipios, turismo, minería y renovación de flota."
        canonical="/"
        image="/img/buses.webp"
        jsonLd={[organizationSchema, websiteSchema, homeSchema]}
      />

      <div className="min-h-screen flex flex-col overflow-x-hidden">
        <Header />

        <main className="flex-1 pt-20 flex">
          <HeroSection />
        </main>

        <Footer />
      </div>

      <ContactActions />
    </>
  )
}
