import React from 'react';
import {
  BrowserRouter as Router, Switch, Redirect, Route,
} from 'react-router-dom';

import { SecuredLayout } from './secured-layout';
import { PAGES, PREFIX } from './pages';

export const BrowserRouter = () => (
  <Router>
    <Switch>
      {
        // MORE DETAILED EXAMPLE
        // https://medium.com/aisnovations/react-router-extended-how-to-make-app-routing-easier-while-keeping-it-standardized-c87a88821234
        // this router have guards, resolvers and logic bellow could be done much better,
        // was in hurry
      }
      <Route path={`${PREFIX}/*`} component={SecuredLayout} />
      <Redirect exact from="/" to={PAGES.PLANETS_PAGE} />
    </Switch>
  </Router>
);
