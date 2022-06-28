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

 

  const totalPrice = () => {
    cartList.reduce((acum, prod) => acum + prod.cantidad * prod.item.price, 0)
  }

  const isInCart = (id) => {
    return cartList && cartList.some((prod) => prod.item.id === id) 
  }

  const emptyCart = () => {
    setCartList([])
  }

  const deleteItem = (id) => {
    const items = cartList.filter((prod) => prod.item.id !== id)
    setCartList(items)
  }

  

  return (
    <CartContextProvider.Provider value={{cartList, addToCart, emptyCart, deleteItem, totalPrice, iconCart}}>
      {children}
    </CartContextProvider.Provider>
  )
}

export default CartContext