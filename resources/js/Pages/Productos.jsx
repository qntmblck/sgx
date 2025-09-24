import { useMemo, useState, useEffect, useRef } from 'react'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'
import ContactActions from '@/Components/ContactActions'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Info, Ruler, Users, Battery, ShieldCheck, Cpu, Zap, Sparkles, Filter, Check, ImageOff } from 'lucide-react'

// =======================
// DATA (edita con tus equipos e imágenes finales)
// =======================
const CATEGORIAS = ['Urbano', 'Interurbano', 'Turismo']
const ENERGIAS = ['Eléctrico', 'Diésel Euro VI'] // agrega PHEV/H2 cuando corresponda
const SEGMENTOS = [
  { key: '6–7m', min: 6.0, max: 7.9 },
  { key: '8–10m', min: 8.0, max: 10.0 },
  { key: '12m', min: 10.1, max: 12.6 },
]

// NOTA: atributos alineados a claims de plataforma del dossier (IP67, e-Control, EBS, NVH, etc.)
const MODELOS = [
  {
    sku: 'G6E',
    nombre: 'G6 Eléctrico',
    categoria: 'Urbano',
    energia: 'Eléctrico',
    largo: 6.5,
    pasajeros: '13+1',
    autonomia: 'hasta 350+ km (plataforma e-Control)',
    imagenes: ['/img/buses/g6-electric/1.webp', '/img/buses/g6-electric/2.webp', '/img/buses/g6-electric/3.webp'],
    principales: ['IP67 + vadeo', 'EBS regenerativo', 'NVH reducido', 'ADAS preventivo'],
    plataforma: ['e-Control', 'EMC (GB/T18387 · GB14023)', 'Batería LFP alta densidad'],
  },
  {
    sku: 'G9E-85',
    nombre: 'G9 Eléctrico 8.5 m',
    categoria: 'Urbano',
    energia: 'Eléctrico',
    largo: 8.5,
    pasajeros: '15–30',
    autonomia: '350+ km (cond. normalizadas)',
    imagenes: ['/img/buses/g9-electric-85/1.webp', '/img/buses/g9-electric-85/2.webp'],
    principales: ['IP67 + inmersión 500 mm/24h', 'EBS + ABS coordinado', 'Pantalla táctil', 'Frente abatible'],
    plataforma: ['Motores IPM tracción/aux', 'AVL Cruise (calibración)', 'Aislamiento baterías techo/lateral'],
  },
  {
    sku: 'G9E-105',
    nombre: 'G9 Eléctrico 10.5 m',
    categoria: 'Urbano',
    energia: 'Eléctrico',
    largo: 10.5,
    pasajeros: '19–39',
    autonomia: '350+ km',
    imagenes: ['/img/buses/g9-electric-105/1.webp', '/img/buses/g9-electric-105/2.webp'],
    principales: ['Estructura aligerada', 'Dirección IPM', 'Bomba inflado IPM', 'Prioridad de dirección'],
    plataforma: ['Pruebas −40 °C a 60 °C', '90% descarga @ −40 °C', 'Brake override system'],
  },
  {
    sku: 'G9E-120',
    nombre: 'G9 Eléctrico 12.0 m',
    categoria: 'Urbano',
    energia: 'Eléctrico',
    largo: 12.0,
    pasajeros: '34–38',
    autonomia: '350+ km',
    imagenes: ['/img/buses/g9-electric-120/1.webp', '/img/buses/g9-electric-120/2.webp', '/img/buses/g9-electric-120/3.webp'],
    principales: ['Chasis monocasco', 'EBS optimizado', 'EMC integral', 'Cabina ergonómica'],
    plataforma: ['Impacto GB/T31498 (50 km/h, 950 kg)', 'Sin incendio/explosión/fuga >5 L', 'Soldadura robotizada ±1 mm'],
  },
  {
    sku: 'A9E-82',
    nombre: 'A9 Eléctrico 8.2 m',
    categoria: 'Interurbano',
    energia: 'Eléctrico',
    largo: 8.2,
    pasajeros: '≈29',
    autonomia: '300–350 km',
    imagenes: ['/img/buses/a9-electric-82/1.webp', '/img/buses/a9-electric-82/2.webp'],
    principales: ['Confort interior', 'Pasillo amplio', 'Bajo ruido', 'Telemetría'],
    plataforma: ['e-Control', 'Monitoreo remoto', 'Gestión térmica bajas temp'],
  },
  // Ejemplo diésel (si mantendrás línea Euro VI provisionalmente)
  {
    sku: 'G6D',
    nombre: 'G6 Diésel Euro VI',
    categoria: 'Urbano',
    energia: 'Diésel Euro VI',
    largo: 6.6,
    pasajeros: '23',
    autonomia: '—',
    imagenes: ['/img/buses/g6-diesel/1.webp'],
    principales: ['Estructura reforzada', 'Confort', 'Telemetría'],
    plataforma: ['Preparado para retrofit telemétrico'],
  },
]

// =======================
// UI Helpers
// =======================
function classNames(...a) { return a.filter(Boolean).join(' ') }

function Badge({ children }) {
  return <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-neutral-100 text-neutral-800">{children}</span>
}

function Tag({ children }) {
  return <span className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">{children}</span>
}

function ImgSafe({ src, alt, className }) {
  const [ok, setOk] = useState(true)
  useEffect(() => setOk(true), [src])
  return ok ? (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      className={className}
      onError={() => setOk(false)}
    />
  ) : (
    <div className={classNames('flex items-center justify-center bg-neutral-100 text-neutral-500', className)}>
      <ImageOff className="w-6 h-6" />
    </div>
  )
}

// =======================
// PAGE
// =======================
export default function Productos() {
  // Filtros
  const [energia, setEnergia] = useState(['Eléctrico', 'Diésel Euro VI'])
  const [segmento, setSegmento] = useState([])
  const [buscar, setBuscar] = useState('')

  // Drawer/Comparador
  const [open, setOpen] = useState(null) // sku abierto
  const [comparar, setComparar] = useState([]) // hasta 3

  // Dropdown fuera de foco
  const menuRef = useRef(null)
  const [showFilters, setShowFilters] = useState(false)
  useEffect(() => {
    const handler = (e) => { if (menuRef.current && !menuRef.current.contains(e.target)) setShowFilters(false) }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // Filtrado
  const productos = useMemo(() => {
    const q = buscar.trim().toLowerCase()
    return MODELOS.filter(m =>
      energia.includes(m.energia) &&
      (segmento.length === 0 || segmento.some(s => {
        const r = SEGMENTOS.find(x => x.key === s); return m.largo >= r.min && m.largo <= r.max
      })) &&
      (!q || [m.nombre, m.categoria, m.sku].join(' ').toLowerCase().includes(q))
    )
  }, [energia, segmento, buscar])

  const toggleArray = (arr, setArr, v, max = Infinity) => {
    setArr(arr.includes(v) ? arr.filter(x => x !== v) : (arr.length < max ? [...arr, v] : arr))
  }

  // Bloqueo de scroll sólo cuando el drawer de Detalles está abierto
  useEffect(() => {
    const shouldLock = open !== null // <- sólo el drawer
    document.documentElement.style.overflow = shouldLock ? 'hidden' : ''
    document.body.style.overflow = shouldLock ? 'hidden' : ''
    return () => {
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <Header />

      {/* Hero */}
      <section
        className="relative bg-cover bg-center min-h-[40vh] overflow-hidden"
        style={{ backgroundImage: "url('/img/productos.webp')" }}
      >
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-10 sm:pb-16 text-white">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            Portafolio de Buses ANKAI
          </h1>
          <p className="text-white/90 mt-3 max-w-3xl text-sm sm:text-base">
            Buses 100% eléctricos de 6 a 12 m y línea Euro VI. Plataforma con <strong>e-Control</strong>, protección <strong>IP67</strong>, <strong>EBS</strong> con recuperación y diseño <strong>NVH</strong> de bajo ruido.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 max-w-3xl">
            <Badge>Centro Nacional de I+D</Badge>
            <Badge>Base de Nueva Energía RMB 670M</Badge>
            <Badge>EMC GB/T18387 · GB14023</Badge>
            <Badge>Impacto GB/T31498</Badge>
          </div>
        </div>
      </section>

      {/* Filtros */}
      <section className="sticky top-16 md:top-20 z-30 backdrop-blur bg-white/85 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap gap-3 items-center">
          <button
            onClick={() => setShowFilters(v => !v)}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border text-sm"
          >
            <Filter size={16} /> Filtros
          </button>

          <div className="relative" ref={menuRef}>
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 4 }}
                  className="absolute left-0 mt-2 bg-white rounded-xl shadow-xl p-4 grid grid-cols-1 sm:grid-cols-3 gap-4 w-[min(94vw,780px)] z-50 border"
                >
                  <div>
                    <p className="text-sm font-bold mb-2">Energía</p>
                    <div className="flex flex-wrap gap-2">
                      {ENERGIAS.map(e => (
                        <button
                          key={e}
                          onClick={() => toggleArray(energia, setEnergia, e)}
                          className={classNames(
                            'px-2 py-1 rounded-full text-sm border',
                            energia.includes(e) ? 'bg-emerald-600 text-white border-emerald-700' : 'hover:bg-gray-100'
                          )}
                        >
                          {energia.includes(e) && <Check size={14} className="inline mr-1" />}{e}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-bold mb-2">Segmento</p>
                    <div className="flex flex-wrap gap-2">
                      {SEGMENTOS.map(s => (
                        <button
                          key={s.key}
                          onClick={() => toggleArray(segmento, setSegmento, s.key)}
                          className={classNames(
                            'px-2 py-1 rounded-full text-sm border',
                            segmento.includes(s.key) ? 'bg-emerald-600 text-white border-emerald-700' : 'hover:bg-gray-100'
                          )}
                        >
                          {segmento.includes(s.key) && <Check size={14} className="inline mr-1" />}{s.key}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-bold mb-2">Buscar</p>
                    <input
                      value={buscar}
                      onChange={e => setBuscar(e.target.value)}
                      placeholder="Modelo, SKU…"
                      className="w-full rounded-md border px-3 py-2 text-sm"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-5">
        {productos.map(m => (
          <motion.article
            key={m.sku}
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-white rounded-2xl shadow hover:shadow-lg overflow-hidden border"
          >
            <div className="relative overflow-hidden">
              <div className="aspect-[4/3] w-full">
                <ImgSafe
                  src={m.imagenes[0]}
                  alt={m.nombre}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-2 left-2 flex gap-2 flex-wrap pr-2">
                <Tag>{m.energia}</Tag>
                <Tag>{m.categoria}</Tag>
                <Tag>{m.largo} m</Tag>
              </div>
            </div>

            <div className="p-4 space-y-3">
              <h3 className="text-base sm:text-lg font-extrabold leading-snug line-clamp-2">{m.nombre}</h3>
              <ul className="text-sm text-neutral-700 grid grid-cols-1 gap-1">
                <li className="inline-flex items-center gap-2"><Battery size={16}/> {m.autonomia}</li>
                <li className="inline-flex items-center gap-2"><ShieldCheck size={16}/> {m.principales.slice(0,2).join(' · ')}</li>
                <li className="inline-flex items-center gap-2"><Cpu size={16}/> {m.plataforma[0]}</li>
              </ul>
              <div className="flex flex-wrap gap-2 pt-1">
                <button
                  onClick={() => setOpen(m.sku)}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#005a8d] text-white hover:bg-[#00466e] text-sm"
                >
                  <Info size={16}/> Detalles
                </button>
                <button
                  onClick={() => toggleArray(comparar, setComparar, m.sku, 3)}
                  className="px-3 py-1.5 rounded-md border hover:bg-gray-50 text-sm"
                >
                  {comparar.includes(m.sku) ? 'Quitar de comparar' : 'Comparar'}
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </section>

      {/* Drawer de Detalle (sheet) */}
      <AnimatePresence>
        {open && (() => {
          const m = MODELOS.find(x => x.sku === open)
          if (!m) return null
          return (
            <motion.div className="fixed inset-0 z-50"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(null)} />
              <motion.aside
                initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
                className="absolute right-0 top-0 h-dvh w-full sm:max-w-md md:max-w-lg bg-white shadow-2xl p-5 overflow-y-auto overscroll-contain"
              >
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-lg sm:text-xl font-extrabold pr-4">{m.nombre}</h4>
                  <button onClick={() => setOpen(null)} className="p-2 rounded-md hover:bg-gray-100"><X/></button>
                </div>

                <div className="mt-3 grid grid-cols-3 gap-2">
                  {m.imagenes.map((src, i) => (
                    <div key={i} className="rounded-lg border overflow-hidden">
                      <div className="aspect-[4/3] w-full">
                        <ImgSafe src={src} alt={`${m.nombre} ${i+1}`} className="w-full h-full object-cover" />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div className="bg-gray-50 rounded-xl p-3">
                    <p className="font-bold mb-1">Dimensiones & Capacidad</p>
                    <ul className="space-y-1">
                      <li className="inline-flex items-center gap-2"><Ruler size={16}/> Largo: {m.largo} m</li>
                      <li className="inline-flex items-center gap-2"><Users size={16}/> Pasajeros: {m.pasajeros}</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3">
                    <p className="font-bold mb-1">Plataforma</p>
                    <ul className="space-y-1">
                      {m.plataforma.map((t,i)=><li key={i} className="inline-flex items-center gap-2"><Sparkles size={16}/> {t}</li>)}
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3 sm:col-span-2">
                    <p className="font-bold mb-1">Seguridad & Confort</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                      {m.principales.map((t,i)=><li key={i} className="inline-flex items-center gap-2"><ShieldCheck size={16}/> {t}</li>)}
                      <li className="inline-flex items-center gap-2"><Zap size={16}/> Recuperación de energía EBS</li>
                      <li className="inline-flex items-center gap-2"><Cpu size={16}/> Simulación AVL Cruise</li>
                    </ul>
                  </div>
                </div>
              </motion.aside>
            </motion.div>
          )
        })()}
      </AnimatePresence>

      {/* Comparador (responsive y no bloquea scroll de la página) */}
      <AnimatePresence>
        {comparar.length > 0 && (
          <motion.section
            initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 24, opacity: 0 }}
            className="fixed inset-x-0 bottom-0 z-40"
          >
            {/* Marco contenedor para no salirse del layout */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-[env(safe-area-inset-bottom)]">
              <div className="bg-white border-t md:border rounded-t-2xl md:rounded-2xl shadow-2xl w-full">
                <div className="flex items-center justify-between px-3 md:px-4 py-2">
                  <p className="font-extrabold text-sm md:text-base">Comparación</p>
                  <button className="text-xs md:text-sm underline" onClick={() => setComparar([])}>Limpiar</button>
                </div>

                {/* Contenido con altura máxima y scroll interno */}
                <div className="px-3 md:px-4 pb-3 max-h-[40vh] md:max-h-[34vh] overflow-y-auto">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs md:text-sm">
                    {comparar.map(sku => {
                      const m = MODELOS.find(x => x.sku === sku)
                      if (!m) return null
                      return (
                        <div key={sku} className="border rounded-xl p-3">
                          <p className="font-bold">{m.nombre}</p>
                          <p className="text-neutral-600">{m.energia} · {m.largo} m · {m.pasajeros}</p>
                          <ul className="mt-2 space-y-1 text-neutral-700">
                            <li>Autonomía: {m.autonomia}</li>
                            <li>Plataforma: {m.plataforma.join(', ')}</li>
                            <li>Claves: {m.principales.join(', ')}</li>
                          </ul>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      <Footer />
      <ContactActions />
    </>
  )
}
