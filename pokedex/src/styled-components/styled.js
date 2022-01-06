import styled from "styled-components"

export const ContainerPokedex = styled.div`
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
  background-color: lightblue;
  border: 2px solid black;
  border-radius: 5px;
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
`

export const NextBefore = styled.div`
    display: flex;
    align-items: center;
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

    @media(max-width: 815px) {
    width: 90vw;
  }
`

export const AreaStats = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 5px;

    @media(max-width: 815px) {
    flex-direction: column;
  }
`