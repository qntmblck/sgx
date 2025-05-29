import BeneficioDetalle from './BeneficioDetalle'

const beneficios = [
  { titulo: 'Chasis Monocasco', descripcion: 'Estructura 3 a 6 veces más resistente. Reducción de peso del 8%.', imagen: '/img/iconos/monocasco.png' },
  { titulo: 'Controlador 5 en 1', descripcion: 'Control de motor, dirección, aire, distribución y CC.', imagen: '/img/iconos/controlador.png' },
  { titulo: 'Protección IP67 + EMC', descripcion: 'Sistema sellado. Detección de humo y monitoreo térmico.', imagen: '/img/iconos/proteccion.png' },
  { titulo: 'Batería Fosfato-Litio', descripcion: 'Mayor densidad energética y vida útil. -800 kg.', imagen: '/img/iconos/bateria.png' },
  // Puedes continuar agregando los 21 beneficios aquí...
]

export default function ListaBeneficios() {
  return (
    <section className="px-6 py-12 max-w-6xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2">
      {beneficios.map((item, i) => (
        <BeneficioDetalle key={i} {...item} />
      ))}
    </section>
  )
}
