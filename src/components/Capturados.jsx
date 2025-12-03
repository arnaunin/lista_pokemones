import usePokedex from '../hooks/usePokedex'

const Capturados = () => {

  const { pokedex } = usePokedex()

  return (
    <div className='flex flex-col items-center'>
      <h3 className='text-3xl md:text-4xl font-bold text-center mb-8 text-gray-700'>Pokemones capturados</h3>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {pokedex.filter((pokemon) => pokemon.capturado === true).map((pokemon) => (
          <li
            key={pokemon.id}
            className="bg-yellow-400 cursor-pointer shadow-md rounded-2xl p-4 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <img
              src={pokemon.image_url}
              alt={pokemon.nombre}
              className="w-24 h-24 md:w-32 md:h-32 object-contain mb-2"
            />
            <p className="text-center font-semibold text-gray-800">{pokemon.nombre}</p>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default Capturados