import React from 'react';

import './HomePage.css';

import Projects from '../Projects';
import About from '../About';
import Contact from '../Contact';

export default function HomePage() {
  return (
    <React.Fragment>
      <header>
        <div className="space-eater" />
      </header>
      <main>
        <section id="projects">
          <Projects />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </React.Fragment>
  );
}
