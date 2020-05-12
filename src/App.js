import React, { Component } from 'react'
import Blog from './Container/Blog';
import { BrowserRouter } from 'react-router-dom';


class App extends Component {
   render() {
      console.log('..App render')
      return (
         <BrowserRouter>
            <Blog />
         </BrowserRouter>
      )
   }


   shouldComponentUpdate() {
      console.log('..App call shouldComponentUpdate')
      return true;
   }

   getSnapshotBeforeUpdate() {
      console.log('..App call getSnapshotBeforeUpdate')
      return null;
   }


   componentDidUpdate() {
      console.log('..App call componentDidUpdate')
   }

   componentDidMount() {
      console.log('..App componentDidMount called')
   }



}


export default App;