import { useState } from 'react'
import { PhoneCall, Mail, MessageCircle } from 'lucide-react'

export default function ContactActions() {
  const [mostrarWhatsAppForm, setMostrarWhatsAppForm] = useState(false)
  const [mostrarCorreoForm, setMostrarCorreoForm] = useState(false)
  const [mensajeWsp, setMensajeWsp] = useState('')
  const [asunto, setAsunto] = useState('')
  const [cuerpo, setCuerpo] = useState('')

  const abrirWhatsApp = () => {
    const mensaje = encodeURIComponent(mensajeWsp || '¡Hola! Me interesa conocer más sobre los buses ANKAI.')
    window.open(`https://wa.me/56962365714?text=${mensaje}`, '_blank')
  }

  const abrirCorreo = () => {
    const mailto = `mailto:contacto@sgx.cl?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`
    window.open(mailto, '_blank')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 space-y-4 text-sm font-medium text-white">
      {/* WhatsApp Form */}
      {mostrarWhatsAppForm && (
        <div className="bg-white p-4 rounded-xl shadow-xl w-72 text-black space-y-3">
          <label className="text-sm font-semibold">Mensaje a enviar:</label>
          <textarea
            rows={3}
            value={mensajeWsp}
            onChange={(e) => setMensajeWsp(e.target.value)}
            className="w-full border rounded p-2 text-sm"
            placeholder="Escribe tu consulta..."
          />
          <div className="flex justify-end gap-2">
            <button
              onClick={() => setMostrarWhatsAppForm(false)}
              className="text-gray-500 text-sm hover:underline"
            >
              Cancelar
            </button>
            <button
              onClick={abrirWhatsApp}
              className="bg-[#00d084] text-white px-4 py-1 rounded hover:brightness-110"
            >
              Enviar
            </button>
          </div>
        </div>
      )}

      {/* Correo Form */}
      {mostrarCorreoForm && (
        <div className="bg-white p-4 rounded-xl shadow-xl w-72 text-black space-y-3">
          <label className="text-sm font-semibold">Asunto:</label>
          <input
            type="text"
            value={asunto}
            onChange={(e) => setAsunto(e.target.value)}
            className="w-full border rounded p-2 text-sm"
            placeholder="Consulta ANKAI"
          />
          <label className="text-sm font-semibold">Mensaje:</label>
          <textarea
            rows={3}
            value={cuerpo}
            onChange={(e) => setCuerpo(e.target.value)}
            className="w-full border rounded p-2 text-sm"
            placeholder="Escribe tu mensaje..."
          />
          <div className="flex justify-end gap-2">
            <button
              onClick={() => setMostrarCorreoForm(false)}
              className="text-gray-500 text-sm hover:underline"
            >
              Cancelar
            </button>
            <button
              onClick={abrirCorreo}
              className="bg-[#003b5c] text-white px-4 py-1 rounded hover:brightness-110"
            >
              Enviar
            </button>
          </div>
        </div>
      )}

      {/* Botones principales */}
      <div className="flex flex-col space-y-3">
        <button
          onClick={() => setMostrarWhatsAppForm(!mostrarWhatsAppForm)}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#00d084] shadow-xl hover:scale-105 transition-all"
        >
          <MessageCircle className="w-5 h-5" />
          WhatsApp
        </button>

        <a
          href="tel:+56962365714"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 shadow-xl hover:scale-105 transition-all"
        >
          <PhoneCall className="w-5 h-5" />
          Llamar
        </a>

        <button
          onClick={() => setMostrarCorreoForm(!mostrarCorreoForm)}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#003b5c] shadow-xl hover:scale-105 transition-all"
        >
          <Mail className="w-5 h-5" />
          Correo
        </button>
      </div>
    </div>
  )
}
