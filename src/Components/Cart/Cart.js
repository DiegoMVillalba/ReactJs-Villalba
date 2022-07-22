import { useContext } from "react";
import {Button, CenteredButtonContainer} from "../BuyForm/Elements/StyledForm";
import { Link } from "react-router-dom";
import { CartContextProvider } from "../CartContext/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { cartList, emptyCart, totalPrice } = useContext(CartContextProvider);
  
  
  return (
    <>
      {cartList.length === 0 ? (
       <>
          <p>Carrito Vacio</p>
          <div className="d-grid">
            <Link to='/'>
            <CenteredButtonContainer>
                <Button variant="outline-primary">
                  Agrega al carrito
                </Button>
            </CenteredButtonContainer>
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
        <Link  to="/mainForm">
                <CenteredButtonContainer>
                    <Button >Ir a pagar</Button>
                      
                </CenteredButtonContainer>

        </Link>
         
        </>
      )}
    </>
  );
};

export default Cart;
