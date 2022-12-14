import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState } from 'react';

import '../Assets/styles/reset.css'
import '../Assets/styles/style.css'
import NavBar from './NavBar';

import Tela01 from './Tela01';
import Tela02 from './Tela02';
import Tela03 from './Tela03';
import Sucesso from './Sucesso';



export default function App(){

     

    const [urlMovieImg, setUrlMovieImg] = useState("")
    const [nameMovieImg, setNameMovieImg] = useState("")
    const [sessaoMovieImg, setSessaoMovieImg] = useState("")
    const [dataMovie, setDataMovie] = useState("")
    const [assentos, setAssentos] = useState([])

    const [name, setName] = useState('')
    const [cpf, setCpf] = useState('')
    const [ids, setIds] = useState([]) 
    
   
    
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
              <Route path="/" element={<Tela01 urlMovieImg={urlMovieImg} setUrlMovieImg={setUrlMovieImg} />}/>  

              <Route path="/Tela02/:movieId" element={<Tela02 
              urlMovieImg={urlMovieImg}
              setUrlMovieImg={setUrlMovieImg}
              setNameMovieImg={setNameMovieImg}
              nameMovieImg={nameMovieImg}/>}/>   

              <Route path="/Tela03/:sessaoId" element={<Tela03
               urlMovieImg={urlMovieImg} 
               setUrlMovieImg={setUrlMovieImg}
               setNameMovieImg={setNameMovieImg}
               nameMovieImg={nameMovieImg}
               sessaoMovieImg={sessaoMovieImg} 
               setSessaoMovieImg={setSessaoMovieImg}
               dataMovie={dataMovie}
               setDataMovie={setDataMovie}
               name={name}
               setName={setName}
               cpf={cpf}
               setCpf={setCpf}
               ids={ids} 
               setIds={setIds}
               assentos={assentos}
               setAssentos={setAssentos}
               />}/>  

               <Route path="/sucesso" element={<Sucesso 
                        name={name}
                        setName={setName}
                        cpf={cpf}
                        setCpf={setCpf}
                        ids={ids} 
                        setIds={setIds}
                        nameMovieImg={nameMovieImg}
                        sessaoMovieImg={sessaoMovieImg}
                        dataMovie={dataMovie}

                        assentos={assentos}

                        />}/>
             </Routes>
        </BrowserRouter>
         )
}
