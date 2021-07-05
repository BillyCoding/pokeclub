import React from 'react';
import Dashboard from '../pages/dashboard';
import Pokemon from '../pages/pokemon';
import {Route, Switch} from 'react-router-dom';

const Router = () => {

  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/pokemon/:pokemonId" exact component={Pokemon} />
    </Switch>
  );
};

export default Router;
