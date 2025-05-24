import { useEffect, useState } from 'react'
import { PhoneCall, Mail } from 'lucide-react'

export default function ContactActions() {
  const [showWhatsAppForm, setShowWhatsAppForm] = useState(false)
  const [showEmailForm, setShowEmailForm] = useState(false)
  const [whatsAppMessage, setWhatsAppMessage] = useState('')
  const [emailSubject, setEmailSubject] = useState('')
  const [emailBody, setEmailBody] = useState('')
  const [wasAtBottom, setWasAtBottom] = useState(false)

  const openWhatsApp = () => {
    const message = encodeURIComponent(whatsAppMessage || '¡Hola! Me interesa conocer más sobre los buses ANKAI.')
    window.open(`https://wa.me/56962365714?text=${message}`, '_blank')
  }

  const openEmail = () => {
    const mailto = `mailto:contacto@sgx.cl?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
    window.open(mailto, '_blank')
  }

  const isMobile = () => window.innerWidth < 768

  const openForm = (type) => {
    if (type === 'whatsapp') {
      setShowWhatsAppForm(true)
      setShowEmailForm(false)
    } else {
      setShowEmailForm(true)
      setShowWhatsAppForm(false)
    }
    window.dispatchEvent(new CustomEvent('activate-contacto'))
  }

  const toggleForm = (type) => {
    if (type === 'whatsapp') {
      const next = !showWhatsAppForm
      setShowWhatsAppForm(next)
      if (next) {
        setShowEmailForm(false)
        window.dispatchEvent(new CustomEvent('activate-contacto'))
      } else {
        window.dispatchEvent(new CustomEvent('deactivate-contacto'))
      }
    } else {
      const next = !showEmailForm
      setShowEmailForm(next)
      if (next) {
        setShowWhatsAppForm(false)
        window.dispatchEvent(new CustomEvent('activate-contacto'))
      } else {
        window.dispatchEvent(new CustomEvent('deactivate-contacto'))
      }
    }
  }

  useEffect(() => {
    const handleToggle = (e) => {
      toggleForm(e.detail.tipo)
    }

    const handleScroll = () => {
      const atBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 10

      if (atBottom && !wasAtBottom) {
        setWasAtBottom(true)
        const tipo = isMobile() ? 'whatsapp' : 'correo'
        openForm(tipo)
      }

      if (!atBottom && wasAtBottom) {
        setShowWhatsAppForm(false)
        setShowEmailForm(false)
        setWasAtBottom(false)
        window.dispatchEvent(new CustomEvent('deactivate-contacto'))
      }
    }

    window.addEventListener('toggle-contact-form', handleToggle)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('toggle-contact-form', handleToggle)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [wasAtBottom])

  return (
    <div className="fixed bottom-20 right-6 z-50 text-sm font-medium text-white space-y-4">
      {/* Formulario WhatsApp */}
      {showWhatsAppForm && (
        <div className="bg-[#e5ddd5] p-4 rounded-xl shadow-xl w-80 text-black space-y-3">
          <div className="bg-[#075e54] text-white px-4 py-2 rounded-t-xl">
            <h3 className="text-lg font-semibold">SGX Soporte</h3>
            <p className="text-sm">En línea</p>
          </div>
          <div className="bg-white p-3 rounded-b-xl h-40 overflow-y-auto">
            <p className="bg-[#dcf8c6] p-2 rounded-lg text-sm w-fit ml-auto">
              {whatsAppMessage || '¡Hola! Me interesa conocer más sobre los buses ANKAI.'}
            </p>
            <textarea
              rows={2}
              value={whatsAppMessage}
              onChange={(e) => setWhatsAppMessage(e.target.value)}
              className="w-full border rounded p-2 text-sm mt-3"
              placeholder="Escribe tu mensaje..."
            />
          </div>
          <div className="flex justify-end gap-2 mt-2">
            <button
              onClick={() => {
                setShowWhatsAppForm(false)
                window.dispatchEvent(new CustomEvent('deactivate-contacto'))
              }}
              className="text-gray-500 text-sm hover:underline"
            >
              Cancelar
            </button>
            <button
              onClick={() => {
                openWhatsApp()
                window.dispatchEvent(new CustomEvent('deactivate-contacto'))
              }}
              className="bg-[#25d366] text-white px-4 py-1 rounded hover:brightness-110"
            >
              Enviar
            </button>
          </div>
        </div>
      )}

      {/* Formulario Correo */}
      {showEmailForm && (
        <div className="bg-white p-4 rounded-xl shadow-xl w-80 text-black space-y-3">
          <div className="bg-[#f1f3f4] px-4 py-2 rounded-t-xl">
            <h3 className="text-lg font-semibold">Nuevo mensaje</h3>
          </div>
          <div className="p-3">
            <label className="block text-sm font-semibold mb-1">Para:</label>
            <input
              type="email"
              value="contacto@sgx.cl"
              readOnly
              className="w-full border rounded p-2 text-sm bg-gray-100 mb-3"
            />
            <label className="block text-sm font-semibold mb-1">Asunto:</label>
            <input
              type="text"
              value={emailSubject}
              onChange={(e) => setEmailSubject(e.target.value)}
              className="w-full border rounded p-2 text-sm mb-3"
              placeholder="Consulta ANKAI"
            />
            <label className="block text-sm font-semibold mb-1">Mensaje:</label>
            <textarea
              rows={3}
              value={emailBody}
              onChange={(e) => setEmailBody(e.target.value)}
              className="w-full border rounded p-2 text-sm"
              placeholder="Escribe tu mensaje..."
            />
          </div>
          <div className="flex justify-end gap-2 px-3 pb-3">
            <button
              onClick={() => {
                setShowEmailForm(false)
                window.dispatchEvent(new CustomEvent('deactivate-contacto'))
              }}
              className="text-gray-500 text-sm hover:underline"
            >
              Cancelar
            </button>
            <button
              onClick={() => {
                openEmail()
                window.dispatchEvent(new CustomEvent('deactivate-contacto'))
              }}
              className="bg-[#1a73e8] text-white px-4 py-1 rounded hover:brightness-110"
            >
              Enviar
            </button>
          </div>
        </div>
      )}

      {/* Botones flotantes */}
      <div className="flex flex-col items-end space-y-3">
        {/* Llamar */}
        <a
          href="tel:+56962365714"
          className="flex items-center justify-center px-4 py-2 rounded-full bg-[#005c47] text-white shadow-xl hover:scale-105 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-white" viewBox="0 0 24 24">
            <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.11-.21 11.36 11.36 0 0 0 3.58.57 1 1 0 0 1 1 1v3.61a1 1 0 0 1-1 1A16 16 0 0 1 3 5a1 1 0 0 1 1-1h3.61a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.58 1 1 0 0 1-.21 1.11z"/>
          </svg>
        </a>

        {/* Correo */}
        <button
          onClick={() => toggleForm('correo')}
          className="flex items-center justify-center px-4 py-2 rounded-full bg-[#1a73e8] text-white shadow-xl hover:scale-105 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-white" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" />
          </svg>
        </button>

        {/* WhatsApp */}
        <button
          onClick={() => toggleForm('whatsapp')}
          className="flex items-center justify-center px-4 py-2 rounded-full bg-[#25d366] text-white shadow-xl hover:scale-105 transition"
        >
          <svg viewBox="0 0 32 32" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.003 2.001C8.823 2.001 3 7.825 3 15.004a12.99 12.99 0 0 0 1.804 6.638L3 29l7.576-2.41A12.975 12.975 0 0 0 16.003 28C23.181 28 29 22.177 29 15.004c0-7.18-5.819-13.003-12.997-13.003Zm-.03 23.03a10.96 10.96 0 0 1-5.66-1.565l-.404-.242-4.491 1.43 1.46-4.374-.263-.45a10.97 10.97 0 0 1-1.643-5.789c0-6.05 4.924-10.974 10.974-10.974 6.05 0 10.974 4.924 10.974 10.974S21.993 25.03 15.974 25.03Z"/>
          </svg>
        </button>
      </div>
    </div>
  )
}
