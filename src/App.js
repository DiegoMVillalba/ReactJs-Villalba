import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import{BrowserRouter, Routes, Route}from 'react-router-dom';

import NavBar from './Components/NavBar/NavBar';
import Header from './Components/Header/Header';

import React from 'react';
import ItemListContainer from './Components/Container/itemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/Container/ItemDetailContainer';
import Cart from './Components/Cart/Cart';
import Footer from './Components/Footer/Footer';
import CartContext from './Components/CartContext/CartContext';
import MainForm from './Components/BuyForm/MainForm';
import WhoWeAre from './Components/WhoWeAre/WhoWeAre';







function App() {
    


     

    return (
     <CartContext>
         <BrowserRouter>
                   <Header />
                   <NavBar />                                 
                   <Routes>
                   <Route path="/" element={<ItemListContainer/>}  />  
                   <Route path="/categoria/:categoryId" element={<ItemListContainer/>}  />  
                   <Route path="/detalle/:id" element={<ItemDetailContainer />}/> 
                   <Route path="/cart" element={<Cart/>}  /> 
                   <Route path='/mainForm' element={<MainForm/>}/>
                   <Route path='/WhoWeAre' element={<WhoWeAre/>}/>
                   </Routes>                   
                   <Footer/>
         </BrowserRouter>
     </CartContext> 
    
                   
                    
          
      
    );
}


export default App;
