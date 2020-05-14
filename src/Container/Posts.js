import Post from '../Component/Post';
import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

// import axios from '../axios'
import axios from 'axios';

class Posts extends Component {

   state = {
      posts: [],
      selectedPostId: null,
      error: false
   };

   componentDidMount() {
      console.log('............Post componentDidMount called')
      axios
         .get("https://jsonplaceholder.typicode.com/posts/")
         .then((response) => {
            console.log('............componentDidMount then -> Post fetch data')
            const updatedPosts = response.data.slice(0, 10).map(post => {
               return {
                  ...post, author: 'Max'
               }
            })
            console.log('............componentDidMount then -> SetState called')
            this.setState({
               posts: updatedPosts,
            });

         })
         .catch((error) => {
            this.setState({ error: true })
         })
   }

   postSelectedHandler(id) {
      console.log('............Posts setstate called')
      this.setState({
         selectedPostId: id
      })
   }

   static getDerivedStateFromProps(props, state) {
      console.log('............Posts call getDerivedStateFromProps')
      return null;
   }

   shouldComponentUpdate() {
      console.log('............Posts call shouldComponentUpdate')
      return true;
   }

   getSnapshotBeforeUpdate() {
      console.log('............Posts call getSnapshotBeforeUpdate')
      return null;
   }


   componentDidUpdate() {
      console.log('............Posts call componentDidUpdate')
   }

   render() {
      console.log('............Posts Posts render')
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
         console.log('............create Post component finished ')
      }

      return (
         <Container className="p-3 mt-5 card-columns">
            {posts}
         </Container>
      )
   }

}

export default Posts