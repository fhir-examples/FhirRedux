import React, { Component } from 'react';
import PatientBanner from '../../molecules/PatientBanner/index.js'
import LoginContainer from '../LoginContainer/index.js'
import Checklist from '../../molecules/Checklist/index.js'

class PreOpContainer extends Component {
  render() {
    return (
      <div>
        <Checklist />
        <Checklist />
        <Checklist />
        <Checklist />
        <Checklist />
        <Checklist />
      </div>
    );
  }
}

export default PreOpContainer;
