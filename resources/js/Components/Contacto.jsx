export default function Contacto() {
  return (
    <section id="contacto" className="py-20 px-4 bg-white text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-6">
          ¿Listo para impulsar tu flota eléctrica?
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Escríbenos o llámanos para recibir asesoría personalizada y comenzar la transformación de tu operación con tecnología sustentable de clase mundial.
        </p>

        <div className="text-lg text-gray-800 font-medium space-y-2">
          <p><span className="text-blue-800 font-semibold">📧 Correo:</span> <a href="mailto:contacto@sgx.cl" className="text-blue-700 underline">contacto@sgx.cl</a></p>
          <p><span className="text-blue-800 font-semibold">📞 Teléfono:</span> (+56) 2 1234 5678</p>
          <p><span className="text-blue-800 font-semibold">📍 Dirección:</span> Santiago, Chile</p>
        </div>
      </div>
    </section>
  )
}
