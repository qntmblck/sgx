import { useState } from 'react'
import ParticlesFondo from '@/Components/ParticlesFondo'

const lineas = [
  {
    titulo: 'Buses Urbanos 12m',
    descripcion: 'Piso bajo, alta capacidad (hasta 90 pasajeros), autonomía superior y chasis monocasco. Perfectos para grandes ciudades.',
    icono: '🚌',
    imagen: '/img/productos/urbanos.jpg'
  },
  {
    titulo: 'Midibuses 8–10m',
    descripcion: 'Soluciones versátiles para minería, industrias y municipios. Rendimiento robusto en rutas medias.',
    icono: '🚐',
    imagen: '/img/productos/midibus.jpg'
  },
  {
    titulo: 'Minibuses 6–7m',
    descripcion: 'Modelos ágiles y compactos. Ideales para transporte local, hotelero o turístico.',
    icono: '🚎',
    imagen: '/img/productos/minibus.jpg'
  }
]

export default function ProductosDestacados() {
  const [flippedIndex, setFlippedIndex] = useState(null)

  const toggleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index)
  }

  return (
    <section id="productos" className="relative overflow-hidden bg-gradient-to-l from-green-200 via-teal-100 to-white text-gray-900">
      {/* Curva superior */}
      <div className="absolute top-0 left-0 w-full overflow-hidden z-0">
        <svg viewBox="0 0 500 80" preserveAspectRatio="none" className="w-full h-20 fill-green-200">
          <path d="M0,80 C150,20 350,20 500,80 L500,0 L0,0 Z" />
        </svg>
      </div>

      {/* Partículas animadas */}
      <div className="absolute top-0 left-0 w-full h-20 z-10 pointer-events-none">
        <ParticlesFondo />
      </div>

      <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-white/80 to-transparent z-20" />

      {/* Contenido */}
      <div className="relative z-30 max-w-6xl mx-auto px-6 py-28 sm:py-32">
        <div className="text-center mb-14">
          <h2 className="text-sm font-semibold uppercase text-lime-600 tracking-wide">Líneas de Productos</h2>
          <p className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight text-[#003b5c]">Gama de Productos ANKAI</p>
          <div className="mt-2 mb-6 border-t-4 w-24 border-[#00d084] rounded-full mx-auto" />
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            ANKAI ofrece soluciones inteligentes y confiables: desde minibuses urbanos hasta plataformas de 12 metros con tecnología de clase mundial.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {lineas.map((prod, idx) => (
            <div
              key={idx}
              className={`flashcard w-full h-64 group perspective ${flippedIndex === idx ? 'flipped' : ''}`}
              onClick={() => toggleFlip(idx)}
              onMouseEnter={() => setFlippedIndex(idx)}
              onMouseLeave={() => setFlippedIndex(null)}
            >
              <div className="flashcard-inner">
                {/* Frente */}
                <div className="flashcard-face bg-white/80 backdrop-blur-lg border border-lime-300 p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">{prod.titulo}</h3>
                    <span className="text-3xl">{prod.icono}</span>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">{prod.descripcion}</p>
                </div>

                {/* Reverso */}
                <div className="flashcard-face flashcard-back">
                  <img src={prod.imagen} alt={prod.titulo} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
