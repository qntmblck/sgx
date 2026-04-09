import { motion } from 'framer-motion'
import { ArrowUpRight, Battery, Bus, Ruler, Users } from 'lucide-react'
import ImgSafe from '@/Components/UI/ImgSafe'

export default function VariantCards({ variantes, onOpen }) {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="mb-8">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Configuraciones disponibles
          </h3>
          <p className="mt-2 text-slate-600">
            Revisa las variantes disponibles por largo dentro de la serie seleccionada.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {variantes.map((item) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative">
                <div className="aspect-[4/3] w-full">
                  <ImgSafe
                    src={item.imagenes?.[0]}
                    alt={item.nombre}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="absolute left-4 top-4 flex flex-wrap gap-2 pr-4">
                  <span className="rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-slate-800">
                    {item.energia}
                  </span>
                  <span className="rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-slate-800">
                    {item.categoria}
                  </span>
                </div>
              </div>

              <div className="space-y-4 p-5">
                <div>
                  <h4 className="text-xl font-extrabold text-slate-900">
                    {item.nombre}
                  </h4>
                  <p className="mt-1 text-sm text-slate-500">
                    Variante por largo dentro de la serie
                  </p>
                </div>

                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <Ruler className="h-4 w-4" />
                    <span>Largo: {item.largo}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>Pasajeros: {item.pasajeros}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Battery className="h-4 w-4" />
                    <span>Autonomía: {item.autonomia}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Bus className="h-4 w-4" />
                    <span>{item.destacados?.[0]}</span>
                  </li>
                </ul>

                <button
                  type="button"
                  onClick={() => onOpen(item)}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#005a8d] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#00466e]"
                >
                  Ver detalle
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
