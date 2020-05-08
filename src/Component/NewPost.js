import React, { Component } from 'react'

export default class NewPost extends Component {
    render() {
        return (
            <div class="card p-4 border-primary">
                <div class="card-body">
                    <h3 class="text-center">New Post</h3>
                    <hr />
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="title" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Author" />
                            </div>
                        </div>                    
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <textarea class="form-control" placeholder="Blog Post"></textarea>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <input type="submit" value="Submit" class="btn btn-outline-danger btn-block" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
