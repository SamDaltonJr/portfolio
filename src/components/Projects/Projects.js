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

//inventory manager
import fo76dashboard from '../../images/FO76/dashboard.png';
import fo76add from '../../images/FO76/add-item.png';
import fo76view from '../../images/FO76/view-item.png';
import fo76edit from '../../images/FO76/edit-item.png';

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
              target="_blank"
              rel="noopener noreferrer"
            >
              GoCery
            </a>
            |
            <a
              className="app-link"
              title="GoCery Live"
              href="https://gocery-app.netlify.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
            </a>
          </h3>
          <p className="project-description" />
          <Carousel>
            <section className="hero">
              <img src={gocerylanding} alt="Gocery Landing Page" />
              <div className="hero-titles">
                <h3>Welcome to GoCery</h3>
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
                <h3>Breeze through shopping lists</h3>
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
                  Find the nearest grocery store to associate with your shopping
                  list. Just start entering your items and you're ready to shop.
                </p>
              </div>
            </section>
          </Carousel>
          <p className="made-with">Made with:</p>
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
        <div className="Project-card">
          <h3>
            <a
              className="github-link"
              title="Inventory Manager App repository"
              href="https://github.com/thinkful-ei25/sam-inventory-management-client"
              target="_blank"
              rel="noopener noreferrer"
            >
              Inventory Manager
            </a>
            |
            <a
              className="app-link"
              title="Inventory Managemer App"
              href="https://inventory-management-app-fo76.herokuapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
            </a>
          </h3>
          <Carousel>
            <section className="hero">
              <img src={fo76dashboard} alt="Inventory Manager dashboard" />
              <div className="hero-titles">
                <h3>Welcome to the Inventory Manager App</h3>
                <p>
                  A companion app for Fallout 76, a game made by Bethesda Game
                  Studios, to help track a user's character inventory.
                </p>
              </div>
            </section>
            <section className="hero">
              <img src={fo76add} alt="Adding an item to your inventory" />
              <div className="hero-titles">
                <h3>Add items to your character's inventory</h3>
                <p>
                  Easily add items to your inventory and keep them organized by
                  category.
                </p>
              </div>
            </section>
            <section className="hero">
              <img src={fo76view} alt="Gocery Items Page" />
              <div className="hero-titles">
                <h3>View the details of your items</h3>
                <p>
                  Click on an item in your inventory to see more information
                  about it, giving the user the option to edit or drop the item.
                </p>
              </div>
            </section>
            <section className="hero">
              <img src={fo76edit} alt="Gocery Create New List" />
              <div className="hero-titles">
                <h3>Edit the items in your inventory</h3>
                <p>
                  By editing an item, you can easily change its details or move
                  it between categories in your inventory.
                </p>
              </div>
            </section>
          </Carousel>
          <p className="made-with">Made with:</p>
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
