import React, { useState, useContext } from "react"
import { useHistory } from "react-router-dom"
import GlobalStateContext from "../Context/GlobalStateContext"
import { ProductCard, Card, Picture, Name, Options, BotaoDeEscolha } from "../styled-components/styled";

const PokemonCard = (props) => {
  //Global States
  const { state, setters } = useContext(GlobalStateContext)

  //history
  const history = useHistory();
  const goToDetails = (pokemonName) => {
    history.push("/details/" + pokemonName);
  }

  //funções
  const addToPokedex = () => {
    const pokeIndex = state.pokemons.findIndex(
      (item) => item.name === props.pokemon.name
    );

    const newPokemonsList = [...state.pokemons];
    newPokemonsList.splice(pokeIndex, 1);
    const orderedPokemons = newPokemonsList.sort((a, b) => {
      return a.id - b.id;
    });

    const newPokedexList = [...state.pokedex, props.pokemon];
    const orderedPokedex = newPokedexList.sort((a, b) => {
      return a.id - b.id;
    });

    state.setPokedex(orderedPokedex);
    state.setPokemons(orderedPokemons);

    console.log(orderedPokedex);
  };

  const removeFromPokedex = () => {
    const pokeIndex = state.pokedex.findIndex(
      (item) => item.name === props.pokemon.name
    );

    const newPokedexList = [...state.pokedex];
    newPokedexList.splice(pokeIndex, 1);
    const orderedPokedex = newPokedexList.sort((a, b) => {
      return a.id - b.id;
    });

    const newPokemonsList = [...state.pokemons, props.pokemon];
    const orderedPokemons = newPokemonsList.sort((a, b) => {
      return a.id - b.id;
    });

    state.setPokedex(orderedPokedex);
    state.setPokemons(orderedPokemons);
  };

  return (
    <ProductCard>
      <Card>
        <Picture src={props.pokemon.sprites.front_default} />
        <Name>{props.pokemon.name.toUpperCase()}</Name>
        <Options>
          <BotaoDeEscolha onClick={props.isPokedex ? removeFromPokedex : addToPokedex}>
            {props.isPokedex ? "Remover da Pokédex" : "Adicionar a Pokédex"}
          </BotaoDeEscolha>
          <BotaoDeEscolha onClick={() => goToDetails(props.pokemon.name)}>
            Ver detalhes
          </BotaoDeEscolha>
        </Options>
      </Card>
    </ProductCard>
  );
};

export default PokemonCard;
