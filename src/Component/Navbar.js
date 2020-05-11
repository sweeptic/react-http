import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import {  Link } from 'react-router-dom';


const Navbar_Component = () => {
   return (

      <Navbar style={{ width: '100vw', overflowX: 'hidden' }} fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
         <Container >
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="ml-auto">
                  <Nav.Link as={Link} to="/">Home</Nav.Link>
                  <Nav.Link as={Link} to={{ pathname: '/new-post' }}>New Post</Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>


   )
}

export default Navbar_Component
