// @flow
import React from 'react';
import './App.css';

import ProjectList from './ProjectList';
import Header      from './Header';

export default () => {
  return (
    <div className="App">
      <Header />
      <ProjectList />
    </div>
  )
}
