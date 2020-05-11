import React, { Component } from 'react'
import Posts from './Posts';
import Container from 'react-bootstrap/Container'
import FullPost from '../Component/FullPost';
import NewPost from '../Component/NewPost';
// import Navbar from './../Component/Navbar';
import { Route, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


class Blog extends Component {

   state = {
      posts: [],
      selectedPostId: null,
      error: false
   };



   render() {

      return (
         <div style={{ backgroundColor: "#f0f2f5" }}>          
            <header >
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

            </header>

            <Route path="/" exact component={Posts} ></Route>
            <Route path="/new-post" component={NewPost} ></Route>


            {/* <Container className="p-3" >
               <FullPost id={this.state.selectedPostId} />
            </Container> */}



         </div>
      )
   }
}

export default Blog