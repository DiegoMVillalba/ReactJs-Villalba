import {createContext, useState } from "react"

export const CartContextProvider = createContext([])

const CartContext = ({children}) => {

  const [cartList, setCartList] = useState([])


  const iconCart = () =>{
    return cartList.reduce((acum, prod) => acum + prod.quantity, 0)
  }

  
  const addToCart = (prod) => {
    
    let previousCart = [...cartList];
    
    if (previousCart.some((item) => item.id === prod.id)) 
    {
      previousCart.find((item) => item.id === prod.id).cantidad += prod.cantidad;
      setCartList(previousCart);
    } else {
      setCartList([...cartList, prod]);
    }
   
  };

 

  const totalPrice = () => {
    let total = 0;

    cartList.forEach((prod) => {
      total +=
        parseInt(prod.price) * parseInt(prod.quantity);
    });

    return parseInt(total);
  };



 

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