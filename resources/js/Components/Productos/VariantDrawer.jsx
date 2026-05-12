import { AnimatePresence, motion } from 'framer-motion'
import { Battery, ShieldCheck, Sparkles, Users, Ruler, X } from 'lucide-react'
import ImgSafe from '@/Components/UI/ImgSafe'

export default function VariantDrawer({ item, onClose }) {
  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-slate-950/55"
            onClick={onClose}
          />

          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.25 }}
            className="absolute right-0 top-0 h-dvh w-full max-w-2xl overflow-y-auto bg-gray-50 shadow-2xl"
          >
            <div className="p-5 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-700">
                    {item.categoria}
                  </p>
                  <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
                    {item.nombre}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-xl p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {item.imagenes?.map((src, idx) => (
                  <div key={idx} className="overflow-hidden rounded-2xl border border-slate-200">
                    <div className="aspect-[4/3] w-full">
                      <ImgSafe
                        src={src}
                        alt={`${item.nombre} ${idx + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
                  <h4 className="text-sm font-bold text-slate-900">Datos base</h4>
                  <ul className="mt-3 space-y-2 text-sm text-slate-700">
                    <li className="flex items-center gap-2">
                      <Ruler className="h-4 w-4" />
                      Largo: {item.largo}
                    </li>
                    <li className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      Pasajeros: {item.pasajeros}
                    </li>
                    <li className="flex items-center gap-2">
                      <Battery className="h-4 w-4" />
                      Autonomía: {item.autonomia}
                    </li>
                  </ul>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
                  <h4 className="text-sm font-bold text-slate-900">Destacados</h4>
                  <ul className="mt-3 space-y-2 text-sm text-slate-700">
                    {item.destacados?.map((text) => (
                      <li key={text} className="flex items-start gap-2">
                        <ShieldCheck className="mt-0.5 h-4 w-4" />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:col-span-2">
                  <h4 className="text-sm font-bold text-slate-900">Especificaciones y enfoque</h4>
                  <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 text-sm text-slate-700">
                    {item.especificaciones?.map((text) => (
                      <li key={text} className="flex items-start gap-2">
                        <Sparkles className="mt-0.5 h-4 w-4" />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-sm text-slate-600 leading-relaxed">
                  Para una propuesta técnica y comercial ajustada a la operación, configuración y condiciones
                  de servicio, contáctanos directamente y evaluamos la alternativa más adecuada para tu flota.
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <button
                    type="button"
                    className="rounded-full bg-red-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-800"
                  >
                    Solicitar información
                  </button>
                  <button
                    type="button"
                    className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-red-200 hover:text-red-700"
                  >
                    Hablar con SGX
                  </button>
                </div>
              </div>
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
