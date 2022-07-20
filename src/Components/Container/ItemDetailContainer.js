import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import {doc, getDoc, getFirestore} from 'firebase/firestore'



const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
     
    const {id} = useParams()
    
    useEffect(() =>{
        const db = getFirestore()
        const  queryItem = doc(db, 'items', id )
        getDoc(queryItem)
        .then(resp => setProduct({id: resp.id, ...resp.data()}))
        .catch(err => console.log(err))

    }, [id])
   
            
            
  return (
                <>
                    <ItemDetail product={product}  />
                   
                
                </>
  )
}

export default ItemDetailContainer