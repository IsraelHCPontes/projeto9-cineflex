import styled from 'styled-components';
import  { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';


export default function Tela03(){

    const [seats, setSeats] = useState([]);
    const { sessaoId } = useParams()
    
    
	useEffect(() => {

		const requisicao = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${sessaoId}/seats`);
        
		requisicao.then(resposta => {
			setSeats(resposta.data.seats);
            console.log(seats)
		});
	}, []);

    return(
    <Container>  
        <TopContainer>
            <h2>Selecione o(s) assento(s)</h2>
        </TopContainer>
        <BodyContainer>
         <BoxAssentos>
          {seats.map(({name})=><button>{name}</button>)}
         </BoxAssentos>
        </BodyContainer>
    </Container>  
    )
}




const Container =styled.div`
    margin-top: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;

const TopContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.04em;
    text-align: center;
`;

const BodyContainer = styled.div`
    margin-top: 50px;
    width: 380px;
    display: flex;
    justify-content: space-between;
    
    `;

 const BoxAssentos   = styled.div`
    
    display: flex;
    flex-wrap: wrap;
    
    button {
        
        height: 26px;
        width: 26px;
        border-radius: 12px;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #808F9D;
        background-color: #C3CFD9;
        margin: 8px 6px;
    }
 `


