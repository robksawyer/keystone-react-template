import React from 'react';
import { Switch, Route } from 'react-router-dom';

// components
import App from './App.jsx';
import User from './components/User';
import Users from './components/Users';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={App}/>
    <Route path='/users' component={Users}/>
    <Route path='/users/:id' component={User}/>
  </Switch>
);

export default Routes;
