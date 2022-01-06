import React, { useState, useEffect, useContext } from "react"
import { useHistory } from "react-router"
import styled from "styled-components"
import PokemonCard from "./PokemonCard"
import GlobalStateContext from "../Context/GlobalStateContext"

const Container = styled.div`
  font-family: 'Raleway', sans-serif;
`

export const HeaderHome = styled.div`
  display: flex;
  width: 98vw;
  height: 5vh;
  background-color: #c40000;
  justify-content: space-between;
  align-items: center; 
`

const Title = styled.h3`
  margin-left: 100px;

  @media(max-width: 815px) {
    margin-left: 20px;
  }
`

const BotaoMudar = styled.div`
  margin-right: 20px;
  border: 2px solid black;
  padding: 4px;
  border-radius: 5px;
  background-color: white;

  &:hover {
  cursor: pointer;
  background-color: gray;
}
`

export const BoxProduto = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 4;

  @media(max-width: 815px) {
    display: flex;
    flex-direction: column;
    margin-left: 15%;
  }
`
export const NextBefore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export default function HomePage() {
  //rotas
  const history = useHistory();
  const goToPokedex = () => {
    history.push("/pokedex");
  };
  //Global State=======================
  // const { pokemons } = useContext(GlobalStateContext)
  const { state, setters } = useContext(GlobalStateContext);
  //===============================================================

  const execPrevious = state.previous ? (
    <li className="page-item">
      <a
        className="page-link"
        onClick={() => setters.getPokemonNames(state.previous)}
        href="#"
      >
        pagina Anterior
      </a>
    </li>
  ) : (
    ""
  );
  const execNext = state.next ? (
    <li className="page-item">
      <a
        className="page-link"
        onClick={() => setters.getPokemonNames(state.next)}
        href="#"
      >
        Próxima pagina de pokemons
      </a>
    </li>
  ) : (
    ""
  );

  return (
    <Container>
      <HeaderHome>
        <Title>Pokedex</Title>
        <BotaoMudar onClick={goToPokedex}>Pokedex</BotaoMudar>
      </HeaderHome>
      
      <BoxProduto>
        {state.pokemons &&
          state.pokemons.map((pokemon) => {
            return <PokemonCard key={pokemon.name} pokemon={pokemon} />;
          })}
      </BoxProduto>
      <NextBefore>
        <div aria-label="Navegação de página exemplo">
          <ul className="pagination">
            {execPrevious}
            {execNext}
          </ul>
        </div>
      </NextBefore>
    </Container>
  );
}
