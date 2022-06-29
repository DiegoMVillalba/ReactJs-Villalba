import {useContext} from 'react'
import {CartContextProvider} from '../CartContext/CartContext'
import Button from 'react-bootstrap/Button'


const CartItem = ({product}) => {
    const {deleteItem} = useContext(CartContextProvider)
    const {id} = product

  return (

        <tr>
            <div className="row" style={{ border: "solid", color: "black" }}>
              <div className="col-md-6">
                <img src={product.foto} className="w-100 h-200 " alt='foto' />
              </div>
             <div className='col-md-6'>
                <div className='row'>
                  <td>Nombre: {product.name}</td>
                  <td>Categoria: {product.categoria}</td>
                  <td>Precio: {product.price}</td>
                  <td>Cantidad: {product.cantidad}</td>
                  <td><Button variant="danger" onClick={() => deleteItem(id)}>
                    X
                  </Button></td>
                </div>
             </div>
              </div>

        </tr>






  
  )
}

export default CartItem




{/* <div className="row" style={{ border: "solid", color: "black" }}>
<div className="col-md-6">
  <img src={product.foto} className="w-100 h-200 " alt='foto' />
</div>
<div className="col-md-6">
  <h2>Nombre: {product.name}</h2>
  <h3>Categoria: {product.categoria}</h3>
  <h4>Precio: {product.price}</h4>
  <h4>Cantidad:{product.cantidad} </h4>
  <button onClick={() => deleteItem(id)}>X </button>

  
</div>
</div> */}