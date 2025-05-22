const regiones = [
  {
    nombre: 'Asia',
    resumen:
      'Base de desarrollo con más de 50 años de innovación. Principal proveedor de flotas urbanas en China, Corea y Medio Oriente.',
    img: '/img/regiones/asia.png',
  },
  {
    nombre: 'Europa',
    resumen:
      'Buses turísticos y eléctricos operando en Alemania, Rusia y países del Báltico. Cumplimiento normativo Euro VI, E-Mark y GOST.',
    img: '/img/regiones/europa.png',
  },
  {
    nombre: 'Latinoamérica',
    resumen:
      'Proyectos activos en México (800 buses GNC), Chile (F7 ejecutivos) y Uruguay (eléctricos urbanos). Región en expansión.',
    img: '/img/regiones/latam.png',
  },
  {
    nombre: 'África',
    resumen:
      'Flotas interurbanas y turismo en Sudáfrica, Egipto y Ghana. Adaptación a clima extremo y caminos rurales.',
    img: '/img/regiones/africa.png',
  },
  {
    nombre: 'Estados Unidos',
    resumen:
      'Proveedores homologados bajo certificación DOT. Iniciativas de electrificación en rutas privadas y escolares.',
    img: '/img/regiones/usa.png',
  },
]

export default function PresenciaGlobal() {
  return (
    <section id="presencia" className="bg-white py-16 px-6 sm:px-8">
      {/* Carrusel scrollable y animado */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex animate-carousel space-x-6 px-2 w-max" style={{ animationDuration: '40s' }}>
          {[...regiones, ...regiones].map((region, index) => (
            <div
              key={`${region.nombre}-${index}`}
              className="flex-shrink-0 w-[320px] sm:w-[300px] bg-gradient-to-br from-lime-50 to-white border border-gray-200 rounded-xl p-6 shadow-md hover:scale-[1.01] transition duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 border border-gray-300">
                  <img
                    src={region.img}
                    alt={region.nombre}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{region.nombre}</h3>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">{region.resumen}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
