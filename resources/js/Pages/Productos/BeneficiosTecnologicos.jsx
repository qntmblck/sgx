export default function BeneficiosTecnologicos() {
  return (
    <section className="py-16 bg-gradient-to-r from-lime-50 via-white to-lime-100 px-4 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Beneficios Tecnológicos</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          Cada bus ANKAI integra sistemas de control inteligente, eficiencia energética avanzada y diseño de seguridad estructural con altos estándares globales.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            'Autonomía extendida',
            'Sistemas integrados de gestión',
            'Estructura anticorrosiva y liviana'
          ].map((beneficio, idx) => (
            <div key={idx} className="transition transform hover:-translate-y-1 hover:shadow-xl bg-white p-6 rounded-lg shadow text-lime-800 font-semibold">
              {beneficio}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}