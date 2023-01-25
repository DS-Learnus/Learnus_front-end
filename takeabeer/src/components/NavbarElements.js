import React from 'react'
import { Navbar, Nav, Container, Form, Button } from 'react-bootstrap'
import './NavbarElements.css'
const NavbarElements = () => {
  return (
    <div>
    <Navbar variant="dark" id="navbar">
      <Navbar.Brand href="/" className="me-auto">Logo</Navbar.Brand>
        <Container>
          
          <Nav className="me-auto">
            <Nav.Link href="/">Main</Nav.Link>
            <Nav.Link href="/BeerList">BeerList</Nav.Link>
            <Nav.Link href="/RecipeList">RecipeList</Nav.Link>
          
          

          </Nav>
          <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
          </Form>
          <Nav>
          <Nav.Link href="#login" className="me-auto">Login</Nav.Link>
          <Nav.Link href="#mypage">MyPage</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


    </div>
  );
};

export default NavbarElements