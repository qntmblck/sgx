import { useState, useEffect, useRef } from 'react'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'
import ProductoCard from './Productos/ProductoCard'
import BeneficiosTecnologicos from './Productos/BeneficiosTecnologicos'
import ContactActions from '@/Components/ContactActions'


export default function Productos() {
  const productos = [
    { modelo: "G6 Eléctrico", categoria: "G6 Eléctrico", energia: "Eléctrico", largo: 6.5, pasajeros: "13+1", imagenes: [...Array(5)].map((_, i) => `/img/buses/g6-electric-${i + 1}.jpg`) },
    { modelo: "G6 Diésel Euro VI", categoria: "G6 Diésel Euro VI", energia: "Diésel Euro VI", largo: 6.6, pasajeros: "23", imagenes: [...Array(5)].map((_, i) => `/img/buses/g6-diesel-${i + 1}.jpg`) },
    { modelo: "G9 Eléctrico 8.5m", categoria: "G9 Eléctrico", energia: "Eléctrico", largo: 8.5, pasajeros: "15–30", imagenes: [...Array(5)].map((_, i) => `/img/buses/g9-electric-85-${i + 1}.jpg`) },
    { modelo: "G9 Eléctrico 10.5m", categoria: "G9 Eléctrico", energia: "Eléctrico", largo: 10.5, pasajeros: "19–39", imagenes: [...Array(5)].map((_, i) => `/img/buses/g9-electric-85-${i + 1}.jpg`) },
    { modelo: "G9 Eléctrico 12.0m", categoria: "G9 Eléctrico", energia: "Eléctrico", largo: 12.0, pasajeros: "34–38", imagenes: [...Array(5)].map((_, i) => `/img/buses/g9-electric-85-${i + 1}.jpg`) },
    { modelo: "G9 Diésel Euro VI 10.5m", categoria: "G9 Diésel Euro VI", energia: "Diésel Euro VI", largo: 10.5, pasajeros: "N/D", imagenes: [...Array(5)].map((_, i) => `/img/buses/g9-electric-85-${i + 1}.jpg`) },
    { modelo: "G9 Diésel Euro VI 12.0m", categoria: "G9 Diésel Euro VI", energia: "Diésel Euro VI", largo: 12.0, pasajeros: "N/D", imagenes: [...Array(5)].map((_, i) => `/img/buses/g9-electric-85-${i + 1}.jpg`) },
    { modelo: "A9 Eléctrico 8.2m", categoria: "A9 Eléctrico", energia: "Eléctrico", largo: 8.2, pasajeros: "29", imagenes: [...Array(5)].map((_, i) => `/img/buses/a9-electric-82-${i + 1}.jpg`) },
    { modelo: "A9 Eléctrico 11.3m", categoria: "A9 Eléctrico", energia: "Eléctrico", largo: 11.3, pasajeros: "N/D", imagenes: [...Array(5)].map((_, i) => `/img/buses/a9-electric-82-${i + 1}.jpg`) },
    { modelo: "K7 Eléctrico 7.1m", categoria: "K7 Eléctrico", energia: "Eléctrico", largo: 7.1, pasajeros: "N/D", imagenes: [...Array(5)].map((_, i) => `/img/buses/a9-electric-82-${i + 1}.jpg`) }
  ]

  const [energia, setEnergia] = useState(['Eléctrico', 'Diésel Euro VI'])
  const [modelos, setModelos] = useState([])
  const [segmento, setSegmento] = useState([])
  const [openMenu, setOpenMenu] = useState(null)
  const menuRef = useRef(null)

  const modelosDisponibles = [...new Set(productos.map(p => p.categoria))]
  const segmentoRangos = {
    '6–7m': { min: 6, max: 7.9 },
    '8–10m': { min: 8, max: 10 },
    '12m': { min: 10.1, max: 12.5 }
  }
  const segmentos = Object.keys(segmentoRangos)

  const toggle = (item, setFn, list) => {
    setFn(list.includes(item) ? list.filter(i => i !== item) : [...list, item])
  }

  const productosFiltrados = productos.filter(p =>
    energia.includes(p.energia) &&
    (modelos.length === 0 || modelos.includes(p.categoria)) &&
    (segmento.length === 0 || segmento.some(nombre => {
      const r = segmentoRangos[nombre]
      return p.largo >= r.min && p.largo <= r.max
    }))
  )

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const Filtros = (
    <div
      ref={menuRef}
      className="bg-[#001d2e]/90 backdrop-blur-md rounded-full px-6 py-4 shadow-xl flex flex-wrap justify-center gap-4 text-white text-sm font-medium"
    >
      {/* Tipo de Energía */}
      <div className="relative">
        <button className="cursor-pointer hover:text-lime-300" onClick={() => setOpenMenu(openMenu === 'energia' ? null : 'energia')}>
          Tipo de Energía
        </button>
        {openMenu === 'energia' && (
          <div className="absolute top-full left-0 mt-2 bg-white text-gray-800 rounded shadow-lg z-[9999] p-3 min-w-[160px]">
            {['Eléctrico', 'Diésel Euro VI'].map(tipo => (
              <button
                key={tipo}
                onClick={() => toggle(tipo, setEnergia, energia)}
                className={`block px-4 py-1 rounded-full text-sm mb-1 ${
                  energia.includes(tipo) ? 'bg-yellow-300 text-[#003b5c]' : 'hover:bg-gray-200'
                }`}
              >
                {tipo}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Modelos */}
      <div className="relative">
        <button className="cursor-pointer hover:text-lime-300" onClick={() => setOpenMenu(openMenu === 'modelos' ? null : 'modelos')}>
          Modelos
        </button>
        {openMenu === 'modelos' && (
          <div className="absolute top-full left-0 mt-2 bg-white text-gray-800 rounded shadow-lg z-[9999] p-3 max-w-xs">
            {modelosDisponibles.map(cat => (
              <button
                key={cat}
                onClick={() => toggle(cat, setModelos, modelos)}
                className={`block px-4 py-1 rounded-full text-sm mb-1 ${
                  modelos.includes(cat) ? 'bg-[#c7372f] text-white' : 'hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Segmento */}
      <div className="relative">
        <button className="cursor-pointer hover:text-lime-300" onClick={() => setOpenMenu(openMenu === 'segmento' ? null : 'segmento')}>
          Segmento
        </button>
        {openMenu === 'segmento' && (
          <div className="absolute top-full left-0 mt-2 bg-white text-gray-800 rounded shadow-lg z-[9999] p-3 min-w-[160px]">
            {segmentos.map(nombre => (
              <button
                key={nombre}
                onClick={() => toggle(nombre, setSegmento, segmento)}
                className={`block px-4 py-1 rounded-full text-sm mb-1 ${
                  segmento.includes(nombre) ? 'bg-[#00d084] text-white' : 'hover:bg-gray-200'
                }`}
              >
                {nombre}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )

  return (
  <>
    <Header />

    {/* Hero con beneficios */}
    <div className="relative">
      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/img/productos.png')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-24 text-center">
         {/* Título compuesto estilo ANKAI */}
<h1 className="text-3xl sm:text-5xl font-extrabold leading-tight drop-shadow text-white mb-4 text-center">
  Portafolio de Buses
</h1>

<div className="flex items-center justify-center flex-wrap gap-3 text-3xl sm:text-5xl font-extrabold text-white drop-shadow mb-6">
  <span className="whitespace-nowrap">de</span>
  <img src="/img/ankai.png" alt="ANKAI" className="h-10 sm:h-10 object-contain" />
  <span className="whitespace-nowrap">en Chile</span>
</div>

          <p className="text-white text-lg sm:text-xl max-w-3xl mx-auto mb-6">
            Modelos eléctricos, urbanos, interurbanos y de alta capacidad adaptados a las necesidades del transporte moderno.
          </p>
          <BeneficiosTecnologicos />
        </div>

        {/* Difuminado inferior invertido */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none" />
      </div>

      {/* Filtro flotante centrado y fijo en una fila */}
<div className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-screen px-4">
  <div className="flex justify-center">
    <div className="inline-flex min-w-max gap-3 overflow-x-auto no-scrollbar">
      {Filtros}
    </div>
  </div>
</div>



    </div>

    {/* Sección productos */}
    <section
      className="relative z-0 bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: "url('/img/catalogo.png')" }}
    >
      <div className="absolute inset-0 bg-black/40 z-0" />
      <ProductoCard productos={productosFiltrados} />
    </section>

    <Footer />
    <ContactActions />
  </>
)

}
