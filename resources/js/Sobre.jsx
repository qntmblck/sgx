export default function Sobre() {
  return (
    <section id="sobre" className="py-20 bg-white px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Sobre SGX</h2>
        <p className="text-lg text-gray-700 mb-8">
          Somos representantes autorizados de ANKAI en Chile, y nuestra misión es liderar la transición hacia un transporte público más limpio, eficiente y seguro. Nos enfocamos en entregar soluciones de movilidad eléctrica adaptadas a los desafíos operativos del país, con el respaldo de una marca reconocida internacionalmente.
        </p>

        <div className="grid md:grid-cols-3 gap-6 text-left text-gray-800">
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-blue-800 mb-2">Nuestra Misión</h3>
            <p>Transformar la movilidad urbana e interurbana en Chile mediante soluciones sustentables, tecnológicas y confiables.</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-blue-800 mb-2">Nuestra Visión</h3>
            <p>Ser referentes en transporte eléctrico en Latinoamérica, acompañando a gobiernos y empresas hacia una operación más inteligente y sostenible.</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-blue-800 mb-2">Nuestros Valores</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Compromiso con la sustentabilidad</li>
              <li>Transparencia y responsabilidad</li>
              <li>Orientación al cliente público y privado</li>
              <li>Excelencia técnica y operativa</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
