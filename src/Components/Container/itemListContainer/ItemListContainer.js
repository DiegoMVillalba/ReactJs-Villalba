import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "../../helper/arrayDatos";
import ItemList from "../../ItemList/ItemList";
// import  {CartContextProvider} from '../../CartContext/CartContext'
const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoriaId } = useParams();

  useEffect(() => {
    if (categoriaId) {
      getFetch()
        .then((resp) => {
          setProductos(
            resp.filter((productos) => productos.categoria === categoriaId)
          );
          setLoading(false);
        })
        .catch((err) => console.log(err));
    } else {
      getFetch()
        .then((resp) => setProductos(resp))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [categoriaId]);

  return (
    <div>
      {loading ? (
        <h1>Cargando...</h1>
      ) : (
        <div
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          <ItemList productos={productos} />
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
