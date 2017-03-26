import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles.css'
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
class RHome extends Component {

  render() {
    const { name, email, data } = this.props;
    return (
      <div className="Banner">
        <div className="card">
          <h2> R Banner </h2>
          <h4> Name: {name}  </h4>
          <h4> Email: {email}   </h4>
          <h4>  Data: {data}  </h4>
        </div>
      </div>

    );
  }
}
const mapStateToProps = ({ patient}) => ({
  name: patient.name,
  email: patient.email,
  data: patient.data,
});

export default connect(mapStateToProps)(RHome);
