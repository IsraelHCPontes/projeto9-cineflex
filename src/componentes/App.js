import {BrowserRouter, Routes, Route} from 'react-router-dom';

import '../Assets/styles/reset.css'
import '../Assets/styles/style.css'
import NavBar from './NavBar';

import Tela01 from './Tela01';
import Tela02 from './Tela02';
import Tela03 from './Tela03';


export default function App(){
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
              <Route path="/" element={<Tela01/>}/>  
              <Route path="/Tela02" element={<Tela02/>}/>            
              <Route path="/Tela03" element={<Tela03/>}/>   
             </Routes>
        </BrowserRouter>
         )
}
