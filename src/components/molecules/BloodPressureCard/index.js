import React, { Component } from 'react';
import {bloodAdd} from '../../../actions/index.js';
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
import { Chart } from 'react-google-charts';

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


  setInterval( _ =>{
this.props.dispatch(bloodAdd(id))
}, 2000 )

    }
    render() {
    const { bloodData, name, mrn,b} = this.props;

      return (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div>
  <Card>
    <CardHeader
      title=" "
      subtitle=""
    />

  <CardTitle title="Blood Pressure"  subtitle={name} />

    <CardActions>
      <FloatingActionButton
        onClick={this.onSelectVitals.bind(this,mrn)}
        >
      <ActionTimeline />
    </FloatingActionButton>
    </CardActions>
    <Chart
        chartType="ScatterChart"
        data={bloodData}
        options={{}}
        graph_id="ScatterChart"
        width="100%"
        height="400px"
        legend_toggle
      />  <Chart
            chartType="BarChart"
            data={bloodData}
            options={{}}
            graph_id="ScatterChart1"
            width="100%"
            height="400px"
            legend_toggle
          />
  </Card>
{b}


</div>
</MuiThemeProvider>
)}
};
const mapStateToProps = ({ patient}) => ({
  bloodData: patient.bloodData,
  name: patient.name,
  mrn: patient.mrn,
  b: patient.b
});
export default  connect(mapStateToProps)(BloodPressureCard);
