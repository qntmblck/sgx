import { useEffect, useMemo, useState } from 'react'
import ImgSafe from '@/Components/UI/ImgSafe'

const E9_ALBUM = [
  '/img/productos/E9_1.png',
  '/img/productos/E9_2.png',
  '/img/productos/E9_3.png',
  '/img/productos/E9_4.png',
  '/img/productos/E9_5.png',
  '/img/productos/E9_6.png',
  '/img/productos/E9_7.png',
  '/img/productos/E9_8.png',
  '/img/productos/E9_9.png',
  '/img/productos/E9_10.png',
  '/img/productos/E9_11.png',
  '/img/productos/E9_DD_1.png',
  '/img/productos/E9_DD_2.png',
]

const E9_SPECS = [
  {
    id: 'e9-85',
    label: '8.5 m · 8.7 m · 8.9 m',
    title: 'Serie E9 Tipología 8.5 m – 8.7 m – 8.9 m – Estándar RED',
    items: [
      ['Modelo', 'HFF6855G03EV12'],
      ['Dimensiones', '8540 × 2550 × 3200 (extendible a 8.7 y 8.9 m de largo)'],
      ['Batería', 'CATL 229.05 kWh – 1 puerto CCS2'],
      ['Motor', 'Ankai Permanent Magnet Synchronous Motor | Potencia nominal: 120 kW | Potencia máxima: 245 kW'],
      ['Frenos', 'WABCO'],
      ['Ejes', 'Dongfeng DANA'],
      ['Neumáticos', '255/70 R22.5 | Llantas de acero inoxidable'],
      ['Pintura', 'Estándar RED – Manual de Normas Gráficas'],
      ['Parabrisas', 'Vidrio laminado con parasol de dos piezas'],
      ['Peso en vacío', '9000 / 9300 kg'],
      ['Peso máximo', '14000 kg'],
      ['Autonomía', '>250 km'],
      ['Suspensión', 'Neumática, con sistema ECAS (suspensión lateral)'],
      [
        'Sistemas de Seguridad y Asistencia al Conductor',
        'AEBS (ABS + EBS integrado) – ESC: Control electrónico de estabilidad – EPB: Freno de estacionamiento electrónico – LDW: Advertencia de salida de carril – ACW: Advertencia de colisión – DSW: Advertencia de fatiga del conductor. Opcional: Sistema SSA - Asistente de Inicio en Pendientes',
      ],
      [
        'Adicionales',
        'Aire acondicionado, RACK tecnológico (Resolución Exenta 4772/2023 MTT), cabina cerrada para el conductor, Wi‑Fi, contador de pasajeros, puertos USB, monitor de retroceso de 7’’, monitor de información interior de 21’’, rampa de acceso, soporte para silla de ruedas, 2 extintores de 4 kg, 1 chaleco reflectante, 1 triángulo reflectante, 2 cuñas de estacionamiento',
      ],
    ],
  },
  {
    id: 'e9-105',
    label: '10.5 m',
    title: 'Serie E9 Tipología 10.5 m – Estándar RED',
    items: [
      ['Modelo', 'HFF6100E9EV22'],
      ['Dimensiones', '10450 × 2550 × 3250'],
      ['Batería', 'CATL 300.81 kWh – 1 puerto CCS2'],
      ['Motor', 'Ankai Permanent Magnet Synchronous Motor | Potencia nominal: 120 kW | Potencia máxima: 245 kW'],
      ['Frenos', 'WABCO'],
      ['Ejes', 'Dongfeng DANA'],
      ['Neumáticos', '275/70 R22.5 | Llantas de acero inoxidable'],
      ['Pintura', 'Estándar RED – Manual de Normas Gráficas'],
      ['Parabrisas', 'Vidrio laminado con parasol de dos piezas'],
      ['Peso en vacío', '11400 / 11800 kg'],
      ['Peso máximo', '18000 kg'],
      ['Autonomía', '>300 km'],
      ['Suspensión', 'Neumática, con sistema ECAS (suspensión lateral)'],
      [
        'Sistemas de Seguridad y Asistencia al Conductor',
        'AEBS (ABS + EBS integrado) – ESC: Control electrónico de estabilidad – EPB: Freno de estacionamiento electrónico – LDW: Advertencia de salida de carril – ACW: Advertencia de colisión – DSW: Advertencia de fatiga del conductor. Opcional: Sistema SSA - Asistente de Inicio en Pendientes',
      ],
      [
        'Adicionales',
        'Aire acondicionado, RACK tecnológico (Resolución Exenta 4772/2023 MTT), cabina cerrada para el conductor, Wi‑Fi, contador de pasajeros, puertos USB, monitor de retroceso de 7’’, monitor de información interior de 21’’, rampa de acceso, soporte para silla de ruedas, 2 extintores de 4 kg, 1 chaleco reflectante, 1 triángulo reflectante, 2 cuñas de estacionamiento',
      ],
    ],
  },
  {
    id: 'e9-12',
    label: '12 m',
    title: 'Serie E9 Tipología 12 m – Estándar RED',
    items: [
      ['Modelo', 'HFF6120G9EV21'],
      ['Dimensiones', '12000 × 2550 × 3250'],
      ['Batería', 'CATL 350.07 kWh – 1 puerto CCS2'],
      ['Motor', 'Ankai Permanent Magnet Synchronous Motor | Potencia nominal: 120 kW | Potencia máxima: 245 kW'],
      ['Frenos', 'WABCO'],
      ['Ejes', 'Dongfeng DANA'],
      ['Neumáticos', '275/70 R22.5 | Llantas de acero inoxidable'],
      ['Pintura', 'Estándar RED – Manual de Normas Gráficas'],
      ['Parabrisas', 'Vidrio laminado con parasol de dos piezas'],
      ['Peso en vacío', '11900 / 12550 kg'],
      ['Peso máximo', '18000 kg'],
      ['Autonomía', '>300 km'],
      ['Suspensión', 'Neumática, con sistema ECAS (suspensión lateral)'],
      [
        'Sistemas de Seguridad y Asistencia al Conductor',
        'AEBS (ABS + EBS integrado) – ESC: Control electrónico de estabilidad – EPB: Freno de estacionamiento electrónico – LDW: Advertencia de salida de carril – ACW: Advertencia de colisión – DSW: Advertencia de fatiga del conductor. Opcional: Sistema SSA, asistente de inicio en pendientes',
      ],
      [
        'Adicionales',
        'Aire acondicionado, RACK tecnológico (Resolución Exenta 4772/2023 MTT), cabina cerrada para el conductor, Wi‑Fi, contador de pasajeros, puertos USB, monitor de retroceso de 7’’, monitor de información interior de 21’’, rampa de acceso, soporte para silla de ruedas, 2 extintores de 4 kg, 1 chaleco reflectante, 1 triángulo reflectante, 2 cuñas de estacionamiento',
      ],
    ],
  },
  {
    id: 'e9-dd',
    label: 'Double Decker',
    title: 'Serie E9 Tipología Double Deck',
    items: [
      ['Modelo', 'HFF6120GSEV21A'],
      ['Dimensiones', '12000 × 2550 × 4000'],
      ['Batería', 'CATL 399.92 kWh – 1 puerto CCS2'],
      ['Motor', 'CDTL'],
      ['Frenos', 'WABCO'],
      ['Ejes', 'Dongfeng DANA'],
      ['Neumáticos', '275/70 R22.5 | Llantas de acero inoxidable'],
      ['Pintura', 'A confirmar por el comprador'],
      ['Parabrisas', 'Vidrio laminado con parasol de dos piezas'],
      ['Peso en vacío', '11900 / 12550 kg'],
      ['Peso máximo', '18000 kg'],
      ['Autonomía', '>250 km'],
      ['Suspensión', 'Neumática, con sistema ECAS (suspensión lateral)'],
      [
        'Sistemas de Seguridad y Asistencia al Conductor',
        'AEBS (ABS + EBS integrado) – ESC: Control electrónico de estabilidad – EPB: Freno de estacionamiento electrónico – LDW: Advertencia de salida de carril – ACW: Advertencia de colisión – DSW: Advertencia de fatiga del conductor – MOIS: Moving-off information system – BSIS: Blind spot information system – ISA: Intelligent speed assist – REIS: Reversing information system – AIIF: Alcohol interlock installation facilitation – DDAW: Driver drowsiness/alertness warning – ADDW: Advanced driver distraction warning system – TPMS: Tire pressure monitor system',
      ],
      [
        'Adicionales',
        'Aire acondicionado, cabina cerrada para el conductor, Wi‑Fi, contador de pasajeros, puertos USB, monitor de retroceso de 7’’, monitor de información interior de 21’’, rampa de acceso, soporte para silla de ruedas, 2 extintores de 4 kg, 1 chaleco reflectante, 1 triángulo reflectante, 2 cuñas de estacionamiento',
      ],
    ],
  },
]

function AlbumViewer({ images, altBase }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeImage = images[activeIndex] ?? images[0]

  useEffect(() => {
    setActiveIndex(0)
  }, [images])

  if (!images?.length) return null

  const goPrev = () => setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  const goNext = () => setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm">
      <div className="relative aspect-[16/10] w-full">
        <ImgSafe
          src={activeImage}
          alt={`${altBase} ${activeIndex + 1}`}
          className="h-full w-full object-cover"
        />

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={goPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 text-sm font-semibold text-slate-800 shadow transition hover:bg-white"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={goNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 text-sm font-semibold text-slate-800 shadow transition hover:bg-white"
            >
              ›
            </button>

            <div className="absolute bottom-3 right-3 rounded-full bg-slate-900/75 px-3 py-1 text-xs font-semibold text-white">
              {activeIndex + 1} / {images.length}
            </div>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto p-4">
          {images.map((src, index) => {
            const active = index === activeIndex

            return (
              <button
                key={src}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={[
                  'relative h-20 w-28 shrink-0 overflow-hidden rounded-2xl border transition',
                  active
                    ? 'border-[#005a8d] ring-2 ring-[#005a8d]/20'
                    : 'border-slate-200 hover:border-slate-300',
                ].join(' ')}
              >
                <ImgSafe
                  src={src}
                  alt={`${altBase} miniatura ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}

function SpecTabs({ specs }) {
  const [activeSpecId, setActiveSpecId] = useState(specs[0]?.id ?? null)

  useEffect(() => {
    setActiveSpecId(specs[0]?.id ?? null)
  }, [specs])

  const activeSpec = specs.find((item) => item.id === activeSpecId) ?? specs[0]

  if (!specs?.length) return null

  return (
    <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
      <div className="mb-5">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#005a8d]">
          Serie E9 · Configuraciones técnicas
        </p>
        <h3 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
          Especificaciones por tipología
        </h3>
      </div>

      <div className="mb-6 overflow-x-auto pb-2">
        <div className="flex min-w-max gap-3">
          {specs.map((item) => {
            const active = item.id === activeSpec.id

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveSpecId(item.id)}
                className={[
                  'whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition',
                  active
                    ? 'bg-[#005a8d] text-white shadow'
                    : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-100',
                ].join(' ')}
              >
                {item.label}
              </button>
            )
          })}
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6">
        <h4 className="text-xl font-extrabold text-slate-900 sm:text-2xl">
          {activeSpec.title}
        </h4>

        <dl className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {activeSpec.items.map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <dt className="text-sm font-bold uppercase tracking-wide text-slate-900">
                {label}
              </dt>
              <dd className="mt-2 text-sm leading-7 text-slate-700">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

export default function SeriesIntro({ serie }) {
  const isSerieE9 = useMemo(() => {
    const nombre = serie?.nombre?.toLowerCase?.() ?? ''
    return nombre.includes('e9')
  }, [serie])

  const albumImages = useMemo(() => {
    if (isSerieE9) return E9_ALBUM
    if (serie?.imagenesGaleria?.length) return serie.imagenesGaleria
    if (serie?.album?.length) return serie.album
    if (serie?.imagenHero) return [serie.imagenHero]
    return []
  }, [isSerieE9, serie])

  if (!serie) return null

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#005a8d]">
              {serie.nombre}
            </p>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
              {serie.subtitulo}
            </h2>

            <p className="mt-5 text-slate-600 leading-relaxed">
              {serie.descripcion}
            </p>

            {serie.descripcionExtra && (
              <p className="mt-4 text-slate-600 leading-relaxed">
                {serie.descripcionExtra}
              </p>
            )}

            {serie.highlights?.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {serie.highlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            )}
          </div>

          <AlbumViewer images={albumImages} altBase={serie.nombre} />
        </div>

        {isSerieE9 && <SpecTabs specs={E9_SPECS} />}
      </div>
    </section>
  )
}
