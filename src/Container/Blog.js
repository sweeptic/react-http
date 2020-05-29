import React, { Component } from 'react'
import Posts from './Posts';
import { Route, Switch } from 'react-router-dom';
import NavbarComponent from '../Component/Navbar'
import AsyncComponent from '../hoc/AsyncComponent';
import NotFound from './../Component/NotFound';


const AsyncNewPost = AsyncComponent(() => {
   return import('../Component/NewPost')
});



class Blog extends Component {
   state = {
      auth: true
   }


   render() {
      return (
         <div style={{ backgroundColor: "#f0f2f5" }}>
            <NavbarComponent />
            {/* <Redirect from="/" to="/posts" exact /> */}
            <Switch>
               {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null}
               <Route path="/posts" component={Posts} />
               <Route component={NotFound} />
            </Switch>
         </div>
      )
   }
}

export default Blog