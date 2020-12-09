import React from 'react';
import {
  BrowserRouter as Router, Switch, Redirect,
} from 'react-router-dom';

import { PlanetsPage, FilmsPage, ResidentsPage, PlanetDetailsPage } from '@pages/index';
import { ExtendedRouter } from '@wellyes/react-router-extended';
import { PAGES } from './pages';

export const BrowserRouter = () => (
  <Router>
    <Switch>
      {
        // MORE DETAILED EXAMPLE
        // https://medium.com/aisnovations/react-router-extended-how-to-make-app-routing-easier-while-keeping-it-standardized-c87a88821234
        // this router have guards, resolvers and logic bellow could be done much better,
        // was in hurry
      }
      <ExtendedRouter exact path={PAGES.PLANETS_PAGE} component={PlanetsPage} />
      <ExtendedRouter exact path={PAGES.FILMS_PAGE} component={FilmsPage} />
      <ExtendedRouter exact path={PAGES.RESIDENTS_PAGE} component={ResidentsPage} />
      <ExtendedRouter exact path={PAGES.PLANET_DETAILS_PAGE} component={PlanetDetailsPage} />
      <Redirect exact from="/" to={PAGES.PLANETS_PAGE} />
    </Switch>
  </Router>
);
