import {useContext} from 'react'
import {CartContextProvider} from '../CartContext/CartContext'
import {Button, Container } from 'react-bootstrap'


const CartItem = ({product}) => {
    const {deleteItem} = useContext(CartContextProvider)
    const {id} = product

  return (
    <Container className="d-flex flex-row justify-content-between align-items-center my-3">
    <img
      className="rounded-4"
      src={`${product.photo}`}
      style={{ width: "10em", height: "10em" }}
      alt="Imagen del Producto"
    />
    <h1 className="p-3">{product.name}</h1>
    <div className="d-flex flex-column">
      <h4>Cantidad: {product.quantity}</h4>
      <h4>Precio: {product.price}</h4>
    </div>
    <Button
      variant="outline-danger"
      onClick={() => {
        deleteItem(id);
       
      }}
    >
      X
    </Button>
  </Container>
  )
}

export default CartItem

//           <tr>
//               <div className="row" style={{ border: "solid", color: "black" }}>
//                 <div className="col-md-6">
//                   <img src={product.photo} className="w-100 h-200 " alt='foto' />
//                 </div>
//                <div className='col-md-6'>
//                   <div className='row'>
//                     <td>Nombre: {product.name}</td>
//                     <td>Categoria: {product.categoria}</td>
//                     <td>Precio: {product.price}</td>
//                     <td>Cantidad: {product.quantity}</td>
//                     <td><Button variant="danger" onClick={() => deleteItem(id)}>
//                       X
//                     </Button></td>
//                   </div>
//                </div>
//                 </div>
  
//           </tr>
