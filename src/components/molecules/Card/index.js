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
import {database, storage} from '../../../util/firebase.js'
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: cyan500,
    primary2Color: green700,
    primary3Color: green100,
  }
})

class CardPatient extends Component {

    render() {
    const { name, dob, mrn, tele, state, city, pics } = this.props;
      return (
  <MuiThemeProvider muiTheme={muiTheme}>
  <Card>
    <CardHeader
      title=" "
      subtitle=""
    />

  <CardTitle title={name}  subtitle={dob} />
    <CardText>
      Location {city}, {state}
    </CardText>
    <CardText>
      Telephone Number {tele}
    </CardText>
    <CardText>
     <img src={pics} />
    </CardText>

    <CardActions>
      <FloatingActionButton >
      <ContentCreate />
    </FloatingActionButton>
    </CardActions>

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
  pics: patient.pics
});
export default  connect(mapStateToProps)(CardPatient);
