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
    <footer className="bg-white text-[#111827] text-sm overflow-x-hidden flex flex-col">
      {/* Línea verde arriba, full width */}
      <div className="w-full border-t border-[#00d084]" />

      {/* Contenido centrado horizontal y verticalmente */}
      <div className="max-w-7xl w-full mx-auto px-6 py-4 flex items-center justify-center space-x-8">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="/img/logo.webp"
            alt="ANKAI Logo"
            className="h-12 w-auto"
          />
        </div>

        {/* Texto */}
        <div className="text-center text-gray-500 whitespace-nowrap">
          © {new Date().getFullYear()} SGX Chile. Todos los derechos reservados.
        </div>

        {/* Íconos sociales */}
        <div className="flex space-x-6 text-[#111827] text-lg">
          {navigation.social.map((item) => (
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
