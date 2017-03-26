import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import configureStore from './store/'
import './index.css';
import {IndexRedirect,IndexRoute, Router, Route, browserHistory} from 'react-router'
import App from './App.js'
import {syncHistoryWithStore} from'react-router-redux'
import HomeContainer from './components/pages/HomeContainer'
import LoginContainer from './components/pages/LoginContainer'
import PatientContainer from './components/pages/PatientContainer'
import PreOpContainer from './components/pages/PreOpContainer'
import VitalsContainer from './components/pages/VitalsContainer'
import WoundCareContainer from './components/pages/WoundCareContainer'
import RContainer from './components/pages/RContainer'
import RHome from './components/pages/RHome'

const Root = () => {
const store = configureStore()
  return (
    <Provider store={store}>
      <Router history={browserHistory} >
      <Route path="/" component={App}>
        <IndexRoute component={HomeContainer}/>
        <Route path='patient' component={PatientContainer} />
        <Route path='woundcare' component={WoundCareContainer} />
        <Route path='preop' component={PreOpContainer} />
        <Route path='vitals' component={VitalsContainer} />
        <Route path='r' component={RContainer} />
        <Route path='rhome' component={RHome} />
        </Route>
        <Route path='login' component={LoginContainer}>
        </Route>
      </Router>
    </Provider>
  );
}

ReactDOM.render(<Root />, document.getElementById('root'));
