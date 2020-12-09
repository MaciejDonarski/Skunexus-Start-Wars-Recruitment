import { createSelector } from 'reselect';

export const getPlanetsState = (state) => state.planets;

export const getPlanets = createSelector(getPlanetsState, ({ loading, errors, planets }) => ({
  loading,
  errors,
  planets,
}));

export const getFilmsWithPlanet = createSelector(getPlanetsState, ({ films }) => ({
  films,
}));

export const getResidentsWithPlanet = createSelector(getPlanetsState, ({ residents }) => ({
  residents,
}));

export const getPlanet = createSelector(getPlanetsState, ({ planet }) => ({
  planet,
}));
