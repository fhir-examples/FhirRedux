
import React, { Component } from 'react';
import PatientBanner from '../../molecules/PatientBanner/index.js'
import LoginContainer from '../LoginContainer/index.js'
import CardPatient from '../../molecules/Card/index.js'

class PatientContainer extends Component {
  render() {
    return (
      <div>
        <CardPatient />
      </div>
    );
  }
}

export default PatientContainer;
