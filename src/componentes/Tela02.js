import  { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';



export default function Tela02({urlMovieImg, setUrlMovieImg, nameMovieImg,setNameMovieImg}){
  
   
    console.log(urlMovieImg)
    
    return(

    <Container>  
        <TopContainer>
            <h2>Selecione o horário</h2>
        </TopContainer>
        <BodyContainer>
            <Times setUrlMovieImg={setUrlMovieImg} setNameMovieImg={setNameMovieImg}/>
        </BodyContainer>
        <Bottom>
            <BoxMovie>
                <img src={urlMovieImg}/>
             </BoxMovie>
             <h1>{nameMovieImg}</h1>
        </Bottom>
    </Container>  

    )
}


function Times({setUrlMovieImg,setNameMovieImg}){
    const [day, setDay] = useState(null);
    const { movieId } = useParams()
    

	useEffect(() => {

		const requisicao = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${movieId}/showtimes`);

		requisicao.then(resposta => {
			setDay(resposta.data.days);setUrlMovieImg(resposta.data.posterURL);setNameMovieImg(resposta.data.title)
            
		});
	}, []);

   
    return (
	(day === null) ? <img src="caregando..." /> :
        day.map(({weekday, date, showtimes}, index) => <>
        <h3>{weekday} - {date}</h3>
            <ContainerHorarios>
               { showtimes.map(({name, id}) => <Link to={`/Tela03/${id}`}> 
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

    h1{
        font-family: Roboto;
        font-size: 26px;
        font-weight: 400;
        line-height: 30px;
        letter-spacing: 0em;
        text-align: left;
        color: #293845;
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
    margin-bottom: 120px;
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
        margin-bottom: 10px;
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

