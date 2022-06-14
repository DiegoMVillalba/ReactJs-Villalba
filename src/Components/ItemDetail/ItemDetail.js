const ItemDetail = (producto) => {
 
    return (
      <div className="row" style={{border:"solid", color:"black"}}>
      <div className="col-md-6">
          <img src={producto.foto} className="w-100 h-200 " />
      </div>   
      <div className="col-md-6">
          <h2>Nombre: {producto.name}</h2>
          <h3>Categoria: {producto.categoria}</h3>
          <h4>Precio: {producto.price}</h4>
          <h5>Stock: {producto.stock}</h5>
      </div> 
  </div>
      
    )
  }

  export default ItemDetail