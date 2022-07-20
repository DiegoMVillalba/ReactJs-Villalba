import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../ItemList/ItemList";
import {collection, getDocs ,getFirestore, query, where} from 'firebase/firestore'


const ItemListContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();
  

  useEffect(() =>{
    const db = getFirestore()
    const  queryCollection = collection(db, 'items' )
  
      const queryCollectionFilter = categoryId ? query(queryCollection, where('categoria','==', categoryId )) : queryCollection
            getDocs(queryCollectionFilter)
            .then(resp => setProduct(resp.docs.map(item =>({ id:item.id, ...item.data()}))))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
      }, [categoryId])
  

  return (
    <div>
      {loading ? (
        <h1>Cargando...</h1>
      ) : (
        <div
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          <ItemList product={product} />
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
