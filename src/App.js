import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import{BrowserRouter, Routes, Route}from 'react-router-dom';

import NavBar from './Components/NavBar/NavBar';
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';
import { Btn } from './Components/BTN/Btn';
import React from 'react';
import ItemListContainer from './Components/Container/itemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/Container/ItemDetailContainer';





function App() {
    let Encabezado= "Kuma"


     function onAdd(cant){
        console.log(cant);
    }
    

    return (
     <>
     <Header header={Encabezado}/>
<NavBar />
<Btn initial={1} stock={10} onAdd={onAdd}/> 
<ItemListContainer/>
<ItemDetailContainer />
<Body/>
     </>
    
                   
                    
          
      
    );
}


export default App;
/* <BrowserRouter>
<Header header={Encabezado}/>
<NavBar />
<Btn initial={1} stock={10} onAdd={onAdd}/>                                        
<Routes>
<Route path="/" element={<ItemListContainer/>}  />                     
<Route path="/ItemDetail" element={<ItemDetailContainer />}/> 
</Routes>                   
<Body/>  
</BrowserRouter> */