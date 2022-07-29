import styled from 'styled-components';
import Movie from '../Assets/img/image 3.svg'


export default function Tela03(){
    return(
    <Container>  
        <TopContainer>
            <h2>Selecione o(s) assento(s)</h2>
        </TopContainer>
        <BodyContainer>
         <BoxAssentos>
            <button>01</button>
            <button>01</button>
            <button>01</button>
            <button>01</button>
            <button>01</button>
            <button>01</button>
            <button>01</button>
            <button>01</button>
            <button>01</button>
            <button>01</button>
            <button>01</button>
            <button>01</button>
            <button>01</button>
            <button>01</button>
            <button>01</button>
            <button>01</button>
            <button>01</button>
            <button>01</button>
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
    width: 320px;
    display: flex;
    justify-content: space-between;
    overflow-y: auto;
    `;

 const BoxAssentos   = styled.div`
    
    display: flex;
    
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
        margin: 7px;
    }
 `


