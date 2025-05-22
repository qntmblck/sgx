import { useEffect, useState } from 'react'
import { PhoneCall, Mail } from 'lucide-react'

export default function ContactActions() {
  const [showWhatsAppForm, setShowWhatsAppForm] = useState(false)
  const [showEmailForm, setShowEmailForm] = useState(false)
  const [whatsAppMessage, setWhatsAppMessage] = useState('')
  const [emailSubject, setEmailSubject] = useState('')
  const [emailBody, setEmailBody] = useState('')

  const openWhatsApp = () => {
    const message = encodeURIComponent(whatsAppMessage || '¡Hola! Me interesa conocer más sobre los buses ANKAI.')
    window.open(`https://wa.me/56962365714?text=${message}`, '_blank')
  }

  const openEmail = () => {
    const mailto = `mailto:contacto@sgx.cl?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
    window.open(mailto, '_blank')
  }

  // Ocultar formularios al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowWhatsAppForm(false)
      setShowEmailForm(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed bottom-6 right-6 z-50 space-y-4 text-sm font-medium text-white">
      {/* WhatsApp Chat */}
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
            <button onClick={() => setShowWhatsAppForm(false)} className="text-gray-500 text-sm hover:underline">
              Cancelar
            </button>
            <button onClick={openWhatsApp} className="bg-[#25d366] text-white px-4 py-1 rounded hover:brightness-110">
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
            <button onClick={() => setShowEmailForm(false)} className="text-gray-500 text-sm hover:underline">
              Cancelar
            </button>
            <button onClick={openEmail} className="bg-[#1a73e8] text-white px-4 py-1 rounded hover:brightness-110">
              Enviar
            </button>
          </div>
        </div>
      )}

      {/* Botones de Acción */}
      <div className="flex flex-col items-end space-y-3">
        {/* Llamar */}
        <a
          href="tel:+56962365714"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#005c47] text-white shadow-xl hover:scale-105 transition"
        >
          <PhoneCall className="w-5 h-5" />
          Llamar
        </a>

        {/* Correo */}
        <button
          onClick={() => setShowEmailForm(!showEmailForm)}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a73e8] text-white shadow-xl hover:scale-105 transition"
        >
          <Mail className="w-5 h-5" />
          Correo
        </button>

        {/* WhatsApp */}
        <button
          onClick={() => setShowWhatsAppForm(!showWhatsAppForm)}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#25d366] text-white shadow-xl hover:scale-105 transition"
        >
          <svg
            viewBox="0 0 32 32"
            className="w-5 h-5 fill-white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.003 2.001C8.823 2.001 3 7.825 3 15.004a12.99 12.99 0 0 0 1.804 6.638L3 29l7.576-2.41A12.975 12.975 0 0 0 16.003 28C23.181 28 29 22.177 29 15.004c0-7.18-5.819-13.003-12.997-13.003Zm-.03 23.03a10.96 10.96 0 0 1-5.66-1.565l-.404-.242-4.491 1.43 1.46-4.374-.263-.45a10.97 10.97 0 0 1-1.643-5.789c0-6.05 4.924-10.974 10.974-10.974 6.05 0 10.974 4.924 10.974 10.974S21.993 25.03 15.974 25.03Zm6.284-7.637c-.346-.173-2.053-1.01-2.37-1.125-.316-.116-.547-.173-.778.174-.23.346-.893 1.124-1.096 1.353-.201.23-.403.26-.75.087-.347-.174-1.464-.539-2.788-1.717-1.03-.921-1.724-2.059-1.926-2.406-.202-.346-.02-.533.152-.706.157-.155.347-.403.52-.605.173-.202.23-.347.346-.577.115-.23.058-.433-.03-.605-.087-.173-.778-1.874-1.066-2.567-.28-.673-.563-.58-.778-.59l-.663-.012a1.28 1.28 0 0 0-.922.43c-.316.346-1.21 1.18-1.21 2.87s1.24 3.33 1.412 3.56c.173.23 2.44 3.725 5.912 5.223.827.356 1.473.568 1.977.727.83.265 1.584.228 2.183.139.666-.099 2.053-.838 2.343-1.646.288-.808.288-1.5.202-1.646-.086-.144-.317-.23-.663-.403Z" />
          </svg>
          WhatsApp
        </button>
      </div>
    </div>
  )
}
