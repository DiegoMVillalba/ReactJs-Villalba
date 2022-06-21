import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContextProvider } from "../CartContext/CartContext";
import CartItem from "./CartItem";

const Carrito = () => {
  const { cartList, emptyCart, totalPrice } = useContext(CartContextProvider);
  return (
    <>
    <div>
      {cartList.lenght < 1 ? (
        <p>Carrito sin items</p>
      ) : (
        cartList.map((product) => <CartItem key={product.item.id} product={product.item} />)

      )}
    </div>
   <button onClick={emptyCart}>Borrar carrito</button>
   <p>El precio total de los productos es {totalPrice()}</p>
    </>
  );
  
};

export default Carrito;
