import React, { useState, useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import GlobalStateContext from "../Context/GlobalStateContext";

export const ProductCard = styled.li`
  list-style: none;
  width: 250px;
`;
export const Card = styled.div`
  display: grid;
  margin: 10px;
  padding: 5px;
  background-color: yellow;
  border-radius: 5%;
`;
export const Picture = styled.img`
  display: flex;
  align-content: center;
  justify-content: center;
  width: 80%;
  max-height: 310px;
`;
export const Button = styled.button``;
export const Name = styled.span`
  display: flex;
  justify-content: center;
`;

const PokemonCard = (props) => {
  //Global States=============================
  const { state, setters } = useContext(GlobalStateContext);

  // const [pokemons, setPokemons] = useState ([])
  // const [pokedex, setPokedex] = useState ([])

  const history = useHistory();
  const goToDetails = (pokemonName) => {
    history.push("/details/" + pokemonName);
  };

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
        <Name>{props.pokemon.name}</Name>
        <div>
          <button onClick={props.isPokedex ? removeFromPokedex : addToPokedex}>
            {props.isPokedex ? "Remover da Pokédex" : "Adicionar a Pokédex"}
          </button>
          <button onClick={() => goToDetails(props.pokemon.name)}>
            Ver detalhes
          </button>
        </div>
      </Card>
    </ProductCard>
  );
};

export default PokemonCard;
