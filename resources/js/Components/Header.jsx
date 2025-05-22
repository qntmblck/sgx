import { useState, useEffect } from 'react'
import { Link } from '@inertiajs/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navItems = [
  { name: 'Inicio', href: '/' },
  { name: 'Nosotros', scrollTo: 'sobre' },
  { name: 'Impacto', scrollTo: 'impacto' },
  { name: 'Productos', href: '/productos' },
  { name: 'Tecnología', href: '/productos#beneficios' },
  { name: 'Contacto', scrollTo: 'footer' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/'
  const [currentHash, setCurrentHash] = useState('')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)

    const observers = []

    if (currentPath === '/') {
      const sectionIds = ['inicio', 'sobre', 'impacto', 'footer']
      sectionIds.forEach((id) => {
        const el = document.getElementById(id)
        if (!el) return
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) setActiveSection(`#${id}`)
          },
          { threshold: 0.6 }
        )
        observer.observe(el)
        observers.push(observer)
      })
    }

    if (currentPath === '/productos') {
      const el = document.getElementById('beneficios')
      if (el) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection('#beneficios')
            } else {
              setActiveSection('#productos')
            }
          },
          { threshold: 0.6 }
        )
        observer.observe(el)
        observers.push(observer)
      }
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observers.forEach((observer) => observer.disconnect())
    }
  }, [currentPath])

  useEffect(() => {
    const onHashChange = () => setCurrentHash(window.location.hash)
    window.addEventListener('hashchange', onHashChange)
    onHashChange()
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const isActive = (item) => {
    if (item.href === '/productos#beneficios') {
      return activeSection === '#beneficios'
    }

    if (item.href === '/productos') {
      return currentPath === '/productos' && activeSection === '#productos'
    }

    if (item.href === '/' && currentPath === '/') {
      return !['#sobre', '#impacto', '#footer'].includes(activeSection)
    }

    if (item.scrollTo && currentPath === '/') {
      return activeSection === `#${item.scrollTo}`
    }

    return false
  }

  const scrollOrRedirect = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      window.location.href = `/#${id}`
    }
  }

  const baseClasses = 'px-4 py-2 rounded-md transition font-semibold'
  const bgColor = scrolled ? 'bg-white shadow-md' : 'bg-white/10 backdrop-blur'
  const navTextColor = scrolled ? 'text-neutral-800' : 'text-white'
  const mobileTextColor = scrolled ? 'text-neutral-800' : 'text-white'

  const renderNavItem = (item, isMobile = false) => {
    const active = isActive(item)
    const classes = `${isMobile ? 'flex-shrink-0' : ''} ${baseClasses} ${
      active ? 'bg-lime-500 text-white shadow-sm' : 'hover:text-lime-500 text-inherit'
    }`

    return item.scrollTo ? (
      <button
        key={item.name}
        onClick={() => {
          setMobileMenuOpen(false)
          scrollOrRedirect(item.scrollTo)
        }}
        className={classes}
      >
        {item.name}
      </button>
    ) : (
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
          <img src="/img/sgx.png" alt="SGX Logo" className="h-6 sm:h-8 w-auto transition-all" />
        </Link>

        <nav className={`hidden md:flex space-x-2 text-sm font-medium ${navTextColor}`}>
          {navItems.map((item) => renderNavItem(item))}
        </nav>

        <button className={`md:hidden ${navTextColor}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className={`${bgColor} md:hidden border-t border-white/10`}>
          <nav className={`flex overflow-x-auto whitespace-nowrap px-4 py-4 gap-3 text-sm font-semibold ${mobileTextColor}`}>
            {navItems.map((item) => renderNavItem(item, true))}
          </nav>
        </div>
      )}
    </header>
  )
}
