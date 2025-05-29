import { useState, useEffect, useRef } from 'react'
import ParticlesFondo from '@/Components/ParticlesFondo'

const lineas = [
  {
    titulo: 'Buses Urbanos 12m',
    descripcion: 'Piso bajo, alta capacidad (hasta 90 pasajeros), autonomía superior y chasis monocasco. Perfectos para grandes ciudades.',
    imagen: '/img/productos/urbanos.jpg'
  },
  {
    titulo: 'Midibuses 8–10m',
    descripcion: 'Soluciones versátiles para minería, industrias y municipios. Rendimiento robusto en rutas medias.',
    imagen: '/img/productos/midibus.jpg'
  },
  {
    titulo: 'Minibuses 6–7m',
    descripcion: 'Modelos ágiles y compactos. Ideales para transporte local, hotelero o turístico.',
    imagen: '/img/productos/minibus.jpg'
  }
]

export default function ProductosDestacados() {
  const [flippedIndex, setFlippedIndex] = useState(null)
  const [isMobile, setIsMobile] = useState(false)
  const scrollRef = useRef(null)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const scroll = (direction) => {
    const container = scrollRef.current
    if (container) {
      const scrollAmount = container.offsetWidth
      container.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' })
    }
  }

  const toggleFlip = (index) => {
    if (isMobile) {
      setFlippedIndex(flippedIndex === index ? null : index)
    }
  }

  return (
    <section id="productos" className="relative overflow-hidden bg-gradient-to-l from-green-200 via-teal-100 to-white text-gray-900">
      <style>{`
        .flashcard { perspective: 1000px; }
        .flashcard-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 0.6s;
        }
        .flashcard:hover .flashcard-inner {
          transform: rotateY(180deg);
        }
        .flipped .flashcard-inner {
          transform: rotateY(180deg);
        }
        .flashcard-face {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 0.75rem;
        }
        .flashcard-back {
          transform: rotateY(180deg);
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scroll-snap-x {
          scroll-snap-type: x mandatory;
        }
        .scroll-snap-align-center {
          scroll-snap-align: center;
        }
      `}</style>

      {/* Flechas navegación móvil */}
      {isMobile && (
        <>
          <button onClick={() => scroll('left')} className="absolute left-0 top-1/2 z-40 transform -translate-y-1/2 p-2 bg-white/70 rounded-full shadow-md">
            ◀
          </button>
          <button onClick={() => scroll('right')} className="absolute right-0 top-1/2 z-40 transform -translate-y-1/2 p-2 bg-white/70 rounded-full shadow-md">
            ▶
          </button>
        </>
      )}

      <div className="relative z-30 max-w-6xl mx-auto px-4 py-16 sm:px-6 sm:py-28">
        {/* Título móvil */}
        <div className="text-center mb-10 block lg:hidden">
          <h2 className="text-sm font-semibold uppercase text-lime-600 tracking-wide">Líneas de Productos</h2>
          <h3 className="mt-2 text-2xl font-bold text-[#003b5c]">Gama de productos</h3>
          <img src="/img/ankai.png" className="mx-auto h-8 mt-2" />
        </div>

        <div ref={scrollRef} className="flex overflow-x-auto scrollbar-hide scroll-snap-x px-2 sm:px-4 gap-6 sm:gap-4">
  {lineas.map((prod, idx) => (
    <div
      key={idx}
      className={`flashcard min-w-[400px] max-w-[460px] w-[133%] sm:w-[300px] md:w-[360px] h-[320px] flex-shrink-0 rounded-xl scroll-snap-align-center mx-auto ${
        isMobile && flippedIndex === idx ? 'flipped' : ''
      }`}
      onClick={() => toggleFlip(idx)}
      onTouchStart={() => toggleFlip(idx)}
    >
      <div className="flashcard-inner h-full">
        <div className="flashcard-face bg-white/90 backdrop-blur-lg border border-lime-300 shadow-lg px-4 py-6 flex flex-col justify-center h-full">
          <div className="space-y-2 max-w-[90%] mx-auto">
            <h3 className="text-lg font-bold text-gray-900">{prod.titulo}</h3>
            <p className="text-sm text-gray-700 leading-snug">{prod.descripcion}</p>
          </div>
        </div>
        <div className="flashcard-face flashcard-back">
          <img src={prod.imagen} alt={prod.titulo} className="w-full h-full object-cover rounded-xl" />
        </div>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  )
}
