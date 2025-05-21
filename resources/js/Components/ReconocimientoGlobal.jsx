export default function ReconocimientoGlobal() {
  return (
    <section id="reconocimiento" className="py-20 px-4 bg-white text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Presencia Global y Confianza</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          ANKAI ha consolidado su posición como proveedor de confianza para operaciones urbanas, turísticas y de largo recorrido en Asia, Europa, África y América Latina.
        </p>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-gradient-to-br from-white via-lime-50 to-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-lg font-bold text-lime-700 mb-2">México</h3>
            <p>800 buses a GNC para Monterrey en 2025, con infraestructura inteligente integrada.</p>
          </div>
          <div className="bg-gradient-to-br from-white via-lime-50 to-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-lg font-bold text-lime-700 mb-2">Chile</h3>
            <p>Entrega de unidades F7 para flotas ejecutivas, diseñadas para el entorno geográfico nacional.</p>
          </div>
          <div className="bg-gradient-to-br from-white via-lime-50 to-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-lg font-bold text-lime-700 mb-2">Uruguay</h3>
            <p>Buses eléctricos de piso bajo operando desde 2019 en Montevideo con excelentes resultados.</p>
          </div>
        </div>
      </div>
    </section>
  )
}