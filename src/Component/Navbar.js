import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';


const Navbar_Component = () => {
   const myActiveStyle = { color: "white", borderBottom: "1px solid white", transition: 'all 0.2s' }

   return (
      <header >

         <Navbar style={{ width: '100vw', overflowX: 'hidden' }} fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container >
               <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="ml-auto">

                     <Nav.Link as={NavLink} to="/" exact activeStyle={myActiveStyle}
                        /*active={{
                           color: '#ffffff',
                           borderBottom: 'white 1px solid'
                        }}*/>Home</Nav.Link>

                     <Nav.Link as={NavLink} activeStyle={myActiveStyle} to={{
                        pathname: '/new-post',
                        hash: '#submit',
                        search: '?quick-submit=true'
                     }}>New Post</Nav.Link>

                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </header>

   )
}

export default Navbar_Component