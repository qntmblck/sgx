import { PhoneCall, MessageCircle } from 'lucide-react'

export default function ContactActions() {
  const mensaje = encodeURIComponent(
    '¡Hola! Me interesa conocer más sobre los buses eléctricos ANKAI que representa SGX en Chile.'
  )
  const whatsappURL = `https://wa.me/56962365714?text=${mensaje}`

  return (
    <div className="fixed bottom-5 left-5 z-50 flex flex-col items-center space-y-3">
      {/* WhatsApp */}
      <a
        href={whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 flex items-center justify-center rounded-full bg-[#00d084] text-white shadow-xl hover:scale-110 transition-transform duration-300"
        aria-label="Enviar WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Llamar */}
      <a
        href="tel:+56962365714"
        className="w-14 h-14 flex items-center justify-center rounded-full bg-[#00d084] text-white shadow-xl hover:scale-110 transition-transform duration-300"
        aria-label="Llamar por teléfono"
      >
        <PhoneCall className="w-6 h-6" />
      </a>
    </div>
  )
}
