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
    console.log('maybe this works');
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
            onClick={this.toggle}
          >
            <img src={github} alt="github logo" />
          </a>
          <a
            title="LinkedIn @SamDaltonJr"
            href="https://linkedin.com/in/samdaltonjr"
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
            <li className="NavBar-header">
              <a href="#home">Sam Dalton</a>
            </li>
            <li className="right pic">
              <a
                title="LinkedIn @SamDaltonJr"
                href="https://linkedin.com/in/samdaltonjr"
              >
                <img src={linkedin} alt="LinkedIn logo" className="linkedin" />
              </a>
            </li>
            <li className="right pic">
              <a
                title="github @SamDaltonJr"
                href="https://github.com/SamDaltonJr"
              >
                <img src={github} alt="github logo" />
              </a>
            </li>
            <li className="right">
              <a href="#contact">Contact</a>
            </li>
            <li className="right">
              <a href="#about">About Me</a>
            </li>
            <li className="right">
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
