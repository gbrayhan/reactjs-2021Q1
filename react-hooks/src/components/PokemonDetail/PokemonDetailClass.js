import React from "react";
import {
  CardDetails,
  ContainerImage,
  DetailInfo,
  ImagePoke,
  TitleCard,
} from "./PokemonDetail.styled";

class PokemonDetailClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: {},
      loading: true,
    };
  }

  fetchData = async () => {
    this.setState({ loading: true });
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${this.props.selectedPokemon}`
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

      this.setState({ pokemon: loadedPokemon, loading: false, error: null });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.fetchData().then((r) => {});
  }

  render() {
    return (
      <CardDetails>
        <TitleCard>{this.state.pokemon.name}</TitleCard>
        <ContainerImage>
          <ImagePoke
            src={this.state.pokemon.image}
            alt={this.state.pokemon.name}
          />
        </ContainerImage>
        <DetailInfo>
          <p>Height: {this.state.pokemon.height}</p>
          <p>Weight: {this.state.pokemon.weight}</p>
          <p>Type: {this.state.pokemon.type}</p>
          <p>Moves Count: {this.state.pokemon.movesCount}</p>
        </DetailInfo>
      </CardDetails>
    );
  }
}

export default PokemonDetailClass;
