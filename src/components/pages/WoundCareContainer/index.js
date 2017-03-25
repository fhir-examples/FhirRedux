import React, { Component } from 'react';
import PatientBanner from '../../molecules/PatientBanner/index.js'
import LoginContainer from '../LoginContainer/index.js'
import ImageUpload from '../../molecules/ImageUpload/index.js'

class WoundCareContainer extends Component {
  render() {
    return (
      <div>
        wound
        <ImageUpload />
      </div>
    );
  }
}

export default WoundCareContainer;
