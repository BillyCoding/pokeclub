import React from 'react';
import Dashboard from '../pages/dashboard';
import {Route, Switch} from 'react-router-dom';

const Router = () => {

  return (
    <Switch>
      <Route path="/" component={Dashboard} />
    </Switch>
  );
};

export default Router;
