import { useEffect, useMemo, useState } from 'react'
import ImgSafe from '@/Components/UI/ImgSafe'

const E9_ALBUM = [
  '/img/productos/E9_1.webp',
  '/img/productos/E9_2.webp',
  '/img/productos/E9_3.webp',
  '/img/productos/E9_4.webp',
  '/img/productos/E9_5.webp',
  '/img/productos/E9_6.webp',
  '/img/productos/E9_7.webp',
  '/img/productos/E9_8.webp',
  '/img/productos/E9_9.webp',
  '/img/productos/E9_10.webp',
  '/img/productos/E9_11.webp',
  '/img/productos/E9_DD_1.webp',
  '/img/productos/E9_DD_2.webp',
]

const A6_ALBUM = [
  '/img/productos/A6_1.webp',
  '/img/productos/A6_2.webp',
  '/img/productos/A6_3.webp',
  '/img/productos/A6_4.webp',
]

const K7_ALBUM = [
  '/img/productos/K7_1.webp',
  '/img/productos/K7_2.webp',
  '/img/productos/K7_3.webp',
  '/img/productos/K7_4.webp',
]

const MOTOR_ALBUM = [
  '/img/productos/M_1.webp',
]

const SERIES = {
  E9: {
    id: 'E9',
    nombre: 'Serie E9: Transporte Público Urbano',
    subtitulo: 'Plataforma urbana eléctrica para Transporte Público y Double Deck turístico',
    descripcion:
      'La sexta y más avanzada generación de buses eléctricos Ankai diseñada para operaciones de transporte público urbano.',
    descripcionExtra:
      'La Serie E9 representa la base tecnológica de buses tipo estándar RED, disponible en largos 8.5m, 8.7m, 8.9m, 10.5m, 12m y 12m Double Decker. Su menor peso estructural y diseño monocasco optimiza los costos operacionales por kilómetro, elementos críticos para la eficiencia.',
    highlights: [
      'Transporte Público Urbano',
      'Plataforma eléctrica avanzada',
      'Estándar RED',
      'Double Deck turístico',
      'Eficiencia operacional',
    ],
    album: E9_ALBUM,
  },
  A6: {
    id: 'A6',
    nombre: 'Serie A6: Transporte Interurbano y Minería',
    subtitulo: 'Plataforma de buses eléctricos para aplicaciones en Transporte Interurbano, Industrial y Corporativo',
    descripcion:
      'La Serie A6 de Ankai ha sido diseñada para operaciones de transporte de mayor distancia y entornos exigentes, combinando el confort de sus asientos de lujo, con una estructura diseñada para brindar seguridad y durabilidad. La Serie A6 cuenta con la aprobación de la normativa UNECE R066.02.',
    descripcionExtra:
      'La Serie A6 es ideal para transporte de pasajeros en entornos inter-urbanos y/o rurales, y para transporte de personal en faenas productivas en Minería y Energía, con configuraciones opcionales de batería para operaciones que requieren alta autonomía.',
    highlights: [
      'Transporte interurbano',
      'Minería y energía',
      'Uso industrial y corporativo',
      'Alta autonomía',
      'Normativa UNECE R066.02',
    ],
    album: A6_ALBUM,
  },
  K7: {
    id: 'K7',
    nombre: 'Serie K7: Van eléctrica de lujo',
    subtitulo: 'Solución compacta y eficiente para Transporte Corporativo, Transporte Escolar y Aplicaciones Específicas',
    descripcion:
      'La galardonada Serie K7 llega en su versión eléctrica. Constituye una solución compacta para servicios específicos.',
    descripcionExtra:
      'Su tamaño compacto, y al mismo tiempo espacioso en su interior, permite expandir la electromovilidad para suplir necesidades de transporte para escolares, corporaciones privadas y municipalidades, entre otros.',
    highlights: [
      'Van eléctrica de lujo',
      'Transporte corporativo',
      'Transporte escolar',
      'Aplicaciones específicas',
      'Formato compacto y eficiente',
    ],
    album: K7_ALBUM,
  },
}

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
        'Aire acondicionado, RACK tecnológico (Resolución Exenta 4772/2023 MTT), cabina cerrada para el conductor, Wi-Fi, contador de pasajeros, puertos USB, monitor de retroceso de 7’’, monitor de información interior de 21’’, rampa de acceso, soporte para silla de ruedas, 2 extintores de 4 kg, 1 chaleco reflectante, 1 triángulo reflectante, 2 cuñas de estacionamiento',
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
        'Aire acondicionado, RACK tecnológico (Resolución Exenta 4772/2023 MTT), cabina cerrada para el conductor, Wi-Fi, contador de pasajeros, puertos USB, monitor de retroceso de 7’’, monitor de información interior de 21’’, rampa de acceso, soporte para silla de ruedas, 2 extintores de 4 kg, 1 chaleco reflectante, 1 triángulo reflectante, 2 cuñas de estacionamiento',
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
        'Aire acondicionado, RACK tecnológico (Resolución Exenta 4772/2023 MTT), cabina cerrada para el conductor, Wi-Fi, contador de pasajeros, puertos USB, monitor de retroceso de 7’’, monitor de información interior de 21’’, rampa de acceso, soporte para silla de ruedas, 2 extintores de 4 kg, 1 chaleco reflectante, 1 triángulo reflectante, 2 cuñas de estacionamiento',
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
        'Aire acondicionado, cabina cerrada para el conductor, Wi-Fi, contador de pasajeros, puertos USB, monitor de retroceso de 7’’, monitor de información interior de 21’’, rampa de acceso, soporte para silla de ruedas, 2 extintores de 4 kg, 1 chaleco reflectante, 1 triángulo reflectante, 2 cuñas de estacionamiento',
      ],
    ],
  },
]

const A6_SPECS = [
  {
    id: 'a6-82',
    label: '8.2 m',
    title: 'Serie A6 – Tipología 8.2 m',
    items: [
      ['Modelo', 'HFF6829KEV'],
      ['Dimensiones', '8245 × 2500 × 3430'],
      ['Asientos', '33 + 1'],
      ['Batería', 'CATL 200.54 kWh – 1 puerto CCS2'],
      ['Motor', 'DANA Permanent Magnet Synchronous Motor | Potencia nominal: 145 kW | Potencia máxima: 245 kW'],
      ['Frenos', 'WABCO'],
      ['Ejes', 'Dongfeng DANA'],
      ['Neumáticos', '255/70 R22.5 | Llantas de acero inoxidable'],
      ['Pintura', 'A confirmar por el comprador'],
      ['Parabrisas', 'Vidrio laminado con parasol. Vidrios laterales con cortinas.'],
      ['Peso en vacío', '9200 kg'],
      ['Peso máximo', '14200 kg'],
      ['Autonomía', '>250 km'],
      ['Suspensión', 'Neumática'],
      [
        'Sistemas de Seguridad y Asistencia al Conductor',
        'AEBS (ABS + EBS integrado) – ESC: Control electrónico de estabilidad – EPB: Freno de estacionamiento electrónico – LDW: Advertencia de salida de carril – ACW: Advertencia de colisión – DSW: Advertencia de fatiga del conductor',
      ],
      [
        'Adicionales',
        'Aire acondicionado, Wi-Fi, contador de pasajeros, puertos USB, monitor de retroceso de 7’’, 2 extintores de 4 kg, 1 chaleco reflectante, 1 triángulo reflectante, 2 cuñas de estacionamiento',
      ],
    ],
  },
  {
    id: 'a6-113',
    label: '11.3 m',
    title: 'Serie A6 – Tipología 11.3 m',
    items: [
      ['Modelo', 'HFF6113KEV2'],
      ['Dimensiones', '11300 × 2500 × 3450'],
      ['Asientos', '47 + 1'],
      ['Batería', 'CATL 338.4 kWh / 399 kWh – 1 puerto CCS2'],
      ['Motor', 'ANKAI Permanent Magnet Synchronous Motor | Potencia nominal: 120 kW | Potencia máxima: 245 kW'],
      ['Frenos', 'WABCO'],
      ['Ejes', 'Dongfeng DANA'],
      ['Neumáticos', '295/80 R22.5 | Llantas de acero inoxidable'],
      ['Pintura', 'A confirmar por el comprador'],
      ['Parabrisas', 'Vidrio laminado con parasol. Vidrios laterales con cortinas.'],
      ['Peso en vacío', '12200 kg'],
      ['Peso máximo', '18000 kg'],
      ['Autonomía', '>250 km'],
      ['Suspensión', 'Neumática'],
      [
        'Sistemas de Seguridad y Asistencia al Conductor',
        'AEBS (ABS + EBS integrado) – ESC: Control electrónico de estabilidad – EPB: Freno de estacionamiento electrónico – LDW: Advertencia de salida de carril – ACW: Advertencia de colisión – DSW: Advertencia de fatiga del conductor',
      ],
      [
        'Adicionales',
        'Aire acondicionado, Wi-Fi, contador de pasajeros, puertos USB, monitor de retroceso de 7’’, 2 extintores de 4 kg, 1 chaleco reflectante, 1 triángulo reflectante, 2 cuñas de estacionamiento',
      ],
    ],
  },
]

const K7_SPECS = [
  {
    id: 'k7-7',
    label: '7 m',
    title: 'Serie K7 – Tipología 7 m',
    items: [
      ['Modelo', 'HFF6710BEV'],
      ['Dimensiones', '7145 × 2040 × 2725 / 2785'],
      ['Asientos', '18 + 1'],
      ['Batería', 'CATL 139.78 kWh – 1 puerto CCS2'],
      ['Motor', 'ANKAI Permanent Magnet Synchronous Motor | Potencia nominal: 80 kW | Potencia máxima: 150 kW'],
      ['Frenos', 'WABCO'],
      ['Ejes', 'Dongfeng DANA'],
      ['Neumáticos', '215/75 R17.5 | Llantas de acero inoxidable'],
      ['Pintura', 'A confirmar por el comprador'],
      ['Parabrisas', 'Vidrio laminado con parasol.'],
      ['Peso en vacío', '5700 kg'],
      ['Peso máximo', '8200 kg'],
      ['Autonomía', '>200 km'],
      ['Suspensión', 'Neumática'],
      [
        'Sistemas de Seguridad y Asistencia al Conductor',
        'AEBS (ABS + EBS integrado) – ESC: Control electrónico de estabilidad – EPB: Freno de estacionamiento electrónico – LDW: Advertencia de salida de carril – ACW: Advertencia de colisión – DSW: Advertencia de fatiga del conductor',
      ],
      [
        'Adicionales',
        'Aire acondicionado, Wi-Fi, contador de pasajeros, 2 extintores de 4 kg, 1 chaleco reflectante, 1 triángulo reflectante, 2 cuñas de estacionamiento',
      ],
    ],
  },
]

const SERIES_SPECS = {
  E9: E9_SPECS,
  A6: A6_SPECS,
  K7: K7_SPECS,
}

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
              aria-label="Imagen anterior"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={goNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 text-sm font-semibold text-slate-800 shadow transition hover:bg-white"
              aria-label="Imagen siguiente"
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
                key={`${src}-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={[
                  'relative h-20 w-28 shrink-0 overflow-hidden rounded-2xl border transition',
                  active
                    ? 'border-red-700 ring-2 ring-red-700/20'
                    : 'border-slate-200 hover:border-red-200',
                ].join(' ')}
                aria-label={`Ver imagen ${index + 1}`}
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

function SeriesTabs({ activeSeriesId, onChange }) {
  const tabs = [
    { id: 'E9', label: 'Serie E9: Transporte Público Urbano' },
    { id: 'A6', label: 'Serie A6: Transporte Interurbano y Minería' },
    { id: 'K7', label: 'Serie K7: Van Eléctrica de Lujo' },
  ]

  return (
    <div className="mb-8 overflow-x-auto pb-2">
      <div className="flex min-w-max gap-3">
        {tabs.map((tab) => {
          const active = tab.id === activeSeriesId

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onChange(tab.id)}
              className={[
                'whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition',
                active
                  ? 'border border-red-700 bg-red-700 text-white shadow-md shadow-red-700/20'
                  : 'border border-slate-200 bg-white text-slate-700 hover:border-red-200 hover:text-red-700',
              ].join(' ')}
            >
              {tab.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}

function SpecTabs({ specs, serieLabel }) {
  const [activeSpecId, setActiveSpecId] = useState(specs[0]?.id ?? null)

  useEffect(() => {
    setActiveSpecId(specs[0]?.id ?? null)
  }, [specs])

  const activeSpec = specs.find((item) => item.id === activeSpecId) ?? specs[0]

  if (!specs?.length) return null

  return (
    <div className="mt-10 rounded-[2rem] border border-slate-200 bg-slate-50 p-5 sm:p-6">
      <div className="mb-5">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-700">
          {serieLabel} · Configuraciones técnicas
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
                    ? 'border border-red-700 bg-red-700 text-white shadow-md shadow-red-700/20'
                    : 'border border-slate-200 bg-white text-slate-700 hover:border-red-200 hover:text-red-700',
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
            <div key={label} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
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
  const initialSeriesId = useMemo(() => {
    const nombre = serie?.nombre?.toLowerCase?.() ?? ''

    if (nombre.includes('a6')) return 'A6'
    if (nombre.includes('k7')) return 'K7'
    return 'E9'
  }, [serie])

  const [activeSeriesId, setActiveSeriesId] = useState(initialSeriesId)

  useEffect(() => {
    setActiveSeriesId(initialSeriesId)
  }, [initialSeriesId])

  const activeSeries = useMemo(() => {
    return SERIES[activeSeriesId] ?? SERIES.E9
  }, [activeSeriesId])

  const activeSpecs = useMemo(() => {
    return SERIES_SPECS[activeSeriesId] ?? E9_SPECS
  }, [activeSeriesId])

  const albumImages = useMemo(() => {
    if (activeSeries?.album?.length) return activeSeries.album
    if (serie?.imagenesGaleria?.length) return serie.imagenesGaleria
    if (serie?.album?.length) return serie.album
    if (serie?.imagenHero) return [serie.imagenHero]
    return []
  }, [activeSeries, serie])

  if (!serie && !activeSeries) return null

  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <SeriesTabs activeSeriesId={activeSeriesId} onChange={setActiveSeriesId} />

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-700">
                {activeSeries.nombre}
              </p>

              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
                {activeSeries.subtitulo}
              </h2>

              <p className="mt-5 text-slate-600 leading-relaxed">
                {activeSeries.descripcion}
              </p>

              {activeSeries.descripcionExtra && (
                <p className="mt-4 text-slate-600 leading-relaxed">
                  {activeSeries.descripcionExtra}
                </p>
              )}

              {activeSeries.highlights?.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {activeSeries.highlights.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-semibold text-red-800"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <AlbumViewer images={albumImages} altBase={activeSeries.nombre} />
          </div>

          <SpecTabs specs={activeSpecs} serieLabel={activeSeries.nombre} />
        </div>
      </div>
    </section>
  )
}
