import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { cyan500, pinkA200 } from 'material-ui/styles/colors';
import {green100, green500, green700} from 'material-ui/styles/colors';
import { connect } from 'react-redux';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentCreate from 'material-ui/svg-icons/content/create';
import ActionCheckCircle from 'material-ui/svg-icons/action/check-circle';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import PatientSearch from '../PatientSearch/index.js'
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: cyan500,
    primary2Color: green700,
    primary3Color: green100,
  }
})
//Sadd a diolog box and nested with other react components to make it modualr and easy to create. such as patient search

class ImageUpload extends Component {

  constructor() {
      super();
      this.state = {
          open: false,
        };
    }

  handleOpen = () => {
  this.setState({open: true});
};

handleClose = () => {
  this.setState({open: false});
};
    render() {
    const { name, dob, mrn, tele, state, city } = this.props;

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];
      return (
  <MuiThemeProvider muiTheme={muiTheme}>
  <Card>
    <CardHeader
      title=" "
      subtitle=""
    />

  <CardTitle title={name}  subtitle={dob} />
    <CardText>
      Wound Care Image date
    </CardText>

    <CardActions>
      <ActionCheckCircle />
    </CardActions>
    <div>
            <RaisedButton label="Upload Image" onTouchTap={this.handleOpen} />
            <Dialog
              title="Wound"
              actions={actions}
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}
            >
            <PatientSearch />
            <br/>
              Uplaod an image of your wound to have it analyzed
            </Dialog>
          </div>
  </Card>
</MuiThemeProvider>
)}
};
const mapStateToProps = ({ patient}) => ({
  name: patient.name,
  mrn: patient.mrn,
  dob: patient.dob,
  tele: patient.tele,
  state: patient.state,
  city: patient.city,
});
export default  connect(mapStateToProps)(ImageUpload);
