import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Movie from '../Assets/img/image 3.svg'


export default function Tela01(){  

    const [items, setItems] = useState(null);

	useEffect(() => {
		const requisicao = axios.get("https://mock-api.driven.com.br/api/v7/cineflex/movies");

		requisicao.then(resposta => {
			setItems(resposta.data);
		});
	}, []);

	if(items === null) {
		return <img src="loading.gif" />;
	}
    return(
    <Container>  
        <TopContainer>
            <h2>Selecione o filme</h2>
        </TopContainer>
        <BodyContainer>
        
			{items.map(items => <Filme Movie={items.posterURL} MovieId={items.id} />)}
		
               
        </BodyContainer>
    </Container>  
    )
}



 function Filme({Movie, MovieId}) {

	return (
	  <BoxMovie>
           <Link to={`/Tela02/${MovieId}`}>
               <img src={Movie}/>
           </Link>
       </BoxMovie>
	);
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
    flex-wrap: wrap;
   
   `;


const BoxMovie = styled.div`
    margin-bottom: 11px;
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

