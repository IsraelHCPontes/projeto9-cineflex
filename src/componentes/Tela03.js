import styled from 'styled-components';
import  { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';


export default function Tela03({urlMovieImg,nameMovieImg,setNameMovieImg, sessaoMovieImg, setSessaoMovieImg, dataMovie, setDataMovie}){

    const [seats, setSeats] = useState([]);
    const { sessaoId } = useParams()
    
    
	useEffect(() => {

		const requisicao = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${sessaoId}/seats`);
        
		requisicao.then(resposta => {
			setSeats(resposta.data.seats);
            setNameMovieImg(resposta.data.movie.title);
            setSessaoMovieImg(resposta.data.day.weekday);
            setDataMovie(resposta.data.day.date);
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
        <Bottom>
            <BoxMovie>
                <img src={urlMovieImg}/>
             </BoxMovie>
             <Boxtexto>
                <h1>{nameMovieImg}</h1>
                <h3>{sessaoMovieImg} - {dataMovie}</h3>
             </Boxtexto>
            
        </Bottom>
    </Container>  
    )
}




const Container =styled.div`
    margin-top: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
        font-family: Roboto;
        font-size: 25px;
        font-weight: 400;
        line-height: 30px;
        letter-spacing: 0em;
        text-align: left;
        color: #293845;
        margin-left: 14px;

    }

    h3{
        font-family: Roboto;
        font-size: 23px;
        font-weight: 400;
        line-height: 30px;
        letter-spacing: 0em;
        text-align: left;
        color: #293845;
        margin-left: 14px;
        margin-left: 14px;
    } 


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
const Bottom = styled.div`
height: 117px;
width: 100%;
left: 0px;
bottom: 0px;
border-radius: 0px;
background: #DFE6ED;
border: 1px solid #9EADBA;
display: flex;
align-items: center;
position: fixed;
`;

const BoxMovie = styled.div`
    margin-left: 10px;
    margin-bottom: 11px;
    height: 89px;
    width: 64px;
    border-radius: 3px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        height: 72px;
        width: 48px;
        left: 18px;
        top: 782px;
        border-radius: 0px;


    }

`

const Boxtexto = styled.div`
    height: 89px;
    width: 287px;
    left: 88px;
    top: 774px;
    display:flex;
    flex-direction: column;
    justify-content: center;

`
