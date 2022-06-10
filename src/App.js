import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import{BrowserRouter, Routes, Route}from 'react-router-dom';

import NavBar from './Components/NavBar/NavBar';
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';
import { Btn } from './Components/BTN/Btn';
import React from 'react';
import ItemListContainer from './Components/itemListContainer/ItemListContainer';




function App() {
    let Encabezado= "Kuma"


     function onAdd(cant){
        console.log(cant);
    }
    

  return (
        <BrowserRouter>
                        <Header header={Encabezado}/>
                        <NavBar />
                    <Routes>
                        <Route path='/'element={<ItemListContainer/>}/>
                    </Routes>  

                        <Body/>
                        <Btn initial={1} stock={10} onAdd={onAdd}/>
                    </BrowserRouter>
           
          
      
    );
}


export default App;
