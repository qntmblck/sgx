export default function ProductoCard({ categoriaSeleccionada }) {
  const productos = [
    {
      modelo: 'G6 Eléctrico',
      categoria: 'G6 Eléctrico',
      energia: 'Eléctrico',
      largo: '6.5 m',
      pasajeros: '13+1',
      imagen: '/img/buses/g6-electric.jpg'
    },
    {
      modelo: 'G6 Diésel Euro VI',
      categoria: 'G6 Diésel Euro VI',
      energia: 'Diésel Euro VI',
      largo: '6.6 m',
      pasajeros: '23',
      imagen: '/img/buses/g6-diesel.jpg'
    },
    {
      modelo: 'G9 Eléctrico 8.5m',
      categoria: 'G9 Eléctrico',
      energia: 'Eléctrico',
      largo: '8.5 m',
      pasajeros: '15–30',
      imagen: '/img/buses/g9-electric-85.jpg'
    },
    {
      modelo: 'G9 Eléctrico 10.5m',
      categoria: 'G9 Eléctrico',
      energia: 'Eléctrico',
      largo: '10.5 m',
      pasajeros: '19–39',
      imagen: '/img/buses/g9-electric-105.jpg'
    },
    {
      modelo: 'G9 Eléctrico 12.0m',
      categoria: 'G9 Eléctrico',
      energia: 'Eléctrico',
      largo: '12.0 m',
      pasajeros: '34–38',
      imagen: '/img/buses/g9-electric-120.jpg'
    },
    {
      modelo: 'G9 Diésel Euro VI 10.5m',
      categoria: 'G9 Diésel Euro VI',
      energia: 'Diésel Euro VI',
      largo: '10.5 m',
      pasajeros: 'N/D',
      imagen: '/img/buses/g9-diesel-105.jpg'
    },
    {
      modelo: 'G9 Diésel Euro VI 12.0m',
      categoria: 'G9 Diésel Euro VI',
      energia: 'Diésel Euro VI',
      largo: '12.0 m',
      pasajeros: 'N/D',
      imagen: '/img/buses/g9-diesel-120.jpg'
    },
    {
      modelo: 'A9 Eléctrico 8.2m',
      categoria: 'A9 Eléctrico',
      energia: 'Eléctrico',
      largo: '8.2 m',
      pasajeros: '29',
      imagen: '/img/buses/a9-electric-82.jpg'
    },
    {
      modelo: 'A9 Eléctrico 11.3m',
      categoria: 'A9 Eléctrico',
      energia: 'Eléctrico',
      largo: '11.3 m',
      pasajeros: 'N/D',
      imagen: '/img/buses/a9-electric-113.jpg'
    },
    {
      modelo: 'K7 Eléctrico 7.1m',
      categoria: 'K7 Eléctrico',
      energia: 'Eléctrico',
      largo: '7.1 m',
      pasajeros: 'N/D',
      imagen: '/img/buses/k7-electric.jpg'
    }
  ];

  const productosFiltrados =
    categoriaSeleccionada === 'Todos'
      ? productos
      : productos.filter((p) => p.categoria === categoriaSeleccionada);

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Modelos Disponibles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {productosFiltrados.map((prod, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition duration-300 overflow-hidden"
          >
            <img
              src={prod.imagen}
              alt={prod.modelo}
              className="w-full h-44 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{prod.modelo}</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li><strong>Tipo:</strong> {prod.energia}</li>
                <li><strong>Largo:</strong> {prod.largo}</li>
                <li><strong>Capacidad:</strong> {prod.pasajeros}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
