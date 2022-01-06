import React, { useState, useEffect, useContext } from "react"
import { useHistory } from "react-router"
import PokemonCard from "./PokemonCard"
import GlobalStateContext from "../Context/GlobalStateContext"
import { ContainerPrincipal, HeaderHome, Title, BotaoMudar, BoxProduto, NextBefore } from "../styled-components/styled"

export default function HomePage() {
  //rotas
  const history = useHistory();
  const goToPokedex = () => {
    history.push("/pokedex");
  }

  //Global State=======================
  const { state, setters } = useContext(GlobalStateContext)

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
  )

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
  )

  return (
    <ContainerPrincipal>
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
    </ContainerPrincipal>
  )
}
