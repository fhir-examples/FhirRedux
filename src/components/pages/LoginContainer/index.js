import React, { Component } from 'react';
import {browserHistory} from 'react-router'
import {Link} from '../../atoms'

const linkTo = (location) => (e) => browserHistory.push(location);

class LoginContainer extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2> Login React</h2>
          <Link to={'/'}>Home </Link>
        </div>

      </div>
    );
  }
}

export default LoginContainer;
