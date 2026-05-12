import React from 'react'

const navigation = {
  social: [
    { name: 'Facebook',  href: '#', icon: () => <i className="fa-brands fa-facebook-f" /> },
    { name: 'Instagram', href: '#', icon: () => <i className="fa-brands fa-instagram" /> },
    { name: 'X',         href: '#', icon: () => <i className="fa-brands fa-x-twitter" /> },
  ],
}

export default function Footer() {
  return (
    <footer className="overflow-x-hidden border-t border-slate-200 bg-white text-sm text-slate-900">

      {/* Contenedor centrado, siempre en una sola fila */}
      <div className="max-w-7xl w-full mx-auto px-6 py-4 flex items-center justify-between flex-nowrap">
        {/* 1) Logo */}
        <div className="flex-shrink-0">
          <img
            src="/img/logo.webp"
            alt="ANKAI Logo"
            className="h-12 w-auto"
          />
        </div>

        {/* 2) Derechos centrados y ajustables */}
        <div className="flex-1 mx-4 text-center text-slate-500 min-w-0">
          © {new Date().getFullYear()} SGX Chile. Todos los derechos reservados.
        </div>

        {/* 3) Iconos sociales */}
        <div className="flex-shrink-0 flex space-x-6 text-slate-900 text-lg">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              aria-label={item.name}
              className="transition hover:text-red-700"
            >
              <item.icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
