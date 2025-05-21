export default function Sobre() {
  return (
    <section id="sobre" className="relative bg-white py-24 px-6 overflow-hidden">
      <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-br from-lime-50 to-white opacity-30 rounded-l-full blur-2xl" />
      <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 items-center gap-12">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-900 animate-fade-up">Sobre SGX</h2>
          <p className="text-lg text-gray-700 leading-relaxed animate-fade-up delay-100">
            Representamos oficialmente a ANKAI en Chile, promoviendo soluciones de electromovilidad con visión pública y enfoque técnico adaptado al territorio.
          </p>
        </div>
        <div className="grid gap-6 animate-fade-up delay-200">
          <div className="bg-white p-6 rounded-lg border-l-4 border-lime-500 shadow hover:shadow-xl transition">
            <h3 className="font-semibold text-lime-700 mb-1">Misión</h3>
            <p className="text-sm text-gray-600">Impulsar transporte limpio, eficiente y confiable con compromiso público.</p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-lime-500 shadow hover:shadow-xl transition">
            <h3 className="font-semibold text-lime-700 mb-1">Visión</h3>
            <p className="text-sm text-gray-600">Ser referentes estratégicos en movilidad eléctrica nacional.</p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-lime-500 shadow hover:shadow-xl transition">
            <h3 className="font-semibold text-lime-700 mb-1">Valores</h3>
            <ul className="text-sm text-gray-600 list-disc pl-4">
              <li>Transparencia y responsabilidad</li>
              <li>Agilidad institucional</li>
              <li>Colaboración estratégica</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}