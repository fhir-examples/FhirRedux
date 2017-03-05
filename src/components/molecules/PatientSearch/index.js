import React, { Component } from 'react';
import { connect } from 'react-redux';
import {login, logout} from '../../../actions/index.js';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { cyan500, pinkA200 } from 'material-ui/styles/colors';
import {green100, green500, green700} from 'material-ui/styles/colors';
const dataSource2 = ['9995679', '99912345', '1951076'];
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: cyan500,
    primary2Color: green700,
    primary3Color: green100,
  }
})
class PatientSearch extends Component {
  constructor() {
      super();
      this.onUpdateInput = this.onUpdateInput.bind(this);
    this.state = {
      inputValue : ''
    }
    }

//dispatch a login and logut action.


  onUpdateInput(inputValue) {
    this.props.dispatch(login(inputValue));
    }

  render() {
    const { patient, dob, mrn } = this.props;
    return (
      <MuiThemeProvider muiTheme={muiTheme}>

        <AutoComplete
              floatingLabelText="Select Patient"
              filter={AutoComplete.noFilter}
              openOnFocus={true}
              textFieldStyle={pinkA200}
              dataSource={dataSource2}
              onUpdateInput = {this.onUpdateInput}
            />
    </MuiThemeProvider>

    );
  }
}
const mapStateToProps = ({ patient}) => ({
  patient: patient.patient,
  mrn: patient.mrn,
  dob: patient.dob,
  tele: patient.tele,
  state: patient.state,
  city: patient.city,
});

export default connect(mapStateToProps)(PatientSearch);
