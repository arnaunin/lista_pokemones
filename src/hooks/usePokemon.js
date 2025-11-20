import { useState, useEffect } from 'react'

const usePokemon = (url) => {
    const [pokemones, setPokemones] = useState([])
    const [loading, setLoading] = useState(true) 
    const [error, setError] = useState(null)

    useEffect(() => {
        async function load() {
            try {
                const res = await fetch(url)
                if (!res.ok) throw new Error ("Error al cargar los pokemones")
                const data = await res.json()
                setPokemones(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        load()
    }, [url])

    return { pokemones, loading, error }
}

export default usePokemon