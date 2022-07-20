import React from "react";
import { useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/esm/Button";


export const Btn = ({initial, stock, onAdd}) => {
  const [count, setCount] = useState(initial);
  
  

  function add() {
    
    count >= stock ? alert("Tope de stock") : setCount(count + 1);
  }
  function remove() {
    
    count <= 1 ? alert("No puede haber menos de 1") : setCount(count - 1);
  }
  
  function addToCart(){
    onAdd(count)
    
    
  }

  

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title><h1> {count}</h1></Card.Title>
        <Card.Text>
        <p>El stock es {stock}</p>
        </Card.Text>
        <Button  onClick={remove} variant="dark">-</Button>  <n/>
        <Button onClick={addToCart} variant="dark">Agregar al carrito</Button> <n/>
        <Button onClick={add} variant="dark">+</Button> 
        
      </Card.Body>
    </Card>
  );
};


