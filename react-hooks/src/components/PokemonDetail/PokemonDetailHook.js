import React, { useEffect, useState } from "react";
import {
  CardDetails,
  ContainerImage,
  DetailInfo,
  ImagePoke,
  TitleCard,
} from "./PokemonDetail.styled";

const PokemonDetailHook = (props) => {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState({});

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${props.selectedPokemon}`
      );

      const pokeData = await response.json();
      const loadedPokemon = {
        image: `https://img.pokemondb.net/artwork/large/${pokeData.name}.jpg`,
        name: pokeData.name,
        height: pokeData.height,
        weight: pokeData.weight,
        type: pokeData.types[0].type.name,
        movesCount: pokeData.moves.length,
      };
      setLoading(false);
      setPokemon(loadedPokemon);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData().then(() => {});
  });

  return (
    <>
      {loading && (
        <CardDetails>
          <TitleCard>{pokemon.name}</TitleCard>
          <ContainerImage>
            <ImagePoke src={pokemon.image} alt={pokemon.name} />
          </ContainerImage>
          <DetailInfo>
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
            <p>Type: {pokemon.type}</p>
            <p>Moves Count: {pokemon.movesCount}</p>
          </DetailInfo>
        </CardDetails>
      )}
    </>
  );
};
export default PokemonDetailHook;
