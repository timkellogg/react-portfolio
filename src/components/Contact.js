// @flow

import React from 'react';
import './Contact.css';
import Navbar from './Navbar';

export default () => {
  return (
    <main className="Contact grid">
      <section className="panel--left">
        <Navbar />
        <h1>Need a website?</h1>
      </section>
      <section className="panel--right">
        <form className="Contact-form panel-content">
          <h2>Contact</h2>
          <label for="name">Name</label><br />
          <input name="name" required type="text" /><br />

          <label for="message">Message</label><br />
          <textarea name="message" required></textarea><br />
          <button type="submit">contact</button>
        </form>
      </section>
    </main>
  );
}