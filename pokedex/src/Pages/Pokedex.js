import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { ContainerPokedex, HeaderHome, Title, BotaoMudar, BoxProduto} from '../styled-components/styled'
import PokemonCard from "./PokemonCard";
import GlobalStateContext from "../Context/GlobalStateContext";

export default function Pokedex() {
  //Rotas pages =================================
  const history = useHistory();
  const goBack = () => {
    history.goBack()
  }

  //Global State ===============================
  const { state } = useContext(GlobalStateContext)

  return (
    <ContainerPokedex>
      <HeaderHome>
        <Title>
          Meus pokémon
        </Title>
        <BotaoMudar onClick={goBack}>Voltar</BotaoMudar>
      </HeaderHome>
      

      <BoxProduto>
        {state.pokedex &&
          state.pokedex.map((pokemon) => {
            return (
              <PokemonCard isPokedex key={pokemon.name} pokemon={pokemon} />
            );
          })}
      </BoxProduto>
    </ContainerPokedex>
  );
}
