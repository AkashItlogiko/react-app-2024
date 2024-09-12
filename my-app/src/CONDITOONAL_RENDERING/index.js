import React, { Component } from 'react';

import HomePage from './HomePage';

import LoginPage from './LoginPage';

class CONDITOONAL_RENDERING extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    const { isLoggedIn } = this.state;

    return <div>{isLoggedIn && <HomePage />}</div>;
  }
}

export default CONDITOONAL_RENDERING;
