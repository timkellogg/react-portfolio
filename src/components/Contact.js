// @flow

import React, { Component } from 'react';
import axios from 'axios';
import './Contact.css';
import Navbar from './Navbar';

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: '',
    }
  }

  onSubmit(event) {
    const endpoint = 'https://thawing-citadel-96572.herokuapp.com/'
    // const endpoint = 'http://localhost:3000/contacts';
    const { name, email, message } = this.state;

    event.preventDefault();

    axios.post(endpoint, { name, email, message }).catch(res => {debugger});
  }

  onChange(event) {
    const field = event.target.name;
    const value = event.target.value;

    this.setState({[field]: value});
  }

  render() {
    return (
      <main className="Contact grid">
        <section className="panel--left">
          <Navbar />
          <h1>Need a website?</h1>
        </section>
        <section className="panel--right">
          <form className="Contact-form panel-content" onSubmit={this.onSubmit.bind(this)}>
            <label for="name">Name</label><br />
            <input name="name" value={this.state.name.value} onChange={this.onChange.bind(this)} type="text" /><br />

            <label for="email">Email</label><br />
            <input name="email" value={this.state.email.value} onChange={this.onChange.bind(this)} type="email" /><br />

            <label for="message">Message</label><br />
            <textarea name="message" value={this.state.message.value} onChange={this.onChange.bind(this)}></textarea><br />
            <button>Send</button>
          </form>
        </section>
      </main>
    );
  }
}
// action="http://localhost:4000/contacts" method="POST" 
