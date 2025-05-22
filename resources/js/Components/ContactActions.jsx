export default function ContactActions() {
  return (
    <div className="fixed bottom-5 left-5 z-50 flex flex-col space-y-3">
      {/* WhatsApp */}
      <a
        href="https://wa.me/56962365714"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#00d084] text-white rounded-full p-4 shadow-lg hover:scale-110 transition-transform duration-300"
        aria-label="Enviar mensaje por WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
          <path d="M20.52 3.48A11.91 11.91 0 0 0 12.02 0 11.94 11.94 0 0 0 1 11.91a11.77 11.77 0 0 0 1.63 6L0 24l6.3-1.65a12 12 0 0 0 5.7 1.45h.05a11.94 11.94 0 0 0 11.94-11.91 11.82 11.82 0 0 0-3.47-8.41zM12.02 21.78a9.52 9.52 0 0 1-4.83-1.32l-.35-.2-3.73.98 1-3.64-.22-.37a9.47 9.47 0 0 1-1.45-5 9.52 9.52 0 0 1 9.52-9.52 9.43 9.43 0 0 1 6.7 2.78 9.45 9.45 0 0 1 2.8 6.7 9.52 9.52 0 0 1-9.52 9.52z" />
        </svg>
      </a>

      {/* Llamar */}
      <a
        href="tel:+56962365714"
        className="bg-[#00d084] text-white rounded-full p-4 shadow-lg hover:scale-110 transition-transform duration-300"
        aria-label="Llamar por teléfono"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2"
             strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="w-6 h-6">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18
                   2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.72 12.37 12.37 0 0 0 .56 2.57
                   2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.51-1.51a2 2 0 0 1
                   2.11-.45 12.37 12.37 0 0 0 2.57.56A2 2 0 0 1 22 16.92z" />
        </svg>
      </a>
    </div>
  )
}
