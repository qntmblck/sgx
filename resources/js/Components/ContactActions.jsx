import { useState } from 'react'
import { PhoneCall } from 'lucide-react'

export default function ContactActions() {
  const [showWhatsApp, setShowWhatsApp] = useState(false)
  const [whatsAppMessage, setWhatsAppMessage] = useState('')

  const [showEmail, setShowEmail] = useState(false)
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
    <>
      {/* Sección fija: derecha pantalla */}
      <div className="fixed bottom-24 right-5 z-50 flex flex-col items-end space-y-3 text-sm">

        {/* Llamar */}
        <a
          href="tel:+56962365714"
          className="flex items-center gap-2 px-4 py-2 bg-[#2563eb] text-white rounded-full shadow-xl hover:scale-105 transition"
        >
          <PhoneCall className="w-5 h-5" />
          Llamar
        </a>

        {/* Correo */}
        <div className="relative">
          <button
            onClick={() => {
              setShowEmail(!showEmail)
              setShowWhatsApp(false)
            }}
            className="flex items-center gap-2 px-4 py-2 bg-[#0072C6] text-white rounded-full shadow-xl hover:scale-105 transition"
          >
            <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
              <path d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.586a1 1 0 0 1-.293.707L12 13.414 2.293 6.293A1 1 0 0 1 2 5.586V4z" />
              <path d="M22 8.414l-9.293 6.293a1 1 0 0 1-1.414 0L2 8.414V20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.414z" />
            </svg>
            Correo
          </button>
          {showEmail && (
            <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-lg p-4 border border-blue-200 animate-fade-in">
              <input
                type="text"
                placeholder="Asunto"
                className="w-full mb-2 border border-gray-300 rounded p-2 text-sm"
                value={emailSubject}
                onChange={(e) => setEmailSubject(e.target.value)}
              />
              <textarea
                rows={3}
                placeholder="Mensaje"
                className="w-full border border-gray-300 rounded p-2 text-sm resize-none"
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
      </div>

      {/* WhatsApp: Último, al fondo */}
      <div className="fixed bottom-5 right-5 z-50 text-sm">
        <div className="relative">
          <button
            onClick={() => {
              setShowWhatsApp(!showWhatsApp)
              setShowEmail(false)
            }}
            className="flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white rounded-full shadow-xl hover:scale-105 transition"
          >
            <img src="/img/iconos/whatsapp.svg" alt="WhatsApp" className="w-5 h-5" />
            WhatsApp
          </button>
          {showWhatsApp && (
            <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-lg p-4 border border-green-200 animate-fade-in">
              <textarea
                rows={3}
                placeholder="Escribe tu mensaje"
                className="w-full border border-gray-300 rounded p-2 text-sm resize-none"
                value={whatsAppMessage}
                onChange={(e) => setWhatsAppMessage(e.target.value)}
              />
              <button
                onClick={handleWhatsAppSend}
                className="mt-2 w-full bg-[#25D366] text-white py-1.5 rounded-md font-semibold hover:brightness-110 transition"
              >
                Enviar mensaje
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
