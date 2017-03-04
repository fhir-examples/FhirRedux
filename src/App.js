import React, { Component, PropTypes } from 'react';
import logo from './logo.svg';
import './App.css';
import {browserHistory} from 'react-router'
import {NavigationItem} from './components/atoms/Link/index.js'
import {Link} from './components/atoms/index.js'
import LoginContainer from './components/pages/LoginContainer/index.js'
import PatientSearch from './components/molecules/PatientSearch/index.js'

import injectTapEventPlugin from 'react-tap-event-plugin';

class App extends Component {
  constructor(props) {
    super(props);
    injectTapEventPlugin();
  }
  render() {

    return (
        <div>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <LoginContainer />
            <PatientSearch />
        </div>

        </div>
        <br/>

      {this.props.children}
      </div>
    );
  }
}



export default App;
