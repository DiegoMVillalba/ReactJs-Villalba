import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../ItemList/ItemList";
import {collection, getDocs ,getFirestore, query, where} from 'firebase/firestore'


const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoriaId } = useParams();
  

  useEffect(() =>{
    const db = getFirestore()
    const  queryCollection = collection(db, 'items' )
  
      const queryCollectionFilter = categoriaId ? query(queryCollection, where('categoria','==', categoriaId )) : queryCollection
            getDocs(queryCollectionFilter)
            .then(resp => setProductos(resp.docs.map(item =>({ id:item.id, ...item.data()}))))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
      }, [categoriaId])
  

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
