import React, { Component } from 'react';
import ProjectList from './ProjectList';
import Header from './Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ProjectList />
      </div>
    );
  }
}

export default App;
