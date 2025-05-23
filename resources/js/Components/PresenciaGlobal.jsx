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
    <section className="py-8 px-0 bg-transparent w-full overflow-hidden">
      {/* Carrusel full ancho */}
      <div className="w-full overflow-x-auto scrollbar-hide">
        <div
          className="flex w-max animate-carousel gap-4 px-4 sm:px-6"
          style={{ animationDuration: '40s' }}
        >
          {[...regiones, ...regiones].map((region, index) => (
            <div
  key={`${region.nombre}-${index}`}
  className="flex-shrink-0 w-[280px] sm:w-[300px] h-[140px]
             border border-white/20 rounded-xl p-4 shadow-md
             hover:scale-[1.01] transition-transform duration-300 backdrop-blur-md
             bg-[linear-gradient(to_bottom_right,rgba(0,59,92,0.15),rgba(0,153,204,0.15))]"
>

              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-full overflow-hidden border border-white bg-white">
                  <img
                    src={region.img}
                    alt={region.nombre}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-sm font-bold text-white">{region.nombre}</h3>
              </div>
              <p className="text-xs text-white font-medium leading-snug">{region.resumen}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
