import React from 'react';
import './Header.css';

export default () => {
  return (
    <header className="Header">
      <h1 className="Header-title">Tim</h1>
      <h1 className="Header-title">Kellogg</h1>
      <h2>Software Engineer</h2>
      <p className="Header-subtitle">
        <span className="Header-spacer">Client </span>
        <span className="Header-spacer">Server </span>
        <span className="Header-spacer">Cloud </span>
      </p>
    </header>
  )
}