import {createContext, useState } from "react"

export const CartContextProvider = createContext([])

const CartContext = ({children}) => {

  const [cartList, setCartList] = useState([])


  const iconCart = () =>{
    return cartList.reduce((acum, prod) => acum + prod.cantidad, 0)
  }

  
  const addToCart = (prod) => {
    
    let carritoprevio = [...cartList];
    
    if (carritoprevio.some((item) => item.id === prod.id)) 
    {
      carritoprevio.find((item) => item.id === prod.id).cantidad += prod.cantidad;
      setCartList(carritoprevio);
    } else {
      setCartList([...cartList, prod]);
    }
   
  };

 

  // const totalPrice = () => {
  //   cartList.reduce((acum, prod) => acum + prod.cantidad * prod.price, 0)
  // }
  const totalPrice = () => {
    let total = 0;

    cartList.forEach((prod) => {
      total +=
        parseInt(prod.price) * parseInt(prod.cantidad);
    });

    return parseInt(total);
  };



  const isInCart = (id) => {
    return cartList && cartList.some((prod) => prod.id === id) 
  }

  const emptyCart = () => {
    setCartList([])
  }

  const deleteItem = (id) => {
    const items = cartList.filter((prod) => prod.id !== id)
    setCartList(items)
  }

  

  return (
    <CartContextProvider.Provider value={{cartList, addToCart, emptyCart, deleteItem, totalPrice, iconCart}}>
      {children}
    </CartContextProvider.Provider>
  )
}

export default CartContext