import React, { Component } from 'react';
import {browserHistory} from 'react-router'
import {Link} from '../../atoms'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { cyan500, pinkA200 } from 'material-ui/styles/colors';
import {green100, green500, green700} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const linkTo = (location) => (e) => browserHistory.push(location);
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: cyan500,
    primary2Color: green700,
    primary3Color: green100,
  }
})
class LoginContainer extends Component {
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
          <RaisedButton
            label="Menu"
            onClick={this.handleToggle}
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
              <Link to={'/patient'}>Patient </Link>
            </MenuItem>
            <MenuItem onTouchTap={this.handleClose}>
            <Link to={'/login'}>Logout </Link>
            </MenuItem>
          </Drawer>
        </div>
          </MuiThemeProvider>
    );
  }
}

export default LoginContainer;
