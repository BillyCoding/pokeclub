import React from 'react';
import Dashboard from '../pages/dashboard';
import {Route, Switch} from 'react-router-dom';

const Router = () => {

  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/comparar" exact component={Dashboard} />
    </Switch>
  );
};

export default Router;
