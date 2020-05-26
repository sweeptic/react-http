import React, { Component } from 'react'
import Posts from './Posts';
// import NewPost from '../Component/NewPost';
import { Route, Switch } from 'react-router-dom';
import NavbarComponent from '../Component/Navbar'
import AsyncComponent from '../hoc/AsyncComponent';


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
            <Switch>

               {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null}
               {/* <Route path="" component={Posts} /> */}
               <Route path="/posts" component={Posts} />
               <Route render={() => <h1>Not found</h1>} />
               {/* <Redirect from="/" to="/posts" /> */}
            </Switch>
         </div>



      )
   }
}

export default Blog