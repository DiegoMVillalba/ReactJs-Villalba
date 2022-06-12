import { useEffect, useState } from "react"
import { getFetchDetail } from "../helper/arrayDatos"
import ItemDetail from "../ItemDetail/ItemDetail"


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    
        useEffect ( () =>{    
            getFetchDetail()
                .then((resp) => setProducto(resp))
               
                .catch(err => console.log(err))

            }, [])




            
  return (
                 <ItemDetail producto={producto}/>
                
  )
}

export default ItemDetailContainer