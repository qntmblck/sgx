import { useEffect, useState } from 'react'
import { Link, usePage } from '@inertiajs/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navItems = [
  { name: 'Inicio', href: '/' },
  { name: 'Tecnología', href: '/tecnologia' },
  { name: 'Productos', href: '/productos' },
  { name: 'Noticias', href: '/noticias' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { url } = usePage()

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false)
    }

    window.addEventListener('resize', closeOnResize)
    return () => window.removeEventListener('resize', closeOnResize)
  }, [])

  const normalizePath = (path) => {
    if (!path) return '/'
    const cleanPath = path.split('?')[0].split('#')[0]
    return cleanPath === '' ? '/' : cleanPath
  }

  const currentPath = normalizePath(url)

  const isActivePath = (href) => {
    const cleanHref = normalizePath(href)
    return currentPath === cleanHref
  }

  const linkBaseClasses =
    'inline-flex items-center rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200'

  const renderNavItem = (item, isMobile = false) => {
    const isActive = isActivePath(item.href)

    const classes = isActive
      ? `${linkBaseClasses} bg-gradient-to-r from-[#00795f] to-[#00b894] text-white shadow-sm`
      : `${linkBaseClasses} text-slate-700 hover:text-[#00795f] hover:bg-slate-100`

    return (
      <Link
        key={item.name}
        href={item.href}
        onClick={() => setMobileMenuOpen(false)}
        className={isMobile ? `w-full justify-start ${classes}` : classes}
        aria-current={isActive ? 'page' : undefined}
      >
        {item.name}
      </Link>
    )
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Ir al inicio"
        >
          <img
            src="/img/sgx.webp"
            alt="SGX"
            className="h-7 w-auto sm:h-8"
          />
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => renderNavItem(item))}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 hover:text-[#00795f] md:hidden"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6">
            {navItems.map((item) => renderNavItem(item, true))}
          </nav>
        </div>
      )}
    </header>
  )
}
