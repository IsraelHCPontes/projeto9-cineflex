import styled from 'styled-components';
import Movie from '../Assets/img/image 3.svg'


export default function Tela01(){
    return(
    <Container>  
        <TopContainer>
            <h2>Selecione o filme</h2>
        </TopContainer>
        <BodyContainer>
            <Left>
                <BoxMovie>
                    <img src={Movie}/>
                </BoxMovie>
            </Left>
            <Right>
                <BoxMovie></BoxMovie>
            </Right>
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

const Left = styled.div`

`

const Right = styled.div`

`
const BoxMovie = styled.div`
    height: 209px;
    width: 145px;
    left: 30px;
    top: 169px;
    border-radius: 3px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        height: 193px;
        width: 129px;
        left: 38px;
        top: 177px;
        border-radius: 0px;

    }

`

