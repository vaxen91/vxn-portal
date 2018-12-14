import React, { Component } from 'react'
import './App.css'
import Blog from './components/Blog/Blog';
class App extends Component {
  render () {
    return (
        <div class="container-fluid">
          <Blog />
        </div>
    )
  }
}

export default App