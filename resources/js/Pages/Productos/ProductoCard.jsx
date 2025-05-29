import { useState } from 'react'

export default function ProductoCard({ productos = [] }) {
  return (
    <section className="relative z-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8 pt-10 pb-16">
      {/* Difuminado superior */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />

      {productos.map((prod, idx) => (
        <ProductoCardItem key={idx} producto={prod} />
      ))}
    </section>
  )
}

function ProductoCardItem({ producto }) {
  const [index, setIndex] = useState(0)

  const handleNext = () => {
    setIndex(prev => (prev + 1) % producto.imagenes.length)
  }

  const handlePrev = () => {
    setIndex(prev => (prev - 1 + producto.imagenes.length) % producto.imagenes.length)
  }

  let touchStartX = 0
  const handleTouchStart = e => { touchStartX = e.touches[0].clientX }
  const handleTouchEnd = e => {
    const diff = e.changedTouches[0].clientX - touchStartX
    if (diff > 50) handlePrev()
    if (diff < -50) handleNext()
  }

  return (
    <div className="bg-[#c7372f] border border-red-700 rounded-lg shadow-md hover:shadow-lg transition duration-300 overflow-hidden text-white text-sm">
      <div
        className="relative w-full h-52 sm:h-64 cursor-pointer"
        onClick={handleNext}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={producto.imagenes[index]}
          alt={`${producto.modelo} ${index + 1}`}
          className="w-full h-full object-cover object-center transition duration-500"
          loading="lazy"
        />
        <div className="absolute bottom-2 right-2 text-xs bg-white/80 text-gray-800 px-2 py-0.5 rounded">
          {index + 1} / {producto.imagenes.length}
        </div>
      </div>
      <div className="p-3">
        <h3 className="text-base font-bold mb-1">{producto.modelo}</h3>
        <ul className="space-y-0.5">
          <li><strong>Tipo:</strong> {producto.energia}</li>
          <li><strong>Largo:</strong> {producto.largo} m</li>
          <li><strong>Capacidad:</strong> {producto.pasajeros}</li>
        </ul>
      </div>
    </div>
  )
}
