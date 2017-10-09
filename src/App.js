// @flow
import React from 'react';
import ProjectList from './ProjectList';
import Header from './Header';
import './App.css';

export default () => {
  return (
    <div className="App">
      <Header />
      <ProjectList />
    </div>
  )
}
