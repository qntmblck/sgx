const navigation = {
  soluciones: [
    { name: 'Tecnología & Nueva Energía', href: 'https://es.ankaiglobal.com/new-energy-technology_d23' },
    { name: 'Buses ANKAI', href: 'https://es.ankaiglobal.com/products' },
  ],
  soporte: [
    { name: 'Contacto Oficial', href: 'https://es.ankaiglobal.com/contact_d2' },
    { name: 'Servicio posventa', href: 'https://es.ankaiglobal.com/service_d4' },
  ],
  empresa: [
    { name: 'Acerca de ANKAI', href: 'https://es.ankaiglobal.com/' },
    { name: 'Noticias', href: 'https://es.ankaiglobal.com/news_nc1' },
  ],
  legal: [
    { name: 'Términos y Condiciones', href: 'https://es.ankaiglobal.com/terms-conditions_d12' },
    { name: 'Política de Privacidad', href: 'https://es.ankaiglobal.com/privacy-policy_d12' },
  ],
  social: [
    { name: 'Facebook', href: '#', icon: () => <i className="fa-brands fa-facebook-f" /> },
    { name: 'Instagram', href: '#', icon: () => <i className="fa-brands fa-instagram" /> },
    { name: 'X', href: '#', icon: () => <i className="fa-brands fa-x-twitter" /> },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-white text-[#111827] text-sm">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 border-b border-gray-200 pb-12">
          <div className="flex-shrink-0 w-full md:w-1/4 flex justify-center md:justify-center">
            <img src="/img/logo.png" alt="ANKAI Logo" className="h-12 sm:h-16 w-auto" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-12 w-full md:w-3/4">
            <div>
              <h3 className="font-semibold text-[#111827] mb-3">Soluciones</h3>
              <ul className="space-y-2 text-gray-600">
                {navigation.soluciones.map(item => (
                  <li key={item.name}><a href={item.href} className="hover:text-black">{item.name}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[#111827] mb-3">Soporte</h3>
              <ul className="space-y-2 text-gray-600">
                {navigation.soporte.map(item => (
                  <li key={item.name}><a href={item.href} className="hover:text-black">{item.name}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[#111827] mb-3">Empresa</h3>
              <ul className="space-y-2 text-gray-600">
                {navigation.empresa.map(item => (
                  <li key={item.name}><a href={item.href} className="hover:text-black">{item.name}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[#111827] mb-3">Legal</h3>
              <ul className="space-y-2 text-gray-600">
                {navigation.legal.map(item => (
                  <li key={item.name}><a href={item.href} className="hover:text-black">{item.name}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row items-center justify-between pt-6">
          <p className="text-xs text-gray-500 text-center md:text-left">
            © 2024 SGX Chile. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-[#111827] text-lg">
            {navigation.social.map(item => (
              <a key={item.name} href={item.href} aria-label={item.name} className="hover:text-[#00d084]">
                <item.icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
