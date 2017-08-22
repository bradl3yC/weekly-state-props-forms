import React, { Component } from 'react';
import Navbar from '../Navbar'
import PlayList from '../PlayList'
import PlayListForm from '../PlayListForm'
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <PlayList />
        <PlayListForm />
      </div>
    );
  }
}

export default App;
