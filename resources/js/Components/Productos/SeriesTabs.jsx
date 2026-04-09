export default function SeriesTabs({ series, activeSeriesId, onChange }) {
  return (
    <section className="sticky top-16 md:top-20 z-30 border-b bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4">
        <div className="flex flex-wrap gap-3">
          {series.map((serie) => {
            const active = serie.id === activeSeriesId

            return (
              <button
                key={serie.id}
                type="button"
                onClick={() => onChange(serie.id)}
                className={[
                  'rounded-full px-4 py-2 text-sm font-semibold transition',
                  active
                    ? 'bg-[#005a8d] text-white shadow'
                    : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50',
                ].join(' ')}
              >
                {serie.nombre}
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
