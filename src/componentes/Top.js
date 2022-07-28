import styled from 'styled-components';

export default function Top (){
    return(
        <Container>
             <h1>CINEFLEX</h1> 
        </Container>
        )
}


const Container = styled.div`
    width: 100%;
    height: 67px;
    width: 100%;
    left: 0px;
    top: 0px;
    background: #C3CFD9;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 34px;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 0em;
    color: #E8833A;
    position: fixed;
`;

