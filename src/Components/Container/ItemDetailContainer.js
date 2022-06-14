import { useEffect, useState } from "react"
// import { getFetchDetail } from "../helper/arrayDatos"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getFetch } from "../helper/arrayDatos"


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    
        useEffect ( () =>{    
            getFetch(1)
                .then((resp) => setProducto(resp))
               
                .catch(err => console.log(err))

            }, [])
            console.log('ID: ', typeof id)
            
  return (
                 <ItemDetail producto={producto} />
                
  )
}

export default ItemDetailContainer