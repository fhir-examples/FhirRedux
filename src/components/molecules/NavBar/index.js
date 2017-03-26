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
import AppBar from 'material-ui/AppBar';
import logo from '../../../logo.svg';
import {browserHistory} from 'react-router'
import {Link} from '../../atoms'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: cyan500,
    primary2Color: green700,
    primary3Color: green100,
  }
})


class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }
  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});

    render() {

      return (
  <MuiThemeProvider muiTheme={muiTheme}>
      <div>
    <AppBar
      title="FHIR Redux"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
      onLeftIconButtonTouchTap={this.handleToggle}
    />
    <Drawer
      docked={false}
      width={200}
      open={this.state.open}
      onRequestChange={(open) => this.setState({open})}
      >
      <MenuItem onTouchTap={this.handleClose}>
        <Link to={'/'}>Home </Link>
        </MenuItem>
      <MenuItem onTouchTap={this.handleClose}>
        <Link to={'/patient'}>Profile </Link>
      </MenuItem>
      <MenuItem onTouchTap={this.handleClose}>
        <Link to={'/woundcare'}>WoundCare </Link>
      </MenuItem>
      <MenuItem onTouchTap={this.handleClose}>
        <Link to={'/preop'}>PreOp </Link>
      </MenuItem>
      <MenuItem onTouchTap={this.handleClose}>
        <Link to={'/vitals'}>Vitals </Link>
      </MenuItem>
      <MenuItem onTouchTap={this.handleClose}>
      <Link to={'/r'}>R </Link>
      </MenuItem>
    </Drawer>
  </div>
</MuiThemeProvider>
)}
};

export default NavBar;
