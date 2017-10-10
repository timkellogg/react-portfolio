// @flow
import React from 'react';
import './Landing.css';

import ProjectList from './ProjectList';
import Header      from './Header';
import Navbar      from './Navbar';

export default () => {
  return (
    <main className="Landing grid">
      <section className="panel--left">
        <Navbar />
        <Header />
      </section>
      <section className="panel--right">
        <ProjectList />
      </section>
    </main>
  )
}

