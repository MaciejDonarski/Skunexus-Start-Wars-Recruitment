import { PlanetsPage, FilmsPage, ResidentsPage, PlanetDetailsPage } from '@pages/index';

import { PAGES } from './pages';

export const routes = [
  {
    path: PAGES.PLANETS_PAGE,
    component: PlanetsPage,
    exact: true,
  },
  {
    path: PAGES.FILMS_PAGE,
    component: FilmsPage,
  },
  {
    path: PAGES.RESIDENTS_PAGE,
    component: ResidentsPage,
  },
  {
    path: PAGES.PLANET_DETAILS_PAGE,
    component: PlanetDetailsPage,
  },
];
