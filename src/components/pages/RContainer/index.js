import React, { Component } from 'react';
import PatientBanner from '../../molecules/PatientBanner/index.js'
import LoginContainer from '../LoginContainer/index.js'
import RForm from '../../molecules/RForm/index.js'

class RContainer extends Component {
  render() {
    return (
      <div>
        <RForm/>
      </div>
    );
  }
}

export default RContainer;
