import { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import axios from "axios"
import { BotaoMudar, ContainerPokedex, ImageConteiner, Img, HeaderDetails, Container, ContainerBotoes, Title, ContainerDetails, AreaStats } from "../styled-components/styled"


export default function DetailsPokemons() {
  const [stats, setStats] = useState([]);
  const [types, setTypes] = useState([]);
  const [moves, setMoves] = useState([]);
  const [imageFront, setImageFront] = useState("");
  const [imageBack, setImageBack] = useState("");
  const { name } = useParams();

  const history = useHistory();
  const goToHome = () => {
    history.push("/");
  };
  const goToPokedex = () => {
    history.push("/pokedex");
  };

  const detailsPokemon = () => {
    const url = "https://pokeapi.co/api/v2/pokemon/" + name;
    axios
      .get(url, {})
      .then((resp) => {
        setStats(resp.data.stats);
        setTypes(resp.data.types);
        setMoves(resp.data.moves);
        formsPokemon(resp.data.forms[0].url);
      })
      .catch((error) => {
        alert("Erro ao exibir detalhes");
      });
  };

  const formsPokemon = (urlForms) => {
    axios
      .get(urlForms, {})
      .then((resp) => {
        setImageFront(resp.data.sprites.front_default);
        setImageBack(resp.data.sprites.back_default);
      })
      .catch((error) => {
        alert("Erro ao exibir forms");
      });
  };

  useEffect(() => {
    detailsPokemon();
  }, []);

  return (
    <ContainerPokedex>
      <HeaderDetails>
        <Title>{name.toUpperCase()}</Title>
        <ContainerBotoes>
          <BotaoMudar onClick={goToHome}>Voltar</BotaoMudar>
          <BotaoMudar onClick={goToPokedex}>Pokedéx</BotaoMudar>
        </ContainerBotoes>        
      </HeaderDetails>

      <ContainerDetails>
        <ImageConteiner>
          <Img src={imageFront} />
          <Img src={imageBack} />
        </ImageConteiner>
        <AreaStats>
          <div>
            <h4>Stats</h4>
            {stats.map((stat) => {
              return (
                <div>
                  <span>
                    <b>{stat.stat.name}: </b>
                  </span>
                  <span>{stat.base_stat}</span>
                </div>
              );
            })}
          </div>
          <div>
            <h4>Tipo</h4>
            {types.map((type) => {
              return <div>{type.type.name}</div>;
            })}
          </div>
          <div>
            <h4>Principais ataques</h4>
            {moves.slice(0, 4).map((move) => {
              return <div>{move.move.name}</div>;
            })}
          </div>
        </AreaStats>        
      </ContainerDetails>
    </ContainerPokedex>
  );
}
