export default function Impacto() {
  return (
    <section id="impacto" className="py-24 px-4 bg-gradient-to-br from-white via-gray-50 to-lime-50 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Nuestro Impacto</h2>

        {/* Introducción estratégica */}
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
          Chile lidera la adopción de buses eléctricos en Latinoamérica con más de <strong>2.480 unidades en operación</strong>. El país ha establecido como meta descarbonizar el 100% del transporte público al año <strong>2035</strong>.
        </p>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          En SGX, como representantes de ANKAI, avanzamos junto a actores públicos y privados para consolidar un ecosistema de movilidad limpio, moderno y alineado con los estándares internacionales.
        </p>

        {/* Beneficios destacados */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 text-left text-gray-800">
          <div className="bg-white shadow p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-lime-700">Reducen costos operativos</h3>
            <p>Menor mantenimiento, mayor eficiencia energética y mejor control de flota.</p>
          </div>
          <div className="bg-white shadow p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-lime-700">Mejoran el servicio</h3>
            <p>Vehículos silenciosos, modernos y conectados para una experiencia superior al usuario.</p>
          </div>
          <div className="bg-white shadow p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-lime-700">Cumplen normativas</h3>
            <p>Compatibles con los estándares ambientales más exigentes a nivel nacional e internacional.</p>
          </div>
        </div>

        {/* Métricas clave */}
        <div className="grid md:grid-cols-3 gap-8 text-lime-800 text-3xl font-extrabold">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <p>+200</p>
            <span className="text-base font-normal text-gray-600 block mt-1">buses proyectados a 2026</span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <p>+6</p>
            <span className="text-base font-normal text-gray-600 block mt-1">regiones en evaluación</span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <p>2035</p>
            <span className="text-base font-normal text-gray-600 block mt-1">compromiso nacional de descarbonización</span>
          </div>
        </div>
      </div>
    </section>
  )
}
