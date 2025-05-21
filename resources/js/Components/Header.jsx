import { useState, useEffect } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navItems = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Nosotros', href: '#sobre' },
  { name: 'Electromovilidad', href: '#electromovilidad' },
  { name: 'Productos', href: '/productos' },
  { name: 'Servicios', href: '/servicios' },
  { name: 'Contacto', href: '/contacto' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const bgColor = scrolled ? 'bg-white shadow-md' : 'bg-transparent'
  const navTextColor = scrolled ? 'text-[#111827]' : 'text-white'
  const mobileBgColor = scrolled ? 'bg-white' : 'bg-transparent'
  const mobileTextColor = scrolled ? 'text-[#111827]' : 'text-white'

  return (
    <header className={`fixed top-0 w-full z-50 transition duration-300 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#inicio" className="flex items-center space-x-2">
          <img src="/img/sgx.png" alt="SGX Logo" className="h-8 w-auto sm:h-9" />
        </a>
        <nav className={`hidden md:flex space-x-6 text-sm font-medium ${navTextColor}`}>
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="hover:text-[#00d084] transition">
              {item.name}
            </a>
          ))}
        </nav>
        <button
          className={`md:hidden ${navTextColor}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className={`md:hidden ${mobileBgColor} border-t shadow-sm`}>
          <nav className={`flex flex-wrap justify-center px-4 py-4 gap-6 text-base font-medium ${mobileTextColor}`}>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#00d084] transition"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
