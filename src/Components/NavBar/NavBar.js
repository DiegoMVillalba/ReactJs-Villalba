import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Badge from 'react-bootstrap/Badge';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import {CartContextProvider} from '../CartContext/CartContext'

function NavBar() {

    const {iconCart, cartList}= useContext(CartContextProvider)
  
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <NavLink to="/">
          <Navbar.Brand L>Home</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
         
            <Nav.Link as={NavLink} className='displayNone' to="/categoria/Top">Top</Nav.Link>

            <Nav.Link as={NavLink} className='displayNone' to="/categoria/Calza">Calza</Nav.Link>

            <Nav.Link as={NavLink} className='displayNone' to="/categoria/Batik">Batik</Nav.Link>
            
            <Nav.Link as={NavLink}  to="/WhoWeAre">Quienes somos</Nav.Link>


  
          
          </Nav>
        
          <Link to="/cart">
            <button className="btn btn-outline-white">
              <Badge bg="primary-outline">{cartList.length === 0 ? 0 : iconCart()}</Badge> <FontAwesomeIcon  icon={faCartShopping} color="white" />
            </button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
