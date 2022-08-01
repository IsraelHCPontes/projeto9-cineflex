import styled from 'styled-components';
import  { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';



export default function Tela03({
    urlMovieImg,
    nameMovieImg,
    setNameMovieImg,
    sessaoMovieImg,
    setSessaoMovieImg,
    dataMovie,
    setDataMovie,
    name,
    setName,
    cpf,
    setCpf,
    ids,
    setIds,
    assentos,
    setAssentos
    }){

    
    const [seats, setSeats] = useState([]);
    const { sessaoId } = useParams()
     
    const navigate = useNavigate(); 

    function handleForm(e){
        e.preventDefault()

     const requisicao = axios.post("https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many", {
            ids: ids,
            name: name,
            cpf: cpf })
            requisicao.then(()=> navigate("/sucesso"))
            requisicao.catch(()=> console.log('deu ruim'))
    }

	useEffect(() => {

		const requisicao = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${sessaoId}/seats`);
        
		requisicao.then(resposta => {
			setSeats(resposta.data.seats);
            setNameMovieImg(resposta.data.movie.title);
            setSessaoMovieImg(resposta.data.day.weekday);
            setDataMovie(resposta.data.name);
            
		});
	}, []);

    return(
    <Container>  
        <TopContainer>
            <h2>Selecione o(s) assento(s)</h2>
        </TopContainer>
        <BodyContainer>
         <BoxAssentos>
          {seats.map((seats)=> <Assentos names={seats.name} isAvailable={seats.isAvailable} id={seats.id} assentos={assentos} setAssentos={setAssentos }  ids={ids} setIds={setIds}/>)}
         </BoxAssentos>
         <BoxExemplos>
            <ContainerExempos><Selecionado/><h4>Selecionado</h4></ContainerExempos>
            <ContainerExempos><Disponivel/><h4>Disponivel</h4></ContainerExempos>
            <ContainerExempos><Indisponivel/><h4>Indisponivel</h4></ContainerExempos>
         </BoxExemplos>
         <form onSubmit={handleForm}>
            <label for='forName'>Nome do comprador:</label>
            <input id='forname'onChange={(e) => setName(e.target.value)} type='text'name='nome' placeholder='Digite seu nome...' value={name}/>
            <label for='forCpf'>CPF do comprador:</label>
            <input id='forCpf' onChange={(e) => setCpf(e.target.value)}  type='text'name='nome' placeholder='Digite seu CPF...' value={cpf}/>
            <button>Reservar assento(s)</button>
         </form>
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

function Assentos({names,isAvailable,id ,ids, setIds,assentos,setAssentos}){
    const [clicked, setClicked] = useState(false)
    console.log(isAvailable)
    
    return(
    <Button clicked={clicked} isAvailable={isAvailable}  onClick={() => {setClicked(!clicked); setIds([...ids, id]); setAssentos([...assentos,names])}} >{names}</Button>
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
    overflow: hidden;
`;

const BodyContainer = styled.div`
    margin-top: 15px;
    margin-bottom: 150px;
    width: 380px;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    align-items: center ;

    form {
        margin-top: 42px;
        border-radius: 3px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        label {
            font-size: 18px;
            font-weight: 400;
            line-height: 21px;
            letter-spacing: 0em;
            text-align: left;
        }

        input{
            height: 51px;
            width: 327px;
            left: 24px;
            top: 497px;
            margin-bottom:20px;
            font-family: Roboto;
            font-size: 18px;
            font-style: italic;
            font-weight: 400;
            line-height: 21px;
            letter-spacing: 0em;
            text-align: left;
            padding-left:10px;
            background: #FFFFFF;
            border: 1px solid #D5D5D5;
            border-radius: 3px;

         
        }

        button{
            height: 42px;
            width: 225px;
            margin-left:50px;
            margin-top: 30px;
            border-radius: 3px;
            background: #E8833A;
            border: none;
            border-radius: 3px;
            color: #FFFFFF;
            font-family: Roboto;
            font-size: 18px;
            font-weight: 400;
            line-height: 21px;
            letter-spacing: 0.04em;
            text-align: center;




        }    
    }
    
    `;

 const BoxAssentos   = styled.div`
    
    display: flex;
    flex-wrap: wrap;
 
 `

   const  Button =  styled.button`
       
       height: 26px;
       width: 26px;
       border-radius: 12px;
       border: none;
       display: flex;
       justify-content: center;
       align-items: center;
       border: 1px solid #808F9D;
       background-color: ${(isAvailable) => !isAvailable? '#FBE192'
       :
       ({clicked}) => clicked ?  `#8DD7CF` : `#C3CFD9`};
       margin: 8px 6px;
       `

 const BoxExemplos = styled.div`
    width: 300px;
    display: flex;
    justify-content: space-between;
 `

 const ContainerExempos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    `

 const Selecionado = styled.button`
      height: 26px;
        width: 26px;
        border-radius: 12px;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #1AAE9E;
        background-color: #8DD7CF;
        margin: 8px 6px;
 `

const Disponivel = styled.button`
    height: 26px;
    width: 26px;
    border-radius: 12px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #7B8B99;
    background-color:#C3CFD9;
    margin: 8px 6px;
    `


const Indisponivel = styled.button`
height: 26px;
  width: 26px;
  border-radius: 12px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #F7C52B;
  background-color: #FBE192;
  margin: 8px 6px;
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

const Boxtexto = styled.div`
    height: 89px;
    width: 287px;
    left: 88px;
    top: 774px;
    display:flex;
    flex-direction: column;
    justify-content: center;
`
