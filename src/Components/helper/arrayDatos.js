import topBeige from '../imagenes/mujer/topBeige.jpg'
import calzaBeige from '../imagenes/mujer/calzaBeige.jpg'
import topGris from '../imagenes/mujer/topGris.jpg'
import calzaGris from '../imagenes/mujer/calzaGris.jpg'
import batik from '../imagenes/mujer/batik.jpg'

const productos =[ 
                    { id: '1' ,categoria: 'Top', name: "Top beige", price: "$1900", stock: 3 ,foto:topBeige},
                    { id: '2' ,categoria: 'Calza', name: "Calza beige", price: "$1900", stock: 5 ,foto:calzaBeige},
                    { id: '3' ,categoria: 'Top', name: "Top gris", price: "$2700", stock: 5 ,foto:topGris},
                    { id: '4' ,categoria: 'Calza', name: "Calza gris", price: "$3800", stock:7 ,foto:calzaGris},
                    { id: '5' ,categoria: 'Batik', name: "Batik", price: "$4200", stock: 8 ,foto:batik}
                    

];

export const getFetch = (id) =>{    
    // acciones
    return new Promise( (resolve, reject)=>{   
        setTimeout(()=>{
            if(id){
                resolve(productos.find(prod => prod.id === id))
            }else {
                resolve(productos) 
             } 
        },1000)    
        // console.log('ID: ', typeof id)
    })
    
}  
// const producto = { id: '1' ,categoria: 'Top', name: "Top beige", stock:6, price: "$1900", foto:topBeige}
                
                    



// export const getFetchDetail = () =>{    
//     // acciones
//     return new Promise( (resolve, reject)=>{   
//         setTimeout(()=>{
//             resolve(producto)   
//         },3000)    
          
//     })
// }  
