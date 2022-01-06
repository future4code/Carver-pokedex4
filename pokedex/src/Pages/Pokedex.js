import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import GlobalStateContext from "../Context/GlobalStateContext";

const Container = styled.div`

`;

export const BoxProduto = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 4;
`;

export default function Pokedex() {
  //Rotas pages =================================
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };

  //Global State ===============================
  const { state, setter } = useContext(GlobalStateContext);

  return (
    <Container>
      <button onClick={goBack}>Voltar</button>

      <BoxProduto>
        {state.pokedex &&
          state.pokedex.map((pokemon) => {
            return (
              <PokemonCard isPokedex key={pokemon.name} pokemon={pokemon} />
            );
          })}
      </BoxProduto>
    </Container>
  );
}
