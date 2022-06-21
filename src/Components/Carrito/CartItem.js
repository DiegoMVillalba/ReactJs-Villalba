import {useContext} from 'react'
import {CartContextProvider} from '../CartContext/CartContext'

const CartItem = ({product}) => {
    const {deleteItem} = useContext(CartContextProvider)
    const {title,price ,foto, id} = product

  return (
    <div>
        <h4>{product.foto}</h4>
        <h4>{title}</h4>
        <button onClick={() => deleteItem(id)}>{title}</button>
        
    </div>
  )
}

export default CartItem