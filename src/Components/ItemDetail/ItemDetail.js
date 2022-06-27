import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Btn } from "../BTN/Btn";
import { CartContextProvider } from "../CartContext/CartContext";

const ItemDetail = ({ producto }) => {
  const [estado, setEstado] = useState();
  const { addToCart } = useContext(CartContextProvider);

  function onAdd(cantidad) {
    addToCart({ ...producto, cantidad });
    console.log(cantidad, producto);
    setEstado(cantidad, producto);
  }

  return (
    <div className="row" style={{ border: "solid", color: "black" }}>
      <div className="col-md-6">
        <img src={producto.foto} className="w-100 h-200 " />
      </div>
      <div className="col-md-6">
        <h2>Nombre: {producto.name}</h2>
        <h3>Categoria: {producto.categoria}</h3>
        <h4>Precio: {producto.price}</h4>
        {/* <h5>Stock: </h5> */}
        <div>
          {estado ? (
            <>
              <Link to="/cart">
                <button className="btn btn-success ">Ir al carrito</button>
              </Link>
              <Link to="/">
                <button className="btn btn-dark ">Seguir comprando</button>
              </Link>
            </>
          ) : (
            <Btn initial={1} stock={producto.stock} onAdd={onAdd} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
