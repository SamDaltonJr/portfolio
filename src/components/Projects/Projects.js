import React from 'react';

import './Projects.css';

//logos
import react from '../../images/react.png';
import redux from '../../images/redux.png';
import nodejs from '../../images/node-js.png';
import mongodb from '../../images/mongodb-logo.png';
import python from '../../images/python.png';
import pygame from '../../images/pygame.gif';

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

//blackjack
import blackjack1 from '../../images/Blackjack/screenshot-1.png';
import blackjack2 from '../../images/Blackjack/screenshot-2.png';

//noteshark
import noteshark1 from '../../images/NoteShark/homepage.png';
import noteshark2 from '../../images/NoteShark/guess-note.png';
import noteshark3 from '../../images/NoteShark/tracking-progress.png';
import noteshark4 from '../../images/NoteShark/correct-note.png';

import Carousel from '../Carousel';

export default class Projects extends React.Component {
  render() {
    return (
      <div className="Projects-container">
        <h2>My Projects</h2>
        <div className="Project-card NFL-BDB">
          <h3>
            <a
              className="github-link"
              title="NFL Big Data Bowl 2026 Repository"
              href="https://github.com/SamDaltonJr/NFL_BDB_2026"
              target="_blank"
              rel="noopener noreferrer"
            >
              NFL Big Data Bowl 2026
            </a>
            |
            <a
              className="app-link"
              title="Kaggle Competition Write-up"
              href="https://www.kaggle.com/competitions/nfl-big-data-bowl-2026-analytics"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kaggle
            </a>
            |
            <a
              className="app-link"
              title="Competition Video Presentation"
              href="https://youtu.be/R-dqwaqfOtw?si=N86xRgw1zuv4uxkZ"
              target="_blank"
              rel="noopener noreferrer"
            >
              Video
            </a>
          </h3>
          <Carousel>
            <section className="hero">
              <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/R-dqwaqfOtw"
                title="NFL Big Data Bowl 2026 - Closure Ratio Presentation"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ maxWidth: '100%' }}
              />
            </section>
            <section className="hero">
              <div className="hero-titles">
                <h3>Introducing Closure Ratio</h3>
                <p>
                  A new metric that quantifies how effectively defenders close the
                  gap to receivers during ball flight. Analyzed 12,964 targeted plays
                  from the 2023-24 NFL season using Next Gen Stats tracking data.
                </p>
              </div>
            </section>
            <section className="hero">
              <div className="hero-titles">
                <h3>Strong Predictive Power</h3>
                <p>
                  Defenders who close 80%+ of the gap allow just 29.4% completions
                  compared to 69.7% for those closing less than 20%. The 40 percentage
                  point spread is highly significant (χ² = 453.8, p &lt; 0.001) with
                  a large effect size (Cohen's h = 0.52).
                </p>
              </div>
            </section>
            <section className="hero">
              <div className="hero-titles">
                <h3>Rigorous Statistical Analysis</h3>
                <p>
                  Employed bootstrap resampling with 1,000 iterations, split-half
                  reliability testing (r = 0.47), and logistic regression modeling
                  achieving 0.740 AUC. The metric remains predictive even within
                  tightly contested plays.
                </p>
              </div>
            </section>
            <section className="hero">
              <div className="hero-titles">
                <h3>Actionable Insights for Teams</h3>
                <p>
                  Reveals position-specific coverage patterns: cornerbacks close 3.5pp
                  more gap in zone vs. man coverage, while safeties maintain consistent
                  ball-hawking regardless of scheme. Provides player rankings and
                  coverage-adjusted percentiles.
                </p>
              </div>
            </section>
          </Carousel>
          <p className="made-with">Made with:</p>
          <ul className="project-stack">
            <li className="tech-card">
              <img src={python} alt="python logo" className="logo200" />
              <span>Python</span>
            </li>
            <li className="tech-card">
              <span>Jupyter</span>
            </li>
            <li className="tech-card">
              <span>pandas</span>
            </li>
            <li className="tech-card">
              <span>NumPy</span>
            </li>
            <li className="tech-card">
              <span>scikit-learn</span>
            </li>
            <li className="tech-card">
              <span>matplotlib</span>
            </li>
            <li className="tech-card">
              <span>seaborn</span>
            </li>
          </ul>
        </div>
        <div className="Project-card GoCery">
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
                <h3>Shop with GoCery</h3>
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
        <div className="Project-card FO76">
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
              title="Inventory Manager App"
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
              <img src={fo76view} alt="Viewing item details" />
              <div className="hero-titles">
                <h3>View the details of your items</h3>
                <p>
                  Click on an item in your inventory to see more information
                  about it, giving the user the option to edit or drop the item.
                </p>
              </div>
            </section>
            <section className="hero">
              <img src={fo76edit} alt="Editing an item" />
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
        <div className="Project-card Blackjack">
          <h3>
            <a
              className="github-link"
              title="Blackjack github link"
              href="https://github.com/SamDaltonJr/blackjack"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blackjack
            </a>
            |
            <a
              className="app-link"
              title="Download Blackjack app"
              href="/files/blackjack.zip"
              download
            >
              Play
            </a>
          </h3>
          <Carousel>
            <section className="hero">
              <img src={blackjack2} alt="a game of blackjack" />
              <div className="hero-titles">
                <h3>Play a basic game of Blackjack</h3>
                <p>
                  This Blackjack application lets a user play 1-on-1 with the
                  dealerand gives the user recommendations based on the user's
                  card total and the card the dealer is showing.
                </p>
              </div>
            </section>
            <section className="hero">
              <img src={blackjack1} alt="highlight blackjack card counter" />
              <div className="hero-titles">
                <h3>Keep track of the card count</h3>
                <p>
                  The app also features a "count", a system used by card
                  counters to track the favorability of the deck towards the
                  user. A positive count means more high value cards remain in
                  the deck, favoring the user. A negative count means more low
                  value cards remain in the deck, favoring the dealer.
                </p>
              </div>
            </section>
          </Carousel>
          <p className="made-with">Made with:</p>
          <ul className="project-stack">
            <li className="tech-card">
              <img src={python} alt="python logo" className="logo200" />
              <span>python</span>
            </li>
            <li className="tech-card">
              <img src={pygame} alt="pygame logo" className="logo200" />
              <span>pygame</span>
            </li>
          </ul>
        </div>
        <div className="Project-card NoteShark">
          <h3>
            <a
              className="github-link"
              title="Note Shark github link"
              href="https://github.com/thinkful-ei25/knotes-client-sam-allister-mischa"
              target="_blank"
              rel="noopener noreferrer"
            >
              NoteShark
            </a>
            |
            <a
              className="app-link"
              title="NoteShark app link"
              href="https://knotes-client-sam.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
            </a>
          </h3>
          <Carousel>
            <section className="hero">
              <img src={noteshark1} alt="Note Shark homepage" />
              <div className="hero-titles">
                <h3>Test your music knowledge with NoteShark</h3>
                <p>
                  NoteShark tests your basic ability to read basic notes using a
                  spaced repetition algorithm to make sure you truly know your
                  stuff.
                </p>
              </div>
            </section>
            <section className="hero">
              <img src={noteshark2} alt="testing your note knowledge" />
              <div className="hero-titles">
                <h3>Answer the correct note</h3>
                <p>
                  NoteShark will present you with an image of a note and a
                  button where you can click to play the sound of the note.
                </p>
              </div>
            </section>
            <section className="hero">
              <img src={noteshark3} alt="tracking your answers" />
              <div className="hero-titles">
                <h3>Keep track of your progress</h3>
                <p>
                  The app tracks your answers and lets you know which notes
                  you're hitting and which notes you keep missing.
                </p>
              </div>
            </section>
            <section className="hero">
              <img src={noteshark4} alt="correct answer" />
              <div className="hero-titles">
                <h3>You'll be jamming in no time!</h3>
                <p>
                  With NoteShark, you'll get in the groove and master these
                  basic musical notes.
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
