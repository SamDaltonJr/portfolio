import React from 'react';

import './HomePage.css';

import Projects from '../Projects';
import About from '../About';
import Contact from '../Contact';

import me from '../../images/me.jpg';

export default function HomePage() {
  return (
    <React.Fragment>
      <header>
        <div className="space-eater" />
      </header>
      <main>
        <section id="home">
          <div className="intro">
            <div className="intro-card">
              <h1>Sam Dalton</h1>
              <img
                className="prof-pic"
                src={me}
                alt="Sam Dalton on Texas Senate Floor"
              />
              <h2>Full-stack web developer based in Dallas, TX</h2>
            </div>
          </div>
        </section>
        <hr className="divider" />
        <section id="projects">
          <Projects />
        </section>
        <hr className="divider" />
        <section id="about">
          <About />
        </section>
        <hr className="divider" />
        <section id="contact">
          <Contact />
        </section>
      </main>
      <hr />
      <footer>&#9400; 2019 Sam Dalton, Jr.</footer>
      <hr />
      <div className="space-eater-bottom" />
    </React.Fragment>
  );
}
