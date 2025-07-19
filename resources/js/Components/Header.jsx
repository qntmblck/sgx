import { useState, useEffect } from 'react'
import { Link, usePage } from '@inertiajs/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navItems = [
  { name: 'Inicio', href: '/' },
  { name: 'Tecnología', href: '/tecnologia' },
  { name: 'Productos', href: '/productos' },
  { name: 'Innovación', href: '/innovacion' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { url: currentPath } = usePage()

  // Cambiar fondo al hacer scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const baseClasses = 'px-4 py-2 rounded-md transition font-semibold'
  const bgColor = scrolled ? 'bg-white shadow-md' : 'bg-white/10 backdrop-blur'
  const navTextColor = scrolled ? 'text-neutral-800' : 'text-white'

  // Renderiza un ítem de navegación
  const renderNavItem = (item, isMobile = false) => {
    const isActive = currentPath === item.href
    const classes = [
      isMobile ? 'flex-shrink-0' : '',
      baseClasses,
      isActive
        ? 'bg-gradient-to-br from-[#003b5c] to-[#00d084] text-white shadow'
        : 'hover:text-lime-500 text-inherit',
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <Link
        key={item.name}
        href={item.href}
        onClick={() => setMobileMenuOpen(false)}
        className={classes}
      >
        {item.name}
      </Link>
    )
  }

  return (
    <header className={`fixed top-0 w-full z-50 transition duration-300 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/img/sgx.webp" alt="SGX Logo" className="h-6 sm:h-8 w-auto transition-all" />
        </Link>

        {/* Menú escritorio */}
        <nav className={`hidden md:flex space-x-2 text-sm font-medium ${navTextColor}`}>
          {navItems.map(item => renderNavItem(item))}
        </nav>

        {/* Toggle móvil */}
        <button
          className={`md:hidden ${navTextColor}`}
          onClick={() => setMobileMenuOpen(open => !open)}
        >
          {mobileMenuOpen
            ? <XMarkIcon className="h-6 w-6" />
            : <Bars3Icon className="h-6 w-6" />
          }
        </button>
      </div>

      {/* Menú móvil desplegable */}
      {mobileMenuOpen && (
        <div className={`${bgColor} md:hidden border-t border-white/10`}>
          <nav className={`flex flex-col px-4 py-4 gap-3 text-sm font-semibold ${navTextColor}`}>
            {navItems.map(item => renderNavItem(item, true))}
          </nav>
        </div>
      )}
    </header>
  )
}
