const navigation = {
  soluciones: [
    { name: 'Tecnología & Nueva Energía', href: 'https://es.ankaiglobal.com/new-energy-technology_d23' },
    { name: 'Buses ANKAI', href: 'https://es.ankaiglobal.com/products' },
  ],
  soporte: [
    // { name: 'Contacto Oficial', href: 'https://es.ankaiglobal.com/contact_d2' },
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
    <footer className="relative bg-white text-[#111827] text-sm overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-20 -z-10"
        style={{
          background: 'repeating-radial-gradient(circle, rgba(0,208,132,0.1) 1px, transparent 3px)',
          backgroundSize: '120px 120px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-8">
          <div className="flex-shrink-0 w-full sm:w-1/4 flex justify-center sm:justify-start">
            <img src="/img/logo.png" alt="ANKAI Logo" className="h-14 sm:h-16 w-auto" />
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-6 w-full sm:grid-cols-4 sm:w-3/4 text-left">
            {['soluciones', 'soporte', 'empresa', 'legal'].map((key) => (
              <div key={key}>
                <h3 className="font-semibold text-[#111827] mb-3 capitalize">{key}</h3>
                <ul className="space-y-2 text-gray-600">
                  {navigation[key].map(item => (
                    <li key={item.name}>
                      <a href={item.href} className="hover:text-black">{item.name}</a>
                    </li>
                  ))}
                  {/*
                  Links deshabilitados por estrategia de representación:
                  {key === 'soporte' && (
                    <li>
                      <a href="https://es.ankaiglobal.com/contact_d2" className="hover:text-black">Contacto Oficial</a>
                    </li>
                  )}
                  */}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t mt-8 border-[#00d084]" />

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-xs text-gray-500 text-center sm:text-left">
            © 2024 SGX Chile. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0 text-[#111827] text-lg">
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
