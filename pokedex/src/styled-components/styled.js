import styled from "styled-components"
import background from '../Assets/pokemonposter.png'

export const ContainerPokedex = styled.div`
  font-family: 'Raleway', sans-serif;
  background-image: url(${background});
  background-size: 110%;
  background-position: center center;
  height: 100vh;

  @media(max-width: 815px) {
    background-size: 250%;
    background-position: center center;
  }
`

export const HeaderHome = styled.div`
  display: flex;
  width: 98vw;
  height: 5vh;
  background-color: #c40000;
  justify-content: space-between;
  align-items: center; 
`

export const Title = styled.h3`
  margin-left: 100px;
  color: white;

  @media(max-width: 815px) {
    margin-left: 20px;
  }
`
export const BotaoMudar = styled.div`
  margin-right: 20px;
  border: 2px solid black;
  padding: 4px;
  border-radius: 5px;
  background-color: white;

  &:hover {
  cursor: pointer;
  background-color: gray;
  color: white;
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
    background-size: 250%;
    background-position: center center;
  }
`

export const BoxPokedex = styled.div`
  height: 97vh;
`

export const Container = styled.main`
  height: 80vh;
  display: flex;
  justify-content: space-between;
`;

export const ImageConteiner = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
  padding: 5px;
`
export const Img = styled.img`
  height: 15vh;
  background-color: whitesmoke;
  opacity: 0.95;
  border: 2px solid black;
  border-radius: 5px;
  margin: 10px;
`

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

export const BotaoDeEscolha = styled.div`
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
  color: white;
}
`

export const Name = styled.span`
  display: flex;
  justify-content: center;
  font-family: Verdana;
  color: white;
`

export const ContainerPrincipal = styled.div`
  font-family: 'Raleway', sans-serif;
  background-image: url(${background});
  background-size: 110%;
  background-position: center center;

  @media(max-width: 815px) {
    background-size: 250%;
    background-position: center center;
  }
`

export const NextBefore = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
`

export const HeaderDetails = styled.div`
    display: flex;
    width: 98vw;
    height: 5vh;
    background-color: #c40000;
    align-items: center; 
    justify-content: space-between;
`

export const ContainerBotoes = styled.div`
    display: flex;
`

export const ContainerDetails = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid black;
    border-radius: 5px;
    margin: 5px;
    padding: 5px;
    width: 97vw;
    background-color: #c40000;
    background-size: 4%;
    color: white;

    @media(max-width: 815px) {
    width: 90vw;
    background-size: 20%;
  }
`

export const AreaStats = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 5px;
    border: 2px solid black;
    background-color: white;
    opacity: 0.8;
    color: black;
    font-weight: bold;
    padding: 10px;

    @media(max-width: 815px) {
    flex-direction: column;
  }
`

export const Pages = styled.div`
  border: 2px solid black;
  border-radius: 5px;
  padding: 5px;
  text-decoration: none;
  color: black;
  margin: 5px;
  background-color: white;
  
  &:hover {
  cursor: pointer;
  background-color: gray;
  color: white;
}
`