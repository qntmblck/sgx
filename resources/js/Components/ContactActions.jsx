import { useState } from 'react'
import { PhoneCall, Mail } from 'lucide-react'

export default function ContactActions() {
  const [showWhatsAppForm, setShowWhatsAppForm] = useState(false)
  const [whatsAppMessage, setWhatsAppMessage] = useState('')

  const [showEmailForm, setShowEmailForm] = useState(false)
  const [emailSubject, setEmailSubject] = useState('')
  const [emailBody, setEmailBody] = useState('')

  const handleWhatsAppSend = () => {
    const mensaje = encodeURIComponent(whatsAppMessage)
    const url = `https://wa.me/56962365714?text=${mensaje}`
    window.open(url, '_blank')
  }

  const handleEmailSend = () => {
    const subject = encodeURIComponent(emailSubject)
    const body = encodeURIComponent(emailBody)
    const url = `mailto:contacto@sgxchile.cl?subject=${subject}&body=${body}`
    window.location.href = url
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end space-y-3 text-sm">
      {/* WhatsApp */}
      <div className="relative">
        <button
          onClick={() => setShowWhatsAppForm(!showWhatsAppForm)}
          className="flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white rounded-full shadow-xl hover:brightness-110 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            className="w-5 h-5"
          >
            <path d="M16.6 13.9c-.3-.1-1.9-.9-2.2-1s-.5-.1-.7.1-.8 1-1 1.1-.3.1-.6 0c-.3-.1-1.3-.5-2.5-1.7-.9-.9-1.6-2-1.8-2.3s0-.5.1-.6c.1-.1.3-.4.4-.5s.2-.3.3-.5c.1-.2.1-.4 0-.5s-.7-1.8-.9-2.4c-.2-.6-.5-.5-.7-.5H7c-.2 0-.4 0-.6.2s-.8.7-.8 1.8.9 2 1 2.2c.1.2 1.9 3 4.5 4.2 1.6.7 2.2.8 2.9.7.4-.1 1.2-.5 1.4-1.1.2-.5.2-1 .1-1.1-.1-.2-.3-.2-.6-.3zm-4.4 6.7c-1.6 0-3.1-.4-4.4-1.2l-4.8 1.3 1.3-4.7C3.3 14.1 3 12.8 3 11.4 3 6.9 6.9 3 11.5 3c2.1 0 4 .8 5.5 2.3 1.5 1.5 2.3 3.4 2.3 5.5 0 4.6-3.8 8.4-8.4 8.4z" />
          </svg>
          WhatsApp
        </button>
        {showWhatsAppForm && (
          <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-lg p-4 border border-green-200 z-50">
            <textarea
              rows={3}
              placeholder="Escribe tu mensaje..."
              className="w-full border border-gray-300 rounded p-2 text-sm"
              value={whatsAppMessage}
              onChange={(e) => setWhatsAppMessage(e.target.value)}
            />
            <button
              onClick={handleWhatsAppSend}
              className="mt-2 w-full bg-[#25D366] text-white py-1.5 rounded-md font-semibold hover:brightness-110 transition"
            >
              Enviar por WhatsApp
            </button>
          </div>
        )}
      </div>

      {/* Correo */}
      <div className="relative">
        <button
          onClick={() => setShowEmailForm(!showEmailForm)}
          className="flex items-center gap-2 px-4 py-2 bg-[#0072C6] text-white rounded-full shadow-xl hover:brightness-110 transition"
        >
          <Mail className="w-5 h-5" />
          Correo
        </button>
        {showEmailForm && (
          <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-lg p-4 border border-blue-200 z-50">
            <input
              type="text"
              placeholder="Asunto"
              className="w-full mb-2 border border-gray-300 rounded p-2 text-sm"
              value={emailSubject}
              onChange={(e) => setEmailSubject(e.target.value)}
            />
            <textarea
              rows={3}
              placeholder="Cuerpo del mensaje"
              className="w-full border border-gray-300 rounded p-2 text-sm"
              value={emailBody}
              onChange={(e) => setEmailBody(e.target.value)}
            />
            <button
              onClick={handleEmailSend}
              className="mt-2 w-full bg-[#0072C6] text-white py-1.5 rounded-md font-semibold hover:brightness-110 transition"
            >
              Enviar correo
            </button>
          </div>
        )}
      </div>

      {/* Teléfono (último) */}
      <a
        href="tel:+56962365714"
        className="flex items-center gap-2 px-4 py-2 bg-[#2563eb] text-white rounded-full shadow-xl hover:brightness-110 transition"
      >
        <PhoneCall className="w-5 h-5" />
        Llamar
      </a>
    </div>
  )
}
