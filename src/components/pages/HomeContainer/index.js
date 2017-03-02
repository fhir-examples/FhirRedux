import React, { Component } from 'react';
import { connect } from 'react-redux';
import {login, logout} from '../../../actions/index.js';

class App extends Component {
  constructor() {
      super();
      this.login = this.login.bind(this);
      this.logout = this.logout.bind(this);

    }

//dispatch a login and logut action. 

  login() {
      this.props.dispatch(login());
  }

  logout(){
    this.props.dispatch(logout());
  }
  render() {
    const { patients, doc } = this.props;
    return (
      <div className="App">
        <div className="App-header">

          <h2> to React </h2>
          <h4> {patients}</h4>
            <input
            type="submit"
            value="login"
            onClick={this.login}
          />
          <input
          type="submit"
          value="logout"
          onClick={this.logout}
        />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
const mapStateToProps = ({ patients, videos, doc }) => ({
  patients: patients.patients
});

export default connect(mapStateToProps)(App);
