import React, { Component } from 'react'
import Posts from './Posts';
import NewPost from '../Component/NewPost';
import { Route, Link } from 'react-router-dom';
import Navbar_Component from '../Component/Navbar'

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
               <Navbar_Component />
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