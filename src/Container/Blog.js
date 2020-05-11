import React, { PureComponent } from 'react'
import Post from '../Component/Post';
import FullPost from '../Component/FullPost';
import NewPost from '../Component/NewPost';
// import Axios from 'axios';
// import styled from 'styled-components';
import axios from '../axios'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'


// const GrayBackground = styled.div`
// background-color: lightgrey;
// `;


class Blog extends PureComponent {

   state = {
      posts: [],
      selectedPostId: null,
      error: false
   };


   componentDidMount() {
      axios
         .get("/posts")
         .then((response) => {

            const updatedPosts = response.data.slice(0, 10).map(post => {
               return {
                  ...post, author: 'Max'
               }
            })

            this.setState({
               posts: updatedPosts,
            });

         })
         .catch((error) => {
            this.setState({ error: true })
         })


   }

   postSelectedHandler(id) {
      this.setState({
         selectedPostId: id
      })
   }

   render() {
      console.log('Blog render')
      let posts = <p>something went wrong</p>

      if (!this.state.error) {
         posts = this.state.posts.map(post =>
            <Post
               imgPath={process.env.PUBLIC_URL + '/photos/unsplash-' + post.id + '.jpg'}
               imgAlt={'photo_' + post.id}
               key={post.id}
               title={post.title}
               author={post.author}
               clicked={() => this.postSelectedHandler(post.id)}
            />
         )
      }


      return (
         <div style={{ backgroundColor: "#f0f2f5" }}>

            <header>
               <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                  <Container>
                     <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                     <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                           <Nav.Link href="/">Home</Nav.Link>
                           <Nav.Link href="/new-post">New Post</Nav.Link>
                        </Nav>
                     </Navbar.Collapse>
                  </Container>
               </Navbar>
            </header>


            <div className="container p-3 card-columns" >
               {posts}
            </div>
            <div className="container  p-3" >
               <FullPost id={this.state.selectedPostId} />
            </div>
            <div className="container p-3" >
               <NewPost />
            </div>
         </div>
      )
   }
}

export default Blog