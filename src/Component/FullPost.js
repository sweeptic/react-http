import React, { Component } from 'react'
import axios from '../axios'
import { Route, Switch, Redirect } from 'react-router-dom';


class FullPost extends Component {
   state = {
      loadedPost: null,
   }

   componentDidMount() {
      this.loadData();
      // console.log('didmount')
   }

   componentDidUpdate() {
      this.loadData();
      // console.log('didupdate')
   }

   loadData() {
      console.log(this.props.match.params.id)
      if (this.props.match.params.id) {
         if (!this.state.loadedPost
            || (this.state.loadedPost && this.state.loadedPost.id !== +this.props.match.params.id)) {
            axios.get('/posts/' + this.props.match.params.id + '.json')
               .then(
                  response => {
                     if (response && !response.data) {
                        console.log(this)
                        this.props.history.replace('/posts');
                     }
                     this.setState({ loadedPost: response.data });
                  }
               );
         }
      }
   }



   deletePostHandler = () => {
      console.log('deleting selected post')
   }

   render() {

      let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;

      if (this.props.match.params.id) {
         post = <p style={{ textAlign: "center" }}>Loading...!</p>;
      }

      if (this.state.loadedPost) {
         post = (
            <div className="container p-3 mt-5">
               <div className="card mb-3 text-center" >

                  <img className="card-img-top"
                     src={process.env.PUBLIC_URL + '/photos/unsplash-' + this.props.match.params.id + '.jpg'}
                     alt={'photo_' + this.props.match.params.id}
                  />
                  <div className="card-body p-0">
                     <h4 className="card-title border-bottom p-3">{this.state.loadedPost.title}</h4>
                     <p className="card-text text-muted border-bottom p-3">{this.state.loadedPost.body}</p>
                     <button className="mb-3 btn btn-warning" type="button" onClick={this.deletePostHandler} >Delete Post</button>
                  </div>
               </div>
            </div>

         )
      }
      return post;
   }
}


export default FullPost