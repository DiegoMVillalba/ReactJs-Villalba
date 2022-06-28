import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import{BrowserRouter, Routes, Route}from 'react-router-dom';

import NavBar from './Components/NavBar/NavBar';
import Header from './Components/Header/Header';
// import Body from './Components/Body/Body';
import React from 'react';
import ItemListContainer from './Components/Container/itemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/Container/ItemDetailContainer';
import Carrito from './Components/Carrito/Carrito';
import Footer from './Components/Footer/Footer';
import CartContext from './Components/CartContext/CartContext';





function App() {
    


     

    return (
     <CartContext>
         <BrowserRouter>
                   <Header />
                   <NavBar />                                 
                   <Routes>
                   <Route path="/" element={<ItemListContainer/>}  />  
                   <Route path="/categoria/:categoriaId" element={<ItemListContainer/>}  />  
    
                   <Route path="/detalle/:id" element={<ItemDetailContainer />}/> 
                   <Route path="/cart" element={<Carrito/>}  /> 
                   {/* <Route path='*' element={<Navigate To='/'/>}/> */}
                   </Routes>                   
                   {/* <Body/>   */}
                   <Footer/>
         </BrowserRouter>
     </CartContext> 
    
                   
                    
          
      
    );
}


export default App;
