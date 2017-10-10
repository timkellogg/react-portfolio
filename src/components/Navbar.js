import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default () => {
  return (
    <nav className="Navbar">
      <Link className="Navbar-link" to="/contact">About</Link>
      <Link className="Navbar-link" to="/contact">Contact</Link>
    </nav>
  );
}