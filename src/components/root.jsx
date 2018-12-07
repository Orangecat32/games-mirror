import React from 'react';
import { Provider } from "react-redux";
import { Router, Route, browserHistory } from 'react-router'
import App from './App/App';
import RapperApp from './Rappers/RapperApp/RapperApp';


const Root = ({store}) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App} />
      <Route path='/rappers' component={RapperApp} />
    </Router>
  </Provider>
);

export default Root;
