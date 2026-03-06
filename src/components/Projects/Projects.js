import React from 'react';

import './Projects.css';

//logos
import react from '../../images/react.png';
import redux from '../../images/redux.png';
import nodejs from '../../images/node-js.png';
import mongodb from '../../images/mongodb-logo.png';
import python from '../../images/python.png';
import pygame from '../../images/pygame.gif';

//NFL Big Data Bowl videos and images
import completionSpread from '../../images/NFL_BDB/completion_spread.mp4';
import expectedVsActual from '../../images/NFL_BDB/expected_vs_actual.mp4';
import stabilityComparison from '../../images/NFL_BDB/stability_comparison.mp4';
import positionComparison from '../../images/NFL_BDB/position_comparison.mp4';
import julianLoveINT from '../../images/NFL_BDB/Julian_Love_INT.mp4';

//Python library logos
import jupyterLogo from '../../images/python_libraries/Jupyter_logo.svg.png';
import pandasLogo from '../../images/python_libraries/pandas.png';
import numpyLogo from '../../images/python_libraries/numpy.jpg';
import sklearnLogo from '../../images/python_libraries/Scikit_learn_logo_small.svg';
import matplotlibLogo from '../../images/python_libraries/matplotlib.jpg';
import seabornLogo from '../../images/python_libraries/seaborn.png';

import DelayedLoopVideo from '../DelayedLoopVideo';

//poll dressing logos
import typescriptLogo from '../../images/typescript.svg';
import viteLogo from '../../images/vite.svg';
import firebaseLogo from '../../images/firebase.svg';
import leafletLogo from '../../images/leaflet.png';

//poll dressing
import pdMapOverview from '../../images/PollDressing/map-overview.png';
import pdMyLocations from '../../images/PollDressing/my-locations.png';
import pdVolunteerAccess from '../../images/PollDressing/volunteer-access.png';
import pdAdminDashboard from '../../images/PollDressing/admin-dashboard.png';
import pdAdminStats from '../../images/PollDressing/admin-stats.png';

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
          <div className="honorable-mention-badge">
            Honorable Mention - NFL Big Data Bowl 2026
          </div>
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
              title="Kaggle Competition Page"
              href="https://www.kaggle.com/competitions/nfl-big-data-bowl-2026-analytics"
              target="_blank"
              rel="noopener noreferrer"
            >
              Competition
            </a>
            |
            <a
              className="app-link"
              title="Read the Full Write-up"
              href="https://www.kaggle.com/competitions/nfl-big-data-bowl-2026-analytics/writeups/new-writeup-1765772248137"
              target="_blank"
              rel="noopener noreferrer"
            >
              Write-up
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
          <Carousel interval={10000}>
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
              <DelayedLoopVideo
                src={julianLoveINT}
                delay={7000}
                startTime={2}
                style={{ width: '100%', maxHeight: '400px', objectFit: 'contain' }}
              />
              <div className="hero-titles">
                <h3>Real-Time Player Tracking</h3>
                <p>
                  Using NFL Next Gen Stats tracking data to measure Closure Ratio —
                  how much of the initial gap a defender closes during ball flight.
                  Julian Love closes 72% of the gap on this play for the interception.
                </p>
              </div>
            </section>
            <section className="hero">
              <DelayedLoopVideo
                src={completionSpread}
                delay={7000}
                style={{ width: '100%', maxHeight: '400px', objectFit: 'contain' }}
              />
              <div className="hero-titles">
                <h3>Strong Predictive Power</h3>
                <p>
                  Defenders who close 80%+ of the gap allow just 29.4% completions
                  compared to 69.7% for those closing less than 20%. The 40 percentage
                  point spread is highly significant (χ² = 453.8, p &lt; 0.001).
                </p>
              </div>
            </section>
            <section className="hero">
              <DelayedLoopVideo
                src={positionComparison}
                delay={7000}
                style={{ width: '100%', maxHeight: '400px', objectFit: 'contain' }}
              />
              <div className="hero-titles">
                <h3>Position-Specific Insights</h3>
                <p>
                  Cornerbacks ("Shadow") close 3.5pp more gap in zone vs. man coverage.
                  Safeties ("Ball Hawk") maintain consistent ball-hawking regardless of scheme.
                  Linebackers ("Zone Dropper") contain rather than cover.
                </p>
              </div>
            </section>
            <section className="hero">
              <DelayedLoopVideo
                src={expectedVsActual}
                delay={7000}
                style={{ width: '100%', maxHeight: '400px', objectFit: 'contain' }}
              />
              <div className="hero-titles">
                <h3>Expected vs Actual Performance</h3>
                <p>
                  Compare defender performance against expected closure rates,
                  identifying players who consistently outperform or underperform
                  their coverage assignments.
                </p>
              </div>
            </section>
            <section className="hero">
              <DelayedLoopVideo
                src={stabilityComparison}
                delay={7000}
                style={{ width: '100%', maxHeight: '400px', objectFit: 'contain' }}
              />
              <div className="hero-titles">
                <h3>Metric Stability</h3>
                <p>
                  Split-half reliability testing (r = 0.47) confirms Closure Ratio
                  measures persistent skill rather than random variation. The metric
                  remains predictive even within tightly contested plays.
                </p>
              </div>
            </section>
          </Carousel>
          <p className="made-with">Made with:</p>
          <ul className="project-stack">
            <li className="tech-card">
              <img src={python} alt="Python logo" className="logo200" />
              <span>Python</span>
            </li>
            <li className="tech-card">
              <img src={jupyterLogo} alt="Jupyter logo" className="logo32" />
              <span>Jupyter</span>
            </li>
            <li className="tech-card">
              <img src={pandasLogo} alt="pandas logo" className="logo200" />
              <span>pandas</span>
            </li>
            <li className="tech-card">
              <img src={numpyLogo} alt="NumPy logo" className="logo32" />
              <span>NumPy</span>
            </li>
            <li className="tech-card">
              <img src={sklearnLogo} alt="scikit-learn logo" className="logo200" />
              <span>scikit-learn</span>
            </li>
            <li className="tech-card">
              <img src={matplotlibLogo} alt="matplotlib logo" className="logo32" />
              <span>matplotlib</span>
            </li>
            <li className="tech-card">
              <img src={seabornLogo} alt="seaborn logo" className="logo32" />
              <span>seaborn</span>
            </li>
          </ul>
        </div>
        <div className="Project-card PollDressing">
          <h3>
            <a
              className="github-link"
              title="Campaign Sign Tracker Repository"
              href="https://github.com/SamDaltonJr/poll_dressing_primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Campaign Sign Tracker
            </a>
            |
            <a
              className="app-link"
              title="Campaign Sign Tracker Live"
              href="https://samdaltonjr.github.io/poll_dressing_primary/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
            </a>
          </h3>
          <Carousel>
            <section className="hero">
              <img src={pdMapOverview} alt="Campaign Sign Tracker map overview" />
              <div className="hero-titles">
                <h3>Coordinate Campaign Signs Across North Texas</h3>
                <p>
                  A mobile-friendly web app that helps volunteers coordinate
                  campaign sign placement at polling locations across Dallas,
                  Tarrant, Denton, and Collin counties. Features an interactive
                  map with color-coded pins showing location status in real time.
                </p>
              </div>
            </section>
            <section className="hero">
              <img src={pdVolunteerAccess} alt="Volunteer access gate" />
              <div className="hero-titles">
                <h3>Volunteer Claim & Confirm Workflow</h3>
                <p>
                  Volunteers enter an access code from their coordinator, claim
                  available locations, drive out to place signs, then confirm
                  placement with a sign count — all from their phone.
                </p>
              </div>
            </section>
            <section className="hero">
              <img src={pdMyLocations} alt="My Locations page" />
              <div className="hero-titles">
                <h3>Route Planning</h3>
                <p>
                  The "My Locations" tab shows all claimed sites and generates
                  multi-stop Google Maps directions for efficient route planning.
                </p>
              </div>
            </section>
            <section className="hero">
              <img src={pdAdminDashboard} alt="Admin Dashboard" />
              <div className="hero-titles">
                <h3>Admin Dashboard</h3>
                <p>
                  Admins can manage all 722 polling locations, filter by status,
                  search by name or county, and take actions like marking locations
                  as dressed or reverting status changes.
                </p>
              </div>
            </section>
            <section className="hero">
              <img src={pdAdminStats} alt="Admin Stats" />
              <div className="hero-titles">
                <h3>County-by-County Stats</h3>
                <p>
                  Track progress across 9 counties with real-time stats showing
                  dressed, claimed, and available locations with visual progress
                  bars for each county.
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
              <img src={typescriptLogo} alt="TypeScript logo" className="logo32" />
              <span>TypeScript</span>
            </li>
            <li className="tech-card">
              <img src={leafletLogo} alt="Leaflet logo" className="logo200" />
              <span>Leaflet</span>
            </li>
            <li className="tech-card">
              <img src={firebaseLogo} alt="Firebase logo" className="logo32" />
              <span>Firebase</span>
            </li>
            <li className="tech-card">
              <img src={viteLogo} alt="Vite logo" className="logo32" />
              <span>Vite</span>
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
