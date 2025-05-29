export default function BeneficioDetalle({ titulo, descripcion, imagen }) {
  return (
    <div className="flex flex-col sm:flex-row items-start gap-4 p-4 bg-white/10 rounded-xl border border-white/20 text-white backdrop-blur-md shadow-md">
      <img src={imagen} alt={titulo} className="w-14 h-14 object-contain bg-white p-1 rounded-full" />
      <div>
        <h3 className="text-xl font-bold mb-1">{titulo}</h3>
        <p className="text-sm leading-relaxed">{descripcion}</p>
      </div>
    </div>
  )
}
