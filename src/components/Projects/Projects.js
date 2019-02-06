import React from 'react';

import './Projects.css';

//logos
import react from '../../images/react.png';
import redux from '../../images/redux.png';
import nodejs from '../../images/node-js.png';
import mongodb from '../../images/mongodb-logo.png';

//gocery
import gocerylanding from '../../images/Gocery/landing-page.png';
import lists from '../../images/Gocery/lists-page.png';
import items from '../../images/Gocery/items-page.png';
import newlist from '../../images/Gocery/create-new-list.png';

import Carousel from '../Carousel';

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
          <p className="project-description" />
          <Carousel>
            <section className="hero">
              <img src={gocerylanding} alt="Gocery Landing Page" />
              <div className="hero-titles">
                <h3>Welcome to Gocery</h3>
                <p>
                  Spend less time in the supermarket by using crowd-sourced
                  aisle information.
                </p>
              </div>
            </section>
            <section className="hero">
              <img src={lists} alt="Gocery Lists Page" />
              <div className="hero-titles">
                <h3>Keep track of all your lists</h3>
                <p>
                  Store all your shopping lists in one place and see how far
                  away they are from your current location.
                </p>
              </div>
            </section>
            <section className="hero">
              <img src={items} alt="Gocery Items Page" />
              <div className="hero-titles">
                <h3>Breeze through your shopping list</h3>
                <p>
                  Grocery shopping becomes easier when your shopping list is
                  automatically sorted by aisle location. Adding an item
                  autopopulates aisle information if another user has already
                  inputted that item's location.
                </p>
              </div>
            </section>
            <section className="hero">
              <img src={newlist} alt="Gocery Create New List" />
              <div className="hero-titles">
                <h3>Easily create new lists for your favorite store</h3>
                <p>
                  Using either your current or given location, find the nearest
                  grocery store to associate with your shopping list. Hopefully
                  other users have begun to populate item's aisle locations in
                  that store. Just start entering your items and you're ready to
                  shop.
                </p>
              </div>
            </section>
          </Carousel>
          <ul className="project-stack">
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
