import './App.css';
import React, { Component } from 'react'
import Post from './Component/Post';
import Container from 'react-bootstrap/Container'


class App extends Component {
  render() {
    return (
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
    )
  }
}


export default App;