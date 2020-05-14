import React, { Component } from 'react'
import Posts from './Posts';
import NewPost from '../Component/NewPost';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavbarComponent from '../Component/Navbar'


class Blog extends Component {
   render() {
      return (
         <div style={{ backgroundColor: "#f0f2f5" }}>

            <NavbarComponent />

            <Switch>
               <Route path="/new-post" component={NewPost} />
               <Route path="/posts" component={Posts} />
               <Redirect from="/" to="/posts" />
            </Switch>

         </div>
      )
   }
}

export default Blog