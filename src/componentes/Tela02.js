import { Link } from 'react-router-dom';
import styled from 'styled-components';



export default function Tela02(){
    return(
    <Container>  
        <TopContainer>
            <h2>Selecione o horário</h2>
        </TopContainer>
        <BodyContainer>
           <h3>Quinta-feira - 24/06/2021</h3>
           <ContainerHorarios>
           <Link to="/Tela03"> 
             <button>15:00</button>
            </Link>
            <Link to="/Tela03"> 
             <button>15:00</button>
            </Link>
            <Link to="/Tela03"> 
             <button>15:00</button>
            </Link>
            <Link to="/Tela03"> 
             <button>15:00</button>
            </Link>
           </ContainerHorarios>

           <h3>Quinta-feira - 24/06/2021</h3>
           <ContainerHorarios>
            <button>15:00</button>
           </ContainerHorarios>
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
    width: 320px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-y: auto;

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




