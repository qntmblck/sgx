import { Link } from '@inertiajs/react'

export default function CTAContacto() {
  return (
    <div className="bg-gradient-to-r from-green-200 via-teal-100 to-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
        <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          ¿Listo para avanzar hacia una movilidad más limpia?<br />
          Conversemos sobre soluciones inteligentes.
        </h2>
        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:shrink-0">
          <Link
            href="/contacto"
            className="rounded-md bg-lime-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-lime-600 transition"
          >
            Contáctanos
          </Link>
          <a href="/servicios" className="text-sm font-semibold text-gray-900 hover:text-lime-600">
            Ver Servicios <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  )
}