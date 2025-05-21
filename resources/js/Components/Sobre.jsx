export default function Sobre() {
  return (
    <section id="sobre" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Sobre SGX</h2>
        <p className="text-lg text-gray-700 mb-12">
          Representamos en Chile a ANKAI, fabricante de clase mundial en transporte sustentable. Promovemos soluciones integrales de electromovilidad alineadas con los objetivos estratégicos de eficiencia y adaptación territorial.
        </p>
        <div className="grid md:grid-cols-3 gap-6 text-left text-gray-900">
          <div className="bg-gradient-to-br from-lime-100 via-white to-lime-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lime-800 mb-2">Misión</h3>
            <p>
              Impulsar modelos de transporte sustentable que integren tecnología, agilidad, y responsabilidad pública.
            </p>
          </div>
          <div className="bg-gradient-to-br from-lime-100 via-white to-lime-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lime-800 mb-2">Visión</h3>
            <p>
              Ser líderes en electromovilidad en Chile, respaldando decisiones estratégicas con soluciones confiables.
            </p>
          </div>
          <div className="bg-gradient-to-br from-lime-100 via-white to-lime-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lime-800 mb-2">Valores</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Responsabilidad pública</li>
              <li>Transparencia institucional</li>
              <li>Colaboración estratégica</li>
              <li>Agilidad operativa</li>
              <li>Adaptabilidad organizacional</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}