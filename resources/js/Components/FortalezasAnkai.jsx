export default function FortalezasAnkai() {
  return (
    <section id="fortalezas" className="py-20 px-4 bg-white text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Tecnología y Seguridad ANKAI</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          ANKAI incorpora tecnologías de vanguardia en diseño estructural, eficiencia energética y resistencia, aportando innovación a cada modelo que circula en entornos urbanos e interurbanos exigentes.
        </p>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-gradient-to-br from-lime-100 to-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-lg font-bold text-lime-700 mb-2">Estructura Monocasco</h3>
            <p>Diseño integral derivado de la industria aeronáutica: reduce el peso, mejora la rigidez estructural y maximiza la seguridad pasiva.</p>
          </div>
          <div className="bg-gradient-to-br from-lime-100 to-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-lg font-bold text-lime-700 mb-2">Pintura Electroforética</h3>
            <p>Protección anticorrosiva de última generación, clave para enfrentar condiciones climáticas extremas como las chilenas.</p>
          </div>
          <div className="bg-gradient-to-br from-lime-100 to-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-lg font-bold text-lime-700 mb-2">Liderazgo en Energías Limpias</h3>
            <p>Pioneros en buses eléctricos en China, ANKAI desarrolla soluciones eléctricas, híbridas, a GNC e hidrógeno.</p>
          </div>
        </div>
      </div>
    </section>
  )
}