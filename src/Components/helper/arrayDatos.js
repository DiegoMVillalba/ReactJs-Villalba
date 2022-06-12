import topBeige from '../imagenes/mujer/topBeige.jpg'
import calzaBeige from '../imagenes/mujer/calzaBeige.jpg'
import topGris from '../imagenes/mujer/topGris.jpg'
import calzaGris from '../imagenes/mujer/calzaGris.jpg'
import batik from '../imagenes/mujer/batik.jpg'

const productos =[ 
                    { id: '1' ,categoria: 'Top', name: "Top beige", price: "$1900", foto:topBeige},
                    { id: '2' ,categoria: 'Calza', name: "Calza beige", price: "$1900", foto:calzaBeige},
                    { id: '3' ,categoria: 'Top', name: "Top gris", price: "$2700", foto:topGris},
                    { id: '4' ,categoria: 'Calza', name: "Calza gris", price: "$3800", foto:calzaGris},
                    { id: '5' ,categoria: 'batik', name: "Batik", price: "$4200", foto:batik}
                    

];

export const getFetch = () =>{    
    // acciones
    return new Promise( (resolve, reject)=>{   
        setTimeout(()=>{
            resolve(productos)   
        },2000)    
          
    })
}  
const producto = { id: '1' ,categoria: 'Top', name: "Top beige", price: "$1900", foto:topBeige}
                
                    



export const getFetchDetail = () =>{    
    // acciones
    return new Promise( (resolve, reject)=>{   
        setTimeout(()=>{
            resolve(producto)   
        },3000)    
          
    })
}  
