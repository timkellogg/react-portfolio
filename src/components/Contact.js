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
        <form action="https://somepage/messages" method="post" className="Contact-form panel-content">
          <label for="name">Name</label><br />
          <input name="name" required type="text" /><br />

          <label for="email">Email:</label><br />
          <input name="email" required type="email" /><br />

          <label for="message">Message</label><br />
          <textarea name="message" required></textarea><br />
          <button type="submit">Send</button>
        </form>
      </section>
    </main>
  );
}