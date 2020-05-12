import Post from '../Component/Post';
import React, { Component } from 'react'
import axios from '../axios'
import Container from 'react-bootstrap/Container'


class Posts extends Component {

   state = {
      posts: [],
      selectedPostId: null,
      error: false
   };

   componentDidMount() {
      axios
         .get("/posts")
         .then((response) => {

            const updatedPosts = response.data.slice(0, 10).map(post => {
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

      console.log('Posts render')
      let posts = <p>something went wrong</p>

      if (!this.state.error) {
         posts = this.state.posts.map(post =>
            <Post
               imgPath={process.env.PUBLIC_URL + '/photos/unsplash-' + post.id + '.jpg'}
               imgAlt={'photo_' + post.id}
               key={post.id}
               title={post.title}
               author={post.author}
               clicked={() => this.postSelectedHandler(post.id)}
            />
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