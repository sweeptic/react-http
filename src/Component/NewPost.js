import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import { Redirect } from 'react-router-dom';
import axios from '../axios'

export default class NewPost extends Component {
   state = {
      id: '2',
      title: 'abc',
      author: 'fill this',
      userId: 1,
      body: 'lorem',
      submitted: false
   }

   postDataHandler = () => {
      console.log('.....NewPost postDataHandler')
      const data = {
         name: 101,
         title: this.state.title,
         author: this.state.author,
         body: this.state.body,
         id: this.state.id,
         userId: 1
      }
      axios.put("/posts/2.json", data)
         .then(response => {
            console.log(response);
            // this.setState({ submitted: true })
            this.props.history.push('/posts')
         })
   }


   render() {

      let redirect = null;
      if(this.state.submitted) {
         redirect = <Redirect to="posts" />
      }


      return (
         <Container className="p-3 mt-5">

            {redirect}

            <div className="card p-4 ">
               <div className="card-body">
                  <h3 className="text-center">New Post</h3>
                  <hr />
                  <div className="row">
                     <div className="col-md-6">
                        <div className="form-group">
                           <input type="text" className="form-control" placeholder="Title" value={this.state.title} onChange={(event) => this.setState({ title: event.target.value })} />
                        </div>
                     </div>
                     <div className="col-md-6">
                        <div className="form-group">
                           <select value={this.state.author} className="form-control" onChange={(event) => this.setState({ author: event.target.value })}>
                              <option value="Max">Max</option>
                              <option value="Anna">Anna</option>
                           </select>
                        </div>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-md-12">
                        <div className="form-group">
                           <textarea value={this.state.body} className="form-control" placeholder="Blog Post" onChange={(event) => this.setState({ body: event.target.value })}></textarea>
                        </div>
                     </div>
                     <div className="col-md-12">
                        <div className="form-group">
                           <input onClick={this.postDataHandler} type="submit" value="Submit" className="btn btn-danger btn-block" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </Container>
      )
   }
}