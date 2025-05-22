import { useState } from 'react'

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

  const productosFiltrados =
    categoriaSeleccionada === 'Todos'
      ? productos
      : productos.filter((p) => p.categoria === categoriaSeleccionada);

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Modelos Disponibles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {productosFiltrados.map((prod, idx) => (
          <ProductoCardItem key={idx} producto={prod} />
        ))}
      </div>
    </section>
  );
}

function ProductoCardItem({ producto }) {
  const [index, setIndex] = useState(0)

  const handleNext = () => setIndex((prev) => (prev + 1) % producto.imagenes.length)
  const handlePrev = () => setIndex((prev) => (prev - 1 + producto.imagenes.length) % producto.imagenes.length)

  let touchStartX = 0

  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX
    const diff = touchEndX - touchStartX
    if (diff > 50) handlePrev()
    if (diff < -50) handleNext()
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition duration-300 overflow-hidden">
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
        <div className="absolute bottom-2 right-2 text-xs bg-white/70 px-2 py-0.5 rounded">
          {index + 1} / {producto.imagenes.length}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{producto.modelo}</h3>
        <ul className="text-sm text-gray-600 space-y-1">
          <li><strong>Tipo:</strong> {producto.energia}</li>
          <li><strong>Largo:</strong> {producto.largo}</li>
          <li><strong>Capacidad:</strong> {producto.pasajeros}</li>
        </ul>
      </div>
    </div>
  )
}
