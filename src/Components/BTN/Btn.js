import React from "react";
import { useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/esm/Button";

export const Btn = () => {
  const [count, setCount] = useState(1);
  const [stock, setStock] = useState(10);

  function agregar() {
    // setCount(count + 1);
    count >= stock ? alert("Tope de stock") : setCount(count + 1);
  }
  function quitar() {
    // setCount(count - 1);
    count <= 1 ? alert("No puede haber menos de 1") : setCount(count - 1);
  }

  console.log(count);

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
        
      </Card.Body>
    </Card>
  );
};

{
  /* <div>
<h1> {count}</h1>
<p>El stock es {stock}</p>
<button onClick={quitar}>-</button>
<button onClick={agregar}>+</button>
</div> */
}