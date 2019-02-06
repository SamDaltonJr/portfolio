import React from 'react';

import './Projects.css';

import react from '../../images/react.png';
import redux from '../../images/redux.png';
import nodejs from '../../images/node-js.png';
import mongodb from '../../images/mongodb-logo.png';

export default class Projects extends React.Component {
  render() {
    return (
      <div className="Projects-container">
        <h2>My Projects</h2>
        <div className="Project-card">
          <h3>
            <a
              className="github-link"
              title="GoCery repository"
              href="https://github.com/thinkful-ei25/hiphip"
            >
              GoCery
            </a>
            |
            <a
              className="app-link"
              title="GoCery Live"
              href="https://gocery-app.netlify.com"
            >
              Live
            </a>
          </h3>
          <p className="project-description">
            Spend less time in the supermarket by using crowd-sourced aisle
            information.
          </p>
          <ul className="project-stack">
            <li className="ul-header">Made With</li>
            <li className="tech-card">
              <img src={react} alt="react logo" className="logo32" />
              <span>React</span>
            </li>
            <li className="tech-card">
              <img src={redux} alt="redux logo" className="logo32" />
              <span>Redux</span>
            </li>
            <li className="tech-card">
              <img src={nodejs} alt="nodejs logo" className="logo200" />
              <span>Node.js</span>
            </li>
            <li className="tech-card">
              <img src={mongodb} alt="mongodb logo" className="logo200" />
              <span>mongoDB</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
