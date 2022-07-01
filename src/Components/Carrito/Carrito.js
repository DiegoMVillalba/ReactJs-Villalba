import { useContext } from "react";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import { CartContextProvider } from "../CartContext/CartContext";
import CartItem from "./CartItem";

const Carrito = () => {
  const { cartList, emptyCart, totalPrice } = useContext(CartContextProvider);
  



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
          <Button variant="dark" onClick={() => console.log("Dark")}>
            Terminar compra
          </Button>
        </>
      )}
    </>
  );
};

export default Carrito;
