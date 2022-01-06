import React, { useState, useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import GlobalStateContext from "../Context/GlobalStateContext";

export const ProductCard = styled.li`
  list-style: none;
  width: 250px;
  font-family: 'Raleway', sans-serif;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  padding: 5px;
  background-color: #c40000;
  border-radius: 5%;
  border: 2px solid black;
  box-shadow: 10px 10px 5px gray;
`

export const Picture = styled.img`
  display: flex;
  align-content: center;
  justify-content: center;
  width: 80%;
  max-height: 310px;
  background-color: white;
  border-radius: 10px;
  border: 2px solid black;
`

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const BotaoDeEscolha = styled.div`
  border: 2px solid black;
  border-radius: 5px;
  margin: 3px;
  padding: 5px;
  background-color: white;
  width: 90%;
  display: flex;
  justify-content: center;

  &:hover {
  cursor: pointer;
  background-color: gray;
}
`

export const Name = styled.span`
  display: flex;
  justify-content: center;
  font-family: Verdana;
  color: white;
`

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
