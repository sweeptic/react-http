import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'


export default class NewPost extends Component {
   state = {
      title: '',
      author: 'Max',
      content: ''
   }

   postDataHandler = () => {
      console.log('.....NewPost postDataHandler')
      // const data = {
      //    title: this.state.title,
      //    author: this.state.author,
      //    content: this.state.content,
      // }
      // Axios.post("/posts", data)
      // .then(response => {
      //     console.log(response)
      // })
   }

   static getDerivedStateFromProps(props, state) {
      console.log('.....NewPost call getDerivedStateFromProps')
      return null;
   }

   shouldComponentUpdate() {
      console.log('.....NewPost call shouldComponentUpdate')
      return true;
   }

   getSnapshotBeforeUpdate() {
      console.log('.....NewPost call getSnapshotBeforeUpdate')
      return null;
   }


   componentDidUpdate() {
      console.log('.....NewPost call componentDidUpdate')
      console.log(this)

   }

   componentDidMount() {
      console.warn('.....NewPost componentDidMount called')
      // console.log(this.props)
      console.log(this)
   }

   render() {
      console.log('.....NewPost render')
      return (
         <Container className="p-3 mt-5">
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
                           <textarea value={this.state.content} className="form-control" placeholder="Blog Post" onChange={(event) => this.setState({ content: event.target.value })}></textarea>
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