import React from 'react';
import { Switch, Route } from 'react-router-dom';

// components
import App from './App.jsx';
import User from './components/User';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={App}/>
    <Route path='/users/:id' component={User}/>
  </Switch>
);

export default Routes;
