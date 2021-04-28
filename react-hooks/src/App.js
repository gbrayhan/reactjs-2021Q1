import React from "react";
import PokemonDetailClass from "./components/PokemonDetail/PokemonDetailClass";
import PokemonDetailHook from "./components/PokemonDetail/PokemonDetailHook";

function App() {
  return (
    <>
      <PokemonDetailClass selectedPokemon={"eevee"} />
      <PokemonDetailHook selectedPokemon={"jolteon"} />
      <PokemonDetailHook selectedPokemon={"pikachu"} />
    </>
  );
}

export default App;
