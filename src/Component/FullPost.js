import React, { Component } from 'react'
import Axios from 'axios';


class FullPost extends Component {
   state = {
      loadedPost: null
   }


   componentDidUpdate() {

      if (this.props.id) {
         if (!this.state.loadedPost ||
            (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)
         ) {
            Axios
               .get("/posts/" + this.props.id)
               .then((response) => {
                  this.setState({ loadedPost: response.data });
              
               });
         }
      }
   }

   deletePostHandler = () => {
      // Axios.delete("https://jsonplaceholder.typicode.com/posts/" + this.props.id)
      // Axios.delete("/posts/" + this.props.id)
      //    .then(response => {
      //       console.log(response)
      //    })
      console.log('deleting selected post')
   }

   render() {
  
      let post = (
         <div className="card mb-3 text-center border-0" >
            <div className="card-body">
               <p className="card-text text-muted">Please select a post !</p>
            </div>
         </div>)

      if (this.props.id) {
         post = (
            <div className="card mb-3 text-center border-0" >
               <div className="card-body">
                  <p className="card-text text-muted">Loading...</p>
               </div>
            </div>)
      }

      if (this.state.loadedPost) {

         post = (
            <div className="card mb-3 text-center" >
               <div className="card-body p-0">
                  <h4 className="card-title border-bottom p-3">{this.state.loadedPost.title}</h4>
                  <p className="card-text text-muted border-bottom p-3">{this.state.loadedPost.body}</p>
                  <button className="mb-3 btn btn-warning" type="button" onClick={this.deletePostHandler} >Delete Post</button>
               </div>
            </div>
         )
      }

      return post;
   }
}


export default FullPost