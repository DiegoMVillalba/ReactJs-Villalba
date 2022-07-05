import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useContext, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import { CartContextProvider } from "../CartContext/CartContext";
import CartItem from "./CartItem";

const Carrito = () => {
  const { cartList, emptyCart, totalPrice } = useContext(CartContextProvider);
  const [id, setId] = useState([])
  


  async function generarOrden(e) {
    e.preventDefault()
    let orden = {}     
    
    orden.buyer = {name: 'Diego', email: 'Diego@gmail.com', phone: '123456789'}
    orden.total = totalPrice()

    orden.items = cartList.map(cartItem => {
        const id = cartItem.id
        const nombre = cartItem.name
        const precio = cartItem.price * cartItem.cantidad
        // const cantidad = cartItem.cantidad
        
        return {id, nombre, precio}   
    })
    console.log(orden)

    const db = getFirestore()
    const orderCollection = collection(db,'orders')
    await addDoc(orderCollection, orden)
    .then(resp => setId(resp.id ))
    .catch(err => console.log(err))
   
  }




  return (
    <>
      {cartList.length === 0 ? (
       <>
          <p>Carrito Vacio</p>
          <div className="d-grid">
            <Link to='/'>
              <Button variant="outline-primary">
                Agrega algo al carrito
              </Button>
            </Link>
          </div>
       </>
      ) : (
        <>
          {cartList.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
          <button onClick={emptyCart}>Borrar carrito</button>
          <p>El precio total de los productos es : $ { totalPrice()}</p>
          <Button variant="dark" onClick={generarOrden}>
            Terminar compra
          </Button>
          <div>
            <p>el Id de la compra es : {id}</p>
            <p>{}</p>
            <p>{}</p>
            <p>{}</p>
            
          </div>
        </>
      )}
    </>
  );
};

export default Carrito;
