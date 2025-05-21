export default function ProductoCard({ nombre, detalle, imagen }) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-xl transition duration-300 transform hover:scale-105">
      <img src={imagen} alt={nombre} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-4 text-left">
        <h3 className="text-lg font-semibold text-gray-800">{nombre}</h3>
        <p className="text-sm text-gray-600">{detalle}</p>
      </div>
    </div>
  )
}