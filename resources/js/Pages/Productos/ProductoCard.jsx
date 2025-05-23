import { useState } from 'react'
import ParticlesFondo from '@/Components/ParticlesFondo'

export default function ProductoCard({ categoriaSeleccionada }) {
  const productos = [/* ... productos ... */] // igual que antes

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
      {/* Fondo expandido sin bordes redondeados */}
      <div className="absolute inset-0 z-0 px-0 sm:px-8 md:px-16">
        <div className="w-full h-full shadow-2xl ring-1 ring-inset ring-white/20 backdrop-blur-md bg-gradient-to-br from-white/60 via-lime-100/40 to-white/20" />
      </div>

      <div className="absolute top-0 left-0 w-full h-24 z-10 pointer-events-none">
        <ParticlesFondo />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-10 py-10 z-20">
        <div className="bg-[#001d2e]/70 backdrop-blur-md rounded-xl p-6 mb-10 shadow-md">
          <div className="flex justify-end gap-2 mb-4 flex-wrap">
            {['Eléctrico', 'Diésel Euro VI'].map((tipo) => (
              <button
                key={tipo}
                onClick={() => toggleFiltro(tipo)}
                className={`px-4 py-2 rounded-full border text-sm font-semibold transition ${
                  filtroEnergia.includes(tipo)
                    ? tipo === 'Eléctrico'
                      ? 'bg-yellow-300 text-[#003b5c]'
                      : 'bg-[#003b5c] text-white'
                    : 'bg-white text-gray-800 hover:bg-gray-100'
                }`}
              >
                {tipo}
              </button>
            ))}
          </div>

          <div className="flex justify-center flex-wrap gap-2">
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
        </div>

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
