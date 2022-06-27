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
                Seguir Comprando
              </Button>
            </Link>
          </div>
       </>
      ) : (
        <>
          {cartList.map((product) => (
            <CartItem key={product.item.id} product={product.item} />
          ))}
          <button onClick={emptyCart}>Borrar carrito</button>
          <p>El precio total de los productos es {totalPrice}</p>
        </>
      )}
    </>
  );
};

export default Carrito;
