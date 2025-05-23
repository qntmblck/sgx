import { useState } from 'react'
import ParticlesFondo from '@/Components/ParticlesFondo'


export default function ProductoCard({ categoriaSeleccionada }) {
  const productos = [
    {
      modelo: 'G6 Eléctrico',
      categoria: 'G6 Eléctrico',
      energia: 'Eléctrico',
      largo: '6.5 m',
      pasajeros: '13+1',
      imagenes: [
        '/img/buses/g6-electric-1.jpg',
        '/img/buses/g6-electric-2.jpg',
        '/img/buses/g6-electric-3.jpg',
        '/img/buses/g6-electric-4.jpg',
        '/img/buses/g6-electric-5.jpg',
      ],
    },
    {
      modelo: 'G6 Diésel Euro VI',
      categoria: 'G6 Diésel Euro VI',
      energia: 'Diésel Euro VI',
      largo: '6.6 m',
      pasajeros: '23',
      imagenes: [
        '/img/buses/g6-diesel-1.jpg',
        '/img/buses/g6-diesel-2.jpg',
        '/img/buses/g6-diesel-3.jpg',
        '/img/buses/g6-diesel-4.jpg',
        '/img/buses/g6-diesel-5.jpg',
      ],
    },
    {
      modelo: 'G9 Eléctrico 8.5m',
      categoria: 'G9 Eléctrico',
      energia: 'Eléctrico',
      largo: '8.5 m',
      pasajeros: '15–30',
      imagenes: [
        '/img/buses/g9-electric-85-1.jpg',
        '/img/buses/g9-electric-85-2.jpg',
        '/img/buses/g9-electric-85-3.jpg',
        '/img/buses/g9-electric-85-4.jpg',
        '/img/buses/g9-electric-85-5.jpg',
        '/img/buses/g9-electric-85-6.jpg',
      ],
    },
    {
      modelo: 'G9 Eléctrico 10.5m',
      categoria: 'G9 Eléctrico',
      energia: 'Eléctrico',
      largo: '10.5 m',
      pasajeros: '19–39',
      imagenes: [
        '/img/buses/g9-electric-85-1.jpg',
        '/img/buses/g9-electric-85-2.jpg',
        '/img/buses/g9-electric-85-3.jpg',
        '/img/buses/g9-electric-85-4.jpg',
        '/img/buses/g9-electric-85-5.jpg',
        '/img/buses/g9-electric-85-6.jpg',
      ],
    },
    {
      modelo: 'G9 Eléctrico 12.0m',
      categoria: 'G9 Eléctrico',
      energia: 'Eléctrico',
      largo: '12.0 m',
      pasajeros: '34–38',
      imagenes: [
        '/img/buses/g9-electric-85-1.jpg',
        '/img/buses/g9-electric-85-2.jpg',
        '/img/buses/g9-electric-85-3.jpg',
        '/img/buses/g9-electric-85-4.jpg',
        '/img/buses/g9-electric-85-5.jpg',
        '/img/buses/g9-electric-85-6.jpg',
      ],
    },
    {
      modelo: 'G9 Diésel Euro VI 10.5m',
      categoria: 'G9 Diésel Euro VI',
      energia: 'Diésel Euro VI',
      largo: '10.5 m',
      pasajeros: 'N/D',
      imagenes: [
        '/img/buses/g9-electric-85-1.jpg',
        '/img/buses/g9-electric-85-2.jpg',
        '/img/buses/g9-electric-85-3.jpg',
        '/img/buses/g9-electric-85-4.jpg',
        '/img/buses/g9-electric-85-5.jpg',
        '/img/buses/g9-electric-85-6.jpg',
      ],
    },
    {
      modelo: 'G9 Diésel Euro VI 12.0m',
      categoria: 'G9 Diésel Euro VI',
      energia: 'Diésel Euro VI',
      largo: '12.0 m',
      pasajeros: 'N/D',
      imagenes: [
        '/img/buses/g9-electric-85-1.jpg',
        '/img/buses/g9-electric-85-2.jpg',
        '/img/buses/g9-electric-85-3.jpg',
        '/img/buses/g9-electric-85-4.jpg',
        '/img/buses/g9-electric-85-5.jpg',
        '/img/buses/g9-electric-85-6.jpg',
      ],
    },
    {
      modelo: 'A9 Eléctrico 8.2m',
      categoria: 'A9 Eléctrico',
      energia: 'Eléctrico',
      largo: '8.2 m',
      pasajeros: '29',
      imagenes: [
        '/img/buses/a9-electric-82-1.jpg',
        '/img/buses/a9-electric-82-2.jpg',
        '/img/buses/a9-electric-82-3.jpg',
        '/img/buses/a9-electric-82-4.jpg',
        '/img/buses/a9-electric-82-5.jpg',
      ],
    },
    {
      modelo: 'A9 Eléctrico 11.3m',
      categoria: 'A9 Eléctrico',
      energia: 'Eléctrico',
      largo: '11.3 m',
      pasajeros: 'N/D',
      imagenes: [
        '/img/buses/a9-electric-82-1.jpg',
        '/img/buses/a9-electric-82-2.jpg',
        '/img/buses/a9-electric-82-3.jpg',
        '/img/buses/a9-electric-82-4.jpg',
        '/img/buses/a9-electric-82-5.jpg',
      ],
    },
    {
      modelo: 'K7 Eléctrico 7.1m',
      categoria: 'K7 Eléctrico',
      energia: 'Eléctrico',
      largo: '7.1 m',
      pasajeros: 'N/D',
      imagenes: [
        '/img/buses/k7-electric-1.jpg',
        '/img/buses/k7-electric-2.jpg',
        '/img/buses/k7-electric-3.jpg',
        '/img/buses/k7-electric-4.jpg',
        '/img/buses/k7-electric-5.jpg',
      ],
    },
  ];

  const [filtroEnergia, setFiltroEnergia] = useState(['Eléctrico', 'Diésel Euro VI'])
  const [categoriasSeleccionadas, setCategoriasSeleccionadas] = useState([])

  const toggleFiltro = (tipo) => {
    const nuevos = filtroEnergia.includes(tipo)
      ? filtroEnergia.filter((t) => t !== tipo)
      : [...filtroEnergia, tipo]
    setFiltroEnergia(nuevos)
    setCategoriasSeleccionadas([])
  }

  const toggleCategoria = (cat) => {
    setCategoriasSeleccionadas((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    )
  }

  const categoriasDisponibles = [
    ...new Set(productos.filter(p => filtroEnergia.includes(p.energia)).map(p => p.categoria))
  ]

  const productosFiltrados = productos
    .filter(p =>
      filtroEnergia.includes(p.energia) &&
      (categoriasSeleccionadas.length === 0 || categoriasSeleccionadas.includes(p.categoria))
    )
    .sort((a, b) => parseFloat(a.largo) - parseFloat(b.largo))

  return (
    <section className="relative py-16 sm:py-24">
      {/* Fondo glassmorphism expandido */}
      <div className="absolute inset-0 z-0 px-2 sm:px-6 md:px-12">
        <div className="w-full h-full rounded-[48px] shadow-2xl ring-1 ring-inset ring-white/20 backdrop-blur-md bg-gradient-to-br from-white/60 via-lime-100/40 to-white/20" />
      </div>

      {/* Partículas */}
      <div className="absolute top-0 left-0 w-full h-24 z-10 pointer-events-none">
        <ParticlesFondo />
      </div>

      {/* Contenido */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 py-10 z-20">
        {/* Título + filtros */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Modelos Disponibles</h2>
          <div className="flex gap-2">
            {['Eléctrico', 'Diésel Euro VI'].map((tipo) => (
              <button
                key={tipo}
                onClick={() => toggleFiltro(tipo)}
                className={`px-4 py-2 rounded-full border text-sm font-medium transition ${
                  filtroEnergia.includes(tipo)
                    ? tipo === 'Eléctrico'
                      ? 'bg-yellow-300 text-[#003b5c] font-bold'
                      : 'bg-[#003b5c] text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {tipo}
              </button>
            ))}
          </div>
        </div>

        {/* Categorías */}
        <div className="flex justify-center flex-wrap gap-2 mb-10">
          {categoriasDisponibles.map((cat) => (
            <button
              key={cat}
              onClick={() => toggleCategoria(cat)}
              className={`px-4 py-1 rounded-full border text-sm font-medium transition ${
                categoriasSeleccionadas.includes(cat)
                  ? 'bg-[#c7372f] text-white border-[#c7372f]'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-[#c7372f]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {productosFiltrados.map((prod, idx) => (
            <ProductoCardItem key={idx} producto={prod} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductoCardItem({ producto }) {
  const [index, setIndex] = useState(0)

  const handleNext = () => setIndex((prev) => (prev + 1) % producto.imagenes.length)
  const handlePrev = () => setIndex((prev) => (prev - 1 + producto.imagenes.length) % producto.imagenes.length)

  let touchStartX = 0

  const handleTouchStart = (e) => { touchStartX = e.touches[0].clientX }
  const handleTouchEnd = (e) => {
    const diff = e.changedTouches[0].clientX - touchStartX
    if (diff > 50) handlePrev()
    if (diff < -50) handleNext()
  }

  return (
    <div className="bg-[#c7372f] border border-red-700 rounded-lg shadow-md hover:shadow-lg transition duration-300 overflow-hidden text-white">
      <div
        className="relative w-full h-72 overflow-hidden"
        onClick={handleNext}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={producto.imagenes[index]}
          alt={`${producto.modelo} ${index + 1}`}
          className="w-full h-full object-cover transition duration-500"
        />
        <div className="absolute bottom-2 right-2 text-xs bg-white/80 text-gray-800 px-2 py-0.5 rounded">
          {index + 1} / {producto.imagenes.length}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{producto.modelo}</h3>
        <ul className="text-sm space-y-1">
          <li><strong>Tipo:</strong> {producto.energia}</li>
          <li><strong>Largo:</strong> {producto.largo} m</li>
          <li><strong>Capacidad:</strong> {producto.pasajeros}</li>
        </ul>
      </div>
    </div>
  )
}
