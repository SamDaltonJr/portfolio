import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';

import NavBar from './components/NavBar';
import HomePage from './components/HomePage';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="everything">
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
