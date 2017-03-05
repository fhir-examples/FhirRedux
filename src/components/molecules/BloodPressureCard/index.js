import React, { Component } from 'react';
import {blood} from '../../../actions/index.js';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { cyan500, pinkA200 } from 'material-ui/styles/colors';
import {green100, green500, green700} from 'material-ui/styles/colors';
import { connect } from 'react-redux';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ActionTimeline from 'material-ui/svg-icons/action/timeline';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: cyan500,
    primary2Color: green700,
    primary3Color: green100,
  }
})

class BloodPressureCard extends Component {
  constructor() {
      super();
      this.onSelectVitals = this.onSelectVitals.bind(this);

    }

  onSelectVitals(id) {
    console.log(id)
    this.props.dispatch(blood(id));
    }
    render() {
    const { blood, patient, mrn} = this.props;
    
      return (
  <MuiThemeProvider muiTheme={muiTheme}>
  <Card>
    <CardHeader
      title=" "
      subtitle=""
    />

  <CardTitle title="Blood Pressure"  subtitle={patient} />

    <CardActions>
      <FloatingActionButton
        onClick={this.onSelectVitals.bind(this,mrn)}
        >
      <ActionTimeline />
    </FloatingActionButton>
    </CardActions>

  </Card>
</MuiThemeProvider>
)}
};
const mapStateToProps = ({ patient}) => ({
  blood: patient.bloodData,
  patient: patient.patient,
  mrn: patient.mrn
});
export default  connect(mapStateToProps)(BloodPressureCard);
