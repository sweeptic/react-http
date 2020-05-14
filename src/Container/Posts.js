import Post from '../Component/Post';
import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

 import axios from '../axios'
// import axios from 'axios';

class Posts extends Component {

   state = {
      posts: [],
      selectedPostId: null,
      error: false
   };

   componentDidMount() {
      axios
         // .get("https://jsonplaceholder.typicode.com/posts/")

         .get("/posts/")

         .then((response) => {
            const updatedPosts = response.data.slice(0, 50).map(post => {
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
      let posts = <p>something went wrong</p>

      if (!this.state.error) {
         posts = this.state.posts.map(post =>

            <Link to={'/' + post.id} key={post.id}>
               <Post
                  imgPath={process.env.PUBLIC_URL + '/photos/unsplash-' + post.id + '.jpg'}
                  imgAlt={'photo_' + post.id}
                  key={post.id}
                  title={post.title}
                  author={post.author}
                  clicked={() => this.postSelectedHandler(post.id)}
               />
            </Link>
         )
      }

      return (
         <Container className="p-3 mt-5 card-columns">
            {posts}
         </Container>
      )
   }

}

export default Posts