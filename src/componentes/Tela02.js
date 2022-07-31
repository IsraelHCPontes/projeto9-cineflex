import  { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';



export default function Tela02(){

    return(

    <Container>  
        <TopContainer>
            <h2>Selecione o horário</h2>
        </TopContainer>
        <BodyContainer>
            <Times />
        </BodyContainer>
    </Container>  

    )
}


function Times(){
    const [day, setDay] = useState(null);
    const { movieId } = useParams()
    console.log(movieId)

	useEffect(() => {

		const requisicao = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${movieId}/showtimes`);

		requisicao.then(resposta => {
			setDay(resposta.data.days);
		});
	}, []);

   

	if(day === null) {
		return <img src="loading.gif" />;
	}
    return (
        day.map(({weekday, date, showtimes}, index) => <>
        <h3>{weekday} - {date}</h3>
            <ContainerHorarios>
               { showtimes.map(({name}) => <Link to="/Tela03"> 
                 <button>{name}</button>
                </Link>)}
            </ContainerHorarios>
        </>
    ))
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
    width: 320px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;

    h3 {
        font-family: Roboto;
        font-size: 20px;
        font-weight: 400;
        line-height: 23px;
        letter-spacing: 0.02em;
        text-align: left;

    }
   
   `;
 
const ContainerHorarios = styled.div`
    margin-top: 22px;
    margin-bottom: 23px;
    display:flex;
    overflow-y: auto;

    button {
        margin-right: 9px;
        height: 43px;
        min-width: 83px;
        border-radius: 3px;
        background-color: #E8833A;
        border: none;

        font-family: Roboto;
        font-size: 18px;
        font-weight: 400;
        line-height: 21px;
        letter-spacing: 0.02em;
        text-align: center;
        color: #FFFFFF;

    }
`




