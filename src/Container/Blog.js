import React, { Component } from 'react'
import Posts from './Posts';
import NewPost from '../Component/NewPost';
import { Route, Switch } from 'react-router-dom';
import NavbarComponent from '../Component/Navbar'
import FullPost from './../Component/FullPost';


class Blog extends Component {
   render() {
      return (
         <div style={{ backgroundColor: "#f0f2f5" }}>

            <NavbarComponent />

            <Route path="/" exact component={Posts} ></Route>
            <Switch>
               <Route path="/new-post" component={NewPost} ></Route>
               <Route path="/:id" exact component={FullPost} ></Route>
            </Switch>

         </div>
      )
   }
}

export default Blog