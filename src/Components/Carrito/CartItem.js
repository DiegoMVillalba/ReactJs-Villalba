import {useContext} from 'react'
import {CartContextProvider} from '../CartContext/CartContext'


const CartItem = ({product}) => {
    const {deleteItem, cartList, addToCart,setCartList,isInCart} = useContext(CartContextProvider)
    const {name,price ,foto, id,item} = product

  return (
    <div className="row" style={{ border: "solid", color: "black" }}>
    <div className="col-md-6">
      <img src={product.foto} className="w-100 h-200 " />
    </div>
    <div className="col-md-6">
      <h2>Nombre: {product.name}</h2>
      <h3>Categoria: {product.categoria}</h3>
      <h4>Precio: {product.price}</h4>
      <h4>Cantidad:{product.cantidad} </h4>
      <button onClick={() => deleteItem(id)}>X </button>
      {/* <h5>Stock: </h5> */}
      
    </div>
  </div>
  
  )
}

export default CartItem




{/* <div>
<h4>{product.name}</h4>
<img src={product.foto}/>
<h4>{product.price}</h4>
<h4>Cantidad: {product.cantidad}</h4>


</div> */}