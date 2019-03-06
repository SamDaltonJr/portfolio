import React from 'react';

import github from '../../images/github-white.png';
import linkedin from '../../images/linkedin.png';

import './NavBar.css';

export default class NavBar extends React.Component {
  constructor() {
    super();
    this.state = { width: window.innerWidth };
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth, showingMore: false });
  };

  toggle = () => {
    const { showingMore } = this.state;
    this.setState({ showingMore: !showingMore });
  };

  render() {
    const { width, showingMore } = this.state;
    const isMobile = width <= 800;
    let moreDropdown;
    if (showingMore) {
      moreDropdown = (
        //maybe take out the onClicks when the NavBar is fixed to the top, if it does that
        <div id="myLinks">
          <a href="#projects" onClick={this.toggle}>
            Projects
          </a>
          <a href="#about" onClick={this.toggle}>
            About Me
          </a>
          <a href="#contact" onClick={this.toggle}>
            Contact
          </a>
          <a
            title="github @SamDaltonJr"
            href="https://github.com/SamDaltonJr"
            target="_blank"
            rel="noopener noreferrer"
            onClick={this.toggle}
          >
            <img src={github} alt="github logo" />
          </a>
          <a
            title="LinkedIn @SamDaltonJr"
            href="https://linkedin.com/in/samdaltonjr"
            target="_blank"
            rel="noopener noreferrer"
            onClick={this.toggle}
          >
            <img src={linkedin} alt="LinkedIn logo" className="linkedin" />
          </a>
        </div>
      );
    }
    if (isMobile) {
      return (
        <div className="NavBar-mobile">
          <a href="#home" className="NavBar-header">
            Sam Dalton
          </a>
          {moreDropdown}
          <a href="#top" className="icon" onClick={this.toggle}>
            <i className="fa fa-bars" />
          </a>
        </div>
      );
    }
    return (
      <div className="NavBar-container">
        <nav className="NavBar">
          <ul>
            <li className="NavBar-header navbar-link">
              <a href="#home">Sam Dalton</a>
            </li>
            <li className="right pic navbar-link">
              <a
                title="LinkedIn @SamDaltonJr"
                href="https://linkedin.com/in/samdaltonjr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="LinkedIn logo" className="linkedin" />
              </a>
            </li>
            <li className="right pic navbar-link">
              <a
                title="github @SamDaltonJr"
                href="https://github.com/SamDaltonJr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="github logo" />
              </a>
            </li>
            <li className="right navbar-link">
              <a href="#contact">Contact</a>
            </li>
            <li className="right navbar-link">
              <a href="#about">About Me</a>
            </li>
            <li className="right navbar-link">
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
