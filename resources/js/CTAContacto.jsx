import { Link } from '@inertiajs/react'

export default function CTAContacto() {
  return (
    <div className="bg-green-700">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
        <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          ¿Listo para transformar tu flota?<br />
          Contacta con nuestro equipo hoy.
        </h2>
        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:shrink-0">
          <Link
            href="/contacto"
            className="rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-green-700 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Contáctanos
          </Link>
          <a href="/servicios" className="text-sm/6 font-semibold text-white">
            Ver nuestros servicios <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  )
}
