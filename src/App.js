import React, { Component } from 'react'
import Blog from './Container/Blog';
import { BrowserRouter } from 'react-router-dom';


class App extends Component {
   render() {
      console.log('App render')
      return (
         <BrowserRouter>
            <Blog />
         </BrowserRouter>
      )
   }
}


export default App;