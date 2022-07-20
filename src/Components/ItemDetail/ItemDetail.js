import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Btn } from "../BTN/Btn";
import { CartContextProvider } from "../CartContext/CartContext";

const ItemDetail = ({ product }) => {
  const [state, setState] = useState();
  const { addToCart } = useContext(CartContextProvider);

  function onAdd(quantity) {
    addToCart({ ...product, quantity });
    setState(quantity, product);
  }

  return (
    <div className="row" style={{ border: "solid", color: "black" }}>
      <div className="col-md-6">
        <img src={product.photo} className="w-100 h-200 " />
      </div>
      <div className="col-md-6">
        <h2>Nombre: {product.name}</h2>
        <h3>Categoria: {product.categoria}</h3>
        <h4>Precio: {product.price}</h4>
        <div>
          {state ? (
            <>
              <Link to="/cart">
                <button className="btn btn-success ">Ir al carrito</button>
              </Link>
              <Link to="/">
                <button className="btn btn-dark ">Seguir comprando</button>
              </Link>
            </>
          ) : (
            <Btn initial={1} stock={product.stock} onAdd={onAdd} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
