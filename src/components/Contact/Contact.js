import React from 'react';

import './Contact.css';

import github from '../../images/github.png';
import linkedin from '../../images/linkedin.png';
import twitter from '../../images/twitter.png';

import ContactForm from '../ContactForm';
export default class Contact extends React.Component {
  render() {
    return (
      <div className="Contact-container">
        <div className="Contact-card">
          <h2>Contact Me</h2>
          <ContactForm />
          <div className="find-me-on">
            <p>
              Send me an email at{' '}
              <a className="email-link" href="mailto: spdaltonjr@gmail.com">
                spdaltonjr@gmail.com
              </a>
            </p>
            <p>Find me on</p>
            <ul className="contact-stack">
              <li className="contact">
                <a
                  title="LinkedIn @SamDaltonJr"
                  href="https://linkedin.com/in/samdaltonjr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedin} alt="LinkedIn logo" />
                </a>
              </li>
              <li className="contact">
                <a
                  title="github @SamDaltonJr"
                  href="https://github.com/SamDaltonJr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={github} alt="github logo" />
                </a>
              </li>
              <li className="contact">
                <a
                  title="twitter @SamDaltonJr"
                  href="https://twitter.com/SamDaltonJr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={twitter} alt="github logo" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
