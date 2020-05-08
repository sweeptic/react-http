import React, { Component } from 'react'
import Post from '../Component/Post';
import FullPost from '../Component/FullPost';
import NewPost from '../Component/NewPost';
import Container from 'react-bootstrap/Container'
import Axios from 'axios';


class Blog extends Component {

   state = {
      posts: []
   };


   componentDidMount() {
      Axios
         .get("https://jsonplaceholder.typicode.com/posts")
         .then((response) => {
            this.setState({
               posts: response.data,
            });
             console.log(response);
         });
   }

   render() {

      return (
         <div>
            <Container className="bg-light p-3 card-columns" >
               <Post />
               <Post />
               <Post />
               <Post />
               <Post />
               <Post />
               <Post />
               <Post />
               <Post />
            </Container>
            <Container className="bg-light p-3" >
               <FullPost />
            </Container>
            <Container className="bg-light p-3" >
               <NewPost />
            </Container>
         </div>
      )

      // componentDidMount() {
      //    console.log(componentDidMount)
      // }



   }


}

export default Blog