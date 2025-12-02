import { useState } from 'react'
import usePokedex from '../hooks/usePokedex';
import Buscador from './Buscador';

const PokemonList = () => {
  
  const {
    pokedex,
    isLoading,
    addPokemon,
    toggleCapturado,
  } = usePokedex()

  console.log(pokedex)

  // Estado para controlar los pokemones que se introducen manualmente
  const [texto, setTexto] = useState('')

  // Estado para el buscador de pokemones
  const [text, setText] = useState('')

  const pokedexFiltrada = pokedex.filter((pokemon) => pokemon.nombre.toLowerCase().includes(text.toLowerCase().trim()))

  const handleAddPokemon = (e) => {
    e.preventDefault()
    if (!texto.trim()) return
    if (!isLoading) addPokemon(texto.toLocaleLowerCase())
    setTexto("")
  }

  return (
    <div className='gestorPokemones flex flex-col items-center gap-8'>
      <h3 className='text-3xl font-bold text-center mt-4 mb-2 text-gray-700'>Lista de Pokemones</h3>
      <Buscador onSearch={setText}/>
      <h5 className='text-2xl font-bold text-center mt-4 mb-2 text-gray-700'>Introduce un Pokemon:</h5>
      <form onSubmit={handleAddPokemon} className='pokemonesForm flex gap-2.5 flex-wrap items-center justify-center'>
        <input className='border border-gray-400 rounded-lg px-3 py-1 focus:ring-2 focus:ring-blue-400 outline-none' type="text" value={texto} placeholder='Agrega un Pokémon...' onChange={(e) => setTexto(e.target.value)}/>
        <button type='submit' className='px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-bold shadow-md transition'>Agregar pokemon a la pokedex</button>
      </form>
      <ul className='listaSinPuntos listaPokemon grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3'>
        {pokedexFiltrada.map((pokemon) => {
          return (
            <li key={pokemon.id}
              onClick={() => toggleCapturado(pokemon.id)}
              className={`
                cursor-pointer px-4 py-2 rounded-full font-medium capitalize
                transition-all duration-300 transform hover:scale-[1.02]
                flex items-center justify-center gap-2
                ${pokemon.capturado 
                  ? "bg-green-300 hover:bg-green-400" 
                  : "bg-white hover:bg-gray-100"}
              `}>
              <span className="capitalize">{pokemon.nombre}</span>
            </li>
          )})}
      </ul>
    </div>
  )
}

export default PokemonList