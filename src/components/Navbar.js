// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default () => {
  const onLanding = window.location.pathname === '/';
  return (
    <nav className="Navbar">
      {onLanding ? '' : <Link className="Navbar-link" to="/">Home</Link>}
      <Link className="Navbar-link" to="/about">About</Link>
      <Link className="Navbar-link" to="/contact">Contact</Link>
    </nav>
  );
}