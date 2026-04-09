export default function ProductCTA() {
  return (
    <section className="bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
              SGX Chile · Ankai Bus
            </p>

            <h3 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              ¿Necesitas una configuración para tu operación?
            </h3>

            <p className="mt-4 text-white/75 leading-relaxed">
              Te ayudamos a identificar la serie y largo más adecuados según operación urbana,
              interurbana, corporativa o especial, con foco en continuidad operacional,
              adaptación y soporte.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
              >
                Solicitar propuesta
              </button>
              <button
                type="button"
                className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Contactar a SGX
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
