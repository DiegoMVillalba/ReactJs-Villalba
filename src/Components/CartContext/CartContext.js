import {createContext, useState } from "react"

export const CartContextProvider = createContext([])

const CartContext = ({children}) => {

  const [cartList, setCartList] = useState([])

  
  
  
  const addToCart = (item) => {
      if(isInCart(item.id)){
        alert("El producto ya se encuentra en el carrito")
        
        
      }
      else{
        setCartList([...cartList, item])
        alert("Agregaste el producto")
      }
     
  }

  const iconCart = () =>{
    return cartList.reduce((acum, prod) => acum + prod.cantidad, 0)
  }

 

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