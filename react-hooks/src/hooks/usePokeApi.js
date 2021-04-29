import {useCallback, useEffect, useState} from 'react';

const usePokeApi = (url) => {
  const [pokemon, setPokemon] = useState({})
  const [loading, setLoading] = useState(false)

  const parseDetail = (data) => {
    const dataPokemon = {
      image: `https://img.pokemondb.net/artwork/large/${data.name}.jpg`,
      name: data.name,
      height: data.height,
      weight: data.weight,
      type: data.types[0].type.name,
      movesCount: data.moves.length,
    }
    return dataPokemon;
  }


  const fetchData = useCallback(async () => {
    setLoading(true)
    try {
      const response = await fetch(url);
      const data = await response.json()

      const loadedPokemon = parseDetail(data)
      setPokemon(loadedPokemon)

      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }, [url])

  useEffect(() => {
    fetchData().then(r => {
    })
  }, [fetchData])

  return [loading, pokemon];
}

export default usePokeApi;
