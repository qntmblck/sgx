// ContactActions.jsx
import { useState, useEffect } from 'react'
import { PhoneCall, Mail, MessageSquare, ChevronLeft } from 'lucide-react'

export default function ContactActions() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Opcional: lógica de auto-apertura al llegar al bottom, formularios, etc.
  // … tu lógica de showWhatsAppForm / showEmailForm aquí si la necesitas …

  return (
    <div className="fixed bottom-6 right-0 flex items-end z-50 pointer-events-none">
      {/* CONTENEDOR DE BOTONES (se desliza) */}
      <div
        className={`
          flex flex-col items-center space-y-3
          transition-transform duration-300 ease-out
          pointer-events-auto
          ${menuOpen ? 'translate-x-0' : 'translate-x-16'}
        `}
      >
        {/* Llamada */}
        <a
          href="tel:+56962365714"
          className="w-12 h-12 bg-[#005c47] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          aria-label="Llamar"
        >
          <PhoneCall className="w-6 h-6" />
        </a>

        {/* Correo */}
        <button
          onClick={() => {/* abrir formulario correo */}}
          className="w-12 h-12 bg-[#1a73e8] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          aria-label="Email"
        >
          <Mail className="w-6 h-6" />
        </button>

        {/* WhatsApp */}
        <button
          onClick={() => {/* abrir formulario WhatsApp */}}
          className="w-12 h-12 bg-[#25d366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          aria-label="WhatsApp"
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      </div>

      {/* BOTÓN PRINCIPAL */}
      <button
        onClick={() => setMenuOpen(open => !open)}
        className="
          w-14 h-14
          bg-white/30 backdrop-blur-md
          hover:bg-black/60 hover:backdrop-blur-none
          text-white
          rounded-l-full
          flex items-center justify-center
          shadow-xl
          transition-colors transition-transform
          active:scale-95
          pointer-events-auto
        "
        aria-label={menuOpen ? 'Cerrar contactos' : 'Abrir contactos'}
      >
        <ChevronLeft
          className={`
            w-6 h-6
            transition-transform duration-300
            ${menuOpen ? 'rotate-180' : ''}
          `}
        />
      </button>
    </div>
  )
}
