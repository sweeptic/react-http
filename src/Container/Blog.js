import React, { Component } from 'react'
import Post from '../Component/Post';
import FullPost from '../Component/FullPost';
import NewPost from '../Component/NewPost';
import Axios from 'axios';
// import styled from 'styled-components';


// const GrayBackground = styled.div`
// background-color: lightgrey;
// `;


class Blog extends Component {

   state = {
      posts: []
   };


   componentDidMount() {
      Axios
         .get("https://jsonplaceholder.typicode.com/posts")
         .then((response) => {

            const updatedPosts = response.data.slice(0, 6).map(post => {
               return {
                  ...post, author: 'Max'
               }
            })

            console.log(updatedPosts)

            this.setState({
               posts: updatedPosts,
            });

         });
   }

   render() {

      const posts = this.state.posts.map(post => <Post key={post.id} title={post.title} author={post.author} />)


      return (
         <div style={{backgroundColor: "#f0f2f5"}}>
            <div className="container p-3 card-columns" >
               {posts}
            </div>
            <div className="container  p-3" >
               <FullPost />
            </div>
            <div className="container p-3" >
               <NewPost />
            </div>
         </div>
      )

   }


}

export default Blog