import React, { Component } from 'react'
import Posts from './Posts';
import NewPost from '../Component/NewPost';
import { Route, Switch } from 'react-router-dom';
import NavbarComponent from '../Component/Navbar'
import FullPost from './../Component/FullPost';


class Blog extends Component {
   render() {
      console.log('....Blog render')
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

   shouldComponentUpdate() {
      console.log('....Blog call shouldComponentUpdate')
      return true;
   }

   getSnapshotBeforeUpdate() {
      console.log('....Blog call getSnapshotBeforeUpdate')
      return null;
   }


   componentDidUpdate() {
      console.log('....Blog call componentDidUpdate')
   }

   componentDidMount() {
      console.log('....Blog componentDidMount called')
   }



}

export default Blog