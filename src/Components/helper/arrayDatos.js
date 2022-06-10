import topBeige from '../imagenes/mujer/topBeige.jpg'
import calzaBeige from '../imagenes/mujer/calzaBeige.jpg'
import topGris from '../imagenes/mujer/topGris.jpg'
import calzaGris from '../imagenes/mujer/calzaGris.jpg'
import batik from '../imagenes/mujer/batik.jpg'

const productos =[ 
                    { id: '1' ,categoria: 'Top', name: "Top beige", price: 19, foto:topBeige},
                    { id: '2' ,categoria: 'Calza', name: "Calza beige", price: 19, foto:calzaBeige},
                    { id: '3' ,categoria: 'Top', name: "Top gris", price: 19, foto:topGris},
                    { id: '4' ,categoria: 'Calza', name: "Calza gris", price: 19, foto:calzaGris},
                    { id: '5' ,categoria: 'batik', name: "Batik", price: 19, foto:batik}
                    

];

export const getFetch = () =>{    
    // acciones
    return new Promise( (resolve, reject)=>{   
        setTimeout(()=>{
            resolve(productos)   
        },2000)    
          
    })
}  
