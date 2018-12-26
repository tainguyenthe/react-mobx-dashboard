import React from "react";
import { Route, Switch } from "react-router";
import Dashboard from './components/dashboard/Dashboard';

export default () =>
  <Switch>
    <Route path="/" exact component={Dashboard} />
  </Switch>;