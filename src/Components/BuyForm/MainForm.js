import React, { useState, useContext } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Button, CenteredButtonContainer, TermsContainer, Form, Label, ErrorMessage, SuccessMessage } from "../BuyForm/Elements/StyledForm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';
import InputComponent from "./InputComponent";
import {CartContextProvider} from '../CartContext/CartContext'


const MainForm = () => {
    const [name, changeName] = useState({field: '', valid: null});
    const [email, changeEmail] = useState({field: '', valid: null});
    const [telephone, changeTelephone] = useState({field: '', valid: null});
    const [terms, changeTerms] = useState(false);
    const [formValidation, changeFormValidation] = useState(null);
    const [id, setId] = useState([])
    const {cartList, totalPrice, emptyCart} = useContext(CartContextProvider);


    const expressions = {
      name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
      email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      telephone: /^\d{7,14}$/ // 
    }

  

    const onChangeTerms = (e) =>{
      changeTerms(e.target.checked);
    }


    async function generateOrder(e) {
        e.preventDefault();
        let order= {}     
        
        order.buyer = {
          name: name,
          email: email,
          telephone: telephone
        };
        order.total = totalPrice();

        order.date = new Date().toLocaleString("es-AR");
    
        order.items = cartList.map(cartItem => {
            const id = cartItem.id
            const name= cartItem.name
            const price= cartItem.price * cartItem.quantity
        
            
            return {id, name, price}   
        })
    
    
        const db = getFirestore()
        const orderCollection = collection(db,'orders')
        await addDoc(orderCollection, order)
        .then(resp => setId(resp.id ))
        .then( emptyCart())
        .catch(err => console.log(err))


      

        if(
              name.valid === 'true' &&
              email.valid === 'true' &&
              telephone.valid === 'true' &&
              terms
              ){
                changeFormValidation(true);
                changeName({field: '', valid: null});
                changeEmail({field: '', valid: null});
                changeTelephone({field: '', valid: null});
               
              }else{
                changeFormValidation(false);
              }
       
      }
       




    return (
        <main>
                <Form onSubmit={generateOrder}>
                  <InputComponent
                    state={name}
                    changeState={changeName}
                    type="text"
                    label="Nombre"
                    placeholder="john Doe"
                    name="name"
                    legndError="El Nombre tiene que ser de 4 a 16 Caracteres y no puede contener numeros y guion bajo."
                    regularExpression={expressions.name}
                    required
  
                />
  
                  
                  <InputComponent
                    state={email}
                    changeState={changeEmail}
                    type="email"
                    label="Correo"
                    placeholder="email@email.com"
                    name="email"
                    legndError="El email solo puede contener letras, numeros, puntos, guiones y guion bajo."
                    regularExpression={expressions.email}
                    required
  
                />
                  <InputComponent
                    state={telephone}
                    changeState={changeTelephone}
                    type="text"
                    label="Telefono"
                    placeholder="Telefono"
                    name="telephone"
                    legndError="El telephone solo puede contener numeros y el maximo son 14 dígitos."
                    regularExpression={expressions.telephone}
                    required
  
                />
                <p>el precio total es : {totalPrice()}</p>
                
            
                    <TermsContainer>
                      <Label>
                        <input type="checkbox" name="terms" id="terms" checked={terms} onChange={onChangeTerms} required />
                        Acepto los Terminos y Condiciones
                      </Label>
                    </TermsContainer>

                  { formValidation === false && <ErrorMessage>
                      <p><FontAwesomeIcon icon={faExclamationTriangle}/>
                        <b>Error:</b>Por favor completa el formulario correctamente.</p>
                    </ErrorMessage>}

                    <CenteredButtonContainer>
                    <Button type="submit" >Comprar</Button>
                      {formValidation === true && <SuccessMessage>Su compra se ha realizado exitosamente!</SuccessMessage>}
                      <p>Su id de compra es {id}</p>
                    </CenteredButtonContainer>

            </Form>
            
        </main>
    );
}

export default MainForm