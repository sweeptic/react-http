import React, { Component } from 'react'
import Posts from './Posts';
import NewPost from '../Component/NewPost';
import { Route } from 'react-router-dom';
import NavbarComponent from '../Component/Navbar'

class Blog extends Component {
   render() {
      console.log('Blog render')
      return (
         <div style={{ backgroundColor: "#f0f2f5" }}>
            <header >
               <NavbarComponent />
            </header>
            <Route path="/" exact component={Posts} ></Route>
            <Route path="/new-post" component={NewPost} ></Route>
         </div>
      )
   }
}

export default Blog