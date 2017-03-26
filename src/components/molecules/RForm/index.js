import React, { Component } from 'react';
import {rdata} from '../../../actions/index.js';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField'
import { Field, reduxForm } from 'redux-form'
import { cyan500, pinkA200 } from 'material-ui/styles/colors';
import {green100, green500, green700} from 'material-ui/styles/colors';
import { connect } from 'react-redux';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentCreate from 'material-ui/svg-icons/content/create';
import RaisedButton from 'material-ui/RaisedButton';
import { syncHistoryWithStore } from 'react-router-redux';
import { IndexRedirect, Router, Route, browserHistory } from 'react-router';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: cyan500,
    primary2Color: green700,
    primary3Color: green100,
  }
})

const styles = {
    main: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
    },

};

class RForm extends Component {
  constructor() {
      super();
      this.onUpdateInput = this.onUpdateInput.bind(this);
    this.state = {
      inputValue : '',
      data:'',
      email:'',
      name:'',

    }
    }

//dispatch a login and logut action.


  onUpdateInput(inputValue) {

    }
    loginClick = () => {
  let inputValue = {
    name: this.state.name,
    email: this.state.email,
    data: this.state.data
  }
this.props.dispatch(rdata(inputValue));
        console.log(this.state.name);
    browserHistory.push("/rhome")
      }

dataChange = (event) => {
  this.setState({
    data: event.target.value,
  });

};
emailChange = (event) => {
  this.setState({
    email: event.target.value,
  });

};
nameChange = (event) => {
  this.setState({
    name: event.target.value,
  });
};
  render() {

    return (

      <MuiThemeProvider muiTheme={muiTheme}>
      <div style={styles.main}>

        <TextField
          hintText="Add your name"
          floatingLabelText="Name"
          onChange={this.nameChange}
        /><br />
        <TextField
          hintText="Add Email"
          floatingLabelText="Email"
          onChange={this.emailChange}
        /><br/>
        <TextField
          hintText="Add the meta data"
          floatingLabelText="Meta data"
          onChange={this.dataChange}
        /><br />
        <br />
      <RaisedButton onClick={this.loginClick} label="Send" primary={true} />
      </div>
    </MuiThemeProvider>
    );
  }
}
const mapStateToProps = ({ patient}) => ({
  name: patient.name,
  mrn: patient.mrn,
  dob: patient.dob,
  tele: patient.tele,
  state: patient.state,
  city: patient.city,
});

export default  connect(mapStateToProps)(RForm);
