import Post from '../Component/Post';
import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import { Route } from 'react-router-dom'
import axios from '../axios'
// import axios from 'axios';
import FullPost from './../Component/FullPost';


class Posts extends Component {

   state = {
      posts: [],
      selectedPostId: null,
      error: false
   };

   componentDidMount() {
      axios
         .get("/posts.json")
         .then((response) => {
            const updatedPosts = response.data.slice(0, 3).map(post => {
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

   postSelectedHandler = (id) => {
      this.props.history.push('/posts/' + id);
      // console.log(this.props.match.url)
   }

   render() {
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
         <div>
            <Container className="p-3 mt-5 card-columns">
               {posts}
            </Container>

            <Route path={this.props.match.url + '/:id'} exact component={FullPost} />

         </div>

      )
   }

}

export default Posts