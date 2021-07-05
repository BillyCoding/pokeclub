import React from 'react';
import Dashboard from '../pages/dashboard';
import Pokemon from '../pages/pokemon';
import Login from '../pages/login';
import {Route, Switch} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

const Router = () => {

  return (
    <Switch>
      <Route path="/login" exact component={Login} />
      <PrivateRoute path="/" exact component={Dashboard} />
      <PrivateRoute path="/pokemon/:pokemonId" exact component={Pokemon} />
    </Switch>
  );
};

export default Router;
