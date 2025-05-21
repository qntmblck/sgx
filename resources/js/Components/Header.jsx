import { useState, useEffect } from 'react'
import { Link } from '@inertiajs/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navItems = [
  { name: 'Inicio', href: '/' }, // ← Cambiado a ruta raíz
  { name: 'Nosotros', href: '#sobre' },
  { name: 'Electromovilidad', href: '#electromovilidad' },
  { name: 'Productos', href: '/productos' },
  { name: 'Servicios', href: '/servicios' },
  { name: 'Contacto', href: '/contacto' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
  const handleScroll = () => setScrolled(window.scrollY > 50)
  window.addEventListener('scroll', handleScroll)

  const sectionIds = ['inicio', 'sobre', 'electromovilidad']
  const observers = []

  sectionIds.forEach((id) => {
    const el = document.getElementById(id)
    if (el) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${id}`)
          }
        },
        { threshold: 0.7 } // ← más exigente
      )
      observer.observe(el)
      observers.push(observer)
    }
  })

  return () => {
    window.removeEventListener('scroll', handleScroll)
    observers.forEach((observer) => observer.disconnect())
  }
}, [])


  const currentPath = typeof window !== 'undefined' ? window.location.pathname : ''

  const bgColor = scrolled ? 'bg-white shadow-md' : 'bg-transparent'
  const navTextColor = scrolled ? 'text-neutral-800' : 'text-white'
  const mobileBgColor = scrolled ? 'bg-white' : 'bg-[#0f121d]'
  const mobileTextColor = scrolled ? 'text-neutral-800' : 'text-white'

  const isActive = (href) => {
  if (href.startsWith('#')) {
    return href === activeSection
  }

  // Solo marcamos "/" (Inicio) si NO estamos en otra sección de ancla
  if (href === '/') {
    return activeSection === '#inicio' || activeSection === ''
  }

  return currentPath === href
}



  return (
    <header className={`fixed top-0 w-full z-50 transition duration-300 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* ✅ Logo redirige al Welcome.jsx */}
        <Link href="/" className="flex items-center space-x-2">
          <img src="/img/sgx.png" alt="SGX Logo" className="h-6 sm:h-8 w-auto transition-all" />
        </Link>

        <nav className={`hidden md:flex space-x-2 text-sm font-medium ${navTextColor}`}>
          {navItems.map((item) => {
            const active = isActive(item.href)
            const isAnchor = item.href.startsWith('#')
            return isAnchor ? (
              <a
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-md transition font-semibold ${
                  active
                    ? 'bg-[#149e60] text-white shadow-sm'
                    : 'hover:text-[#149e60] text-inherit'
                }`}
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-md transition font-semibold ${
                  active
                    ? 'bg-[#149e60] text-white shadow-sm'
                    : 'hover:text-[#149e60] text-inherit'
                }`}
              >
                {item.name}
              </Link>
            )
          })}
        </nav>

        <button
          className={`md:hidden ${navTextColor}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className={`md:hidden ${mobileBgColor} border-t shadow-sm`}>
          <nav className={`flex flex-col items-center px-4 py-6 gap-4 text-base font-semibold ${mobileTextColor}`}>
            {navItems.map((item) => {
              const active = isActive(item.href)
              const isAnchor = item.href.startsWith('#')
              return isAnchor ? (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2 rounded-md w-full text-center transition ${
                    active
                      ? 'bg-[#149e60] text-white shadow-sm'
                      : 'hover:text-[#149e60] text-inherit'
                  }`}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2 rounded-md w-full text-center transition ${
                    active
                      ? 'bg-[#149e60] text-white shadow-sm'
                      : 'hover:text-[#149e60] text-inherit'
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </nav>
        </div>
      )}
    </header>
  )
}
