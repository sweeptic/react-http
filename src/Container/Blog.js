import React, { Component } from 'react'
import Post from './../Component/Post';
import FullPost from './../Component/FullPost';
import NewPost from './../Component/NewPost';
import Container from 'react-bootstrap/Container'


class Blog extends Component {
    render() {
        return (
            <div>
                <Container className="bg-light p-3 card-columns" >
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </Container>
                <Container className="bg-light p-3" >
                    <FullPost />
                </Container>
                <Container className="bg-light p-3" >
                    <NewPost />
                </Container>
            </div>
        )
    }
}

export default Blog