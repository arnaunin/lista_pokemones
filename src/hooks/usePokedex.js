import { useState, useEffect } from 'react'

const usePokedex = () => {
  
  const [pokedex, setPokedex] = useState(() => {
    if (typeof window !== 'undefined') {
      return JSON.parse(localStorage.getItem('pokedex')) || []
    }
    return []
  })

  useEffect(() => {
    localStorage.setItem('pokedex', JSON.stringify(pokedex))
  }, [pokedex])


  const addPokemon = (nombre) => {
    setPokedex([...pokedex, { nombre: nombre, capturado: false }])
  }

  const addManyPokemons = (nombres) => {
    setPokedex([...pokedex, ...nombres.map((pokemon) => ({ nombre: pokemon, capturado: false }))])
  }

  const toggleCapturado = (index) => {
    setPokedex(pokedex.map((p, i) =>
      i === index ? { ...p, capturado: !p.capturado } : p
    ));
  }

  const clearCaptured = () => {
    setPokedex(pokedex.filter(p => !p.capturado))
  }

  return {
    pokedex,
    addPokemon,
    addManyPokemons,
    toggleCapturado,
    clearCaptured
  }

}

export default usePokedex
