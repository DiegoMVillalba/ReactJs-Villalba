import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Badge from 'react-bootstrap/Badge'
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
            <NavDropdown title="Productos" id="navbarScrollingDropdown">
              <ul>
                <li>
                  <NavLink to="/categoria/Top">Top</NavLink>
                </li>
                <li>
                  <NavLink to="/categoria/Calza">Calza</NavLink>
                </li>
                <li>
                  <NavLink to="/categoria/Batik">Batik</NavLink>
                </li>
              </ul>

              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">#</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action1">Quienes somos</Nav.Link>
            <Nav.Link href="#action2">Contacto</Nav.Link>

            <Nav.Link href="#" >
              Politicas de privacidad
            </Nav.Link>
            {/* <Navbar bg="dark" variant="dark">
              <Container>
                <Navbar.Brand href="#home"></Navbar.Brand>
              </Container>
            </Navbar> */}
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
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
