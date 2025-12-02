const Buscador = ({ onSearch }) => {
  return (
    <div>
      <input 
        type="text"
        placeholder="Busca un Pokémon..."
        className='border border-gray-400 rounded-lg px-3 py-1 focus:ring-2 focus:ring-blue-400 outline-none'
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  )
}

export default Buscador
