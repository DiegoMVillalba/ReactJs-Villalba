import { useContext } from "react";
// import { Link } from "react-router-dom";
import { CartContextProvider } from "../CartContext/CartContext";
import CartItem from "./CartItem";

const Carrito = () => {
  const { cartList, emptyCart, totalPrice } = useContext(CartContextProvider);


  return (
    <>
      {cartList.length === 0 ? (
        <p>Carrito Vacio</p>
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
