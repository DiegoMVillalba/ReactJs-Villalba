import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

function NavBar() {
  return (
    <Navbar bg="dark"  variant="dark" expand="lg">
    <Container fluid>
      <Navbar.Brand href="#">Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
            <NavDropdown title="Productos" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Hombre</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Mujer</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
             #
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#action1">Quienes somos</Nav.Link>
          <Nav.Link href="#action2">Contacto</Nav.Link>
          
          <Nav.Link href="#" disabled>
            Politicas de privacidad
          </Nav.Link>
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
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar