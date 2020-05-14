import React, { Component } from 'react'
import Blog from './Container/Blog';
import { BrowserRouter } from 'react-router-dom';


class App extends Component {
   render() {
      return (
         <BrowserRouter basename="/react-http">
            {/* <BrowserRouter> */}
            <Blog />
         </BrowserRouter>
      )
   }
}


export default App;