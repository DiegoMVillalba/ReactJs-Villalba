import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './Components/NavBar/NavBar';
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';
import { Btn } from './Components/BTN/Btn';

import React from 'react';




function App() {
    let Encabezado= "Kuma"


     function onAdd(cant){
        console.log(cant);
    }
    

  return (
        <>
        <Header header={Encabezado}/>
        <NavBar />
        <Body/>
        <Btn initial={1} stock={10} onAdd={onAdd} />
      
       
        </>
          
      
    );
}


export default App;
