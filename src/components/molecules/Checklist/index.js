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

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: cyan500,
    primary2Color: green700,
    primary3Color: green100,
  }
})

class Checklist extends Component {
    render() {
    const { patient, dob, mrn, tele, state, city } = this.props;
      return (
  <MuiThemeProvider muiTheme={muiTheme}>
  <Card>
    <CardHeader
      title=" "
      subtitle=""
    />

    <CardTitle title={patient}  subtitle={dob} />
    <CardText>
      Checklist {city}, {state}
    </CardText>

    <CardActions>
      <ActionCheckCircle />
    </CardActions>

  </Card>
</MuiThemeProvider>
)}
};
const mapStateToProps = ({ patient}) => ({
  patient: patient.patient,
  mrn: patient.mrn,
  dob: patient.dob,
  tele: patient.tele,
  state: patient.state,
  city: patient.city,
});
export default  connect(mapStateToProps)(Checklist);
