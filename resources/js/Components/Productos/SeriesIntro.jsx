import ImgSafe from '@/Components/UI/ImgSafe'

export default function SeriesIntro({ serie }) {
  if (!serie) return null

  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#005a8d]">
            {serie.nombre}
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
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
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm">
          <div className="aspect-[16/10] w-full">
            <ImgSafe
              src={serie.imagenHero}
              alt={serie.nombre}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
