import React from 'react';

import './Contact.css';

import ContactForm from '../ContactForm';
export default class Contact extends React.Component {
  render() {
    return (
      <div className="Contact-container">
        <h2>Contact Me</h2>
        <div className="Contact-card">
          <ContactForm />
        </div>
      </div>
    );
  }
}
