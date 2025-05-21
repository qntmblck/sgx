export default function Categorias({ categoriaSeleccionada, setCategoriaSeleccionada }) {
  const categorias = [
    'Todos',
    'G6 Eléctrico',
    'G6 Diésel Euro VI',
    'G9 Eléctrico',
    'G9 Diésel Euro VI',
    'A9 Eléctrico',
    'K7 Eléctrico'
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-10">
      {categorias.map((cat) => (
        <button
          key={cat}
          onClick={() => setCategoriaSeleccionada(cat)}
          className={`px-4 py-1 rounded-full border text-sm font-medium transition ${
            categoriaSeleccionada === cat
              ? 'bg-[#149e60] text-white border-[#149e60]'
              : 'bg-white text-gray-700 border-gray-300 hover:border-[#149e60]'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
