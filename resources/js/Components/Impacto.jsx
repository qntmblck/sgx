export default function Impacto() {
  return (
    <section id="impacto" className="py-20 px-4 bg-gray-50 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Nuestro Impacto</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          ANKAI y SGX avanzan estratégicamente en Chile hacia la meta nacional de electromovilidad al 2035, colaborando con instituciones públicas y privadas para consolidar un ecosistema más limpio y moderno.
        </p>
        <div className="grid md:grid-cols-3 gap-8 text-lime-800 text-3xl font-extrabold">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <p>+100</p>
            <span className="text-base font-normal text-gray-600 block mt-1">buses proyectados a 2026</span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <p>+6</p>
            <span className="text-base font-normal text-gray-600 block mt-1">regiones en etapa de análisis</span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <p>2035</p>
            <span className="text-base font-normal text-gray-600 block mt-1">alineados con el compromiso nacional</span>
          </div>
        </div>
      </div>
    </section>
  )
}