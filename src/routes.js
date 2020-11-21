/* eslint-disable arrow-body-style */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/app';
import Home from './components/home';
import Quotes from './components/quotes';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/quote" component={Quotes} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
