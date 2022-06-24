import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getFetch } from "../helper/arrayDatos"
import { useParams } from "react-router-dom"



const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
     
    const {id} = useParams()
    
    
    
        useEffect ( () =>{    
            getFetch(id)
                .then((resp) => setProducto(resp))
               
                .catch(err => console.log(err))

            }, [])
            
            
  return (
                <>
                    <ItemDetail producto={producto}  />
                   
                
                </>
  )
}

export default ItemDetailContainer