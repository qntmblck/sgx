import { useMemo, useState, useEffect, useRef } from 'react'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'
import ContactActions from '@/Components/ContactActions'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Info, Ruler, Users, Battery, ShieldCheck, Cpu, Zap, Sparkles, Filter, Check } from 'lucide-react'

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

// Nota: atributos alineados a claims de plataforma del dossier (IP67, e-Control, EBS, NVH, etc.). :contentReference[oaicite:27]{index=27}
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
  // Ejemplos diésel (si mantendrás línea Euro VI provisionalmente)
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
  return <span className="px-2 py-0.5 rounded-md text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">{children}</span>
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
  useEffect(() => {
    const handler = (e) => { if (menuRef.current && !menuRef.current.contains(e.target)) setShowFilters(false) }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])
  const [showFilters, setShowFilters] = useState(false)

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

  // =======================
  // RENDER
  // =======================
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative bg-cover bg-center" style={{ backgroundImage: "url('/img/productos.webp')" }}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20 text-white">
          <h1 className="text-4xl font-extrabold">Portafolio de Buses ANKAI</h1>
          <p className="text-white/90 max-w-2xl mt-3">
            Buses 100% eléctricos de 6 a 12 m y línea Euro VI. Plataforma con <strong>e-Control</strong>,
            protección <strong>IP67</strong>, <strong>EBS</strong> con recuperación y diseño <strong>NVH</strong> de bajo ruido.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge>Centro Nacional de I+D</Badge>
            <Badge>Base de Nueva Energía RMB 670M</Badge>
            <Badge>EMC GB/T18387 · GB14023</Badge>
            <Badge>Impacto GB/T31498</Badge>
          </div>
        </div>
      </section>

      {/* Filtros */}
      <section className="sticky top-14 z-30 backdrop-blur bg-white/80 border-b">
        <div className="max-w-7xl mx-auto px-6 py-3 flex flex-wrap gap-3 items-center">
          <button onClick={() => setShowFilters(v => !v)} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border">
            <Filter size={16} /> Filtros
          </button>
          <div className="relative" ref={menuRef}>
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 4 }}
                  className="absolute left-0 mt-2 bg-white rounded-xl shadow-xl p-4 grid grid-cols-1 sm:grid-cols-3 gap-4 w-[min(92vw,760px)] z-50"
                >
                  <div>
                    <p className="text-sm font-bold mb-2">Energía</p>
                    <div className="flex flex-wrap gap-2">
                      {ENERGIAS.map(e => (
                        <button key={e} onClick={() => toggleArray(energia, setEnergia, e)}
                          className={classNames('px-2 py-1 rounded-full text-sm border', energia.includes(e) ? 'bg-emerald-600 text-white border-emerald-700' : 'hover:bg-gray-100')}>
                          {energia.includes(e) && <Check size={14} className="inline mr-1" />}{e}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-bold mb-2">Segmento</p>
                    <div className="flex flex-wrap gap-2">
                      {SEGMENTOS.map(s => (
                        <button key={s.key} onClick={() => toggleArray(segmento, setSegmento, s.key)}
                          className={classNames('px-2 py-1 rounded-full text-sm border', segmento.includes(s.key) ? 'bg-emerald-600 text-white border-emerald-700' : 'hover:bg-gray-100')}>
                          {segmento.includes(s.key) && <Check size={14} className="inline mr-1" />}{s.key}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-bold mb-2">Buscar</p>
                    <input value={buscar} onChange={e => setBuscar(e.target.value)} placeholder="Modelo, SKU…"
                      className="w-full rounded-md border px-3 py-2" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {productos.map(m => (
          <motion.article key={m.sku} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-white rounded-2xl shadow hover:shadow-lg overflow-hidden border">
            <div className="relative h-56 overflow-hidden">
              <img src={m.imagenes[0]} alt={m.nombre} className="w-full h-full object-cover" />
              <div className="absolute top-3 left-3 flex gap-2">
                <Tag>{m.energia}</Tag>
                <Tag>{m.categoria}</Tag>
                <Tag>{m.largo} m</Tag>
              </div>
            </div>
            <div className="p-4 space-y-3">
              <h3 className="text-lg font-extrabold">{m.nombre}</h3>
              <ul className="text-sm text-neutral-700 grid grid-cols-1 gap-1">
                <li className="inline-flex items-center gap-2"><Battery size={16}/> {m.autonomia}</li>
                <li className="inline-flex items-center gap-2"><ShieldCheck size={16}/> {m.principales.slice(0,2).join(' · ')}</li>
                <li className="inline-flex items-center gap-2"><Cpu size={16}/> {m.plataforma[0]}</li>
              </ul>
              <div className="flex gap-2 pt-1">
                <button onClick={() => setOpen(m.sku)} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#005a8d] text-white hover:bg-[#00466e]">
                  <Info size={16}/> Detalles
                </button>
                <button onClick={() => toggleArray(comparar, setComparar, m.sku, 3)}
                  className="px-3 py-1.5 rounded-md border hover:bg-gray-50">
                  {comparar.includes(m.sku) ? 'Quitar de comparar' : 'Comparar'}
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </section>

      {/* Drawer de Detalle */}
      <AnimatePresence>
        {open && (() => {
          const m = MODELOS.find(x => x.sku === open)
          return (
            <motion.div className="fixed inset-0 z-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(null)} />
              <motion.aside
                initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
                className="absolute right-0 top-0 h-full w-full sm:w-[520px] bg-white shadow-2xl p-5 overflow-y-auto"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-xl font-extrabold">{m.nombre}</h4>
                  <button onClick={() => setOpen(null)} className="p-2 rounded-md hover:bg-gray-100"><X/></button>
                </div>

                <div className="mt-3 grid grid-cols-3 gap-2">
                  {m.imagenes.map((src, i) => (
                    <img key={i} src={src} alt={`${m.nombre} ${i+1}`} className="w-full h-28 object-cover rounded-lg border" />
                  ))}
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
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
                  <div className="bg-gray-50 rounded-xl p-3 col-span-2">
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

      {/* Comparador (si hay selección) */}
      <AnimatePresence>
        {comparar.length > 0 && (
          <motion.section
            initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 24, opacity: 0 }}
            className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl border w-[min(92vw,1100px)] p-4 z-40"
          >
            <div className="flex items-center justify-between mb-2">
              <p className="font-extrabold">Comparación</p>
              <button className="text-sm underline" onClick={() => setComparar([])}>Limpiar</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
              {comparar.map(sku => {
                const m = MODELOS.find(x => x.sku === sku)
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
          </motion.section>
        )}
      </AnimatePresence>

      <Footer />
      <ContactActions />
    </>
  )
}
