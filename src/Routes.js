import React from 'react';
import { Route, Switch } from 'react-router-dom';
import * as urls from './constants/urls';
import HomePage from './pages/HomePage';

const Routes = () => (
  <Switch>
    <Route exact path={urls.HOME} component={HomePage} />
    {/* <Route component={PageNotFound} /> */}
  </Switch>
);

export default Routes;
