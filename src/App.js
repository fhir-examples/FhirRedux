import React, { Component, PropTypes } from 'react';
import logo from './logo.svg';
import './App.css';
const linkTo = (location) => (e) => browserHistory.push(location);
import {browserHistory} from 'react-router'
import {NavigationItem} from './components/atoms/Link/index.js'
import {Link} from './components/atoms/index.js'
import 'fhirclient/fhir-client.js'
class App extends Component {
  render() {
      const current = this.props.location.pathname;
let smart = window.FHIR.client({
  serviceUrl: 'https://fhir-open-api-dstu2.smarthealthit.org',
   patientId: "99912345",
  auth: {
    type: 'none'
  }
});

     /* Create a patient welcome banner */
let patientInfo = smart.patient.read();

patientInfo.then(function(p) {
      let name = p.name[0];
      let formatted = name.given.join(" ") + " " + name.family.join(" ");
      console.log(formatted)

    });



smart.api.search({type: "Observation", query: {subject: "99912345"}
  }).then(function(r){
    //  console.log(JSON.stringify(r,null,2));
  });
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <Link to={'/'}>Home </Link>
            <Link to={'/patient'}>Patient </Link>
            <Link to={'/login'}>Logout </Link>

        </div>
        <br/>
      {this.props.children}
      </div>
    );
  }
}



export default App;
