import styled from "styled-components"
import { useParams, useNavigate } from 'react-router-dom';


export default function Sucesso({
    name,
    setName,
    cpf,
    setCpf,
    ids,
    setIds,
    nameMovieImg,
    sessaoMovieImg,
    dataMovie,
    assentos}){
        console.log(assentos)
    

    const navigate = useNavigate();
    const { sucesso } = useParams()
    return(
       <Body>
            <Top>
                <h1>Pedido feito com sucesso!</h1>
            </Top>
            <ContainerInfos>
                <Informacoes>
                    <h1>Filme e sessão</h1>
                    <h2>{nameMovieImg}</h2>
                    <h3>{sessaoMovieImg} {dataMovie}</h3>
                </Informacoes>
                <Informacoes>
                    <h1>Ingressos</h1>
                   <Assentos assentos={assentos}/>
                                   </Informacoes>
                <Informacoes>
                    <h1>Comprador</h1>
                    <h2>Nome:{name} </h2>
                    <h3>CPF:{cpf}</h3>
                </Informacoes>
            </ContainerInfos>
        </Body>
    )
}

function Assentos({assentos}){
   return( assentos.map(assentos => <h2>Assento {assentos}</h2>))

}

const Body = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
`

const Top = styled.div`
    margin-top: 67px;
    height: 110px;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    


    h1 {
        font-family: Roboto;
        font-size: 24px;
        font-weight: 700;
        line-height: 28px;
        letter-spacing: 0.04em;
        text-align: center;
        color: #247A6B;


    }

 
`
const ContainerInfos = styled.div``

const Informacoes = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    margin-right: 140px; 
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h1 {
        font-family: Roboto;
        font-size: 24px;
        font-weight: 700;
        line-height: 28px;
        letter-spacing: 0.04em;
        text-align: left;
        margin-bottom: 10px;
    }

    h2{
        font-family: Roboto;
        font-size: 22px;
        font-weight: 400;
        line-height: 26px;
        letter-spacing: 0.04em;
        text-align: left;

    }

    h3{
        font-family: Roboto;
        font-size: 22px;
        font-weight: 400;
        line-height: 26px;
        letter-spacing: 0.04em;
        text-align: left;

    }
    
    
    `