import { actionCreatorFactory, initWorker } from '@wellyes/redux-kit';
import axios from '@utils/axios';

const payloadedWorker = initWorker(axios);
const actionCreator = actionCreatorFactory('PLANETS');

export const getPlanets = actionCreator.async('GET_PLANETS');
export const getPlanet = actionCreator.async('GET_PLANET');
export const setFilms = actionCreator('SET_FILMS');
export const setResidents = actionCreator('SET_RESIDENTS');

export const getPlanetsWorker = (query) => payloadedWorker(getPlanets, `/planets?${query}`, 'get');
export const getPlanetWorker = (id) => payloadedWorker(getPlanet, `/planets/${id}`, 'get');
