import React, { Component } from 'react'

class FullPost extends Component {
    render() {

        let post = <p>Please select a Post!</p>

        post = (
            <div className="card border-primary mb-3 text-center" >
                <div className="card-body">
                    <h4 className="card-title">Title</h4>
                    <p className="card-text">Content</p>
                    <button className="btn btn-warning" type="button">Delete Post</button>
                </div>
            </div>
        )


        return post;
    }
}


export default FullPost