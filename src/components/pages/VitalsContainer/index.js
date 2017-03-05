import React, { Component } from 'react';
import PatientBanner from '../../molecules/PatientBanner/index.js'
import LoginContainer from '../LoginContainer/index.js'
import BloodPressureCard from '../../molecules/BloodPressureCard/index.js'

class VitalsContainer extends Component {
  render() {
    return (
      <div>
        hi
        <BloodPressureCard />
      </div>
    );
  }
}

export default VitalsContainer;
