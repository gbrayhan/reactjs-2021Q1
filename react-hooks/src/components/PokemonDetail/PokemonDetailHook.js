import React, { useEffect, useState } from "react";
import {
  CardDetails,
  ContainerImage,
  DetailInfo,
  ImagePoke,
  TitleCard,
} from "./PokemonDetail.styled";
import usePokeApi from "../../hooks/usePokeApi";

const PokemonDetailHook = (props) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${props.selectedPokemon}`;
  const [loading, pokemon] = usePokeApi(url, false)
  return (
    <>
      {!loading && (
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
