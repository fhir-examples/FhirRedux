import React, { Component } from 'react';
import { connect } from 'react-redux';
import {login, logout} from '../../../actions/index.js';
import PatientBanner from '../../molecules/PatientBanner/index.js'
import CardPatient from '../../molecules/Card/index.js'

class App extends Component {
  render() {
    return (
      <div >
        <PatientBanner />
        <br/>
        <CardPatient />
      </div>
    );
  }
}


export default App;
