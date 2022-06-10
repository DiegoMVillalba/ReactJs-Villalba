import React from "react";
import { useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/esm/Button";

export const Btn = ({initial, stock, onAdd}) => {
  const [count, setCount] = useState(initial);
  //const [stock, setStock] = useState(10);

  function agregar() {
    // setCount(count + 1);
    count >= stock ? alert("Tope de stock") : setCount(count + 1);
  }
  function quitar() {
    // setCount(count - 1);
    count <= 1 ? alert("No puede haber menos de 1") : setCount(count - 1);
  }
  
  function agregarCarrito(){
    onAdd(count)
  }

  

  return (
    <Card style={{ width: "18rem" }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title><h1> {count}</h1></Card.Title>
        <Card.Text>
        <p>El stock es {stock}</p>
        </Card.Text>
        <Button  onClick={quitar} variant="danger">-</Button>  
        <Button onClick={agregar} variant="primary">+</Button>
        <Button onClick={agregarCarrito} variant="primary">add</Button>
        
      </Card.Body>
    </Card>
  );
};


