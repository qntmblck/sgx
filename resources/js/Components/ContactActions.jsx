// ContactActions.jsx
import { useState } from 'react'
import {
  PhoneCall,
  Mail,
  MessageSquare,
  ChevronLeft,
  X as XIcon
} from 'lucide-react'

export default function ContactActions() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showEmailForm, setShowEmailForm] = useState(false)
  const [showWhatsAppForm, setShowWhatsAppForm] = useState(false)

  const toggleMenu = () => {
    const next = !menuOpen
    setMenuOpen(next)
    if (!next) {
      setShowEmailForm(false)
      setShowWhatsAppForm(false)
    }
  }

  const handleEmailSubmit = e => {
    e.preventDefault()
    const body = e.target.elements.body.value
    window.location.href =
      `mailto:contacto@sgx.cl?subject=Contacto%20SGX&body=${encodeURIComponent(body)}`
  }

  const handleWhatsAppSubmit = e => {
    e.preventDefault()
    const body = e.target.elements.body.value
    window.open(
      `https://api.whatsapp.com/send?phone=56962365714&text=${encodeURIComponent(body)}`,
      '_blank'
    )
  }

  return (
    <div className="fixed bottom-24 right-2 flex flex-col items-center z-50 pointer-events-none">
      {/* Email dialog */}
      {showEmailForm && (
          <div className="absolute bottom-20 right-20 w-56 rounded-3xl border border-slate-200 bg-white p-4 text-sm text-slate-800 shadow-lg pointer-events-auto">
          <div className="flex items-center justify-between mb-2">
            <Mail className="w-5 h-5 text-red-700" />
            <button onClick={() => setShowEmailForm(false)}>
              <XIcon className="w-5 h-5 text-gray-500" />
            </button>
          </div>
          <form onSubmit={handleEmailSubmit} className="space-y-2">
            <textarea
              name="body"
              rows={3}
              placeholder="Escribe tu mensaje..."
              className="w-full border border-gray-300 rounded px-2 py-1 text-sm resize-none"
            />
            <button
              type="submit"
              className="w-full rounded-full bg-red-700 py-2 text-sm font-semibold text-white transition hover:bg-red-800"
            >
              Enviar
            </button>
          </form>
        </div>
      )}

      {/* WhatsApp dialog */}
      {showWhatsAppForm && (
          <div className="absolute bottom-20 right-20 w-56 rounded-3xl border border-slate-200 bg-white p-4 text-sm text-slate-800 shadow-lg pointer-events-auto">
          <div className="flex items-center justify-between mb-2">
            {/* FontAwesome WhatsApp icon */}
            <i className="fa-brands fa-whatsapp w-5 h-5 text-green-500" />
            <button onClick={() => setShowWhatsAppForm(false)}>
              <XIcon className="w-5 h-5 text-gray-500" />
            </button>
          </div>
          <form onSubmit={handleWhatsAppSubmit} className="space-y-2">
            <textarea
              name="body"
              rows={3}
              placeholder="Escribe tu mensaje..."
              className="w-full border border-gray-300 rounded px-2 py-1 text-sm resize-none"
            />
            <button
              type="submit"
              className="w-full bg-[#25d366] text-white py-1 rounded text-sm"
            >
              Enviar
            </button>
          </form>
        </div>
      )}

      {/* action buttons */}
      <div
        className={`
          flex flex-col items-center space-y-3
          transition-all duration-300 ease-out
          ${menuOpen
            ? 'pointer-events-auto opacity-100 -translate-y-20'
            : 'pointer-events-none invisible opacity-0 translate-y-0'}
        `}
        aria-hidden={!menuOpen}
      >
        {/* Call */}
        <a
          href="tel:+56962365714"
          className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:-translate-y-1"
          aria-label="Llamar"
        >
          <PhoneCall className="w-6 h-6" />
        </a>

        {/* Email */}
        <button
          onClick={() => {
            setShowEmailForm(o => !o)
            setShowWhatsAppForm(false)
          }}
          className="w-12 h-12 bg-red-700 text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:-translate-y-1"
          aria-label="Email"
        >
          <Mail className="w-6 h-6" />
        </button>

        {/* WhatsApp */}
        <button
          onClick={() => {
            setShowWhatsAppForm(o => !o)
            setShowEmailForm(false)
          }}
          className="w-12 h-12 bg-[#25d366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          aria-label="WhatsApp"
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      </div>

      {/* main toggle */}
      <button
        onClick={toggleMenu}
        className="
          w-8 h-8
          border border-slate-200 bg-white/90 backdrop-blur-md
          hover:bg-red-50
          text-slate-900 hover:text-red-700
          rounded-full
          flex items-center justify-center
          shadow-2xl
          transition-all duration-200
          active:scale-95
          pointer-events-auto
        "
        aria-label={menuOpen ? 'Cerrar contactos' : 'Abrir contactos'}
      >
        {menuOpen
          ? <XIcon className="w-8 h-8" />
          : <ChevronLeft className="w-8 h-8" />}
      </button>
    </div>
  )
}
