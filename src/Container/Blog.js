import React, { Component } from 'react'
import Posts from './Posts';
import NewPost from '../Component/NewPost';
import { Route, Switch } from 'react-router-dom';
import NavbarComponent from '../Component/Navbar'


class Blog extends Component {
   render() {
      return (
         <div style={{ backgroundColor: "#f0f2f5" }}>

            <NavbarComponent />

            {/* <Route path="/" exact component={Posts} ></Route> */}

            <Switch>
               <Route path="/new-post" component={NewPost} />
               <Route path="/posts" component={Posts} />
            </Switch>

         </div>
      )
   }
}

export default Blog