import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getFetch } from "../helper/arrayDatos"
import { useParams } from "react-router-dom"
import {collection, doc, getDoc, getFirestore} from 'firebase/firestore'



const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
     
    const {id} = useParams()
    
    useEffect(() =>{
        const db = getFirestore()
        const  queryItem = doc(db, 'items', id )
        getDoc(queryItem)
        .then(resp => setProducto({id: resp.id, ...resp.data()}))
        .catch(err => console.log(err))

    }, [id])
   
    
        // Con GetFecth
        // useEffect ( () =>{    
        //     getFetch(id)
        //         .then((resp) => setProducto(resp))
               
        //         .catch(err => console.log(err))

        //     }, [])
            
            
  return (
                <>
                    <ItemDetail producto={producto}  />
                   
                
                </>
  )
}

export default ItemDetailContainer