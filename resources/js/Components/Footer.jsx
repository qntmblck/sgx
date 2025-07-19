import React from 'react'

const navigation = {
  social: [
    { name: 'Facebook', href: '#', icon: () => <i className="fa-brands fa-facebook-f" /> },
    { name: 'Instagram', href: '#', icon: () => <i className="fa-brands fa-instagram" /> },
    { name: 'X', href: '#', icon: () => <i className="fa-brands fa-x-twitter" /> },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-white text-[#111827] text-sm overflow-hidden">
      {/* Línea verde */}
      <div className="border-t border-[#00d084]" />

      {/* Contenedor con 3 columnas SIEMPRE en fila */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-nowrap items-center justify-between">
        {/* 1) Logo ANKAI */}
        <div className="flex-shrink-0">
          <img
            src="/img/logo.webp"
            alt="ANKAI Logo"
            className="h-12 w-auto"
          />
        </div>

        {/* 2) Derechos */}
        <div className="flex-1 text-center text-gray-500 px-4">
          © 2024 SGX Chile. Todos los derechos reservados.
        </div>

        {/* 3) Iconos sociales */}
        <div className="flex-shrink-0 flex space-x-6 text-[#111827] text-lg">
          {navigation.social.map(item => (
            <a
              key={item.name}
              href={item.href}
              aria-label={item.name}
              className="hover:text-[#00d084]"
            >
              <item.icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
