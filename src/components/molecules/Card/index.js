import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { cyan500, pinkA200 } from 'material-ui/styles/colors';
import {green100, green500, green700} from 'material-ui/styles/colors';
import { connect } from 'react-redux';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: cyan500,
    primary2Color: green700,
    primary3Color: green100,
  }
})

class CardPatient extends Component {
    render() {
    const { patient, dob, mrn } = this.props;
      return (
  <MuiThemeProvider muiTheme={muiTheme}>
  <Card>
    <CardHeader
      title=" "
      subtitle=""
    />

    <CardTitle title={patient}  subtitle={dob} />
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
    </CardActions>
  </Card>
</MuiThemeProvider>
)}
};
const mapStateToProps = ({ patient}) => ({
  patient: patient.patient,
  mrn: patient.mrn,
  dob: patient.dob,
});
export default  connect(mapStateToProps)(CardPatient);
