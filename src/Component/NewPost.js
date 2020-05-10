import React, { Component } from 'react'

export default class NewPost extends Component {
   state = {
      title: '',
      author: 'Max',
      content: ''
   }

   render() {
      return (
         <div className="card p-4 ">
            <div className="card-body">
               <h3 className="text-center">New Post</h3>
               <hr />


               <div className="row">

                  <div className="col-md-6">
                     <div className="form-group">
                        <input type="text" className="form-control" placeholder="Title" />
                     </div>
                  </div>


                  <div className="col-md-6">
                     <div className="form-group">

                        <select className="form-control" id="gender">
                           <option value="Max">Max</option>
                           <option value="Anna">Anna</option>
                        </select>
                     </div>
                  </div>

               </div>


               <div className="row">
                  <div className="col-md-12">
                     <div className="form-group">
                        <textarea className="form-control" placeholder="Blog Post"></textarea>
                     </div>
                  </div>
                  <div className="col-md-12">
                     <div className="form-group">
                        <input type="submit" value="Submit" className="btn btn-outline-danger btn-block" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}
